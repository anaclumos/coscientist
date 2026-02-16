import { eq } from "drizzle-orm"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { organizationSettings } from "@/lib/db/schema"

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const orgId = session.session.activeOrganizationId
  if (!orgId) {
    return NextResponse.json(
      { error: "No active organization" },
      { status: 403 }
    )
  }

  const { apiKey } = await request.json()

  if (!apiKey || typeof apiKey !== "string") {
    return NextResponse.json({ error: "Invalid API key" }, { status: 400 })
  }

  await db
    .insert(organizationSettings)
    .values({
      id: crypto.randomUUID(),
      organizationId: orgId,
      openaiApiKey: apiKey,
      hasOpenaiKey: true,
    })
    .onConflictDoUpdate({
      target: organizationSettings.organizationId,
      set: {
        openaiApiKey: apiKey,
        hasOpenaiKey: true,
        updatedAt: new Date(),
      },
    })

  return NextResponse.json({ success: true })
}

export async function DELETE() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const orgId = session.session.activeOrganizationId
  if (!orgId) {
    return NextResponse.json(
      { error: "No active organization" },
      { status: 403 }
    )
  }

  await db
    .update(organizationSettings)
    .set({
      openaiApiKey: null,
      hasOpenaiKey: false,
      updatedAt: new Date(),
    })
    .where(eq(organizationSettings.organizationId, orgId))

  return NextResponse.json({ success: true })
}

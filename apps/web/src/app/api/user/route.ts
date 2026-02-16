import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({
    id: session.user.id,
    firstName: session.user.name?.split(" ")[0] || null,
    lastName: session.user.name?.split(" ").slice(1).join(" ") || null,
    email: session.user.email,
  })
}

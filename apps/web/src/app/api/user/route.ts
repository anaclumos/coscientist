import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await currentUser()

  return NextResponse.json({
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.emailAddresses[0]?.emailAddress,
  })
}

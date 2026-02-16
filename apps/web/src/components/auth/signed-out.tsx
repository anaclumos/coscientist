"use client"

import { useSession } from "@/lib/auth-client"

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession()

  if (isPending || session) {
    return null
  }

  return <>{children}</>
}

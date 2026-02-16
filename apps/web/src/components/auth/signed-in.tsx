"use client"

import { useSession } from "@/lib/auth-client"

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession()

  if (isPending || !session) {
    return null
  }

  return <>{children}</>
}

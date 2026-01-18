"use client"

import { useUser } from "@clerk/nextjs"

export function UserGreeting() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return <div className="text-sm text-muted-foreground">Loading...</div>
  }

  if (!isSignedIn) {
    return <div className="text-sm text-muted-foreground">Not signed in</div>
  }

  return (
    <div className="text-sm">
      Welcome, <span className="font-medium">{user.firstName}</span>!
    </div>
  )
}

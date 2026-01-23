"use client"

import type { Id } from "@/convex/_generated/dataModel"
import { usePresence } from "@/hooks/use-presence"
import { Facepile } from "./facepile"

interface PresenceExampleProps {
  documentId: Id<"blocks">
}

export function PresenceExample({ documentId }: PresenceExampleProps) {
  const users = usePresence({
    documentId,
    status: "online",
    enabled: true,
  })

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">
        {users.length} {users.length === 1 ? "user" : "users"} online
      </span>
      <Facepile users={users} />
    </div>
  )
}

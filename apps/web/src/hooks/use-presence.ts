import { useMutation, useQuery } from "convex/react"
import { useEffect, useRef } from "react"
import { api } from "@/convex/_generated/api"
import type { Id } from "@/convex/_generated/dataModel"

const HEARTBEAT_INTERVAL_MS = 5000

interface UsePresenceOptions {
  documentId: Id<"blocks">
  status?: "editing" | "online" | "idle"
  cursorPos?: any
  enabled?: boolean
}

export function usePresence({
  documentId,
  status = "online",
  cursorPos,
  enabled = true,
}: UsePresenceOptions) {
  const updatePresence = useMutation(api.presence.updatePresence)
  const leaveDocument = useMutation(api.presence.leaveDocument)
  const presence = useQuery(
    api.presence.getPresence,
    enabled ? { documentId } : "skip"
  )

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const statusRef = useRef(status)
  const cursorPosRef = useRef(cursorPos)

  statusRef.current = status
  cursorPosRef.current = cursorPos

  useEffect(() => {
    if (!enabled) {
      return
    }

    const sendHeartbeat = () => {
      updatePresence({
        documentId,
        status: statusRef.current,
        cursorPos: cursorPosRef.current,
      }).catch((error) => {
        console.error("Failed to update presence:", error)
      })
    }

    sendHeartbeat()

    intervalRef.current = setInterval(sendHeartbeat, HEARTBEAT_INTERVAL_MS)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      leaveDocument({ documentId }).catch((error) => {
        console.error("Failed to leave document:", error)
      })
    }
  }, [documentId, enabled, updatePresence, leaveDocument])

  return presence ?? []
}

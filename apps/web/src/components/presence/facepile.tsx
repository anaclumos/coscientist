"use client"

import { AnimatePresence, motion } from "motion/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { springSubtle } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface PresenceUser {
  _id: string
  userId: string
  status: string
  lastActive: number
}

interface FacepileProps {
  users: PresenceUser[]
  maxVisible?: number
  className?: string
}

const MAX_VISIBLE_DEFAULT = 5

function getInitials(userId: string): string {
  const parts = userId.split(/[@._-]/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return userId.slice(0, 2).toUpperCase()
}

function getColorFromUserId(userId: string): string {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-indigo-500",
    "bg-red-500",
  ]

  let hash = 0
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

function getStatusIndicatorColor(status: string): string {
  switch (status) {
    case "editing":
      return "bg-green-500"
    case "online":
      return "bg-blue-500"
    case "idle":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

export function Facepile({
  users,
  maxVisible = MAX_VISIBLE_DEFAULT,
  className,
}: FacepileProps) {
  const prefersReducedMotion = useReducedMotion()
  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle

  const visibleUsers = users.slice(0, maxVisible)
  const overflowCount = Math.max(0, users.length - maxVisible)

  if (users.length === 0) {
    return null
  }

  return (
    <div
      aria-label={`${users.length} active user${users.length !== 1 ? "s" : ""}`}
      className={cn("flex items-center", className)}
      role="list"
    >
      <AnimatePresence mode="popLayout">
        {visibleUsers.map((user, index) => (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
            exit={{ opacity: 0, scale: 0.8 }}
            initial={{ opacity: 0, scale: 0.8 }}
            key={user._id}
            layout
            role="listitem"
            style={{
              zIndex: visibleUsers.length - index,
              marginLeft: index === 0 ? 0 : -8,
            }}
            transition={transition}
          >
            <div
              aria-label={`${user.userId} (${user.status})`}
              className={cn(
                "flex size-8 items-center justify-center rounded-full border-2 border-background text-xs font-medium text-white",
                getColorFromUserId(user.userId)
              )}
              title={`${user.userId} (${user.status})`}
            >
              {getInitials(user.userId)}
            </div>

            <div
              className={cn(
                "absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background",
                getStatusIndicatorColor(user.status)
              )}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {overflowCount > 0 && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          aria-label={`${overflowCount} more user${overflowCount > 1 ? "s" : ""}`}
          className="relative flex size-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-foreground"
          initial={{ opacity: 0, scale: 0.8 }}
          layout
          role="listitem"
          style={{
            zIndex: 0,
            marginLeft: -8,
          }}
          title={`${overflowCount} more user${overflowCount > 1 ? "s" : ""}`}
          transition={transition}
        >
          +{overflowCount}
        </motion.div>
      )}
    </div>
  )
}

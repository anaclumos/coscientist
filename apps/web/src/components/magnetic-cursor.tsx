"use client"

import { useReducedMotion } from "@coscientist/web/hooks/use-reduced-motion"
import { Cursor, useCursorState } from "motion-plus/react"

export function MagneticCursor() {
  const prefersReducedMotion = useReducedMotion()
  const { zone } = useCursorState()

  if (prefersReducedMotion) {
    return null
  }

  const isOverlay = zone === "overlay"

  return (
    <Cursor
      className="magnetic-cursor"
      magnetic
      style={{
        borderRadius: 10,
        mixBlendMode: isOverlay ? "difference" : "multiply",
      }}
      variants={{
        default: {
          backgroundColor: isOverlay ? "#ededed" : "#7e7e7e",
        },
        pointer: {
          backgroundColor: isOverlay ? "#ffffff" : "#dddddd",
        },
      }}
    />
  )
}

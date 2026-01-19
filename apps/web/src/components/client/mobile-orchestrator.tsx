"use client"

import { useCallback, useMemo } from "react"
import type { NotePaneData } from "@/lib/types"
import { useNoteStackContext } from "./note-stack-provider"

interface MobileOrchestratorProps {
  allNotesData: NotePaneData[]
}

export function useMobileData({ allNotesData }: MobileOrchestratorProps) {
  const { stack, pushNote, setStack } = useNoteStackContext()

  const panesData = useMemo(() => {
    const paneDataMap = new Map<string, NotePaneData>()
    for (const pane of allNotesData) {
      paneDataMap.set(pane.slug, pane)
    }
    return stack
      .map((slug) => paneDataMap.get(slug))
      .filter((pane): pane is NotePaneData => pane !== undefined)
  }, [stack, allNotesData])

  const handleLinkClick = useCallback(
    (slug: string, fromPaneIndex: number) => {
      pushNote(slug, fromPaneIndex)
    },
    [pushNote]
  )

  const handleClosePane = useCallback(
    (index: number) => {
      if (index === 0 || stack.length <= 1) {
        return
      }
      const newStack = [...stack.slice(0, index), ...stack.slice(index + 1)]
      const newFocusIndex = Math.min(index, newStack.length - 1)
      setStack(newStack, newFocusIndex)
    },
    [stack, setStack]
  )

  return useMemo(
    () => ({
      panes: panesData,
      onLinkClick: handleLinkClick,
      onClose: handleClosePane,
    }),
    [panesData, handleLinkClick, handleClosePane]
  )
}

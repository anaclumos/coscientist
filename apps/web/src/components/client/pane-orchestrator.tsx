"use client"

import { AnimatePresence, LayoutGroup } from "motion/react"
import { memo, useCallback, useMemo } from "react"
import { AllNotesList } from "@/components/notes-list/all-notes-list"
import { NotePane } from "@/components/pane/note-pane"
import { useSetKeyboardFocusIndex } from "@/lib/stores/pane-ui-store"
import type { NotePaneData, NoteSummary } from "@/lib/types"
import { useNoteStackContext } from "./note-stack-provider"

interface PaneOrchestratorProps {
  allNotesData: NotePaneData[]
  noteSummaries: NoteSummary[]
}

export const PaneOrchestrator = memo(function PaneOrchestrator({
  allNotesData,
  noteSummaries,
}: PaneOrchestratorProps) {
  const { stack, pushNote, focusPane, setStack } = useNoteStackContext()
  const setKeyboardFocusIndex = useSetKeyboardFocusIndex()

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

  const handleExpandPane = useCallback(
    (index: number) => {
      setKeyboardFocusIndex(index)
      if (index < stack.length) {
        focusPane(index)
      }
    },
    [focusPane, stack.length, setKeyboardFocusIndex]
  )

  const handleAllNotesClick = useCallback(
    (slug: string) => {
      pushNote(slug, stack.length - 1)
    },
    [pushNote, stack.length]
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

  return (
    <LayoutGroup>
      <AnimatePresence initial={false} mode="popLayout">
        {panesData.map((pane, index) => (
          <NotePane
            backlinks={pane.backlinks}
            contentHtml={pane.contentHtml}
            description={pane.description}
            index={index}
            isClosable={index > 0}
            key={`pane-${index}-${pane.slug}`}
            onClose={handleClosePane}
            onExpand={handleExpandPane}
            onLinkClick={handleLinkClick}
            slug={pane.slug}
            title={pane.title}
          />
        ))}
        <AllNotesList
          currentStack={stack}
          index={panesData.length}
          key="all-notes-list"
          notes={noteSummaries}
          onExpand={handleExpandPane}
          onNoteClick={handleAllNotesClick}
        />
      </AnimatePresence>
    </LayoutGroup>
  )
})

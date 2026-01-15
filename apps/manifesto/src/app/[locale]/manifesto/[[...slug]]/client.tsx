"use client"

import { AnimatePresence, LayoutGroup } from "motion/react"
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AllNotesList } from "@/components/all-notes-list"
import { useKeyboardNavigation } from "@/components/keyboard-navigation"
import { NotePane } from "@/components/note-pane"
import { PaneContainer } from "@/components/pane-container"
import { NotePreviewProvider } from "@/components/preview-link"
import { Spinner } from "@/components/ui/spinner"
import type { NotePaneData, NoteSummary } from "@/lib/types"
import { useNoteStack } from "@/lib/use-note-stack"

interface NotesPageClientProps {
  rootSlug: string
  noteSummaries: NoteSummary[]
  initialPanesData: NotePaneData[]
}

function NotesContent({
  rootSlug,
  noteSummaries,
  initialPanesData,
}: NotesPageClientProps) {
  const { stack, focusIndex, pushNote, popNote, focusPane, setStack } =
    useNoteStack(rootSlug)
  const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(() => focusIndex)
  const scrollToPaneRef = useRef<((index: number) => void) | null>(null)

  useEffect(() => {
    const maxIndex = Math.max(0, initialPanesData.length - 1)
    const nextIndex = Math.min(Math.max(0, focusIndex), maxIndex)
    setKeyboardFocusIndex((prev) => (prev === nextIndex ? prev : nextIndex))
  }, [focusIndex, initialPanesData.length])

  const handleScrollToPane = useCallback((index: number) => {
    scrollToPaneRef.current?.(index)
  }, [])

  useKeyboardNavigation({
    stackLength: stack.length,
    focusIndex: keyboardFocusIndex,
    maxFocusIndex: initialPanesData.length,
    onFocusChange: setKeyboardFocusIndex,
    onPopStack: popNote,
    onScrollToPane: handleScrollToPane,
  })

  const summariesMap = useMemo(() => {
    const map = new Map<string, NoteSummary>()
    for (const summary of noteSummaries) {
      map.set(summary.slug, summary)
    }
    return map
  }, [noteSummaries])

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
    [focusPane, stack.length]
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

  const mobileData = useMemo(() => {
    return {
      panes: initialPanesData,
      onLinkClick: handleLinkClick,
      onClose: handleClosePane,
    }
  }, [initialPanesData, handleLinkClick, handleClosePane])

  return (
    <NotePreviewProvider summariesMap={summariesMap}>
      <PaneContainer
        focusIndex={focusIndex}
        mobileData={mobileData}
        scrollToPaneRef={scrollToPaneRef}
      >
        <LayoutGroup>
          <AnimatePresence initial={false} mode="popLayout">
            {initialPanesData.map((pane, index) => (
              <NotePane
                backlinks={pane.backlinks}
                contentHtml={pane.contentHtml}
                description={pane.description}
                index={index}
                isClosable={index > 0}
                isFocused={index === keyboardFocusIndex}
                key={`pane-${index}-${pane.slug}`}
                onClose={() => handleClosePane(index)}
                onExpand={() => handleExpandPane(index)}
                onLinkClick={handleLinkClick}
                slug={pane.slug}
                title={pane.title}
              />
            ))}
            <AllNotesList
              currentStack={stack}
              index={initialPanesData.length}
              key="all-notes-list"
              notes={noteSummaries}
              onExpand={() => handleExpandPane(initialPanesData.length)}
              onNoteClick={handleAllNotesClick}
            />
          </AnimatePresence>
        </LayoutGroup>
      </PaneContainer>
    </NotePreviewProvider>
  )
}

export function NotesPageClient(props: NotesPageClientProps) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center bg-muted">
          <Spinner size="lg" />
        </div>
      }
    >
      <NotesContent {...props} />
    </Suspense>
  )
}

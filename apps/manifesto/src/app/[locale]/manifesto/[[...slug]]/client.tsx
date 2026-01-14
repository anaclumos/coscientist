"use client"

import { AnimatePresence, LayoutGroup } from "motion/react"
import { Suspense, useCallback, useMemo, useRef, useState } from "react"
import { AllNotesList } from "@/components/all-notes-list"
import { useKeyboardNavigation } from "@/components/keyboard-navigation"
import { NotePane } from "@/components/note-pane"
import { PaneContainer } from "@/components/pane-container"
import { NotePreviewProvider } from "@/components/preview-link"
import { Spinner } from "@/components/ui/spinner"
import type { BacklinkInfo, Note } from "@/lib/types"
import { useNoteStack } from "@/lib/use-note-stack"

interface NotesPageClientProps {
  rootSlug: string
  allNotes: Note[]
  initialNotesData: Array<{
    note: Note
    backlinks: BacklinkInfo[]
  }>
}

function NotesContent({
  rootSlug,
  allNotes,
  initialNotesData,
}: NotesPageClientProps) {
  const { stack, focusIndex, pushNote, popNote, focusPane, setStack } =
    useNoteStack(rootSlug)
  const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(() =>
    Math.max(0, initialNotesData.length - 1)
  )
  const [prevLength, setPrevLength] = useState(initialNotesData.length)
  const scrollToPaneRef = useRef<((index: number) => void) | null>(null)

  if (prevLength !== initialNotesData.length) {
    setPrevLength(initialNotesData.length)
    if (initialNotesData.length > 0) {
      setKeyboardFocusIndex(initialNotesData.length - 1)
    }
  }

  const handleScrollToPane = useCallback((index: number) => {
    scrollToPaneRef.current?.(index)
  }, [])

  useKeyboardNavigation({
    stackLength: stack.length,
    focusIndex: keyboardFocusIndex,
    maxFocusIndex: initialNotesData.length,
    onFocusChange: setKeyboardFocusIndex,
    onPopStack: popNote,
    onScrollToPane: handleScrollToPane,
  })

  const notesMap = useMemo(() => {
    const map = new Map<string, Note>()
    for (const note of allNotes) {
      map.set(note.slug, note)
    }
    return map
  }, [allNotes])

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
    const backlinksMap = new Map<string, BacklinkInfo[]>()
    const notes = initialNotesData.map((data) => {
      backlinksMap.set(data.note.slug, data.backlinks)
      return data.note
    })
    return {
      notes,
      backlinksMap,
      onLinkClick: handleLinkClick,
      onClose: handleClosePane,
    }
  }, [initialNotesData, handleLinkClick, handleClosePane])

  return (
    <NotePreviewProvider notesMap={notesMap}>
      <PaneContainer
        focusIndex={focusIndex}
        mobileData={mobileData}
        scrollToPaneRef={scrollToPaneRef}
      >
        <LayoutGroup>
          <AnimatePresence initial={false} mode="popLayout">
            {initialNotesData.map((data, index) => (
              <NotePane
                backlinks={data.backlinks}
                index={index}
                isClosable={index > 0}
                isFocused={index === keyboardFocusIndex}
                key={`pane-${index}-${data.note.slug}`}
                note={data.note}
                onClose={() => handleClosePane(index)}
                onExpand={() => handleExpandPane(index)}
                onLinkClick={handleLinkClick}
              />
            ))}
            <AllNotesList
              currentStack={stack}
              index={initialNotesData.length}
              key="all-notes-list"
              notes={allNotes}
              onExpand={() => handleExpandPane(initialNotesData.length)}
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

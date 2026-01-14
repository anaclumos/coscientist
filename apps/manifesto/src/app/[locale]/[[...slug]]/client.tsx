"use client";

import { Suspense, useMemo, useState, useCallback } from "react";
import { AnimatePresence, LayoutGroup } from "motion/react";
import type { Note, BacklinkInfo } from "@/lib/types";
import { useNoteStack } from "@/lib/use-note-stack";
import { useKeyboardNavigation } from "@/components/keyboard-navigation";
import { PaneContainer } from "@/components/pane-container";
import { NotePane } from "@/components/note-pane";
import { AllNotesList } from "@/components/all-notes-list";
import { NotePreviewProvider } from "@/components/preview-link";
import { Spinner } from "@/components/ui/spinner";

interface NotesPageClientProps {
  rootSlug: string;
  allNotes: Note[];
  initialNotesData: Array<{
    note: Note;
    backlinks: BacklinkInfo[];
  }>;
}

function NotesContent({
  rootSlug,
  allNotes,
  initialNotesData,
}: NotesPageClientProps) {
  const { stack, focusIndex, pushNote, popNote, focusPane, setStack } =
    useNoteStack(rootSlug);
  const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(() =>
    Math.max(0, initialNotesData.length - 1),
  );
  const [prevLength, setPrevLength] = useState(initialNotesData.length);

  if (prevLength !== initialNotesData.length) {
    setPrevLength(initialNotesData.length);
    if (initialNotesData.length > 0) {
      setKeyboardFocusIndex(initialNotesData.length - 1);
    }
  }

  useKeyboardNavigation({
    stackLength: stack.length,
    focusIndex: keyboardFocusIndex,
    maxFocusIndex: initialNotesData.length,
    onFocusChange: setKeyboardFocusIndex,
    onPopStack: popNote,
  });

  const notesMap = useMemo(() => {
    const map = new Map<string, Note>();
    for (const note of allNotes) {
      map.set(note.slug, note);
    }
    return map;
  }, [allNotes]);

  const handleLinkClick = useCallback(
    (slug: string, fromPaneIndex: number) => {
      pushNote(slug, fromPaneIndex);
    },
    [pushNote],
  );

  const handleExpandPane = useCallback(
    (index: number) => {
      setKeyboardFocusIndex(index);
      if (index < stack.length) {
        focusPane(index);
      }
    },
    [focusPane, stack.length],
  );

  const handleAllNotesClick = useCallback(
    (slug: string) => {
      pushNote(slug, stack.length - 1);
    },
    [pushNote, stack.length],
  );

  const handleClosePane = useCallback(
    (index: number) => {
      if (index === 0 || stack.length <= 1) return;
      const newStack = [...stack.slice(0, index), ...stack.slice(index + 1)];
      const newFocusIndex = Math.min(index, newStack.length - 1);
      setStack(newStack, newFocusIndex);
    },
    [stack, setStack],
  );

  const mobileData = useMemo(() => {
    const backlinksMap = new Map<string, BacklinkInfo[]>();
    const notes = initialNotesData.map((data) => {
      backlinksMap.set(data.note.slug, data.backlinks);
      return data.note;
    });
    return {
      notes,
      backlinksMap,
      onLinkClick: handleLinkClick,
      onClose: handleClosePane,
    };
  }, [initialNotesData, handleLinkClick, handleClosePane]);

  return (
    <NotePreviewProvider notesMap={notesMap}>
      <PaneContainer focusIndex={focusIndex} mobileData={mobileData}>
        <LayoutGroup>
          <AnimatePresence initial={false} mode="popLayout">
            {initialNotesData.map((data, index) => (
              <NotePane
                key={`pane-${stack.slice(0, index + 1).join("-")}`}
                note={data.note}
                index={index}
                isFocused={index === keyboardFocusIndex}
                isClosable={index > 0}
                backlinks={data.backlinks}
                onLinkClick={handleLinkClick}
                onExpand={() => handleExpandPane(index)}
                onClose={() => handleClosePane(index)}
              />
            ))}
            <AllNotesList
              key="all-notes-list"
              notes={allNotes}
              currentStack={stack}
              index={initialNotesData.length}
              onNoteClick={handleAllNotesClick}
              onExpand={() => handleExpandPane(initialNotesData.length)}
            />
          </AnimatePresence>
        </LayoutGroup>
      </PaneContainer>
    </NotePreviewProvider>
  );
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
  );
}

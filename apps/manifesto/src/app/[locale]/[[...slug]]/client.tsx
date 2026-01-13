"use client";

import { Suspense, useMemo, useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    if (initialNotesData.length > 0) {
      setKeyboardFocusIndex(initialNotesData.length - 1);
    }
  }, [initialNotesData.length]);

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

  return (
    <NotePreviewProvider notesMap={notesMap}>
      <PaneContainer focusIndex={focusIndex}>
        {initialNotesData.map((data, index) => (
          <NotePane
            key={`${data.note.slug}-${index}`}
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
          notes={allNotes}
          currentStack={stack}
          index={initialNotesData.length}
          onNoteClick={handleAllNotesClick}
          onExpand={() => handleExpandPane(initialNotesData.length)}
        />
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

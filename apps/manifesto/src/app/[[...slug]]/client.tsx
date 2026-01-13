"use client";

import { Suspense, useMemo, useState, useEffect, useCallback } from "react";
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
  const [dragState, setDragState] = useState<{
    index: number;
    startX: number;
  } | null>(null);

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

  const handleReorder = useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === toIndex || fromIndex === 0 || toIndex === 0) return;
      const newStack = [...stack];
      const [moved] = newStack.splice(fromIndex, 1);
      newStack.splice(toIndex, 0, moved);
      setStack(newStack, toIndex);
    },
    [stack, setStack],
  );

  const createDragHandleProps = useCallback(
    (index: number) => {
      if (index === 0) return undefined;

      return {
        onPointerDown: (e: React.PointerEvent) => {
          if (e.button !== 0) return;
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          setDragState({ index, startX: e.clientX });
        },
        onPointerUp: (e: React.PointerEvent) => {
          if (!dragState || dragState.index !== index) return;
          e.currentTarget.releasePointerCapture(e.pointerId);

          const deltaX = e.clientX - dragState.startX;
          const rootStyles = getComputedStyle(document.documentElement);
          const rootFontSize = Number.parseFloat(rootStyles.fontSize) || 16;
          const paneMinWidthRem =
            Number.parseFloat(
              rootStyles.getPropertyValue("--pane-min-width"),
            ) || 20;
          const paneWidth = paneMinWidthRem * rootFontSize;
          const threshold = paneWidth / 2;

          if (Math.abs(deltaX) > threshold) {
            const direction = deltaX > 0 ? 1 : -1;
            const newIndex = Math.max(
              1,
              Math.min(stack.length - 1, index + direction),
            );
            if (newIndex !== index) {
              handleReorder(index, newIndex);
            }
          }

          setDragState(null);
        },
        onPointerCancel: () => {
          setDragState(null);
        },
      };
    },
    [dragState, stack.length, handleReorder],
  );

  return (
    <NotePreviewProvider notesMap={notesMap}>
      <PaneContainer focusIndex={focusIndex}>
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {initialNotesData.map((data, index) => {
              return (
                <NotePane
                  key={`${data.note.slug}-${index}`}
                  note={data.note}
                  index={index}
                  isFocused={index === keyboardFocusIndex}
                  isClosable={index > 0}
                  isDraggable={index > 0}
                  backlinks={data.backlinks}
                  onLinkClick={handleLinkClick}
                  onExpand={() => handleExpandPane(index)}
                  onClose={() => handleClosePane(index)}
                  dragHandleProps={createDragHandleProps(index)}
                />
              );
            })}
          </AnimatePresence>
        </LayoutGroup>
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

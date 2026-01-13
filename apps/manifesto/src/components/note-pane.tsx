"use client";

import { useCallback } from "react";
import { X } from "lucide-react";
import type { Note, BacklinkInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoteContent } from "./note-content";
import { BacklinksSection } from "./backlinks-section";
import { usePaneCollapse } from "./pane-container";
import { PaneSpine } from "./pane-spine";

interface NotePaneProps {
  note: Note;
  index: number;
  isFocused?: boolean;
  isClosable?: boolean;
  backlinks: BacklinkInfo[];
  onLinkClick: (slug: string, fromIndex: number) => void;
  onExpand?: () => void;
  onClose?: () => void;
}

export function NotePane({
  note,
  index,
  isFocused = false,
  isClosable = false,
  backlinks,
  onLinkClick,
  onExpand,
  onClose,
}: NotePaneProps) {
  const { collapsedIndices } = usePaneCollapse();
  const isCollapsed = collapsedIndices.has(index);

  const handleLinkClick = useCallback(
    (slug: string) => {
      onLinkClick(slug, index);
    },
    [onLinkClick, index],
  );

  return (
    <article
      data-pane
      data-index={index}
      tabIndex={-1}
      aria-label={note.title}
      className={cn(
        "flex-shrink-0 w-full md:w-1/3 md:min-w-pane-min h-full overflow-hidden",
        "bg-card border-l border-border",
        "sticky left-0",
        "first:border-l-0",
        "snap-start md:snap-align-none",
        isFocused && "ring-2 ring-primary ring-inset",
      )}
      style={{
        left: `calc(${index} * var(--pane-spine-width))`,
        zIndex: `calc(var(--z-pane) + ${index})`,
      }}
    >
      {isCollapsed && (
        <PaneSpine
          index={index}
          title={note.title}
          showIndex={index > 0}
          isClosable={isClosable}
          onClose={onClose}
        />
      )}

      <div
        className="absolute top-0 left-0 bottom-0 w-full bg-card group"
        style={{
          transform: isCollapsed
            ? "translateX(var(--pane-spine-width))"
            : undefined,
        }}
      >
        {isCollapsed && (
          <button
            type="button"
            onClick={onExpand}
            className="absolute inset-0 z-overlay cursor-pointer"
            aria-label={`Expand ${note.title}`}
          >
            <span className="sr-only">Expand pane</span>
          </button>
        )}
        {isCollapsed && (
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border z-sticky" />
        )}
        <ScrollArea className="h-full">
          <NoteContent note={note} onLinkClick={handleLinkClick} />

          {backlinks.length > 0 && (
            <div className="px-8 pb-8">
              <BacklinksSection
                backlinks={backlinks}
                onBacklinkClick={handleLinkClick}
              />
            </div>
          )}
        </ScrollArea>

        {!isCollapsed && isClosable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className={cn(
              "absolute top-2 left-2.5 z-overlay",
              "size-5 rounded-full flex items-center justify-center",
              "bg-primary/10 text-primary text-xs font-semibold tabular-nums",
              "group-hover:bg-red-500 group-hover:text-white",
              "transition-colors cursor-pointer",
            )}
            aria-label={`Close ${note.title}`}
          >
            <span className="group-hover:hidden">{index}</span>
            <X className="size-3 hidden group-hover:block" />
          </button>
        )}
      </div>
    </article>
  );
}

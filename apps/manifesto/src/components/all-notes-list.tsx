"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import type { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import { buildNoteHref } from "@/lib/note-links";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PreviewLink } from "./preview-link";
import { usePaneCollapse } from "./pane-container";
import { PaneSpine } from "./pane-spine";

interface AllNotesListProps {
  notes: Note[];
  currentStack: string[];
  index: number;
  onNoteClick: (slug: string) => void;
  onExpand?: () => void;
}

export function AllNotesList({
  notes,
  currentStack,
  index,
  onNoteClick,
  onExpand,
}: AllNotesListProps) {
  const { collapsedIndices } = usePaneCollapse();
  const isCollapsed = collapsedIndices.has(index);
  const t = useTranslations("allNotes");
  const tPane = useTranslations("notePane");

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => a.title.localeCompare(b.title)),
    [notes],
  );

  const stackIndexBySlug = useMemo(() => {
    const map = new Map<string, number>();
    for (let i = 0; i < currentStack.length; i += 1) {
      const slug = currentStack[i];
      if (!map.has(slug)) {
        map.set(slug, i);
      }
    }
    return map;
  }, [currentStack]);

  return (
    <aside
      data-pane
      data-index={index}
      className={cn(
        "flex-shrink-0 w-full md:w-1/3 md:min-w-pane-min h-full overflow-hidden",
        "bg-card border-l border-border",
        "sticky left-0",
      )}
      style={{
        left: `calc(${index} * var(--pane-spine-width))`,
        zIndex: `calc(var(--z-pane) + ${index})`,
      }}
    >
      {isCollapsed && (
        <PaneSpine index={index} title={t("title")} showIndex={false} />
      )}

      <div
        className="absolute top-0 left-0 bottom-0 w-full bg-card"
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
            aria-label={`${tPane("expand")} ${t("title")}`}
          >
            <span className="sr-only">{tPane("expand")}</span>
          </button>
        )}
        {isCollapsed && (
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border z-sticky" />
        )}

        <ScrollArea className="h-full">
          <div className="sticky top-0 z-sticky bg-card px-8 pt-8 pb-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">
              {t("title")}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {t("noteCount", { count: notes.length })}
            </p>
          </div>
          <div className="px-8 py-6">
            <ul className="space-y-0.5">
              {sortedNotes.map((note) => {
                const stackPosition = stackIndexBySlug.get(note.slug);
                const isInStack = stackPosition !== undefined;
                return (
                  <li key={note.slug}>
                    <PreviewLink
                      href={buildNoteHref(note.slug)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNoteClick(note.slug);
                      }}
                    >
                      <span
                        className={cn(
                          "flex items-center gap-2 py-1.5 px-2 rounded text-sm transition-colors",
                          "hover:bg-muted",
                          isInStack && "bg-primary/10 font-medium text-primary",
                        )}
                      >
                        {isInStack && (
                          <span className="flex-shrink-0 size-5 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center tabular-nums">
                            {(stackPosition ?? 0) + 1}
                          </span>
                        )}
                        <span className={cn(!isInStack && "pl-7")}>
                          {note.title}
                        </span>
                      </span>
                    </PreviewLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}

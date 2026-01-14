"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  paneContentVariants,
  paneVariants,
  spineVariants,
  springQuick,
  springSubtle,
} from "@/lib/animations";
import { buildNoteHref } from "@/lib/note-links";
import type { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import { usePaneCollapse } from "./pane-container";
import { PaneSpine } from "./pane-spine";
import { PreviewLink } from "./preview-link";

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
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("allNotes");
  const tPane = useTranslations("notePane");

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => a.title.localeCompare(b.title)),
    [notes]
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

  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle;
  const quickTransition = prefersReducedMotion ? { duration: 0 } : springQuick;

  return (
    <motion.aside
      animate="animate"
      className={cn(
        "h-full w-full flex-shrink-0 overflow-hidden md:w-1/3 md:min-w-pane-min",
        "relative border-border border-x bg-background",
        "sticky left-0"
      )}
      data-index={index}
      data-pane
      exit="exit"
      initial={prefersReducedMotion ? false : "initial"}
      layout
      style={{
        left: `calc(${index} * var(--pane-spine-width))`,
        zIndex: `calc(var(--z-pane) + ${index})`,
      }}
      transition={transition}
      variants={paneVariants}
    >
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div
          className="absolute -top-[300px] -right-[100px] h-[800px] w-[800px] opacity-0 transition-opacity duration-1000 dark:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-[300px] -left-[100px] h-[800px] w-[800px] opacity-0 transition-opacity duration-1000 dark:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <AnimatePresence>
        {isCollapsed && (
          <motion.div
            animate="visible"
            className="absolute inset-0 z-10"
            exit="hidden"
            initial="hidden"
            key="spine"
            transition={quickTransition}
            variants={spineVariants}
          >
            <PaneSpine index={index} showIndex={false} title={t("title")} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={isCollapsed ? "collapsed" : "expanded"}
        className="absolute top-0 bottom-0 left-0 h-full w-full"
        transition={transition}
        variants={paneContentVariants}
      >
        {isCollapsed && (
          <button
            aria-label={`${tPane("expand")} ${t("title")}`}
            className="absolute inset-0 z-overlay cursor-pointer"
            onClick={onExpand}
            type="button"
          >
            <span className="sr-only">{tPane("expand")}</span>
          </button>
        )}
        {isCollapsed && (
          <div className="absolute top-0 bottom-0 left-0 z-sticky w-px bg-border" />
        )}

        <ScrollArea className="relative z-0 h-full">
          <div className="sticky top-0 z-sticky border-border/50 border-b bg-background/80 px-4 pt-4 pb-2 backdrop-blur-md">
            <h2 className="font-normal text-2xl text-foreground tracking-tight dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-neutral-500 dark:bg-clip-text dark:text-transparent">
              {t("title")}
            </h2>
            <p className="mt-1 font-mono text-muted-foreground text-sm">
              {t("noteCount", { count: notes.length })}
            </p>
          </div>
          <div className="px-8 py-6">
            <ul className="space-y-1">
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
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-150",
                          "hover:bg-muted/50 dark:hover:bg-white/5",
                          isInStack
                            ? "bg-primary/5 text-foreground dark:bg-white/5"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "w-6 flex-shrink-0 font-mono text-[10px] tabular-nums",
                            isInStack
                              ? "text-primary dark:text-white/70"
                              : "text-muted-foreground/30"
                          )}
                        >
                          {isInStack
                            ? String(stackPosition + 1).padStart(2, "0")
                            : "—"}
                        </span>
                        <span className="truncate">{note.title}</span>
                      </span>
                    </PreviewLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollArea>
      </motion.div>
    </motion.aside>
  );
}

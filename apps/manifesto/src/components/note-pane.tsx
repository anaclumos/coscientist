"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconXmarkOutline18 } from "nucleo-ui-outline-18";
import { useTranslations } from "next-intl";
import type { Note, BacklinkInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  paneVariants,
  paneContentVariants,
  spineVariants,
  springSubtle,
  springQuick,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
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
  isClosable = false,
  backlinks,
  onLinkClick,
  onExpand,
  onClose,
}: NotePaneProps) {
  const { collapsedIndices } = usePaneCollapse();
  const isCollapsed = collapsedIndices.has(index);
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("notePane");

  const handleLinkClick = useCallback(
    (slug: string) => {
      onLinkClick(slug, index);
    },
    [onLinkClick, index],
  );

  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle;
  const quickTransition = prefersReducedMotion ? { duration: 0 } : springQuick;

  return (
    <motion.article
      data-pane
      data-index={index}
      tabIndex={-1}
      aria-label={note.title}
      layout
      initial={prefersReducedMotion ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={paneVariants}
      transition={transition}
      className={cn(
        "flex-shrink-0 w-full md:w-1/3 md:min-w-pane-min h-full overflow-hidden",
        "bg-background border-l border-border relative group/pane",
        "md:sticky left-0 md:left-[var(--pane-left-offset)]",
        "snap-start md:snap-align-none",
      )}
      style={
        {
          "--pane-left-offset": `calc(${index} * var(--pane-spine-width))`,
          zIndex: `calc(var(--z-pane) + ${index})`,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-[300px] -right-[100px] w-[800px] h-[800px] opacity-0 dark:opacity-100 transition-opacity duration-1000"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-[300px] -left-[100px] w-[800px] h-[800px] opacity-0 dark:opacity-100 transition-opacity duration-1000"
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
            key="spine"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={spineVariants}
            transition={quickTransition}
            className="absolute inset-0 z-10"
          >
            <PaneSpine
              index={index}
              title={note.title}
              description={note.description}
              showIndex={index > 0}
              isClosable={isClosable}
              onClose={onClose}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full h-full"
        animate={isCollapsed ? "collapsed" : "expanded"}
        variants={paneContentVariants}
        transition={transition}
      >
        {isCollapsed && (
          <button
            type="button"
            onClick={onExpand}
            className="absolute inset-0 z-overlay cursor-pointer"
            aria-label={t("expandNote", { title: note.title })}
          >
            <span className="sr-only">{t("expand")}</span>
          </button>
        )}
        {isCollapsed && (
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border z-sticky" />
        )}

        <ScrollArea className="h-full relative z-0">
          <div className="min-h-full flex flex-col">
            <header className="px-4 pt-4 pb-2">
              <h1 className="text-3xl font-normal tracking-tight text-foreground/90 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-neutral-500">
                {note.title}
              </h1>
              {note.description && (
                <p className="mt-2 text-lg text-muted-foreground/80 font-normal">
                  {note.description}
                </p>
              )}
            </header>

            <div className="flex-1">
              <NoteContent note={note} onLinkClick={handleLinkClick} />
            </div>

            {backlinks.length > 0 && (
              <footer className="px-8 py-6 border-t border-border/40">
                <BacklinksSection
                  backlinks={backlinks}
                  onBacklinkClick={handleLinkClick}
                />
              </footer>
            )}
          </div>
        </ScrollArea>

        <AnimatePresence>
          {!isCollapsed && isClosable && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={quickTransition}
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className={cn(
                "absolute top-4 right-4 z-overlay",
                "size-8 rounded-full flex items-center justify-center",
                "bg-transparent hover:bg-muted text-muted-foreground transition-colors",
                "cursor-pointer",
              )}
              aria-label={t("closeNote", { title: note.title })}
            >
              <IconXmarkOutline18 className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

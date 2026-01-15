"use client"

import { AnimatePresence, motion } from "motion/react"
import { useLocale, useTranslations } from "next-intl"
import { IconXmarkOutline18 } from "nucleo-ui-outline-18"
import { useCallback, useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import {
  paneContentVariants,
  paneVariants,
  spineVariants,
  springQuick,
  springSubtle,
} from "@/lib/animations"
import type { BacklinkInfo } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BacklinksSection } from "./backlinks-section"
import { NoteContent } from "./note-content"
import { usePaneCollapse } from "./pane-container"
import { PaneSpine } from "./pane-spine"

interface NotePaneProps {
  slug: string
  title: string
  description?: string
  contentHtml: string
  index: number
  isFocused?: boolean
  isClosable?: boolean
  backlinks: BacklinkInfo[]
  onLinkClick: (slug: string, fromIndex: number) => void
  onExpand?: () => void
  onClose?: () => void
}

export function NotePane({
  slug,
  title,
  description,
  contentHtml,
  index,
  isClosable = false,
  backlinks,
  onLinkClick,
  onExpand,
  onClose,
}: NotePaneProps) {
  const { collapsedIndices, registerPaneRef } = usePaneCollapse()
  const isCollapsed = collapsedIndices.has(index)
  const prefersReducedMotion = useReducedMotion()
  const t = useTranslations("notePane")
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const paneRef = useRef<HTMLElement>(null)

  useEffect(() => {
    registerPaneRef(index, paneRef.current)
    return () => registerPaneRef(index, null)
  }, [index, registerPaneRef])

  const handleLinkClick = useCallback(
    (slug: string) => {
      onLinkClick(slug, index)
    },
    [onLinkClick, index]
  )

  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle
  const quickTransition = prefersReducedMotion ? { duration: 0 } : springQuick

  return (
    <motion.article
      animate="animate"
      aria-label={title}
      className={cn(
        "h-full w-full flex-shrink-0 overflow-hidden md:w-1/3 md:min-w-pane-min",
        "group/pane relative border-border border-l bg-background",
        "left-0 md:sticky md:left-[var(--pane-left-offset)]",
        "snap-start md:snap-align-none"
      )}
      data-index={index}
      data-pane
      exit="exit"
      initial={prefersReducedMotion ? false : "initial"}
      layout
      ref={paneRef}
      style={
        {
          "--pane-left-offset": `calc(${index} * var(--pane-spine-width))`,
          zIndex: `calc(var(--z-pane) + ${index})`,
        } as React.CSSProperties
      }
      tabIndex={-1}
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
            <PaneSpine
              description={description}
              index={index}
              showIndex
              title={title}
            />
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
            aria-label={t("expandNote", { title })}
            className="absolute inset-0 z-overlay cursor-pointer"
            onClick={onExpand}
            type="button"
          >
            <span className="sr-only">{t("expand")}</span>
          </button>
        )}
        {isCollapsed && (
          <div className="absolute top-0 bottom-0 left-0 z-sticky w-px bg-border" />
        )}

        <ScrollArea className="relative z-0 h-full">
          <div className="flex min-h-full flex-col">
            <header className="px-4 pt-4 pb-2">
              <h1 className="font-normal text-3xl text-foreground tracking-tight dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-neutral-500 dark:bg-clip-text dark:text-transparent">
                {title}
              </h1>
              {description && (
                <p className="mt-2 font-normal text-lg text-muted-foreground">
                  {description}
                </p>
              )}
            </header>

            <div className="flex-1">
              <NoteContent
                contentHtml={contentHtml}
                onLinkClick={handleLinkClick}
              />
            </div>

            {backlinks.length > 0 && (
              <footer className="border-border/40 border-t px-8 py-6">
                <BacklinksSection
                  backlinks={backlinks}
                  onBacklinkClick={handleLinkClick}
                />
              </footer>
            )}

            <footer className="border-border/40 border-t px-8 py-4">
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href={`https://github.com/coscientist/coscientist/edit/main/apps/web/src/content/notes/${locale}/${slug}.md`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("editOnGitHub")}
                <span className="sr-only"> ({tCommon("opensInNewTab")})</span>
              </a>
            </footer>
          </div>
        </ScrollArea>

        <AnimatePresence>
          {!isCollapsed && isClosable && (
            <motion.button
              animate={{ opacity: 1, scale: 1 }}
              aria-label={t("closeNote", { title })}
              className={cn(
                "absolute top-4 right-4 z-overlay",
                "flex size-8 items-center justify-center rounded-full",
                "bg-transparent text-muted-foreground transition-colors hover:bg-muted",
                "cursor-pointer"
              )}
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                onClose?.()
              }}
              transition={quickTransition}
              type="button"
            >
              <IconXmarkOutline18 className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  )
}

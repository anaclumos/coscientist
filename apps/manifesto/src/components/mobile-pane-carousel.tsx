"use client"

import {
  AnimatePresence,
  animate,
  type MotionValue,
  motion,
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import { useTranslations } from "next-intl"
import { IconXmarkOutline18 } from "nucleo-ui-outline-18"
import { memo, useCallback, useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { springSubtle } from "@/lib/animations"
import type { BacklinkInfo, Note } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BacklinksSection } from "./backlinks-section"
import { NoteContent } from "./note-content"

interface MobilePaneCarouselProps {
  notes: Note[]
  backlinksMap: Map<string, BacklinkInfo[]>
  onLinkClick: (slug: string, fromIndex: number) => void
  onClose: (index: number) => void
  focusIndex: number
}

const paneVariants = {
  initial: { opacity: 0, scale: 0.92, x: 40 },
  animate: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.92, x: -40 },
}

function SliderNotch({
  index,
  activeIndex,
  onTap,
  ariaLabel,
}: {
  index: number
  activeIndex: MotionValue<number>
  onTap: () => void
  ariaLabel: string
}) {
  const isActive = Math.round(activeIndex.get()) === index
  const height = useSpring(isActive ? 24 : 12, { duration: 0.2, bounce: 0 })
  const opacity = useSpring(isActive ? 1 : 0.3, { duration: 0.2, bounce: 0 })

  useEffect(() => {
    return activeIndex.on("change", (v) => {
      const active = Math.round(v) === index
      animate(height, active ? 24 : 12, { duration: 0.2, bounce: 0 })
      animate(opacity, active ? 1 : 0.3, { duration: 0.2, bounce: 0 })
    })
  }, [activeIndex, index, height, opacity])

  return (
    <button
      aria-label={ariaLabel}
      className="flex h-10 touch-none items-center justify-center px-1"
      onClick={onTap}
      type="button"
    >
      <motion.div className="w-1.5 bg-foreground" style={{ height, opacity }} />
    </button>
  )
}

interface CoverflowPaneProps {
  note: Note
  index: number
  backlinks: BacklinkInfo[]
  onLinkClick: (slug: string) => void
  onClose: () => void
  isClosable: boolean
  progress: MotionValue<number>
  prefersReducedMotion: boolean
  closeLabel: string
}

function clamp(min: number, value: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

const CoverflowPane = memo(
  function CoverflowPane({
    note,
    index,
    backlinks,
    onLinkClick,
    onClose,
    isClosable,
    progress,
    prefersReducedMotion,
    closeLabel,
  }: CoverflowPaneProps) {
    const coverflowX = useTransform(progress, (p) => (index - p) * 260)

    const rotateY = useTransform(progress, (p) => {
      if (prefersReducedMotion) {
        return 0
      }
      const offset = (index - p) * 200
      return clamp(-20, offset * 0.1, 20)
    })

    const coverflowScale = useTransform(progress, (p) => {
      if (prefersReducedMotion) {
        return 1
      }
      const offset = Math.abs(index - p) * 200
      return clamp(0.8, 1 - offset * 0.001, 1)
    })

    const coverflowOpacity = useTransform(progress, (p) => {
      const offset = Math.abs(index - p) * 200
      return clamp(0.3, 1 - offset * 0.0015, 1)
    })

    const zIndex = useTransform(progress, (p) => {
      const offset = Math.abs(index - p) * 200
      return Math.max(0, Math.round(100 - offset))
    })

    const transition = prefersReducedMotion ? { duration: 0 } : springSubtle

    return (
      <motion.li
        animate="animate"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        exit="exit"
        initial={prefersReducedMotion ? false : "initial"}
        style={{ zIndex }}
        transition={transition}
        variants={paneVariants}
      >
        <motion.article
          className={cn(
            "h-full w-[92dvw]",
            "overflow-hidden rounded-2xl border border-border bg-background",
            "pointer-events-auto shadow-lg"
          )}
          style={{
            x: coverflowX,
            rotateY,
            scale: coverflowScale,
            opacity: coverflowOpacity,
            transformStyle: "preserve-3d",
            transformPerspective: 1000,
            willChange: "transform, opacity",
          }}
        >
          <ScrollArea className="h-full">
            <div className="p-5 pb-10">
              <header className="mb-4 pr-8">
                <h1 className="font-semibold text-foreground text-xl leading-snug">
                  {note.title}
                </h1>
                {note.description && (
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {note.description}
                  </p>
                )}
              </header>
              <NoteContent note={note} onLinkClick={onLinkClick} />
              {backlinks.length > 0 && (
                <footer className="mt-6 border-border/40 border-t pt-4">
                  <BacklinksSection
                    backlinks={backlinks}
                    onBacklinkClick={onLinkClick}
                  />
                </footer>
              )}
            </div>
          </ScrollArea>

          {isClosable && (
            <button
              aria-label={closeLabel}
              className="absolute top-3 right-3 z-50 flex size-7 items-center justify-center rounded-full bg-muted/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              type="button"
            >
              <IconXmarkOutline18 className="size-4" />
            </button>
          )}
        </motion.article>
      </motion.li>
    )
  },
  (prev, next) =>
    prev.note.slug === next.note.slug &&
    prev.index === next.index &&
    prev.isClosable === next.isClosable &&
    prev.prefersReducedMotion === next.prefersReducedMotion &&
    prev.closeLabel === next.closeLabel
)

export function MobilePaneCarousel({
  notes,
  backlinksMap,
  onLinkClick,
  onClose,
  focusIndex,
}: MobilePaneCarouselProps) {
  const t = useTranslations("mobileCarousel")
  const tPane = useTranslations("notePane")
  const prefersReducedMotion = useReducedMotion()
  const currentIndex = useMotionValue(focusIndex)
  const containerRef = useRef<HTMLDivElement>(null)
  const prevNotesLengthRef = useRef(notes.length)
  const prevFocusIndexRef = useRef(focusIndex)
  const prevFocusedSlugRef = useRef(notes[focusIndex]?.slug)
  const dragStartIndex = useRef(focusIndex)
  const isInitialMount = useRef(true)
  const isDragging = useRef(false)

  const animateToIndex = useCallback(
    (index: number, instant = false) => {
      const clampedIndex = Math.max(0, Math.min(index, notes.length - 1))
      if (prefersReducedMotion || instant) {
        currentIndex.set(clampedIndex)
      } else {
        animate(currentIndex, clampedIndex, {
          type: "spring",
          duration: 0.5,
          bounce: 0.12,
        })
      }
    },
    [notes.length, currentIndex, prefersReducedMotion]
  )

  const focusedSlug = notes[focusIndex]?.slug

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      currentIndex.set(focusIndex)
      dragStartIndex.current = focusIndex
      prevFocusIndexRef.current = focusIndex
      prevFocusedSlugRef.current = focusedSlug
      return
    }

    const notesAdded = notes.length > prevNotesLengthRef.current
    const focusIndexChanged = focusIndex !== prevFocusIndexRef.current
    const focusedNoteChanged = focusedSlug !== prevFocusedSlugRef.current

    prevNotesLengthRef.current = notes.length
    prevFocusIndexRef.current = focusIndex
    prevFocusedSlugRef.current = focusedSlug

    if (focusIndexChanged || focusedNoteChanged) {
      if (!isDragging.current) {
        dragStartIndex.current = focusIndex
      }
      if (notesAdded) {
        requestAnimationFrame(() => {
          animateToIndex(focusIndex)
        })
      } else {
        animateToIndex(focusIndex)
      }
    }
  }, [focusIndex, focusedSlug, notes.length, animateToIndex, currentIndex])

  const handleDragStart = useCallback(() => {
    isDragging.current = true
    dragStartIndex.current = currentIndex.get()
  }, [currentIndex])

  const handleDrag = useCallback(
    (_: unknown, info: PanInfo) => {
      const cardWidth = containerRef.current?.offsetWidth ?? 350
      const dragProgress = -info.offset.x / cardWidth
      const newIndex = dragStartIndex.current + dragProgress
      const clampedIndex = Math.max(
        -0.15,
        Math.min(newIndex, notes.length - 1 + 0.15)
      )
      currentIndex.set(clampedIndex)
    },
    [currentIndex, notes.length]
  )

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      isDragging.current = false
      const velocity = info.velocity.x
      const currentIdx = currentIndex.get()
      const cardWidth = containerRef.current?.offsetWidth ?? 350

      let targetIndex: number

      if (Math.abs(velocity) > 400) {
        targetIndex =
          velocity < 0 ? Math.ceil(currentIdx) : Math.floor(currentIdx)
      } else if (Math.abs(info.offset.x) > cardWidth * 0.15) {
        targetIndex =
          info.offset.x < 0 ? Math.ceil(currentIdx) : Math.floor(currentIdx)
      } else {
        targetIndex = Math.round(currentIdx)
      }

      const clampedTarget = Math.max(0, Math.min(targetIndex, notes.length - 1))
      dragStartIndex.current = clampedTarget
      animateToIndex(clampedTarget)
    },
    [currentIndex, animateToIndex, notes.length]
  )

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center overflow-hidden bg-background">
      <div className="flex h-10 w-full items-center justify-center px-4">
        <div className="flex h-10 items-end justify-center">
          {notes.map((note, index) => (
            <SliderNotch
              activeIndex={currentIndex}
              ariaLabel={t("goToNote", {
                position: index + 1,
                title: note.title,
              })}
              index={index}
              key={`${note.slug}-${index}`}
              onTap={() => animateToIndex(index)}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative flex w-full flex-1 cursor-grab items-center justify-center overflow-hidden active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        ref={containerRef}
        style={{ perspective: 1000 }}
      >
        <ul className="relative h-full w-full">
          <AnimatePresence initial={false} mode="sync">
            {notes.map((note, index) => (
              <CoverflowPane
                backlinks={backlinksMap.get(note.slug) || []}
                closeLabel={tPane("closeNote", { title: note.title })}
                index={index}
                isClosable={index > 0}
                key={`${note.slug}-${index}`}
                note={note}
                onClose={() => onClose(index)}
                onLinkClick={(slug) => onLinkClick(slug, index)}
                prefersReducedMotion={prefersReducedMotion}
                progress={currentIndex}
              />
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    </div>
  )
}

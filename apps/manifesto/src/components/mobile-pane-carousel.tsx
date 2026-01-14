"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
  type PanInfo,
} from "motion/react";
import type { Note, BacklinkInfo } from "@/lib/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSubtle } from "@/lib/animations";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoteContent } from "./note-content";
import { BacklinksSection } from "./backlinks-section";
import { cn } from "@/lib/utils";

interface MobilePaneCarouselProps {
  notes: Note[];
  backlinksMap: Map<string, BacklinkInfo[]>;
  onLinkClick: (slug: string, fromIndex: number) => void;
  onClose: (index: number) => void;
  focusIndex: number;
}

const paneVariants = {
  initial: { opacity: 0, scale: 0.85, x: 60 },
  animate: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.85, x: -60 },
};

function CoverflowPane({
  note,
  index,
  backlinks,
  onLinkClick,
  onClose,
  isClosable,
  progress,
  totalItems,
  onPaneClick,
}: {
  note: Note;
  index: number;
  backlinks: BacklinkInfo[];
  onLinkClick: (slug: string) => void;
  onClose: () => void;
  isClosable: boolean;
  progress: MotionValue<number>;
  totalItems: number;
  onPaneClick: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  const offset = useTransform(progress, (p) => (p - index) * 200);

  const rotateY = useTransform(
    offset,
    [-200, 0, 200],
    prefersReducedMotion ? [0, 0, 0] : [35, 0, -35],
  );
  const coverflowScale = useTransform(
    offset,
    [-200, 0, 200],
    prefersReducedMotion ? [1, 1, 1] : [0.85, 1, 0.85],
  );

  const coverflowX = useTransform(offset, (value) => -(value / 200) * 320);

  const zIndex = useTransform(offset, (value) =>
    Math.max(0, Math.round(100 - Math.abs(value))),
  );

  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle;

  return (
    <motion.li
      layout
      initial={prefersReducedMotion ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={paneVariants}
      transition={transition}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex }}
    >
      <motion.article
        onClick={onPaneClick}
        className={cn(
          "w-[90vw] h-[80vh]",
          "bg-background border border-border rounded-xl overflow-hidden",
          "shadow-xl cursor-pointer",
        )}
        style={{
          x: coverflowX,
          rotateY,
          scale: coverflowScale,
          transformStyle: "preserve-3d",
          transformPerspective: 800,
        }}
      >
        <ScrollArea className="h-full">
          <div className="p-4">
            <header className="mb-4">
              <h1 className="text-xl font-medium tracking-tight text-foreground">
                {note.title}
              </h1>
              {note.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {note.description}
                </p>
              )}
            </header>
            <NoteContent note={note} onLinkClick={onLinkClick} />
            {backlinks.length > 0 && (
              <footer className="mt-4 pt-4 border-t border-border/40">
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
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-2 right-2 size-6 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-50"
            aria-label={`Close ${note.title}`}
          >
            ×
          </button>
        )}
      </motion.article>
    </motion.li>
  );
}

export function MobilePaneCarousel({
  notes,
  backlinksMap,
  onLinkClick,
  onClose,
  focusIndex,
}: MobilePaneCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const sliderX = useMotionValue(0);
  const isDraggingSlider = React.useRef(false);
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const prevNotesLengthRef = React.useRef(notes.length);

  const SLIDER_ITEM_WIDTH = 16;
  const SLIDER_GAP = 6;
  const sliderTotalWidth =
    notes.length * SLIDER_ITEM_WIDTH + (notes.length - 1) * SLIDER_GAP;
  const maxSliderDrag = sliderTotalWidth - SLIDER_ITEM_WIDTH;

  const animateToIndex = React.useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, notes.length - 1));
      const targetSliderX = clampedIndex * (SLIDER_ITEM_WIDTH + SLIDER_GAP);

      if (prefersReducedMotion) {
        progress.set(clampedIndex);
        sliderX.set(targetSliderX);
      } else {
        animate(progress, clampedIndex, {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
        });
        animate(sliderX, targetSliderX, {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
        });
      }
    },
    [notes.length, progress, sliderX, prefersReducedMotion],
  );

  React.useEffect(() => {
    const notesAdded = notes.length > prevNotesLengthRef.current;
    prevNotesLengthRef.current = notes.length;

    if (notesAdded) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          animateToIndex(focusIndex);
        });
      });
    } else {
      animateToIndex(focusIndex);
    }
  }, [focusIndex, notes.length, animateToIndex]);

  const handleSliderDrag = React.useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      isDraggingSlider.current = true;
      const newX = Math.max(
        0,
        Math.min(sliderX.get() + info.delta.x, maxSliderDrag),
      );
      sliderX.set(newX);

      const newProgress = newX / (SLIDER_ITEM_WIDTH + SLIDER_GAP);
      progress.set(newProgress);
    },
    [sliderX, progress, maxSliderDrag],
  );

  const handleSliderDragEnd = React.useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      isDraggingSlider.current = false;

      const currentProgress = progress.get();
      const velocity = info.velocity.x;
      const velocityThreshold = 200;

      let targetIndex: number;
      if (Math.abs(velocity) > velocityThreshold) {
        targetIndex =
          velocity > 0
            ? Math.ceil(currentProgress)
            : Math.floor(currentProgress);
      } else {
        targetIndex = Math.round(currentProgress);
      }

      animateToIndex(targetIndex);
    },
    [progress, animateToIndex],
  );

  const handlePaneClick = React.useCallback(
    (index: number) => {
      animateToIndex(index);
    },
    [animateToIndex],
  );

  const handleSliderTap = React.useCallback(
    (index: number) => {
      animateToIndex(index);
    },
    [animateToIndex],
  );

  const currentIndex = useTransform(progress, (p) => Math.round(p));

  return (
    <div className="flex-1 flex flex-col items-center justify-center overflow-hidden w-full h-full bg-background/50 backdrop-blur-sm">
      <SwipeableSlider
        notes={notes}
        sliderX={sliderX}
        currentIndex={currentIndex}
        onDrag={handleSliderDrag}
        onDragEnd={handleSliderDragEnd}
        onTap={handleSliderTap}
        containerRef={sliderContainerRef}
        itemWidth={SLIDER_ITEM_WIDTH}
        gap={SLIDER_GAP}
      />

      <div
        className="flex-1 w-full flex items-center justify-center overflow-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          perspective: 800,
        }}
      >
        <ul className="relative w-full h-full">
          <AnimatePresence initial={false} mode="popLayout">
            {notes.map((note, index) => (
              <CoverflowPane
                key={`${note.slug}-${index}`}
                note={note}
                index={index}
                backlinks={backlinksMap.get(note.slug) || []}
                onLinkClick={(slug) => onLinkClick(slug, index)}
                onClose={() => onClose(index)}
                isClosable={index > 0}
                progress={progress}
                totalItems={notes.length}
                onPaneClick={() => handlePaneClick(index)}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

function SwipeableSlider({
  notes,
  sliderX,
  currentIndex,
  onDrag,
  onDragEnd,
  onTap,
  containerRef,
  itemWidth,
  gap,
}: {
  notes: Note[];
  sliderX: MotionValue<number>;
  currentIndex: MotionValue<number>;
  onDrag: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => void;
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => void;
  onTap: (index: number) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  itemWidth: number;
  gap: number;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalWidth = notes.length * itemWidth + (notes.length - 1) * gap;
  const dragConstraints = { left: 0, right: totalWidth - itemWidth };

  React.useEffect(() => {
    const unsubscribe = currentIndex.on("change", (v) => {
      setActiveIndex(Math.round(v));
    });
    return unsubscribe;
  }, [currentIndex]);

  return (
    <div className="w-full h-14 flex items-center justify-center relative mb-2 z-10">
      <div
        ref={containerRef}
        className="relative h-10 flex items-end justify-center"
        style={{ width: totalWidth }}
      >
        {notes.map((note, i) => (
          <button
            key={note.slug}
            type="button"
            onClick={() => onTap(i)}
            className="absolute bottom-1 flex flex-col items-center justify-end cursor-pointer"
            style={{
              left: i * (itemWidth + gap),
              width: itemWidth,
              height: "100%",
            }}
          >
            <div
              className={cn(
                "w-0.5 rounded-full bg-foreground/20 transition-all duration-200",
                i === activeIndex ? "h-6" : "h-3",
              )}
            />
          </button>
        ))}

        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          dragMomentum={false}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
          className="absolute bottom-1 w-0.5 h-8 rounded-full bg-foreground cursor-grab active:cursor-grabbing z-10"
          style={{
            x: sliderX,
            left: itemWidth / 2 - 1,
            touchAction: "none",
          }}
        />
      </div>
    </div>
  );
}

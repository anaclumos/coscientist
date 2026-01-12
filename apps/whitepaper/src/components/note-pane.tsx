'use client';

import { useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X, GripVertical } from 'lucide-react';
import type { Note, BacklinkInfo } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NoteContent } from './note-content';
import { BacklinksSection } from './backlinks-section';
import { usePaneCollapse } from './pane-container';

interface NotePaneProps {
  note: Note;
  index: number;
  isFocused?: boolean;
  isClosable?: boolean;
  isDraggable?: boolean;
  backlinks: BacklinkInfo[];
  onLinkClick: (slug: string, fromIndex: number) => void;
  onExpand?: () => void;
  onClose?: () => void;
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function NotePane({
  note,
  index,
  isFocused = false,
  isClosable = false,
  isDraggable = false,
  backlinks,
  onLinkClick,
  onExpand,
  onClose,
  dragHandleProps,
}: NotePaneProps) {
  const { collapsedIndices } = usePaneCollapse();
  const isCollapsed = collapsedIndices.has(index);
  const shouldReduceMotion = useReducedMotion();
  
  const handleLinkClick = useCallback((slug: string) => {
    onLinkClick(slug, index);
  }, [onLinkClick, index]);

  const handleExpandClick = useCallback(() => {
    if (isCollapsed) {
      onExpand?.();
    }
  }, [isCollapsed, onExpand]);

  const paneMotion = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, x: 300 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 300 } };

  const paneTransition = shouldReduceMotion
    ? { duration: 0, layout: { duration: 0 } }
    : { duration: 0.2, ease: 'easeOut' as const, layout: { duration: 0.2, ease: 'easeOut' as const } };

  const fadeTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.12, ease: 'easeOut' as const };
  
  return (
    <motion.article
      layout
      data-pane
      data-index={index}
      tabIndex={-1}
      aria-label={note.title}
      initial={paneMotion.initial}
      animate={paneMotion.animate}
      exit={paneMotion.exit}
      transition={paneTransition}
      className={cn(
        'flex-shrink-0 w-full md:w-1/3 md:min-w-80 h-full overflow-hidden',
        'bg-card border-l border-border',
        'sticky left-0',
        'first:border-l-0',
        'snap-start md:snap-align-none',
        isFocused && 'ring-2 ring-primary ring-inset'
      )}
      style={{
        left: `calc(${index} * var(--pane-spine-width))`,
        zIndex: 10 + index,
      }}
    >
      <AnimatePresence>
        {isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fadeTransition}
            className="absolute left-0 top-0 bottom-0 w-pane-spine flex flex-col items-center pt-2 bg-card z-10 gap-2"
            aria-hidden="true"
          >
            <span className="size-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center tabular-nums flex-shrink-0">
              {index + 1}
            </span>
            <span 
              className="text-sm font-medium text-muted-foreground whitespace-nowrap"
              style={{
                writingMode: 'vertical-lr',
                transform: 'rotate(180deg)',
              }}
            >
              {note.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        animate={{ x: isCollapsed ? 'var(--pane-spine-width)' : 0 }}
        transition={fadeTransition}
        onClick={handleExpandClick}
        onKeyDown={(e) => {
          if (isCollapsed && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onExpand?.();
          }
        }}
        className={cn(
          "absolute top-0 left-0 bottom-0 w-full bg-card group",
          isCollapsed && "cursor-pointer"
        )}
        role={isCollapsed ? "button" : undefined}
        tabIndex={isCollapsed ? 0 : -1}
        aria-expanded={isCollapsed ? false : undefined}
        aria-label={isCollapsed ? `Expand ${note.title}` : undefined}
      >
        <AnimatePresence>
          {isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              className="absolute left-0 top-0 bottom-0 w-px bg-border z-10"
            />
          )}
        </AnimatePresence>
        {!isCollapsed && (
          <>
            <div className="absolute top-2 left-2 z-20">
              <span className="size-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center tabular-nums">
                {index + 1}
              </span>
            </div>
            {isDraggable && (
              <div
                {...dragHandleProps}
                className={cn(
                  'absolute top-2 left-1/2 -translate-x-1/2 z-20',
                  'hidden md:flex',
                  'size-6 rounded-md items-center justify-center cursor-grab active:cursor-grabbing',
                  'text-muted-foreground hover:text-foreground hover:bg-muted',
                  'touch-none'
                )}
                aria-label="Drag to reorder"
              >
                <GripVertical className="size-4" />
              </div>
            )}
          </>
        )}
        {isClosable && !isCollapsed && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className={cn(
              'absolute top-4 right-4 z-20',
              'size-7 rounded-md flex items-center justify-center',
              'text-muted-foreground hover:text-foreground hover:bg-muted',
              'opacity-0 group-hover:opacity-100 focus:opacity-100',
              'transition-opacity'
            )}
            aria-label={`Close ${note.title}`}
          >
            <X className="size-4" />
          </button>
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
      </motion.div>
    </motion.article>
  );
}

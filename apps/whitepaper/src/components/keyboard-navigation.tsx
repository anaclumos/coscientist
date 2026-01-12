'use client';

import { useEffect, useCallback } from 'react';

interface KeyboardNavigationProps {
  stackLength: number;
  focusIndex: number;
  maxFocusIndex?: number;
  onFocusChange: (index: number) => void;
  onPopStack: () => void;
}

export function useKeyboardNavigation({
  stackLength,
  focusIndex,
  maxFocusIndex,
  onFocusChange,
  onPopStack,
}: KeyboardNavigationProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      if (isTextInput(e.target)) {
        return;
      }

      const upperBound = Math.max(0, maxFocusIndex ?? stackLength - 1);
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (focusIndex > 0) {
            onFocusChange(focusIndex - 1);
            scrollToPane(focusIndex - 1);
          }
          break;
          
        case 'ArrowRight':
          e.preventDefault();
          if (focusIndex < upperBound) {
            onFocusChange(focusIndex + 1);
            scrollToPane(focusIndex + 1);
          }
          break;
          
        case 'Escape':
          e.preventDefault();
          if (stackLength > 1) {
            onPopStack();
          }
          break;
          
        case 'Home':
          e.preventDefault();
          onFocusChange(0);
          scrollToPane(0);
          break;
          
        case 'End':
          e.preventDefault();
          onFocusChange(upperBound);
          scrollToPane(upperBound);
          break;
      }
    },
    [focusIndex, stackLength, maxFocusIndex, onFocusChange, onPopStack]
  );
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

function scrollToPane(index: number) {
  const panes = document.querySelectorAll('[data-pane]');
  const targetPane = panes[index] as HTMLElement | undefined;
  
  if (targetPane) {
    targetPane.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    targetPane.focus();
  }
}

function isTextInput(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target.isContentEditable
  );
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

'use client';

import { useRef, useEffect, useState, useCallback, createContext, useContext, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PaneCollapseContextValue {
  collapsedIndices: Set<number>;
}

const PaneCollapseContext = createContext<PaneCollapseContextValue>({
  collapsedIndices: new Set(),
});

export function usePaneCollapse() {
  return useContext(PaneCollapseContext);
}

interface PaneContainerProps {
  children: ReactNode;
  focusIndex: number;
}

export function PaneContainer({ children, focusIndex }: PaneContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsedIndices, setCollapsedIndices] = useState<Set<number>>(new Set());
  const collapseThresholdRef = useRef(0);

  const getScrollBehavior = useCallback(() => {
    if (typeof window === 'undefined') return 'smooth' as const;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }, []);
  
  const updateCollapseThreshold = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstPane = container.querySelector('[data-pane]') as HTMLElement | null;
    if (!firstPane) return;

    const paneWidth = firstPane.offsetWidth;
    const rootStyles = getComputedStyle(document.documentElement);
    const rootFontSize = Number.parseFloat(rootStyles.fontSize) || 16;
    const spineWidthRem = Number.parseFloat(rootStyles.getPropertyValue('--pane-spine-width')) || 2.5;
    const spineWidth = spineWidthRem * rootFontSize;

    collapseThresholdRef.current = Math.max(0, paneWidth - spineWidth);
  }, []);
  
  const updateCollapsedIndices = useCallback(() => {
    if (!containerRef.current) return;
    
    const scrollLeft = containerRef.current.scrollLeft;
    const collapseThreshold = collapseThresholdRef.current;
    const newCollapsed = new Set<number>();
    
    if (collapseThreshold > 0) {
      let index = 0;
      while ((index + 1) * collapseThreshold <= scrollLeft) {
        newCollapsed.add(index);
        index++;
      }
    }
    
    setCollapsedIndices((prev) => {
      if (prev.size !== newCollapsed.size) return newCollapsed;
      for (const i of newCollapsed) {
        if (!prev.has(i)) return newCollapsed;
      }
      return prev;
    });
  }, []);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    updateCollapseThreshold();
    updateCollapsedIndices();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        updateCollapseThreshold();
        updateCollapsedIndices();
      });
      observer.observe(container);
      const firstPane = container.querySelector('[data-pane]');
      if (firstPane) observer.observe(firstPane);
      return () => observer.disconnect();
    }

    const handleResize = () => {
      updateCollapseThreshold();
      updateCollapsedIndices();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateCollapseThreshold, updateCollapsedIndices]);
    
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateCollapsedIndices, { passive: true });
    return () => container.removeEventListener('scroll', updateCollapsedIndices);
  }, [updateCollapsedIndices]);
  
  useEffect(() => {
    if (containerRef.current) {
      const panes = containerRef.current.querySelectorAll('[data-pane]');
      const targetPane = panes[focusIndex] as HTMLElement | undefined;
      
      if (targetPane) {
        targetPane.scrollIntoView({
          behavior: getScrollBehavior(),
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }, [focusIndex, getScrollBehavior]);
  
  return (
    <PaneCollapseContext.Provider value={{ collapsedIndices }}>
      <div
        ref={containerRef}
        className={cn(
          'flex flex-1 min-h-0 overflow-x-auto overflow-y-hidden',
          'scroll-smooth bg-muted',
          'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20',
          'md:snap-none snap-x snap-mandatory'
        )}
      >
        {children}
      </div>
    </PaneCollapseContext.Provider>
  );
}

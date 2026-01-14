"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import type { BacklinkInfo, Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MobilePaneCarousel } from "./mobile-pane-carousel";

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
  mobileData?: {
    notes: Note[];
    backlinksMap: Map<string, BacklinkInfo[]>;
    onLinkClick: (slug: string, fromIndex: number) => void;
    onClose: (index: number) => void;
  };
}

export function PaneContainer({
  children,
  focusIndex,
  mobileData,
}: PaneContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsedIndices, setCollapsedIndices] = useState<Set<number>>(
    new Set()
  );
  const collapseThresholdRef = useRef(0);
  const isMobile = useIsMobile();

  const getScrollBehavior = useCallback(() => {
    if (typeof window === "undefined") {
      return "smooth" as const;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
  }, []);

  const updateCollapseThreshold = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const firstPane = container.querySelector(
      "[data-pane]"
    ) as HTMLElement | null;
    if (!firstPane) {
      return;
    }

    const paneWidth = firstPane.offsetWidth;
    const rootStyles = getComputedStyle(document.documentElement);
    const rootFontSize = Number.parseFloat(rootStyles.fontSize) || 16;
    const spineWidthRem =
      Number.parseFloat(rootStyles.getPropertyValue("--pane-spine-width")) ||
      2.5;
    const spineWidth = spineWidthRem * rootFontSize;

    collapseThresholdRef.current = Math.max(0, paneWidth - spineWidth);
  }, []);

  const updateCollapsedIndices = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    if (isMobile) {
      setCollapsedIndices(new Set());
      return;
    }

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
      if (prev.size !== newCollapsed.size) {
        return newCollapsed;
      }
      for (const i of newCollapsed) {
        if (!prev.has(i)) {
          return newCollapsed;
        }
      }
      return prev;
    });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    updateCollapseThreshold();
    const frameId = requestAnimationFrame(updateCollapsedIndices);

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => {
        updateCollapseThreshold();
        updateCollapsedIndices();
      });
      observer.observe(container);
      const firstPane = container.querySelector("[data-pane]");
      if (firstPane) {
        observer.observe(firstPane);
      }
      return () => {
        cancelAnimationFrame(frameId);
        observer.disconnect();
      };
    }

    const handleResize = () => {
      updateCollapseThreshold();
      updateCollapsedIndices();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, updateCollapseThreshold, updateCollapsedIndices]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.addEventListener("scroll", updateCollapsedIndices, {
      passive: true,
    });
    return () =>
      container.removeEventListener("scroll", updateCollapsedIndices);
  }, [isMobile, updateCollapsedIndices]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    if (containerRef.current) {
      const panes = containerRef.current.querySelectorAll("[data-pane]");
      const targetPane = panes[focusIndex] as HTMLElement | undefined;

      if (targetPane) {
        targetPane.scrollIntoView({
          behavior: getScrollBehavior(),
          block: "nearest",
          inline: "start",
        });
      }
    }
  }, [isMobile, focusIndex, getScrollBehavior]);

  if (isMobile && mobileData) {
    return (
      <MobilePaneCarousel
        backlinksMap={mobileData.backlinksMap}
        focusIndex={focusIndex}
        notes={mobileData.notes}
        onClose={mobileData.onClose}
        onLinkClick={mobileData.onLinkClick}
      />
    );
  }

  return (
    <PaneCollapseContext.Provider value={{ collapsedIndices }}>
      <div
        className={cn(
          "relative flex min-h-0 flex-1 overflow-x-auto overflow-y-hidden",
          "overscroll-x-none scroll-smooth bg-background",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20",
          "snap-x snap-mandatory md:snap-none"
        )}
        ref={containerRef}
      >
        {children}
      </div>
    </PaneCollapseContext.Provider>
  );
}

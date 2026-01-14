/**
 * Animation configurations following Dieter Rams' design principles:
 * - "Good design is as little design as possible"
 * - "Good design is unobtrusive"
 *
 * These animations are functional, not decorative.
 * They communicate state changes and spatial relationships.
 */

import type { Transition, Variants } from "motion/react";

/**
 * Dieter Rams-inspired spring: minimal bounce, quick settle.
 * Duration ~200ms perceptual, nearly critically damped.
 */
export const springSubtle: Transition = {
  type: "spring",
  duration: 0.2,
  bounce: 0.05,
};

/**
 * Even faster spring for micro-interactions.
 * Duration ~150ms, no bounce.
 */
export const springQuick: Transition = {
  type: "spring",
  duration: 0.15,
  bounce: 0,
};

/**
 * Standard easing for opacity fades.
 * Follows AGENTS.md: ease-out on entrance.
 */
export const easeOut: Transition = {
  duration: 0.2,
  ease: [0.33, 1, 0.68, 1], // ease-out cubic
};

/**
 * Reduced motion transition - instant changes.
 */
export const reducedMotion: Transition = {
  duration: 0,
};

/**
 * Get transition based on reduced motion preference.
 */
export function getTransition(
  prefersReducedMotion: boolean,
  transition: Transition = springSubtle
): Transition {
  return prefersReducedMotion ? reducedMotion : transition;
}

/**
 * Pane enter/exit animation variants.
 * Animates opacity and translateX (compositor-only properties).
 */
export const paneVariants: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
};

/**
 * Pane content collapse/expand animation variants.
 * Only animates opacity and translateX for performance.
 */
export const paneContentVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
  },
  collapsed: {
    opacity: 0.4,
    x: "var(--pane-spine-width)",
  },
};

/**
 * Spine fade-in animation when pane collapses.
 */
export const spineVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

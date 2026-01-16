import type { Transition, Variants } from "motion/react"
import { useInView, useReducedMotion } from "motion/react"
import { useRef } from "react"

// biome-ignore lint/performance/noBarrelFile: Intentional re-export for landing page animation utilities
export { springQuick, springSubtle } from "./animations"

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function useSectionAnimation(options?: { amount?: number }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: options?.amount ?? 0.2 })
  const prefersReducedMotion = useReducedMotion()

  const transition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", duration: 0.2, bounce: 0.05 }

  return { ref, isInView, transition, prefersReducedMotion }
}

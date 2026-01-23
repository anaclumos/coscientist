"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { springQuick } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface RatingButtonsProps {
  onRate: (quality: number) => void
  disabled?: boolean
}

const RATINGS = [
  {
    value: 1,
    label: "Blackout",
    color:
      "bg-red-500/10 text-red-600 hover:bg-red-500/20 hover:text-red-700 dark:text-red-400",
  },
  {
    value: 2,
    label: "Hard",
    color:
      "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 hover:text-orange-700 dark:text-orange-400",
  },
  {
    value: 3,
    label: "Good",
    color:
      "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-700 dark:text-yellow-400",
  },
  {
    value: 4,
    label: "Easy",
    color:
      "bg-green-500/10 text-green-600 hover:bg-green-500/20 hover:text-green-700 dark:text-green-400",
  },
  {
    value: 5,
    label: "Perfect",
    color:
      "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-700 dark:text-blue-400",
  },
]

export function RatingButtons({ onRate, disabled }: RatingButtonsProps) {
  const prefersReducedMotion = useReducedMotion()
  const transition = prefersReducedMotion ? { duration: 0 } : springQuick

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {RATINGS.map((rating) => (
        <motion.div
          key={rating.value}
          transition={transition}
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <Button
            aria-label={`Rate as ${rating.label} (${rating.value} out of 5)`}
            className={cn(
              "h-auto flex-col gap-1 px-4 py-3 transition-colors focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-inset",
              rating.color
            )}
            disabled={disabled}
            onClick={() => onRate(rating.value)}
            variant="ghost"
          >
            <span className="text-lg font-bold tabular-nums">
              {rating.value}
            </span>
            <span className="text-xs font-medium opacity-80">
              {rating.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

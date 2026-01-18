"use client"

import { animate, type MotionValue, motion, useSpring } from "motion/react"
import { memo, useCallback, useEffect } from "react"

interface SliderNotchProps {
  index: number
  activeIndex: MotionValue<number>
  onTap: (index: number) => void
  ariaLabel: string
}

export const SliderNotch = memo(function SliderNotch({
  index,
  activeIndex,
  onTap,
  ariaLabel,
}: SliderNotchProps) {
  const isActive = Math.round(activeIndex.get()) === index
  const scaleY = useSpring(isActive ? 1 : 0.5, { duration: 0.2, bounce: 0 })
  const opacity = useSpring(isActive ? 1 : 0.3, { duration: 0.2, bounce: 0 })

  useEffect(() => {
    return activeIndex.on("change", (v) => {
      const active = Math.round(v) === index
      animate(scaleY, active ? 1 : 0.5, { duration: 0.2, bounce: 0 })
      animate(opacity, active ? 1 : 0.3, { duration: 0.2, bounce: 0 })
    })
  }, [activeIndex, index, scaleY, opacity])

  const handleClick = useCallback(() => {
    onTap(index)
  }, [onTap, index])

  return (
    <button
      aria-label={ariaLabel}
      className="flex h-10 touch-none items-center justify-center px-1"
      onClick={handleClick}
      type="button"
    >
      <motion.div
        className="w-1.5 h-6 bg-foreground"
        style={{ scaleY, opacity, transformOrigin: "center" }}
      />
    </button>
  )
})

"use client"

import { cn } from "@coscientist/web/lib/utils"
import { motion } from "motion/react"
import { useMagneticPull } from "motion-plus/react"
import { useRef } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function MagneticButton({
  children,
  className,
  intensity = 0.1,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const pull = useMagneticPull(ref, intensity)

  return (
    <motion.button
      className={cn(
        "flex select-none items-center justify-center rounded-none border border-border border-dashed bg-transparent px-2 py-2 font-medium text-link",
        className
      )}
      ref={ref}
      whileTap="pressed"
    >
      <motion.span
        className="flex items-center gap-2"
        style={pull}
        variants={{ pressed: { scale: 0.95 } }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}

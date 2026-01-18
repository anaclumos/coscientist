"use client"

import { Waitlist } from "@clerk/nextjs"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"

import { Button } from "@/components/ui/button"
import { reducedMotionTransition, springSubtle } from "@/lib/animations"

export function HeroCTA() {
  const t = useTranslations("landing.hero")
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6"
      id="waitlist"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      transition={
        prefersReducedMotion
          ? reducedMotionTransition
          : { ...springSubtle, delay: 0.1 }
      }
    >
      <Button render={<Link href="/manifesto" />} size="lg">
        {t("enterManifesto")}{" "}
        <IconChevronRightOutline18 className="ml-1 size-4" />
      </Button>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-muted-foreground text-sm">or</span>
        <Waitlist />
      </div>
    </motion.div>
  )
}

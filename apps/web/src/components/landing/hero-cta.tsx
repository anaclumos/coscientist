"use client"

import { Waitlist } from "@clerk/nextjs"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"

import { Button } from "@/components/ui/button"
import { Group } from "@/components/ui/group"
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
      <Group className="flex flex-col items-center flex-row">
        <Button render={<Link href="/manifesto" />} size="lg">
          {t("enterManifesto")}{" "}
          <IconChevronRightOutline18 className="ml-1 size-4" />
        </Button>
        <Button
          render={
            // biome-ignore lint/a11y/useAnchorContent: Content provided via Button children
            <a
              href="https://github.com/coscientist/coscientist"
              rel="noopener noreferrer"
              target="_blank"
            />
          }
          size="lg"
        >
          {t("github")} <IconChevronRightOutline18 className="ml-1 size-4" />
        </Button>
      </Group>

      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-muted-foreground text-sm">or</span>
        <Waitlist />
      </div>
    </motion.div>
  )
}

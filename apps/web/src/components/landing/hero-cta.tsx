"use client"

import { useClerk } from "@clerk/nextjs"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { reducedMotionTransition, springSubtle } from "@/lib/animations"

export function HeroCTA() {
  const t = useTranslations("landing.hero")
  const tHeader = useTranslations("header")
  const prefersReducedMotion = useReducedMotion()
  const { openWaitlist } = useClerk()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    openWaitlist()
  }

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
        {t("readManifesto")}{" "}
        <HugeiconsIcon
          className="ml-1"
          icon={ArrowRight01Icon}
          size={16}
          strokeWidth={1.5}
        />
      </Button>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-muted-foreground text-sm">or</span>
        <form className="flex w-full max-w-sm gap-2" onSubmit={handleSubmit}>
          <Input
            className="flex-1"
            placeholder={t("emailPlaceholder")}
            type="email"
          />
          <Button type="submit">{tHeader("joinWaitlist")}</Button>
        </form>
      </div>
    </motion.div>
  )
}

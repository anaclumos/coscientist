"use client"

import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

import { SignedIn, SignedOut } from "@/components/auth"
import { Button } from "@/components/ui/button"
import { reducedMotionTransition, springSubtle } from "@/lib/animations"
import { authClient } from "@/lib/auth-client"

export function HeroCTA() {
  const t = useTranslations("landing.hero")
  const tHeader = useTranslations("header")
  const prefersReducedMotion = useReducedMotion()
  const router = useRouter()
  const { data: organization } = authClient.useActiveOrganization()
  const locale = useLocale()

  const labHref = organization?.slug
    ? `/${locale}/${organization.slug}`
    : `/${locale}/profile`

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4"
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
      <SignedOut>
        <Button
          onClick={() => router.push(`/${locale}/sign-up`)}
          size="lg"
          variant="secondary"
        >
          {tHeader("joinWaitlist")}
        </Button>
      </SignedOut>
      <SignedIn>
        <Button render={<Link href={labHref} />} size="lg" variant="secondary">
          {tHeader("enterLab")}{" "}
          <HugeiconsIcon
            className="ml-1"
            icon={ArrowRight01Icon}
            size={16}
            strokeWidth={1.5}
          />
        </Button>
      </SignedIn>
    </motion.div>
  )
}

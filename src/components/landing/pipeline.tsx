"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"

import { springSubtle } from "@/lib/animations"
import { Container, Eyebrow, Subheading, Text } from "./primitives"

function PipelineStep({
  step,
  index,
  isLast,
}: {
  step: string
  index: number
  isLast: boolean
}) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      transition={{ ...springSubtle, delay: 0.2 + index * 0.1 }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-24 items-center justify-center rounded-lg border border-border bg-muted/50">
          <span className="font-medium font-mono text-foreground text-sm">
            {step}
          </span>
        </div>
      </div>
      {!isLast && (
        <div className="hidden items-center px-2 text-muted-foreground sm:flex">
          <IconChevronRightOutline18 className="size-4" />
        </div>
      )}
    </motion.div>
  )
}

export function Pipeline() {
  const t = useTranslations("landing.pipeline")

  const steps = [
    t("steps.propose"),
    t("steps.critique"),
    t("steps.rank"),
    t("steps.refine"),
  ]

  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex max-w-2xl flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          transition={springSubtle}
        >
          <div className="flex flex-col gap-2">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <Subheading>{t("heading")}</Subheading>
          </div>
          <Text className="text-pretty">{t("description")}</Text>
        </motion.div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-0">
          {steps.map((step, index) => (
            <PipelineStep
              index={index}
              isLast={index === steps.length - 1}
              key={step}
              step={step}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

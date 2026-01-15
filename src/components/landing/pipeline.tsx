"use client"

import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"
import { useRef } from "react"

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
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <motion.div
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      ref={ref}
      transition={{ ...springSubtle, delay: 0.3 + index * 0.1 }}
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })

  const steps = [
    t("steps.propose"),
    t("steps.critique"),
    t("steps.rank"),
    t("steps.refine"),
  ]

  return (
    <section className="py-16" ref={sectionRef}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ ...springSubtle, delay: 0 }}
            >
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </motion.div>
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ ...springSubtle, delay: 0.1 }}
            >
              <Subheading>{t("heading")}</Subheading>
            </motion.div>
          </div>
          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ ...springSubtle, delay: 0.2 }}
          >
            <Text className="text-pretty">{t("description")}</Text>
          </motion.div>
        </div>

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

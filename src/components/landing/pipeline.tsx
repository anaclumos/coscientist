"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"

import { itemVariants, useSectionAnimation } from "@/lib/landing-animations"
import { AmbientGradient } from "./ambient-gradient"
import { Container, Eyebrow, Subheading, Text } from "./primitives"

function PipelineStep({
  step,
  isLast,
  transition,
}: {
  step: string
  isLast: boolean
  transition: import("motion/react").Transition
}) {
  return (
    <motion.div
      className="flex items-center"
      transition={transition}
      variants={itemVariants}
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
  const { ref, isInView, transition, staggerContainerVariants } =
    useSectionAnimation({ amount: 0.2 })

  const steps = [
    t("steps.propose"),
    t("steps.critique"),
    t("steps.rank"),
    t("steps.refine"),
  ]

  return (
    <section
      className="relative overflow-hidden py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <AmbientGradient color="blue" position="bottom-left" />

      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <motion.div
              animate={isInView ? "visible" : "hidden"}
              initial="hidden"
              transition={transition}
              variants={itemVariants}
            >
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </motion.div>
            <motion.div
              animate={isInView ? "visible" : "hidden"}
              initial="hidden"
              transition={{ ...transition, delay: 0.1 }}
              variants={itemVariants}
            >
              <Subheading>{t("heading")}</Subheading>
            </motion.div>
          </div>
          <motion.div
            animate={isInView ? "visible" : "hidden"}
            initial="hidden"
            transition={{ ...transition, delay: 0.2 }}
            variants={itemVariants}
          >
            <Text className="text-pretty">{t("description")}</Text>
          </motion.div>
        </div>

        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-0"
          initial="hidden"
          transition={transition}
          variants={staggerContainerVariants}
        >
          {steps.map((step, index) => (
            <PipelineStep
              isLast={index === steps.length - 1}
              key={step}
              step={step}
              transition={transition}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

import { itemVariants, useSectionAnimation } from "@/lib/landing-animations"
import { AmbientGradient } from "./ambient-gradient"
import { Container, Eyebrow, Subheading } from "./primitives"

interface FeatureProps {
  title: string
  description: string
}

function Feature({
  title,
  description,
  variants,
}: FeatureProps & { variants: import("motion/react").Variants }) {
  return (
    <motion.div
      className="flex flex-col gap-2 overflow-hidden border border-black/[0.06] bg-white p-6 shadow-black/[0.04] shadow-lg [border-radius:32px] dark:border-white/[0.06] dark:bg-black dark:shadow-black/[0.08]"
      variants={variants}
    >
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm/7">{description}</p>
    </motion.div>
  )
}

export function Features() {
  const t = useTranslations("landing.features")
  const {
    ref,
    isInView,
    transition,
    staggerContainerVariants,
    itemVariantsWithTransition,
  } = useSectionAnimation({ amount: 0.2 })

  const features = [
    {
      id: "dialecticalGraph",
      title: t("dialecticalGraph.title"),
      description: t("dialecticalGraph.description"),
    },
    {
      id: "rebuttalFirst",
      title: t("rebuttalFirst.title"),
      description: t("rebuttalFirst.description"),
    },
    {
      id: "multilingual",
      title: t("multilingual.title"),
      description: t("multilingual.description"),
    },
  ]

  return (
    <section
      className="relative overflow-hidden py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <AmbientGradient color="white" position="top-right" />

      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-2">
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
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          transition={transition}
          variants={staggerContainerVariants}
        >
          {features.map((feature) => (
            <Feature
              key={feature.id}
              {...feature}
              variants={itemVariantsWithTransition}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

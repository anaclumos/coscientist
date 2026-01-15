"use client"

import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import { springSubtle } from "@/lib/animations"
import { Container, Eyebrow, Subheading } from "./primitives"

interface FeatureProps {
  title: string
  description: string
  index: number
}

function Feature({ title, description, index }: FeatureProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <motion.div
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="flex flex-col gap-2 overflow-hidden border border-black/[0.06] bg-white p-6 shadow-black/[0.04] shadow-lg [border-radius:32px] dark:border-white/[0.06] dark:bg-black dark:shadow-black/[0.08]"
      initial={{ opacity: 0, y: 20 }}
      ref={ref}
      transition={{ ...springSubtle, delay: 0.2 + index * 0.1 }}
    >
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm/7">{description}</p>
    </motion.div>
  )
}

export function Features() {
  const t = useTranslations("landing.features")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })

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
    <section className="py-16" ref={sectionRef}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-2">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

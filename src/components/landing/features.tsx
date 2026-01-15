"use client"

import { motion } from "motion/react"

import { springSubtle } from "@/lib/animations"
import { Container, Eyebrow, Subheading } from "./primitives"

interface FeatureProps {
  title: string
  description: string
  index: number
}

function Feature({ title, description, index }: FeatureProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      transition={{ ...springSubtle, delay: 0.1 + index * 0.1 }}
    >
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm/7">{description}</p>
    </motion.div>
  )
}

const features = [
  {
    title: "Dialectical Graph",
    description:
      "Claims and relations, not documents and links. Every statement traces back to evidence.",
  },
  {
    title: "Rebuttal-First",
    description:
      "Seek what breaks before what supports. Knowledge that survives challenge.",
  },
  {
    title: "Multilingual",
    description:
      "Korean papers. German hypotheses. Japanese datasets. One unified research graph.",
  },
]

export function Features() {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex max-w-2xl flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          transition={springSubtle}
        >
          <Eyebrow>Core Architecture</Eyebrow>
          <Subheading>Built different from the ground up</Subheading>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

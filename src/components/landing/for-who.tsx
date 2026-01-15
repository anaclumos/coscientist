"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

import { springSubtle } from "@/lib/animations"
import { Container, Subheading } from "./primitives"

const audiences = [
  "Scientists running experiment pipelines",
  "Engineers building on cutting-edge papers",
  "Analysts synthesizing cross-domain literature",
  "Teams who need reproducible knowledge trails",
]

function AudienceItem({ text, index }: { text: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="flex items-start gap-3"
      initial={{ opacity: 0, y: 20 }}
      ref={ref}
      transition={{ ...springSubtle, delay: 0.1 + index * 0.08 }}
    >
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
      <span className="text-base/7 text-muted-foreground">{text}</span>
    </motion.div>
  )
}

export function ForWho() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="py-16" ref={sectionRef}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={springSubtle}
        >
          <Subheading>Built for researchers who ship</Subheading>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <AudienceItem index={index} key={audience} text={audience} />
          ))}
        </div>
      </Container>
    </section>
  )
}

"use client"

import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import { springSubtle } from "@/lib/animations"
import { Container, Subheading } from "./primitives"

function AudienceItem({ text, index }: { text: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

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
  const t = useTranslations("landing.forWho")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })

  const audiences = [
    { id: "scientists", text: t("audiences.scientists") },
    { id: "engineers", text: t("audiences.engineers") },
    { id: "analysts", text: t("audiences.analysts") },
    { id: "teams", text: t("audiences.teams") },
  ]

  return (
    <section className="py-16" ref={sectionRef}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={springSubtle}
        >
          <Subheading>{t("heading")}</Subheading>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <AudienceItem
              index={index}
              key={audience.id}
              text={audience.text}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

import { itemVariants, useSectionAnimation } from "@/lib/landing-animations"
import { AmbientGradient } from "./ambient-gradient"
import { Container, Subheading } from "./primitives"

function AudienceItem({
  text,
  transition,
}: {
  text: string
  transition: import("motion/react").Transition
}) {
  return (
    <motion.div
      className="flex items-start gap-3"
      transition={transition}
      variants={itemVariants}
    >
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
      <span className="text-base/7 text-muted-foreground">{text}</span>
    </motion.div>
  )
}

export function ForWho() {
  const t = useTranslations("landing.forWho")
  const { ref, isInView, transition, staggerContainerVariants } =
    useSectionAnimation({ amount: 0.2 })

  const audiences = [
    { id: "scientists", text: t("audiences.scientists") },
    { id: "engineers", text: t("audiences.engineers") },
    { id: "analysts", text: t("audiences.analysts") },
    { id: "teams", text: t("audiences.teams") },
  ]

  return (
    <section
      className="relative overflow-hidden py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <AmbientGradient color="white" position="top-right" />

      <Container className="flex flex-col gap-10 sm:gap-16">
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          transition={transition}
          variants={itemVariants}
        >
          <Subheading>{t("heading")}</Subheading>
        </motion.div>

        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial="hidden"
          transition={transition}
          variants={staggerContainerVariants}
        >
          {audiences.map((audience) => (
            <AudienceItem
              key={audience.id}
              text={audience.text}
              transition={transition}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

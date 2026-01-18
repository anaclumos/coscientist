"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"

import { Button } from "@/components/ui/button"
import { Group } from "@/components/ui/group"
import { itemVariants, useSectionAnimation } from "@/lib/landing-animations"
import { AmbientGradient } from "./ambient-gradient"
import { Container } from "./primitives/layout"
import { Subheading } from "./primitives/typography"

export function CTA() {
  const t = useTranslations("landing.cta")
  const { ref, isInView, transition } = useSectionAnimation({ amount: 0.2 })

  return (
    <section
      className="relative overflow-hidden py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <AmbientGradient color="blue" position="center" />

      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.div
            animate={isInView ? "visible" : "hidden"}
            className="flex max-w-4xl flex-col gap-2"
            initial="hidden"
            transition={transition}
            variants={itemVariants}
          >
            <Subheading>
              {t("heading")
                .split("\n")
                .map((line, index, arr) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static translated text with stable order
                  <span key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </span>
                ))}
            </Subheading>
          </motion.div>
        </div>
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          transition={{ ...transition, delay: 0.1 }}
          variants={itemVariants}
        >
          <Group className="flex items-center">
            <Button render={<Link href="/manifesto" />} size="lg">
              {t("readManifesto")}{" "}
              <IconChevronRightOutline18 className="ml-1 size-4" />
            </Button>
            <Button
              render={
                // biome-ignore lint/a11y/useAnchorContent: Content provided via Button children
                <a
                  href="https://github.com/coscientist/coscientist"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
              size="lg"
              variant="outline"
            >
              {t("github")}{" "}
              <IconChevronRightOutline18 className="ml-1 size-4" />
            </Button>
          </Group>
        </motion.div>
      </Container>
    </section>
  )
}

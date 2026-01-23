"use client"

import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import { useLocale, useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { itemVariants, useSectionAnimation } from "@/lib/landing-animations"
import { AmbientGradient } from "./ambient-gradient"
import { Container } from "./primitives/layout"
import { Eyebrow, Subheading, Text } from "./primitives/typography"

export function BuildInPublic() {
  const t = useTranslations("landing.buildInPublic")
  const locale = useLocale()
  const hqHref = `https://hq.coscientist.app/${locale}`
  const { ref, isInView, transition } = useSectionAnimation({ amount: 0.2 })

  return (
    <section
      className="relative overflow-hidden py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <AmbientGradient color="white" position="top-right" />

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
          initial="hidden"
          transition={{ ...transition, delay: 0.3 }}
          variants={itemVariants}
        >
          <Button
            render={
              // biome-ignore lint/a11y/useAnchorContent: Content provided by Button children
              <a
                aria-label={t("visitHQ")}
                href={hqHref}
                rel="noopener noreferrer"
                target="_blank"
              />
            }
            size="lg"
            variant="outline"
          >
            {t("visitHQ")}{" "}
            <HugeiconsIcon
              className="ml-1"
              icon={ArrowRight01Icon}
              size={16}
              strokeWidth={1.5}
            />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"
import { Button } from "@/components/ui/button"
import { springSubtle } from "@/lib/animations"
import { Container, Subheading } from "./primitives"

export function CTA() {
  const t = useTranslations("landing.cta")

  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-4xl flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            transition={springSubtle}
          >
            <Subheading>
              {t("heading")
                .split("\n")
                .map((line, index, arr) => (
                  <span key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </span>
                ))}
            </Subheading>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ ...springSubtle, delay: 0.1 }}
        >
          <Button render={<Link href="/manifesto" />} size="lg">
            {t("readManifesto")}{" "}
            <IconChevronRightOutline18 className="ml-1 size-4" />
          </Button>
          <a
            className="no-underline"
            href="https://github.com/coscientist/coscientist"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="lg" variant="outline">
              {t("github")}{" "}
              <IconChevronRightOutline18 className="ml-1 size-4" />
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

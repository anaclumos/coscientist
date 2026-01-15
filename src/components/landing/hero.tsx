"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { IconChevronRightOutline18 } from "nucleo-ui-outline-18"
import { Button } from "@/components/ui/button"
import { springSubtle } from "@/lib/animations"
import { Container } from "./primitives"

export function Hero() {
  const t = useTranslations("landing.hero")
  return (
    <section className="pb-16">
      <Container>
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden border border-black/10 border-t-0 bg-white [border-bottom-left-radius:32px] [border-bottom-right-radius:32px] dark:border-white/10 dark:bg-black max-md:[border-bottom-left-radius:24px] max-md:[border-bottom-right-radius:24px]">
          {/* Background Image */}
          <div className="absolute inset-0 top-[-20px]">
            <Image
              alt=""
              className="hidden h-full w-full object-cover blur-[4px] dark:block"
              height={743 * 2}
              priority
              src="/images/hero/hero-background@dark.png"
              width={1400 * 2}
            />
            <Image
              alt=""
              className="block h-full w-full object-cover blur-[2px] dark:hidden"
              height={743 * 2}
              priority
              src="/images/hero/hero-background@light.png"
              width={1400 * 2}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-[29px] px-8 pt-[48px] pb-12 text-center sm:px-16 lg:px-24">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                alt=""
                className="h-[198px] w-[272px] object-contain"
                height={248 * 3}
                quality={100}
                src="/images/hero/hero-book.png"
                width={340 * 3}
              />
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              transition={springSubtle}
            >
              <h1 className="font-normal text-4xl text-[#182D3D] leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl dark:text-white">
                {t("title")
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
              </h1>
              <p className="text-base text-black leading-[1.3] sm:text-lg dark:text-white">
                <span className="inline-block">{t("subtitle")}</span>
                <br />
                <span className="inline-block">{t("description")}</span>
              </p>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              transition={{ ...springSubtle, delay: 0.1 }}
            >
              <Button render={<Link href="/manifesto" />} size="lg">
                {t("enterManifesto")}{" "}
                <IconChevronRightOutline18 className="ml-1 size-4" />
              </Button>
              <Button
                render={
                  <a
                    href="https://github.com/coscientist/coscientist"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t("github")}{" "}
                    <IconChevronRightOutline18 className="ml-1 size-4" />
                  </a>
                }
                size="lg"
                variant="outline"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

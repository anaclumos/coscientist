"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { springSubtle } from "@/lib/animations"
import { Container } from "./primitives"

export function Hero() {
  return (
    <section className="pb-16">
      <Container>
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-b-3xl border border-white/10 border-t-0 bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 top-[-20px]">
            <Image
              alt=""
              className="h-full w-full object-cover blur-[2px]"
              height={743 * 2}
              priority
              src="/images/hero/hero-background.png"
              width={1400 * 2}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-[29px] px-8 pt-[48px] pb-12 text-center sm:px-16 lg:px-24">
            <Image
              alt=""
              className="h-[248px] w-[340px]"
              height={248 * 3}
              quality={100}
              src="/images/hero/hero-book.png"
              width={340 * 3}
            />

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              transition={springSubtle}
            >
              <h1
                className="font-normal text-4xl leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-[64px]"
                style={{
                  fontFamily: "Faculty Glyphic",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 1) 18%, rgba(196, 235, 255, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Research at the
                <br />
                Speed of Thought
              </h1>
              <p
                className="text-base text-white leading-[1.3] sm:text-lg"
                style={{ fontFamily: "Faculty Glyphic" }}
              >
                Versioned experiments. Reproducible knowledge.
                <br />
                The cognitive infrastructure for research.
              </p>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              transition={{ ...springSubtle, delay: 0.1 }}
            >
              <Button render={<Link href="/manifesto" />} size="lg">
                Enter Manifesto →
              </Button>
              <a
                className="no-underline"
                href="https://github.com/junhoyeo/coscientist"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button size="lg" variant="outline">
                  GitHub →
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

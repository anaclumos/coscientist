"use client"

import { motion, useInView } from "motion/react"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { springSubtle } from "@/lib/animations"
import { Container, Subheading } from "./primitives"

export function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="py-16" ref={sectionRef}>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex max-w-4xl flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            transition={springSubtle}
          >
            <Subheading>
              The Encyclopedia Galactica was fiction.
              <br />
              We're building the infrastructure.
            </Subheading>
          </motion.div>
        </div>
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ ...springSubtle, delay: 0.1 }}
        >
          <Button render={<Link href="/manifesto" />} size="lg">
            Read the Manifesto →
          </Button>
          <a
            className="no-underline"
            href="https://github.com/coscientist/coscientist"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="lg" variant="outline">
              GitHub →
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

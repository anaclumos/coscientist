import { BuildInPublic } from "@/components/landing/build-in-public"
import { CTA } from "@/components/landing/cta"
import { Features } from "@/components/landing/features"
import { Footer } from "@/components/landing/footer"
import { ForWho } from "@/components/landing/for-who"
import { Hero } from "@/components/landing/hero"
import { Pipeline } from "@/components/landing/pipeline"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pipeline />
      <ForWho />
      <BuildInPublic />
      <CTA />
      <Footer />
    </main>
  )
}

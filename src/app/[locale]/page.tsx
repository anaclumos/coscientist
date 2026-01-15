import {
  CTA,
  Features,
  Footer,
  ForWho,
  Hero,
  Pipeline,
} from "@/components/landing"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pipeline />
      <ForWho />
      <CTA />
      <Footer />
    </main>
  )
}

"use client"

import { ArrowRight01Icon, Tick01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useQuery } from "convex/react"
import { motion } from "motion/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { VerificationCard } from "@/components/verify/verification-card"
import { api } from "@/convex/_generated/api"
import { springSubtle } from "@/lib/animations"

export default function VerifyPage() {
  const params = useParams()
  const locale = params.locale as string
  const orgSlug = params.orgSlug as string

  const reviews = useQuery(api.verification.getDueReviews)
  const [completedCount, setCompletedCount] = useState(0)
  const [initialCount, setInitialCount] = useState<number | null>(null)

  useEffect(() => {
    if (reviews && initialCount === null) {
      setInitialCount(reviews.length)
    }
  }, [reviews, initialCount])

  const totalDue = initialCount || 0
  const effectiveTotal = Math.max(
    totalDue,
    (reviews?.length || 0) + completedCount
  )
  const progress =
    effectiveTotal > 0 ? (completedCount / effectiveTotal) * 100 : 100

  const handleComplete = () => {
    setCompletedCount((prev) => prev + 1)
  }

  if (reviews === undefined) {
    return (
      <main className="container mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl animate-pulse space-y-4">
          <div className="mx-auto h-8 w-1/3 rounded bg-muted" />
          <div className="h-[400px] rounded-xl bg-muted" />
        </div>
      </main>
    )
  }

  if (reviews.length === 0) {
    return (
      <main className="container mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-4 py-8 text-center">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={springSubtle}
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
            <HugeiconsIcon icon={Tick01Icon} size={48} strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-3xl tracking-tight">
              All Caught Up!
            </h1>
            <p className="mx-auto max-w-md text-muted-foreground">
              You've completed all your verification tasks for now. Great job
              maintaining your knowledge sovereignty.
            </p>
          </div>

          <div className="pt-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 font-medium text-sm">
              <span>Today's Session:</span>
              <span className="text-primary">{completedCount} verified</span>
            </div>
          </div>

          <div className="pt-8">
            <Button
              render={
                <Link href={`/${locale}/${orgSlug}/workspace`}>
                  Return to Workspace{" "}
                  <HugeiconsIcon className="ml-2" icon={ArrowRight01Icon} />
                </Link>
              }
              size="lg"
            />
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="container mx-auto flex min-h-[80vh] max-w-3xl flex-col px-4 py-8">
      <div className="mb-8 space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-bold text-2xl tracking-tight">
              Verification Queue
            </h1>
            <p className="text-muted-foreground">
              Verify claims to maintain the integrity of your knowledge graph.
            </p>
          </div>
          <div className="text-right">
            <div className="font-bold font-mono text-2xl tabular-nums">
              {reviews.length}
            </div>
            <div className="text-muted-foreground text-xs uppercase tracking-wider">
              Remaining
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Progress className="h-2" value={progress} />
          <div className="flex justify-between text-muted-foreground text-xs">
            <span>{completedCount} completed</span>
            <span>{effectiveTotal} total</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <VerificationCard
          blockId={reviews[0].blockId}
          key={reviews[0]._id}
          onComplete={handleComplete}
          reviewId={reviews[0]._id}
        />
      </div>
    </main>
  )
}

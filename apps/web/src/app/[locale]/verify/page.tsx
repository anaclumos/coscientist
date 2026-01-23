"use client"

import { ArrowRight01Icon, Tick01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useQuery } from "convex/react"
import { motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { VerificationCard } from "@/components/verify/verification-card"
import { api } from "@/convex/_generated/api"
import { springSubtle } from "@/lib/animations"

export default function VerifyPage() {
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
      <main className="container mx-auto px-4 py-8 max-w-3xl min-h-[80vh] flex flex-col items-center justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-2xl">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
          <div className="h-[400px] bg-muted rounded-xl"></div>
        </div>
      </main>
    )
  }

  if (reviews.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-3xl min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={springSubtle}
        >
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400">
            <HugeiconsIcon icon={Tick01Icon} size={48} strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              All Caught Up!
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              You've completed all your verification tasks for now. Great job
              maintaining your knowledge sovereignty.
            </p>
          </div>

          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
              <span>Today's Session:</span>
              <span className="text-primary">{completedCount} verified</span>
            </div>
          </div>

          <div className="pt-8">
            <Button
              render={
                <Link href="/">
                  Return to Dashboard{" "}
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
    <main className="container mx-auto px-4 py-8 max-w-3xl min-h-[80vh] flex flex-col">
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Verification Queue
            </h1>
            <p className="text-muted-foreground">
              Verify claims to maintain the integrity of your knowledge graph.
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono font-bold tabular-nums">
              {reviews.length}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Remaining
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Progress className="h-2" value={progress} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completedCount} completed</span>
            <span>{effectiveTotal} total</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
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

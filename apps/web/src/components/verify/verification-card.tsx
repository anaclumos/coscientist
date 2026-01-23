"use client"

import {
  Cancel01Icon,
  Tick01Icon,
  ViewIcon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQuery } from "convex/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import { Doc, Id } from "@/convex/_generated/dataModel"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { paneVariants, springSubtle } from "@/lib/animations"
import { RatingButtons } from "./rating-buttons"

interface VerificationCardProps {
  reviewId: Id<"reviews">
  blockId: Id<"blocks">
  onComplete: () => void
}

export function VerificationCard({
  reviewId,
  blockId,
  onComplete,
}: VerificationCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle

  const [isRevealed, setIsRevealed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const block = useQuery(api.blocks.getBlock, { blockId })
  const edges = useQuery(api.edges.getEdgesFrom, { blockId })
  const submitReview = useMutation(api.verification.submitReview)

  const supportingEdges =
    edges?.filter((e: Doc<"edges">) => e.type === "supports") || []
  const refutingEdges =
    edges?.filter((e: Doc<"edges">) => e.type === "refutes") || []

  const handleRate = async (quality: number) => {
    setIsSubmitting(true)
    try {
      await submitReview({ reviewId, quality })
      onComplete()
    } catch (error) {
      console.error("Failed to submit review:", error)
    } finally {
      setIsSubmitting(false)
      setIsRevealed(false)
    }
  }

  if (block === undefined) {
    return (
      <Card className="w-full max-w-2xl mx-auto h-[400px] flex flex-col justify-center p-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </Card>
    )
  }

  if (block === null) {
    return (
      <Card className="w-full max-w-2xl mx-auto p-8 text-center text-muted-foreground">
        Block not found or access denied.
      </Card>
    )
  }

  return (
    <motion.div
      animate="animate"
      className="w-full max-w-2xl mx-auto"
      exit="exit"
      initial="initial"
      transition={transition}
      variants={paneVariants}
    >
      <Card className="overflow-hidden border-2">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge className="mb-2" variant="outline">
              {block.type}
            </Badge>
            <div className="flex gap-2 text-xs text-muted-foreground">
              {supportingEdges.length > 0 && (
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <HugeiconsIcon
                    icon={Tick01Icon}
                    size={12}
                    strokeWidth={1.5}
                  />{" "}
                  {supportingEdges.length}
                </span>
              )}
              {refutingEdges.length > 0 && (
                <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={12}
                    strokeWidth={1.5}
                  />{" "}
                  {refutingEdges.length}
                </span>
              )}
            </div>
          </div>
          <CardTitle className="text-xl leading-relaxed">
            {typeof block.content === "string"
              ? block.content
              : JSON.stringify(block.content)}
          </CardTitle>
        </CardHeader>

        <CardContent className="min-h-[120px] py-6">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="hidden"
              >
                <p className="text-sm italic">
                  Recall the evidence for this claim...
                </p>
                <Button
                  className="gap-2"
                  onClick={() => setIsRevealed(true)}
                  variant="secondary"
                >
                  <HugeiconsIcon icon={ViewIcon} size={16} strokeWidth={1.5} />
                  Reveal Evidence
                </Button>
              </motion.div>
            ) : (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                key="revealed"
                transition={transition}
              >
                <div className="rounded-md bg-muted/50 p-4 text-sm">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <HugeiconsIcon
                      icon={ViewIcon}
                      size={14}
                      strokeWidth={1.5}
                    />{" "}
                    Evidence Status
                  </h4>
                  {supportingEdges.length === 0 &&
                  refutingEdges.length === 0 ? (
                    <p className="text-muted-foreground">
                      No direct evidence linked.
                    </p>
                  ) : (
                    <ul className="space-y-1">
                      {supportingEdges.map((edge: Doc<"edges">) => (
                        <li
                          className="flex items-center gap-2 text-green-600 dark:text-green-400"
                          key={edge._id}
                        >
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={12}
                            strokeWidth={1.5}
                          />{" "}
                          Supported by linked block
                        </li>
                      ))}
                      {refutingEdges.map((edge: Doc<"edges">) => (
                        <li
                          className="flex items-center gap-2 text-red-600 dark:text-red-400"
                          key={edge._id}
                        >
                          <HugeiconsIcon
                            icon={Cancel01Icon}
                            size={12}
                            strokeWidth={1.5}
                          />{" "}
                          Refuted by linked block
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <Separator />

        <CardFooter className="bg-muted/20 p-6 flex justify-center min-h-[100px]">
          {isRevealed ? (
            <RatingButtons disabled={isSubmitting} onRate={handleRate} />
          ) : (
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <HugeiconsIcon
                icon={ViewOffSlashIcon}
                size={16}
                strokeWidth={1.5}
              />
              Reveal to grade your recall
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

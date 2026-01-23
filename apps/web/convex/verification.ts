import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const markForReview = mutation({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("Must be authenticated to mark blocks for review")
    }

    const block = await ctx.db.get(args.blockId)
    if (!block) {
      throw new Error("Block not found")
    }

    const existingReview = await ctx.db
      .query("reviews")
      .withIndex("by_blockId_userId", (q) =>
        q.eq("blockId", args.blockId).eq("userId", userId)
      )
      .unique()

    if (existingReview) {
      throw new Error("Review already exists for this block")
    }

    const reviewId = await ctx.db.insert("reviews", {
      blockId: args.blockId,
      userId,
      nextReview: Date.now(),
      easiness: 2.5,
      interval: 0,
      repetitions: 0,
    })

    return reviewId
  },
})

export const submitReview = mutation({
  args: {
    reviewId: v.id("reviews"),
    quality: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("Must be authenticated to submit reviews")
    }

    if (args.quality < 0 || args.quality > 5) {
      throw new Error("Quality must be between 0 and 5")
    }

    const review = await ctx.db.get(args.reviewId)
    if (!review) {
      throw new Error("Review not found")
    }

    if (review.userId !== userId) {
      throw new Error("Cannot submit review for another user")
    }

    let newEasiness = review.easiness
    let newInterval: number
    let newRepetitions: number

    if (args.quality < 3) {
      newRepetitions = 0
      newInterval = 1
    } else {
      newRepetitions = review.repetitions + 1

      if (newRepetitions === 1) {
        newInterval = 1
      } else if (newRepetitions === 2) {
        newInterval = 6
      } else {
        newInterval = Math.ceil(review.interval * review.easiness)
      }

      const easinessDelta =
        0.1 - (5 - args.quality) * (0.08 + (5 - args.quality) * 0.02)
      newEasiness = Math.max(review.easiness + easinessDelta, 1.3)
    }

    const nextReviewDate = new Date()
    nextReviewDate.setDate(nextReviewDate.getDate() + newInterval)
    nextReviewDate.setHours(0, 0, 0, 0)

    await ctx.db.patch(args.reviewId, {
      easiness: newEasiness,
      interval: newInterval,
      repetitions: newRepetitions,
      nextReview: nextReviewDate.getTime(),
    })

    return await ctx.db.get(args.reviewId)
  },
})

export const getDueReviews = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      return []
    }

    const now = Date.now()

    const allReviews = await ctx.db
      .query("reviews")
      .withIndex("by_userId_nextReview", (q) => q.eq("userId", userId))
      .collect()

    return allReviews.filter((review) => review.nextReview <= now)
  },
})

export const getReviewForBlock = query({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      return null
    }

    const review = await ctx.db
      .query("reviews")
      .withIndex("by_blockId_userId", (q) =>
        q.eq("blockId", args.blockId).eq("userId", userId)
      )
      .unique()

    return review
  },
})

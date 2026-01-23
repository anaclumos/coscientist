import { v } from "convex/values"
import { internalQuery, mutation, query } from "./_generated/server"

export const getSettings = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return null
    }

    const userId = identity.subject
    const settings = await ctx.db
      .query("userSettings")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique()

    return settings
  },
})

export const updateOpenAIKey = mutation({
  args: {
    apiKey: v.union(v.string(), v.null()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Not authenticated")
    }

    const userId = identity.subject
    const now = Date.now()

    const existing = await ctx.db
      .query("userSettings")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique()

    if (existing) {
      await ctx.db.patch(existing._id, {
        openaiApiKey: args.apiKey ?? undefined,
        updatedAt: now,
      })
      return existing._id
    }

    return await ctx.db.insert("userSettings", {
      userId,
      openaiApiKey: args.apiKey ?? undefined,
      createdAt: now,
      updatedAt: now,
    })
  },
})

export const hasOpenAIKey = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return false
    }

    const userId = identity.subject
    const settings = await ctx.db
      .query("userSettings")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique()

    return !!settings?.openaiApiKey
  },
})

export const getOpenAIKeyInternal = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const settings = await ctx.db
      .query("userSettings")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique()

    return settings?.openaiApiKey ?? null
  },
})

import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

const canRead = (block: any, userId: string | null): boolean => {
  if (!userId) return block.access.public
  if (block.access.public) return true
  if (block.access.readers.includes(userId)) return true
  if (block.createdBy === userId) return true
  return false
}

const canWrite = (block: any, userId: string | null): boolean => {
  if (!userId) return false
  if (block.createdBy === userId) return true
  if (block.access.writers.includes(userId)) return true
  return false
}

const isEmbargoed = (block: any): boolean => {
  if (!block.access.embargoUntil) return false
  return Date.now() < block.access.embargoUntil
}

export const createBlock = mutation({
  args: {
    type: v.union(
      v.literal("text"),
      v.literal("heading"),
      v.literal("list"),
      v.literal("document")
    ),
    content: v.any(),
    parentId: v.optional(v.id("blocks")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to create blocks")
    }

    const now = Date.now()

    const blockId = await ctx.db.insert("blocks", {
      type: args.type,
      content: args.content,
      createdBy: userId,
      createdAt: now,
      updatedAt: now,
      parentId: args.parentId,
      access: {
        readers: [userId],
        writers: [userId],
        public: false,
      },
    })

    return blockId
  },
})

export const getBlock = query({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      return null
    }

    if (isEmbargoed(block)) {
      if (!canRead(block, userId)) {
        return null
      }
    }

    if (!canRead(block, userId)) {
      return null
    }

    return block
  },
})

export const updateBlock = mutation({
  args: {
    blockId: v.id("blocks"),
    content: v.optional(v.any()),
    type: v.optional(
      v.union(
        v.literal("text"),
        v.literal("heading"),
        v.literal("list"),
        v.literal("document")
      )
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to update blocks")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    if (!canWrite(block, userId)) {
      throw new Error("User does not have write access to this block")
    }

    const updates: any = {
      updatedAt: Date.now(),
    }

    if (args.content !== undefined) {
      updates.content = args.content
    }

    if (args.type !== undefined) {
      updates.type = args.type
    }

    await ctx.db.patch(args.blockId, updates)

    return await ctx.db.get(args.blockId)
  },
})

export const deleteBlock = mutation({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to delete blocks")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    if (!canWrite(block, userId)) {
      throw new Error("User does not have write access to this block")
    }

    const allEdges = await ctx.db.query("edges").collect()

    const edgesToDelete = allEdges.filter(
      (edge) => edge.from === args.blockId || edge.to === args.blockId
    )

    for (const edge of edgesToDelete) {
      await ctx.db.delete(edge._id)
    }

    await ctx.db.delete(args.blockId)

    return { success: true }
  },
})

export const getBlocksByParent = query({
  args: {
    parentId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const blocks = await ctx.db
      .query("blocks")
      .withIndex("by_parentId", (q) => q.eq("parentId", args.parentId))
      .collect()

    return blocks.filter((block) => {
      if (isEmbargoed(block)) {
        return canRead(block, userId)
      }
      return canRead(block, userId)
    })
  },
})

export const getBlocksByType = query({
  args: {
    type: v.union(
      v.literal("text"),
      v.literal("heading"),
      v.literal("list"),
      v.literal("document")
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const allBlocks = await ctx.db.query("blocks").collect()

    const blocksByType = allBlocks.filter((block) => block.type === args.type)

    return blocksByType.filter((block) => {
      if (isEmbargoed(block)) {
        return canRead(block, userId)
      }
      return canRead(block, userId)
    })
  },
})

export const getAllBlocks = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const allBlocks = await ctx.db.query("blocks").collect()

    return allBlocks.filter((block) => {
      if (isEmbargoed(block)) {
        return canRead(block, userId)
      }
      return canRead(block, userId)
    })
  },
})

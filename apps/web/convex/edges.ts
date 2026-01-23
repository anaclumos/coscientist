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

const VALID_EDGE_TYPES = [
  "contains",
  "supports",
  "refutes",
  "references",
] as const

export const createEdge = mutation({
  args: {
    from: v.id("blocks"),
    to: v.id("blocks"),
    type: v.union(
      v.literal("contains"),
      v.literal("supports"),
      v.literal("refutes"),
      v.literal("references")
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to create edges")
    }

    if (!VALID_EDGE_TYPES.includes(args.type)) {
      throw new Error("Invalid edge type")
    }

    const sourceBlock = await ctx.db.get(args.from)
    if (!sourceBlock) {
      throw new Error("Source block not found")
    }

    const targetBlock = await ctx.db.get(args.to)
    if (!targetBlock) {
      throw new Error("Target block not found")
    }

    if (!canRead(sourceBlock, userId)) {
      throw new Error("User does not have read access to source block")
    }

    if (!canRead(targetBlock, userId)) {
      throw new Error("User does not have read access to target block")
    }

    const now = Date.now()

    const edgeId = await ctx.db.insert("edges", {
      from: args.from,
      to: args.to,
      type: args.type,
      createdBy: userId,
      createdAt: now,
    })

    return edgeId
  },
})

export const deleteEdge = mutation({
  args: {
    edgeId: v.id("edges"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to delete edges")
    }

    const edge = await ctx.db.get(args.edgeId)

    if (!edge) {
      throw new Error("Edge not found")
    }

    const sourceBlock = await ctx.db.get(edge.from)

    if (!sourceBlock) {
      throw new Error("Source block not found")
    }

    if (!canWrite(sourceBlock, userId)) {
      throw new Error("User does not have write access to source block")
    }

    await ctx.db.delete(args.edgeId)

    return { success: true }
  },
})

export const getEdgesFrom = query({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const sourceBlock = await ctx.db.get(args.blockId)

    if (!sourceBlock) {
      throw new Error("Block not found")
    }

    if (!canRead(sourceBlock, userId)) {
      throw new Error("User does not have read access to this block")
    }

    const edges = await ctx.db
      .query("edges")
      .withIndex("by_from", (q) => q.eq("from", args.blockId))
      .collect()

    const filteredEdges = []
    for (const edge of edges) {
      const targetBlock = await ctx.db.get(edge.to)
      if (targetBlock && canRead(targetBlock, userId)) {
        filteredEdges.push(edge)
      }
    }

    return filteredEdges
  },
})

export const getEdgesTo = query({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    const targetBlock = await ctx.db.get(args.blockId)

    if (!targetBlock) {
      throw new Error("Block not found")
    }

    if (!canRead(targetBlock, userId)) {
      throw new Error("User does not have read access to this block")
    }

    const edges = await ctx.db
      .query("edges")
      .withIndex("by_to", (q) => q.eq("to", args.blockId))
      .collect()

    const filteredEdges = []
    for (const edge of edges) {
      const sourceBlock = await ctx.db.get(edge.from)
      if (sourceBlock && canRead(sourceBlock, userId)) {
        filteredEdges.push(edge)
      }
    }

    return filteredEdges
  },
})

export const getEdgesByType = query({
  args: {
    type: v.union(
      v.literal("contains"),
      v.literal("supports"),
      v.literal("refutes"),
      v.literal("references")
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject ?? null

    if (!VALID_EDGE_TYPES.includes(args.type)) {
      throw new Error("Invalid edge type")
    }

    const allEdges = await ctx.db.query("edges").collect()

    const edgesByType = allEdges.filter((edge) => edge.type === args.type)

    const filteredEdges = []
    for (const edge of edgesByType) {
      const sourceBlock = await ctx.db.get(edge.from)
      const targetBlock = await ctx.db.get(edge.to)

      if (
        sourceBlock &&
        targetBlock &&
        canRead(sourceBlock, userId) &&
        canRead(targetBlock, userId)
      ) {
        filteredEdges.push(edge)
      }
    }

    return filteredEdges
  },
})

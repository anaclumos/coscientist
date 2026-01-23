import { v } from "convex/values"
import { mutation } from "./_generated/server"

/**
 * Permission Functions (ADR 6: Permissions and Embargo Model)
 * Block-level access control with sharing, public visibility, and embargo
 */

/**
 * Share a block with another user
 * Adds user to readers (default) or writers list
 * Only block owner can share
 */
export const shareBlock = mutation({
  args: {
    blockId: v.id("blocks"),
    userId: v.string(),
    role: v.optional(v.union(v.literal("reader"), v.literal("writer"))),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const currentUserId = identity?.subject

    if (!currentUserId) {
      throw new Error("User must be authenticated to share blocks")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    // Only owner can modify sharing
    if (block.createdBy !== currentUserId) {
      throw new Error("Only the block owner can modify sharing permissions")
    }

    const role = args.role ?? "reader"
    const { readers, writers } = block.access

    // Add user to appropriate list (avoid duplicates)
    if (role === "reader") {
      if (!readers.includes(args.userId)) {
        readers.push(args.userId)
      }
    } else {
      if (!writers.includes(args.userId)) {
        writers.push(args.userId)
      }
    }

    await ctx.db.patch(args.blockId, {
      access: {
        ...block.access,
        readers,
        writers,
      },
    })

    return { success: true }
  },
})

/**
 * Remove user access from a block
 * Removes user from both readers and writers lists
 * Only block owner can unshare
 */
export const unshareBlock = mutation({
  args: {
    blockId: v.id("blocks"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const currentUserId = identity?.subject

    if (!currentUserId) {
      throw new Error("User must be authenticated to unshare blocks")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    // Only owner can modify sharing
    if (block.createdBy !== currentUserId) {
      throw new Error("Only the block owner can modify sharing permissions")
    }

    // Cannot remove owner from access
    if (args.userId === block.createdBy) {
      throw new Error("Cannot remove owner from block access")
    }

    const readers = block.access.readers.filter((id) => id !== args.userId)
    const writers = block.access.writers.filter((id) => id !== args.userId)

    await ctx.db.patch(args.blockId, {
      access: {
        ...block.access,
        readers,
        writers,
      },
    })

    return { success: true }
  },
})

/**
 * Toggle public visibility of a block
 * Public blocks are viewable by anyone (even unauthenticated users)
 * Only block owner can change public status
 */
export const setPublic = mutation({
  args: {
    blockId: v.id("blocks"),
    isPublic: v.boolean(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const currentUserId = identity?.subject

    if (!currentUserId) {
      throw new Error("User must be authenticated to change public status")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    // Only owner can modify public status
    if (block.createdBy !== currentUserId) {
      throw new Error("Only the block owner can change public visibility")
    }

    await ctx.db.patch(args.blockId, {
      access: {
        ...block.access,
        public: args.isPublic,
      },
    })

    return { success: true }
  },
})

/**
 * Set embargo timestamp for time-locked content
 * Content is hidden until embargo expires (timestamp in ms)
 * Pass null to clear embargo
 * Only block owner can set embargo
 */
export const setEmbargo = mutation({
  args: {
    blockId: v.id("blocks"),
    embargoUntil: v.union(v.number(), v.null()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const currentUserId = identity?.subject

    if (!currentUserId) {
      throw new Error("User must be authenticated to set embargo")
    }

    const block = await ctx.db.get(args.blockId)

    if (!block) {
      throw new Error("Block not found")
    }

    // Only owner can modify embargo
    if (block.createdBy !== currentUserId) {
      throw new Error("Only the block owner can set embargo")
    }

    // Validate embargo is in the future (if not null)
    if (args.embargoUntil !== null && args.embargoUntil <= Date.now()) {
      throw new Error("Embargo must be set to a future timestamp")
    }

    await ctx.db.patch(args.blockId, {
      access: {
        ...block.access,
        embargoUntil: args.embargoUntil ?? undefined,
      },
    })

    return { success: true }
  },
})

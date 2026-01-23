import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

/**
 * Presence System (ADR 7: Presence and Cursors)
 *
 * Implements real-time user awareness for collaborative editing:
 * - Heartbeat mechanism: clients update presence every 5 seconds
 * - Grace period: users are considered active if lastActive within 10 seconds
 * - Status tracking: "editing" / "online" / "idle"
 * - Block-level cursor positions (not precise character positions)
 */

const PRESENCE_TIMEOUT_MS = 10_000 // 10 seconds grace period

/**
 * Update or create presence record for current user on a document.
 * Called by heartbeat mechanism every 5 seconds.
 */
export const updatePresence = mutation({
  args: {
    documentId: v.id("blocks"),
    status: v.string(), // "editing" | "online" | "idle"
    cursorPos: v.optional(v.any()), // Block-level cursor position
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      throw new Error("User must be authenticated to update presence")
    }

    const now = Date.now()

    // Find existing presence record for this user + document
    const existingPresence = await ctx.db
      .query("presence")
      .withIndex("by_documentId", (q) => q.eq("documentId", args.documentId))
      .collect()
      .then((records) => records.find((r) => r.userId === userId))

    if (existingPresence) {
      // Update existing record
      await ctx.db.patch(existingPresence._id, {
        lastActive: now,
        status: args.status,
        cursorPos: args.cursorPos,
      })
      return existingPresence._id
    } else {
      // Create new presence record
      const presenceId = await ctx.db.insert("presence", {
        userId,
        documentId: args.documentId,
        lastActive: now,
        status: args.status,
        cursorPos: args.cursorPos,
      })
      return presenceId
    }
  },
})

/**
 * Get all active users on a document.
 * Returns only users with lastActive within PRESENCE_TIMEOUT_MS (10 seconds).
 */
export const getPresence = query({
  args: {
    documentId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const now = Date.now()
    const cutoffTime = now - PRESENCE_TIMEOUT_MS

    // Query all presence records for this document
    const allPresence = await ctx.db
      .query("presence")
      .withIndex("by_documentId", (q) => q.eq("documentId", args.documentId))
      .collect()

    // Filter to only active users (within grace period)
    const activePresence = allPresence.filter((p) => p.lastActive >= cutoffTime)

    return activePresence
  },
})

/**
 * Remove presence record when user leaves document.
 * Called on component unmount or explicit leave action.
 */
export const leaveDocument = mutation({
  args: {
    documentId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    const userId = identity?.subject

    if (!userId) {
      // Silently fail if not authenticated (user may have logged out)
      return { success: false }
    }

    // Find and delete presence record for this user + document
    const presenceRecord = await ctx.db
      .query("presence")
      .withIndex("by_documentId", (q) => q.eq("documentId", args.documentId))
      .collect()
      .then((records) => records.find((r) => r.userId === userId))

    if (presenceRecord) {
      await ctx.db.delete(presenceRecord._id)
      return { success: true }
    }

    return { success: false }
  },
})

/**
 * Cleanup stale presence records (optional maintenance function).
 * Can be called periodically to remove old presence records.
 */
export const cleanupStalePresence = mutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now()
    const cutoffTime = now - PRESENCE_TIMEOUT_MS * 2 // Double timeout for safety

    const allPresence = await ctx.db.query("presence").collect()

    let deletedCount = 0
    for (const presence of allPresence) {
      if (presence.lastActive < cutoffTime) {
        await ctx.db.delete(presence._id)
        deletedCount++
      }
    }

    return { deletedCount }
  },
})

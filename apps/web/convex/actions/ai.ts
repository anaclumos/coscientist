"use node"

import { v } from "convex/values"
import { suggestEdgeTool } from "../../src/mastra/tools/suggest-edges"
import { api } from "../_generated/api"
import { action } from "../_generated/server"

export const suggestEdge = action({
  args: {
    sourceBlockId: v.id("blocks"),
    targetBlockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    const sourceBlock = await ctx.runQuery(api.blocks.getBlock, {
      blockId: args.sourceBlockId,
    })

    if (!sourceBlock) {
      throw new Error("Source block not found or access denied")
    }

    const targetBlock = await ctx.runQuery(api.blocks.getBlock, {
      blockId: args.targetBlockId,
    })

    if (!targetBlock) {
      throw new Error("Target block not found or access denied")
    }

    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: JSON.stringify(sourceBlock.content),
        targetContent: JSON.stringify(targetBlock.content),
        sourceType: sourceBlock.type,
        targetType: targetBlock.type,
      },
      {}
    )

    return result
  },
})

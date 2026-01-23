import { createTool } from "@mastra/core/tools"
import { z } from "zod"

export const suggestEdgeTool = createTool({
  id: "suggest-edge",
  description:
    "Analyze two blocks and suggest the most appropriate relationship type (edge) between them. Edge types: contains (structural), supports (dialectical evidence), refutes (dialectical contradiction), references (citation)",
  inputSchema: z.object({
    sourceContent: z
      .string()
      .describe(
        "Content of the source block (the block the edge originates from)"
      ),
    targetContent: z
      .string()
      .describe("Content of the target block (the block the edge points to)"),
    sourceType: z
      .string()
      .describe("Type of the source block (text, heading, list, document)"),
    targetType: z
      .string()
      .describe("Type of the target block (text, heading, list, document)"),
  }),
  execute: async (inputData) => {
    const { sourceContent, targetContent, sourceType, targetType } = inputData

    let suggestedType: "contains" | "supports" | "refutes" | "references" =
      "references"
    let confidence = 0.5
    let reasoning = "Default reference relationship"

    if (sourceType === "document" && targetType !== "document") {
      suggestedType = "contains"
      confidence = 0.85
      reasoning = "Document typically contains other block types"
    } else if (sourceType === "heading" && targetType === "text") {
      suggestedType = "contains"
      confidence = 0.75
      reasoning = "Heading likely contains related text content"
    } else if (
      sourceContent.toLowerCase().includes("evidence") ||
      sourceContent.toLowerCase().includes("shows that") ||
      sourceContent.toLowerCase().includes("demonstrates")
    ) {
      suggestedType = "supports"
      confidence = 0.7
      reasoning =
        "Source content contains language suggesting evidential support"
    } else if (
      sourceContent.toLowerCase().includes("however") ||
      sourceContent.toLowerCase().includes("contradicts") ||
      sourceContent.toLowerCase().includes("refutes") ||
      sourceContent.toLowerCase().includes("but")
    ) {
      suggestedType = "refutes"
      confidence = 0.65
      reasoning = "Source content contains contradictory or refuting language"
    } else if (
      sourceContent.toLowerCase().includes("see") ||
      sourceContent.toLowerCase().includes("refer to") ||
      sourceContent.toLowerCase().includes("according to")
    ) {
      suggestedType = "references"
      confidence = 0.7
      reasoning = "Source content contains referential language"
    }

    return {
      suggestedType,
      confidence,
      reasoning,
    }
  },
})

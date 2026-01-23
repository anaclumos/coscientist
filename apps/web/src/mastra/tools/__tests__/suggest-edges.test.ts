import { describe, expect, it } from "vitest"
import { suggestEdgeTool } from "../suggest-edges"

type EdgeSuggestion = {
  suggestedType: "contains" | "supports" | "refutes" | "references"
  confidence: number
  reasoning: string
}

function isEdgeSuggestion(result: unknown): result is EdgeSuggestion {
  return (
    typeof result === "object" &&
    result !== null &&
    "suggestedType" in result &&
    "confidence" in result &&
    "reasoning" in result
  )
}

describe("suggestEdgeTool", () => {
  it("should suggest 'contains' for document containing text", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "This is a document",
        targetContent: "This is some text content",
        sourceType: "document",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.suggestedType).toBe("contains")
    expect(result.confidence).toBeGreaterThan(0.8)
    expect(result.reasoning).toBeTruthy()
  })

  it("should suggest 'contains' for heading containing text", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "Introduction",
        targetContent: "This is the introduction text",
        sourceType: "heading",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.suggestedType).toBe("contains")
    expect(result.confidence).toBeGreaterThan(0.7)
    expect(result.reasoning).toBeTruthy()
  })

  it("should suggest 'supports' for evidential language", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "The evidence shows that climate change is accelerating",
        targetContent: "Global temperatures are rising",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.suggestedType).toBe("supports")
    expect(result.confidence).toBeGreaterThan(0)
    expect(result.confidence).toBeLessThanOrEqual(1)
    expect(result.reasoning).toBeTruthy()
  })

  it("should suggest 'refutes' for contradictory language", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "However, this contradicts the previous claim",
        targetContent: "The original claim",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.suggestedType).toBe("refutes")
    expect(result.confidence).toBeGreaterThan(0)
    expect(result.confidence).toBeLessThanOrEqual(1)
    expect(result.reasoning).toBeTruthy()
  })

  it("should suggest 'references' for referential language", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "See the documentation for more details",
        targetContent: "The documentation",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.suggestedType).toBe("references")
    expect(result.confidence).toBeGreaterThan(0)
    expect(result.confidence).toBeLessThanOrEqual(1)
    expect(result.reasoning).toBeTruthy()
  })

  it("should return confidence score between 0 and 1", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "Some content",
        targetContent: "Other content",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(result.confidence).toBeGreaterThanOrEqual(0)
    expect(result.confidence).toBeLessThanOrEqual(1)
  })

  it("should return valid edge type", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "Some content",
        targetContent: "Other content",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    const validTypes = ["contains", "supports", "refutes", "references"]
    expect(validTypes).toContain(result.suggestedType)
  })

  it("should return reasoning string", async () => {
    if (!suggestEdgeTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await suggestEdgeTool.execute(
      {
        sourceContent: "Some content",
        targetContent: "Other content",
        sourceType: "text",
        targetType: "text",
      },
      {}
    )

    expect(isEdgeSuggestion(result)).toBe(true)
    if (!isEdgeSuggestion(result)) return

    expect(typeof result.reasoning).toBe("string")
    expect(result.reasoning.length).toBeGreaterThan(0)
  })
})

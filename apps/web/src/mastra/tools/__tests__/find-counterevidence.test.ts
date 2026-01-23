import { describe, expect, it } from "vitest"
import { findCounterevidenceTool } from "../find-counterevidence"

type CounterevidenceResult = {
  blockId: string
  content: string
  relevance: number
  reasoning: string
}

type ToolResult = {
  counterevidence: CounterevidenceResult[]
  totalFound: number
}

function isCounterevidenceResult(result: unknown): result is ToolResult {
  return (
    typeof result === "object" &&
    result !== null &&
    "counterevidence" in result &&
    "totalFound" in result &&
    Array.isArray((result as ToolResult).counterevidence)
  )
}

describe("findCounterevidenceTool", () => {
  it("should return valid structure", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "Climate change is accelerating",
        claimType: "text",
        existingBlocks: [],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    expect(result.counterevidence).toBeInstanceOf(Array)
    expect(typeof result.totalFound).toBe("number")
  })

  it("should find blocks with explicit contradiction markers", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "The economy is growing rapidly",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "However, recent data shows economic contraction",
            type: "text",
          },
          {
            id: "block2",
            content: "The economy continues to expand",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    expect(result.totalFound).toBeGreaterThan(0)
    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.relevance).toBeGreaterThan(0)
      expect(block1Result.reasoning).toContain("however")
    }
  })

  it("should find blocks with negation patterns", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "This method is effective",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "This method is not effective and does not work",
            type: "text",
          },
          {
            id: "block2",
            content: "This method shows great results",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.relevance).toBeGreaterThan(0)
      expect(block1Result.reasoning).toContain("negation")
    }
  })

  it("should find blocks with opposing terms", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "The population is increasing",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "The population is decreasing in urban areas",
            type: "text",
          },
          {
            id: "block2",
            content: "Population growth continues",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.relevance).toBeGreaterThan(0)
      expect(block1Result.reasoning).toContain("opposing term")
    }
  })

  it("should prioritize blocks with existing refutes edges", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "This claim is true",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "Some contradictory content",
            type: "text",
            hasRefutesEdge: true,
          },
          {
            id: "block2",
            content: "However, this contradicts the claim",
            type: "text",
            hasRefutesEdge: false,
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    expect(result.totalFound).toBeGreaterThan(0)
    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.reasoning).toContain("refutes")
    }
  })

  it("should find blocks with refutation language", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "This theory is correct",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "Recent studies disprove this theory",
            type: "text",
          },
          {
            id: "block2",
            content: "This theory is widely accepted",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.relevance).toBeGreaterThan(0)
      expect(block1Result.reasoning).toContain("refutation")
    }
  })

  it("should handle empty blocks gracefully", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "Some claim",
        claimType: "text",
        existingBlocks: [],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    expect(result.counterevidence).toEqual([])
    expect(result.totalFound).toBe(0)
  })

  it("should return relevance scores in valid range", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "The system is working",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "However, the system is not working properly",
            type: "text",
          },
          {
            id: "block2",
            content: "The system contradicts expectations and fails",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    for (const ce of result.counterevidence) {
      expect(ce.relevance).toBeGreaterThanOrEqual(0)
      expect(ce.relevance).toBeLessThanOrEqual(1)
    }
  })

  it("should sort results by relevance (highest first)", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "The project is successful",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "The project shows some issues",
            type: "text",
          },
          {
            id: "block2",
            content:
              "However, the project contradicts expectations and fails completely",
            type: "text",
            hasRefutesEdge: true,
          },
          {
            id: "block3",
            content: "The project is not successful",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    if (result.counterevidence.length > 1) {
      for (let i = 0; i < result.counterevidence.length - 1; i++) {
        expect(result.counterevidence[i].relevance).toBeGreaterThanOrEqual(
          result.counterevidence[i + 1].relevance
        )
      }
    }
  })

  it("should include reasoning for each result", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "The hypothesis is valid",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "However, the hypothesis is invalid",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    for (const ce of result.counterevidence) {
      expect(typeof ce.reasoning).toBe("string")
      expect(ce.reasoning.length).toBeGreaterThan(0)
    }
  })

  it("should filter out low-relevance blocks", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "Artificial intelligence is advancing",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "The weather is nice today",
            type: "text",
          },
          {
            id: "block2",
            content: "However, artificial intelligence faces limitations",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeUndefined()

    const block2Result = result.counterevidence.find(
      (ce) => ce.blockId === "block2"
    )
    expect(block2Result).toBeDefined()
  })

  it("should handle blocks with shared terms but different stances", async () => {
    if (!findCounterevidenceTool.execute) {
      throw new Error("Tool execute function not available")
    }

    const result = await findCounterevidenceTool.execute(
      {
        claimContent: "Machine learning models improve accuracy",
        claimType: "text",
        existingBlocks: [
          {
            id: "block1",
            content: "Machine learning models reduce accuracy in some cases",
            type: "text",
          },
          {
            id: "block2",
            content: "Cooking recipes are delicious",
            type: "text",
          },
        ],
      },
      {}
    )

    expect(isCounterevidenceResult(result)).toBe(true)
    if (!isCounterevidenceResult(result)) return

    const block1Result = result.counterevidence.find(
      (ce) => ce.blockId === "block1"
    )
    expect(block1Result).toBeDefined()
    if (block1Result) {
      expect(block1Result.relevance).toBeGreaterThan(0)
    }

    const block2Result = result.counterevidence.find(
      (ce) => ce.blockId === "block2"
    )
    expect(block2Result).toBeUndefined()
  })
})

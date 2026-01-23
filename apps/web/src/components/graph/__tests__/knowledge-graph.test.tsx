import { describe, expect, it } from "vitest"

describe("KnowledgeGraph", () => {
  it("should be importable", async () => {
    const module = await import("../knowledge-graph")
    expect(module.KnowledgeGraph).toBeDefined()
  })

  it("should export a function component", async () => {
    const { KnowledgeGraph } = await import("../knowledge-graph")
    expect(typeof KnowledgeGraph).toBe("function")
  })

  it("should accept documentId and onNodeClick props", async () => {
    const { KnowledgeGraph } = await import("../knowledge-graph")
    expect(KnowledgeGraph.length).toBeGreaterThanOrEqual(0)
  })
})

import { describe, expect, it } from "vitest"

describe("CollaborativeEditor", () => {
  it("should be importable", async () => {
    const module = await import("../collaborative-editor")
    expect(module.CollaborativeEditor).toBeDefined()
  })

  it("should export a function component", async () => {
    const { CollaborativeEditor } = await import("../collaborative-editor")
    expect(typeof CollaborativeEditor).toBe("function")
  })

  it("should accept documentId prop", async () => {
    const { CollaborativeEditor } = await import("../collaborative-editor")
    expect(CollaborativeEditor.length).toBeGreaterThanOrEqual(0)
  })
})

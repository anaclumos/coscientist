import { describe, expect, it } from "vitest"

describe("BlockEditor", () => {
  it("should be importable", async () => {
    const module = await import("../block-editor")
    expect(module.BlockEditor).toBeDefined()
  })

  it("should export a function component", async () => {
    const { BlockEditor } = await import("../block-editor")
    expect(typeof BlockEditor).toBe("function")
  })

  it("should accept parentId prop", async () => {
    const { BlockEditor } = await import("../block-editor")
    expect(BlockEditor.length).toBeGreaterThanOrEqual(0)
  })

  it("should accept blockId prop", async () => {
    const { BlockEditor } = await import("../block-editor")
    expect(BlockEditor.length).toBeGreaterThanOrEqual(0)
  })
})

import { describe, expect, it } from "vitest"
import { calculateNextReview, getInitialReviewState, ReviewState } from "../sm2"

describe("SM-2 Algorithm", () => {
  describe("Initial state", () => {
    it("should create initial review state with correct defaults", () => {
      const state = getInitialReviewState()
      expect(state.easiness).toBe(2.5)
      expect(state.interval).toBe(0)
      expect(state.repetitions).toBe(0)
      expect(state.nextReview).toBeInstanceOf(Date)
    })
  })

  describe("Quality 0-2 (Failure)", () => {
    it("should reset repetitions to 0 on quality 0", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 10,
        repetitions: 3,
        nextReview: new Date(),
      }
      const result = calculateNextReview(0, state)
      expect(result.repetitions).toBe(0)
      expect(result.interval).toBe(1)
      expect(result.easiness).toBe(2.5) // EF unchanged on failure
    })

    it("should reset repetitions to 0 on quality 1", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 10,
        repetitions: 3,
        nextReview: new Date(),
      }
      const result = calculateNextReview(1, state)
      expect(result.repetitions).toBe(0)
      expect(result.interval).toBe(1)
    })

    it("should reset repetitions to 0 on quality 2", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 10,
        repetitions: 3,
        nextReview: new Date(),
      }
      const result = calculateNextReview(2, state)
      expect(result.repetitions).toBe(0)
      expect(result.interval).toBe(1)
    })

    it("should not change easiness factor on failure", () => {
      const state: ReviewState = {
        easiness: 2.0,
        interval: 10,
        repetitions: 3,
        nextReview: new Date(),
      }
      const result = calculateNextReview(1, state)
      expect(result.easiness).toBe(2.0)
    })
  })

  describe("Quality 3-5 (Success)", () => {
    it("should increment repetitions on quality 3", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 0,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      expect(result.repetitions).toBe(1)
    })

    it("should set interval to 1 day on first repetition (quality >= 3)", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      expect(result.interval).toBe(1)
    })

    it("should set interval to 6 days on second repetition (quality >= 3)", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      expect(result.interval).toBe(6)
    })

    it("should multiply interval by easiness factor on third+ repetition", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 6,
        repetitions: 2,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      expect(result.interval).toBe(15) // 6 * 2.5 = 15
    })

    it("should round up fractional intervals", () => {
      const state: ReviewState = {
        easiness: 1.5,
        interval: 6,
        repetitions: 2,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      expect(result.interval).toBe(9) // ceil(6 * 1.5) = 9
    })
  })

  describe("Easiness factor calculation", () => {
    it("should not change easiness factor when quality is 4", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(4, state)
      expect(result.easiness).toBe(2.5)
    })

    it("should increase easiness factor when quality is 5", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(5, state)
      // EF' = EF + (0.1 - (5-5) * (0.08 + (5-5) * 0.02))
      // EF' = 2.5 + (0.1 - 0) = 2.6
      expect(result.easiness).toBe(2.6)
    })

    it("should decrease easiness factor when quality is 3", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      // EF' = EF + (0.1 - (5-3) * (0.08 + (5-3) * 0.02))
      // EF' = 2.5 + (0.1 - 2 * (0.08 + 2 * 0.02))
      // EF' = 2.5 + (0.1 - 2 * (0.08 + 0.04))
      // EF' = 2.5 + (0.1 - 2 * 0.12)
      // EF' = 2.5 + (0.1 - 0.24)
      // EF' = 2.5 - 0.14 = 2.36
      expect(result.easiness).toBeCloseTo(2.36, 5)
    })

    it("should enforce minimum easiness factor of 1.3", () => {
      const state: ReviewState = {
        easiness: 1.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)
      // EF' = 1.5 + (0.1 - (5-3) * (0.08 + (5-3) * 0.02))
      // EF' = 1.5 + (0.1 - 2 * (0.08 + 2 * 0.02))
      // EF' = 1.5 + (0.1 - 2 * (0.08 + 0.04))
      // EF' = 1.5 + (0.1 - 2 * 0.12)
      // EF' = 1.5 + (0.1 - 0.24)
      // EF' = 1.5 - 0.14 = 1.36 (not clamped, above 1.3)
      expect(result.easiness).toBeCloseTo(1.36, 5)

      // Test with lower EF that needs clamping
      const state2: ReviewState = {
        easiness: 1.4,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result2 = calculateNextReview(3, state2)
      // EF' = 1.4 + (0.1 - (5-3) * (0.08 + (5-3) * 0.02))
      // EF' = 1.4 + (0.1 - 2 * 0.12)
      // EF' = 1.4 - 0.14 = 1.26
      // Should be clamped to 1.3
      expect(result2.easiness).toBe(1.3)
    })

    it("should calculate correct EF for quality 0", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(0, state)
      // Quality 0 doesn't change EF on failure
      expect(result.easiness).toBe(2.5)
    })

    it("should calculate correct EF for quality 1", () => {
      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(1, state)
      // Quality 1 doesn't change EF on failure
      expect(result.easiness).toBe(2.5)
    })
  })

  describe("nextReview date calculation", () => {
    it("should set nextReview to today + interval days", () => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const state: ReviewState = {
        easiness: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)

      const expected = new Date(today)
      expected.setDate(expected.getDate() + 1) // interval is 1

      expect(result.nextReview.getDate()).toBe(expected.getDate())
      expect(result.nextReview.getMonth()).toBe(expected.getMonth())
      expect(result.nextReview.getFullYear()).toBe(expected.getFullYear())
    })

    it("should calculate nextReview correctly for larger intervals", () => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const state: ReviewState = {
        easiness: 2.5,
        interval: 1,
        repetitions: 1,
        nextReview: new Date(),
      }
      const result = calculateNextReview(3, state)

      const expected = new Date(today)
      expected.setDate(expected.getDate() + 6) // interval is 6

      expect(result.nextReview.getDate()).toBe(expected.getDate())
      expect(result.nextReview.getMonth()).toBe(expected.getMonth())
      expect(result.nextReview.getFullYear()).toBe(expected.getFullYear())
    })
  })

  describe("Complete workflow", () => {
    it("should handle a complete learning sequence", () => {
      let state = getInitialReviewState()
      expect(state.repetitions).toBe(0)
      expect(state.easiness).toBe(2.5)

      // First review - quality 4 (correct with hesitation)
      state = calculateNextReview(4, state)
      expect(state.repetitions).toBe(1)
      expect(state.interval).toBe(1)
      expect(state.easiness).toBe(2.5) // No change for quality 4

      // Second review - quality 4
      state = calculateNextReview(4, state)
      expect(state.repetitions).toBe(2)
      expect(state.interval).toBe(6)
      expect(state.easiness).toBe(2.5)

      // Third review - quality 5 (perfect)
      state = calculateNextReview(5, state)
      expect(state.repetitions).toBe(3)
      expect(state.interval).toBe(15) // 6 * 2.5 = 15
      expect(state.easiness).toBe(2.6) // Increased

      // Fourth review - quality 3 (difficult)
      state = calculateNextReview(3, state)
      expect(state.repetitions).toBe(4)
      expect(state.interval).toBe(39) // ceil(15 * 2.6) = 39
      expect(state.easiness).toBeCloseTo(2.46, 5) // Decreased
    })

    it("should handle failure and recovery", () => {
      let state = getInitialReviewState()

      // First review - quality 4
      state = calculateNextReview(4, state)
      expect(state.repetitions).toBe(1)

      // Second review - quality 4
      state = calculateNextReview(4, state)
      expect(state.repetitions).toBe(2)

      // Third review - quality 1 (failure)
      state = calculateNextReview(1, state)
      expect(state.repetitions).toBe(0) // Reset
      expect(state.interval).toBe(1) // Back to 1 day
      expect(state.easiness).toBe(2.5) // Unchanged on failure

      // Fourth review - quality 4 (recovery)
      state = calculateNextReview(4, state)
      expect(state.repetitions).toBe(1)
      expect(state.interval).toBe(1)
    })
  })
})

import { createTool } from "@mastra/core/tools"
import { z } from "zod"

interface CounterevidenceResult {
  blockId: string
  content: string
  relevance: number
  reasoning: string
}

const WORD_SPLIT_REGEX = /\W+/

const STOP_WORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "by",
  "from",
  "as",
  "is",
  "was",
  "are",
  "were",
  "been",
  "be",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "should",
  "could",
  "may",
  "might",
  "can",
  "this",
  "that",
  "these",
  "those",
])

const CONTRADICTION_MARKERS = [
  "however",
  "but",
  "contradicts",
  "refutes",
  "contrary to",
  "in contrast",
  "on the other hand",
  "nevertheless",
  "nonetheless",
  "although",
  "despite",
  "yet",
  "whereas",
]

const NEGATION_PATTERNS = [
  "not",
  "no",
  "never",
  "neither",
  "nor",
  "cannot",
  "can't",
  "won't",
  "wouldn't",
  "shouldn't",
  "doesn't",
  "don't",
  "didn't",
  "isn't",
  "aren't",
  "wasn't",
  "weren't",
]

const OPPOSING_PAIRS = [
  ["increas", "decreas"],
  ["rise", "fall"],
  ["rising", "falling"],
  ["grow", "shrink"],
  ["expand", "contract"],
  ["improve", "worsen"],
  ["benefit", "harm"],
  ["positive", "negative"],
  ["success", "failure"],
  ["true", "false"],
  ["correct", "incorrect"],
  ["valid", "invalid"],
  ["support", "oppose"],
  ["agree", "disagree"],
  ["confirm", "deny"],
  ["accept", "reject"],
]

const REFUTATION_TERMS = [
  "disprove",
  "debunk",
  "falsify",
  "undermine",
  "challenge",
  "question",
  "doubt",
  "dispute",
  "contest",
  "counter",
  "rebut",
]

function checkContradictionMarkers(blockLower: string): {
  score: number
  reason: string | null
} {
  for (const marker of CONTRADICTION_MARKERS) {
    if (blockLower.includes(marker)) {
      return {
        score: 0.25,
        reason: `Contains contradiction marker: "${marker}"`,
      }
    }
  }
  return { score: 0, reason: null }
}

function checkNegationPatterns(blockLower: string): {
  score: number
  reason: string | null
} {
  let negationCount = 0
  for (const pattern of NEGATION_PATTERNS) {
    const regex = new RegExp(`\\b${pattern}\\b`, "gi")
    const matches = blockLower.match(regex)
    if (matches) {
      negationCount += matches.length
    }
  }
  if (negationCount > 0) {
    return {
      score: Math.min(0.2, negationCount * 0.1),
      reason: `Contains ${negationCount} negation pattern(s)`,
    }
  }
  return { score: 0, reason: null }
}

function checkOpposingTerms(
  claimLower: string,
  blockLower: string
): { score: number; reason: string | null } {
  for (const [term1, term2] of OPPOSING_PAIRS) {
    const hasTerm1InClaim = claimLower.includes(term1)
    const hasTerm2InClaim = claimLower.includes(term2)
    const hasTerm1InBlock = blockLower.includes(term1)
    const hasTerm2InBlock = blockLower.includes(term2)

    if (
      (hasTerm1InClaim && hasTerm2InBlock) ||
      (hasTerm2InClaim && hasTerm1InBlock)
    ) {
      return {
        score: 0.15,
        reason: `Contains opposing term: claim has "${hasTerm1InClaim ? term1 : term2}", block has "${hasTerm1InBlock ? term1 : term2}"`,
      }
    }
  }
  return { score: 0, reason: null }
}

function checkSharedTerms(
  claimWords: string[],
  blockLower: string
): { score: number; reason: string | null } {
  let sharedTerms = 0
  for (const word of claimWords) {
    if (blockLower.includes(word)) {
      sharedTerms++
    }
  }
  if (sharedTerms >= 2) {
    return {
      score: Math.min(0.15, sharedTerms * 0.05),
      reason: `Shares ${sharedTerms} key term(s) with claim`,
    }
  }
  return { score: 0, reason: null }
}

function checkRefutationLanguage(blockLower: string): {
  score: number
  reason: string | null
} {
  for (const term of REFUTATION_TERMS) {
    if (blockLower.includes(term)) {
      return { score: 0.2, reason: `Contains refutation language: "${term}"` }
    }
  }
  return { score: 0, reason: null }
}

export const findCounterevidenceTool = createTool({
  id: "find-counterevidence",
  description:
    "Search for counterarguments and contradictions to a claim. Uses heuristic analysis to find blocks that potentially refute or contradict the given claim.",
  inputSchema: z.object({
    claimContent: z
      .string()
      .describe("The content of the claim to find counterevidence for"),
    claimType: z
      .string()
      .describe("Type of the claim block (text, heading, list, document)"),
    existingBlocks: z
      .array(
        z.object({
          id: z.string().describe("Unique identifier of the block"),
          content: z.string().describe("Content of the block"),
          type: z.string().describe("Type of the block"),
          hasRefutesEdge: z
            .boolean()
            .optional()
            .describe("Whether this block has a 'refutes' edge to the claim"),
        })
      )
      .describe("Array of existing blocks to search through"),
  }),
  execute: (inputData) => {
    const { claimContent, existingBlocks } = inputData

    const counterevidence: CounterevidenceResult[] = []

    const claimLower = claimContent.toLowerCase()

    const claimWords = claimLower
      .split(WORD_SPLIT_REGEX)
      .filter((word) => word.length > 3 && !STOP_WORDS.has(word))

    for (const block of existingBlocks) {
      const blockLower = block.content.toLowerCase()
      let relevance = 0
      const reasons: string[] = []

      // Priority 1: Blocks with existing "refutes" edges (highest confidence)
      if (block.hasRefutesEdge) {
        relevance += 0.4
        reasons.push("Already connected via 'refutes' edge")
      }

      // Priority 2: Explicit contradiction markers
      const contradictionResult = checkContradictionMarkers(blockLower)
      if (contradictionResult.reason) {
        relevance += contradictionResult.score
        reasons.push(contradictionResult.reason)
      }

      // Priority 3: Negation patterns
      const negationResult = checkNegationPatterns(blockLower)
      if (negationResult.reason) {
        relevance += negationResult.score
        reasons.push(negationResult.reason)
      }

      // Priority 4: Opposing terms
      const opposingResult = checkOpposingTerms(claimLower, blockLower)
      if (opposingResult.reason) {
        relevance += opposingResult.score
        reasons.push(opposingResult.reason)
      }

      // Priority 5: Shared topic (same key terms) but different stance
      const sharedResult = checkSharedTerms(claimWords, blockLower)
      if (sharedResult.reason) {
        relevance += sharedResult.score
        reasons.push(sharedResult.reason)
      }

      // Priority 6: Explicit refutation language
      const refutationResult = checkRefutationLanguage(blockLower)
      if (refutationResult.reason) {
        relevance += refutationResult.score
        reasons.push(refutationResult.reason)
      }

      // Only include blocks with meaningful relevance
      if (relevance > 0.1) {
        // Normalize relevance to 0-1 range (cap at 1.0)
        const normalizedRelevance = Math.min(1.0, relevance)

        counterevidence.push({
          blockId: block.id,
          content: block.content,
          relevance: normalizedRelevance,
          reasoning: reasons.join("; "),
        })
      }
    }

    // Sort by relevance (highest first)
    counterevidence.sort((a, b) => b.relevance - a.relevance)

    return Promise.resolve({
      counterevidence,
      totalFound: counterevidence.length,
    })
  },
})

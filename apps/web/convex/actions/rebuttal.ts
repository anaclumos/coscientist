"use node"

import { v } from "convex/values"
import { api } from "../_generated/api"
import type { Id } from "../_generated/dataModel"
import { action } from "../_generated/server"

interface CounterevidenceResult {
  blockId: string
  content: string
  relevance: number
  reasoning: string
  edgeType?: string
}

// Top-level regex for performance
const WORD_SPLIT_REGEX = /\W+/

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
  targetLower: string,
  blockLower: string
): { score: number; reason: string | null } {
  for (const [term1, term2] of OPPOSING_PAIRS) {
    const hasTerm1InTarget = targetLower.includes(term1)
    const hasTerm2InTarget = targetLower.includes(term2)
    const hasTerm1InBlock = blockLower.includes(term1)
    const hasTerm2InBlock = blockLower.includes(term2)

    if (
      (hasTerm1InTarget && hasTerm2InBlock) ||
      (hasTerm2InTarget && hasTerm1InBlock)
    ) {
      return {
        score: 0.15,
        reason: `Contains opposing term: target has "${hasTerm1InTarget ? term1 : term2}", block has "${hasTerm1InBlock ? term1 : term2}"`,
      }
    }
  }
  return { score: 0, reason: null }
}

function checkSharedTerms(
  targetKeywords: string[],
  blockLower: string
): { score: number; reason: string | null } {
  let sharedTerms = 0
  for (const keyword of targetKeywords) {
    if (blockLower.includes(keyword)) {
      sharedTerms++
    }
  }
  if (sharedTerms >= 2) {
    return {
      score: Math.min(0.15, sharedTerms * 0.05),
      reason: `Shares ${sharedTerms} key term(s) with target`,
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

/**
 * Find counterevidence for a given block.
 *
 * Search strategy (priority order):
 * 1. Blocks with explicit "refutes" edges to target block
 * 2. Blocks with "refutes" edges to related blocks (shares edges with target)
 * 3. Blocks with contradictory content (heuristic-based)
 *
 * All results are filtered by user read permissions.
 */
export const findCounterEvidence = action({
  args: {
    blockId: v.id("blocks"),
  },
  handler: async (ctx, args) => {
    // Get user identity for permission checks
    await ctx.auth.getUserIdentity()

    // 1. Get the target block
    const targetBlock = await ctx.runQuery(api.blocks.getBlock, {
      blockId: args.blockId,
    })

    if (!targetBlock) {
      throw new Error("Block not found or you don't have access")
    }

    const counterevidence: CounterevidenceResult[] = []
    const seenBlockIds = new Set<string>()

    // 2. Priority 1: Find blocks with explicit "refutes" edges TO this block
    const incomingEdges = await ctx.runQuery(api.edges.getEdgesTo, {
      blockId: args.blockId,
    })

    const refutingEdges = incomingEdges.filter(
      (edge) => edge.type === "refutes"
    )

    for (const edge of refutingEdges) {
      const refutingBlock = await ctx.runQuery(api.blocks.getBlock, {
        blockId: edge.from,
      })

      if (refutingBlock && !seenBlockIds.has(refutingBlock._id)) {
        seenBlockIds.add(refutingBlock._id)
        counterevidence.push({
          blockId: refutingBlock._id,
          content: getBlockContentAsString(refutingBlock.content),
          relevance: 1.0, // Highest confidence - explicit refutes edge
          reasoning: "Explicitly refutes this block via 'refutes' edge",
          edgeType: "refutes",
        })
      }
    }

    // 3. Priority 2: Find blocks that refute related blocks
    // Get all edges FROM the target block
    const outgoingEdges = await ctx.runQuery(api.edges.getEdgesFrom, {
      blockId: args.blockId,
    })

    // For each related block, find what refutes it
    for (const edge of outgoingEdges) {
      const relatedEdges = await ctx.runQuery(api.edges.getEdgesTo, {
        blockId: edge.to,
      })

      const relatedRefutingEdges = relatedEdges.filter(
        (e) => e.type === "refutes"
      )

      for (const refutingEdge of relatedRefutingEdges) {
        const refutingBlock = await ctx.runQuery(api.blocks.getBlock, {
          blockId: refutingEdge.from,
        })

        if (refutingBlock && !seenBlockIds.has(refutingBlock._id)) {
          seenBlockIds.add(refutingBlock._id)
          counterevidence.push({
            blockId: refutingBlock._id,
            content: getBlockContentAsString(refutingBlock.content),
            relevance: 0.7, // High confidence - refutes related block
            reasoning: "Refutes a block related to this one",
            edgeType: "refutes",
          })
        }
      }
    }

    // 4. Priority 3: Heuristic-based contradiction detection
    // Get all refutes edges to find potential counterevidence blocks
    const allRefutesEdges = await ctx.runQuery(api.edges.getEdgesByType, {
      type: "refutes",
    })

    // Collect all blocks that have refutes edges (they're likely counterevidence)
    const potentialCounterBlocks = new Set<string>()
    for (const edge of allRefutesEdges) {
      potentialCounterBlocks.add(edge.from)
    }

    // Analyze these blocks for contradiction patterns
    const targetContent = getBlockContentAsString(targetBlock.content)

    // Extract key terms from target block
    const targetKeywords = extractKeywords(targetContent)

    for (const blockId of potentialCounterBlocks) {
      if (seenBlockIds.has(blockId)) {
        continue // Skip already found blocks
      }

      const block = await ctx.runQuery(api.blocks.getBlock, {
        blockId: blockId as Id<"blocks">,
      })

      if (!block) {
        continue
      }

      const blockContent = getBlockContentAsString(block.content)
      const heuristicResult = analyzeContradiction(
        targetContent,
        targetKeywords,
        blockContent
      )

      if (heuristicResult.relevance > 0.1) {
        seenBlockIds.add(block._id)
        counterevidence.push({
          blockId: block._id,
          content: blockContent,
          relevance: heuristicResult.relevance,
          reasoning: heuristicResult.reasoning,
        })
      }
    }

    // Sort by relevance (highest first)
    counterevidence.sort((a, b) => b.relevance - a.relevance)

    return {
      counterevidence,
      totalFound: counterevidence.length,
    }
  },
})

/**
 * Extract content from block as string
 */
function getBlockContentAsString(content: unknown): string {
  if (typeof content === "string") {
    return content
  }
  if (typeof content === "object" && content !== null) {
    // Handle structured content (e.g., rich text, lists)
    const obj = content as Record<string, unknown>
    if (obj.text) {
      return String(obj.text)
    }
    if (obj.content) {
      return getBlockContentAsString(obj.content)
    }
    if (Array.isArray(content)) {
      return content.map(getBlockContentAsString).join(" ")
    }
    return JSON.stringify(content)
  }
  return String(content)
}

/**
 * Extract keywords from text (excluding stop words)
 */
function extractKeywords(text: string): string[] {
  const stopWords = new Set([
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

  return text
    .toLowerCase()
    .split(WORD_SPLIT_REGEX)
    .filter((word) => word.length > 3 && !stopWords.has(word))
}

function analyzeContradiction(
  targetContent: string,
  targetKeywords: string[],
  blockContent: string
): { relevance: number; reasoning: string } {
  const blockLower = blockContent.toLowerCase()
  const targetLower = targetContent.toLowerCase()
  let relevance = 0
  const reasons: string[] = []

  // Heuristic 1: Contradiction markers
  const contradictionResult = checkContradictionMarkers(blockLower)
  if (contradictionResult.reason) {
    relevance += contradictionResult.score
    reasons.push(contradictionResult.reason)
  }

  // Heuristic 2: Negation patterns
  const negationResult = checkNegationPatterns(blockLower)
  if (negationResult.reason) {
    relevance += negationResult.score
    reasons.push(negationResult.reason)
  }

  // Heuristic 3: Opposing terms
  const opposingResult = checkOpposingTerms(targetLower, blockLower)
  if (opposingResult.reason) {
    relevance += opposingResult.score
    reasons.push(opposingResult.reason)
  }

  // Heuristic 4: Shared topic (same key terms)
  const sharedResult = checkSharedTerms(targetKeywords, blockLower)
  if (sharedResult.reason) {
    relevance += sharedResult.score
    reasons.push(sharedResult.reason)
  }

  // Heuristic 5: Explicit refutation language
  const refutationResult = checkRefutationLanguage(blockLower)
  if (refutationResult.reason) {
    relevance += refutationResult.score
    reasons.push(refutationResult.reason)
  }

  // Normalize relevance to 0-1 range
  const normalizedRelevance = Math.min(1.0, relevance)

  return {
    relevance: normalizedRelevance,
    reasoning:
      reasons.length > 0 ? reasons.join("; ") : "No contradiction detected",
  }
}

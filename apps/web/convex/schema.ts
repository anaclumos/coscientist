import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

/**
 * Block Types (ADR 1: Unified Block Model)
 * All content is represented as blocks - the atomic unit of knowledge
 */
const blockTypes = v.union(
  v.literal("text"),
  v.literal("heading"),
  v.literal("list"),
  v.literal("document")
)

/**
 * Edge Types (ADR 4: Edge Types and Dialectical Graph)
 * Typed relationships between blocks forming a directed knowledge graph
 */
const edgeTypes = v.union(
  v.literal("contains"), // Structural: document contains block
  v.literal("supports"), // Dialectical: evidence supports claim
  v.literal("refutes"), // Dialectical: block refutes another
  v.literal("references") // Reference: block references another
)

export default defineSchema({
  /**
   * Blocks Table (ADR 1)
   * Unified model where all content is stored as blocks
   * - Text paragraphs, headings, lists, and documents are all blocks
   * - Each block is an atomic unit with unique ID and type metadata
   * - Hierarchical relationships managed via edges (ADR 4)
   */
  blocks: defineTable({
    type: blockTypes,
    content: v.any(), // Flexible content: text, JSON, references, etc.
    createdBy: v.string(), // User ID who created the block
    createdAt: v.number(), // Timestamp in milliseconds
    updatedAt: v.number(), // Timestamp of last update
    parentId: v.optional(v.id("blocks")), // Optional parent for hierarchy
    access: v.object({
      readers: v.array(v.string()), // User IDs who can read
      writers: v.array(v.string()), // User IDs who can write
      public: v.boolean(), // Viewable by anyone
      embargoUntil: v.optional(v.number()), // Time lock (timestamp in ms)
    }), // ADR 6: Block-level ACL with time-based embargo
  }).index("by_parentId", ["parentId"]), // Index for efficient hierarchy queries

  /**
   * Edges Table (ADR 4)
   * Directed typed edges forming the dialectical graph
   * - Edges connect blocks with semantic meaning via type field
   * - Enables graph traversal: find supporting evidence, contradictions, references
   * - Separate from blocks to normalize many-to-many relationships
   */
  edges: defineTable({
    from: v.id("blocks"), // Source block (start node)
    to: v.id("blocks"), // Target block (end node)
    type: edgeTypes, // Relationship type
    createdBy: v.string(), // User ID who created the edge
    createdAt: v.number(), // Timestamp in milliseconds
  })
    .index("by_from", ["from"]) // Index for outgoing edges (find what this block points to)
    .index("by_to", ["to"]), // Index for incoming edges (find what points to this block)

  /**
   * Steps Table (ADR 2: Versioning Strategy)
   * Atomic changes for real-time collaborative editing via ProseMirror OT
   * - Each step represents a single edit operation (insert, delete, etc.)
   * - Monotonic version numbers enable conflict resolution and rebasing
   * - Clients apply steps to reconstruct document state
   */
  steps: defineTable({
    documentId: v.id("blocks"), // Reference to the document being edited
    stepData: v.any(), // ProseMirror step JSON (insert, delete, replace, etc.)
    version: v.number(), // Monotonic version counter for this document
    clientId: v.string(), // Client identifier for attribution
    timestamp: v.number(), // Timestamp in milliseconds
  }).index("by_documentId_version", ["documentId", "version"]), // Compound index for efficient step retrieval

  /**
   * Snapshots Table (ADR 2: Versioning Strategy)
   * Periodic full-state checkpoints for efficient document reconstruction
   * - Snapshots capture complete document state at specific versions
   * - New collaborators load latest snapshot + subsequent steps (not entire history)
   * - Enables history truncation: old steps can be archived after snapshot
   */
  snapshots: defineTable({
    documentId: v.id("blocks"), // Reference to the document
    version: v.number(), // Version number this snapshot represents
    contentState: v.any(), // Full ProseMirror document JSON at this version
    timestamp: v.number(), // Timestamp in milliseconds
  }),

  /**
   * Presence Table (ADR 7: Presence and Cursors)
   * Real-time user awareness for collaborative editing
   * - Tracks who is online/editing each document
   * - Heartbeat mechanism keeps presence fresh
   * - Enables UI indicators: avatars, typing status, cursor positions
   */
  presence: defineTable({
    userId: v.string(), // User identifier (or session ID)
    documentId: v.id("blocks"), // Document being viewed/edited
    lastActive: v.number(), // Timestamp of last heartbeat or action
    cursorPos: v.optional(v.any()), // Current cursor/selection representation (block-level or position)
    status: v.string(), // "editing" / "online" / "idle" or typing indicator
  }).index("by_documentId", ["documentId"]), // Index for querying all users on a document

  /**
   * Reviews Table (Spaced Repetition for Knowledge Verification)
   * Implements SM-2 algorithm for scheduling block reviews
   * - Each review tracks a user's verification schedule for a specific block
   * - SM-2 state (easiness, interval, repetitions) determines next review timing
   * - Quality ratings (0-5) update the schedule: <3 resets, >=3 increases interval
   * - Enables active recall practice to combat illusions of competence
   */
  reviews: defineTable({
    blockId: v.id("blocks"), // Reference to the block being reviewed
    userId: v.string(), // User who owns this review schedule
    nextReview: v.number(), // Timestamp (ms) when review is due
    easiness: v.number(), // SM-2 easiness factor (default 2.5, min 1.3)
    interval: v.number(), // Days until next review
    repetitions: v.number(), // Number of successful reviews (quality >= 3)
  })
    .index("by_userId_nextReview", ["userId", "nextReview"]) // Efficient query for due reviews
    .index("by_blockId_userId", ["blockId", "userId"]), // Find user's review for a block
})

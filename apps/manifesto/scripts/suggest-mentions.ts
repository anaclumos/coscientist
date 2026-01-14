import fs from "node:fs/promises"
import path from "node:path"

interface NoteEmbedding {
  slug: string
  title: string
  embedding: number[]
  existingLinks: string[]
}

interface EmbeddingStore {
  model: string
  generatedAt: string
  notes: NoteEmbedding[]
}

interface MentionSuggestion {
  sourceSlug: string
  sourceTitle: string
  targetSlug: string
  targetTitle: string
  similarity: number
  alreadyLinked: boolean
}

const SIMILARITY_THRESHOLD = 0.75
const MAX_SUGGESTIONS_PER_NOTE = 5

function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }

  if (normA === 0 || normB === 0) {
    return 0
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

async function suggestMentions() {
  const SCRIPT_DIR = import.meta.dirname
  const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
  const storePath = path.join(PROJECT_ROOT, "src/data/embeddings.json")

  const storeExists = await fs
    .access(storePath)
    .then(() => true)
    .catch(() => false)

  if (!storeExists) {
    console.error("Embeddings not found. Run generate-embeddings.ts first.")
    process.exit(1)
  }

  const store: EmbeddingStore = JSON.parse(
    await fs.readFile(storePath, "utf-8")
  )

  console.log(
    `Analyzing ${store.notes.length} notes for mention suggestions...\n`
  )

  const allSuggestions: MentionSuggestion[] = []

  for (const source of store.notes) {
    const similarities: { target: NoteEmbedding; similarity: number }[] = []

    for (const target of store.notes) {
      if (source.slug === target.slug) {
        continue
      }

      const similarity = cosineSimilarity(source.embedding, target.embedding)
      if (similarity >= SIMILARITY_THRESHOLD) {
        similarities.push({ target, similarity })
      }
    }

    similarities.sort((a, b) => b.similarity - a.similarity)
    const topSimilar = similarities.slice(0, MAX_SUGGESTIONS_PER_NOTE)

    for (const { target, similarity } of topSimilar) {
      const alreadyLinked = source.existingLinks.includes(target.slug)

      allSuggestions.push({
        sourceSlug: source.slug,
        sourceTitle: source.title,
        targetSlug: target.slug,
        targetTitle: target.title,
        similarity,
        alreadyLinked,
      })
    }
  }

  const newSuggestions = allSuggestions.filter((s) => !s.alreadyLinked)

  const bySource = new Map<string, MentionSuggestion[]>()
  for (const s of newSuggestions) {
    if (!bySource.has(s.sourceSlug)) {
      bySource.set(s.sourceSlug, [])
    }
    bySource.get(s.sourceSlug)?.push(s)
  }

  console.log("## Suggested New Mentions\n")
  console.log(
    `Found ${newSuggestions.length} new link suggestions across ${bySource.size} notes.\n`
  )

  for (const [slug, suggestions] of bySource) {
    console.log(`### ${slug}`)
    for (const s of suggestions) {
      console.log(
        `  → [[${s.targetSlug}]] (${(s.similarity * 100).toFixed(1)}% similar)`
      )
    }
    console.log()
  }

  const outputPath = path.join(
    PROJECT_ROOT,
    "src/data/mention-suggestions.json"
  )
  await fs.writeFile(
    outputPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        threshold: SIMILARITY_THRESHOLD,
        totalSuggestions: newSuggestions.length,
        suggestions: newSuggestions,
      },
      null,
      2
    )
  )

  console.log(`\n✓ Suggestions saved to ${outputPath}`)
}

suggestMentions().catch(console.error)

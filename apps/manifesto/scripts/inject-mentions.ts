import fs from "node:fs/promises"
import path from "node:path"

interface MentionSuggestion {
  sourceSlug: string
  targetSlug: string
  targetTitle: string
  similarity: number
}

interface SuggestionStore {
  generatedAt: string
  threshold: number
  totalSuggestions: number
  suggestions: MentionSuggestion[]
}

const MIN_SIMILARITY_FOR_AUTO = 0.85
const RELATED_SECTION_REGEX = /## Related|## See also/i
const FRONTMATTER_REGEX = /^(---\n[\s\S]*?\n---\n)([\s\S]*)$/

async function injectMentions(mode: "related-section" | "dry-run" = "dry-run") {
  const SCRIPT_DIR = import.meta.dirname
  const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
  const suggestionsPath = path.join(
    PROJECT_ROOT,
    "src/data/mention-suggestions.json"
  )
  const notesDir = path.join(PROJECT_ROOT, "src/content/notes/en")

  const suggestionsExist = await fs
    .access(suggestionsPath)
    .then(() => true)
    .catch(() => false)

  if (!suggestionsExist) {
    console.error("Suggestions not found. Run suggest-mentions.ts first.")
    process.exit(1)
  }

  const store: SuggestionStore = JSON.parse(
    await fs.readFile(suggestionsPath, "utf-8")
  )

  const highConfidence = store.suggestions.filter(
    (s) => s.similarity >= MIN_SIMILARITY_FOR_AUTO
  )

  const bySource = new Map<string, MentionSuggestion[]>()
  for (const s of highConfidence) {
    if (!bySource.has(s.sourceSlug)) {
      bySource.set(s.sourceSlug, [])
    }
    bySource.get(s.sourceSlug)?.push(s)
  }

  console.log(
    `Processing ${bySource.size} notes with high-confidence suggestions...\n`
  )

  let injectedCount = 0
  let skippedCount = 0

  for (const [slug, suggestions] of bySource) {
    const filePath = path.join(notesDir, `${slug}.md`)

    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false)

    if (!fileExists) {
      console.log(`⊘ ${slug}: File not found`)
      skippedCount++
      continue
    }

    const content = await fs.readFile(filePath, "utf-8")

    if (RELATED_SECTION_REGEX.test(content)) {
      console.log(`⊘ ${slug}: Already has Related section`)
      skippedCount++
      continue
    }

    const relatedLinks = suggestions
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3)
      .map((s) => `- [[${s.targetSlug}]]`)
      .join("\n")

    const relatedSection = `\n\n## Related\n\n${relatedLinks}\n`

    if (mode === "dry-run") {
      console.log(`[DRY RUN] ${slug}:`)
      console.log(relatedSection)
    } else {
      const match = content.match(FRONTMATTER_REGEX)
      if (match) {
        const newContent = match[1] + match[2].trimEnd() + relatedSection
        await fs.writeFile(filePath, newContent)
        console.log(`✓ ${slug}: Added Related section`)
        injectedCount++
      }
    }
  }

  console.log(
    `\n✓ Complete: ${injectedCount} injected, ${skippedCount} skipped`
  )

  if (mode === "dry-run") {
    console.log("\nRun with --apply to actually inject the Related sections.")
  }
}

const mode = process.argv[2] === "--apply" ? "related-section" : "dry-run"
injectMentions(mode).catch(console.error)

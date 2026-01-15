import fs from "node:fs/promises"
import path from "node:path"
import OpenAI from "openai"

const openai = new OpenAI()

interface MentionSuggestion {
  sourceSlug: string
  sourceTitle: string
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

interface InjectTask<T> {
  id: string
  execute: () => Promise<T>
}

interface InjectResult {
  slug: string
  content: string
}

const MIN_SIMILARITY_FOR_AUTO = 0.5
const CONCURRENCY_LIMIT = 8
const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000
const MAX_DELAY_MS = 16_000
const FRONTMATTER_REGEX = /^(---\n[\s\S]*?\n---\n)([\s\S]*)$/

const SCRIPT_DIR = import.meta.dirname
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function calculateBackoffDelay(attempt: number): number {
  const exponentialDelay = Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** attempt)
  const jitter = Math.random() * exponentialDelay * 0.1
  return Math.floor(exponentialDelay + jitter)
}

async function executeWithRetry<T>(
  fn: () => Promise<T>,
  taskId: string,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: Error | undefined

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      if (attempt === maxRetries) {
        console.error(
          `✗ ${taskId}: Failed after ${maxRetries + 1} attempts - ${lastError.message}`
        )
        throw lastError
      }

      const delay = calculateBackoffDelay(attempt)
      console.log(
        `⟳ ${taskId}: Retry ${attempt + 1}/${maxRetries} in ${delay}ms...`
      )
      await sleep(delay)
    }
  }

  throw lastError
}

async function executeWithConcurrency<T>(
  tasks: InjectTask<T>[],
  concurrency: number = CONCURRENCY_LIMIT
): Promise<Map<string, T | Error>> {
  const results = new Map<string, T | Error>()
  const executing = new Set<Promise<void>>()

  for (const task of tasks) {
    const promise = (async () => {
      try {
        const result = await executeWithRetry(task.execute, task.id)
        results.set(task.id, result)
      } catch (error) {
        results.set(
          task.id,
          error instanceof Error ? error : new Error(String(error))
        )
      }
    })()

    executing.add(promise)
    promise.finally(() => executing.delete(promise))

    if (executing.size >= concurrency) {
      await Promise.race(executing)
    }
  }

  await Promise.all(executing)
  return results
}

async function injectWithAI(
  body: string,
  suggestions: MentionSuggestion[]
): Promise<string> {
  const linksToAdd = suggestions
    .map(
      (s) =>
        `[${s.targetTitle}](./${s.targetSlug}) — ${Math.round(s.similarity * 100)}% similar`
    )
    .join("\n")

  const response = await openai.responses.create({
    model: "gpt-5.2",
    reasoning: { effort: "medium" },
    input: [
      {
        role: "developer",
        content: `You edit markdown to naturally weave in new links.

RULES:
1. Add links INLINE where contextually appropriate — prefer this over a Related section
2. If no natural inline spot, add "## Related" section at end
3. Use markdown: [Display Text](./slug)
4. Preserve existing content, formatting, tone exactly
5. Don't force links where they don't fit
6. Keep edits minimal
7. Return ONLY the edited markdown body, no explanation`,
      },
      {
        role: "user",
        content: `Add these links naturally:

${linksToAdd}

---

${body}`,
      },
    ],
  })

  return response.output_text.trim()
}

async function loadSuggestions(): Promise<Map<string, MentionSuggestion[]>> {
  const suggestionsPath = path.join(
    PROJECT_ROOT,
    "src/data/mention-suggestions.json"
  )

  const store: SuggestionStore = JSON.parse(
    await fs.readFile(suggestionsPath, "utf-8")
  )

  const highConfidence = store.suggestions.filter(
    (s) => s.similarity >= MIN_SIMILARITY_FOR_AUTO
  )

  const bySource = new Map<string, MentionSuggestion[]>()
  for (const s of highConfidence) {
    const existing = bySource.get(s.sourceSlug) ?? []
    existing.push(s)
    bySource.set(s.sourceSlug, existing)
  }

  return bySource
}

async function buildTasks(
  bySource: Map<string, MentionSuggestion[]>,
  notesDir: string
): Promise<InjectTask<InjectResult>[]> {
  const tasks: InjectTask<InjectResult>[] = []

  for (const [slug, suggestions] of bySource) {
    const filePath = path.join(notesDir, `${slug}.md`)

    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false)

    if (!fileExists) {
      console.log(`⊘ ${slug}: File not found`)
      continue
    }

    const content = await fs.readFile(filePath, "utf-8")
    const match = content.match(FRONTMATTER_REGEX)

    if (!match) {
      console.log(`⊘ ${slug}: No frontmatter`)
      continue
    }

    const [, frontmatter, body] = match

    tasks.push({
      id: slug,
      execute: async () => {
        console.log(`+ ${slug}: Processing with GPT-5.2...`)
        const editedBody = await injectWithAI(body, suggestions)
        return { slug, content: frontmatter + editedBody }
      },
    })
  }

  return tasks
}

async function processResults(
  results: Map<string, InjectResult | Error>,
  notesDir: string,
  mode: "apply" | "dry-run"
): Promise<number> {
  let processedCount = 0

  for (const [slug, result] of results) {
    if (result instanceof Error) {
      console.log(`✗ ${slug}: ${result.message}`)
      continue
    }

    if (mode === "dry-run") {
      console.log(`[DRY RUN] ${slug}:`)
      console.log("---")
      console.log(
        result.content.slice(0, 600) +
          (result.content.length > 600 ? "..." : "")
      )
      console.log("---\n")
    } else {
      const filePath = path.join(notesDir, `${slug}.md`)
      await fs.writeFile(filePath, result.content)
      console.log(`✓ ${slug}: Updated`)
      processedCount++
    }
  }

  return processedCount
}

async function injectMentions(mode: "apply" | "dry-run" = "dry-run") {
  const notesDir = path.join(PROJECT_ROOT, "src/content/notes/en")

  const bySource = await loadSuggestions()

  if (bySource.size === 0) {
    console.log("No suggestions (≥50% similarity).")
    return
  }

  console.log(
    `Processing ${bySource.size} notes with high-confidence suggestions...\n`
  )

  const tasks = await buildTasks(bySource, notesDir)

  if (tasks.length === 0) {
    console.log("No files to process.")
    return
  }

  const results = await executeWithConcurrency(tasks)
  const processedCount = await processResults(results, notesDir, mode)

  console.log(`\n✓ Complete: ${processedCount} updated`)

  if (mode === "dry-run") {
    console.log("\nRun with --apply to update files.")
  }
}

const mode = process.argv[2] === "--apply" ? "apply" : "dry-run"
injectMentions(mode).catch(console.error)

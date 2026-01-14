import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";

const openai = new OpenAI();

const CONCURRENCY_LIMIT = 32;
const MAX_RETRIES = 5;
const BASE_DELAY_MS = 1000;
const MAX_DELAY_MS = 32_000;
const JSON_EXTRACT_REGEX = /\{[\s\S]*\}/;

interface TranslationTask<T> {
  id: string;
  execute: () => Promise<T>;
}

async function executeWithConcurrency<T>(
  tasks: TranslationTask<T>[],
  concurrency: number = CONCURRENCY_LIMIT
): Promise<Map<string, T | Error>> {
  const results = new Map<string, T | Error>();
  const executing = new Set<Promise<void>>();

  for (const task of tasks) {
    const promise = (async () => {
      try {
        const result = await executeWithRetry(task.execute, task.id);
        results.set(task.id, result);
      } catch (error) {
        results.set(
          task.id,
          error instanceof Error ? error : new Error(String(error))
        );
      }
    })();

    executing.add(promise);
    promise.finally(() => executing.delete(promise));

    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}

async function executeWithRetry<T>(
  fn: () => Promise<T>,
  taskId: string,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt === maxRetries) {
        console.error(
          `✗ ${taskId}: Failed after ${maxRetries + 1} attempts - ${lastError.message}`
        );
        throw lastError;
      }

      const delay = calculateBackoffDelay(attempt);
      console.log(
        `⟳ ${taskId}: Retry ${attempt + 1}/${maxRetries} in ${delay}ms...`
      );
      await sleep(delay);
    }
  }

  throw lastError;
}

// Formula: min(maxDelay, baseDelay * 2^attempt) + jitter
function calculateBackoffDelay(attempt: number): number {
  const exponentialDelay = Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** attempt);
  const jitter = Math.random() * exponentialDelay * 0.1;
  return Math.floor(exponentialDelay + jitter);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const LOCALES = [
  "en",
  "zh-CN",
  "zh-TW",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "id",
  "ja",
  "fa",
  "de",
  "vi",
  "ta",
  "te",
  "tr",
  "ko",
  "ur",
  "it",
  "th",
  "pl",
  "uk",
  "nl",
] as const;

const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  "zh-CN": "Simplified Chinese",
  "zh-TW": "Traditional Chinese",
  hi: "Hindi",
  es: "Spanish",
  fr: "French",
  ar: "Arabic",
  bn: "Bengali",
  pt: "Portuguese",
  ru: "Russian",
  id: "Indonesian",
  ja: "Japanese",
  fa: "Persian",
  de: "German",
  vi: "Vietnamese",
  ta: "Tamil",
  te: "Telugu",
  tr: "Turkish",
  ko: "Korean",
  ur: "Urdu",
  it: "Italian",
  th: "Thai",
  pl: "Polish",
  uk: "Ukrainian",
  nl: "Dutch",
};

const ENGLISH_UI = {
  metadata: {
    title: "Coscientist Manifesto",
    description: "Tokens ≠ Knowledge",
  },
  header: { title: "Coscientist Manifesto" },
  allNotes: { title: "All Notes", noteCount: "{count} notes" },
  notePane: {
    expand: "Expand pane",
    expandNote: "Expand {title}",
    closeNote: "Close {title}",
    closePane: "Close pane {index}",
  },
  backlinks: {
    singular: "{count} note links to this",
    plural: "{count} notes link to this",
  },
  theme: { toggle: "Toggle theme" },
  navigation: {
    previous: "Previous",
    next: "Next",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
    morePages: "More pages",
    pagination: "pagination",
    breadcrumb: "breadcrumb",
    more: "More",
  },
  sidebar: {
    title: "Sidebar",
    description: "Displays the mobile sidebar.",
    toggle: "Toggle Sidebar",
  },
  common: { close: "Close", remove: "Remove", loading: "Loading" },
  languageSwitcher: { label: "Language", selectLanguage: "Select language" },
};

async function translateWithGPT52(
  content: string,
  targetLocale: string,
  type: "json" | "markdown"
): Promise<string> {
  const langName = LOCALE_NAMES[targetLocale] || targetLocale;

  const systemPrompt =
    type === "json"
      ? `You are a professional translator. Translate JSON UI strings from English to ${langName}.

RULES:
1. Preserve ALL placeholder variables exactly: {count}, {title}, {index}
2. Preserve JSON structure and keys - only translate VALUES
3. Use natural, native ${langName} expressions
4. Return ONLY valid JSON, no markdown code blocks or explanations`
      : `You are a professional translator. Translate Markdown from English to ${langName}.

RULES:
1. Preserve ALL markdown formatting (headers, links, bold, italic, lists, blockquotes, code blocks)
2. Preserve YAML frontmatter structure (--- delimiters)
3. Translate frontmatter title and description values
4. For internal links [text](./slug), translate [text] to the locale language. Keep (./slug) unchanged.
5. Preserve wikilinks [[slug]] unchanged
6. Use fluent, natural ${langName}
7. Keep technical terms with English in parentheses if no good translation exists
8. Return ONLY the translated markdown`;

  const response = await openai.responses.create({
    model: "gpt-5.2",
    reasoning: { effort: "high" },
    input: [
      { role: "developer", content: systemPrompt },
      { role: "user", content },
    ],
  });

  return response.output_text.trim();
}

// Get the directory where this script is located
const SCRIPT_DIR = import.meta.dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");

async function translateUI(locales: string[]) {
  const messagesDir = path.join(PROJECT_ROOT, "messages");
  await fs.mkdir(messagesDir, { recursive: true });

  console.log("Translating UI strings...\n");

  await fs.writeFile(
    path.join(messagesDir, "en.json"),
    JSON.stringify(ENGLISH_UI, null, 2)
  );
  console.log("✓ en.json (source)");

  const tasks: TranslationTask<void>[] = locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({
      id: `ui:${locale}`,
      execute: async () => {
        const filePath = path.join(messagesDir, `${locale}.json`);
        console.log(`Translating to ${LOCALE_NAMES[locale]} (${locale})...`);

        const translated = await translateWithGPT52(
          JSON.stringify(ENGLISH_UI, null, 2),
          locale,
          "json"
        );

        const jsonMatch = translated.match(JSON_EXTRACT_REGEX);
        if (!jsonMatch) {
          throw new Error("No valid JSON in response");
        }

        JSON.parse(jsonMatch[0]);
        await fs.writeFile(filePath, jsonMatch[0]);
        console.log(`✓ ${locale}.json`);
      },
    }));

  const results = await executeWithConcurrency(tasks);

  for (const [taskId, result] of results) {
    if (result instanceof Error) {
      const locale = taskId.replace("ui:", "");
      const filePath = path.join(messagesDir, `${locale}.json`);
      await fs.writeFile(filePath, JSON.stringify(ENGLISH_UI, null, 2));
    }
  }
}

async function translateMarkdown(locales: string[]) {
  const notesDir = path.join(PROJECT_ROOT, "src/content/notes");
  const enDir = path.join(notesDir, "en");

  const files = await fs.readdir(enDir);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  console.log(`\nTranslating ${mdFiles.length} markdown notes...\n`);

  const targetLocales = locales.filter((locale) => locale !== "en");
  await Promise.all(
    targetLocales.map((locale) =>
      fs.mkdir(path.join(notesDir, locale), { recursive: true })
    )
  );

  const tasks: TranslationTask<void>[] = [];

  for (const locale of targetLocales) {
    for (const file of mdFiles) {
      const targetPath = path.join(notesDir, locale, file);
      const fileExists = await fs
        .access(targetPath)
        .then(() => true)
        .catch(() => false);

      if (fileExists) {
        console.log(`⊘ ${locale}/${file} (exists)`);
      } else {
        tasks.push({
          id: `md:${locale}/${file}`,
          execute: async () => {
            const content = await fs.readFile(path.join(enDir, file), "utf-8");
            console.log(`Translating ${file} to ${LOCALE_NAMES[locale]}...`);

            const translated = await translateWithGPT52(
              content,
              locale,
              "markdown"
            );
            await fs.writeFile(targetPath, translated);
            console.log(`✓ ${locale}/${file}`);
          },
        });
      }
    }
  }

  console.log(`\nQueued ${tasks.length} translations (32 concurrent)...\n`);
  const results = await executeWithConcurrency(tasks);

  for (const [taskId, result] of results) {
    if (result instanceof Error) {
      const [locale, file] = taskId.replace("md:", "").split("/");
      const targetPath = path.join(notesDir, locale, file);
      const content = await fs.readFile(path.join(enDir, file), "utf-8");
      await fs.writeFile(targetPath, content);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0];
  const localeArg = args[1];

  let targetLocales: string[];
  if (localeArg && localeArg !== "all") {
    targetLocales = localeArg.split(",");
  } else {
    targetLocales = [...LOCALES];
  }

  if (mode === "ui") {
    await translateUI(targetLocales);
  } else if (mode === "markdown" || mode === "md") {
    await translateMarkdown(targetLocales);
  } else if (mode === "all") {
    await translateUI(targetLocales);
    await translateMarkdown(targetLocales);
  } else {
    console.log(`
Usage:
  bun run scripts/translate.ts ui [locales]       # Translate UI strings
  bun run scripts/translate.ts markdown [locales] # Translate markdown notes  
  bun run scripts/translate.ts all [locales]      # Translate everything

Examples:
  bun run scripts/translate.ts ui ko,ja,zh-CN     # Translate UI to specific languages
  bun run scripts/translate.ts markdown all       # Translate all markdown to all languages
  bun run scripts/translate.ts all                # Translate everything to all languages
`);
  }
}

main().catch(console.error);

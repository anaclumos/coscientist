import OpenAI from "openai";
import fs from "node:fs/promises";
import path from "node:path";

const openai = new OpenAI();

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
    description: "Output Tokens ≠ Knowledge",
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
  type: "json" | "markdown",
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
      { role: "user", content: content },
    ],
  });

  return response.output_text.trim();
}

async function translateUI(locales: string[]) {
  const messagesDir = path.join(process.cwd(), "messages");
  await fs.mkdir(messagesDir, { recursive: true });

  console.log("Translating UI strings...\n");

  await fs.writeFile(
    path.join(messagesDir, "en.json"),
    JSON.stringify(ENGLISH_UI, null, 2),
  );
  console.log("✓ en.json (source)");

  for (const locale of locales) {
    if (locale === "en") continue;

    const filePath = path.join(messagesDir, `${locale}.json`);

    try {
      console.log(`Translating to ${LOCALE_NAMES[locale]} (${locale})...`);
      const translated = await translateWithGPT52(
        JSON.stringify(ENGLISH_UI, null, 2),
        locale,
        "json",
      );

      const jsonMatch = translated.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("No valid JSON in response");

      JSON.parse(jsonMatch[0]);
      await fs.writeFile(filePath, jsonMatch[0]);
      console.log(`✓ ${locale}.json`);
    } catch (error) {
      console.error(`✗ ${locale}: ${error}`);
      await fs.writeFile(filePath, JSON.stringify(ENGLISH_UI, null, 2));
    }

    await new Promise((r) => setTimeout(r, 200));
  }
}

async function translateMarkdown(locales: string[]) {
  const notesDir = path.join(process.cwd(), "src/content/notes");
  const enDir = path.join(notesDir, "en");

  const files = await fs.readdir(enDir);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  console.log(`\nTranslating ${mdFiles.length} markdown notes...\n`);

  for (const locale of locales) {
    if (locale === "en") continue;

    const localeDir = path.join(notesDir, locale);
    await fs.mkdir(localeDir, { recursive: true });

    for (const file of mdFiles) {
      const targetPath = path.join(localeDir, file);

      try {
        await fs.access(targetPath);
        console.log(`⊘ ${locale}/${file} (exists)`);
        continue;
      } catch {}

      try {
        const content = await fs.readFile(path.join(enDir, file), "utf-8");
        console.log(`Translating ${file} to ${LOCALE_NAMES[locale]}...`);

        const translated = await translateWithGPT52(
          content,
          locale,
          "markdown",
        );
        await fs.writeFile(targetPath, translated);
        console.log(`✓ ${locale}/${file}`);
      } catch (error) {
        console.error(`✗ ${locale}/${file}: ${error}`);
        const content = await fs.readFile(path.join(enDir, file), "utf-8");
        await fs.writeFile(targetPath, content);
      }

      await new Promise((r) => setTimeout(r, 200));
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

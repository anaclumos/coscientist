const GOOGLE_FONTS_CSS_API = "https://fonts.googleapis.com/css2"

// Safari UA makes Google Fonts return TTF instead of WOFF2 (Satori needs TTF/OTF)
const TTF_USER_AGENT =
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"

// Regex to extract font URL from Google Fonts CSS
const FONT_URL_REGEX =
  /src: url\(([^)]+)\) format\(['"](?:truetype|opentype)['"]\)/

interface FontConfig {
  family: string
  weight: number
  style?: "normal" | "italic"
  text?: string
}

export interface OGFont {
  name: string
  data: ArrayBuffer
  weight: 400 | 500 | 700
  style: "normal" | "italic"
}

type Script =
  | "latin"
  | "korean"
  | "japanese"
  | "chinese-simplified"
  | "chinese-traditional"
  | "arabic"
  | "devanagari"
  | "bengali"
  | "tamil"
  | "telugu"
  | "thai"
  | "cyrillic"

const LOCALE_SCRIPT_MAP: Record<string, Script> = {
  en: "latin",
  es: "latin",
  fr: "latin",
  de: "latin",
  pt: "latin",
  it: "latin",
  nl: "latin",
  pl: "latin",
  tr: "latin",
  vi: "latin",
  id: "latin",
  ko: "korean",
  ja: "japanese",
  "zh-CN": "chinese-simplified",
  "zh-TW": "chinese-traditional",
  ar: "arabic",
  fa: "arabic",
  ur: "arabic",
  hi: "devanagari",
  bn: "bengali",
  ta: "tamil",
  te: "telugu",
  th: "thai",
  ru: "cyrillic",
  uk: "cyrillic",
}

const SCRIPT_FONT_MAP: Record<Script, FontConfig> = {
  latin: { family: "Faculty Glyphic", weight: 400 },
  korean: { family: "Noto Sans KR", weight: 400 },
  japanese: { family: "Noto Sans JP", weight: 400 },
  "chinese-simplified": { family: "Noto Sans SC", weight: 400 },
  "chinese-traditional": { family: "Noto Sans TC", weight: 400 },
  arabic: { family: "Noto Sans Arabic", weight: 400 },
  devanagari: { family: "Noto Sans Devanagari", weight: 400 },
  bengali: { family: "Noto Sans Bengali", weight: 400 },
  tamil: { family: "Noto Sans Tamil", weight: 400 },
  telugu: { family: "Noto Sans Telugu", weight: 400 },
  thai: { family: "Noto Sans Thai", weight: 400 },
  cyrillic: { family: "Noto Sans", weight: 400 },
}

async function fetchGoogleFont(config: FontConfig): Promise<ArrayBuffer> {
  const { family, weight, text } = config

  const familyParam = family.replace(/ /g, "+")
  let cssUrl = `${GOOGLE_FONTS_CSS_API}?family=${familyParam}:wght@${weight}`

  if (text) {
    cssUrl += `&text=${encodeURIComponent(text)}`
  }

  const cssResponse = await fetch(cssUrl, {
    headers: { "User-Agent": TTF_USER_AGENT },
    cache: text ? "no-store" : "force-cache",
  })

  if (!cssResponse.ok) {
    throw new Error(
      `Failed to fetch font CSS: ${cssResponse.status} ${cssResponse.statusText}`
    )
  }

  const css = await cssResponse.text()

  const fontUrlMatch = css.match(FONT_URL_REGEX)

  if (!fontUrlMatch?.[1]) {
    throw new Error(`Could not extract font URL from CSS for ${family}`)
  }

  const fontResponse = await fetch(fontUrlMatch[1], { cache: "force-cache" })

  if (!fontResponse.ok) {
    throw new Error(
      `Failed to fetch font file: ${fontResponse.status} ${fontResponse.statusText}`
    )
  }

  return fontResponse.arrayBuffer()
}

const fontCache = new Map<string, Promise<ArrayBuffer>>()

function getCachedFont(config: FontConfig): Promise<ArrayBuffer> {
  if (config.text) {
    return fetchGoogleFont(config)
  }

  const cacheKey = `${config.family}-${config.weight}-${config.style || "normal"}`

  const cached = fontCache.get(cacheKey)
  if (cached) {
    return cached
  }

  const promise = fetchGoogleFont(config)
  fontCache.set(cacheKey, promise)

  return promise
}

function getScriptForLocale(locale: string): Script {
  return LOCALE_SCRIPT_MAP[locale] || "latin"
}

export function getFacultyGlyphic(): Promise<ArrayBuffer> {
  return getCachedFont(SCRIPT_FONT_MAP.latin)
}

export async function getLocaleFallbackFont(
  locale: string,
  text?: string
): Promise<OGFont | null> {
  const script = getScriptForLocale(locale)

  if (script === "latin") {
    return null
  }

  const fontConfig = SCRIPT_FONT_MAP[script]
  const data = await getCachedFont({ ...fontConfig, text })

  return {
    name: fontConfig.family,
    data,
    weight: fontConfig.weight as 400 | 500 | 700,
    style: "normal",
  }
}

export async function getFontsForLocale(
  locale: string,
  text?: string
): Promise<OGFont[]> {
  const fonts: OGFont[] = []

  const primaryData = await getFacultyGlyphic()
  fonts.push({
    name: "Faculty Glyphic",
    data: primaryData,
    weight: 400,
    style: "normal",
  })

  const fallback = await getLocaleFallbackFont(locale, text)
  if (fallback) {
    fonts.push(fallback)
  }

  return fonts
}

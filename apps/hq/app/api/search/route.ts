import { createFromSource } from "fumadocs-core/search/server"
import { source } from "@/lib/source"

export const revalidate = false

// Orama search engine doesn't support Korean - falls back to English stemmer
export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    ko: "english",
  },
})

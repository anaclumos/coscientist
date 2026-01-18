import { loader } from "fumadocs-core/source"
import { toFumadocsSource } from "fumadocs-mdx/runtime/server"
import { docs, meta } from "@/.source/server"
import { i18n } from "./i18n"

const fumadocsSource = toFumadocsSource(docs, meta)

export const source = loader({
  baseUrl: "/",
  source: fumadocsSource,
  i18n,
})

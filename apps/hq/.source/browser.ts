// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser"
import type * as Config from "../source.config"

const create = browser<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {}
  }
>()
const browserCollections = {
  docs: create.doc("docs", {
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "adr/001-unified-block-model.ko.mdx": () =>
      import(
        "../content/docs/adr/001-unified-block-model.ko.mdx?collection=docs"
      ),
    "adr/001-unified-block-model.mdx": () =>
      import("../content/docs/adr/001-unified-block-model.mdx?collection=docs"),
    "adr/002-versioning-strategy.ko.mdx": () =>
      import(
        "../content/docs/adr/002-versioning-strategy.ko.mdx?collection=docs"
      ),
    "adr/002-versioning-strategy.mdx": () =>
      import("../content/docs/adr/002-versioning-strategy.mdx?collection=docs"),
    "adr/003-collaboration-protocol.ko.mdx": () =>
      import(
        "../content/docs/adr/003-collaboration-protocol.ko.mdx?collection=docs"
      ),
    "adr/003-collaboration-protocol.mdx": () =>
      import(
        "../content/docs/adr/003-collaboration-protocol.mdx?collection=docs"
      ),
    "adr/004-edge-types-dialectical-graph.ko.mdx": () =>
      import(
        "../content/docs/adr/004-edge-types-dialectical-graph.ko.mdx?collection=docs"
      ),
    "adr/004-edge-types-dialectical-graph.mdx": () =>
      import(
        "../content/docs/adr/004-edge-types-dialectical-graph.mdx?collection=docs"
      ),
    "adr/005-file-storage-access-control.ko.mdx": () =>
      import(
        "../content/docs/adr/005-file-storage-access-control.ko.mdx?collection=docs"
      ),
    "adr/005-file-storage-access-control.mdx": () =>
      import(
        "../content/docs/adr/005-file-storage-access-control.mdx?collection=docs"
      ),
    "adr/006-permissions-embargo-model.ko.mdx": () =>
      import(
        "../content/docs/adr/006-permissions-embargo-model.ko.mdx?collection=docs"
      ),
    "adr/006-permissions-embargo-model.mdx": () =>
      import(
        "../content/docs/adr/006-permissions-embargo-model.mdx?collection=docs"
      ),
    "adr/007-presence-cursors.ko.mdx": () =>
      import("../content/docs/adr/007-presence-cursors.ko.mdx?collection=docs"),
    "adr/007-presence-cursors.mdx": () =>
      import("../content/docs/adr/007-presence-cursors.mdx?collection=docs"),
    "adr/008-platform-boundaries-expansion.ko.mdx": () =>
      import(
        "../content/docs/adr/008-platform-boundaries-expansion.ko.mdx?collection=docs"
      ),
    "adr/008-platform-boundaries-expansion.mdx": () =>
      import(
        "../content/docs/adr/008-platform-boundaries-expansion.mdx?collection=docs"
      ),
    "logs/20260118.mdx": () =>
      import("../content/docs/logs/20260118.mdx?collection=docs"),
  }),
}
export default browserCollections

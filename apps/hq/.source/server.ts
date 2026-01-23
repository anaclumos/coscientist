// @ts-nocheck

import { server } from "fumadocs-mdx/runtime/server"
import * as __fd_glob_1 from "../content/docs/adr/001-unified-block-model.ko.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/adr/001-unified-block-model.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/adr/002-versioning-strategy.ko.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/adr/002-versioning-strategy.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/adr/003-collaboration-protocol.ko.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/adr/003-collaboration-protocol.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/adr/004-edge-types-dialectical-graph.ko.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/adr/004-edge-types-dialectical-graph.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/adr/005-file-storage-access-control.ko.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/adr/005-file-storage-access-control.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/adr/006-permissions-embargo-model.ko.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/adr/006-permissions-embargo-model.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/adr/007-presence-cursors.ko.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/adr/007-presence-cursors.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/adr/008-platform-boundaries-expansion.ko.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/adr/008-platform-boundaries-expansion.mdx?collection=docs"
import { default as __fd_glob_25 } from "../content/docs/adr/meta.json?collection=meta"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/logs/20260118.ko.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/logs/20260118.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/logs/20260119.ko.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/logs/20260119.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/logs/20260120.ko.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/logs/20260120.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/logs/20260123.ko.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/logs/20260123.mdx?collection=docs"
import { default as __fd_glob_26 } from "../content/docs/logs/meta.json?collection=meta"
import type * as Config from "../source.config"

const create = server<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {}
  }
>({ doc: { passthroughs: ["extractedReferences"] } })

export const docs = await create.doc("docs", "content/docs", {
  "index.mdx": __fd_glob_0,
  "adr/001-unified-block-model.ko.mdx": __fd_glob_1,
  "adr/001-unified-block-model.mdx": __fd_glob_2,
  "adr/002-versioning-strategy.ko.mdx": __fd_glob_3,
  "adr/002-versioning-strategy.mdx": __fd_glob_4,
  "adr/003-collaboration-protocol.ko.mdx": __fd_glob_5,
  "adr/003-collaboration-protocol.mdx": __fd_glob_6,
  "adr/004-edge-types-dialectical-graph.ko.mdx": __fd_glob_7,
  "adr/004-edge-types-dialectical-graph.mdx": __fd_glob_8,
  "adr/005-file-storage-access-control.ko.mdx": __fd_glob_9,
  "adr/005-file-storage-access-control.mdx": __fd_glob_10,
  "adr/006-permissions-embargo-model.ko.mdx": __fd_glob_11,
  "adr/006-permissions-embargo-model.mdx": __fd_glob_12,
  "adr/007-presence-cursors.ko.mdx": __fd_glob_13,
  "adr/007-presence-cursors.mdx": __fd_glob_14,
  "adr/008-platform-boundaries-expansion.ko.mdx": __fd_glob_15,
  "adr/008-platform-boundaries-expansion.mdx": __fd_glob_16,
  "logs/20260118.ko.mdx": __fd_glob_17,
  "logs/20260118.mdx": __fd_glob_18,
  "logs/20260119.ko.mdx": __fd_glob_19,
  "logs/20260119.mdx": __fd_glob_20,
  "logs/20260120.ko.mdx": __fd_glob_21,
  "logs/20260120.mdx": __fd_glob_22,
  "logs/20260123.ko.mdx": __fd_glob_23,
  "logs/20260123.mdx": __fd_glob_24,
})

export const meta = await create.meta("meta", "content/docs", {
  "adr/meta.json": __fd_glob_25,
  "logs/meta.json": __fd_glob_26,
})

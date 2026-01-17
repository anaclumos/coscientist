// @ts-nocheck
import * as __fd_glob_16 from "../content/docs/adr/adr-008-platform-boundaries-expansion.md?collection=docs"
import * as __fd_glob_15 from "../content/docs/adr/adr-008-platform-boundaries-expansion.ko.md?collection=docs"
import * as __fd_glob_14 from "../content/docs/adr/adr-007-presence-cursors.md?collection=docs"
import * as __fd_glob_13 from "../content/docs/adr/adr-007-presence-cursors.ko.md?collection=docs"
import * as __fd_glob_12 from "../content/docs/adr/adr-006-permissions-embargo-model.md?collection=docs"
import * as __fd_glob_11 from "../content/docs/adr/adr-006-permissions-embargo-model.ko.md?collection=docs"
import * as __fd_glob_10 from "../content/docs/adr/adr-005-file-storage-access-control.md?collection=docs"
import * as __fd_glob_9 from "../content/docs/adr/adr-005-file-storage-access-control.ko.md?collection=docs"
import * as __fd_glob_8 from "../content/docs/adr/adr-004-edge-types-dialectical-graph.md?collection=docs"
import * as __fd_glob_7 from "../content/docs/adr/adr-004-edge-types-dialectical-graph.ko.md?collection=docs"
import * as __fd_glob_6 from "../content/docs/adr/adr-003-collaboration-protocol.md?collection=docs"
import * as __fd_glob_5 from "../content/docs/adr/adr-003-collaboration-protocol.ko.md?collection=docs"
import * as __fd_glob_4 from "../content/docs/adr/adr-002-versioning-strategy.md?collection=docs"
import * as __fd_glob_3 from "../content/docs/adr/adr-002-versioning-strategy.ko.md?collection=docs"
import * as __fd_glob_2 from "../content/docs/adr/adr-001-unified-block-model.md?collection=docs"
import * as __fd_glob_1 from "../content/docs/adr/adr-001-unified-block-model.ko.md?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "adr/adr-001-unified-block-model.ko.md": __fd_glob_1, "adr/adr-001-unified-block-model.md": __fd_glob_2, "adr/adr-002-versioning-strategy.ko.md": __fd_glob_3, "adr/adr-002-versioning-strategy.md": __fd_glob_4, "adr/adr-003-collaboration-protocol.ko.md": __fd_glob_5, "adr/adr-003-collaboration-protocol.md": __fd_glob_6, "adr/adr-004-edge-types-dialectical-graph.ko.md": __fd_glob_7, "adr/adr-004-edge-types-dialectical-graph.md": __fd_glob_8, "adr/adr-005-file-storage-access-control.ko.md": __fd_glob_9, "adr/adr-005-file-storage-access-control.md": __fd_glob_10, "adr/adr-006-permissions-embargo-model.ko.md": __fd_glob_11, "adr/adr-006-permissions-embargo-model.md": __fd_glob_12, "adr/adr-007-presence-cursors.ko.md": __fd_glob_13, "adr/adr-007-presence-cursors.md": __fd_glob_14, "adr/adr-008-platform-boundaries-expansion.ko.md": __fd_glob_15, "adr/adr-008-platform-boundaries-expansion.md": __fd_glob_16, });

export const meta = await create.meta("meta", "content/docs", {});
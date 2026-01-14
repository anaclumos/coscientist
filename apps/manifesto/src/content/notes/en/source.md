---
title: Source
description: "A provenance anchor for claims and evidence"
---

A source is the origin point for an [evidence span](./evidence-span) or
[claim](./claim): a document, dataset, experiment, or person from which the
information comes. Sources anchor [provenance](./provenance) and make the
[responsibility line](./responsibility-line) traceable.

Not all sources are equal. A primary source reports original observations; a
secondary source summarizes or interprets; a tertiary source compiles from
secondaries. Each step introduces potential for drift, and
[Coscientist](./coscientist) tracks these distinctions through explicit `cites`
edges in the [Dialectical Graph](./dialectical-graph).

Sources are nodes in the graph with metadata such as author, date, and
context. When a claim is challenged, the source provides the starting point for
re-examination.
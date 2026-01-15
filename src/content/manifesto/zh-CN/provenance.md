---
title: 溯源
description: 主张与证据的起源及其保管链
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

溯源（Provenance）是指一项主张或一份证据的起源与保管链：是谁提出的、何时提出、基于什么，以及它如何演变到当前形态。没有溯源，你就无法区分一手来源与被重新包装的摘要，也无法判断表面上的一致是来自独立证据还是循环引用。

在[辩证图](./dialectical-graph)中，溯源通过[来源](./source)节点、[证据跨度](./evidence-span)以及
`cites`
边来编码，使归因变得明确，而不是由散文式表述暗示。这能避免在[RAG](./rag-limitations)中常见的摘录截断问题：引用会丢失上下文，而[责任线](./responsibility-line)也随之消失。

溯源是[可追溯性](./traceability)的前提：如果你无法将一项主张追溯到其起源，当世界发生变化时，你就无法纠正它。

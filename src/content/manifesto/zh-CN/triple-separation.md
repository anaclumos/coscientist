---
title: 三重分离
description: 将原始文本、规范化主张与显式关系分离的架构规则
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

三重分离（Triple
separation）是[辩证图](./dialectical-graph)中的一条架构规则，用于保持三个层级彼此独立：原始文本会以可引用的[证据片段](./evidence-span)形式被保留；[主张](./claim)会被分解为[规范化命题](./normalized-proposition)；而各种关系则以显式的论证绑定（见[辩证图边](./dialectical-graph-edges)）进行存储。

这种分离可防止在[RAG](./rag-limitations)中的一种常见失效模式：摘录截断。当文本被检索并总结、却未保留原始措辞时，归因信息可能会在不知不觉中消失。三重分离确保你始终可以将某个主张追溯到产生它的确切措辞，以及生成这些措辞的[来源](./source)。

它还通过让结构可查询来支持[知识综合](./knowledge-synthesis)。你可以问"什么在反驳这个主张？"或"这个主张依赖哪些定义？"，因为这些关系是被存储下来的，而不是靠暗示推断出来的。

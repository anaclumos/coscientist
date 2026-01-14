---
title: 零信任摄取
description: 在接受断言之前要求明确溯源的协议
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

零信任摄取（zero-trust
ingestion）是一种协议，默认将传入信息视为未经验证。每一条[断言](./claim)都必须携带明确的[溯源信息](./provenance)，并在获得知识系统中的权威性之前通过[验证](./verification)。

这一名称借鉴自零信任安全（zero-trust
security）：在被证明之前，不假设任何东西是安全的。在实践中，这意味着新的断言以
`tentative`
状态进入，必须可追溯到[来源](./source)与[证据片段](./evidence-span)，并应先接受[反驳优先搜索](./rebuttal-first-search)的检验，然后才被视为已确立。

零信任摄取是对[AI 水文](./ai-slop)和[百科全书崩塌](./encyclopedia-meltdown)的防御。当环境中充斥着看似可信但未经验证的内容时，唯一安全的姿态是在接受之前要求证明其来源，并能够经受质疑。

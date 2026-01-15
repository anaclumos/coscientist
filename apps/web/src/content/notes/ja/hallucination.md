---
title: ハルシネーション
description: もっともらしいが事実としては誤っている、または捏造されたAI出力
sourceLocale: en
sourceHash: 35a042b51f6a
translatedAt: 2026-01-14
---

ハルシネーション（hallucination）とは、自信があり首尾一貫しているように読める一方で、事実誤認、捏造された情報、あるいは作り上げられた参照（references）を含むAI出力のことです。危険なのはランダムさではありません。もっともらしさです。ハルシネーションを含むテキストは、真実の文章に見られる統計的パターンに従っているため、ざっと見ただけのチェックを通過しがちです。

ハルシネーションは、[LLMs](./llm)
がどのように動くかの症状です。LLMは「真の」次トークンではなく、「ありそうな」次トークンを予測します。ある話題について学習データが乏しい、または矛盾していると、モデルは補間（interpolate）を行い、結果として滑らかに間違った内容が生成されることがあります。これが、[fluency trap](./fluency-trap)
が非常に危険な理由です。流暢さは正確さを意味しません。

[コサイエンティスト](./coscientist) では、ハルシネーションのリスクを
[epistemic protocol layer](./epistemic-protocol-layer)
を通じて管理します。[traceability](./traceability) は主張が
[evidence spans](./evidence-span)
に接続されることを要求し、[反駁優先検索](./rebuttal-first-search)
は受け入れる前にストレステスト（stress-test）を行い、[Multi-AI Consensus Protocol](./multi-ai-consensus-protocol)
はモデル間の不一致を、より綿密な検証が必要であることを示すシグナルとして用います。

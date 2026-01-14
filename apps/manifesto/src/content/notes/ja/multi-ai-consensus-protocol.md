---
title: マルチAI合意プロトコル
description: 1+4（人間＋4つのAI）による執筆・検証システム
sourceLocale: en
sourceHash: b49299d152fa
translatedAt: 2026-01-14
---

マルチAI合意プロトコル（Multi-AI Consensus
Protocol）は、[オペレーター](./operator)が複数のAIシステムを調整し、単一モデルによるハルシネーション（hallucination）リスクを低減し、[百科事典メルトダウン](./encyclopedia-meltdown)への防御を支援するための協働ワークフローである。

「1+4」バリアントでは、1人の人間が4つのAIアシスタント（2025年12月時点：ChatGPT、Gemini、Claude、Grok）を調整する。狙いは「より多くの記憶」ではなく、構造化された不一致（disagreement）とトレーサビリティ（traceability）である。

## 運用ルール

- 全会一致に達した場合にのみ改訂を受け入れる（[全会一致要件](./unanimity-requirement)を参照）。
- 不確実性を明示したままにし、文章でならして消さない。
- 主張には追跡可能な出所（provenance）を要求する（[責任ライン](./responsibility-line)および[プロヴナンス](./provenance)を参照）。
- 確認的検索（confirmatory search）ではなく、意図的な反証探索（rebuttal
  search）を行う（[反証優先検索](./rebuttal-first-search)を参照）。

このプロトコルは文化的なものでもある。「何があれば自分の考えを変えるのか？」と問う習慣を鍛える。

## 制約

全会一致は真実の証明ではない。モデルは学習データを共有しており、相関した失敗モードに収束しうるため、合意は独立した[検証](./verification)ではなく共有バイアスを反映している可能性がある（[証拠の独立性](./evidence-independence)を参照）。また、全会一致は文章を過度にヘッジ（hedging）させたり、最小公倍数的な主張へと押しやったりすることもある。

このプロトコルに関するあるマルチAIレビューでは、承認2件、異議1件、保留1件となり、より強力な反証手続きと、証拠の独立性に関するルールが必要であることが示唆された。

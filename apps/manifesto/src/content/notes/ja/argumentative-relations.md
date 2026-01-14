---
title: 論証関係
description: 機能によって整理された弁証法グラフのエッジ種別
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

論証関係（argumentative
relations）は、[弁証法グラフ](./dialectical-graph)におけるエッジ種別であり、認識論的オブジェクト（epistemic
objects）が互いにどのように関係するかを符号化します。これは、弁証法グラフをトピック類似性グラフ（topic-similarity
graph）と区別するものです。

## 反駁（チャレンジ）関係

- [攻撃](./attack) — 主張の真偽に対する直接的な異議
- [アンダーカット](./undercut) — 方法・前提・定義に対する異議
- [反例](./counterexample) — 主張を破綻させる事例
- `contradicts` — 明示的な両立不可能性

## 支持関係

- `supports` — 主張を強める証拠または推論
- `cites` — [情報源](./source)への明示的な帰属
- `replicates` / `fails_to_replicate` — 再現（replication）状況

## 精緻化（リファインメント）関係

- `refines` — 主張を狭める、または明確化する
- `generalizes` / `specializes` — 適用範囲の調整
- `depends_on` — 主張をその[前提](./assumption)へ結びつける
- `defines`
  — 用語をその定義へ接続する（[定義ドリフト](./definition-drift)を通じて経時的に追跡）

完全な仕様については[弁証法グラフのエッジ](./dialectical-graph-edges)を、また型付きエッジがなぜ重要かについては[関係タイピング vs 類似性](./relation-typing-vs-similarity)を参照してください。

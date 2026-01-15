---
title: グラフ構成要素
description: 弁証法グラフを構成するノード型とエッジ型
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

グラフ構成要素は、[弁証法グラフ](./dialectical-graph)の基本的な構成単位です。認識論的対象（epistemic objects）を表す[弁証法グラフのノード](./dialectical-graph-nodes)と、それらの間の[議論関係](./argumentative-relations)を表す[弁証法グラフのエッジ](./dialectical-graph-edges)から成ります。

**ノード型**:

- [Claim](./claim) — 検証可能な命題
- [Evidence Span](./evidence-span) — 情報源からの正確な引用テキスト
- [Scope](./scope) — 適用条件
- [Assumption](./assumption) — 暗黙の前提
- [Method](./method) — 証拠を生成するための手順
- [Source](./source) — 出所（provenance）のアンカー
- [Counterexample](./counterexample) — 主張を破る事例
- [Issue Node](./issue-node) — 衝突する主張の束

**エッジ型**:

- [Attack](./attack) — 真偽への直接的な異議
- [Undercut](./undercut) — 根拠への異議
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contention](./contention) — 構造化された対立マーカー

---
title: 主張ステータス分類
description: 弁証法的グラフにおいて主張が取り得る状態
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

主張ステータス分類は、[弁証法的グラフ](./dialectical-graph)において[主張](./claim)が取り得る状態を定義する。主張が時間とともに通常どのようにこれらの状態を移っていくかについては、[主張ライフサイクル](./claim-lifecycle)を参照。

## 一般的な状態

- `tentative` — 仮説段階
- `contested` — 活発な議論（論争）状態
- `conditionally supported` — 指定された条件の下では真
- `robust` — 複数の独立した経路によって支持されている
- `refuted` — [反例](./counterexample)によって崩された
- `obsolete` —
  [定義のドリフト](./definition-drift)や手法の変更により意味が失われた

ステータスは単一の信頼度スコアではない。ある主張は、証拠の多様性の点では robust でも、適用範囲の点では contested になり得る。また、ある文脈では conditionally supported でも、別の文脈では refuted になり得る。多次元のステータスは、この複雑さを捉える。

状態間の遷移は、反駁の「量」ではなく「種類」によって駆動される。十分に根拠づけられた単一の[反例](./counterexample)が、主張を robust から refuted へ移すことがあり得る一方で、弱い異論が多数あっても、解決には至らず contested のまま残ることもある。形式的な遷移ロジックについては、[ステータス遷移ルール](./status-transition-rules)を参照。

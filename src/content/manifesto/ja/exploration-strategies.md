---
title: 探索戦略
description: 継続的な知識発見のためのグラフ走査戦略
sourceLocale: en
sourceHash: b3abf2d73b65
translatedAt: 2026-01-14
---

[コサイエンティスト](./coscientist)
には検索（retrieval）以上のものが必要です。すなわち、[探索メカニズム](./exploration-mechanisms)
により、[弁証法グラフ](./dialectical-graph)
において、矛盾、境界条件、手法依存性を能動的に浮かび上がらせる探索が求められます。

主な戦略は次のとおりです：

- [反例優先探索](./counterexample-first-search)
  — 人気をリスク信号として扱い、反例と境界条件を優先する
- [最小カット](./minimum-cut) — 矛盾を生み出す最小構造を切り出し、その後
  [最小矛盾集合](./minimum-contradiction-set) に注意を集中する
- [定義ドリフト](./definition-drift)
  — 概念の共有を前提にせず、意味の変化を検出する
- [手法-結論カップリング](./method-conclusion-coupling)
  — 手法ごとに主張をクラスタリングし、共通する欠陥を見つける
- [再現経路分離](./replication-path-separation)
  — 独立した証拠と、繰り返しの言い換えを区別する

実装上は、正規化、前提（assumption）の抽出、反例探索、スコープの再構成、検証戦略設計のための専門エージェントとして現れます。

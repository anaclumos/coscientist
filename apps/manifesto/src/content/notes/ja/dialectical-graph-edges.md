---
title: 弁証法グラフのエッジ
description: 弁証法的知識グラフにおいてノードを接続する関係タイプ
sourceLocale: en
sourceHash: e060cb9fd333
translatedAt: 2026-01-14
---

[弁証法グラフ](./dialectical-graph)では、エッジは類似度スコアではなく関係タイプを符号化します。これにより、「これらは同じトピックについてか？」だけでなく、「これはあれに対してどのように関係するのか？」と問えることが価値になります。

一般的な関係タイプには以下があります。

- 支持: `supports`
- 反論: `attacks`, `undercuts`, `contradicts`
- 精緻化とスコープ: `refines`, `generalizes`, `specializes`, `depends_on`
- 出典と測定: `cites`, `defines`, `measures`
- 再現: `replicates`, `fails_to_replicate`
- 任意のトピックリンク:
  `is_about`（便利だが、それ自体は認識論的（epistemic）ではない）

型付きエッジにより、反駁（rebuttal）連鎖を通じた知識更新、定義の衝突の検出、再現状況の追跡が可能になります。これらは、類似度ベースの検索が表現するのが苦手な能力です（[RAGの限界](./rag-limitations)参照）。また、品質評価も支援します。知識の質は結論の向きよりも、それを生み出した経路の持続性に依存し、エッジはその経路構造を符号化します。

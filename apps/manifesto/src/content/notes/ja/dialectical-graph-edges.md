---
title: 弁証法グラフのエッジ
description: 弁証法的知識グラフにおいてノードを接続する関係タイプ
---

[弁証法グラフ](./dialectical-graph)では、エッジは類似度スコアではなく関係タイプを符号化します。これにより、「これらは同じ話題についているか？」だけでなく、「これはあれに対してどう関係するのか？」と問える点に価値があります。

典型的な関係には `supports`、`attacks`、`undercuts`（方法・前提・定義レベルの異議申し立て）があります。さらに、`refines`、`generalizes`、`specializes`、`depends_on` といった精緻化およびスコープ関係、`cites`、`defines`、`measures`、`replicates`、`fails_to_replicate` のような来歴（provenance）リンク、そして `contradicts` のような明確な衝突関係も含まれます。グラフによっては `is_about` のような緩いトピックリンクも使いますが、認識論的な仕事は型付きの論証エッジが担います。

型付きエッジは、反駁（rebuttal）連鎖による知識更新、定義の衝突の検出、再現（replication）状況の追跡を可能にします。これらは類似度ベースの検索（retrieval）が表現するのが苦手な能力です（[RAGの限界](./rag-limitations)参照）。また、品質評価も支えます。知識の品質は結論の向きよりも、それを生み出した経路の耐久性により強く依存し、エッジはその経路構造を符号化します。
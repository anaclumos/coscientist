---
title: 知識の統合
description: 弁証法的知識システムにおいて、統合が平均化とどう異なるか
---

知識の統合（synthesis）とは、検索（retrieval）の後に、互いに両立しない情報源どうしを比較可能にしなければならないときに起こることです。これは平均化ではありません。前提・定義・適用範囲（scope）を揃えて、意見の食い違いをノイズではなく明示的な対象として扱えるようにすることです。

標準的な [RAG](./rag-limitations) は検索には強い一方で、統合には弱い傾向があります。なぜなら内部に [contention](./contention) というオブジェクトが存在しないからです。[Dialectical Graph](./dialectical-graph) では contention が第一級（first-class）として扱われるため、システムは不整合（incompatibility）をその原因へと分解できます。たとえば、定義の違い、サンプリングの違い、手法の違い、適用範囲の違い、あるいは時間によって生じる [非定常性（nonstationarity）](./nonstationarity) などです。

したがって、解決（resolution）は単一の文ではありません。それは分岐した地図（branched map）です。同じ用語が異なる定義の下で異なる結論を導くなら、システムはそれを結論の矛盾として扱う前に、定義レイヤーでの分岐として記録します。[イシューノード（Issue nodes）](./dialectical-graph-nodes) は「何が何と衝突しているか」を束ね、そのイシューがどの条件の下で解決可能かを記録します。

目標は、矛盾の地図と、明示的な解決条件の組です。そうすれば将来の作業は、書き換え（rewriting）ではなく、再配置（rearrangement）によって知識を更新できます。これが、[Coscientist](./coscientist) における熟考（contemplation）AIが、文書同士を衝突させることを狙っている理由です。すなわち、イシュー・クラスターの生成、条件の精緻化、構造化された反駁（rebuttals）、そして比較のための明示的な座標系（coordinate systems）を作り出すことです。
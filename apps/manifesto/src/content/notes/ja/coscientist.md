---
title: Coscientist
description: ポストAI時代における知識生産のための知的コンパニオン・システム
---

Coscientist は、アイザック・アシモフの架空の[銀河百科事典](./encyclopedia-galactica)に着想を得たオープンソースのサービスです。単なる情報の[知識の方舟](./knowledge-ark)を超え、人間の[Galarch](./galarch)とともに思索を拡張する知的コンパニオンであることを目指します。何よりも、ポストAI時代において、私たちの心を「脳腐り（brain rot）」から救い出すためのシステムです。

これは[Sunghyun Cho](./sunghyun-cho)によって作られています。起源の物語はシンプルです。保存は重要ですが、保存だけでは理解は生まれません。Coscientist は、矛盾・反例・定義のドリフト（definition drift）が、流暢な要約によって丸め込まれるのではなく、可視化され、対処可能になるように、知識を更新可能（updateable）にする設計になっています。

第一原則は主権（sovereignty）です。知識の権威は[Galarch](./galarch)の側に残らなければなりません。[Encyclopedia Meltdown](./encyclopedia-meltdown)を防ぐことは後付けではなく、設計制約そのものです。AI は思索労働（contemplation labor）は担えても、書いて宣言する主導権を奪うべきではありません。

このため Coscientist は、Q&A 型の RAG を超えています（[RAGの限界](./rag-limitations)参照）。生の文書テキストではなく[論証的行為](./argumentative-act)を保存する[弁証法グラフ（Dialectical Graph）](./dialectical-graph)を維持し、各主張をエビデンスのスパン、情報源、そして攻撃（attacks）・アンダーカット（undercuts）・引用（citations）といった明示的関係に結び付けられるようにします（[Dialectical Graph Nodes](./dialectical-graph-nodes) と [Dialectical Graph Edges](./dialectical-graph-edges)参照）。探索は、反例優先探索、[最小カット（minimum cut）](./minimum-cut)による矛盾の分離、明示的な[定義ドリフト（definition drift）](./definition-drift)検出など、敵対的圧力を優先する戦略によって駆動されます（[探索戦略](./exploration-strategies)参照）。

プロトコル層では、単に要約するのではなく文書同士を衝突させるために、[Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) や[知識統合（knowledge synthesis）](./knowledge-synthesis)のような手続きを用います。意図する成功状態は「論争（arguments）のエコシステム」です。AI が探索と再構成の作業を担い、Galarch が構造と検証を監督することで、結果としてのナラティブ（narrative）が追跡可能（traceable）なまま保たれます。

参照: https://cho.sh/r/6975BA.
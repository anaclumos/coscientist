---
title: Coscientist
description: 後 AI 時代用於知識生產的智慧夥伴系統
sourceLocale: en
sourceHash: 9ef4ae7abd93
translatedAt: 2026-01-14
---

Coscientist 是一個受 [Isaac Asimov](./isaac-asimov) 筆下虛構的
[銀河百科全書](./encyclopedia-galactica)
啟發的開源服務。它的目標不僅僅是作為資訊的
[knowledge ark](./knowledge-ark)（知識方舟）：而是一位與人類
[操作員](./operator) 並肩進行
[contemplation labor](./contemplation-labor)（沉思勞動）的
[intellectual companion](./intellectual-companion)（智慧夥伴）。在後 AI 時代，它的目標是支持
[un-brain-rotting](./un-brain-rotting)（去腦腐化）：恢復驗證與能動性（agency）。

它由 [Sunghyun Cho](./sunghyun-cho)
打造。其起源很直接：保存很重要，但單靠保存並不能產生理解。Coscientist 的設計是讓知識可更新，使矛盾、反例，以及
[definition drift](./definition-drift)（定義漂移）能變得可見且可採取行動，而不是被流暢的摘要抹平。

第一原則是主權：知識的權威必須保留在 [操作員](./operator) 手中。防範
[百科全書崩潰](./encyclopedia-meltdown)（百科全書崩潰）並非事後補救；而是一項設計約束。AI 可以做沉思勞動，但不應奪取撰寫與宣告的主導權。

這也是為什麼 Coscientist 超越了問答式 RAG（檢索增強生成；見
[RAG limitations](./rag-limitations)）。它維護一個
[辯證圖譜](./dialectical-graph)（辯證圖），儲存的是
[argumentative acts](./argumentative-act)（論證行動）而非原始文件文本，因此每個主張都能被連結到證據片段、來源與明確關係（見
[Dialectical Graph Nodes](./dialectical-graph-nodes) 與
[Dialectical Graph Edges](./dialectical-graph-edges)）。

探索預設以對抗性（adversarial）方式進行。[counterexample-first search](./counterexample-first-search)（反例優先搜尋）、透過
[minimum cut](./minimum-cut)（最小割）進行矛盾隔離，以及明確的
[definition drift](./definition-drift)（定義漂移）偵測等策略，會在早期施加壓力，使知識透過反駁而更新，而不是因重複而漂移（見
[Exploration Strategies](./exploration-strategies)）。

在協議層級，系統使用如
[Multi-AI Consensus Protocol](./multi-ai-consensus-protocol)（多 AI 共識協議）與
[knowledge synthesis](./knowledge-synthesis)（知識綜合）等程序，讓文件彼此碰撞，而不只是做摘要。由於使用
[LLMs](./llm)（大型語言模型），Coscientist 能進行
[cross-linguistic synthesis](./cross-linguistic-synthesis)（跨語言綜合）：閱讀並綜合任何語言的文獻，從而實現真正的
[multilingual knowledge mesh](./multilingual-knowledge-mesh)（多語知識網）。其預期的終局狀態是一個由論證構成的生態系：AI 負責搜尋與重構，而 Operator 監督結構與驗證，讓最終敘事仍可追溯（traceable）。

參考：https://cho.sh/r/6975BA。

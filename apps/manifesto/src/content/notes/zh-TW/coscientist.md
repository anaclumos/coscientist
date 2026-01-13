---
title: Coscientist
description: 後 AI 時代的知識生產之智識伴侶系統
---

Coscientist 是一項開源服務，靈感來自 Isaac Asimov 虛構的[《Encyclopedia Galactica》](./encyclopedia-galactica)。它旨在成為不只是資訊的[知識方舟](./knowledge-ark)：一個能與人類[Galarch](./galarch)一同拓展思考的智識伴侶。最重要的是，它是一套在後 AI 時代讓我們的大腦「不再腐爛」的系統。

它由[Sunghyun Cho](./sunghyun-cho)打造。其起源故事很直白：保存很重要，但僅有保存並不會產生理解。Coscientist 的設計目標，是讓知識可更新（updateable），使矛盾、反例與定義漂移（definition drift）變得可見且可採取行動，而不是被流暢的摘要悄然抹平。

第一原則是主權（sovereignty）：知識權威必須仍掌握在[Galarch](./galarch)手中。防範[百科熔毀（Encyclopedia Meltdown）](./encyclopedia-meltdown)並非事後補強；它是一項設計約束。AI 可以進行思考勞動，但不應奪取撰寫與宣告的主導權。

這就是為什麼 Coscientist 超越了 Q&A 式的 RAG（見 [RAG 限制](./rag-limitations)）。它維護一個[辯證圖（Dialectical Graph）](./dialectical-graph)，儲存的是[論辯行為（argumentative acts）](./argumentative-act)而非原始文件文字，因此每個主張都能綁定到證據片段、來源與明確關係（例如攻擊、削弱（undercuts）與引用；見[辯證圖節點（Dialectical Graph Nodes）](./dialectical-graph-nodes)與[辯證圖邊（Dialectical Graph Edges）](./dialectical-graph-edges)）。探索由優先施加對抗性壓力的策略所驅動，包括「反例優先」搜尋、透過[最小割（minimum cut）](./minimum-cut)進行矛盾隔離，以及明確的[定義漂移](./definition-drift)偵測（見[探索策略（Exploration Strategies）](./exploration-strategies)）。

在協定層級，系統使用如[多 AI 共識協定（Multi-AI Consensus Protocol）](./multi-ai-consensus-protocol)與[知識綜合（knowledge synthesis）](./knowledge-synthesis)等程序，讓文件彼此碰撞，而不只是做摘要。其預期的成功狀態是一個論證生態系：AI 負責搜尋與重構工作，而 Galarch 監督結構與驗證，使最終敘事仍可追溯。

參考： https://cho.sh/r/6975BA。
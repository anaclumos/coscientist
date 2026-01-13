---
title: Coscientist
description: 后 AI 时代用于知识生产的智识伙伴系统
---

Coscientist 是一个开源服务，灵感来自艾萨克·阿西莫夫（Isaac Asimov）虚构的 [Encyclopedia Galactica](./encyclopedia-galactica)。它的目标不仅仅是一个信息的[知识方舟](./knowledge-ark)：而是一个与人类 [Galarch](./galarch) 一同拓展思考的智识伙伴。最重要的是，它是一套用于在后 AI 时代让我们的心智“去腐烂（un-brain-rotting）”的系统。

它由 [Sunghyun Cho](./sunghyun-cho) 构建。其起源很直接：保存很重要，但仅有保存并不会产生理解。Coscientist 被设计为让知识可更新（updateable），使得矛盾、反例与定义漂移（definition drift）变得可见且可操作，而不是被流畅的摘要抹平。

第一原则是主权：知识权威必须仍归 [Galarch](./galarch) 所有。防范 [Encyclopedia Meltdown](./encyclopedia-meltdown) 不是事后补丁；它是设计约束。AI 可以承担“思考劳动”，但不应夺取写作与宣告的主动权。

因此，Coscientist 超越了问答式 RAG（见 [RAG limitations](./rag-limitations)）。它维护一个 [Dialectical Graph](./dialectical-graph)，存储的是[论证行为](./argumentative-act)而非原始文档文本，因此每个主张都可以绑定到证据片段、来源，以及诸如攻击（attacks）、削弱（undercuts）与引用（citations）等明确关系（见 [Dialectical Graph Nodes](./dialectical-graph-nodes) 与 [Dialectical Graph Edges](./dialectical-graph-edges)）。探索由优先施加对抗性压力的策略驱动，包括“反例优先”搜索、通过[最小割](./minimum-cut)进行矛盾隔离，以及显式的[定义漂移](./definition-drift)检测（见 [Exploration Strategies](./exploration-strategies)）。

在协议层面，系统使用诸如 [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) 与[知识综合](./knowledge-synthesis)等流程，让文档彼此碰撞而不只是被总结。其期望的成功状态，是一个由论证构成的生态系统：AI 负责搜索与重构工作，而 Galarch 监督结构与验证，使得最终叙事仍可追溯。

参考：https://cho.sh/r/6975BA。
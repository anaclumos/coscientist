---
title: Coscientist
description: 后 AI 时代用于知识生产的智识伴侣系统
---

Coscientist 是一个开源服务，灵感来自 [艾萨克·阿西莫夫](./isaac-asimov) 虚构的 [银河百科全书](./encyclopedia-galactica)。它的目标不仅仅是一个信息的[知识方舟](./knowledge-ark)：而是一个与人类[操作员](./operator)并肩进行[沉思劳动](./contemplation-labor)的[智识伴侣](./intellectual-companion)。在后 AI 时代，它的目标是支持[不脑腐](./un-brain-rotting)：恢复可验证性与能动性（agency）。

它由 [曹成贤](./sunghyun-cho) 构建。其起源很直接：保存很重要，但仅有保存并不会产生理解。Coscientist 的设计旨在让知识可更新，使矛盾、反例与[定义漂移](./definition-drift)变得可见且可操作，而不是被流畅的摘要所抹平。

第一原则是主权：知识权威必须保留在[操作员](./operator)手中。防范[百科融毁](./encyclopedia-meltdown)不是事后补丁，而是一条设计约束。AI 可以执行沉思劳动，但不应夺取撰写与宣告的主动权。

因此，Coscientist 超越了问答式 RAG（见 [RAG limitations](./rag-limitations)）。它维护一个[辩证图](./dialectical-graph)，存储的是[论证行为](./argumentative-act)而非原始文档文本，使每一条主张都能绑定到证据片段、来源与显式关系（见 [Dialectical Graph Nodes](./dialectical-graph-nodes) 和 [Dialectical Graph Edges](./dialectical-graph-edges)）。

默认的探索是对抗式的。诸如[反例优先搜索](./counterexample-first-search)、通过[最小割](./minimum-cut)进行矛盾隔离，以及显式的[定义漂移](./definition-drift)检测等策略，会在早期施加压力，让知识通过反驳来更新，而不是在重复中漂移（见 [Exploration Strategies](./exploration-strategies)）。

在协议层面，该系统使用诸如[多 AI 共识协议](./multi-ai-consensus-protocol)与[知识综合](./knowledge-synthesis)等流程，让文档相互碰撞，而非仅仅做摘要。由于使用了[大语言模型](./llm)，Coscientist 可以执行[跨语言综合](./cross-linguistic-synthesis)：用任何语言阅读并综合文献，从而实现真正的[多语言知识网格](./multilingual-knowledge-mesh)。其预期的终态是一个由论证构成的生态：AI 负责搜索与重构，而操作员监督结构与验证，使最终叙事保持可追溯。

参考：https://cho.sh/r/6975BA。

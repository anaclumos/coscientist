---
title: 幻觉
description: 看似可信但在事实层面不正确或捏造的 AI 输出
---

幻觉（hallucination）是指一种 AI 输出：读起来自信且连贯，但包含事实错误、捏造的信息或虚构的引用。危险之处不在于随机性，而在于“看起来很合理”。幻觉文本往往能经受住随意的审查，因为它遵循了真实散文的统计模式。

幻觉是理解 [大语言模型](./llm) 如何工作的一个症状：它们预测的是“最可能的下一个 token（词元）”，而不是真实的 token。当训练数据在某个话题上稀疏或相互矛盾时，模型会进行插值（interpolate），结果就可能在措辞上很顺滑，但在事实层面是错的。这也是为什么 [流利度陷阱](./fluency-trap) 如此危险：流利并不意味着准确。

在 [共研者](./coscientist) 中，幻觉风险通过 [认识论协议层](./epistemic-protocol-layer) 来管理：[可追溯性](./traceability) 要求主张必须连接到 [证据片段](./evidence-span)，[反驳优先搜索](./rebuttal-first-search) 在接受之前进行压力测试，而 [多 AI 共识协议](./multi-ai-consensus-protocol) 则将模型间的不一致作为需要更仔细检查的信号。

---
title: LLM
description: Coscientist の熟考労働を支える AI アーキテクチャである大規模言語モデル
---

LLM（Large Language Model）は、膨大なテキストコーパスで学習し、自然言語の予測と生成を行うニューラルネットワークモデルを指します。例として GPT、Claude、Gemini、Llama などがあります。LLM は学習データから統計的パターンを学ぶことで、要約、翻訳、質問応答、コード生成など、幅広い言語タスクを実行できます。

[コサイエンティスト](./coscientist) にとって、LLM は [contemplation labor](./contemplation-labor) を担うエンジンです。つまり、仮説の提案、証拠の収集、反例の発見、議論の構造化を行います。LLM はあらゆる言語を読めるため、[cross-linguistic synthesis](./cross-linguistic-synthesis) をネイティブな能力として可能にします。

しかし、LLM には根本的な限界があります。LLM は真実のためではなく、もっともらしい次トークンを最適化します。LLM は [hallucinate](./hallucination) することがあります。つまり、事実としては誤っているのに、自信に満ち、一貫性のある文章を生成します。また、[fluency trap](./fluency-trap)（流暢さの罠）の影響も受けます。滑らかな文章が誤りを覆い隠してしまうのです。さらに、モデル間で学習データを共有しているため、モデル同士の一致は独立した [verification](./verification) ではなく、相関したバイアスを反映している可能性があります（[evidence independence](./evidence-independence) を参照）。

このため [コサイエンティスト](./coscientist) は、LLM を神託ではなく道具として扱います。[オペレーター](./operator) が主権を保持し、[epistemic protocol layer](./epistemic-protocol-layer) が [traceability](./traceability) と [反駁優先検索](./rebuttal-first-search) を強制し、[Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) はモデル間の不一致を精査すべきシグナルとして用います。LLM が探索と構造化を行い、人間が検証と意思決定を行います。
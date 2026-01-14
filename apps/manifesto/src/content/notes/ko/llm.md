---
title: LLM
description: 대규모 언어 모델, Coscientist의 숙고 노동을 뒷받침하는 AI 아키텍처
---

대규모 언어 모델은 방대한 텍스트 말뭉치를 학습해 자연어를 예측하고 생성하도록 훈련된 신경망 모델을 뜻한다. 예로는 GPT, Claude, Gemini, Llama 등이 있다. LLM은 학습 데이터에서 통계적 패턴을 익힘으로써 요약, 번역, 질의응답, 코드 생성 등 폭넓은 언어 과업을 수행할 수 있다.

[코사이언티스트](./coscientist)에서 LLM은 [숙고 노동](./contemplation-labor)을 수행하는 엔진이다. 즉, 가설을 제안하고, 증거를 수집하며, 반례를 찾고, 논증을 구조화한다. 또한 LLM은 어떤 언어든 읽을 수 있기 때문에, [언어 간 종합](./cross-linguistic-synthesis)을 본래적 역량으로 가능하게 한다.

하지만 LLM에는 근본적인 한계가 있다. LLM은 진실을 위해 최적화되는 것이 아니라, 그럴듯한 다음 토큰을 위해 최적화된다. 그 결과 [환각](./hallucination)을 일으킬 수 있는데, 이는 사실과 다름에도 확신에 차고 일관된 텍스트를 생성하는 현상이다. 또한 오류를 매끈한 문장으로 가려버리는 [유창성 함정](./fluency-trap)에 취약하다. 모델들은 유사한 학습 데이터를 공유하므로, 여러 모델 간의 일치는 독립적인 [검증](./verification)이 아니라 상관된 편향을 반영할 수도 있다(참고: [증거 독립성](./evidence-independence)).

이 때문에 [코사이언티스트](./coscientist)는 LLM을 신탁이 아니라 도구로 다룬다. [오퍼레이터](./operator)가 주권을 유지하며, [인식론적 프로토콜 계층](./epistemic-protocol-layer)이 [추적 가능성](./traceability)과 [반박 우선 탐색](./rebuttal-first-search)을 강제하고, [멀티-AI 합의 프로토콜](./multi-ai-consensus-protocol)은 모델 간 불일치를 더 면밀한 점검이 필요하다는 신호로 사용한다. LLM은 탐색과 구조화를 수행하고, 인간은 검증과 의사결정을 수행한다.

---
title: 변증법적 그래프
description: 문서 콘텐츠가 아니라 주장과 관계를 저장하는 지식 그래프 모델
---

변증법적 그래프(dialectical graph)는 문서를 구분되지 않는 텍스트로 취급하는 대신, 논증 구조(주장, 정의, 가정, 방법, 증거 스팬(evidence spans), 그리고 그들 사이의 관계)를 저장하는 지식 그래프다. 핵심 통찰은 단순하다: 텍스트를 지식으로 착각하지 말라. 텍스트는 포장이고, 지식은 주장들이 서로를 지지(support)하고 공격(attack)하며 정교화(refine)할 수 있게 하는 제약 구조(constraint structure)다.

[Coscientist](./coscientist)는 삼중 분리를 강제한다. 원문 텍스트는 인용 가능한 증거 스팬으로 보존되고, 주장은 정규화된 명제(normalized propositions)로 분해되며, 관계는 명시적인 논증적 바인딩(argumentative bindings)으로 저장된다. 이는 흔한 RAG 실패 모드인 발췌문 잘림(excerpt truncation)을 구조적으로 해결한다. 증거 스팬은 정확한 문구와 출처를 유지하고, 주장은 누가 무엇을 주장했는지를 기록하며, `cites` 엣지(edge)는 산문으로 암묵적으로 처리되던 귀속(attribution)을 명시적으로 만든다.

이 그래프는 또한 추론 레이어(inference layer, 진화하는 주장 네트워크)와 서사 레이어(narrative layer, 읽기에 적합한 타임스탬프(time-stamped) 투영)를 분리한다. 문서는 최종 진리가 아니라 그래프의 스냅샷이다. 모든 문장은 주장, 범위(scope), 가정, 방법, 데이터, 증거 스팬, 출처를 거쳐 되짚어 올라갈 수 있어야 한다. 그 사슬이 없으면 문장은 그저 문장일 뿐, 지식이 아니다.

[Encyclopedia Meltdown](./encyclopedia-meltdown)에 대한 제동 장치로서, 이 시스템은 합의(consensus)보다 모순(contradictions)과 반례(counterexamples)를 우선한다. 어떤 주장이 그래프에 들어오면 기본 자세는 대립적(adversarial)이다. 반복으로 표류(drifting)하기보다 반박(rebuttal)으로 구조가 갱신되도록, 공격(attack)과 약화(undercuts)를 초기에 탐색한다. 구체적인 노드와 관계 타입은 [Dialectical Graph Nodes](./dialectical-graph-nodes) 및 [Dialectical Graph Edges](./dialectical-graph-edges)를 참고하라.
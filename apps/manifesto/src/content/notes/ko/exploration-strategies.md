---
title: 탐색 전략
description: 지속적인 지식 발견을 위한 그래프 순회 전략
---

[Coscientist](./coscientist)에는 단순히 검색(retrieve)하는 것을 넘어서는 엔진이 필요하다. 즉, [변증법적 그래프](./dialectical-graph)에서 모순, 경계 조건(boundary conditions), 방법 의존성(method dependence)을 능동적으로 드러내며 새로운 접근을 지속적으로 탐색한다.

한 가지 전략은 반례 우선(counterexample-first) 탐색이다. 인기도는 품질의 증거라기보다 위험의 증거로 더 취급된다. 어떤 주장이 더 널리 반복될수록, 그에 대한 반례와 경계 조건을 수집하는 가치가 커진다. 인기 있는 주장으로 인한 오염(contamination)은 [백과사전 멜트다운](./encyclopedia-meltdown)에서 더 큰 폭발 반경(blast radius)을 갖기 때문이다.

또 다른 전략은 모순 최소 컷(contradiction minimum-cut) 탐색이다. 주장 클러스터가 충돌할 때, 시스템은 충돌을 생성하는 최소한의 전제와 관계 집합을 찾고, 그 구조를 숙고(contemplation)의 대상으로 삼는다. 인간의 시간은 [최소 모순 집합](./minimum-contradiction-set)에 투자되고, AI는 광범위한 탐색, 후보 생성, [최소 컷](./minimum-cut) 계산을 처리한다.

정의 드리프트(definition drift) 탐지는 의미를 움직이는 대상으로 취급한다. 어떤 용어의 정의가 시간이나 공동체에 따라 이동할 때, 그래프는 공유된 개념을 당연시하는 대신(참고: [정의 드리프트](./definition-drift)) 그 변화를 명시적으로 기록한다. 이는 [RAG](./rag-limitations)의 흔한 실패 양상을 상쇄한다.

방법–결론 결합(method–conclusion coupling) 검증은 결론이 아니라 방법을 기준으로 주장들을 클러스터링한다. 서로 다른 결론이 같은 결함을 공유할 수 있고, 동일한 결론도 매우 다른 근거 위에 놓일 수 있기 때문이다. 복제 경로 분리(replication path separation)도 마찬가지로 “다수결”을 피하며, 지지가 반복 진술에서 오는지, 아니면 독립적인 경로에서 오는지를 묻는다.

이러한 동작은 전문화된 에이전트로 구현되며, 여기에는 주장 정규화(claim normalization), 숨은 가정 추출(hidden assumption extraction), 정의 충돌 탐지(definition conflict detection), 반례 탐색(counterexample search), 논증 경로 최소화(argumentative path minimization), 범위 재구성(scope reconstruction), 대안 가설 생성(alternative hypothesis generation), 검증 전략 설계(verification strategy design)가 포함된다. 이러한 분해는 숙고 작업을 명시적이고 검증 가능하게 만든다.
---
title: 탐색 전략
description: 지속적인 지식 발견을 위한 그래프 순회 전략
---

[코사이언티스트](./coscientist)에는 단순한 검색만으로는 부족하다. [변증법적 그래프](./dialectical-graph)에서 모순, 경계 조건, 그리고 방법 의존성을 능동적으로 드러내는 탐색이 필요하다.

핵심 전략은 다음과 같다:

- [반례 우선 탐색](./counterexample-first-search) — 인기도를 위험 신호로 취급하고, 반례와 경계 조건을 우선한다
- [최소 컷](./minimum-cut) — 모순을 만들어내는 최소 구조를 분리한 뒤, [최소 모순 집합](./minimum-contradiction-set)에 주의를 집중한다
- [정의 표류](./definition-drift) — 개념을 공유한다고 가정하기보다 의미 변화를 탐지한다
- [방법-결론 결합](./method-conclusion-coupling) — 방법별로 주장들을 군집화하여 공통 결함을 찾는다
- [재현 경로 분리](./replication-path-separation) — 독립적인 증거와 반복된 재진술을 구분한다

구현에서는 정규화, 가정 추출, 반례 탐색, 범위 재구성, 검증 전략 설계를 위한 특화 에이전트로 나타난다.

---
title: 변증법적 그래프 엣지
description: 변증법적 지식 그래프에서 노드를 연결하는 관계 유형
---

[변증법적 그래프](./dialectical-graph)에서 엣지는 유사도 점수보다는 관계 유형을 인코딩한다. 이렇게 하면 "이것이 저것에 어떻게 영향을 미치는가?"를 물을 수 있고, "이 둘이 같은 주제에 관한가?"만 묻는 데 그치지 않는다.

일반적인 관계 유형은 다음과 같다:

- 지지: `supports`
- 반박: `attacks`, `undercuts`, `contradicts`
- 정교화 및 범위: `refines`, `generalizes`, `specializes`, `depends_on`
- 출처 및 측정: `cites`, `defines`, `measures`
- 재현(재현성): `replicates`, `fails_to_replicate`
- 선택적 주제 연결: `is_about` (유용하지만, 그 자체로는 인식론적이지 않음)

타입이 지정된 엣지는 반박 체인을 통한 지식 업데이트, 정의 충돌 탐지, 재현 상태 추적을 가능하게 한다. 이는 유사도 기반 검색이 표현하기 어려운 능력이다(참고: [RAG 한계](./rag-limitations)). 또한 품질 평가도 지원한다. 지식의 품질은 결론의 방향보다 그 결론을 만들어낸 경로의 내구성에 더 좌우되며, 엣지는 그 경로 구조를 인코딩한다.

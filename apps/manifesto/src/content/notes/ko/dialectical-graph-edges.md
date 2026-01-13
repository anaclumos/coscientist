---
title: 변증법적 그래프 엣지
description: 변증법적 지식 그래프에서 노드들을 연결하는 관계 유형
---

[변증법적 그래프](./dialectical-graph)에서 엣지(edge)는 유사도 점수보다는 관계 유형을 인코딩합니다. 그 가치는 “이것이 저것과 같은 주제인가?”만 묻는 대신, “이것이 저것에 대해 어떤 의미를 갖는가/어떤 영향을 미치는가?”를 물을 수 있다는 데 있습니다.

전형적인 관계로는 `supports`, `attacks`, `undercuts`(방법/가정/정의 수준의 도전)가 있습니다. 또한 `refines`, `generalizes`, `specializes`, `depends_on` 같은 정교화 및 범위 관계, `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate` 같은 출처(provenance) 링크, 그리고 `contradicts` 같은 정면 충돌 관계도 포함됩니다. 일부 그래프는 `is_about` 같은 느슨한 주제 연결을 쓰기도 있지만, 인식론적 작업(epistemic work)은 타입이 지정된 논증적 엣지에서 나옵니다.

타입이 지정된 엣지는 반박(rebuttal) 연쇄를 통한 지식 업데이트, 정의 충돌 탐지, 재현(replication) 상태 추적을 가능하게 합니다. 이는 유사도 기반 검색이 표현하기 어려워하는 능력들입니다(참고: [RAG 한계](./rag-limitations)). 또한 품질 평가도 지원합니다. 지식의 품질은 결론의 방향성보다는 그 결론을 낳은 경로가 얼마나 오래 버티는지(durability)에 더 좌우되며, 엣지는 그 경로 구조를 인코딩합니다.
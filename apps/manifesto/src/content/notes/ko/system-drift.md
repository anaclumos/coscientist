---
title: 시스템 드리프트
description: 자기 오염 또는 방치로 인한 지식 시스템의 열화
---

시스템 드리프트는 [드리프트 현상](./drift-phenomena) 가운데, 의미나 환경의 변화와 무관하게 지식 시스템 자체가 시간이 지나며 열화되는 경우를 말한다.

## 형태

- [모델 붕괴](./model-collapse) — AI 생성 데이터로 학습하면서 발생하는 열화
- [교정 vs 드리프트](./correction-vs-drift) — 오류를 고치는 비용이 오류를 퍼지게 두는 것보다 더 커지는 경우

## 왜 중요한가

시스템 드리프트는 지식 시스템이 "대충 유지되는" 거짓된 준-정상 상태 주변으로 안정화되는 실패 모드다. 교정이 비싸기 때문에 오류가 지속되고, AI 생성 콘텐츠가 학습 데이터를 오염시키며, 시스템은 점진적으로 그라운드 트루스와의 접점을 잃는다.

[백과사전 멜트다운](./encyclopedia-meltdown)는 그 극단적 형태다. AI가 주도적으로 글을 쓰기 시작하면 [책임 경계선](./responsibility-line)이 사라지고, 시스템은 자기참조적 붕괴 쪽으로 드리프트한다. 방어책은 [인식론적 프로토콜 레이어](./epistemic-protocol-layer)로, [추적 가능성](./traceability), [제로 트러스트 수집](./zero-trust-ingestion), [반박 우선 검색](./rebuttal-first-search)을 통해 드리프트보다 교정을 더 싸게 유지하는 것이다.

## 관련

- [드리프트 현상](./drift-phenomena) — 상위 범주
- [의미 드리프트](./semantic-drift) — 의미가 변하는 경우
- [환경 드리프트](./environmental-drift) — 세계가 변하는 경우
- [제도적 뇌 부패](./institutional-brain-rot) — 조직적 유사 사례

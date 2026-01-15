---
title: 논증 관계
description: 기능별로 정리된 변증법적 그래프의 엣지 유형
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

논증 관계는 [변증법적 그래프](./dialectical-graph)(또한 [그래프 구성 요소](./graph-components) 참고)에서 인식론적 객체들이 서로
어떻게 연관되는지를 부호화하는 엣지 유형이다. 이것이 변증법적 그래프를
주제-유사성 그래프와 구분해 주는 핵심이다.

## 도전 관계

- [공격](./attack) — 주장 진실성에 대한 직접적인 도전
- [언더컷](./undercut) — 방법, 가정, 또는 정의에 대한 도전
- [반례](./counterexample) — 주장을 무너뜨리는 사례
- `contradicts` — 명시적 비양립성

## 지지 관계

- `supports` — 주장을 강화하는 증거 또는 추론
- `cites` — [출처](./source)에 대한 명시적 인용/귀속
- `replicates` / `fails_to_replicate` — 재현 상태

## 정교화 관계

- `refines` — 주장을 더 좁히거나 명확히 함
- `generalizes` / `specializes` — 범위 조정
- `depends_on` — 주장을 그 [가정](./assumption)과 연결
- `defines` — 용어를 그 정의와 연결 )

전체 명세는 [변증법적 그래프 엣지](./dialectical-graph-edges)를, 유형화된 엣지가
왜 중요한지는 [관계 유형화 대 유사성](./relation-typing-vs-similarity)을
참고하세요.

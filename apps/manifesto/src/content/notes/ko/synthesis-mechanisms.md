---
title: 합성 메커니즘
description: 호환되지 않는 출처를 비교 가능하게 만드는 패턴
---

합성 메커니즘은 [코사이언티스트](./coscientist)가 서로 호환되지 않는 출처들을 비교 가능하게 만들고, 충돌에서 구조화된 출력을 생성하기 위해 사용하는 패턴과 프로토콜이다.

## 핵심 프로세스

- [지식 합성](./knowledge-synthesis) — 전제, 정의, 범위를 정렬해 불일치를 명시적으로 드러내기

## 입력 패턴

- [문서 충돌](./document-collision) — 출처들이 서로의 주장에 직접 맞물리도록 강제하기
- [경합](./contention) — 구조화된 충돌을 1급 객체로 다루기

## 출력 패턴

- [분기형 해결 맵](./branched-resolution-map) — 서로 다른 전제에 기반해 가능한 여러 유효한 결론을 보여주기
- [이슈 노드](./issue-node) — 충돌하는 주장들을 묶어 집중적으로 해결하기

## 분석 도구

- [비호환성 분류 체계](./incompatibility-taxonomy) — 출처들이 왜 불일치하는지 분류하기
- [최소 모순 집합](./minimum-contradiction-set) — 충돌의 핵심을 찾기
- [최소 컷](./minimum-cut) — 모순을 만들어내는 구조를 분리하기

## 다국어 차원

- [언어 간 합성](./cross-linguistic-synthesis) — 여러 언어의 지식을 결합하기
- [언어 불가지론적 인덱싱](./language-agnostic-indexing) — 특정 언어를 초월하는 개념 인덱스
- [번역 뉘앙스 손실](./translation-nuance-loss) — 언어를 넘나들며 무엇이 손실되는지 추적하기

## 대비

- [RAG 한계](./rag-limitations) — 검색만으로는 왜 합성할 수 없는가

---
title: 검증 시스템
description: 주장을 증거와 반증, 그리고 대안적 설명에 비추어 확인하는 메커니즘
sourceLocale: en
sourceHash: 67e81c4c10c1
translatedAt: 2026-01-14
---

검증 시스템은 [Coscientist](./coscientist)가 [주장](./claim)을 증거, 반증,
그리고 대안적 설명에 비추어 확인하기 위해 사용하는 메커니즘들의 집합이다. 이는
단일 도구가 아니라, 서로 조율된 프로토콜과 실천의 묶음이다.

## 핵심 구성 요소

- [검증](./verification) — 주장을 확인하는 과정
- [반박 우선 탐색](./rebuttal-first-search) — 수용하기 전에 반증을 먼저 찾기
- [다중 AI 합의 프로토콜](./multi-ai-consensus-protocol) — 모델 간 불일치를
  신호로 활용하기
- [만장일치 요구](./unanimity-requirement) — 모든 검토자가 동의할 때만 주장을
  수용하기
- [책임선](./responsibility-line) — 누가 무엇을 주장했는지 추적하기
- [반례](./counterexample) — 주장을 무너뜨리는 사례
- [제로 트러스트 수집](./zero-trust-ingestion) — 권위보다 출처를 먼저 요구하기

이 시스템은 [수정이 표류보다 싸게](./correction-vs-drift) 만들도록 설계되었으며,
[바람직한 난이도](./desirable-difficulty-in-verification)를 통해
[운영자](./operator)가 계속 참여하도록 지원한다.

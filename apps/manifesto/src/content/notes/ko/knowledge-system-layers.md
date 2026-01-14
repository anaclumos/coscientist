---
title: 지식 시스템 계층
description: Coscientist의 아키텍처 계층
---

지식 시스템 계층은 [코사이언티스트](./coscientist)를 구성하는 서로 구분된 아키텍처 구성요소들입니다. 이러한 계층을 분리하면 서로 다른 관심사(concerns)가 독립적으로 진화할 수 있습니다.

## 데이터 계층

- [증거 구간](./evidence-span) — 원문 인용 텍스트를 있는 그대로 보존
- [출처](./source) — 추적 가능성을 위한 출처(프로비넌스) 앵커

## 추론 계층

- [추론 계층](./inference-layer) — 주장과 관계의 살아 있는, 진화하는 네트워크
- [주장](./claim), [공격](./attack), [언더컷](./undercut) 및 기타 [논증 관계](./argumentative-relations)

## 내러티브 계층

- [내러티브 계층](./narrative-layer) — 그래프를 사람이 읽을 수 있게 투영한 결과
- 문서는 최종 진실(ground truth)이 아니라, 타임스탬프가 찍힌 스냅샷

## 프로토콜 계층

- [인식론적 프로토콜 계층](./epistemic-protocol-layer) — 주장이 어떻게 유입되고 권위를 획득하는지에 대한 규칙
- [지식 헌장](./knowledge-constitution) — 지식 운영을 위한 거버넌스 문서

## 분리 원칙

- [삼중 분리](./triple-separation) — 원문 텍스트, 정규화된 주장, 관계를 서로 구분하여 유지하는 것
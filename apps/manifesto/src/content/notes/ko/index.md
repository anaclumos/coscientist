---
title: "출력 토큰 ≠ 지식"
description: Coscientist 시스템을 위한 선언문이자 개인적 서사
---

## 인지 외골격을 향한 개인적 탐구

나, [Sunghyun Cho](./sunghyun-cho)는 백과사전과 단 하나의 권위 있는 지식 저장소라는 발상에 대한 경외심 속에서 자랐다. 어린 시절 나는 _Encyclopedia Galactica_를 파고들며, 내 모든 프로젝트와 연구가 보편적 참고문헌 안에 살아갈 수 있는 세계를 상상했다. 이후 나는 1945년 Vannevar Bush의 에세이 [As We May Think](./as-we-may-think)을 발견했고, 그 글은 [Memex](./memex)를 묘사했다. Memex는 개인이 기록을 저장하고 연상적 경로(associative trails)를 통해 다시 찾아낼 수 있게 해주는 아카이브였다. 그 비전은 인지 외골격처럼 느껴졌다.

내가 21세기에 접어들어 본격적으로 커리어를 시작할 무렵, 인터넷은 전 지구적 Memex의 거친 근사치가 되어 있었다. 그러나 무언가가 빠져 있었다. 인터넷은 집단의 기록은 보존했지만, 개인의 마음—개인적 맥락, 진화하는 통찰, 살아 있는 아이디어—를 포착하는 데는 실패했다. 나는 [second brain](./second-brain) 도구와 [digital garden](./digital-garden) 실천을 실험했지만, 그것들은 너무 수동적이고 너무 쉽게 깨졌다. 나는 마찰을 최소화한 채 성장하고 적응할 수 있는 외재화된 [digital brain](./digital-brain)을 원했다.

그 깨달음은 [Project Aldehyde](./project-aldehyde)를 촉발했다. 개인 사용을 위한 Memex의 상위 집합(superset)을 만들려는 나의 시도였다. 수년의 반복 끝에, 2022년 5월 에세이 [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains)로 결실을 맺었다. 그 글은 개인 지식 워크플로에서 마찰이야말로 적이라고 주장했다. 정원을 관리하는 최선의 방식은 끊임없는 손질이 아니라, 스스로 조직되는 [digital jungle](./digital-jungle)을 경작하는 것이다. 원시 지식을 그냥 던져 넣으면 시스템이 알아서 정리하고, 연결하고, 다시 떠올리게 해줘야 한다.

2022년 중반, 나는 Obsidian에서 웹으로 이어지는 정적 사이트 파이프라인을 이용해 프로토타입을 구현했고, 이를 [Extracranial](./extracranial)이라 이름 붙였다. 그것은 콘텐츠를 자동 인덱싱하고, 백링크를 제안하며, 에버그린(evergreen)으로 표시하지 않으면 오래된 글이 자연스럽게 부식(decay)하도록 두는 개인 디지털 브레인이었다. 나는 링크를 미세관리하는 부담에서 벗어났고, 글쓰기와 사고에 집중할 수 있었다.

하지만 그 개인 위키를 구축해 나가며, 더 큰 문제가 시야에 들어왔다. 아무리 완벽한 개인 Memex라도, 더 넓은 인식론적 환경(epistemic environment)이 훼손되어 있다면 충분하지 않다. 생성형 AI가 보편화되면서 질문은 “지식을 어떻게 저장하지?”에서 “AI가 그럴듯한 텍스트로 시스템을 범람시킬 수 있을 때, 검증이 붕괴하지 않게 하려면 어떻게 해야 하지?”로 옮겨갔다.

## 디지털 브레인에서 프로토콜로

전통적 매체는 선형 구조를 강제한다. 그러나 실제 지식은 네트워크다. “차세대 디지털 브레인”은 그 간극에 대한 나의 응답이었다. 원칙은 단순했다. 마찰 없는 입력(강제 분류체계 없이 아이디어를 포착), 자동 조직화(알고리즘으로 연결을 추론), 동적 진화(지식이 부식하거나 에버그린으로 남도록 허용), 멀티모달 콘텐츠(다이어그램, 데모, 인터랙티브 미디어), 매끄러운 출처 연결(노트를 논문, 코드, 데이터셋, 참고자료에 연결). 수동 링크는 이해를 정교화하는 데 여전히 도움이 되지만, 선택 사항이어야 한다. 무거운 작업은 시스템이 해야 한다.

2023년이 되자, 나는 개인 노트테이킹을 넘어서는 질문들과 씨름하고 있었다. AI 생성 콘텐츠는 검증 그 자체를 위협했다. 나는 그 붕괴 시나리오를 [Encyclopedia Meltdown](./encyclopedia-meltdown)이라 불렀다. AI가 글쓰기를 주도하게 되면 [responsibility line](./responsibility-line)—책임의 선—이 사라지고, 오류가 링크를 통해 자기 증폭한다.

이에 대한 대응책은 [epistemic protocol layer](./epistemic-protocol-layer)다. 지식 시스템을 위한 헌법적 층(constitutional layer)이다. 핵심 약속은 주권(지식 권위는 인간 [Galarch](./galarch)에게 남는다), 추적 가능성(모든 주장에 책임의 선이 유지된다), 그리고 반박 우선 검증(rebuttal-first validation)(수용하기 전에 [rebuttal-first search](./rebuttal-first-search)로 반증 근거를 먼저 찾는다)이다. 이 층은 또한 명시적 출처(provenance)와 제로 트러스트(Zero-Trust) 수집(ingestion)을 강제함으로써 [model collapse](./model-collapse)나 [AI slop](./ai-slop)의 홍수 같은 압력도 다룬다.

## ScienceOps와 기관 규모

개인 지식 인프라는 편의성은 해결했지만, 기관 규모(institutional scale)는 해결하지 못했다. 다음 도약은 [ScienceOps](./scienceops)였다. 재현 가능한 실험, 자동화, 빠른 반복을 통해 과학 연구에 소프트웨어 운영(operations) 규율을 적용하고, [natural science engineer](./natural-science-engineer)라는 역할을 도입하는 것이다. 실험이 일회성(one-off)이 아니라 파이프라인이 되면, 가설과 검증 사이의 루프는 극적으로 줄어들 수 있다.

더 큰 목표는 실험을 코드처럼 다루는 “과학자를 위한 GitHub”다. 버전 관리되고, 반복 가능하며, 감사(audit) 가능한 형태로. 이것이 바로 [Coscientist](./coscientist) 같은 인지 엔진을 요구하는 운영적 맥락이다.

## Coscientist: 아키텍처, 에이전시, 그리고 청사진

[Coscientist](./coscientist)는 이 실타래들을 종합하는 시스템이다. 단일 답변 엔진이 아니라 연구 협업자로 기능하도록 설계된 멀티 에이전트 LLM 아키텍처다. 내부 루프는 제안, 비판, 랭킹, 정련(refinement)을 분리하며, 메타 리뷰(meta-review) 층이 일관성(coherence), 추적 가능성, 불확실성을 점검한다.

지식 층에서는 원문 텍스트가 아니라 주장과 관계를 저장하는 [Dialectical Graph](./dialectical-graph)를 유지한다. 서사적 출력은 추론 층(inference layer)의 투영으로 취급되므로, 모든 문장은 출처, 증거 구간(evidence spans), 명시적 관계로 되짚어갈 수 있다. 이러한 분리는 기존 생성 방식의 “매끄럽지만 검증 불가능한(smooth but unverifiable)” 실패 모드를 피한다.

전통적 AI 안전은 종종 문제를 정렬(alignment)로 틀 짓는다. 나는 [cognitive agency preservation](./cognitive-agency-preservation)—인지적 에이전시 보존—을 강조한다. AI는 인간의 판단을 대체하는 것이 아니라 강화해야 한다. 실천적으로 이는 사용자를 검증자(verifier) 역할에 남겨두는 것을 뜻한다. 작업 과정을 보여주고, 불확실성을 드러내며, 대안 가설을 제시하고, 반박 탐색을 기본값으로 만드는 것이다.

Coscientist는 새로운 인식론적 인프라를 위한 청사진을 지향한다. 마찰은 적되 주권적이고, 빠르되 책임 가능하며(accountable), 강력하되 에이전시를 침식하지 않는다. 이는 세 가지 실패 모드를 겨냥한다. 기관적 뇌 부패(institutional brain rot)(상호 참조와 적대적 리뷰(adversarial review)로 완화), 검증 붕괴(추적 가능성과 자동 반박 검색으로 완화), 그리고 에이전시 상실(투명성과 인간의 거부권(veto)으로 완화).

장기 비전은 개인, 조직, 공공 규모에서 연합(federated)된 Coscientist 인스턴스 네트워크가 지역적 주권(local sovereignty)을 보존하면서 검증된 지식을 교환하는 것이다. 읽기 경로가 필요하다면 [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains)(개인 도구)로 시작해, [Encyclopedia Meltdown](./encyclopedia-meltdown)과 [epistemic protocol layer](./epistemic-protocol-layer)(실패 모드와 방어), 그리고 [Dialectical Graph](./dialectical-graph)와 [knowledge synthesis](./knowledge-synthesis)(아키텍처)로 이어가라.
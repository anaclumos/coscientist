---
title: 지식 합성
description: 변증법적 지식 시스템에서 합성이 평균화와 어떻게 다른가
---

지식 합성(Knowledge synthesis)은 검색(retrieval) 이후, 서로 양립하지 않는 출처들을 비교 가능하게 만들어야 할 때 일어나는 작업이다. 이것은 평균화(averaging)가 아니다. 전제, 정의, 범위를 정렬(alignment)해 불일치가 잡음(noise)이 아니라 명시적인 대상(object)이 되도록 만드는 것이다.

표준 [RAG](./rag-limitations)는 검색에는 강하지만 합성에는 약한데, 내부에 [논쟁점](./contention)이라는 객체(object)가 없기 때문이다. [변증법적 그래프](./dialectical-graph)(Dialectical Graph)에서는 논쟁점이 일급(first-class)이므로, 시스템이 비양립성(incompatibility)을 그 원인으로 분해할 수 있다: 정의 차이, 표본추출(sampling) 차이, 방법(method) 차이, 범위(scope) 차이, 또는 시간에 의해 유발되는 [비정상성](./nonstationarity)(nonstationarity).

따라서 해결(resolution)은 한 문장이 아니다. 그것은 가지를 치는 지도(branched map)다. 같은 용어가 서로 다른 정의 하에서 다른 결론을 낳는다면, 시스템은 이를 결론의 모순으로 취급하기 전에 정의 층(layer)에서의 분기를 먼저 기록한다. [이슈 노드](./dialectical-graph-nodes)(Issue nodes)는 무엇이 무엇과 충돌하는지를 묶어 보여 주고, 그 이슈가 어떤 조건에서 해결될 수 있는지를 기록한다.

목표는 모순들의 지도와 명시적인 해결 조건의 집합이다. 그래야 이후 작업이 지식을 ‘재작성’이 아니라 ‘재배열’로 업데이트할 수 있다. 이것이 [Coscientist](./coscientist)의 숙고 AI(contemplation AI)가 문서들을 충돌시키는 데 초점을 두는 이유다: 이슈 클러스터(issue clusters), 정제된 조건(refined conditions), 구조화된 반박(structured rebuttals), 그리고 비교를 위한 명시적 좌표계(explicit coordinate systems)를 만들어 내기 위해서다.
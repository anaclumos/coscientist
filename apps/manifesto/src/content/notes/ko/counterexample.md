---
title: 반례
description: 주장을 깨거나 범위를 좁히는 사례
sourceLocale: en
sourceHash: 6a23b6dcab90
translatedAt: 2026-01-14
---

반례는 [주장](./claim)의 예측을 위반하는 사례로, [범위](./scope)를 유지한 채로는
더 이상 성립하지 않게 만들어 주장을 거부하거나 범위를 좁히도록 강제한다. 이는
[공격](./attack)의 특정한 유형이다. 즉, 그 주장이 일반적으로 틀렸다는 논증이
아니라, 특정한 경우에서 실패한다는 증거다.

반례는 구체적이기 때문에 인식론적으로 강력하다. 잘 문서화된 반례 하나는 많은
확인 사례를 능가할 수 있으며, 특히 주장이 보편 명제로 제시되었을 때 그렇다.
그래서 [반박 우선 탐색](./rebuttal-first-search)과
[반례 우선 탐색](./counterexample-first-search)은 반례를 초기에 찾는 것을
우선시한다.

[변증법적 그래프](./dialectical-graph)에서 반례는 `attacks` 엣지를 통해 주장과
연결된 노드다. 반례는 자체적인 [증거 구간](./evidence-span), [범위](./scope),
[출처](./source)를 가지므로, 공격 자체도 검토될 수 있다.

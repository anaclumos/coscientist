---
title: ドリフト現象
description: 知識システムにおける時間駆動の変化
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

ドリフト現象とは、知識システムが時間の経過とともに（多くの場合は見えない形で）変化し、その結果として、一見すると矛盾のように見えるが実際には時間的な不一致（temporal
mismatch）に起因するエラーを引き起こすことがある、という現象です。

## [意味ドリフト](./semantic-drift)

- [定義ドリフト](./definition-drift)
  — 用語の意味が時間やコミュニティをまたいで変化すること
- [意味の喪失](./meaning-loss)
  — 用語がもはや適用できなくなり、主張が陳腐化してしまうこと

## [環境ドリフト](./environmental-drift)

- [非定常性](./nonstationarity)
  — データを生成する基礎過程が時間とともに変化すること

## [システムドリフト](./system-drift)

- [モデル崩壊](./model-collapse) — AI生成データで学習することによる劣化
- [修正 vs ドリフト](./correction-vs-drift)
  — エラーを修正するコストが、放置して伝播させるコストを上回るときに何が起きるか

## 防御

[弁証法グラフ](./dialectical-graph)は、[定義](./definition-drift)と[主張](./claim)を分離し、主張がいつ・どこで適用される意図だったのかを記録することで、ドリフトを明示的に追跡します。これにより、時間的な不一致による偽の矛盾を防ぎます。

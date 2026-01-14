---
title: 漂移現象
description: 知識系統隨時間驅動的變化
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

漂移現象是指知識系統隨時間改變的各種方式，往往不易察覺，因而導致看起來像是矛盾的錯誤，但其實是時間不一致（temporal
mismatch）所造成的。

## [語義漂移](./semantic-drift)

- [定義漂移](./definition-drift) — 當一個術語的意義隨時間或社群而改變
- [意義流失](./meaning-loss) — 當主張因其術語不再適用而變得過時

## [環境漂移](./environmental-drift)

- [非平穩性](./nonstationarity) — 當產生資料的底層過程隨時間改變

## [系統漂移](./system-drift)

- [模型崩塌](./model-collapse) — 由於以 AI 生成資料訓練而造成的劣化
- [修正 vs 漂移](./correction-vs-drift)
  — 當修正錯誤的成本高於任其傳播時，會發生什麼

## 防禦

[辯證圖](./dialectical-graph)
透過將[定義](./definition-drift)與[主張](./claim)分離，並記錄主張原本意圖適用的時間與範圍，來明確追蹤漂移。這可避免因時間不一致而產生的偽矛盾。

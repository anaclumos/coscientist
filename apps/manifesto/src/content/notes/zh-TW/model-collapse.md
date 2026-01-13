---
title: 模型崩塌
description: 以模型自身生成的資料訓練時，模型品質的退化
---

模型崩塌（Model collapse）是指當模型以愈來愈多的 AI 生成資料進行訓練時，可能發生的一種退化現象。隨著時間推移，輸出分佈會變得更狹窄，罕見的模態（modes）會消失，而小錯誤可能被放大，因為訓練訊號被模型自身產生的人工痕跡（artifacts）所污染。

它與更廣泛的認識論壓力（epistemic pressure）——[AI 廢料](./ai-slop)——有關，也與系統層級的失效模式（failure modes）相關，例如 [百科全書熔毀](./encyclopedia-meltdown)，在那種情況下，自我指涉的文字會被當作事實基準（ground truth）。
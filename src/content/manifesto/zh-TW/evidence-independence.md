---
title: 證據獨立性
description: 共享訓練偏誤所造成的同意並非真正共識的原則
sourceLocale: en
sourceHash: 56c73ee944eb
translatedAt: 2026-01-14
---

證據獨立性（Evidence
independence）是指：如果多個 AI 模型之間的表面一致性源自共享的訓練資料，而非彼此獨立的證據，那麼這種一致並不構成真正的共識。以重疊語料訓練的模型可能會收斂到相同的錯誤，使得「共識」成為偏誤的反映，而非真相。

這是 [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol)
的一項已知限制。該協定將模型分歧視為警訊，但一致性只能提供薄弱的保證，因為這些模型並非獨立的觀察者。

真正的[驗證](./verification)需要將主張追溯到訓練分佈之外、彼此獨立的[來源](./source)與[證據片段](./evidence-span)。[操作員](./operator)必須對 AI 的一致結論保持懷疑，並針對高風險主張尋求外部確認。

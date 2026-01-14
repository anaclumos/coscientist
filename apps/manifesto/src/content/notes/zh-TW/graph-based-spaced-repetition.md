---
title: 基於圖的間隔重複
description: 使用主張年齡或反駁年齡來觸發重新驗證
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

基於圖的間隔重複將[間隔重複](./spaced-repetition)原則應用於知識維護：那些近期未被驗證的[主張](./claim)，或其支持證據長時間未受到挑戰的主張，會被浮現出來以供重新檢視。

其洞見在於：知識如同記憶，若缺乏主動投入便會衰退。三年前被驗證過的主張，若世界已改變（[非平穩性](./nonstationarity)）、定義已偏移（[定義漂移](./definition-drift)），或出現新的[反例](./counterexample)，就可能不再成立。

在[辯證圖](./dialectical-graph)中，這可透過追蹤每個主張及其支持路徑的最後驗證時間戳來實作。[操作員](./operator)會依排程被提示重新驗證主張：對穩健的主張延長間隔，對具爭議的主張縮短間隔。

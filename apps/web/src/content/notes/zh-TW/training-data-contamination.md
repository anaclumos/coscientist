---
title: 訓練資料污染
description: AI 生成內容汙染用於訓練未來模型的語料庫
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

當 AI 生成的文字進入網路、被抓取進訓練語料庫，並形塑下一代模型時，就會發生訓練資料污染。其結果是一個回饋迴圈：在前代輸出上訓練的模型會繼承其偏誤、放大其錯誤，並失去那個使原始模型有用的、獨立的人類訊號。

這不同於基準測試污染（測試資料外洩進訓練集），儘管兩者都共享「污染」一詞。訓練資料污染關注的是底層語料庫的來源（provenance）：一旦規模化的 [AI slop](./ai-slop) 混入人類撰寫的文字之中，要區分它們就會變得昂貴或不可能。2022 年之後的網路抓取資料愈來愈可疑。

其後果會層層疊加。[Model collapse](./model-collapse) 描述模型在合成資料上訓練時的品質退化：分佈變窄、罕見模式消失，輸出逐漸收斂到同質化的平均值。[Encyclopedia Meltdown](./encyclopedia-meltdown) 描述當 AI 輸出被引用為來源時造成的知識系統失靈，進而形成循環式權威。訓練資料污染是兩者的上游成因。

與 [low-background steel](./low-background-steel) 的類比能釐清這個問題。核試驗汙染了所有 1945 年之後的鋼材；LLM 的普及汙染了所有 2020 年之後的網路文本。兩起污染事件都是不可逆的，都催生了對 [pre-contamination resources](./pre-contamination-resource) 的需求，也都意味著：要推進這項技術，所需材料必須是在技術出現之前生產的。

解決方案包括 [provenance](./provenance) 驗證、以時間戳記（timestamp）為門檻的封存檔案，以及偏好具有人類作者身分清晰來源鏈之資料策展實務。MIT Data Provenance Initiative 與類似的努力旨在提升訓練資料來源的透明度——若未來模型要避免在自己的倒影上訓練，這是必要的一步。

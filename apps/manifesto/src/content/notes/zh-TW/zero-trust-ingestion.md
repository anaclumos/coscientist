---
title: 零信任攝取
description: 在接受主張之前要求明確溯源的協定
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

零信任攝取是一種協定，預設將傳入資訊視為尚未驗證。每一則[主張](./claim)都必須攜帶明確的[溯源](./provenance)，並在獲得知識系統中的權威性之前通過[驗證](./verification)。

這個名稱借用自零信任安全（zero-trust
security）：在被證明之前，假設沒有任何東西是安全的。實務上，這表示新的主張會以
`tentative`（暫定）狀態進入，必須能追溯到[來源](./source)與[證據片段](./evidence-span)，並且在被視為既定之前，應先接受[反駁優先搜尋](./rebuttal-first-search)的檢視。

零信任攝取是對抗[AI slop](./ai-slop)與[百科全書融毀](./encyclopedia-meltdown)的一種防禦。當環境充斥著看似合理卻未經驗證的內容時，唯一安全的姿態，就是要求其來源證明，並在被接受之前能經得起質疑。

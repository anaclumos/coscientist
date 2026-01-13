---
title: 百科熔毀
description: 當 AI 在缺乏人類介入下主動接管時發生的知識崩塌現象
---

百科熔毀（Encyclopedia Meltdown）是一種「知識崩塌」的失敗模式：當寫作的主動權與控制權在沒有 [Galarch](./galarch) 有意識介入的情況下轉移給 AI 時，它就會開始發生。這個術語源自 [Sunghyun Cho](./sunghyun-cho) 的一篇文章。

熔毀通常由三個相互耦合的迴圈所引發。第一，生成–引用迴圈：模型輸出被回收進語料庫，之後又被引用，彷彿它們是外部事實。第二，連結–權威迴圈：內部連結不再作為驗證路徑，而變成信任徽章，於是連結密度取代了準確性。第三，責任–無代理人迴圈：當不清楚誰基於什麼理由主張了什麼時，糾錯成本變得高昂，系統便會穩定在一種「大致維持」的錯誤穩態上。

其結果不只是「更多錯誤」。寫作會失去意義，因為不再存在可靠的責任鏈；幻覺（hallucinations）可能自我強化；矛盾大量滋生；而連結會把污染重新包裝成權威。一旦「它一定是對的，因為百科全書連到它」這種態度成形，人類的思考就會從驗證退化為單純的背書。

預防要從第一原則開始：知識的主權必須仍掌握在 [Galarch](./galarch) 手中。在 [Coscientist](./coscientist) 中，這體現在一個 [認識論協定層](./epistemic-protocol-layer)（包含 [反駁優先搜尋](./rebuttal-first-search) 與保留 [責任鏈](./responsibility-line)）、一個 [多 AI 共識協定](./multi-ai-consensus-protocol)，以及一個將真理與敘事分離的 [辯證圖](./dialectical-graph)。

參考： https://cho.sh/r/C36398。
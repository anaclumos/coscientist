---
title: "Token ≠ 知識"
description: 一場關於認知外骨骼的個人追尋
sourceLocale: en
sourceHash: adfef3bcf465
translatedAt: 2026-01-14
---

我，[Sunghyun Cho](./sunghyun-cho)，從小就對百科全書懷有敬畏，以及對「單一權威知識庫」這個概念深信不疑。童年時，我埋首於
_Encyclopedia
Galactica_，想像一個世界：我所有的專案與研究都能存在於一個通用的參考系統之中。後來我讀到了
[Vannevar Bush](./vannevar-bush) 於 1945 年發表的文章
[誠如所思](./as-we-may-think)，其中描述了
[Memex](./memex)：一種讓個人儲存紀錄，並透過聯想式軌跡（associative
trails）加以取回的檔案庫。那個願景對我而言，就像是一副認知外骨骼。

當我在 21 世紀開始自己的職涯時，網際網路已成為某種粗略的全球 Memex。可是仍少了某個關鍵：它保存了集體紀錄，卻未能捕捉個體的心智——包含個人脈絡、持續演化的洞見，以及活的想法。我試過
[第二大腦](./second-brain) 工具與 [數位花園](./digital-garden)
實踐，卻只覺得它們太過手工、也太脆弱。我想要一個外置化的
[數位大腦](./digital-brain)，能以最小摩擦自行成長與適應。

這份領悟啟動了
[醛計劃](./project-aldehyde)：我嘗試打造一個用於個人的、超越 Memex 的系統。多年的迭代最終凝結成我在 2022 年 5 月的文章
[創建新一代數位大腦](./creating-next-gen-digital-brains)。文中我主張：摩擦是個人知識工作流的敵人——管理花園的最佳方式不是不斷修剪，而是培養一座能自我組織的
[digital jungle](./digital-jungle)。你應該能把原始知識丟進去，讓系統自行整理、連結，並在日後重新浮現。

到了 2022 年中，我用從 Obsidian 到網頁的靜態網站管線實作了一個原型，並將其命名為
[Extracranial](./extracranial)。它是一個個人數位大腦：能自動索引內容、建議反向連結（backlinks）、允許舊文章在未標記為 evergreen（常青）時逐漸衰退，並能以雙語運作，跨越
[跨越語言圈](./across-the-sprachraums)。它讓我不必微觀管理連結，而能把注意力放回寫作與思考。

然而，當我建立這個個人 wiki 時，一個更大的問題逐漸浮現：就算有一個完美的個人 Memex，也仍不足以支撐知識——如果更廣泛的認識論環境（epistemic
environment）已被破壞的話。隨著生成式 AI 變得無所不在，問題的重心也從「我該如何儲存知識？」轉移到「當 AI 能用看似合理的文字淹沒系統時，我們要如何避免驗證機制崩壞？」

## 從數位大腦到協定

傳統媒體強制線性結構；但實務上的知識是網路狀的。「次世代數位大腦」正是我對這個落差的回應。其原則很直接：

- 無摩擦輸入 —— 捕捉想法而不強迫分類法（taxonomy）
- 自動化組織 —— 以演算法推斷連結
- 動態演化 —— 讓知識衰退或維持常青
- 多模態內容 —— 圖表、示範（demos）、互動媒體
- 無縫來源 —— 把筆記連到論文、程式碼、資料集與參考資料

手動連結仍能精煉理解，但它應該是可選的；繁重的工作應由系統承擔。

到了 2023 年，我開始面對超越個人筆記的問題。AI 生成內容威脅的，是「驗證」本身。我把這種崩潰情境稱為
[百科全書崩潰](./encyclopedia-meltdown)：當 AI 主動開始撰寫時，[責任線](./responsibility-line)
會消失，而錯誤會透過連結自我放大。

對策是一個
[epistemic protocol layer](./epistemic-protocol-layer)（認識論協定層）：知識系統的憲法層。其核心承諾包括主權（知識權威仍由人類
[操作員](./operator)
掌握）、可追溯性（每個主張都保留責任線）、以及「反駁優先」驗證（先用
[反駁優先搜尋](./rebuttal-first-search)
尋找反證，再決定是否接受）。這一層也透過強制明確的來源脈絡（provenance）與零信任（zero-trust）匯入，來應對如
[模型崩潰](./model-collapse) 與 [AI slop](./ai-slop) 洪流等壓力。

## ScienceOps 與機構尺度

個人知識基礎設施解決的是便利性，不是機構尺度。下一個躍遷是
[ScienceOps](./scienceops)：把軟體維運（software-operations）的紀律應用到科學研究——透過可重現的實驗、自動化與快速迭代，同時引入
[natural science engineer](./natural-science-engineer)（自然科學工程師）的角色。當實驗變成管線而非一次性作業時，假說與驗證之間的迴圈就能大幅縮短。

更宏大的目標是打造一個「科學家的 GitHub」：把實驗當作程式碼——可版本化、可重複、可稽核。這樣的運作情境，正需要像
[共科學家](./coscientist) 這樣的認知引擎。

## Coscientist：架構、能動性與藍圖

[共科學家](./coscientist)
是將這些脈絡綜合起來的系統。它是一種多代理（multi-agent）的 [LLM](./llm)
架構，設計目標是成為研究協作者，而不是單一的「答案引擎」。其內部迴圈把提案、批判、排序與精煉分離，並以一個後設審查（meta-review）層檢查一致性、可追溯性與不確定性。

在知識層，它維護的是一個
[辯證圖譜](./dialectical-graph)（辯證圖），儲存的是主張與關係，而非原始文字。敘事輸出被視為推論層的投影，因此每一句話都能回溯到來源、證據片段（evidence
spans）與明確關係。這種分離避免了傳統生成常見的「流暢但不可驗證」失敗模式。

傳統 AI 安全往往把問題框定為對齊（alignment）。而我強調的是
[cognitive agency preservation](./cognitive-agency-preservation)（認知能動性保存）：AI 應該強化人類判斷，而不是取代它。落到實務上，就是讓使用者保持在驗證者的位置：展示推導過程、揭示不確定性、呈現替代假說，並把「尋找反駁」設為預設行為。

Coscientist 被定位為一套新認識論基礎設施的藍圖：無摩擦但保有主權、快速但可問責、強大但不侵蝕能動性。它針對三種失敗模式：機構性的腦腐（透過交叉引用與對抗式審查緩解）、驗證崩壞（透過可追溯性與自動化反駁搜尋緩解）、以及能動性流失（透過透明性與人類否決權緩解）。

長期願景是一個聯邦式（federated）的 Coscientist 節點網路，能在個人、組織與公共尺度交換已驗證的知識，同時保留在地（local）主權。如果你想要一條閱讀路徑，可以從
[創建新一代數位大腦](./creating-next-gen-digital-brains)（個人工具）開始，接著讀
[百科全書崩潰](./encyclopedia-meltdown) 與
[epistemic protocol layer](./epistemic-protocol-layer)（失敗模式與防禦），最後讀
[辯證圖譜](./dialectical-graph) 與
[knowledge synthesis](./knowledge-synthesis)（架構）。

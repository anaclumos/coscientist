---
title: "輸出 Token ≠ 知識"
description: Coscientist 系統的宣言與個人敘事
---

## 一場追尋認知外骨骼的個人探索

我，[Sunghyun Cho](./sunghyun-cho)，從小就對百科全書，以及「存在一個單一且權威的知識儲存庫」這個想法懷抱敬意。孩提時，我沉浸在 _Encyclopedia Galactica_ 之中，想像一個世界：我所有的專案與研究都能安放在某個普世參照系裡。後來我讀到 Vannevar Bush 於 1945 年的文章 [As We May Think](./as-we-may-think)，其中描述了 [Memex](./memex)：一種檔案庫，讓個人能儲存記錄，並透過聯想式軌跡（associative trails）來取回。那個願景對我而言，就像是一具認知外骨骼。

當我在 21 世紀開始自己的職涯時，網際網路已成為某種粗略的全球 Memex。然而仍有某樣東西缺席：它保存了集體的記錄，卻沒能捕捉個人的心智——包含個人脈絡、演化中的洞見，以及仍在生長的想法。我嘗試過各種 [second brain](./second-brain) 工具與 [digital garden](./digital-garden) 實作，最後卻發現它們過於手動、也太脆弱。我想要的是一個外部化的 [digital brain](./digital-brain)，能以最小摩擦持續生長與適應。

這個體悟啟動了 [Project Aldehyde](./project-aldehyde)——我試圖為個人用途打造一個 Memex 的超集。多年迭代後，我在 2022 年 5 月完成文章 [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains)，主張「摩擦」是個人知識工作流的敵人：管理花園的最佳方式不是持續修剪，而是培育一座能自我組織的 [digital jungle](./digital-jungle)。你應該能把原始知識丟進去，然後讓系統自行整理、連結、並在適當時機把它重新浮現。

到了 2022 年中，我以 Obsidian 到網頁的靜態站點管線實作了一個原型，並命名為 [Extracranial](./extracranial)。那是一個個人數位大腦：能自動建立索引、建議反向連結（backlinks），並讓舊文章自然衰退（decay），除非被標記為 evergreen（常青內容）。它讓我免於微觀管理連結，得以把注意力放回寫作與思考。

然而，當我建構那座個人 wiki 時，一個更大的問題逐漸浮現：即使完美的個人 Memex 也不夠，若更廣泛的認知／知識論環境（epistemic environment）已被破壞。當生成式 AI 變得無所不在時，問題的核心從「我要如何儲存知識？」轉移到「當 AI 能用看似合理的文字淹沒系統時，我們要如何避免驗證機制崩潰？」

## 從數位大腦到協定

傳統媒介強制線性結構；但實作中的知識是一張網路。「下一代數位大腦」正是我對這個落差的回應。它的原則很直接：無摩擦輸入（捕捉想法而不被迫分類）、自動化組織（以演算法推斷連結）、動態演化（讓知識衰退或保持常青）、多模態內容（圖表、示範、互動媒體）、以及無縫的來源銜接（將筆記連到論文、程式碼、資料集與參考資料）。手動連結仍能精煉理解，但它應該是可選項；重工應由系統承擔。

到了 2023 年，我開始面對超越個人筆記的問題。AI 生成內容威脅的已是「驗證」本身。我把那種崩潰情境稱為 [Encyclopedia Meltdown](./encyclopedia-meltdown)：當 AI 主動「負責撰寫」時，[responsibility line](./responsibility-line)（責任線）會消失，錯誤會透過連結自我放大。

對策是一個 [epistemic protocol layer](./epistemic-protocol-layer)（認知／知識論協定層）：為知識系統設立的憲政層。它的核心承諾是主權（知識權威仍屬於人類 [Galarch](./galarch)）、可追溯性（每個主張都保留責任線）、以及「反駁優先」的驗證（在接受之前使用 [rebuttal-first search](./rebuttal-first-search) 先尋找反證）。這一層也藉由要求明確溯源（provenance）與零信任（zero-trust）攝取，來應對 [model collapse](./model-collapse) 與大量 [AI slop](./ai-slop) 的洪流壓力。

## ScienceOps 與機構尺度

個人知識基礎建設解決的是便利性，不是機構尺度。下一個躍進是 [ScienceOps](./scienceops)：把軟體營運（operations）的紀律帶進科學研究——透過可重現實驗、自動化、快速迭代，同時引入 [natural science engineer](./natural-science-engineer)（自然科學工程師）的角色。當實驗變成管線（pipelines）而不是一次性的任務時，假說與驗證之間的迴圈就能大幅縮短。

更大的目標是一個「科學家的 GitHub」：把實驗當成程式碼——可版本化、可重複、可稽核。這正是需要像 [Coscientist](./coscientist) 這種認知引擎的運作情境。

## Coscientist：架構、能動性與藍圖

[Coscientist](./coscientist) 是將這些脈絡匯流的系統。它是一種多代理（multi-agent）的 LLM 架構，目標是作為研究協作者，而不是單一的答案引擎。它的內部迴圈將提案、批判、排序與精煉分離，並設有一個元審查（meta-review）層來檢查一致性、可追溯性與不確定性。

在知識層，它維護一個 [Dialectical Graph](./dialectical-graph)（辯證圖），儲存的是主張與關係，而非原始文字。敘事輸出被視為推論層的投影，因此每一句話都能回溯到來源、證據片段（evidence spans）與明確關係。這種分離避免了傳統生成常見的「流暢但不可驗證」失敗模式。

傳統 AI 安全常把問題框成對齊（alignment）。我更強調 [cognitive agency preservation](./cognitive-agency-preservation)（認知能動性保全）：AI 應該強化人類判斷，而不是取代它。實務上，這代表讓使用者維持在驗證者的角色：展示推理過程、浮現不確定性、呈現替代假說，並讓「尋找反駁」成為預設。

Coscientist 的定位，是新型知識論基礎建設的藍圖：無摩擦但具主權、快速但可究責、強大卻不侵蝕能動性。它瞄準三種失敗模式：機構性腦腐（institutional brain rot；以交叉引用與對抗式審查緩解）、驗證崩潰（以可追溯性與自動化反駁搜尋緩解）、以及能動性流失（以透明性與人類否決權緩解）。

長期願景是一個聯邦式（federated）的 Coscientist 節點網路，涵蓋個人、組織與公共尺度；在保留在地主權的同時交換經驗證的知識。若你想循一條閱讀路徑開始，可以先讀 [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains)（個人工具），接著讀 [Encyclopedia Meltdown](./encyclopedia-meltdown) 與 [epistemic protocol layer](./epistemic-protocol-layer)（失敗模式與防禦），最後讀 [Dialectical Graph](./dialectical-graph) 與 [knowledge synthesis](./knowledge-synthesis)（架構）。
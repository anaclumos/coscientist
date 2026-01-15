---
title: 多語言 Memex
description: 一套具備自動翻譯支援、能感知語言的個人知識系統
sourceLocale: en
sourceHash: 7f632fdf73b6
translatedAt: 2026-01-14
---

多語言 Memex 是一套個人知識系統，原生支援多種語言內容，具備自動語言偵測、翻譯，以及跨語言連結能力。它將
[Vannevar Bush](./vannevar-bush) 最初的 [Memex](./memex)
構想延伸到一個知識不再受語言邊界限制的世界，並且與[多語言知識網格（Multilingual Knowledge Mesh）](./multilingual-knowledge-mesh)高度相似。

[Sunghyun Cho](./sunghyun-cho) 的 [Extracranial](./extracranial)
是此概念的一種實作。它包含自動語言偵測、透過 hreflang 標籤進行依地區語系（locale）提供內容，以及允許用一種語言撰寫、再交由翻譯系統在其他語言中完成內容交付的能力。

其架構層面的影響相當重大。介面元素、搜尋與連結關係都必須將語言納入考量：

- 以韓文提出的查詢，應能找到相關內容，不論該內容原本是以韓文撰寫，或是由英文翻譯而來。
- 反向連結（backlinks）應能跨語言運作。
- [責任線](./responsibility-line)
  不僅要追蹤「誰主張了什麼」，還要追蹤是以哪種語言、以及透過哪種翻譯方法表達的。

這也是為什麼 [Extracranial](./extracranial)
會透過 GitHub 納入社群貢獻來精煉翻譯：機器翻譯讓多語言內容成為可能，但要維持[翻譯忠實度](./translation-fidelity)仍需要人工審閱。多語言 Memex 並非已解決的問題，而是自動化系統與人類判斷之間持續協作的成果。

對於 [共科學家](./coscientist)
而言，多語言 Memex 會成為多語言的[辯證圖（Dialectical Graph）](./dialectical-graph)：一種可儲存任何語言的[主張](./claim)、[證據片段（evidence spans）](./evidence-span)與關係的結構，將語言視為中繼資料（metadata），而非根本性的邊界。

## 相關

- [多語言知識網格（Multilingual Knowledge Mesh）](./multilingual-knowledge-mesh)

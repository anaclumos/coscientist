---
title: システム・ドリフト
description: 自己汚染や放置による知識システムの劣化
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

システム・ドリフトは、[ドリフト現象](./drift-phenomena)の一種であり、意味論的変化や環境変化とは独立に、知識システムそのものが時間とともに劣化していく現象を指します。

## 形態

- [モデル崩壊](./model-collapse) — AI生成データでの学習による劣化
- [修正 vs ドリフト](./correction-vs-drift)
  — 誤りを直すコストが、誤りの伝播を放置するコストを上回るとき

## なぜ重要か

システム・ドリフトとは、知識システムが「だいたい維持されている」偽の定常状態のまわりで安定してしまう失敗モードです。修正が高コストなため誤りが残り続け、AI生成コンテンツが学習データを汚染し、システムは徐々にグラウンドトゥルース（ground
truth）との接点を失っていきます。

[百科事典のメルトダウン](./encyclopedia-meltdown)はその極端な形です。AIが主導して書くようになると、[責任ライン](./responsibility-line)が消え、システムは自己参照的な崩壊へとドリフトしていきます。防御策は[エピステミック・プロトコル層](./epistemic-protocol-layer)であり、[トレーサビリティ](./traceability)、[ゼロトラスト・インジェスト](./zero-trust-ingestion)、[反駁優先検索](./rebuttal-first-search)によって、ドリフトよりも修正を安く保つことです。

## 関連

- [ドリフト現象](./drift-phenomena) — 親カテゴリ
- [セマンティック・ドリフト](./semantic-drift) — 意味が変化するとき
- [環境ドリフト](./environmental-drift) — 世界が変化するとき
- [制度的ブレインロット](./institutional-brain-rot) — 組織におけるアナロジー

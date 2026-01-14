---
title: 統合メカニズム
description: 互換性のない情報源を比較可能にするためのパターン
---

統合メカニズム（Synthesis mechanisms）とは、互換性のない情報源を比較可能にし、対立から構造化された出力を生成するために、[コサイエンティスト](./coscientist) が用いるパターンとプロトコルです。

## コアプロセス

- [知識統合](./knowledge-synthesis) — 前提・定義・スコープを整列させ、不一致を明示化する

## 入力パターン

- [ドキュメント衝突](./document-collision) — 情報源同士に相手の主張へ向き合わせる
- [争点化](./contention) — 構造化された対立を第一級オブジェクトとして扱う

## 出力パターン

- [分岐型解決マップ](./branched-resolution-map) — 異なる前提に基づく複数の妥当な結論を示す
- [イシューノード](./issue-node) — 衝突する主張を束ね、焦点を絞って解決する

## 分析ツール

- [非互換性分類体系](./incompatibility-taxonomy) — 情報源がなぜ不一致になるのかを分類する
- [最小矛盾集合](./minimum-contradiction-set) — 対立の中核を見つける
- [最小カット](./minimum-cut) — 矛盾を生み出す構造を切り出す

## 多言語の次元

- [言語横断統合](./cross-linguistic-synthesis) — 複数言語の知識を統合する
- [言語非依存インデクシング](./language-agnostic-indexing) — 特定の言語を超える概念インデックス
- [翻訳によるニュアンス損失](./translation-nuance-loss) — 言語をまたぐ際に失われるものを追跡する

## 対比

- [RAGの限界](./rag-limitations) — 検索（retrieval）だけではなぜ統合できないのか
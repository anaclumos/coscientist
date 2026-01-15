---
title: 検証システム
description: 主張を証拠および反証、ならびに代替説明と照合して確認するための仕組み
sourceLocale: en
sourceHash: 67e81c4c10c1
translatedAt: 2026-01-14
---

検証システムとは、[コサイエンティスト](./coscientist) が [主張](./claim)
を証拠、反証、そして代替説明と照合して確認するために用いる一連の仕組みです。単一のツールではなく、相互に連携したプロトコルと実践の体系です。

## 中核コンポーネント

- [検証](./verification) — 主張を確認するプロセス
- [反証優先探索](./rebuttal-first-search) — 受け入れる前に反証を探す
- [マルチAI合意プロトコル](./multi-ai-consensus-protocol)
  — モデル間の不一致をシグナルとして用いる
- [全会一致要件](./unanimity-requirement)
  — すべてのレビュー担当者が同意した場合にのみ主張を受け入れる
- [責任ライン](./responsibility-line) — 誰が何を断言したかを追跡する
- [反例](./counterexample) — 主張を破る事例
- [ゼロトラスト取り込み](./zero-trust-ingestion)
  — 権威よりも来歴（provenance）を要求する

このシステムは、[修正をドリフトより安くする](./correction-vs-drift)
ことを目指して設計されており、[望ましい困難（desirable difficulty）](./desirable-difficulty-in-verification)
を支えることで、[オペレーター](./operator) が関与し続けられるようにします。

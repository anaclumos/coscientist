---
title: 知識システムのレイヤー
description: Coscientist のアーキテクチャを構成するレイヤー
sourceLocale: en
sourceHash: 954c640b7988
translatedAt: 2026-01-14
---

知識システムのレイヤーとは、[コサイエンティスト](./coscientist)
を構成する明確に分離されたアーキテクチャ要素のことです。これらのレイヤーを分離することで、異なる関心事（concerns）を互いに独立して進化させることができます。

## データレイヤー

- [Evidence Span](./evidence-span) — 生の引用テキストを原文のまま保持したもの
- [Source](./source)
  — 追跡可能性（traceability）のための来歴（provenance）アンカー

## 推論レイヤー

- [Inference Layer](./inference-layer)
  — 主張と関係からなる、生きた進化するネットワーク
- [Claim](./claim)、[Attack](./attack)、[Undercut](./undercut)、およびその他の
  [Argumentative Relations](./argumentative-relations)

## ナラティブレイヤー

- [Narrative Layer](./narrative-layer) — グラフの人間可読な投影
- ドキュメントは「真理の根拠（ground
  truth）」ではなく、タイムスタンプ付きスナップショットとして扱う

## プロトコルレイヤー

- [Epistemic Protocol Layer](./epistemic-protocol-layer)
  — 主張がどのように取り込まれ、権威（authority）を獲得するかに関するルール
- [Knowledge Constitution](./knowledge-constitution) — 知識運用を統治する文書

## 分離原則

- [Triple Separation](./triple-separation)
  — 生テキスト、正規化された主張、関係を区別して保つこと

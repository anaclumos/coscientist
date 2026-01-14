---
title: Provenienz
description: Der Ursprung und die Nachweiskette für Behauptungen und Belege
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

Provenienz ist der Ursprung und die Nachweiskette einer Behauptung oder eines
Belegstücks: wer sie aufgestellt hat, wann, worauf gestützt, und wie sie ihre
aktuelle Form erreicht hat. Ohne Provenienz können Sie Primärquellen nicht von
neu verpackten Zusammenfassungen unterscheiden, und Sie können nicht wissen, ob
scheinbare Übereinstimmung unabhängige Evidenz oder zirkuläres Zitieren
widerspiegelt.

In einem [Dialektischen Graphen](./dialectical-graph) wird Provenienz über
[Quelle](./source)-Knoten, [Evidenzspannen](./evidence-span) und `cites`-Kanten
kodiert, die Zuschreibung explizit machen, statt sie implizit durch Fließtext
entstehen zu lassen. Das verhindert das Problem der Auszugskürzung, das bei
[RAG](./rag-limitations) häufig ist, bei dem das Zitieren Kontext fallen lässt
und die [Verantwortungslinie](./responsibility-line) verschwindet.

Provenienz ist eine Voraussetzung für [Rückverfolgbarkeit](./traceability): Wenn
Sie eine Behauptung nicht bis zu ihrem Ursprung zurückverfolgen können, können
Sie sie nicht korrigieren, wenn sich die Welt verändert.

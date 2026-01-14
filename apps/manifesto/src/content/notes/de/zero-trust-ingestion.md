---
title: Zero-Trust-Ingestion
description:
  Protokoll, das eine explizite Provenienz verlangt, bevor Behauptungen
  akzeptiert werden
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

Zero-Trust-Ingestion ist ein Protokoll, das eingehende Informationen
standardmäßig als unverifiziert behandelt. Jede [Behauptung](./claim) muss eine
explizite [Provenienz](./provenance) mitführen und eine
[Verifizierung](./verification) durchlaufen, bevor sie Autorität im
Wissenssystem erlangt.

Der Name lehnt sich an Zero-Trust-Sicherheit an: Nichts gilt als sicher, bis es
bewiesen ist. In der Praxis bedeutet das: Neue Behauptungen kommen mit dem
Status `tentative` hinein, müssen auf [Quellen](./source) und
[Evidenzspannen](./evidence-span) zurückführbar sein und sollten einer
[Widerlegung-zuerst-Suche](./rebuttal-first-search) ausgesetzt werden, bevor sie
als etabliert gelten.

Zero-Trust-Ingestion ist eine Abwehr gegen [AI Slop](./ai-slop) und
[Enzyklopädie-Zusammenbruch](./encyclopedia-meltdown). Wenn die Umgebung mit
plausiblen, aber unverifizierten Inhalten überflutet ist, ist die einzig sichere
Haltung, einen Herkunftsnachweis zu verlangen und Anfechtungen zu überstehen,
bevor akzeptiert wird.

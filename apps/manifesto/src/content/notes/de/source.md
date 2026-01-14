---
title: Quelle
description: Ein Provenienz-Anker für Behauptungen und Belege
sourceLocale: en
sourceHash: 73116d209a24
translatedAt: 2026-01-14
---

Eine Quelle ist der Ursprungspunkt für einen [Belegabschnitt](./evidence-span)
oder eine [Behauptung](./claim): ein Dokument, Datensatz, Experiment oder eine
Person, aus der die Information stammt. Quellen verankern die
[Provenienz](./provenance) und machen die
[Verantwortungskette](./responsibility-line) nachvollziehbar.

Nicht alle Quellen sind gleich. Eine Primärquelle berichtet über ursprüngliche
Beobachtungen; eine Sekundärquelle fasst zusammen oder interpretiert; eine
Tertiärquelle kompiliert aus Sekundärquellen. Jeder Schritt führt potenziell zu
Abweichungen, und [Kozientist](./coscientist) verfolgt diese Unterschiede über
explizite `cites`-Kanten im [Dialektischen Graphen](./dialectical-graph).

Quellen sind Knoten im Graphen ) mit Metadaten wie Autor, Datum und Kontext.
Wenn eine Behauptung angefochten wird, liefert die Quelle den Ausgangspunkt für
eine erneute Prüfung.

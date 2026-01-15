---
title: Gegenbeispiel
description: Ein Fall, der eine Behauptung widerlegt oder einschränkt
sourceLocale: en
sourceHash: 6a23b6dcab90
translatedAt: 2026-01-14
---

Ein Gegenbeispiel ist ein Fall, der die Vorhersage einer [Behauptung](./claim)
verletzt und so entweder die Zurückweisung oder eine Einschränkung des
[Geltungsbereichs](./scope) erzwingt. Es ist eine besondere Art von
[Angriff](./attack): kein Argument dafür, dass die Behauptung im Allgemeinen
falsch ist, sondern ein Beleg dafür, dass sie in einem bestimmten Einzelfall
scheitert.

Gegenbeispiele sind epistemisch stark, weil sie konkret sind. Ein einziges gut
dokumentiertes Gegenbeispiel kann viele bestätigende Fälle aufwiegen,
insbesondere wenn die Behauptung als universell formuliert war. Deshalb
priorisieren die [Rebuttal-First-Suche](./rebuttal-first-search) und die
[Gegenbeispiel-First-Suche](./counterexample-first-search) das frühe Finden
solcher Fälle.

In einem [Dialektischen Graphen](./dialectical-graph) sind Gegenbeispiele
Knoten, die über eine `attacks`-Kante mit Behauptungen verbunden sind. Sie
tragen ihre eigenen [Evidenzspannen](./evidence-span), ihren
[Geltungsbereich](./scope) und ihre [Quelle](./source), sodass auch der Angriff
selbst geprüft werden kann.

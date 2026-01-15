---
title: Komponenty grafu
description: Typy węzłów i krawędzi, które składają się na graf dialektyczny
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

Komponenty grafu to elementy składowe
[Grafu dialektycznego](./dialectical-graph): [Węzły grafu dialektycznego](./dialectical-graph-nodes), które reprezentują
obiekty epistemiczne, oraz [Krawędzie grafu dialektycznego](./dialectical-graph-edges), które reprezentują [Relacje argumentacyjne](./argumentative-relations) między
nimi.

**Typy węzłów** ):

- [Twierdzenie](./claim) — weryfikowalne tezy
- [Fragment dowodu](./evidence-span) — dokładnie cytowany tekst ze źródeł
- [Zakres](./scope) — warunki stosowalności
- [Założenie](./assumption) — ukryte przesłanki
- [Metoda](./method) — procedury generowania dowodów
- [Źródło](./source) — kotwice pochodzenia
- [Kontrprzykład](./counterexample) — przypadki obalające twierdzenia
- [Węzeł problemu](./issue-node) — pakiety zderzających się twierdzeń

**Typy krawędzi** ):

- [Atak](./attack) — bezpośrednie podważenia prawdziwości
- [Podcięcie](./undercut) — podważenia podstaw
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Kontencja](./contention) — ustrukturyzowane znaczniki konfliktu

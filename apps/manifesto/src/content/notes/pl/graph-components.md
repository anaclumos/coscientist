---
title: Komponenty grafu
description: Typy węzłów i krawędzi składające się na graf dialektyczny
---

Komponenty grafu to elementy składowe [Grafu dialektycznego](./dialectical-graph): typy węzłów, które reprezentują obiekty epistemiczne, oraz typy krawędzi, które reprezentują relacje między nimi.

**Typy węzłów** (zob. [Węzły grafu dialektycznego](./dialectical-graph-nodes)):

- [Twierdzenie](./claim) — weryfikowalne tezy
- [Fragment dowodu](./evidence-span) — dokładnie cytowany tekst ze źródeł
- [Zakres](./scope) — warunki stosowalności
- [Założenie](./assumption) — ukryte przesłanki
- [Metoda](./method) — procedury generowania dowodów
- [Źródło](./source) — kotwice pochodzenia 
- [Kontrprzykład](./counterexample) — przypadki obalające twierdzenia
- [Węzeł problemu](./issue-node) — pakiety zderzających się twierdzeń

**Typy krawędzi** (zob. [Krawędzie grafu dialektycznego](./dialectical-graph-edges)):

- [Atak](./attack) — bezpośrednie podważenia prawdziwości
- [Podcięcie](./undercut) — podważenia podstaw
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Kontencja](./contention) — ustrukturyzowane znaczniki konfliktu

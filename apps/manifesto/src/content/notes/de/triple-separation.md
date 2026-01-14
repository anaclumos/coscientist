---
title: Dreifachtrennung
description:
  Architektonische Regel zur Trennung von Rohtext, normalisierten Aussagen und
  expliziten Relationen
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Die Dreifachtrennung ist die architektonische Regel in einem
[Dialektischen Graphen](./dialectical-graph), die drei Ebenen strikt getrennt
hält: Der Originaltext bleibt als zitierfähige [Evidenzspannen](./evidence-span)
erhalten; [Behauptungen](./claim) werden in
[normalisierte Propositionen](./normalized-proposition) zerlegt; und Relationen
werden als explizite argumentative Bindungen gespeichert ).

Diese Trennung verhindert einen häufigen Fehlermodus in
[RAG](./rag-limitations): die Kürzung von Auszügen. Wenn Text abgerufen und
zusammengefasst wird, ohne die ursprüngliche Formulierung zu bewahren, kann die
Zuschreibung unbemerkt verschwinden. Die Dreifachtrennung stellt sicher, dass du
eine Behauptung immer auf die exakten Worte und die [Quelle](./source)
zurückverfolgen kannst, aus denen sie stammen.

Sie ermöglicht außerdem [Wissenssynthese](./knowledge-synthesis), indem sie die
Struktur abfragbar macht. Du kannst fragen: „Was greift diese Behauptung an?"
oder „Auf welche Definitionen stützt sich das?" — weil diese Relationen
gespeichert und nicht nur impliziert sind.

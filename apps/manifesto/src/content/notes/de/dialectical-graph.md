---
title: Dialektischer Graph
description: "Ein Wissensgraphmodell, das Behauptungen und Beziehungen statt Dokumentinhalte speichert"
sourceLocale: en
sourceHash: 7de42f075323
translatedAt: 2026-01-14
---

Ein dialektischer Graph ist ein Wissensgraph, der argumentative Strukturen
speichert, anstatt Dokumente als undifferenzierten Text zu behandeln. Die
zentrale Einsicht ist einfach: Verwechsle Text nicht mit Wissen. Text ist
Verpackung; Wissen ist die Struktur von Einschränkungen, die es Behauptungen
erlaubt, einander zu stützen, anzugreifen und zu verfeinern. Für Hintergrund
dazu, wie dieser Ansatz über dokumentenzentrierte Systeme hinauswächst, siehe
[Vom Memex zum dialektischen Graphen](./from-memex-to-dialectical-graph).

[Kozientist](./coscientist) erzwingt eine dreifache Trennung: Der Originaltext
bleibt als zitierfähige Evidenzspannen erhalten; Behauptungen werden in
normalisierte Propositionen zerlegt; und Beziehungen werden als explizite
argumentative Bindungen gespeichert. Das ist eine strukturelle Reparatur für
einen häufigen Fehlermodus von [RAG](./rag): das Abschneiden von Auszügen. Die
Evidenzspanne bewahrt den exakten Wortlaut und die Quelle, die Behauptung hält
fest, wer was behauptet hat, und eine `cites`-Kante macht die Zuschreibung
explizit, statt sie durch Fließtext nur implizit anzudeuten.

Der Graph trennt außerdem eine Inferenzschicht von einer Narrativschicht. Ein
Dokument ist keine endgültige Wahrheit; es ist eine Momentaufnahme des Graphen.
Jeder Satz sollte entlang von Behauptung, Geltungsbereich, Annahme, Methode,
Daten, Evidenzspanne und Quelle rückverfolgbar sein. Ohne diese Kette ist ein
Satz nur ein Satz, kein Wissen.

Um als Bremse gegen [Enzyklopädie-Zusammenbruch](./encyclopedia-meltdown) zu
wirken, priorisiert das System Widersprüche und Gegenbeispiele statt Konsens
(siehe [Graph als Meltdown-Abwehr](./graph-as-meltdown-defense)). Wenn eine
Behauptung in den Graphen gelangt, ist die Standardhaltung adversarial: Suche
früh nach Angriffen und Unterminierungen, damit sich die Struktur durch
Widerlegung aktualisiert, statt durch Wiederholung abzudriften. Für konkrete
Knoten- und Beziehungstypen siehe
[Dialektische-Graph-Knoten](./dialectical-graph-nodes) und
[Dialektische-Graph-Kanten](./dialectical-graph-edges), sowie
[Graph-Komponenten](./graph-components).
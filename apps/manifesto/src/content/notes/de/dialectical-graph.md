---
title: Dialektischer Graph
description: Ein Wissensgraph-Modell, das Behauptungen und Relationen statt Dokumentinhalt speichert
---

Ein dialektischer Graph ist ein Wissensgraph, der argumentative Strukturen (Behauptungen, Definitionen, Annahmen, Methoden, Evidenzspannen und die Relationen zwischen ihnen) speichert, statt Dokumente als undifferenzierten Text zu behandeln. Die Kernerkenntnis ist einfach: Verwechsle Text nicht mit Wissen. Text ist Verpackung; Wissen ist die Constraint-Struktur, die es Behauptungen erlaubt, einander zu stützen, anzugreifen und zu verfeinern.

[Coscientist](./coscientist) erzwingt eine dreifache Trennung: Der Originaltext bleibt als zitierfähige Evidenzspannen erhalten; Behauptungen werden in normalisierte Propositionen zerlegt; und Relationen werden als explizite argumentative Bindungen gespeichert. Das ist eine strukturelle Lösung für einen häufigen RAG-Fehlermodus: Exzerpt-Abschneiden. Die Evidenzspanne bewahrt die exakte Formulierung und Quelle, die Behauptung hält fest, wer was behauptet hat, und eine `cites`-Kante macht Zuschreibung explizit, statt sie durch Prosa nur zu implizieren.

Der Graph trennt außerdem eine Inferenzschicht (das sich entwickelnde Behauptungsnetzwerk) von einer Narrativschicht (eine zeitgestempelte Projektion, die sich zum Lesen eignet). Ein Dokument ist keine endgültige Wahrheit; es ist eine Momentaufnahme des Graphen. Jeder Satz sollte entlang von Behauptung, Geltungsbereich, Annahme, Methode, Daten, Evidenzspanne und Quelle zurückverfolgt werden können. Ohne diese Kette ist ein Satz nur ein Satz, kein Wissen.

Um als Bremse gegen [Encyclopedia Meltdown](./encyclopedia-meltdown) zu wirken, priorisiert das System Widersprüche und Gegenbeispiele statt Konsens. Wenn eine Behauptung in den Graphen gelangt, ist die Standardhaltung adversarial (konfrontativ): frühzeitig Angriffe und Unterminierungen (undercuts) suchen, damit sich die Struktur durch Widerlegung aktualisiert, statt durch Wiederholung abzudriften. Für konkrete Knoten- und Relationstypen siehe [Dialektische-Graph-Knoten](./dialectical-graph-nodes) und [Dialektische-Graph-Kanten](./dialectical-graph-edges).
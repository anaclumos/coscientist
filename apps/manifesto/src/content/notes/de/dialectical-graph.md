---
title: Dialektischer Graph
description: Ein Wissensgraphmodell, das Behauptungen und Beziehungen statt Dokumentinhalte speichert
---

Ein dialektischer Graph ist ein Wissensgraph, der argumentative Strukturen (Behauptungen, Definitionen, Annahmen, Methoden, Evidenzspannen und die Beziehungen zwischen ihnen) speichert, anstatt Dokumente als undifferenzierten Text zu behandeln. Die zentrale Einsicht ist einfach: Verwechsle Text nicht mit Wissen. Text ist Verpackung; Wissen ist die Struktur von Einschränkungen, die es Behauptungen erlaubt, einander zu stützen, anzugreifen und zu verfeinern.

[Kozientist](./coscientist) erzwingt eine dreifache Trennung: Der Originaltext bleibt als zitierfähige Evidenzspannen erhalten; Behauptungen werden in normalisierte Propositionen zerlegt; und Beziehungen werden als explizite argumentative Bindungen gespeichert. Das ist eine strukturelle Reparatur für einen häufigen Fehlermodus von [RAG](./rag): das Abschneiden von Auszügen. Die Evidenzspanne bewahrt den exakten Wortlaut und die Quelle, die Behauptung hält fest, wer was behauptet hat, und eine `cites`-Kante macht die Zuschreibung explizit, statt sie durch Fließtext nur implizit anzudeuten.

Der Graph trennt außerdem eine Inferenzschicht (das sich entwickelnde Behauptungsnetzwerk) von einer Narrativschicht (eine zeitgestempelte Projektion, die sich zum Lesen eignet). Ein Dokument ist keine endgültige Wahrheit; es ist eine Momentaufnahme des Graphen. Jeder Satz sollte entlang von Behauptung, Geltungsbereich, Annahme, Methode, Daten, Evidenzspanne und Quelle rückverfolgbar sein. Ohne diese Kette ist ein Satz nur ein Satz, kein Wissen.

Um als Bremse gegen [Enzyklopädie-Zusammenbruch](./encyclopedia-meltdown) zu wirken, priorisiert das System Widersprüche und Gegenbeispiele statt Konsens. Wenn eine Behauptung in den Graphen gelangt, ist die Standardhaltung adversarial: Suche früh nach Angriffen und Unterminierungen, damit sich die Struktur durch Widerlegung aktualisiert, statt durch Wiederholung abzudriften. Für konkrete Knoten- und Beziehungstypen siehe [Dialektische-Graph-Knoten](./dialectical-graph-nodes) und [Dialektische-Graph-Kanten](./dialectical-graph-edges).
---
title: RAG-Einschränkungen
description:
  Warum Standard Retrieval-Augmented Generation keine echte Entdeckung
  hervorbringen kann
sourceLocale: en
sourceHash: 6ccba3a6818d
translatedAt: 2026-01-14
---

[RAG](./rag) verbessert die Faktentreue, indem es relevante Dokumente abruft,
aber Standard-RAG hat weiterhin strukturelle Einschränkungen für die
Wissensproduktion. Es ruft Textausschnitte ab und erzeugt flüssige Prosa; es
repräsentiert jedoch nicht die Objekte, die man für Entdeckung braucht:
Behauptungen, Gegenbehauptungen, Definitionen, Methoden und die Beziehungen, die
sie miteinander verbinden.

Ein Fehlermodus ist quantitative Verzerrung. Wenn viele Quellen eine Behauptung
wiederholen und nur wenige entscheidende Widerlegungen oder Gegenbeispiele
enthalten, neigt ähnlichkeitsbasiertes Retrieval dazu, die Mehrheit zu
verstärken und die Wendepunkte zu glätten. Ein einzelnes Gegenbeispiel oder eine
Definitionsrevision kann mehr epistemisches Gewicht tragen als hundert
Wiederholungen, ist aber nicht notwendigerweise „ähnlicher".

Eine weitere Einschränkung ist das Fehlen expliziter Relationen. RAG kann
Auszüge aus Studie A und Studie B abrufen, aber es kann in der Regel nicht
darstellen, dass B A widerlegt, seine Methode untergräbt oder seinen
Geltungsbereich einschränkt; es platziert lediglich Schnipsel nebeneinander.
Damit wird die Qualität der Begründungen durch die Menge an Text ersetzt.

Schließlich ist die Provenienz unter Kürzung brüchig. Wenn in einem Auszug die
Zuschreibung wegfällt („B berichtet, dass A behauptete…") und nur die
Schlussfolgerung erhalten bleibt („X funktioniert"), kann das Modell
stillschweigend die Verantwortungszuordnung umschreiben. Zitate werden zu
Bauchgefühl, und „wer was behauptet hat" wird schwer rekonstruierbar.

Deshalb hat Standard-RAG Schwierigkeiten mit Wissensaktualisierung und Synthese
in Gegenwart realer [Kontention](./contention). Eine Alternative ist, den Fokus
von „wie ähnlich ist es" auf „welche Relation ist es" zu verlagern, wie bei
einem [Dialektischen Graphen](./dialectical-graph), der Behauptungen und
Relationstypen speichert und Widersprüche sowie Gegenbeispiele statt Konsens
priorisiert.

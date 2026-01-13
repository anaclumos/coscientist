---
title: Grenzen von RAG
description: Warum Standard-Retrieval-augmented Generation keine echte Entdeckung hervorbringen kann
---

Retrieval-augmented Generation (RAG) verbessert die Faktentreue, indem sie relevante Dokumente abruft, aber Standard-RAG hat weiterhin strukturelle Grenzen für die Wissensproduktion. Es ruft Textausschnitte ab und erzeugt flüssige Prosa; es repräsentiert nicht die Objekte, die man für Entdeckung braucht: Behauptungen, Gegenbehauptungen, Definitionen, Methoden und die Beziehungen, die sie miteinander verbinden.

Ein Fehlermodus ist quantitative Verzerrung. Wenn viele Quellen eine Behauptung wiederholen und nur wenige entscheidende Widerlegungen oder Gegenbeispiele enthalten, neigt ähnlichkeitsbasiertes Retrieval dazu, die Mehrheit zu verstärken und die Wendepunkte glattzubügeln. Ein einziges Gegenbeispiel oder eine Definitionsrevision kann mehr epistemisches Gewicht tragen als hundert Wiederholungen, ist aber nicht notwendigerweise „ähnlicher“.

Eine weitere Einschränkung ist das Fehlen expliziter Relationen. RAG kann Auszüge aus Studie A und Studie B abrufen, aber es kann in der Regel nicht darstellen, dass B A widerlegt, seine Methode untergräbt oder seinen Geltungsbereich einschränkt; es platziert nur Schnipsel nebeneinander. Das ersetzt die Qualität der Begründungen durch die Menge an Text.

Schließlich ist die Provenienz unter Kürzung fragil. Wenn ein Auszug die Zuschreibung fallen lässt („B berichtet, dass A behauptete …“) und nur die Schlussfolgerung („X funktioniert“) beibehält, kann das Modell stillschweigend die Verantwortungszuordnung umschreiben. Zitate werden zu Stimmungen, und „wer was behauptet hat“ wird schwer zu rekonstruieren.

Deshalb tut sich Standard-RAG schwer mit Wissensaktualisierung und Synthese in Gegenwart realer [Kontroverse](./contention). Eine Alternative ist, den Fokus von „wie ähnlich ist es“ auf „in welcher Relation steht es“ zu verlagern, wie in einem [Dialektischen Graphen](./dialectical-graph), der Behauptungen und Relationstypen speichert und Widersprüche sowie Gegenbeispiele statt Konsens priorisiert.
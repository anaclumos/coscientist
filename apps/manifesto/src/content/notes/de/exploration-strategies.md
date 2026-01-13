---
title: Explorationsstrategien
description: Graphdurchlauf-Strategien für kontinuierliche Wissensentdeckung
---

[Coscientist](./coscientist) braucht eine Engine, die mehr tut als nur abzurufen; sie sucht kontinuierlich nach neuen Ansätzen, indem sie aktiv Widersprüche, Randbedingungen und Methodenabhängigkeit im [Dialektischen Graphen](./dialectical-graph) sichtbar macht.

Eine Strategie ist die Gegenbeispiel-zuerst-Suche: Popularität wird weniger als Beleg für Qualität behandelt, sondern eher als Hinweis auf Risiko. Je weiter eine Behauptung wiederholt wird, desto wertvoller wird es, Gegenbeispiele und Randbedingungen zu sammeln, weil die Kontamination durch populäre Behauptungen in [Encyclopedia Meltdown](./encyclopedia-meltdown) einen größeren Explosionsradius hat.

Eine weitere Strategie ist die Widerspruchs-Minimum-Cut-Suche. Wenn Behauptungscluster in Konflikt geraten, sucht das System nach der minimalen Menge an Prämissen und Relationen, die den Konflikt erzeugen, und richtet dann die Kontemplation auf diese Struktur aus. Menschliche Zeit wird in das [Minimum-Widerspruchs-Set](./minimum-contradiction-set) investiert, während KI die breite Suche, Kandidatengenerierung und die [Minimum-Cut](./minimum-cut)-Berechnung übernimmt.

Erkennung von Definitionsdrift behandelt Bedeutung als ein bewegliches Objekt. Wenn sich die Definition eines Begriffs über Zeit oder Gemeinschaften hinweg verschiebt, hält der Graph die Änderung explizit fest (siehe [Definitionsdrift](./definition-drift)), statt von einem geteilten Konzept auszugehen – was einem häufigen Fehlermodus von [RAG](./rag-limitations) entgegenwirkt.

Überprüfung der Methoden–Schlussfolgerungs-Kopplung clustert Behauptungen nach Methode statt nach Schlussfolgerung, weil unterschiedliche Schlussfolgerungen denselben Fehler teilen können und identische Schlussfolgerungen auf sehr unterschiedlichen Grundlagen beruhen können. Trennung von Replikationspfaden vermeidet ähnlich ein „Mehrheitsvotum“, indem gefragt wird, ob Unterstützung aus unabhängigen Pfaden stammt statt aus wiederholten Neuformulierungen.

Diese Verhaltensweisen werden als spezialisierte Agenten implementiert, darunter Behauptungsnormalisierung, Extraktion versteckter Annahmen, Erkennung von Definitionskonflikten, Gegenbeispielsuche, Minimierung argumentativer Pfade, Rekonstruktion des Geltungsbereichs, Generierung alternativer Hypothesen und Entwurf von Verifikationsstrategien. Diese Zerlegung macht Kontemplationsarbeit explizit und überprüfbar.
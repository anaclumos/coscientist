---
title: Dialektische Graphknoten
description: Die Knotentypen in einem dialektischen Wissensgraphen
sourceLocale: en
sourceHash: b451261d8474
translatedAt: 2026-01-14
---

In einem [Dialektischen Graphen](./dialectical-graph) repräsentieren Knoten
epistemische Objekte statt reinen Text. Häufige Knotentypen sind:

- [Behauptung](./claim) — überprüfbare Propositionen
- [Geltungsbereich](./scope) — Anwendungsbedingungen
- [Annahme](./assumption) — implizite Prämissen
- Definitionen — Bedeutungen von Begriffen (über die Zeit nachverfolgt via
  [Definitionsdrift](./definition-drift))
- [Methode](./method) — Verfahren, die Evidenz oder Schlussfolgerungen erzeugen
- Daten — Messungen oder Ergebnisse
- [Evidenzspanne](./evidence-span) — exakte zitierte Textbereiche
- [Quelle](./source) — Verankerungen der Herkunft
- [Gegenbeispiel](./counterexample) — Fälle, die Behauptungen widerlegen oder
  einschränken
- [Problemknoten](./issue-node) — Bündel kollidierender Behauptungscluster

Diese Zerlegung verhindert eine verbreitete Verwechslung: Ein Dokument ist nicht
„eine" Sache. Dasselbe Paper kann eine Definition einführen, eine Behauptung
aufstellen, Evidenz zitieren und ein früheres Ergebnis entkräften; jedes davon
sollte weiterhin adressierbar bleiben, wenn sich Wissen aktualisieren soll,
statt sich nur anzusammeln.

Der Status von Behauptungen ist mehrdimensional statt nur ein einzelner
Confidence-Score ). Übergänge werden weniger durch die Anzahl der Widerlegungen
getrieben und mehr durch die Art der Widerlegung und ob sie auf der Ebene von
Geltungsbereich, Annahme, Definition oder Methode erfolgreich ist.

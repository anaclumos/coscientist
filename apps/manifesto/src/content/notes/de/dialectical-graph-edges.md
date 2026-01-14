---
title: Dialektische Graphkanten
description: Die Relationstypen, die Knoten in einem dialektischen Wissensgraphen verbinden
sourceLocale: en
sourceHash: e060cb9fd333
translatedAt: 2026-01-14
---

In einem [Dialektischen Graphen](./dialectical-graph) kodieren Kanten
Relationstypen statt Ähnlichkeitsscores. Der Vorteil ist, dass man fragen kann:
„Wie wirkt sich das auf jenes aus?" statt nur: „Geht es hier um dasselbe Thema?"

Häufige Relationstypen sind:

- Unterstützung: `supports`
- Anfechtung: `attacks`, `undercuts`, `contradicts`
- Verfeinerung und Geltungsbereich: `refines`, `generalizes`, `specializes`,
  `depends_on`
- Herkunft und Messung: `cites`, `defines`, `measures`
- Replikation: `replicates`, `fails_to_replicate`
- Optionale thematische Links: `is_about` (nützlich, aber für sich genommen
  nicht epistemisch)

Typisierte Kanten ermöglichen Wissensaktualisierung durch Widerlegungsketten,
das Erkennen von Definitionskonflikten und das Nachverfolgen des
Replikationsstatus. Das sind Fähigkeiten, die eine ähnlichkeitbasierte
Retrieval-Methode nur schwer abbilden kann (siehe
[RAG-Einschränkungen](./rag-limitations)). Sie unterstützen auch die
Qualitätsbewertung: Die Qualität von Wissen hängt weniger von der Richtung einer
Schlussfolgerung ab als von der Belastbarkeit des Pfads, der sie hervorgebracht
hat – und Kanten kodieren diese Pfadstruktur.

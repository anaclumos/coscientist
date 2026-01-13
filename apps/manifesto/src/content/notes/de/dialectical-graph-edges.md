---
title: Dialektische Graphkanten
description: Die Beziehungstypen, die Knoten in einem dialektischen Wissensgraphen verbinden
---

In einem [Dialektischen Graphen](./dialectical-graph) kodieren Kanten Beziehungstypen statt Ähnlichkeits-Scores. Der Vorteil ist, dass man fragen kann: „Wie wirkt sich das auf jenes aus?“ statt nur: „Handelt es sich um dasselbe Thema?“

Typische Beziehungen sind `supports`, `attacks` und `undercuts` (methoden-/annahmen-/definitionsbezogene Einwände); Verfeinerungs- und Umfangsbeziehungen wie `refines`, `generalizes`, `specializes` und `depends_on`; Herkunfts- und Beleglinks wie `cites`, `defines`, `measures`, `replicates` und `fails_to_replicate`; sowie direkte Widersprüche wie `contradicts`. Manche Graphen verwenden auch lose thematische Links wie `is_about`, aber die epistemische Arbeit leisten typisierte argumentative Kanten.

Typisierte Kanten ermöglichen Wissensaktualisierung über Widerlegungsketten, das Erkennen von Definitionskonflikten und das Nachverfolgen des Replikationsstatus. Das sind Fähigkeiten, die similarity-basierte Retrieval-Verfahren nur schwer abbilden können (siehe [RAG-Einschränkungen](./rag-limitations)). Sie unterstützen außerdem die Qualitätsbewertung: Wissensqualität hängt weniger von der Richtung einer Schlussfolgerung ab als von der Belastbarkeit des Pfads, der sie hervorgebracht hat — und Kanten kodieren diese Pfadstruktur.
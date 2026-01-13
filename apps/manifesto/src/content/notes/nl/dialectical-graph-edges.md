---
title: Dialectische graafranden
description: De relatietypen die knooppunten verbinden in een dialectische kennisgraaf
---

In een [Dialectische Graaf](./dialectical-graph) coderen randen relatietypen in plaats van gelijkenisscores. De meerwaarde is dat je kunt vragen: "hoe verhoudt dit zich tot dat?" in plaats van alleen: "gaan deze over hetzelfde onderwerp?"

Typische relaties zijn onder meer `supports`, `attacks` en `undercuts` (uitdagingen op methode-/aanname-/definitieniveau); verfijnings- en scopere laties zoals `refines`, `generalizes`, `specializes` en `depends_on`; herkomstlinks (provenance) zoals `cites`, `defines`, `measures`, `replicates` en `fails_to_replicate`; en regelrechte conflicten zoals `contradicts`. Sommige grafen gebruiken ook losse thematische links zoals `is_about`, maar het epistemische werk komt van getypeerde argumentatieve randen.

Getypeerde randen maken kennisactualisering mogelijk via weerleggingsketens, detectie van definitieconflicten en het volgen van replicatiestatus. Dit zijn capaciteiten die op gelijkenis gebaseerde retrieval (ophalen) moeilijk kan weergeven (zie [RAG-beperkingen](./rag-limitations)). Ze ondersteunen ook kwaliteitsbeoordeling: de kwaliteit van kennis hangt minder af van de richting van een conclusie en meer van de duurzaamheid van het pad dat haar heeft voortgebracht, en randen coderen die padstructuur.
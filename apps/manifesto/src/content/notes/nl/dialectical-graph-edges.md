---
title: Dialectische graafranden
description: De relatietypen die knooppunten verbinden in een dialectische kennisgraaf
sourceLocale: en
sourceHash: e060cb9fd333
translatedAt: 2026-01-14
---

In een [Dialectische graaf](./dialectical-graph) coderen randen relatietypen in
plaats van similariteitsscores. De waarde is dat je kunt vragen: "hoe verhoudt
dit zich tot dat?" in plaats van alleen: "gaan deze over hetzelfde onderwerp?"

Veelvoorkomende relatietypen zijn onder andere:

- Ondersteuning: `supports`
- Weerlegging: `attacks`, `undercuts`, `contradicts`
- Verfijning en reikwijdte: `refines`, `generalizes`, `specializes`,
  `depends_on`
- Provenance en meting: `cites`, `defines`, `measures`
- Replicatie: `replicates`, `fails_to_replicate`
- Optionele thematische koppelingen: `is_about`

Getypeerde randen maken kennisactualisering mogelijk via weerleggingsketens, het
detecteren van definitieconflicten en het volgen van replicatiestatus. Dit zijn
mogelijkheden die similarity-gebaseerde retrieval moeilijk kan weergeven ). Ze
ondersteunen ook kwaliteitsbeoordeling: de kwaliteit van kennis hangt minder af
van de richting van een conclusie en meer van de duurzaamheid van het pad dat
haar heeft voortgebracht, en randen coderen die padstructuur.

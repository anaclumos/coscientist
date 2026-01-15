---
title: Tipizzazione delle relazioni vs similarità
description:
  "Perché gli archi tipizzati risolvono ciò che il recupero basato sulla
  similarità non può"
sourceLocale: en
sourceHash: ae787ed89f61
translatedAt: 2026-01-14
---

La tipizzazione delle relazioni vs la similarità mette a confronto due approcci
per connettere la conoscenza: il recupero basato sulla similarità) chiede "di
cosa parla questo?", mentre i grafi con relazioni tipizzate) chiedono "che cosa
fa questo a quello?"

Il recupero per similarità fa emergere documenti che usano parole simili. Non
può dirti se quei documenti siano d'accordo, in conflitto, o se affrontino
domande diverse. Gli archi tipizzati—[supporta](./dialectical-graph-edges),
[attacca](./attack), [confuta](./undercut), [cita](./source)—catturano la
relazione argomentativa, rendendo possibili domande come "che cosa mette in
discussione questa affermazione?" oppure "da quali assunzioni dipende?"

Questa distinzione è fondamentale per la
[sintesi della conoscenza](./knowledge-synthesis). Se recuperi due fonti che
"sembrano correlate" ma non riesci a capire se siano in accordo o in conflitto,
la sintesi collassa in una semplice riassunzione. Gli archi tipizzati rendono il
conflitto un oggetto esplicito che può essere mappato, risolto o registrato.

---
title: Intervallo di evidenza
description:
  Un intervallo citato esatto da una fonte che supporta o mette in discussione
  un'affermazione
sourceLocale: en
sourceHash: a8833ec8512f
translatedAt: 2026-01-14
---

Un intervallo di evidenza è il testo citato esatto tratto da una fonte che
supporta o mette in discussione un'[affermazione](./claim). Preserva la
formulazione e il contesto originali, così che i lettori successivi possano
vedere che cosa è stato effettivamente detto, non una parafrasi o un riassunto
che potrebbe essersi discostato.

In un [Grafo dialettico](./dialectical-graph), gli intervalli di evidenza sono
memorizzati come nodi con collegamenti alla loro [fonte](./source) e alle
affermazioni a cui si riferiscono. Questo è il primo livello della
[tripla separazione](./triple-separation): testo grezzo preservato, affermazioni
normalizzate, relazioni esplicite.

Gli intervalli di evidenza prevengono il problema del troncamento degli estratti
in [RAG](./rag-limitations), in cui la citazione può eliminare silenziosamente
l’attribuzione e lasciare solo la conclusione, interrompendo la
[linea di responsabilità](./responsibility-line).

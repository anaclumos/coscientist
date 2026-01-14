---
title: Fonte
description: "Un ancoraggio di provenienza per affermazioni e prove"
sourceLocale: en
sourceHash: 73116d209a24
translatedAt: 2026-01-14
---

Una fonte è il punto di origine di un [segmento di evidenza](./evidence-span) o
di un'[affermazione](./claim): un documento, un dataset, un esperimento o una
persona da cui proviene l’informazione. Le fonti ancorano la
[provenienza](./provenance) e rendono tracciabile la
[linea di responsabilità](./responsibility-line).

Non tutte le fonti sono uguali. Una fonte primaria riporta osservazioni
originali; una fonte secondaria riassume o interpreta; una fonte terziaria
compila a partire da fonti secondarie. Ogni passaggio introduce un potenziale
scostamento, e [Coscienziato](./coscientist) tiene traccia di queste distinzioni
tramite archi `cites` espliciti nel [Grafo Dialettico](./dialectical-graph).

Le fonti sono nodi nel grafo con metadati come autore, data e contesto. Quando
un’affermazione viene contestata, la fonte fornisce il punto di partenza per una
nuova verifica.
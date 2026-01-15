---
title: Provenienza
description: L’origine e la catena di custodia di affermazioni ed evidenze
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

La provenienza è l’origine e la catena di custodia di un’affermazione o di un
elemento di prova: chi l’ha sostenuta, quando, su che base e come è arrivata
alla sua forma attuale. Senza provenienza, non puoi distinguere le fonti
primarie dai riassunti riproposti, e non puoi sapere se un apparente accordo
rifletta evidenze indipendenti o citazioni circolari.

In un [Grafo Dialettico](./dialectical-graph), la provenienza è codificata
tramite nodi [fonte](./source), [intervalli di evidenza](./evidence-span) e
archi `cites` che rendono l’attribuzione esplicita invece che implicita nella
prosa. Questo evita il problema del troncamento degli estratti, comune in
[RAG](./rag-limitations), in cui le citazioni perdono contesto e la
[linea di responsabilità](./responsibility-line) scompare.

La provenienza è un prerequisito per la [tracciabilità](./traceability): se non
puoi risalire all’origine di un’affermazione, non puoi correggerla quando il
mondo cambia.

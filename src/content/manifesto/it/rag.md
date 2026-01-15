---
title: RAG
description:
  Retrieval-Augmented Generation, una tecnica per ancorare gli output dell’IA ai
  documenti recuperati
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG è una tecnica che migliora l’accuratezza degli output dell’IA recuperando
documenti pertinenti da un corpus e usandoli come contesto per la generazione.
Invece di basarsi esclusivamente sui parametri appresi durante l’addestramento,
il modello può fare riferimento a fonti esterne, riducendo le
[allucinazioni](./hallucination) e abilitando conoscenza che non era presente
nei dati di training.

La pipeline RAG standard funziona così: una query viene incorporata in uno
spazio vettoriale, si recuperano documenti simili in base alla similarità
vettoriale e il testo recuperato viene fornito a un [LLM](./llm) come contesto
per generare una risposta. Questo approccio è diventato molto diffuso per
question answering, ricerca e attività ad alta intensità di conoscenza.

Tuttavia, RAG ha limitazioni strutturali per la produzione di conoscenza.
Recupera frammenti di testo in base alla similarità, non in base a relazioni
argomentative. Non è in grado di distinguere il supporto dall’attacco,
l’evidenza dall’opinione o la fonte primaria dalla riformulazione. Quando le
fonti sono in conflitto, RAG tende a fonderle in riassunti scorrevoli invece di
far emergere la [contesa](./contention). Vedi [Limiti di RAG](./rag-limitations)
per la critica completa.

[Coscienziato](./coscientist) va oltre RAG mantenendo un
[Grafo Dialettico](./dialectical-graph) che memorizza [affermazioni](./claim),
[estratti di evidenza](./evidence-span) e relazioni tipizzate. Il recupero
diventa «che cosa è rilevante per questa affermazione?» piuttosto che «che cosa
è simile a questa query?».

---
title: Limitazioni del RAG
description:
  Perché la retrieval-augmented generation standard non può produrre una
  scoperta autentica
sourceLocale: en
sourceHash: 6ccba3a6818d
translatedAt: 2026-01-14
---

Il [RAG](./rag) migliora la fattualità recuperando documenti pertinenti, ma il
RAG standard ha ancora limitazioni strutturali per la produzione di conoscenza.
Recupera frammenti di testo e produce prosa scorrevole; non rappresenta gli
oggetti di cui hai bisogno per la scoperta: affermazioni, controaffermazioni,
definizioni, metodi e le relazioni che le legano.

Una modalità di fallimento è il bias quantitativo. Se molte fonti ripetono
un’affermazione e un numero ridotto contiene confutazioni decisive o
controesempi, il recupero basato sulla similarità tende ad amplificare la
maggioranza e ad appianare i punti di svolta. Un singolo controesempio o una
revisione di definizione può avere più peso epistemico di cento ripetizioni, ma
non è necessariamente "più simile".

Un’altra limitazione è l’assenza di relazioni esplicite. Il RAG può recuperare
estratti dallo studio A e dallo studio B, ma di solito non può rappresentare che
B confuta A, ne indebolisce il metodo o ne restringe l’ambito; mette
semplicemente i frammenti uno vicino all’altro. Questo sostituisce la qualità
delle giustificazioni con la quantità di testo.

Infine, la provenienza è fragile sotto troncamento. Quando un estratto perde
l’attribuzione ("B riporta che A ha affermato…") e conserva solo la conclusione
, il modello può riscrivere silenziosamente la linea di responsabilità. Le
citazioni diventano vibrazioni, e "chi ha affermato cosa" diventa difficile da
ricostruire.

Per questo, il RAG standard fatica con l’aggiornamento e la sintesi della
conoscenza in presenza di vera [contesa](./contention). Un’alternativa è
spostarsi da "quanto è simile" a "che relazione è", come in un
[Grafo Dialettico](./dialectical-graph) che memorizza affermazioni e tipi di
relazione e dà priorità a contraddizioni e controesempi invece che al consenso.

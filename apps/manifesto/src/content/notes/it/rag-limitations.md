---
title: Limitazioni della RAG
description: Perché la generazione aumentata dal recupero standard non può produrre una vera scoperta
---

La generazione aumentata dal recupero (retrieval-augmented generation, RAG) migliora la fattualità recuperando documenti pertinenti, ma la RAG standard presenta ancora limitazioni strutturali per la produzione di conoscenza. Recupera frammenti di testo e produce prosa scorrevole; non rappresenta gli oggetti di cui hai bisogno per la scoperta: affermazioni, controaffermazioni, definizioni, metodi e le relazioni che le legano.

Una modalità di fallimento è il bias quantitativo. Se molte fonti ripetono un’affermazione e un numero ridotto contiene confutazioni o controesempi decisivi, il recupero basato sulla similarità tende ad amplificare la maggioranza e ad appianare i punti di svolta. Un singolo controesempio o una revisione di una definizione può avere più peso epistemico di cento ripetizioni, ma non è necessariamente “più simile”.

Un’altra limitazione è l’assenza di relazioni esplicite. La RAG può recuperare estratti dallo studio A e dallo studio B, ma di solito non può rappresentare che B confuta A, ne indebolisce il metodo o ne restringe l’ambito; si limita a collocare frammenti uno accanto all’altro. Questo sostituisce la qualità delle ragioni con la quantità di testo.

Infine, la provenienza è fragile sotto troncamento. Quando un estratto elimina l’attribuzione (“B riporta che A ha affermato…”) e conserva solo la conclusione (“X funziona”), il modello può riscrivere silenziosamente la linea di responsabilità. Le citazioni diventano sensazioni, e ricostruire “chi ha affermato cosa” diventa difficile.

Per questo, la RAG standard fatica ad aggiornare e sintetizzare la conoscenza in presenza di reale [contenzioso](./contention). Un’alternativa è spostarsi da “quanto è simile” a “che relazione è”, come in un [Grafo dialettico](./dialectical-graph) che memorizza affermazioni e tipi di relazione e dà priorità a contraddizioni e controesempi piuttosto che al consenso.
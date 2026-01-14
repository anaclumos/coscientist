---
title: Grafo dialettico
description: Un modello di grafo della conoscenza che memorizza affermazioni e relazioni invece del contenuto dei documenti
---

Un grafo dialettico è un grafo della conoscenza che memorizza la struttura argomentativa (affermazioni, definizioni, assunzioni, metodi, estratti di evidenza e le relazioni tra di essi) invece di trattare i documenti come testo indifferenziato. L’intuizione centrale è semplice: non scambiare il testo per conoscenza. Il testo è confezione; la conoscenza è la struttura di vincoli che permette alle affermazioni di supportarsi, attaccarsi e raffinarsi a vicenda.

[Coscienziato](./coscientist) impone una tripla separazione: il testo originale viene preservato come estratti di evidenza citabili; le affermazioni vengono scomposte in proposizioni normalizzate; e le relazioni vengono memorizzate come legami argomentativi espliciti. Questa è una correzione strutturale per una modalità di fallimento comune di [RAG](./rag): il troncamento degli estratti. L’estratto di evidenza conserva la formulazione esatta e la fonte, l’affermazione registra chi ha affermato cosa, e un arco `cites` rende l’attribuzione esplicita invece che implicita nella prosa.

Il grafo separa anche un livello inferenziale (la rete di affermazioni in evoluzione) da un livello narrativo (una proiezione con marca temporale adatta alla lettura). Un documento non è una verità finale; è un’istantanea del grafo. Ogni frase dovrebbe poter risalire all’indietro attraverso affermazione, ambito, assunzione, metodo, dati, estratto di evidenza e fonte. Senza quella catena, una frase è solo una frase, non conoscenza.

Per fungere da freno al [Collasso dell’enciclopedia](./encyclopedia-meltdown), il sistema dà priorità a contraddizioni e controesempi piuttosto che al consenso. Quando un’affermazione entra nel grafo, l’atteggiamento predefinito è avversariale: cercare presto attacchi e confutazioni (undercuts) così che la struttura si aggiorni tramite confutazione invece di derivare per ripetizione. Per tipi concreti di nodi e relazioni, vedi [Nodi del grafo dialettico](./dialectical-graph-nodes) e [Archi del grafo dialettico](./dialectical-graph-edges).
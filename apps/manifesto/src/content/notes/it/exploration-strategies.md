---
title: Strategie di esplorazione
description: Strategie di attraversamento del grafo per una scoperta continua della conoscenza
---

[Coscientist](./coscientist) ha bisogno di un motore che faccia più che recuperare: cerca continuamente nuovi approcci facendo emergere attivamente contraddizioni, condizioni al contorno e dipendenza dal metodo nel [Grafo dialettico](./dialectical-graph).

Una strategia è la ricerca *counterexample-first* (prima i controesempi): la popolarità viene trattata meno come prova di qualità e più come prova di rischio. Più un’affermazione è ripetuta diffusamente, più diventa prezioso raccogliere controesempi e condizioni al contorno, perché la contaminazione da affermazioni popolari ha un raggio d’impatto maggiore in [Encyclopedia Meltdown](./encyclopedia-meltdown).

Un’altra strategia è la ricerca della contraddizione tramite *minimum-cut* (taglio minimo). Quando gruppi di affermazioni entrano in conflitto, il sistema cerca l’insieme minimo di premesse e relazioni che genera il conflitto, quindi indirizza quella struttura alla contemplazione. Il tempo umano viene investito nel [set minimo di contraddizioni](./minimum-contradiction-set), mentre l’IA gestisce la ricerca ampia, la generazione di candidati e il calcolo del [taglio minimo](./minimum-cut).

Il rilevamento della deriva definitoria tratta il significato come un oggetto in movimento. Quando la definizione di un termine cambia nel tempo o tra comunità, il grafo registra esplicitamente il cambiamento (vedi [deriva definitoria](./definition-drift)) invece di assumere un concetto condiviso, contrastando così una modalità di fallimento comune della [RAG](./rag-limitations).

La verifica dell’accoppiamento metodo–conclusione raggruppa le affermazioni per metodo anziché per conclusione, perché conclusioni diverse possono condividere lo stesso difetto e conclusioni identiche possono poggiare su basi molto diverse. In modo analogo, la separazione dei percorsi di replicazione evita il “voto di maggioranza” chiedendo se il supporto proviene da percorsi indipendenti piuttosto che da ripetute riformulazioni.

Questi comportamenti sono implementati come agenti specializzati, inclusi: normalizzazione delle affermazioni, estrazione delle assunzioni nascoste, rilevamento dei conflitti definitori, ricerca di controesempi, minimizzazione dei percorsi argomentativi, ricostruzione dello scopo, generazione di ipotesi alternative e progettazione della strategia di verifica. Questa scomposizione rende il lavoro di contemplazione esplicito e verificabile.
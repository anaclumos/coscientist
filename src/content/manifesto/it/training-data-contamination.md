---
title: Contaminazione dei dati di addestramento
description: Contenuti generati dall’IA che inquinano i corpora usati per addestrare i modelli futuri
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

La contaminazione dei dati di addestramento si verifica quando testi generati dall’IA finiscono sul web, vengono raccolti tramite scraping nei corpora di addestramento e plasmano la generazione successiva di modelli. Il risultato è un ciclo di retroazione: i modelli addestrati sugli output dei loro predecessori ne ereditano i bias, amplificano gli errori e perdono l’accesso al segnale umano indipendente che rendeva utili gli originali.

Questo è diverso dalla contaminazione dei benchmark , anche se condividono il termine. La contaminazione dei dati di addestramento riguarda la provenienza del corpus sottostante: una volta che la [sbobba IA](./ai-slop) si mescola su larga scala con testo scritto da esseri umani, distinguerli diventa costoso o impossibile. Gli scraping del web successivi al 2022 sono sempre più sospetti.

Le conseguenze si accumulano. Il [collasso del modello](./model-collapse) descrive il degrado della qualità quando i modelli vengono addestrati su dati sintetici: le distribuzioni si restringono, le modalità rare scompaiono e l’output converge verso una media omogeneizzata. Il [collasso dell’enciclopedia](./encyclopedia-meltdown) descrive il fallimento del sistema della conoscenza quando gli output dell’IA vengono citati come fonti, creando un’autorità circolare. La contaminazione dei dati di addestramento è la causa a monte di entrambi.

Il parallelo con l’[acciaio a basso fondo](./low-background-steel) chiarisce il problema. I test nucleari hanno contaminato tutto l’acciaio post-1945; la proliferazione degli LLM ha contaminato tutto il testo del web post-2020. Entrambi gli eventi di contaminazione erano irreversibili, entrambi hanno creato domanda di [risorse pre-contaminazione](./pre-contamination-resource) ed entrambi implicano che, per far avanzare la tecnologia, servano materiali prodotti prima che la tecnologia esistesse.

Le soluzioni includono la verifica della [provenienza](./provenance), archivi con accesso vincolato da timestamp e pratiche di curatela dei dati che privilegiano fonti con catene chiare di paternità umana. La MIT Data Provenance Initiative e iniziative simili mirano a portare trasparenza sull’origine dei dati di addestramento—un passaggio necessario perché i modelli futuri evitino di addestrarsi sui propri riflessi.

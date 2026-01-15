---
title: Acquisizione zero-trust
description:
  Protocollo che richiede una provenienza esplicita prima di accettare
  affermazioni
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

L’acquisizione zero-trust è un protocollo che tratta le informazioni in arrivo
come non verificate per impostazione predefinita. Ogni [affermazione](./claim)
deve includere una [provenienza](./provenance) esplicita e passare attraverso
una [verifica](./verification) prima di acquisire autorità nel sistema di
conoscenza.

Il nome prende in prestito dal concetto di sicurezza zero-trust: non dare nulla
per sicuro finché non viene dimostrato. In pratica, questo significa che le
nuove affermazioni entrano con stato `tentative`, devono essere tracciabili fino
alle [fonti](./source) e ai [segmenti di evidenza](./evidence-span), e
dovrebbero essere esposte alla
[ricerca con priorità alle confutazioni](./rebuttal-first-search) prima di
essere trattate come consolidate.

L’acquisizione zero-trust è una difesa contro la [sbobba AI](./ai-slop) e
l’[Crollo dell'Enciclopedia](./encyclopedia-meltdown). Quando l’ambiente è
inondato di contenuti plausibili ma non verificati, l’unica postura sicura è
richiedere una prova dell’origine e resistere alle contestazioni prima
dell’accettazione.

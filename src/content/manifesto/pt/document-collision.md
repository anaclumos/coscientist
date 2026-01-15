---
title: Colisão de Documentos
description:
  Protocolo de forçar fontes díspares a confrontarem as alegações umas das
  outras
sourceLocale: en
sourceHash: 65bf53f5d6fb
translatedAt: 2026-01-14
---

Colisão de documentos é o protocolo de forçar fontes díspares a confrontarem as
[alegações](./claim) umas das outras, em vez de apenas as resumir em paralelo.
Quando os documentos colidem, as contradições tornam-se visíveis, as definições
têm de ser alinhadas, e a [controvérsia](./contention) é exposta como um objeto
explícito.

Isto é o oposto da abordagem de "resumo equilibrado", que suaviza o desacordo. A
colisão diz: "Estas duas fontes dizem coisas incompatíveis. O que,
especificamente, entra em conflito? Em que condições? O que resolveria isso?"

No [Cocientista](./coscientist), a colisão de documentos é implementada através
do [Grafo Dialético](./dialectical-graph): as alegações são extraídas,
normalizadas e ligadas por relações de [ataque](./attack),
[refutação](./undercut) e suporte. O resultado é um mapa de onde as fontes
concordam, onde entram em conflito e o que permanece em aberto.

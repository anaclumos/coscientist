---
title: Ingestão Zero-Trust
description: Protocolo que exige proveniência explícita antes de aceitar alegações
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

A ingestão zero-trust é um protocolo que trata, por padrão, as informações
recebidas como não verificadas. Toda [alegação](./claim) deve trazer
[proveniência](./provenance) explícita e passar por
[verificação](./verification) antes de ganhar autoridade no sistema de
conhecimento.

O nome vem da segurança zero-trust: não assuma que nada é seguro até que seja
comprovado. Na prática, isso significa que novas alegações entram com status
`tentative`, devem ser rastreáveis até [fontes](./source) e
[trechos de evidência](./evidence-span), e devem ser expostas à
[busca com refutação primeiro](./rebuttal-first-search) antes de serem tratadas
como estabelecidas.

A ingestão zero-trust é uma defesa contra [AI slop](./ai-slop) e
[Colapso da Enciclopédia](./encyclopedia-meltdown). Quando o ambiente é inundado
com conteúdo plausível, porém não verificado, a única postura segura é exigir
prova de origem e sobreviver a contestação antes da aceitação.

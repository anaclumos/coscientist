---
title: Ataque
description: "Um desafio direto à veracidade de uma alegação"
sourceLocale: en
sourceHash: 775f1f75f883
translatedAt: 2026-01-14
---

Um ataque é um desafio direto à veracidade de uma [alegação](./claim). Ao
contrário de uma [refutação por enfraquecimento](./undercut), que visa os
fundamentos, um ataque afirma que a própria alegação é falsa ou enganosa,
normalmente fornecendo um [contraexemplo](./counterexample) ou evidência
contraditória.

Ataques são um tipo central de aresta no [Grafo Dialético](./dialectical-graph)
(ver [Arestas do Grafo Dialético](./dialectical-graph-edges)). Quando um ataque
é registado, o estado da alegação pode mudar de `supported` para `contested` ou
`refuted`, dependendo da força e do tipo do desafio.

Nem todos os ataques são iguais. Um contraexemplo bem fundamentado tem mais peso
do que uma simples afirmação de discordância. É por isso que o
[Cocientista](./coscientist) acompanha [trechos de evidência](./evidence-span) e
[proveniência](./provenance) tanto para ataques quanto para alegações.
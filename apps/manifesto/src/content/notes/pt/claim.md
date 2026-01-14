---
title: Alegação
description: Uma proposição verificável armazenada como um nó em um grafo dialético
sourceLocale: en
sourceHash: 11bb739db24b
translatedAt: 2026-01-14
---

Uma alegação é uma proposição verificável extraída de texto e armazenada como um
objeto de primeira classe em um [Grafo Dialético](./dialectical-graph).
Alegações não são frases brutas; são enunciados normalizados com dependências
explícitas de [escopo](./scope), [pressupostos](./assumption) e
[método](./method).

As alegações podem ser vinculadas a [trechos de evidência](./evidence-span) que
as sustentam, [contraexemplos](./counterexample) que as delimitam,
[ataques](./attack) que as contestam e [undercuts](./undercut) que questionam
seus fundamentos. Essa estrutura relacional permite que o conhecimento seja
atualizado por meio de refutação, em vez de substituição.

Toda alegação tem um status (ver
[Nós do Grafo Dialético](./dialectical-graph-nodes)): pode ser provisória,
contestada, sustentada condicionalmente, robusta, refutada ou obsoleta. O status
muda com base no tipo de refutação, não na quantidade, e pode regredir se a
estrutura de sustentação enfraquecer.

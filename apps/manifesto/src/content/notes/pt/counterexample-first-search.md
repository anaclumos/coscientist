---
title: Busca Primeiro por Contraexemplos
description: Estratégia que prioriza contraexemplos em vez de evidências de apoio
sourceLocale: en
sourceHash: 2b3848f34451
translatedAt: 2026-01-14
---

A busca primeiro por contraexemplos é uma
[estratégia de exploração](./exploration-strategies) que trata a popularidade
como um sinal de risco, e não como evidência de qualidade. Quanto mais
amplamente uma [afirmação](./claim) é repetida, mais valioso se torna encontrar
[contraexemplos](./counterexample) e condições de contorno, porque erros em
afirmações populares têm um raio de explosão maior em
[Colapso da Enciclopédia](./encyclopedia-meltdown).

Essa estratégia inverte a prioridade normal de recuperação. A busca padrão
classifica por relevância ou frequência, o que tende a trazer à tona
concordância. A busca primeiro por contraexemplos procura deliberadamente
discordância, casos-limite e falhas, porque estes são mais informativos para
atualizar o conhecimento.

Ela é relacionada, mas distinta, da
[busca primeiro por refutação](./rebuttal-first-search), que é um protocolo de
validação para aceitar afirmações. A busca primeiro por contraexemplos é uma
estratégia de descoberta: procurar ativamente o que quebra, em vez do que
confirma.

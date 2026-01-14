---
title: Fenómenos de deriva
description: Cambios en los sistemas de conocimiento impulsados por el tiempo
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

Los fenómenos de deriva son las formas en que los sistemas de conocimiento
cambian con el tiempo, a menudo de manera invisible, lo que conduce a errores
que parecen contradicciones pero que en realidad se deben a un desajuste
temporal.

## [Deriva semántica](./semantic-drift)

- [Deriva de definición](./definition-drift) — cuando el significado de un
  término cambia a través del tiempo o entre comunidades
- [Pérdida de significado](./meaning-loss) — cuando las afirmaciones quedan
  obsoletas porque sus términos ya no se aplican

## [Deriva ambiental](./environmental-drift)

- [No estacionariedad](./nonstationarity) — cuando el proceso subyacente que
  produce los datos cambia con el tiempo

## [Deriva del sistema](./system-drift)

- [Colapso del modelo](./model-collapse) — degradación por entrenar con datos
  generados por IA
- [Corrección vs. deriva](./correction-vs-drift) — lo que ocurre cuando corregir
  errores cuesta más que dejar que se propaguen

## Defensa

El [Grafo dialéctico](./dialectical-graph) rastrea la deriva de forma explícita
separando las [definiciones](./definition-drift) de las [afirmaciones](./claim)
y registrando cuándo y dónde se pretendía que se aplicaran las afirmaciones.
Esto evita falsas contradicciones por desajuste temporal.

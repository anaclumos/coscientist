---
title: Separación triple
description: "Regla arquitectónica que separa el texto en bruto, las afirmaciones normalizadas y las relaciones explícitas"
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

La separación triple es la regla arquitectónica en un
[Grafo Dialéctico](./dialectical-graph) que mantiene tres capas distintas: el
texto original se conserva como [fragmentos de evidencia](./evidence-span)
citables; las [afirmaciones](./claim) se descomponen en
[proposiciones normalizadas](./normalized-proposition); y las relaciones se
almacenan como vínculos argumentativos explícitos (véase
[Aristas del Grafo Dialéctico](./dialectical-graph-edges)).

Esta separación evita un modo de fallo común en [RAG](./rag-limitations): el
recorte de extractos. Cuando se recupera y resume texto sin conservar la
redacción original, la atribución puede desaparecer silenciosamente. La
separación triple garantiza que siempre puedas rastrear una afirmación hasta las
palabras exactas y la [fuente](./source) que las produjo.

También habilita la [síntesis de conocimiento](./knowledge-synthesis) al hacer
que la estructura sea consultable. Puedes preguntar «¿qué ataca esta
afirmación?» o «¿de qué definiciones depende?» porque esas relaciones se
almacenan, no se infieren.

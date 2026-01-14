---
title: Procedencia
description: El origen y la cadena de custodia de las afirmaciones y las pruebas
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

La procedencia es el origen y la cadena de custodia de una afirmación o pieza de
evidencia: quién la afirmó, cuándo, en qué se basó y cómo llegó a su forma
actual. Sin procedencia, no puedes distinguir las fuentes primarias de los
resúmenes reempaquetados, y no puedes saber si el aparente acuerdo refleja
evidencia independiente o una citación circular.

En un [Grafo Dialéctico](./dialectical-graph), la procedencia se codifica
mediante nodos de [fuente](./source), [tramos de evidencia](./evidence-span) y
aristas `cites` que hacen explícita la atribución en lugar de quedar implícita
en la prosa. Esto evita el problema de truncamiento de extractos común en
[RAG](./rag-limitations), donde al citar se pierde el contexto y desaparece la
[línea de responsabilidad](./responsibility-line).

La procedencia es un requisito previo para la [trazabilidad](./traceability): si
no puedes rastrear una afirmación hasta su origen, no puedes corregirla cuando
el mundo cambia.

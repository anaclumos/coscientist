---
title: Proveniência
description: A origem e a cadeia de custódia de alegações e evidências
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

Proveniência é a origem e a cadeia de custódia de uma alegação ou de uma peça de
evidência: quem a afirmou, quando, com base em quê e como ela chegou à sua forma
atual. Sem proveniência, você não consegue distinguir fontes primárias de
resumos reembalados, e não consegue saber se um aparente consenso reflete
evidência independente ou citação circular.

Em um [Grafo Dialético](./dialectical-graph), a proveniência é codificada por
meio de nós de [fonte](./source), [trechos de evidência](./evidence-span) e
arestas `cites` que tornam a atribuição explícita, em vez de apenas sugerida
pela prosa. Isso evita o problema de truncamento de excertos comum em
[RAG](./rag-limitations), em que a citação remove o contexto e a
[linha de responsabilidade](./responsibility-line) desaparece.

Proveniência é um pré-requisito para a [rastreabilidade](./traceability): se
você não consegue rastrear uma alegação até sua origem, não consegue corrigi-la
quando o mundo muda.

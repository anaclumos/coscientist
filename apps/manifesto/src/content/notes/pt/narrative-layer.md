---
title: Camada Narrativa
description: Projeções do grafo dialético com marcação temporal, adequadas para leitura humana
---

A camada narrativa é a projeção legível por humanos de um [Grafo Dialético](./dialectical-graph): documentos, resumos e explicações gerados a partir da [camada de inferência](./inference-layer) subjacente. As narrativas têm marcação temporal e são versionadas; elas representam o que o grafo dizia em um determinado momento.

Essa separação importa porque o conhecimento evolui, mas os documentos persistem. Se você tratar um documento como a fonte da verdade, ele pode ficar desatualizado ou enganoso à medida que o grafo é atualizado. Ao tratar narrativas como instantâneos, o [Cocientista](./coscientist) explicita que a prosa é derivada, não primária.

Cada frase em uma narrativa deve ser rastreável de volta por meio de [afirmações](./claim), [trechos de evidência](./evidence-span) e [fontes](./source). Sem essa cadeia, uma frase é apenas uma frase, não conhecimento verificado.
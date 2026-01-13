---
title: Síntese de Conhecimento
description: Como a síntese difere da média em sistemas dialéticos de conhecimento
---

Síntese de conhecimento é o que acontece após a recuperação (retrieval) quando você precisa tornar fontes incompatíveis comparáveis. Não é fazer uma média. É alinhar premissas, definições e escopo para que os desacordos se tornem objetos explícitos, em vez de ruído.

O [RAG](./rag-limitations) padrão é forte em recuperação e fraco em síntese porque não possui um objeto interno chamado [contenda](./contention). Em um [Grafo Dialético](./dialectical-graph), a contenda é de primeira classe, então o sistema consegue decompor a incompatibilidade em suas causas: diferenças de definição, diferenças de amostragem, diferenças de método, diferenças de escopo, ou [não estacionariedade](./nonstationarity) impulsionada pelo tempo.

A resolução, portanto, não é uma única frase. É um mapa ramificado: se o mesmo termo leva a conclusões diferentes sob definições diferentes, o sistema registra a ramificação na camada de definição antes de tratar isso como uma contradição nas conclusões. [Nós de issue](./dialectical-graph-nodes) agrupam o que conflita com o quê e registram as condições sob as quais o issue pode ser resolvido.

O objetivo é um mapa de contradições mais condições explícitas de resolução, para que trabalhos futuros possam atualizar o conhecimento por rearranjo, em vez de reescrita. É por isso que a IA de contemplação em [Coscientist](./coscientist) tem como objetivo fazer documentos colidirem: produzindo clusters de issues, condições refinadas, refutações estruturadas e sistemas de coordenadas explícitos para comparação.
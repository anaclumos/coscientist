---
title: Coscientist
description: Um sistema de companhia intelectual para produção de conhecimento na era pós-IA
---

Coscientist é um serviço open-source inspirado na fictícia [Encyclopedia Galactica](./encyclopedia-galactica), de Isaac Asimov. Ele pretende ser mais do que uma [arca do conhecimento](./knowledge-ark) de informações: um companheiro intelectual que expande a contemplação em conjunto com o [Galarch](./galarch) humano. Acima de tudo, é um sistema para desatrofiar nossas mentes na era pós-IA.

Ele é construído por [Sunghyun Cho](./sunghyun-cho). A história de origem é direta: a preservação importa, mas a preservação por si só não produz entendimento. O Coscientist foi concebido para tornar o conhecimento atualizável, de modo que contradições, contraexemplos e a deriva de definições se tornem visíveis e acionáveis, em vez de serem suavizados por resumos fluentes.

O primeiro princípio é a soberania: a autoridade do conhecimento deve permanecer com o [Galarch](./galarch). Proteger-se contra o [Encyclopedia Meltdown](./encyclopedia-meltdown) não é uma reflexão tardia; é uma restrição de design. A IA pode fazer o trabalho de contemplação, mas não deve tomar a iniciativa de escrever e declarar.

É por isso que o Coscientist vai além de RAG no estilo perguntas e respostas (veja [limitações do RAG](./rag-limitations)). Ele mantém um [Grafo Dialético](./dialectical-graph) que armazena [atos argumentativos](./argumentative-act) em vez de texto bruto de documentos, para que cada afirmação possa ser vinculada a trechos de evidência, fontes e relações explícitas como ataques, undercuts (refutações que minam a ligação entre premissa e conclusão) e citações (veja [Nós do Grafo Dialético](./dialectical-graph-nodes) e [Arestas do Grafo Dialético](./dialectical-graph-edges)). A exploração é guiada por estratégias que priorizam pressão adversarial, incluindo busca com contraexemplos primeiro, isolamento de contradições via [corte mínimo](./minimum-cut) e detecção explícita de [deriva de definição](./definition-drift) (veja [Estratégias de Exploração](./exploration-strategies)).

No nível de protocolo, o sistema usa procedimentos como o [Protocolo de Consenso Multi-IA](./multi-ai-consensus-protocol) e a [síntese de conhecimento](./knowledge-synthesis) para fazer os documentos colidirem, em vez de meramente resumir. O estado bem-sucedido pretendido é um ecossistema de argumentos: a IA cuida do trabalho de busca e reestruturação, enquanto o Galarch supervisiona a estrutura e a verificação para que a narrativa resultante permaneça rastreável.

Referência: https://cho.sh/r/6975BA.
---
title: Estratégias de Exploração
description: Estratégias de travessia de grafo para descoberta contínua de conhecimento
---

O [Coscientist](./coscientist) precisa de um motor que faça mais do que recuperar; ele busca continuamente novas abordagens ao trazer ativamente à tona contradições, condições de contorno e dependência do método no [Grafo Dialético](./dialectical-graph).

Uma estratégia é a busca primeiro por contraexemplos: a popularidade é tratada menos como evidência de qualidade e mais como evidência de risco. Quanto mais amplamente uma afirmação é repetida, mais valioso se torna coletar contraexemplos e condições de contorno, porque a contaminação por afirmações populares tem um raio de explosão maior no [Derretimento da Enciclopédia](./encyclopedia-meltdown).

Outra estratégia é a busca de corte mínimo de contradição. Quando clusters de afirmações entram em conflito, o sistema procura o conjunto mínimo de premissas e relações que gera o conflito e, então, direciona essa estrutura para contemplação. O tempo humano é investido no [conjunto mínimo de contradição](./minimum-contradiction-set), enquanto a IA lida com busca ampla, geração de candidatos e cálculo de [corte mínimo](./minimum-cut).

A detecção de deriva de definição trata o significado como um objeto em movimento. Quando a definição de um termo muda ao longo do tempo ou entre comunidades, o grafo registra a mudança explicitamente (ver [deriva de definição](./definition-drift)) em vez de assumir um conceito compartilhado, o que combate um modo de falha comum de [RAG](./rag-limitations).

A verificação de acoplamento método–conclusão agrupa afirmações por método em vez de por conclusão, porque conclusões diferentes podem compartilhar a mesma falha e conclusões idênticas podem se apoiar em fundamentos muito diferentes. A separação de caminhos de replicação, de forma semelhante, evita “voto da maioria” ao perguntar se o suporte vem de caminhos independentes em vez de reiterações repetidas.

Esses comportamentos são implementados como agentes especializados, incluindo normalização de afirmações, extração de pressupostos ocultos, detecção de conflito de definições, busca de contraexemplos, minimização de caminhos argumentativos, reconstrução de escopo, geração de hipóteses alternativas e desenho de estratégia de verificação. Essa decomposição torna o trabalho de contemplação explícito e verificável.
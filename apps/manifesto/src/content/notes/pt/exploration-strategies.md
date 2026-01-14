---
title: Estratégias de Exploração
description: Estratégias de travessia de grafo para descoberta contínua de conhecimento
---

O [Cocientista](./coscientist) precisa de mais do que recuperação: precisa de exploração que traga ativamente à tona contradições, condições de contorno e dependência do método no [Grafo Dialético](./dialectical-graph).

As principais estratégias incluem:

- [Busca Primeiro por Contraexemplos](./counterexample-first-search) — trate a popularidade como um sinal de risco; priorize contraexemplos e condições de contorno
- [Corte Mínimo](./minimum-cut) — isole a estrutura mínima que produz uma contradição e, então, foque a atenção no [conjunto mínimo de contradição](./minimum-contradiction-set)
- [Deriva de Definição](./definition-drift) — detecte mudanças de significado em vez de assumir conceitos compartilhados
- [Acoplamento Método-Conclusão](./method-conclusion-coupling) — agrupe alegações por método para encontrar falhas compartilhadas
- [Separação de Caminhos de Replicação](./replication-path-separation) — diferencie evidências independentes de reafirmações repetidas

Na implementação, isso aparece como agentes especializados para normalização, extração de pressupostos, busca de contraexemplos, reconstrução de escopo e desenho de estratégia de verificação.
---
title: Regras de Transição de Status
description: O que desencadeia a passagem entre estados de uma alegação num grafo dialético
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

As regras de transição de status definem o que faz uma [alegação](./claim)
passar de um estado para outro na
[taxonomia de status de alegações](./claim-status-taxonomy). As transições
dependem do tipo de desafio, não da contagem: um único
[contraexemplo](./counterexample) decisivo importa mais do que muitas objeções
pouco convincentes.

As transições principais incluem: provisória → contestada é registado),
contestada → suportada condicionalmente (quando o ataque é respondido ao
restringir o [escopo](./scope) ou ao clarificar [pressupostos](./assumption)),
suportada condicionalmente → robusta (quando múltiplos caminhos independentes
confirmam), robusta → refutada (quando um contraexemplo resiste ao escrutínio) e
qualquer estado → obsoleta (quando a [deriva de definição](./definition-drift)
rompe o significado da alegação).

Estas regras fazem parte da
[camada de protocolo epistémico](./epistemic-protocol-layer) no
[Cocientista](./coscientist). Elas tornam a atualização do conhecimento
explícita e auditável, em vez de implícita na prosa.

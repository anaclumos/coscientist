---
title: Deriva do Sistema
description: Degradação de sistemas de conhecimento por autocontaminação ou negligência
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

Deriva do sistema é a categoria de [fenômenos de deriva](./drift-phenomena) em
que o próprio sistema de conhecimento se degrada ao longo do tempo,
independentemente de mudanças semânticas ou ambientais.

## Formas

- [Colapso do Modelo](./model-collapse) — degradação por treinar com dados
  gerados por IA
- [Correção vs Deriva](./correction-vs-drift) — quando corrigir erros custa mais
  do que deixá-los se propagar

## Por que isso importa

Deriva do sistema é o modo de falha em que um sistema de conhecimento se
estabiliza em torno de um falso estado estacionário "aproximadamente mantido".
Os erros persistem porque a correção é cara; conteúdo gerado por IA contamina os
dados de treinamento; e o sistema perde gradualmente o contato com a verdade
fundamental.

[Fusão da Enciclopédia](./encyclopedia-meltdown) é a forma extrema: quando a IA
toma a iniciativa de escrever, a
[linha de responsabilidade](./responsibility-line) desaparece, e o sistema
deriva rumo a um colapso autorreferencial. A defesa é a
[camada de protocolo epistêmico](./epistemic-protocol-layer): manter a correção
mais barata do que a deriva por meio de [rastreabilidade](./traceability),
[ingestão de confiança zero](./zero-trust-ingestion) e
[busca com refutação primeiro](./rebuttal-first-search).

## Relacionados

- [Fenômenos de Deriva](./drift-phenomena) — a categoria-mãe
- [Deriva Semântica](./semantic-drift) — quando os significados mudam
- [Deriva Ambiental](./environmental-drift) — quando o mundo muda
- [Deterioração Institucional do Cérebro](./institutional-brain-rot) — análogo
  organizacional

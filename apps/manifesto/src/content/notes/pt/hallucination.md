---
title: Alucinação
description: Saídas de IA que parecem plausíveis, mas são factualmente incorretas ou fabricadas
---

Uma alucinação é uma saída de IA que soa confiante e coerente, mas contém erros factuais, informação fabricada ou referências inventadas. O perigo não é a aleatoriedade: é a plausibilidade. Texto alucinado frequentemente passa por uma avaliação casual porque segue os padrões estatísticos da prosa verdadeira.

A alucinação é um sintoma de como os [LLMs](./llm) funcionam: eles predizem os próximos tokens prováveis, não os verdadeiros. Quando os dados de treino são escassos ou contraditórios sobre um tema, o modelo interpola, e o resultado pode ser um erro suave, porém convincente. É por isso que a [armadilha da fluência](./fluency-trap) é tão perigosa: fluência não implica precisão.

No [Cocientista](./coscientist), o risco de alucinação é gerido por meio da [camada de protocolo epistémico](./epistemic-protocol-layer): a [rastreabilidade](./traceability) exige que as afirmações se conectem a [trechos de evidência](./evidence-span), a [busca com refutação primeiro](./rebuttal-first-search) coloca as hipóteses à prova antes da aceitação, e o [Protocolo de Consenso Multi-IA](./multi-ai-consensus-protocol) usa a discordância entre modelos como um sinal de que é necessária uma inspeção mais rigorosa.
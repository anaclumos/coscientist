---
title: Hallucination
description: AI outputs that are plausible but factually incorrect or fabricated
---

A hallucination is an AI output that reads as confident and coherent but
contains factual errors, fabricated information, or invented references. The
danger is not randomness: it is plausibility. Hallucinated text often passes
casual scrutiny because it follows the statistical patterns of truthful prose.

Hallucination is a symptom of how [LLMs](./llm) work: they predict likely next
tokens, not true ones. When the training data is sparse or contradictory on a
topic, the model interpolates, and the result can be smoothly wrong. This is why
the [fluency trap](./fluency-trap) is so dangerous: fluency does not imply
accuracy.

In [Coscientist](./coscientist), hallucination risk is managed through the
[epistemic protocol layer](./epistemic-protocol-layer):
[traceability](./traceability) requires claims to connect to
[evidence spans](./evidence-span),
[rebuttal-first search](./rebuttal-first-search) stress-tests before acceptance,
and the [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) uses model
disagreement as a signal for closer inspection.

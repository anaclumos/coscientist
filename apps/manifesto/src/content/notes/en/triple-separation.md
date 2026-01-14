---
title: Triple Separation
description: "Architectural rule separating raw text, normalized claims, and explicit relations"
---

Triple separation is the architectural rule in a [Dialectical Graph](./dialectical-graph) that keeps three layers distinct:
original text is preserved as quotable [evidence spans](./evidence-span);
[claims](./claim) are decomposed into [normalized propositions](./normalized-proposition); and relations are stored as explicit argumentative bindings.

This separation prevents a common failure mode in [RAG](./rag-limitations):
excerpt truncation. When text is retrieved and summarized without preserving the original wording, attribution can silently disappear. Triple separation ensures that you can always trace a claim back to the exact words and the [source](./source) that produced them.

It also enables [knowledge synthesis](./knowledge-synthesis) by making structure queryable. You can ask "what attacks this claim?" or "what definitions does this rely on?" because those relations are stored, not implied.
---
title: Training Data Contamination
description: AI-generated content polluting the corpora used to train future models
---

Training data contamination occurs when AI-generated text enters the web,
gets scraped into training corpora, and shapes the next generation of models.
The result is a feedback loop: models trained on their predecessors' outputs
inherit their biases, amplify their errors, and lose access to the independent
human signal that made the originals useful.

This is distinct from benchmark contamination (test data leaking into training
sets) though both share the word. Training data contamination is about the
provenance of the underlying corpus: once [AI slop](./ai-slop) mixes with
human-written text at scale, distinguishing them becomes expensive or impossible.
Web scrapes after 2022 are increasingly suspect.

The consequences compound. [Model collapse](./model-collapse) describes the
quality degradation when models train on synthetic data: distributions narrow,
rare modes disappear, and the output converges toward a homogenized mean.
[Encyclopedia Meltdown](./encyclopedia-meltdown) describes the knowledge-system
failure when AI outputs are cited as sources, creating circular authority.
Training data contamination is the upstream cause of both.

The parallel to [low-background steel](./low-background-steel) clarifies the
problem. Nuclear testing contaminated all post-1945 steel; LLM proliferation
contaminated all post-2020 web text. Both contamination events were irreversible,
both created demand for [pre-contamination resources](./pre-contamination-resource),
and both mean that advancing the technology requires materials produced before
the technology existed.

Solutions involve [provenance](./provenance) verification, timestamp-gated
archives, and data curation practices that privilege sources with clear chains
of human authorship. The MIT Data Provenance Initiative and similar efforts aim
to bring transparency to training data origins—a necessary step if future models
are to avoid training on their own reflections.

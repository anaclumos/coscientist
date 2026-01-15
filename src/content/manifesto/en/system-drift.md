---
title: System Drift
description: Degradation of knowledge systems through self-contamination or neglect
---

System drift is the category of [drift phenomena](./drift-phenomena) where the
knowledge system itself degrades over time, independent of semantic or
environmental changes.

## Forms

- [Model Collapse](./model-collapse) — degradation from training on AI-generated
  data
- [Correction vs Drift](./correction-vs-drift) — when fixing errors costs more
  than letting them propagate

## Why It Matters

System drift is the failure mode where a knowledge system stabilizes around an
"approximately maintained" false steady state. Errors persist because correction
is expensive; AI-generated content contaminates the training data; and the
system gradually loses contact with ground truth.

[Encyclopedia Meltdown](./encyclopedia-meltdown) is the extreme form: when AI
takes the initiative of writing, the
[responsibility line](./responsibility-line) disappears, and the system drifts
toward self-referential collapse. The defense is the
[epistemic protocol layer](./epistemic-protocol-layer): keeping correction
cheaper than drift through [traceability](./traceability),
[zero-trust ingestion](./zero-trust-ingestion), and
[rebuttal-first search](./rebuttal-first-search).

## Related

- [Drift Phenomena](./drift-phenomena) — the parent category
- [Semantic Drift](./semantic-drift) — when meanings change
- [Environmental Drift](./environmental-drift) — when the world changes
- [Institutional Brain Rot](./institutional-brain-rot) — organizational analog

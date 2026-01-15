---
title: Unanimity Requirement
description: Rule that claims are accepted only when all reviewers agree
---

The unanimity requirement is the rule in the
[Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) that
[claims](./claim) are accepted only when all participating AI systems agree.
Disagreement among models is treated as a signal for closer inspection, not as
noise to be averaged away.

Unanimity is not a proof of truth; models share training data and can converge
on correlated failures. But disagreement is a low-cost signal that something may
be wrong. The unanimity requirement forces explicit handling of uncertainty
rather than letting a majority override a dissent.

The trade-off is that unanimity can push writing toward hedging and
lowest-common-denominator conclusions. The protocol compensates by requiring
that uncertainty remain explicit rather than being smoothed into vague language.

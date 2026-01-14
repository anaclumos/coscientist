---
title: Graph-Based Spaced Repetition
description: Using claim age or rebuttal-age to trigger re-verification
---

Graph-based spaced repetition applies [spaced repetition](./spaced-repetition) principles to knowledge maintenance: [claims](./claim) that have not been verified recently, or whose supporting evidence has not been challenged in a while, are surfaced for re-examination.

The insight is that knowledge, like memory, decays without active engagement. A claim verified three years ago may no longer hold if the world has changed ), if definitions have shifted ), or if new [counterexamples](./counterexample) have emerged.

In a [Dialectical Graph](./dialectical-graph), this can be implemented by tracking the last verification timestamp for each claim and its supporting paths. The [Operator](./operator) is prompted to re-verify claims on a schedule, with intervals expanding for robust claims and contracting for contested ones.

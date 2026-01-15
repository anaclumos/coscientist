---
title: Counterexample
description: A case that breaks or narrows a claim
---

A counterexample is a case that violates the prediction of a [claim](./claim),
forcing either rejection or narrowing of [scope](./scope). It is a specific kind
of [attack](./attack): not an argument that the claim is wrong in general, but
evidence that it fails in a particular instance.

Counterexamples are epistemically powerful because they are concrete. A single
well-documented counterexample can outweigh many confirming instances,
especially if the claim was stated as universal. This is why
[rebuttal-first search](./rebuttal-first-search) and
[counterexample-first search](./counterexample-first-search) prioritize finding
them early.

In a [Dialectical Graph](./dialectical-graph), counterexamples are nodes
connected to claims via an `attacks` edge. They carry their own
[evidence spans](./evidence-span), [scope](./scope), and [source](./source), so
the attack can itself be scrutinized.

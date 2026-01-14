---
title: Claim
description: A verifiable proposition stored as a node in a dialectical graph
---

A claim is a verifiable proposition extracted from text and stored as a first-class object in a [Dialectical Graph](./dialectical-graph). Claims are not raw sentences; they are normalized statements with explicit [scope](./scope), [assumptions](./assumption), and [method](./method) dependencies.

Claims can be linked to [evidence spans](./evidence-span) that support them, [counterexamples](./counterexample) that narrow them, [attacks](./attack) that challenge them, and [undercuts](./undercut) that question their grounds. This relational structure enables knowledge to update through rebuttal rather than replacement.

Every claim has a status ): it may be tentative, contested, conditionally supported, robust, refuted, or obsolete. The status changes based on the type of rebuttal, not the number, and it can regress if the supporting structure weakens.

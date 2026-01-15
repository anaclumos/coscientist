---
title: Method-Conclusion Coupling
description: Analysis pattern clustering claims by method rather than conclusion
---

Method-conclusion coupling is an analysis pattern that clusters
[claims](./claim) by the [method](./method) that produced them rather than by
the conclusion they reach. The insight is that different conclusions can share
the same flaw, and identical conclusions can rest on very different grounds.

If three studies use the same flawed methodology and reach the same conclusion,
that is not strong evidence; it is correlated failure. Conversely, if two
studies use independent methods and reach the same conclusion, that is stronger
than three studies using one method.

This pattern supports
[replication path separation](./replication-path-separation): asking whether
apparent agreement comes from independent evidence or from repeated use of the
same approach. In [Coscientist](./coscientist), it is implemented as a
specialized agent for clustering claims by method.

---
title: Zero-Trust Ingestion
description: Protocol requiring explicit provenance before accepting claims
---

Zero-trust ingestion is a protocol that treats incoming information as
unverified by default. Every [claim](./claim) must carry explicit
[provenance](./provenance) and pass through [verification](./verification)
before gaining authority in the knowledge system.

The name borrows from zero-trust security: assume nothing is safe until proven.
In practice, this means new claims enter with `tentative` status, must be
traceable to [sources](./source) and [evidence spans](./evidence-span), and
should be exposed to [rebuttal-first search](./rebuttal-first-search) before
being treated as established.

Zero-trust ingestion is a defense against [AI slop](./ai-slop) and
[Encyclopedia Meltdown](./encyclopedia-meltdown). When the environment is
flooded with plausible but unverified content, the only safe posture is to
require proof of origin and survive challenges before acceptance.

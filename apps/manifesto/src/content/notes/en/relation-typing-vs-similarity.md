---
title: Relation Typing vs Similarity
description: Why typed edges solve what similarity-based retrieval cannot
---

Relation typing vs similarity contrasts two approaches to connecting knowledge: similarity-based retrieval ) asks "what is this about?" while relation-typed graphs ) ask "what does this do to that?"

Similarity retrieval surfaces documents that use similar words. It cannot tell you whether those documents agree, conflict, or address different questions. Typed edges—[supports](./dialectical-graph-edges), [attacks](./attack), [undercuts](./undercut), [cites](./source)—capture the argumentative relationship, enabling questions like "what challenges this claim?" or "what assumptions does this depend on?"

This distinction is critical for [knowledge synthesis](./knowledge-synthesis). If you retrieve two sources that "seem related" but cannot tell whether they agree or conflict, synthesis collapses into summarization. Typed edges make conflict an explicit object that can be mapped, resolved, or recorded.

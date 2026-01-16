Coscientist is a cognitive exoskeleton designed to

1. Preserve knowledge sovereignty.
2. Make contradictions visible.
3. Link every claims to evidence, source, method.
4. Seek counterevidence first, not sycophanting.
5. Work across languages.
6. Support verification habits
7. Scale from personal to institutional
8. un-brain-rot in a post-AI world

# Coscientist

Coscientist is an open-source intellectual companion system for knowledge production in the post-AI era. Inspired by Isaac Asimov's fictional Encyclopedia Galactica, it goes beyond being a mere knowledge repository. It's designed to be an active thinking partner that performs "contemplation labor" alongside its human user (called the "Operator").

The core problem it solves... **Tokens ≠ Knowledge**. In a world flooded with AI Slops, traditional knowledge systems collapse because:

- LLMs produce fluent text that sounds right but may be unverifiable
- Links become trust badges instead of verification pathways
- The "responsibility line" (who asserted what, on what grounds) disappears
- Human verification degenerates into passive acceptance

This collapse scenario is called [Encyclopedia Meltdown](https://coscientist.app/manifesto/encyclopedia-meltdown).

## Core Architecture: The Dialectical Graph

Unlike traditional RAG that treats documents as undifferentiated text, Coscientist maintains a Dialectical Graph (a knowledge graph that stores argumentative structure).

### Triple Separation Principle

1. Evidence Spans: exact quoted text preserved verbatim (the raw data)
2. Claims: normalized propositions decomposed from text
3. Relations: explicit argumentative bindings between claims

### Node Types

- Claims: verifiable propositions
- Scopes: conditions of applicability
- Assumptions: implicit premises
- Methods: procedures that generate evidence
- Data: measurements/results
- Counterexamples: cases that break or narrow claims
- Issue Nodes: bundles of colliding claim clusters

### Edge Types (Typed Relations, not Similarity Scores)

- Support: supports, cites, defines
- Challenge: attacks, undercuts, contradicts
- Refinement: refines, generalizes, specializes
- Replication: replicates, fails_to_replicate

This structure enables asking "how does X bear on Y?" rather than just "are these about the same topic?"

## System Layers

1. Data Layer
  - Evidence spans (raw quotes)
  - Sources (provenance anchors for traceability)
2. Inference Layer
  - The living, evolving network of claims and relations
  - Claims with multi-dimensional status (not just confidence scores)
3. Narrative Layer
  - Human-readable projections of the graph
  - Documents as timestamped snapshots, NOT ground truth
  - Every sentence can backtrack through: claim → scope → assumption → method → data → evidence span → source
4. Protocol Layer (Epistemic Protocol)
  - Rules for how claims enter and gain authority
  - Knowledge Constitution: the governing document for knowledge operations
  - Sovereignty, traceability, and rebuttal-first validation

## Key Mechanisms

### Adversarial-by-Default Exploration

When a claim enters the graph, the system's default posture is adversarial—seek attacks and undercuts early:

- Counterexample-First Search: popularity is a risk signal; prioritize finding what breaks claims
- Rebuttal-First Search: seek counterevidence before acceptance
- Minimum Cut: isolate the minimal structure producing a contradiction
- Definition Drift Detection: detect when terms shift meaning over time
- Method-Conclusion Coupling: cluster claims by method to find shared flaws

### Multi-AI Consensus Protocol ("1+4")

One human Operator coordinates multiple AI assistants.

- Accept revisions only with unanimity
- Keep uncertainty explicit (don't smooth away disagreement)
- Require traceable provenance for all claims
- Run deliberate rebuttal search, not confirmatory search

### Knowledge Synthesis (Not Averaging)

When sources conflict, the system doesn't average—it aligns premises, definitions, and scope to make disagreements explicit objects. Produces:

- Branched Resolution Maps. If different definitions lead to different conclusions, record the branching
- Issue Clusters. What conflicts with what, and resolution conditions

### Cross-Linguistic Synthesis

Because it uses LLMs, Coscientist can read and synthesize literature in any language, creating a truly multilingual knowledge mesh. Language becomes metadata, not a boundary.

## The Human Operator's Role

The Operator is the human sovereign over knowledge—guardian-architect of an Encyclopedia Galactica. Key responsibilities:

- Maintain cognitive sovereignty. Control over judgment and verification
- Coordinate multi-model deliberation when stakes are high
- Exercise veto power
- Focus human attention on the "minimum contradiction set" rather than sentence labor
- Build habits of verification. The system cannot compensate for treating fluency as truth
  AI does contemplation labor. The Operator does verification.

## Learning Science Integration

Coscientist integrates evidence-based learning principles.

- Active Recall: studying by retrieving from memory
- Spaced Repetition: claims that haven't been verified recently get surfaced for re-examination
- Verification as Retrieval Practice: verification strengthens memory
- Dialectical Interleaving: mixing competing claims improves discrimination
- Desirable Difficulty: making verification effortful maintains engagement
  This combats illusions of competence—false mastery from passive familiarity with AI output.

## Interface: The Monolith Metaphor

The UI is inspired by Kubrick's Monolith from 2001: A Space Odyssey—mysterious vertical slabs that catalyze cognitive evolution.
Visual Language

- Sliding panes that stack horizontally like Monoliths in a row
- Each pane is a self-contained slab of knowledge
- When space runs out, panes collapse to thin vertical spines (like book spines)
- 1:4:9 proportions (1², 2², 3²) in spacing ratios
- Monochrome foundation with opacity gradations suggesting depth

## Interaction Model

- Click a link → opens new pane to the right
- Preserves context. Trace your path backward through the stack
  The Monolith doesn't answer directly—it creates conditions where understanding emerges through exploration and dialectical engagement.

## Federated Knowledge Network

A network of interconnected Coscientist instances at personal, organizational, and public scales.

- Each node maintains its own Dialectical Graph and sovereignty
- Federation provides sharing without surrendering control
- Zero-trust ingestion. Imported claims must carry provenance and pass local verification
- Enables a global multilingual knowledge mesh where validated knowledge crosses language boundaries

## What Coscientist Is NOT

| Traditional AI             | Coscientist                                      |
| -------------------------- | ------------------------------------------------ |
| Q&A answer engine          | Intellectual companion                           |
| Optimizes for finality     | Optimizes for exploration                        |
| Smooth, fluent summaries   | Explicit contradictions and contentions          |
| Treats text as knowledge   | Treats text as packaging; structure is knowledge |
| Similarity-based retrieval | Relation-typed edges                             |
| AI declares truth          | Operator verifies; AI proposes                   |

It's not an AI that answers your questions. It's an AI that thinks alongside you while you remain the author of your knowledge.

## Services

| Service            | Link                                                                          | Purpose                     |
| ------------------ | ----------------------------------------------------------------------------- | --------------------------- |
| Vercel             | [Control Panel](https://vercel.com/coscientist)                               | Infrastructure & Deployment |
| Convex             | [Control Panel](https://dashboard.convex.dev)                                 | Database & Realtime         |
| Resend             | [Control Panel](https://resend.com/emails)                                    | Email                       |
| PostHog            | [Control Panel](https://us.posthog.com/project/290906)                        | Analytics                   |
| Greptile           | [Control Panel](https://app.greptile.com/)                                    | AI Code Search              |
| Cubic              | [Control Panel](https://www.cubic.dev/dashboard?repo=1132185124)              | AI Code Review              |
| Capy               | [Control Panel](https://capy.ai/project/7876ccb3-99c4-43b0-8eae-06598c25449e) | AI Code Review              |
| ChatGPT Codex      | [Control Panel](https://chatgpt.com/codex)                                    | AI Coding Agent             |
| Cursor BugBot      | [Control Panel](https://cursor.com/dashboard)                                 | AI Bug Detection            |
| Gemini Code Assist | [Control Panel](https://cloud.google.com/products/gemini/code-assist)         | AI Code Assistant           |

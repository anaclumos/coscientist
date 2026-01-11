"use client";

import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Pacifico } from "next/font/google";
import Link from "next/link";

import { HighlightPopover } from "@/components/highlight-popover";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";
import { Separator } from "@/components/ui/separator";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export default function DialecticalGraphPage() {
  return (
    <article className="min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8">
      <Frame className="w-full max-w-3xl my-8">
        <FramePanel>
          <div className="flex items-start justify-between mb-6">
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                Building Thinking Computers
              </FrameTitle>
              <FrameDescription>
                The Dialectical Graph: Beyond retrieval, toward reasoning
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className="space-y-6">
            <Separator />

            <p>
              As mentioned in{" "}
              <Link
                href="/meltdown-protocol"
                className="text-blue-500 hover:underline"
              >
                the Meltdown Protocol
              </Link>
              , using AI in writing is each Galarch's choice; it is not
              something the editor should mandate. Therefore, the editor should
              discuss AI for contemplation rather than AI for writing.
              Traditional editors use AI at the level of Q&A.{" "}
              <Link href="/" className="text-blue-500 hover:underline">
                Coscientist
              </Link>{" "}
              is not only about capturing knowledge about a target object; it is
              also a system for discovering new connections and producing
              meaningful inference.
            </p>

            <p>
              Based on the object's documents and records, it tirelessly
              searches for new approaches, discovering methods that span
              agreements, grounds, and contradictions across documents.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Limits of RAG
            </h2>

            <p>
              Current AI covers the comprehension layer, but it has major
              problems in the reasoning layer. If one analyzes a standard RAG
              system with scientific rigor, it cannot produce genuine scientific
              discovery.
            </p>

            <Alert variant="warning" className="my-6">
              <AlertTitle>Limits of RAG</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-6 mt-3 space-y-3">
                  <li>
                    <strong>Quantitative bias.</strong> RAG looks at the number
                    of retrieved results. If there are 100 existing studies
                    claiming X works and 1 innovative recent study showing X was
                    placebo, RAG concludes that X works.
                  </li>
                  <li>
                    <strong>Absence of relations.</strong> RAG retrieves
                    multiple excerpts but cannot understand the relations among
                    them. If study A claims X works and rebuttal study B says X
                    is placebo, RAG cannot represent their relation, and because
                    it only sees excerpts rather than full texts, it may not
                    know whether A rebuts B or B rebuts A.
                  </li>
                  <li>
                    <strong>Unclear provenance.</strong> RAG is weak at clearly
                    binding excerpts to their sources. If paper B says "A
                    claimed X works…" but the excerpt is truncated to only "X
                    works…," RAG will understand it as "B stated that X works."
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            <p>
              RAG replaces the quality of grounds with quantity, cannot model
              argumentative relations among excerpts, and rewrites citations in
              a truncated form. It can retrieve knowledge, but it is weak at{" "}
              <HighlightPopover
                triggerContent="knowledge updating"
                popoverTitle="Knowledge Updating"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    The process of reordering beliefs based on new evidence,
                    particularly through successful rebuttals that change the
                    relative weight of claims.
                  </p>
                }
              />{" "}
              (reordering via rebuttal) and{" "}
              <HighlightPopover
                triggerContent="knowledge synthesis"
                popoverTitle="Knowledge Synthesis"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    The act of cohering conditions, scope, and assumptions
                    across multiple sources to build a unified understanding.
                  </p>
                }
              />{" "}
              (cohering conditions, scope, and assumptions).
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              A Dialectical Graph Model
            </h2>

            <p>
              A Knowledge Graph (KG) or Knowledge Network, studied for a long
              time, partially addresses this. To overcome these issues, the
              system must move from asking "how similar is it" to asking{" "}
              <strong>"what relation is it."</strong>
            </p>

            <p>
              In particular, to prevent the "truth contamination by the
              majority" that sits at the heart of meltdown, the system
              prioritizes the search for contradictions and counterexamples
              rather than consensus. A KG in this direction aims at a
              Dialectical Graph model. A dialectical graph does not store a
              document's content as-is; it extracts and stores the{" "}
              <strong>argumentative acts</strong> performed by the document.
            </p>

            <Alert variant="info" className="my-6">
              <AlertTitle>The Key Principle</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  <strong>Not mistaking text for knowledge.</strong> Text is
                  packaging for evidence; knowledge is a structure in which
                  claims, assumptions, scope, counterexamples, rebuttals,
                  counter-rebuttals, definitions, measurement, methods, data,
                  and more constrain one another.
                </p>
              </AlertDescription>
            </Alert>

            <p>
              The first separation Coscientist should enforce is a{" "}
              <strong>
                triple separation of original text, claims, and relations
              </strong>
              . The original text is preserved as quotable spans; claims are
              decomposed into normalized propositions; relations are expressed
              as argumentative bindings among claims.
            </p>

            <p>
              Standard RAG collects excerpts and stitches them into sentences; a
              dialectical graph isolates excerpts as evidence nodes, then builds
              claim nodes and relation edges above them to separate source,
              meaning, and role. The problem that meaning changes when an
              excerpt is truncated is structurally blocked by never treating the
              excerpt itself as a claim in the first place.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Graph Structure
            </h2>

            <h3 className="text-xl font-semibold pt-2">Nodes</h3>

            <div className="flex flex-wrap gap-2 my-4">
              <Badge variant="outline">claim</Badge>
              <Badge variant="outline">scope</Badge>
              <Badge variant="outline">assumption</Badge>
              <Badge variant="outline">definition</Badge>
              <Badge variant="outline">method</Badge>
              <Badge variant="outline">data</Badge>
              <Badge variant="outline">evidence span</Badge>
              <Badge variant="outline">source</Badge>
              <Badge variant="outline">counterexample</Badge>
              <Badge variant="outline">issue</Badge>
            </div>

            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li>
                <code className="bg-muted px-1 rounded">claim</code>: a
                proposition phrased in a form that can be verified or refuted.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">scope</code>:
                constraints of when, where, and under what conditions.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">assumption</code>:
                implicit assumptions required for the claim to hold.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">definition</code>: how a
                term or concept is used.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">method</code>:
                experimental design, analysis method, proof technique,
                interpretation rule.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">data</code>:
                measurements, corpora, experimental results, proven theorems'
                inputs.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">evidence span</code>:
                the exact range of the source quotation.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">source</code>: paper,
                book, record, interview, dataset, code repository.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">counterexample</code>: a
                case that breaks a claim or narrows its conditions.
              </li>
              <li>
                <code className="bg-muted px-1 rounded">issue</code>: a bundle
                of specific claim clusters that collide.
              </li>
            </ol>

            <h3 className="text-xl font-semibold pt-4">
              Edges (Relation Types)
            </h3>

            <div className="flex flex-wrap gap-2 my-4">
              <Badge>supports</Badge>
              <Badge>attacks</Badge>
              <Badge variant="destructive">undercuts</Badge>
              <Badge variant="secondary">refines</Badge>
              <Badge variant="secondary">generalizes</Badge>
              <Badge variant="secondary">specializes</Badge>
              <Badge variant="outline">depends_on</Badge>
              <Badge variant="outline">defines</Badge>
              <Badge variant="outline">measures</Badge>
              <Badge variant="outline">cites</Badge>
              <Badge variant="info">replicates</Badge>
              <Badge variant="error">fails_to_replicate</Badge>
              <Badge variant="warning">contradicts</Badge>
              <Badge variant="outline">is_about</Badge>
            </div>

            <Alert variant="info" className="my-6">
              <AlertTitle>
                Why <code className="bg-muted px-1 rounded">undercuts</code>{" "}
                matters
              </AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  In particular,{" "}
                  <code className="bg-muted px-1 rounded">undercuts</code> is an
                  area standard RAG can barely handle. It must represent not
                  "the conclusion is wrong," but "the method, assumption, or
                  definition that supports the conclusion is undermined,"
                  because only then can knowledge update.
                </p>
                <p className="mt-2">
                  The direct effect of this structure is the removal of
                  provenance ambiguity. In a situation where B cites A while
                  mentioning that X works, an excerpt can be truncated so it
                  looks like B's claim. Once the evidence node carries the
                  source and exact span, the claim node separately records who
                  asserted what, and the{" "}
                  <code className="bg-muted px-1 rounded">cites</code> edge
                  explicitly represents B→A, that error disappears.
                </p>
              </AlertDescription>
            </Alert>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Contradiction-First Search
            </h2>

            <p>
              The second key is a search bias that prioritizes contradictions
              and counterexamples rather than consensus. Majority vote does not
              guarantee knowledge quality. A single counterexample, a single
              rebuttal, or a single definition revision at a turning point often
              contains more information than hundreds of repeated statements.
            </p>

            <p>
              A dialectical graph structurally privileges that information. When
              a claim node is created, the system's default behavior is not to
              gather supporting grounds, but to{" "}
              <HighlightPopover
                triggerContent="maximize attacking edges"
                popoverTitle="Adversarial Knowledge Building"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    Rather than seeking confirmation, the system actively hunts
                    for refutations. This is not negativity—it is the scientific
                    method formalized into graph operations.
                  </p>
                }
              />
              . When a counterexample attaches, the claim is not discarded; it
              is conditioned. "Always true" descends to "true under conditions."
              "Mostly true" decomposes into "true under sample constraints."
            </p>

            <p>
              What is required here is not merely a KG, but computational rules
              coupled with argumentation theory. Coscientist cannot settle for
              simply deciding winners and losers of arguments. Attack types must
              differ, and the reasons an attack failed must also be stored.
              Rebuttals are often invalidated by definition mismatch,
              out-of-scope application, measurement mismatch, methodological
              defects, replication failure, and the like. This invalidation must
              be recorded as edges in the argument graph.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Quality Over Quantity
            </h2>

            <p>
              The third key is an evaluation axis that does not replace quality
              with quantity. Standard RAG's 100-to-1 problem begins the moment
              one decides conclusions by counting search results. A dialectical
              graph stores quality dimensions separately for each piece of
              evidence.
            </p>

            <p>
              Method fit, data size and bias, reproducibility, independent
              verification, the existence of subsequent rebuttals, the stability
              of definitions, and measurement reliability are independent axes.
              If they are collapsed into a single weighted sum, the system
              regresses into majority-vote logic.
            </p>

            <p>Instead, claim status must be multi-dimensional. For example:</p>

            <div className="flex flex-wrap gap-2 my-4">
              <Badge variant="outline">tentative</Badge>
              <Badge variant="warning">contested</Badge>
              <Badge variant="info">conditionally supported</Badge>
              <Badge variant="success">robust</Badge>
              <Badge variant="destructive">refuted</Badge>
              <Badge variant="secondary">obsolete</Badge>
            </div>

            <p>
              State transitions are driven not by the number of rebuttals, but
              by the type of rebuttal and whether it succeeds.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              AI Agents for Contemplation
            </h2>

            <p>
              At that point, Coscientist gains a role as a contemplation
              companion. In writing, AI replaces sentence labor; in
              contemplation, AI moves the graph. The core work of contemplation
              is:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>AI agent for claim normalization</li>
              <li>AI agent for extracting hidden assumptions</li>
              <li>AI agent for detecting definition conflicts</li>
              <li>AI agent for searching counterexamples</li>
              <li>AI agent for minimizing argumentative paths (minimum cut)</li>
              <li>AI agent for reconstructing conditions and scope</li>
              <li>AI agent for generating alternative hypotheses</li>
              <li>
                AI agent for designing empirical formats and verification
                strategies
              </li>
            </ol>

            <Alert variant="info" className="my-6">
              <AlertTitle>AI that makes documents collide</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  Not an AI that summarizes documents, but an AI that{" "}
                  <strong>makes documents collide</strong>. Discovery comes from
                  mismatch.
                </p>
              </AlertDescription>
            </Alert>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Knowledge Synthesis
            </h2>

            <p>
              Standard RAG is strong at retrieval and weak at synthesis because
              it has no internal object called <strong>contention</strong>. In a
              dialectical graph, contention is a first-class citizen. Issue
              nodes bundle what conflicts with what, and they record the
              conditions under which the issue can be resolved.
            </p>

            <p>
              When A and B are incompatible, the system does not merely list
              both; it decomposes the cause of incompatibility into definition
              differences, sampling differences, method differences, scope
              differences, time-driven nonstationarity, and so on. Resolution is
              not a single answer; it appears as a branched map.
            </p>

            <p>
              If the same term X yields different conclusions under different
              definitions, the system first records the branching of definition
              before treating it as a contradiction in conclusion. This enables
              synthesis.{" "}
              <HighlightPopover
                triggerContent="Synthesis is not averaging"
                popoverTitle="True Synthesis"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    Synthesis is aligning premises and scope by translating them
                    into the same coordinate system. It requires understanding
                    why sources disagree before attempting to reconcile them.
                  </p>
                }
              />
              ; it is aligning premises and scope by translating them into the
              same coordinate system.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Meltdown Prevention via Graph Architecture
            </h2>

            <p>
              A graph-based system prevents meltdown by separating two layers:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>First, the inference layer</strong> is the truth graph
                itself.
              </li>
              <li>
                <strong>Second, the narrative layer</strong> is a projection of
                the truth graph at a specific time.
              </li>
            </ul>

            <p>
              A document is not final truth, but a snapshot of the graph. Every
              sentence in a document must be able to backtrack to a path in the
              graph, and each sentence must have a grounds path. That path is
              not a simple bibliography; it is a chained structure that runs
              through claim, assumption, method, data, evidence span, and
              source.
            </p>

            <Alert variant="error" className="my-6">
              <AlertTitle>The Rule</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  <strong>
                    Without this chain, a sentence is just a sentence, not
                    knowledge.
                  </strong>{" "}
                  This single rule blocks the main channel of meltdown, where AI
                  replaces compilation by producing smooth sentences in bulk.
                </p>
              </AlertDescription>
            </Alert>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Exploration Strategies
            </h2>

            <p>
              However, what Coscientist requires is an engine that continuously
              searches for new approaches. For that, the graph needs exploration
              strategies:
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Counterexample-first search.</strong>
                <p className="text-muted-foreground mt-1">
                  Popularity is treated not as evidence of quality, but as
                  evidence of risk. The more frequently a claim is cited, the
                  more the system prioritizes collecting its counterexamples and
                  boundary conditions, because contamination from popular claims
                  has larger blast radius.
                </p>
              </li>
              <li>
                <strong>Contradiction minimum-cut search.</strong>
                <p className="text-muted-foreground mt-1">
                  When claim sets conflict, find the minimal set of edges and
                  premises that produce the conflict. That minimal set becomes
                  the target of contemplation. Human time must be invested in
                  the minimum contradiction set. AI handles broad search,
                  candidate generation, and minimum-cut computation; humans
                  judge the legitimacy of definitions and premises.
                </p>
              </li>
              <li>
                <strong>Definition drift detection.</strong>
                <p className="text-muted-foreground mt-1">
                  When the meaning of the same term shifts subtly across time,
                  schools, or fields, the graph records changes in definition
                  nodes and moves old documents' claims into a meaning-loss
                  state. This counters RAG's most common error: assuming the
                  same word implies the same concept.
                </p>
              </li>
              <li>
                <strong>Method–conclusion coupling verification.</strong>
                <p className="text-muted-foreground mt-1">
                  Cluster claim groups around methods rather than conclusions.
                  Different conclusions can share the same flaw, and identical
                  conclusions can have different strengths of grounds. This
                  moves toward a model in which knowledge quality depends not on
                  the direction of a conclusion, but on the durability of the
                  path that produced it.
                </p>
              </li>
              <li>
                <strong>Replication path separation.</strong>
                <p className="text-muted-foreground mt-1">
                  Support is computed not by repeating the same conclusion, but
                  by whether the conclusion was reached through{" "}
                  <strong>independent paths</strong>. The same dataset, the same
                  code, the same lab, or the same theoretical assumptions count
                  as a single path. This is a graph-level mechanism for removing
                  the illusion of majority vote.
                </p>
              </li>
            </ol>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Editor's Role
            </h2>

            <p>
              On a dialectical graph with these operating principles, the
              contemplation AI of Coscientist does not simply output answers.
              Instead, it produces issues, refines conditions, structures
              rebuttals, and creates a coordinate system that can be
              synthesized. Inter-document agreement arrives as a byproduct, not
              as the goal.
            </p>

            <p>
              The goal is a <strong>map of contradictions</strong> and an
              explicit statement of resolution conditions. The more this map is
              secured, the more future research or records can update knowledge
              by rearrangement rather than rewriting.
            </p>

            <p>
              Finally, this clarifies the editor's role. If AI takes initiative
              over writing, that is meltdown; but{" "}
              <HighlightPopover
                triggerContent="if the editor maintains initiative over contemplation"
                popoverTitle="The Editor as Structure Supervisor"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    The editor's job shifts from writing sentences to overseeing
                    the structural integrity of the knowledge graph. They become
                    a supervisor of arguments, not a producer of prose.
                  </p>
                }
              />{" "}
              and uses AI as a tool for contemplation, the editor is freed from
              sentence labor and becomes a supervisor of structure.
            </p>

            <p>
              In that state, Coscientist can successfully prevent meltdown, and
              it can be operated not as a collection of documents, but as an{" "}
              <strong>ecosystem of arguments</strong>.
            </p>
          </div>
        </FramePanel>
        <FrameFooter>
          <div className="flex justify-between w-full items-center">
            <Link
              href="/meltdown-protocol"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
              <span>The Meltdown Protocol</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              &copy; 2026 Coscientist
            </p>
          </div>
        </FrameFooter>
      </Frame>
    </article>
  );
}

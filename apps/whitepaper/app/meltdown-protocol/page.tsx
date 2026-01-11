"use client";

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Pacifico } from "next/font/google";
import Link from "next/link";

import { HighlightPopover } from "@/components/highlight-popover";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default function MeltdownPage() {
  return (
    <article className="min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8">
      <Frame className="w-full max-w-3xl my-8">
        <FramePanel>
          <div className="flex items-start justify-between mb-6">
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                The Meltdown Protocol
              </FrameTitle>
              <FrameDescription>
                Preventing knowledge collapse in the age of synthetic text
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className="space-y-6">
            <Separator />

            <p>
              In writing and operating{" "}
              <HighlightPopover
                triggerContent="Coscientist"
                popoverTitle="Coscientist"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    The Encyclopedia Galactica—an always-on AI service for calm
                    verification, knowledge sovereignty, and ScienceOps.
                  </p>
                }
              />{" "}
              (Encyclopedia Galactica), what the Galarch (銀河主) must be most
              wary of is <strong>Encyclopedia Meltdown</strong>.
            </p>

            <Alert variant="error" className="my-6">
              <AlertTitle>Encyclopedia Meltdown</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  "Encyclopedia Meltdown" is a knowledge-collapse phenomenon
                  that begins when the initiative and control of writing
                  transfers entirely to AI, without the Galarch's conscious
                  intervention.
                </p>
              </AlertDescription>
            </Alert>

            <p>
              Encyclopedia Meltdown makes the act of writing meaningless, and it
              lets hallucination square itself without verification, driving
              errors and contradictions into runaway growth. Soon, even minor
              errors are no longer isolated hallucinations in a single answer;
              they become contamination that propagates through
              self-amplification across the entire knowledge network.
            </p>

            <p>
              Because an encyclopedia is a mechanism in which{" "}
              <HighlightPopover
                triggerContent="links themselves manufacture trust"
                popoverTitle="The Authority of Links"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    In knowledge networks, internal links function not as mere
                    navigation aids but as implicit endorsements. A link from
                    one article to another creates the impression that both are
                    trustworthy—even when neither has been verified.
                  </p>
                }
              />
              , once it is contaminated, the contamination is repackaged as
              authority. Finally, the line of responsibility—what was written on
              what grounds—becomes vague. The result is a catastrophic state in
              which the entire encyclopedia degenerates into a meaningless heap
              of low-grade data, fully losing its function and credibility as a
              knowledge repository.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Defense Against Meltdown
            </h2>

            <p>
              <Link href="/" className="text-blue-500 hover:underline">
                Coscientist
              </Link>{" "}
              aims to be more than an ark of information; it aims to be an{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Multivac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                intellectual companion that expands knowledge and contemplation
                together with the Galarch
              </Link>
              . Above all, Coscientist is a system for{" "}
              <HighlightPopover
                triggerContent="Un-Brain-Rotting"
                popoverTitle="Un-Brain-Rotting"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    The deliberate practice of maintaining cognitive autonomy in
                    an era where AI can produce infinite plausible-sounding
                    content. It is the discipline of keeping the muscles of
                    judgment in use.
                  </p>
                }
              />{" "}
              our minds in the post-AI era.
            </p>

            <p>
              Guarding against Encyclopedia Meltdown is a philosophical
              defensive line and the first principle of system design:{" "}
              <strong>
                sovereignty over knowledge must remain with the Galarch
              </strong>
              . Once the attitude "it must be right because the encyclopedia
              linked it" takes hold, human contemplation degenerates from
              verification into mere ratification.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Protocol
            </h2>

            <p>
              Of course, using AI in writing is each Galarch's choice, not
              something to be imposed by the editor as a rule. Therefore, the
              following basic agreements can be considered:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>
                  Encyclopedia writing is always carried out as a team of five.
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>This means the Galarch plus four mainstream AIs.</li>
                  <li>
                    As of December 2025, these are ChatGPT, Gemini, Claude, and
                    Grok.
                  </li>
                  <li>Each statement and each revision must be unanimous.</li>
                  <li>
                    Depending on the Galarch's disposition, one could use
                    persona prompts rather than the four mainstream AIs.
                  </li>
                  <li>Each AI operates its own independent memory.</li>
                </ul>
              </li>
              <li>
                <strong>
                  Uncertainty in writing must be explicitly stated and tracked.
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Metadata (such as notes) must be traceable at the unit of
                    assertion.
                  </li>
                  <li>
                    Whether the "unit" here is a sentence, a paragraph, or a
                    document is a separate design choice.
                  </li>
                  <li>
                    For example: "This sentence is weakly reliable because …"
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  In all actions, rebuttal must be intentionally sought.
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>This is the most basic brake against meltdown.</li>
                </ul>
              </li>
              <li>
                <strong>Training in posing questions is required.</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>This is a matter of culture, not a matter of systems.</li>
                </ul>
              </li>
            </ul>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Deliberation Process
            </h2>

            <p>
              Stated this way it may be confusing, so to make it easier to
              understand, I reviewed the text above using a Galarch + 4-AI
              system.
            </p>

            <div className="space-y-4 my-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-success-foreground">
                    Gemini 3 Pro: Approved
                  </CardTitle>
                  <CardDescription>
                    Structural friction that forces human cognitive intervention
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    First, the crisis diagnosis is accurate. "Encyclopedia
                    Meltdown" aligns with the "model collapse" theory discussed
                    in AI research: when synthetic data overwhelms original
                    data, statistical tails vanish and the model drifts away
                    from reality.
                  </p>
                  <p>
                    Second, the 1+4 (human + four AIs) consensus protocol is a
                    strategy that secures sovereignty by sacrificing efficiency.
                    By stripping away speed and convenience, it makes the human
                    Galarch function not as a "final approver," but as an
                    "intense coordinator."
                  </p>
                  <p>
                    In conclusion, this design is not a tool for information
                    accumulation, but a training protocol for the rehabilitation
                    and preservation of human intelligence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">
                    Claude 4.5 Opus: Objection in intent
                  </CardTitle>
                  <CardDescription>
                    The diagnosis is valid, but the remedy undermines the
                    project's own purpose
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    The diagnosis is sound. The insight "links become authority"
                    is the core.
                  </p>
                  <p>
                    <strong>However, the remedy is flawed.</strong> A four-model
                    AI consensus approach is false diversity. ChatGPT, Gemini,
                    Claude, and Grok all arise from overlapping training data
                    and therefore share the same biases and blind spots. Their
                    agreement is not an indicator of truth; it reflects the
                    convergence point of their shared training data.
                  </p>
                  <p>
                    The very process of four-model deliberation can further
                    atrophy human cognition, because verification gets replaced
                    by "confirming agreement."
                  </p>
                  <Alert variant="info" className="mt-4">
                    <AlertTitle>Editor's Note</AlertTitle>
                    <AlertDescription className="text-sm">
                      <p className="mt-2">
                        The claim about false diversity is already refuted by
                        the fact that Claude has submitted an opinion in the
                        opposing direction. One simply needs sufficiently
                        precise writing so that even a counterintuitive correct
                        answer can be accepted by all five participants.
                      </p>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-warning-foreground">
                    ChatGPT 5.2 Pro: On hold
                  </CardTitle>
                  <CardDescription>
                    Sound principles, but adoption premature until rules are
                    fixed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    The core warning of the text is valid: when the automation
                    of knowledge production crosses a threshold, the production
                    act itself no longer guarantees trust; instead, it becomes
                    an amplifier that destroys trust.
                  </p>
                  <p>
                    Yet inter-model agreement is not a surrogate for truth.
                    Modern models share training data and alignment norms and
                    tend to converge on "safe" expression, which can produce
                    correlated failure. The more agreement there is, the more
                    "confidence in a shared bias" may be reinforced.
                  </p>
                  <p>
                    There is also a structural risk that unanimity suppresses
                    "strong claims" and induces "inoffensive sentences."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-success-foreground">
                    Grok 4 Heavy: Approved
                  </CardTitle>
                  <CardDescription>
                    Multi-AI consensus keeps knowledge sovereignty with the
                    human
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Strengths:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Forces cross-verification by requiring unanimity among the
                      human and four AI models.
                    </li>
                    <li>
                      Blocks uncontrolled propagation of error by explicitly
                      marking and tracking uncertainty as metadata.
                    </li>
                    <li>
                      Embeds critical review into procedure by intentionally
                      searching for counterarguments.
                    </li>
                  </ul>
                  <p className="mt-3">
                    <strong>Weaknesses:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Depends on a "mainstream AI set" as of 2025, which risks
                      becoming outdated.
                    </li>
                    <li>
                      Assumes the human veto is sufficient, but underestimates
                      the possibility that an AI ensemble can overwhelm human
                      judgment.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p>
              Therefore, with{" "}
              <strong>2 approvals, 1 objection, and 1 hold</strong>, this is a
              post that needs reinforcement.
            </p>

            <Alert variant="info" className="my-6">
              <AlertTitle>The Intent</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  At this point the workflow should be clearer. This is the
                  intent: to build a <strong>thinking system</strong> that
                  tracks uncertainty in statements.
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </FramePanel>
        <FrameFooter>
          <div className="flex justify-between w-full items-center">
            <Link
              href="/terminus"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
              <span>Terminus</span>
            </Link>
            <Link
              href="/thinking-computers"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Thinking Computers</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </Link>
          </div>
        </FrameFooter>
      </Frame>
    </article>
  );
}

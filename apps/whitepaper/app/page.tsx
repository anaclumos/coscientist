'use client'

import { HighlightPopover } from '@/components/highlight-popover'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FramePanel,
  FrameTitle,
} from '@/components/ui/frame'
import { Separator } from '@/components/ui/separator'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
})

const FootnoteContent = {
  1: (
    <p className='text-muted-foreground leading-relaxed'>
      Always-on can mean computational (keeps working without prompts) or
      psychological (competing for attention via notifications and nudges).
      Coscientist is the former, not the latter. An epistemic tool that competes
      for attention will eventually compete for belief. Inspired by Mark
      Weiser's calm technology: recede to the periphery, move to center only
      when needed. Compute more, demand less.
    </p>
  ),
  2: (
    <>
      <p className='text-muted-foreground leading-relaxed'>
        When writing becomes cheap, humans naturally substitute produced
        something for understood something. This is not moral failure; it is
        cognitive economics. If the environment offers a low-cost substitute for
        a high-cost act (verification), most people drift toward the substitute,
        especially under time pressure. Coscientist treats this as the central
        design problem. It assumes the default outcome of mainstream AI is not a
        single falsehood, but a behavioral transition: the user stops
        reconstructing reasons and starts accepting coherence. The product must
        be structured so that coherence does not masquerade as justification.
      </p>
    </>
  ),
  3: (
    <p className='text-muted-foreground leading-relaxed'>
      In software, provenance is non-negotiable: version control, build logs,
      SBOMs. Knowledge work needs the same. A responsibility line captures who
      asserted a claim, what sources ground it, what assumptions apply, and what
      uncertainty remains. Without this, errors become diffuse vibes impossible
      to localize. If the line is missing, Coscientist downgrades status
      (knowledge → hypothesis) rather than filling gaps with narrative.
    </p>
  ),
  4: (
    <>
      <p className='text-muted-foreground leading-relaxed mb-2'>
        Meltdown happens when:
      </p>
      <ul className='list-disc pl-6 text-muted-foreground leading-relaxed mb-2'>
        <li>AI becomes the default author</li>
        <li>Internal links create false coherence</li>
        <li>Humans stop verifying and start approving</li>
      </ul>
      <p className='text-muted-foreground leading-relaxed'>
        Small errors get amplified by referencing. The corpus becomes coherent
        but unauditable. Solution: preserve provenance, forbid circular
        elevation, gate escalation behind human verification.
      </p>
    </>
  ),
  5: (
    <>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        Most systems treat disagreement as symmetrical: A says X, B says not-X.
        Real scientific progress often happens through undercutting: showing
        that a premise, method, definition, or measurement invalidates an
        inference even if the conclusion remains psychologically appealing.
      </p>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        This is why Coscientist distinguishes: <em>contradiction</em> (cannot
        both be true), <em>rebuttal</em> (direct opposition to a claim),{' '}
        <em>undercut</em> (attack on the support structure that makes a claim
        persuasive).
      </p>
      <p className='text-muted-foreground leading-relaxed'>
        Argumentation theory has formal models for this (e.g., abstract
        argumentation frameworks), but the core intuition is simple: if the
        support structure is fragile, the conclusion must be treated as fragile
        even before it is proven false.
      </p>
    </>
  ),
  6: (
    <>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        Retrieval-Augmented Generation (RAG) improves grounding by retrieving
        relevant text. But grounding is not the same as reasoning. The failure
        modes that matter for knowledge integrity include:
      </p>
      <ul className='list-disc pl-6 text-muted-foreground leading-relaxed mb-3'>
        <li>
          <em>Quantity bias</em>: many weak sources can drown out a single
          decisive refutation.
        </li>
        <li>
          <em>Relation blindness</em>: retrieved excerpts are not structured
          into supports / undercuts / outdated / different scope.
        </li>
        <li>
          <em>Attribution drift</em>: quotes containing citations can cause
          misattribution (the system treats a quoted claim as the author's
          claim).
        </li>
      </ul>
      <p className='text-muted-foreground leading-relaxed'>
        Coscientist's approach is to treat retrieval as the intake step, not the
        epistemic step. The epistemic step is relation modeling and
        responsibility-line preservation.
      </p>
    </>
  ),
  7: (
    <>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        The ScienceOps posture borrows directly from software operations:
        research outputs must be runnable, comparable, and versioned. Otherwise,
        knowledge cannot compound; it merely accumulates.
      </p>
      <p className='text-muted-foreground leading-relaxed'>
        Coscientist treats papers, code, data, parameters, and results as a
        single artifact family rather than separate stuff. The narrative is not
        the product; the reproducible path is. Coscientist's aim is not to
        replace domain science. It is to provide the infrastructure that makes
        domain science faster to verify and easier to build upon.
      </p>
    </>
  ),
  8: (
    <>
      <p className='text-muted-foreground leading-relaxed'>
        The Medici metaphor is not about money. It is about a pattern: a society
        can accelerate when someone builds the environment where many talented
        people can take more attempts, fail faster, share work, and iterate.
        Coscientist is positioned as that kind of environment, but for the AI
        era: a tool that reduces the cost of verification and the cost of
        reproducible execution, so that the bottleneck returns to human
        imagination and courage rather than bureaucracy and epistemic fog.
      </p>
    </>
  ),
  9: (
    <>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        The line is a joke with boundaries. It signals that the goal is not
        autonomy for its own sake, and not a system that invents goals. The goal
        is a co-worker that:
      </p>
      <ul className='list-disc pl-6 text-muted-foreground leading-relaxed mb-3'>
        <li>
          keeps working when the human is offline (preparing cross-checks,
          surfacing contradictions)
        </li>
        <li>remains accountable to evidence paths (responsibility lines)</li>
        <li>
          waits for human verification before escalating claims to knowledge
        </li>
        <li>
          improves research throughput by tying narrative to execution artifacts
        </li>
      </ul>
      <p className='text-muted-foreground leading-relaxed'>
        In other words: close enough to feel like a co-scientist, not close
        enough to replace the human's role in deciding what is true and what is
        worth doing.
      </p>
    </>
  ),
}

export default function Page() {
  return (
    <article className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Frame className='w-full max-w-3xl my-8'>
        <FramePanel>
          <div className='flex items-start justify-between mb-6'>
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                Coscientist
              </FrameTitle>
              <FrameDescription>
                <HighlightPopover
                  triggerContent='Always-on AI for calm verification, knowledge sovereignty, and ScienceOps'
                  popoverTitle='What is Coscientist?'
                  popoverContent={
                    <p className='text-muted-foreground leading-relaxed'>
                      An always-working, readily-available AI service for
                      knowledge work across personal essay databases, technical
                      notes, engineering design history, and frontier scientific
                      research.
                    </p>
                  }
                />
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>
          <div className='space-y-6'>
            <Separator />

            <p>
              I built my first digital brain for a personal reason. I wanted a
              place where my thoughts could stay alive long enough to matter. I
              wanted ideas to compound instead of evaporate into scattered
              drafts, half-finished notes, and the quiet entropy that follows
              busy weeks.
            </p>

            <p>
              In the beginning, the enemy looked like friction. Too many tools
              asked me to become a librarian of my own life. They made thinking
              feel like filing. So I built a workspace that tried to get out of
              my way. I wrote about next-gen digital brains as an engineering
              problem: reduce overhead, automate structure, let the human remain
              in the state where they can write and connect ideas without
              constant gardening.
            </p>

            <p>
              That chapter mattered. It taught me what continuous capture can do
              when the cost of capture is low. It also taught me what breaks:
              any system that demands too much ceremony will be abandoned, and
              abandoned tools do not compound.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Then the world changed.
            </h2>

            <p>
              Generative AI made writing cheap. Not slightly easier, but
              fundamentally cheap. Cheap enough that the volume of plausible
              text stopped being a sign of intelligence. Cheap enough that the
              center of gravity shifted from producing words to protecting
              meaning. Cheap enough that the real risk was no longer I cannot
              get my thoughts out, but{' '}
              <HighlightPopover
                triggerContent='I will forget what it means to know.'
                popoverTitle='Cheap output and degradation of knowing'
                popoverContent={FootnoteContent[2]}
              />
            </p>

            <p>
              In that new world, the most dangerous failure is not a single
              hallucination. It is the slow transition from verification to
              endorsement. It is when smoothness becomes authority. It is when
              the human stops reconstructing why something should be believed
              and starts approving whatever looks coherent. This is how a mind
              rots without noticing: not through stupidity, but through
              convenience.
            </p>

            <p>
              That realization forced a more defensive and more serious
              approach. I began describing a collapse mode I call{' '}
              <HighlightPopover
                triggerContent='encyclopedia meltdown.'
                popoverTitle='Encyclopedia meltdown'
                popoverContent={FootnoteContent[4]}
              />{' '}
              It is systemic, not incidental. It happens when AI becomes the
              default author and the human becomes the default approver; when
              errors enter quietly, link structures amplify them, and
              responsibility lines blur until the entire corpus looks coherent
              but cannot be trusted. The corpus does not only become wrong. It
              becomes unauditable. It becomes epistemically ungovernable.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Coscientist is my response.
            </h2>

            <p>
              <Link
                href='https://coscientist.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                Coscientist
              </Link>{' '}
              is an always-on AI service for knowledge. It runs constantly, but
              it does not compete for attention. It does not beg. It does not
              perform. It does not try to outpace the human. It works
              continuously in the background (indexing, organizing,
              cross-checking, preparing contradiction maps, drafting
              verification plans) and then it waits for{' '}
              <HighlightPopover
                triggerContent='the moment a human verifies.'
                popoverTitle='Always-on, quiet-in-attention'
                popoverContent={FootnoteContent[1]}
              />
            </p>

            <p>
              The tagline is{' '}
              <HighlightPopover
                triggerContent='Not AGI but close enough.'
                popoverTitle='What the tagline commits to'
                popoverContent={FootnoteContent[9]}
              />{' '}
              It is a playful line with a strict intention. I am not building a
              mythology project. I am building a reliable co-worker for
              thinking: a system that can keep working even when I am tired,
              keep track of what I forgot, and keep my knowledge honest when the
              environment makes dishonesty effortless.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              What Coscientist protects is not productivity. It protects agency.
            </h2>

            <p>
              In the attention economy, helpful products often succeed by
              becoming emotionally or behaviorally sticky. Coscientist refuses
              that game. It is always running, but it remains calm in the user's
              mind. It is pullable on demand and{' '}
              <HighlightPopover
                triggerContent='quiet by default'
                popoverTitle='Always-on, quiet-in-attention'
                popoverContent={FootnoteContent[1]}
              />
              , not because silence is aesthetic, but because silence is safety.
              If a system has the power to shape your beliefs, it cannot be
              allowed to shape your attention with the same intensity that it
              shapes your output.
            </p>

            <p>
              The backbone of Coscientist is a simple rule: no claim graduates
              into knowledge without a{' '}
              <HighlightPopover
                triggerContent='responsibility line.'
                popoverTitle='Responsibility line (책임선)'
                popoverContent={FootnoteContent[3]}
              />{' '}
              A statement is not knowledge because it is beautifully written. A
              statement is not knowledge because the model is confident. A
              statement is not knowledge because four other models agreed. A
              statement becomes knowledge only when its justification can be
              traced (cleanly, explicitly, and without circularity) back to
              sources, evidence spans, methods, assumptions, scope, and
              uncertainty. If the chain is missing, the statement is downgraded
              into a hypothesis, and the missing steps are made visible rather
              than hidden inside confident prose.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              This is a very different kind of AI product.
            </h2>

            <p>
              Most AI systems treat the answer as the destination. Coscientist
              treats the justification as the destination. Answers are cheap.
              Justification is the scarce artifact. That is why Coscientist is
              designed to do thinking work rather than writing work. Its primary
              job is not to fill blank pages with text. Its job is to preserve
              the conditions under which a human can still know what they know.
            </p>

            <p>
              To do that, Coscientist separates{' '}
              <HighlightPopover
                triggerContent='narrative from inference.'
                popoverTitle='Why undercut matters'
                popoverContent={FootnoteContent[5]}
              />
            </p>

            <p>
              <em>Narrative</em> is what humans read: essays, memos, briefings,
              living papers. Narrative is the surface.
            </p>

            <p>
              <em>Inference</em> is the substrate that makes narrative safe. Raw
              excerpts are preserved as immutable spans. Claims are normalized
              propositions derived from spans or explicitly asserted by the
              user. Each claim is bound to scope constraints, assumptions,
              definitions, methods, data pointers, and uncertainty metadata.
              Relations between claims are explicit: support, contradiction, and
              undercut: not just disagree, but your premise is unstable, or your
              method cannot justify your conclusion.
            </p>

            <p>
              This distinction matters because the AI era has created a new kind
              of epistemic fraud: not intentional deception, but structural
              deception. A large corpus can sound coherent while being logically
              hollow. A summary can feel faithful while quietly drifting from
              what the sources truly support. Retrieval systems can surface many
              citations and still fail to represent how those citations relate:
              <HighlightPopover
                triggerContent='whether one undercuts another.'
                popoverTitle='Why retrieval-only fails'
                popoverContent={FootnoteContent[6]}
              />{' '}
              If narrative is allowed to outrun inference, the tool becomes a
              persuasion engine instead of a knowledge engine.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Coscientist is built to prevent that drift by design.
            </h2>

            <p>
              It is also built to be useful in the places where knowledge
              matters most: personal identity and frontier science.
            </p>

            <p>
              On the personal side, Coscientist becomes a living essay archive.
              It preserves your writing with stable attribution to original
              passages. It lets you ask questions about your own thinking
              without rewriting history. It can show you what you believed in
              2019 and how you argued for it, and it can show you where your
              definitions shifted without pretending the past was wrong or the
              present is final. It can surface tensions across years, but it
              will not resolve them by inventing a new voice. It keeps your
              voice intact.
            </p>

            <p>
              On the scientific side, Coscientist becomes a ScienceOps
              workspace. It ingests papers, code, datasets, lab notes, and
              experiment logs. It turns literature into claim sets with
              provenance. It proposes verification strategies and experiment
              plans. It ties narrative conclusions to runnable artifacts. It
              pushes toward the discipline that software learned the hard way:{' '}
              <HighlightPopover
                triggerContent='reproducibility is the minimum bar.'
                popoverTitle='ScienceOps: accelerating science'
                popoverContent={FootnoteContent[7]}
              />
            </p>

            <p>
              This is where my long-term ambition and my epistemic ambition
              converge.
            </p>

            <p>
              For years, I have felt that many of humanity's hardest problems
              persist not because we lack ideas, but because we lack operational
              infrastructure. We have brilliant people and good ideas, yet
              implementation is slow, verification is brittle, and dissemination
              is clogged by formats that do not preserve execution paths. In
              software, we learned to build pipelines (version control, CI/CD,
              dependency management, containerization) because we had no choice.
              Complexity forced discipline. Science, in many domains, still
              lives in a pre-pipeline world where conclusions travel faster than
              the machinery needed to reproduce them.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Coscientist is my attempt to bring that machinery into the
              everyday act of knowing.
            </h2>

            <p>
              It does not require everyone to become a philosopher. It simply
              makes the responsible act easier. It keeps the paper trail intact.
              It makes uncertainty explicit. It preserves what must be preserved
              so that correction remains possible.
            </p>

            <p>And it does this while remaining calm.</p>

            <p>
              The system runs constantly, but it is patient. It produces
              preparation, not pressure. It does not attempt to replace the
              human's role as epistemic governor. It does not try to win the
              race to the finish line, because the finish line is not speed. The
              finish line is trustworthy progress.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              If this works, it changes the rhythm of knowledge work.
            </h2>

            <p>
              Verification stops feeling like a punishment and starts feeling
              like momentum, because the system has already prepared the
              cross-checks, the rebuttals, the undercuts, and the minimal tests
              that would actually move the claim from plausible to stable.
              Research stops feeling like artisanal heroism and starts feeling
              like a disciplined loop, because the narrative remains tied to
              runnable artifacts. Collaboration stops feeling like a game of
              trust and starts feeling like a shared responsibility line,{' '}
              <HighlightPopover
                triggerContent='because provenance is not optional.'
                popoverTitle='Provenance and ScienceOps'
                popoverContent={
                  <>
                    {FootnoteContent[3]}
                    <Separator className='my-4' />
                    {FootnoteContent[7]}
                  </>
                }
              />
            </p>

            <p>
              I do not need AGI for that. I need something closer to a{' '}
              <HighlightPopover
                triggerContent='co-scientist.'
                popoverTitle='Not AGI but close enough'
                popoverContent={FootnoteContent[9]}
              />
            </p>
          </div>
        </FramePanel>
        <FrameFooter>
          <p className='text-muted-foreground text-sm text-end'>
            &copy; 2026 Coscientist
          </p>
        </FrameFooter>
      </Frame>
    </article>
  )
}

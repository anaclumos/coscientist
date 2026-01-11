"use client";

import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Pacifico } from "next/font/google";
import Link from "next/link";

import { HighlightPopover } from "@/components/highlight-popover";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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

export default function TerminusPage() {
  return (
    <article className="min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8">
      <Frame className="w-full max-w-3xl my-8">
        <FramePanel>
          <div className="flex items-start justify-between mb-6">
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                Terminus
              </FrameTitle>
              <FrameDescription>
                The Dark Night of the Soul & The Encyclopedia Galactica
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className="space-y-6">
            <Separator />

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              The Dark Night of the Soul
            </h2>

            <p>
              "The Dark Night of the Soul" (<em>La noche oscura del alma</em>)
              is a literary device that refers to a profound inner crisis in
              which identity, faith, and one's system collapse. It looks like
              breakdown from the outside, but its essence is the process in
              which the existing structure of the self is dismantled and
              reorganized around new standards. It began in a 16th-century
              religious context, but in modern usage it denotes existential
              collapse and reconstruction.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>"Night"</strong> is typically a condition where rewards
                (comfort, certainty, self-narrative) disappear.
              </li>
              <li>
                The rewards that previously supported me (praise, achievements,
                role in relationships, religious certainty) no longer work.
              </li>
              <li>
                As a result, attachments, masks, and self-deception are exposed,
                and the center of value shifts.
              </li>
              <li>
                Recovery does not appear as a return to the old state, but as a{" "}
                <HighlightPopover
                  triggerContent="rebuild under new standards"
                  popoverTitle="Reconstruction"
                  popoverContent={
                    <p className="text-muted-foreground leading-relaxed">
                      The dark night is not about returning to who you were. It
                      is about becoming someone new—someone whose foundations
                      are built on different values, different truths.
                    </p>
                  }
                />
                .
              </li>
            </ul>

            <p>
              I had been writing an encyclopedia, but various swindlers made me
              put down the pen. Around the same time, I ended up living what
              people would call the life of a psychologically wandering
              prodigal. For a long time I could not return to my psychological
              "home," and only much later did I realize the reason was that I
              had no home. In other words, to set myself right, I first had to
              build a home.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              Foundation & The Encyclopedia Galactica
            </h2>

            <p>
              I like Isaac Asimov's SF novels, and among them I especially like
              the premise of{" "}
              <HighlightPopover
                triggerContent="Foundation"
                popoverTitle="The Foundation Series"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    A science fiction saga about the fall of a galactic empire
                    and the efforts to preserve knowledge through the coming
                    dark age.
                  </p>
                }
              />
              —though I did not finish a straight-through read because, from
              volumes 3–4, it abruptly turns into a political novel. What I like
              most are{" "}
              <HighlightPopover
                triggerContent="psychohistory"
                popoverTitle="Psychohistory"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    A fictional science that combines history, sociology, and
                    statistics to predict the future behavior of large
                    populations. It cannot predict individual actions, but can
                    forecast mass movements with statistical certainty.
                  </p>
                }
              />{" "}
              and the Encyclopedia Galactica. Psychohistory is, in reality,
              closer to macrosociology: it cannot predict an individual's
              behavior, but if the population is enormous, it can statistically
              predict the behavior of the population as a whole.
            </p>

            <p>
              The mathematician Hari Seldon, having calculated the future with
              psychohistory, concludes:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>The collapse of the Empire is unavoidable.</li>
              <li>
                After the collapse, a dark age of tens of thousands of years
                will follow.
              </li>
              <li>
                But with a specific exit strategy, that dark age can be reduced
                to roughly one thousand years.
              </li>
            </ol>

            <Alert variant="info" className="my-6">
              <AlertTitle>The Seldon Plan</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  That exit strategy is the Encyclopedia Galactica. Before
                  knowledge is lost to the collapse of the Empire, humanity
                  gathers its knowledge into a vast encyclopedia. In other
                  words, the concept of an encyclopedia is deployed as a means
                  of traversing the dark age.
                </p>
                <p className="mt-2">
                  The provisional shelter for compiling the encyclopedia is the
                  planet <strong>Terminus</strong>. That is why the URL of this
                  page is "Terminus."
                </p>
              </AlertDescription>
            </Alert>

            <p>
              Of course, the Seldon Plan is broader than that. The Encyclopedia
              Galactica is, nominally, a project to gather knowledge and produce
              a record. The Seldon Plan is a long-term strategy that uses
              psychohistory to design the post-collapse flows of power, economy,
              and technology, forcibly converging the trajectory of
              civilizational reconstruction.
            </p>

            <p>
              In other words, the Seldon Plan breaks through the dark night of
              the soul via a seizure into a new order: a fallen Galactic Empire,
              and—within the whirlpool of fate—turning crisis into opportunity.
              That is why, among the very common{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Knowledge_ark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Knowledge Ark
              </Link>{" "}
              tropes, it is the more compelling one.
            </p>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-4`}
            >
              My Encyclopedia Galactica
            </h2>

            <p>
              Therefore, to graduate from the prodigal life, I must be able to
              compile the Encyclopedia Galactica. The Encyclopedia Galactica
              will end the dark night of the soul and become the{" "}
              <HighlightPopover
                triggerContent="engine of a new order"
                popoverTitle="The Purpose of Coscientist"
                popoverContent={
                  <p className="text-muted-foreground leading-relaxed">
                    Coscientist is not merely a tool for storing information. It
                    is a system designed to preserve the conditions under which
                    genuine knowledge can exist—a framework for rebuilding
                    epistemic foundations during times of collapse.
                  </p>
                }
              />
              .
            </p>
          </div>
        </FramePanel>
        <FrameFooter>
          <div className="flex justify-between w-full items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
              <span>Back to Home</span>
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

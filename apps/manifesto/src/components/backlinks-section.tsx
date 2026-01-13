"use client";

import type { BacklinkInfo } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BacklinksSectionProps {
  backlinks: BacklinkInfo[];
  onBacklinkClick: (slug: string) => void;
}

function ExcerptWithBold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={part} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function BacklinksSection({
  backlinks,
  onBacklinkClick,
}: BacklinksSectionProps) {
  if (backlinks.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 font-mono">
        {backlinks.length}{" "}
        {backlinks.length === 1 ? "note links" : "notes link"} to this
      </h3>
      <ul className="flex flex-col gap-3">
        {backlinks.map((backlink) => (
          <li key={backlink.slug}>
            <Card
              render={
                <button
                  type="button"
                  onClick={() => onBacklinkClick(backlink.slug)}
                />
              }
              className="w-full text-left cursor-pointer transition-colors hover:bg-accent"
            >
              <CardHeader>
                <CardTitle className="text-base">{backlink.title}</CardTitle>
                {backlink.excerpt && (
                  <CardDescription className="line-clamp-2">
                    <ExcerptWithBold text={backlink.excerpt} />
                  </CardDescription>
                )}
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

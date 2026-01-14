"use client";

import { useTranslations } from "next-intl";
import { IconArrowUpLeftOutline18 } from "nucleo-ui-outline-18";
import type { BacklinkInfo } from "@/lib/types";
import { cn } from "@/lib/utils";

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
          <strong className="font-medium text-foreground" key={part}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export function BacklinksSection({
  backlinks,
  onBacklinkClick,
}: BacklinksSectionProps) {
  const t = useTranslations("backlinks");

  if (backlinks.length === 0) {
    return null;
  }

  const translationKey = backlinks.length === 1 ? "singular" : "plural";

  return (
    <section>
      <h3 className="mb-3 flex items-center gap-1.5 font-medium text-muted-foreground text-xs uppercase tracking-wider">
        <IconArrowUpLeftOutline18 className="size-3" />
        {t(translationKey, { count: backlinks.length })}
      </h3>
      <ul className="flex flex-col">
        {backlinks.map((backlink, index) => (
          <li
            className={cn(index > 0 && "border-border/50 border-t")}
            key={backlink.slug}
          >
            <button
              className={cn(
                "-mx-1 w-full rounded-md px-1 py-2.5 text-left",
                "transition-colors hover:bg-muted/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              onClick={() => onBacklinkClick(backlink.slug)}
              type="button"
            >
              <span className="block font-medium text-foreground text-sm">
                {backlink.title}
              </span>
              {backlink.excerpt && (
                <span className="mt-0.5 line-clamp-2 block text-muted-foreground text-xs">
                  <ExcerptWithBold text={backlink.excerpt} />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

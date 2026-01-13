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
          <strong key={part} className="font-medium text-foreground">
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
  const t = useTranslations("backlinks");

  if (backlinks.length === 0) {
    return null;
  }

  const translationKey = backlinks.length === 1 ? "singular" : "plural";

  return (
    <section>
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <IconArrowUpLeftOutline18 className="size-3" />
        {t(translationKey, { count: backlinks.length })}
      </h3>
      <ul className="flex flex-col">
        {backlinks.map((backlink, index) => (
          <li
            key={backlink.slug}
            className={cn(index > 0 && "border-t border-border/50")}
          >
            <button
              type="button"
              onClick={() => onBacklinkClick(backlink.slug)}
              className={cn(
                "w-full text-left py-2.5 -mx-1 px-1 rounded-md",
                "transition-colors hover:bg-muted/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
            >
              <span className="block text-sm font-medium text-foreground">
                {backlink.title}
              </span>
              {backlink.excerpt && (
                <span className="block text-xs text-muted-foreground mt-0.5 line-clamp-2">
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

'use client';

import type { BacklinkInfo } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Card,
  CardHeader,
  CardTitle,
  CardPanel,
} from '@/components/ui/card';

interface BacklinksSectionProps {
  backlinks: BacklinkInfo[];
  onBacklinkClick: (slug: string) => void;
}

export function BacklinksSection({
  backlinks,
  onBacklinkClick,
}: BacklinksSectionProps) {
  if (backlinks.length === 0) {
    return null;
  }
  
  return (
    <Card className="mt-8">
      <CardHeader className="pb-4">
        <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {backlinks.length} {backlinks.length === 1 ? 'note link' : 'notes link'} to this
        </CardTitle>
      </CardHeader>
      <CardPanel>
        <ul className="space-y-4">
          {backlinks.map((backlink) => (
            <li key={backlink.slug} className="flex flex-col gap-1">
              <button
                type="button"
                className={cn(
                  'font-medium text-primary cursor-pointer text-left',
                  'hover:underline focus:outline-none focus:underline'
                )}
                onClick={() => onBacklinkClick(backlink.slug)}
              >
                {backlink.title}
              </button>
              {backlink.excerpt && (
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {backlink.excerpt}
                </p>
              )}
            </li>
          ))}
        </ul>
      </CardPanel>
    </Card>
  );
}

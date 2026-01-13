"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaneSpineProps {
  index: number;
  title: string;
  showIndex?: boolean;
  isClosable?: boolean;
  onClose?: () => void;
  className?: string;
}

export function PaneSpine({
  index,
  title,
  showIndex = true,
  isClosable = false,
  onClose,
  className,
}: PaneSpineProps) {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 bottom-0 w-pane-spine flex flex-col items-center pt-2 bg-card z-sticky gap-2 group/spine",
        className,
      )}
    >
      {showIndex &&
        (isClosable ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className={cn(
              "size-5 rounded-full flex items-center justify-center flex-shrink-0 z-modal",
              "bg-primary/10 text-primary text-xs font-semibold tabular-nums font-mono",
              "group-hover/spine:bg-red-500 group-hover/spine:text-white",
              "transition-colors cursor-pointer",
            )}
            aria-label={`Close pane ${index}`}
          >
            <span className="group-hover/spine:hidden">{index}</span>
            <X className="size-3 hidden group-hover/spine:block" />
          </button>
        ) : (
          <span className="size-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center tabular-nums font-mono flex-shrink-0">
            {index}
          </span>
        ))}
      <span
        className="text-sm font-medium text-muted-foreground whitespace-nowrap"
        style={{
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
        }}
      >
        {title}
      </span>
    </div>
  );
}

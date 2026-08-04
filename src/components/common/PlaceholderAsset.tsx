import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderAssetProps {
  name: string;
  category?: string;
  status?: string;
  note?: string;
  className?: string;
  /** Compact variant for smaller card contexts. */
  compact?: boolean;
}

/**
 * Stands in for a missing screenshot/diagram without pretending the asset
 * exists. Always labels what's missing rather than showing a generic image.
 */
export function PlaceholderAsset({
  name,
  category,
  status,
  note = "Visual evidence to be added",
  className,
  compact = false,
}: PlaceholderAssetProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-bg px-6 text-center",
        compact && "aspect-[4/3] px-4",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2">
        <ImageOff
          className={cn("text-text-secondary", compact ? "size-5" : "size-6")}
          aria-hidden="true"
        />
        <p
          className={cn(
            "font-medium text-text",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {name}
        </p>
        {category || status ? (
          <p className="font-mono text-[11px] tracking-wide text-text-secondary uppercase">
            {[category, status].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <p className="text-[11px] text-text-secondary">{note}</p>
      </div>
    </div>
  );
}

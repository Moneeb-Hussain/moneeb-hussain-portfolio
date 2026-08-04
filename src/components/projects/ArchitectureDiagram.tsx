import { ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  /** Ordered stage labels — typically a project's own section headings. */
  stages: string[];
  title?: string;
}

/**
 * A lightweight flow diagram built directly from a project's own documented
 * stages (its case-study/section headings), rather than an invented system
 * architecture.
 */
export function ArchitectureDiagram({
  stages,
  title = "System flow",
}: ArchitectureDiagramProps) {
  if (stages.length < 2) return null;

  return (
    <div className="rounded-lg border border-border bg-bg p-5">
      <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
        {title}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {stages.map((stage, index) => (
          <span key={stage} className="flex items-center gap-2">
            <span className="rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-text">
              {stage}
            </span>
            {index < stages.length - 1 ? (
              <ArrowRight className="size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchThemes } from "@/content/research";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";

export function ResearchPreview() {
  const previewThemes = researchThemes.slice(0, 3);

  return (
    <section className="border-b border-border bg-surface" aria-labelledby="research-preview-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="research-preview-heading"
            eyebrow="Research interests"
            title="Open questions I keep coming back to"
            description="Durable themes across the projects, framed as questions worth exploring rather than results already proven."
          />
          <Link
            href="/research"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
          >
            Full research profile
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewThemes.map((theme) => (
            <ResearchInterestCard key={theme.id} theme={theme} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

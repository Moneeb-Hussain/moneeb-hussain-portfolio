import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export function ExperienceSnapshot() {
  const recentEntries = experience.slice(0, 2);

  return (
    <section className="border-b border-border bg-bg" aria-labelledby="experience-snapshot-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="experience-snapshot-heading"
            eyebrow="Experience"
            title="Where the engineering has happened"
            description="From plant-floor automation to production software to mentoring the next cohort of engineers."
          />
          <Link
            href="/experience"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
          >
            Full timeline
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10">
          <ExperienceTimeline entries={recentEntries} compact />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { achievements } from "@/content/achievements";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AchievementList } from "@/components/achievements/AchievementList";

export function AchievementsPreview() {
  const topAchievements = [...achievements]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 4);

  return (
    <section className="border-b border-border bg-surface" aria-labelledby="achievements-preview-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="achievements-preview-heading"
            eyebrow="Achievements"
            title="Verified results, not vanity metrics"
            description="A selection of competition placements, certifications, and recognitions — each one linked to a source where verification exists."
          />
          <Link
            href="/achievements"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
          >
            All achievements
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10">
          <AchievementList achievements={topAchievements} />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { achievements } from "@/content/achievements";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AchievementList } from "@/components/achievements/AchievementList";

export const metadata: Metadata = buildPageMetadata({
  title: "Achievements",
  description:
    "Competition results, certifications, and recognitions — each one traceable to a verifiable source where one exists.",
  path: "/achievements",
});

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Achievements"
        title="Competitions, certifications, and recognition"
        description="Ordered by verified strength rather than recency. Vanity or unverifiable claims are deliberately left out."
      />

      <div className="mt-10">
        <AchievementList achievements={achievements} />
      </div>
    </div>
  );
}

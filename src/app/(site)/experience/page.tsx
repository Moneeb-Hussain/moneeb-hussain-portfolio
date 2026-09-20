import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = buildPageMetadata({
  title: "Experience",
  description:
    "A reverse-chronological record of employment, education, and mentorship - from plant-floor automation to production software engineering.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Experience"
        title="Employment, education, and mentorship"
        description="In reverse-chronological order, with the technologies and projects tied to each role."
      />

      <div className="mt-12">
        <ExperienceTimeline entries={experience} />
      </div>
    </div>
  );
}

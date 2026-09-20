import type { Metadata } from "next";
import { researchThemes } from "@/content/research";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Research",
  description:
    "Durable research themes across computer vision, multimodal AI, and human-in-the-loop decision systems.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Research"
        title="Open questions, not claimed contributions"
        description="There's no peer-reviewed publication to point to yet — these are the durable questions that keep showing up across the projects, framed honestly as things worth exploring further, most naturally through funded graduate research."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {researchThemes.map((theme) => (
          <ResearchInterestCard key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
}

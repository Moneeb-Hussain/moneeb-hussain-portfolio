import { getFeaturedProjects } from "@/content/projects";
import { Hero } from "@/components/home/Hero";
import { SystemPipeline } from "@/components/home/SystemPipeline";
import { MetricRail } from "@/components/home/MetricRail";
import { FeaturedProjectCard } from "@/components/home/FeaturedProjectCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SystemsPhilosophy } from "@/components/home/SystemsPhilosophy";
import { AdditionalWork } from "@/components/home/AdditionalWork";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { AchievementsPreview } from "@/components/home/AchievementsPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <SystemPipeline />
      <MetricRail />

      <section className="border-b border-border bg-surface" aria-labelledby="selected-work-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            id="selected-work-heading"
            eyebrow="Work"
            title="Selected systems"
            description="Projects demonstrating end-to-end engineering across perception, trustworthy AI, operations, software, and physical automation."
          />
          <div className="mt-10 flex flex-col gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <SystemsPhilosophy />
      <AdditionalWork />
      <ResearchPreview />
      <ExperienceSnapshot />
      <AchievementsPreview />
      <FinalCta />
    </>
  );
}

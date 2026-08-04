import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getVisibleProjects } from "@/content/projects";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function AdditionalWork() {
  const additionalProjects = getVisibleProjects()
    .filter((project) => typeof project.featured !== "number")
    .slice(0, 6);

  return (
    <section className="border-b border-border bg-bg" aria-labelledby="additional-work-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="additional-work-heading"
            eyebrow="Additional work"
            title="More systems, prototypes, and production work"
            description="Hackathon builds, professional client engagements, and earlier engineering work — sanitised where confidentiality requires it."
          />
          <Link
            href="/projects"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
          >
            View all projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10">
          <ProjectGrid projects={additionalProjects} />
        </div>
      </div>
    </section>
  );
}

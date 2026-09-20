import type { Metadata } from "next";
import { getVisibleProjects } from "@/content/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Computer vision, multi-agent AI, and intelligent automation systems - academic, hackathon, and professional work by Moneeb Hussain.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Work"
        title="Selected systems and prototypes"
        description="Every project here is scoped honestly: what it is, who built it, what was measured, and what it doesn't prove. Filter by how the work came to exist."
      />

      <div className="mt-10">
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
}

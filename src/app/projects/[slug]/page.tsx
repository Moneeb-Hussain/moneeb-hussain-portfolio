import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getProjectBySlug,
  getRelatedProjects,
  getVisibleProjects,
} from "@/content/projects";
import { getCaseStudyBySlug } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { formatProjectStatus } from "@/lib/utils";
import { ReadingProgress } from "@/components/common/ReadingProgress";
import { PlaceholderAsset } from "@/components/common/PlaceholderAsset";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { CaseStudyBody } from "@/components/projects/CaseStudyBody";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";
import { profile } from "@/content/profile";

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildPageMetadata({
      title: "Project not found",
      description: "This project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project || project.status === "planned") {
    notFound();
  }

  const caseStudy = getCaseStudyBySlug(project.slug);
  const sections = caseStudy?.sections ?? project.sections ?? [];
  const relatedProjects = getRelatedProjects(project.slug, 3);

  const orderedProjects = getVisibleProjects();
  const currentIndex = orderedProjects.findIndex((p) => p.slug === project.slug);
  const previousProject = currentIndex > 0 ? orderedProjects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < orderedProjects.length - 1
      ? orderedProjects[currentIndex + 1]
      : undefined;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Work", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);

  return (
    <article>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-cobalt"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All work
          </Link>

          <p className="mt-6 font-mono text-xs font-medium tracking-[0.15em] text-cobalt uppercase">
            {formatProjectStatus(project.status)}
          </p>
          <h1 className="mt-2 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {caseStudy?.title ?? project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">
            {caseStudy?.dek ?? project.subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <PlaceholderAsset
              name={project.title}
              category={formatProjectStatus(project.status)}
              status={project.confidential ? "Confidential" : undefined}
              className="mb-10"
            />

            {sections.length >= 2 ? (
              <div className="mb-10">
                <ArchitectureDiagram
                  stages={sections.map((section) => section.heading)}
                  title="Case study structure"
                />
              </div>
            ) : null}

            {sections.length > 0 ? (
              <CaseStudyBody sections={sections} />
            ) : (
              <p className="text-pretty leading-relaxed text-text-secondary">
                {project.summary}
              </p>
            )}
          </div>

          <ProjectMetadata project={project} />
        </div>

        {(previousProject || nextProject) && (
          <nav
            aria-label="More projects"
            className="mt-16 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2"
          >
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group flex flex-col gap-1 rounded-lg border border-border bg-surface p-5 hover:border-cobalt"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary">
                  <ArrowLeft className="size-3.5" aria-hidden="true" />
                  Previous
                </span>
                <span className="font-semibold text-text group-hover:text-cobalt">
                  {previousProject.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end gap-1 rounded-lg border border-border bg-surface p-5 text-right hover:border-cobalt sm:col-start-2"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary">
                  Next
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-text group-hover:text-cobalt">
                  {nextProject.title}
                </span>
              </Link>
            ) : null}
          </nav>
        )}

        {relatedProjects.length > 0 ? (
          <div className="mt-16 border-t border-border pt-12">
            <SectionHeading eyebrow="Keep exploring" title="Related work" />
            <div className="mt-8">
              <ProjectGrid projects={relatedProjects} />
            </div>
          </div>
        ) : null}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-xl border border-border bg-dark-section p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-surface">
              Questions about this system?
            </p>
            <p className="mt-1 text-sm text-surface/70">
              Happy to walk through the architecture, trade-offs, or limitations in detail.
            </p>
          </div>
          <CopyEmailButton
            email={profile.links.email}
            variant="primary"
            className="shrink-0"
          />
        </div>
      </div>
    </article>
  );
}

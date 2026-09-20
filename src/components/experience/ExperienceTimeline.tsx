import Link from "next/link";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import type { ExperienceEntry, ExperienceType } from "@/content/types";
import { getProjectBySlug } from "@/content/projects";

const TYPE_ICON: Record<ExperienceType, typeof Briefcase> = {
  employment: Briefcase,
  education: GraduationCap,
  mentorship: Users,
};

const TYPE_LABEL: Record<ExperienceType, string> = {
  employment: "Employment",
  education: "Education",
  mentorship: "Mentorship",
};

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  /** Show a shortened version (summary + top highlight only) for previews. */
  compact?: boolean;
}

export function ExperienceTimeline({ entries, compact = false }: ExperienceTimelineProps) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {entries.map((entry) => {
        const Icon = TYPE_ICON[entry.type];
        const relatedProjects = (entry.relatedProjectSlugs ?? [])
          .map((slug) => getProjectBySlug(slug))
          .filter((project): project is NonNullable<typeof project> => Boolean(project));
        const highlights = compact ? entry.highlights.slice(0, 1) : entry.highlights;

        return (
          <li key={entry.id} className="relative">
            <span className="absolute top-0.5 -left-[calc(2rem+1px)] flex size-8 items-center justify-center rounded-full border border-border bg-surface text-text-secondary">
              <Icon className="size-4" aria-hidden="true" />
            </span>

            <p className="font-mono text-xs font-medium tracking-[0.1em] text-cobalt uppercase">
              {TYPE_LABEL[entry.type]} · {entry.period}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold text-text">
              {entry.role}
            </h3>
            <p className="text-sm font-medium text-text-secondary">
              {entry.organization}
              {entry.location ? ` - ${entry.location}` : ""}
            </p>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-text-secondary">
              {entry.summary}
            </p>

            {highlights.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-text">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.tech && entry.tech.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {entry.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}

            {!compact && relatedProjects.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary hover:border-cobalt hover:text-cobalt"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

import Link from "next/link";
import { HelpCircle } from "lucide-react";
import type { ResearchTheme } from "@/content/types";
import { getProjectBySlug } from "@/content/projects";

interface ResearchInterestCardProps {
  theme: ResearchTheme;
  /** Show only the first question, for compact homepage previews. */
  compact?: boolean;
}

export function ResearchInterestCard({ theme, compact = false }: ResearchInterestCardProps) {
  const questions = compact ? theme.questions.slice(0, 1) : theme.questions;
  const relatedProjects = (theme.relatedProjectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold text-text">{theme.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {theme.description}
      </p>

      <ul className="mt-4 flex flex-1 flex-col gap-2.5">
        {questions.map((question) => (
          <li key={question} className="flex gap-2 text-sm text-text">
            <HelpCircle
              className="mt-0.5 size-4 shrink-0 text-teal"
              aria-hidden="true"
            />
            <span className="leading-relaxed">{question}</span>
          </li>
        ))}
      </ul>

      {relatedProjects.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
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
    </article>
  );
}

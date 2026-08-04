import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/content/types";
import { formatProjectStatus } from "@/lib/utils";
import { PlaceholderAsset } from "@/components/common/PlaceholderAsset";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-cobalt">
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
        <PlaceholderAsset
          name={project.title}
          category={formatProjectStatus(project.status)}
          compact
          className="rounded-none border-x-0 border-t-0"
        />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2">
            <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-cobalt uppercase">
              {formatProjectStatus(project.status)}
            </p>
            {project.confidential ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-text-secondary">
                <Lock className="size-3" aria-hidden="true" />
                Sanitised
              </span>
            ) : null}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-text">
            <span className="inline-flex items-center gap-1">
              {project.title}
              <ArrowUpRight
                className="size-4 shrink-0 text-text-secondary"
                aria-hidden="true"
              />
            </span>
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text-secondary">
            {project.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

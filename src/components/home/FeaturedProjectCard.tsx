import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { formatProjectStatus } from "@/lib/utils";
import { PlaceholderAsset } from "@/components/common/PlaceholderAsset";

interface FeaturedProjectCardProps {
  project: Project;
  /** Reverses the media/copy order on wide screens for visual rhythm. */
  reverse?: boolean;
}

export function FeaturedProjectCard({ project, reverse = false }: FeaturedProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
      <div className={reverse ? "lg:order-2" : undefined}>
        <PlaceholderAsset
          name={project.title}
          category={formatProjectStatus(project.status)}
          status={project.confidential ? "Confidential" : undefined}
        />
      </div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <p className="font-mono text-xs font-medium tracking-[0.15em] text-cobalt uppercase">
          {formatProjectStatus(project.status)}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-text sm:text-2xl">
          <Link href={href} className="hover:text-cobalt">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        {project.metrics && project.metrics.length > 0 ? (
          <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-3">
            {project.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-text-secondary">{metric.label}</dt>
                <dd className="font-mono text-lg font-semibold text-text">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
        >
          Read the case study
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

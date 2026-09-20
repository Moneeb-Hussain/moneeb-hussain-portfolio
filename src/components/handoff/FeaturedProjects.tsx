"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PROJECTS,
  PROJECT_FILTERS,
  type ProjectFilter,
  type ProjectSort,
} from "@/content/handoff";

export function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [sort, setSort] = useState<ProjectSort>("recent");
  const [expandedId, setExpandedId] = useState<string | null>("retail-checkout");

  const projects = useMemo(() => {
    const filtered =
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.tags.includes(filter));

    if (sort === "impact") {
      return [...filtered].sort((a, b) => b.impact - a.impact);
    }

    return [...filtered].sort(
      (a, b) => PROJECTS.indexOf(a) - PROJECTS.indexOf(b),
    );
  }, [filter, sort]);

  return (
    <section id="work" className="pf-inner" data-section="true">
      <div className="pf-section-head">
        <div className="pf-eyebrow">Selected Work</div>
        <h2 className="pf-h2">Featured Projects</h2>
      </div>

      <div className="pf-filter-row" data-noprint="true">
        <div className="pf-filter-chips" role="group" aria-label="Filter projects">
          {PROJECT_FILTERS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={filter === tag ? "pf-chip is-active" : "pf-chip"}
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="pf-sort-row" role="group" aria-label="Sort projects">
          <span className="pf-sort-label">Sort</span>
          <button
            type="button"
            className={sort === "recent" ? "pf-sort-btn is-active" : "pf-sort-btn"}
            onClick={() => setSort("recent")}
            aria-pressed={sort === "recent"}
          >
            Recent
          </button>
          <button
            type="button"
            className={sort === "impact" ? "pf-sort-btn is-active" : "pf-sort-btn"}
            onClick={() => setSort("impact")}
            aria-pressed={sort === "impact"}
          >
            Impact
          </button>
        </div>
      </div>

      <div className="pf-project-list">
        {projects.map((project) => {
          const expanded = expandedId === project.id;
          return (
            <article key={project.id} className="pf-project-card">
              <button
                type="button"
                className="pf-project-header"
                onClick={() =>
                  setExpandedId((current) =>
                    current === project.id ? null : project.id,
                  )
                }
                aria-expanded={expanded}
              >
                <div>
                  <div className="pf-project-meta">
                    <span className="pf-project-date">{project.date}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="pf-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="pf-project-title">{project.title}</h3>
                  <p className="pf-project-blurb">{project.blurb}</p>
                </div>
                <span className="pf-expand-glyph" aria-hidden="true">
                  {expanded ? "−" : "+"}
                </span>
              </button>

              {expanded ? (
                <div className="pf-project-body">
                  <div>
                    <div className="pf-block-label">Problem</div>
                    <p className="pf-block-text">{project.problem}</p>
                  </div>
                  <div>
                    <div className="pf-block-label">Approach</div>
                    <p className="pf-block-text">{project.approach}</p>
                  </div>
                  <div>
                    <div className="pf-block-label">Result</div>
                    <p className="pf-block-text">{project.result}</p>
                  </div>
                  <div className="pf-stack-row">
                    {project.stack.map((item) => (
                      <span key={item} className="pf-stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="pf-link-row">
                    {project.caseStudyHref ? (
                      <Link href={project.caseStudyHref} className="pf-case-link">
                        Read full case study →
                      </Link>
                    ) : null}
                    <a
                      href={project.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-source-link"
                    >
                      Source Code ↗
                    </a>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

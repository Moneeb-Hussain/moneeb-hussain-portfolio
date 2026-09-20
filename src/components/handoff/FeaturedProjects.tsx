"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PROJECTS,
  PROJECT_FILTERS,
  type HandoffProject,
  type ProjectFilter,
  type ProjectSort,
} from "@/content/handoff";

const FEATURED = PROJECTS.filter((project) => project.featured);
const ADDITIONAL = PROJECTS.filter((project) => !project.featured);

function FlagshipStar() {
  return (
    <span className="pf-flagship-star" title="Flagship research project">
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 1.35 9.76 5.1l4.14.6-3 2.92.7 4.13L8 10.82l-3.6 1.93.7-4.13-3-2.92 4.14-.6L8 1.35z"
        />
      </svg>
      <span className="pf-sr-only">Flagship research project</span>
    </span>
  );
}

function ProjectLinks({
  project,
  showCaseStudy = true,
  emphasized = false,
}: {
  project: HandoffProject;
  showCaseStudy?: boolean;
  emphasized?: boolean;
}) {
  const caseStudyHref = showCaseStudy ? project.caseStudyHref : null;
  if (!caseStudyHref && !project.sourceHref) return null;

  return (
    <div className={emphasized ? "pf-link-row is-emphasized" : "pf-link-row"}>
      {emphasized && caseStudyHref ? (
        <p className="pf-case-invite">
          Walk through the hardware setup, the detection pipeline, and the lab results.
        </p>
      ) : null}
      <div className="pf-link-actions">
        {caseStudyHref ? (
          <Link href={caseStudyHref} className="pf-case-link">
            Open the full case study
            <span aria-hidden="true"> →</span>
          </Link>
        ) : null}
        {project.sourceHref ? (
          <a
            href={project.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-source-link"
          >
            Source Code ↗
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [sort, setSort] = useState<ProjectSort>("recent");
  const [expandedId, setExpandedId] = useState<string | null>("retail-checkout");

    const featuredProjects = useMemo(() => {
    const filtered =
      filter === "All"
        ? FEATURED
        : FEATURED.filter((project) => project.tags.includes(filter));

    const flagship = filtered.filter((project) => project.highlight === "research");
    const rest = filtered.filter((project) => project.highlight !== "research");

    const ordered =
      sort === "impact"
        ? [...rest].sort((a, b) => b.impact - a.impact)
        : [...rest].sort((a, b) => FEATURED.indexOf(a) - FEATURED.indexOf(b));

    return [...flagship, ...ordered];
  }, [filter, sort]);

  return (
    <>
      <section id="work" className="pf-inner" data-section="true">
        <div className="pf-section-head">
          <div className="pf-eyebrow">Selected Work</div>
          <h2 className="pf-h2">Featured Projects</h2>
          <p className="pf-lead">
            The systems I&apos;d walk you through first. Expand a card for
            problem, approach, and result.
          </p>
        </div>

        <div className="pf-filter-row" data-noprint="true">
          <div className="pf-filter-chips" role="group" aria-label="Filter featured projects">
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
          <div className="pf-sort-row" role="group" aria-label="Sort featured projects">
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
          {featuredProjects.map((project) => {
            const expanded = expandedId === project.id;
            const flagship = project.highlight === "research";
            return (
              <article
                key={project.id}
                className={
                  flagship ? "pf-project-card is-flagship" : "pf-project-card"
                }
              >
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
                      {flagship ? (
                        <span className="pf-tag-pill">Senior Year Thesis</span>
                      ) : null}
                      {flagship ? null : (
                        <span className="pf-project-date">{project.date}</span>
                      )}
                      {project.tags.map((tag) => (
                        <span key={tag} className="pf-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="pf-project-title">
                      {flagship ? <FlagshipStar /> : null}
                      {project.title}
                    </h3>
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
                    <ProjectLinks project={project} emphasized={flagship} />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section id="more-work" className="pf-band" data-section="true">
        <div className="pf-inner">
          <div className="pf-section-head">
            <div className="pf-eyebrow">Additional Work</div>
            <h2 className="pf-h2">More systems and production work</h2>
            <p className="pf-lead">
              Hackathon builds, professional engagements, and earlier robotics,
              sanitised where confidentiality requires it.
            </p>
          </div>

          <div className="pf-more-grid">
            {ADDITIONAL.map((project) => (
              <article key={project.id} className="pf-more-card">
                <div className="pf-project-meta">
                  <span className="pf-project-date">{project.date}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pf-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="pf-more-title">{project.title}</h3>
                <p className="pf-more-blurb">{project.blurb}</p>
                <div className="pf-stack-row">
                  {project.stack.map((item) => (
                    <span key={item} className="pf-stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={project} showCaseStudy={false} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

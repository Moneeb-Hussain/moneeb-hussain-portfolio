import Link from "next/link";
import {
  RETAIL_CASE_STUDY,
} from "@/content/handoff";
import { CaseStudyNav } from "./Nav";

export function CaseStudyView() {
  const study = RETAIL_CASE_STUDY;
  const highlight = study.resultHighlight;
  const [beforeHighlight, afterHighlight] = study.result[0].split(highlight);

  return (
    <>
      <CaseStudyNav />
      <main id="main-content">
        <header className="pf-cs-hero">
          <div className="pf-cs-eyebrow">{study.eyebrow}</div>
          <h1 className="pf-cs-h1">{study.title}</h1>
          <p className="pf-cs-lead">{study.lead}</p>
          <div className="pf-cs-meta">
            {study.meta.map((item) => (
              <div key={item.label}>
                <div className="pf-cs-meta-label">{item.label}</div>
                <div className="pf-cs-meta-val">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        <div className="pf-placeholder" aria-hidden="true">
          <div className="pf-placeholder-label">{study.placeholders[0].label}</div>
        </div>

        <section className="pf-cs-section">
          <div className="pf-cs-stats">
            {study.heroStats.map((stat) => (
              <div key={stat.label} className="pf-cs-stat">
                <div className="pf-stat-num">{stat.value}</div>
                <div className="pf-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">01</span>
            <h2 className="pf-cs-h2">Problem</h2>
          </div>
          {study.problem.map((paragraph) => (
            <p key={paragraph} className="pf-cs-body">
              {paragraph}
            </p>
          ))}
          <div className="pf-obj-grid">
            {study.objectives.map((objective) => (
              <div key={objective.title} className="pf-obj-item">
                <div className="pf-obj-dot" />
                <div>
                  <div className="pf-obj-title">{objective.title}</div>
                  <div className="pf-obj-text">{objective.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">02</span>
            <h2 className="pf-cs-h2">Approach</h2>
          </div>
          <p className="pf-cs-body">{study.approachIntro}</p>
          <div className="pf-sub-grid">
            <div className="pf-sub-card">
              <div className="pf-sub-title">Hardware</div>
              <ul className="pf-sub-list">
                {study.hardware.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pf-sub-card">
              <div className="pf-sub-title">Software</div>
              <ul className="pf-sub-list">
                {study.software.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="pf-placeholder" aria-hidden="true">
          <div className="pf-placeholder-label">{study.placeholders[1].label}</div>
        </div>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">03</span>
            <h2 className="pf-cs-h2">What changed from V-2</h2>
          </div>
          <p className="pf-cs-body">{study.v2Intro}</p>
          <div className="pf-compare">
            {study.improvements.map((item) => (
              <div key={item.from} className="pf-compare-row">
                <div className="pf-compare-from">{item.from}</div>
                <div className="pf-compare-arrow" aria-hidden="true">
                  →
                </div>
                <div className="pf-compare-to">{item.to}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">04</span>
            <h2 className="pf-cs-h2">Result</h2>
          </div>
          <p className="pf-cs-body">
            {beforeHighlight}
            <strong className="pf-cs-strong">{highlight}</strong>
            {afterHighlight}
          </p>
          <p className="pf-cs-body">{study.result[1]}</p>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">05</span>
            <h2 className="pf-cs-h2">Stack</h2>
          </div>
          <div className="pf-cs-stack">
            {study.stack.map((item) => (
              <span key={item} className="pf-cs-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="pf-cs-next">
          <Link href="/#work">← Back to all projects</Link>
          <a
            href={study.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code ↗
          </a>
        </section>
      </main>
    </>
  );
}

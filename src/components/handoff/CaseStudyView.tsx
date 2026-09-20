import Image from "next/image";
import Link from "next/link";
import {
  RETAIL_CASE_STUDY,
  type CaseStudyFigure,
} from "@/content/handoff";
import { AskBar } from "./AskBar";
import { CaseStudyNav } from "./Nav";

function Figure({
  figure,
  priority = false,
}: {
  figure: CaseStudyFigure;
  priority?: boolean;
}) {
  return (
    <figure className="pf-cs-figure">
      <div
        className={`pf-cs-figure-frame${figure.contain ? " is-contain" : ""}`}
        style={{ aspectRatio: figure.aspect ?? "16 / 10" }}
      >
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes="(max-width: 960px) calc(100vw - 40px), 900px"
          className="pf-cs-figure-img"
          priority={priority}
        />
      </div>
      <figcaption className="pf-cs-caption">{figure.caption}</figcaption>
    </figure>
  );
}

export function CaseStudyView() {
  const study = RETAIL_CASE_STUDY;
  const highlight = study.resultHighlight;
  const [beforeHighlight, afterHighlight] = study.result[0].split(highlight);
  const figures = study.figures;

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

        <div className="pf-cs-bleed">
          <Figure figure={figures.hardware} priority />
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
            <h2 className="pf-cs-h2">How it works</h2>
          </div>
          <p className="pf-cs-body">{study.approachIntro}</p>
          <ol className="pf-cs-pipeline">
            {study.pipeline.map((step) => (
              <li key={step.mark} className="pf-cs-pipe">
                <div className="pf-cs-pipe-num">{step.mark}</div>
                <div className="pf-cs-pipe-title">{step.title}</div>
                <p className="pf-cs-pipe-text">{step.text}</p>
              </li>
            ))}
          </ol>
          <aside className="pf-cs-insight">
            <div className="pf-cs-insight-label">Why the belt never stops</div>
            <p>{study.countingInsight}</p>
          </aside>
          <Figure figure={figures.virtualLine} />
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">03</span>
            <h2 className="pf-cs-h2">Hardware</h2>
          </div>
          <p className="pf-cs-body">{study.hardwareIntro}</p>
          <div className="pf-sub-grid">
            <div className="pf-sub-card">
              <div className="pf-sub-title">Checkout rig</div>
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
          <div className="pf-cs-fig-pair">
            <Figure figure={figures.indexer} />
            <Figure figure={figures.circuit} />
          </div>
          <Figure figure={figures.team} />
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">04</span>
            <h2 className="pf-cs-h2">Dataset</h2>
          </div>
          <p className="pf-cs-body">
            The detector never saw generic product photography. Training frames
            came off this conveyor, under this hood, at this camera angle. That
            closed the gap between training and the live checkout view.
          </p>
          <div className="pf-cs-fig-pair">
            <Figure figure={figures.labelimg} />
            <Figure figure={figures.labelimgBoxes} />
          </div>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">05</span>
            <h2 className="pf-cs-h2">Detection and billing</h2>
          </div>
          <p className="pf-cs-body">
            Once a class is recognized, the GUI adds its price to a running
            bill. Checkout prints the receipt. Several SKUs can sit in frame at
            once. The virtual line is what stops a box being billed twice.
          </p>
          <Figure figure={figures.detection} />
          <Figure figure={figures.billing} />
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">06</span>
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
            <span className="pf-cs-num">07</span>
            <h2 className="pf-cs-h2">Result</h2>
          </div>
          <p className="pf-cs-body">
            {beforeHighlight}
            <strong className="pf-cs-strong">{highlight}</strong>
            {afterHighlight}
          </p>
          <p className="pf-cs-body">{study.result[1]}</p>
          <div className="pf-cs-assume">
            {study.assumptions.map((item) => (
              <div key={item.title} className="pf-cs-assume-card">
                <div className="pf-cs-assume-title">{item.title}</div>
                <p className="pf-cs-assume-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-cs-section">
          <div className="pf-cs-hrow">
            <span className="pf-cs-num">08</span>
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

        <AskBar />

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

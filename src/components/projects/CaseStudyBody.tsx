import type { CaseStudySection, ProjectSection } from "@/content/types";

interface CaseStudyBodyProps {
  sections: (CaseStudySection | ProjectSection)[];
}

export function CaseStudyBody({ sections }: CaseStudyBodyProps) {
  return (
    <div className="flex flex-col gap-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-text sm:text-2xl">
            {section.heading}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-pretty leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-2">
              {section.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-2.5 text-text-secondary">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cobalt" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

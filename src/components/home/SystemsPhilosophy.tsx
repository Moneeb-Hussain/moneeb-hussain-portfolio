import { Layers, ShieldCheck, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const principles = [
  {
    icon: Target,
    title: "Constrain the problem before scaling it",
    description:
      "The retail checkout thesis worked because the physical rig guaranteed one item at a time — the vision model only had to be confident about a narrow, well-defined problem. Scope discipline usually beats a bigger model.",
  },
  {
    icon: Users,
    title: "Human approval before consequential action",
    description:
      "AegisOps AI and FirstCheck AI both route every recommendation through a mandatory human decision before it takes effect. Decision support should inform judgment, not replace it.",
  },
  {
    icon: ShieldCheck,
    title: "State the limits as clearly as the results",
    description:
      "A controlled-lab accuracy figure is not a real-world benchmark. Every project on this site documents what its numbers do and don't prove, including safety notes on healthcare- and finance-adjacent prototypes.",
  },
  {
    icon: Layers,
    title: "Match training data to deployment reality",
    description:
      "The retail checkout dataset was captured on the exact conveyor rig it would run on, not sourced from generic product photography — closing the gap between training and deployment distributions.",
  },
];

export function SystemsPhilosophy() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="philosophy-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          id="philosophy-heading"
          eyebrow="Engineering principles"
          title="How these systems are meant to fail safely"
          description="Patterns that show up repeatedly across the projects below — not abstract values, but decisions that were actually made and can be pointed to."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title} className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-teal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-text">{principle.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

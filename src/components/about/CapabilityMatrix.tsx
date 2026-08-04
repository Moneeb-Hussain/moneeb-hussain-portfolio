import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

interface CapabilityGroup {
  title: string;
  description: string;
  match: (tech: string) => boolean;
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    title: "Computer vision & perception",
    description:
      "Object detection, classical image processing, and multimodal perception pipelines.",
    match: (tech) =>
      /opencv|yolo|darknet|vision|webcam|scan/i.test(tech),
  },
  {
    title: "AI systems & agents",
    description:
      "LLM-backed reasoning, multi-agent pipelines, and applied machine learning.",
    match: (tech) =>
      /openai|llm|agent|groq|ai\/ml|gemini/i.test(tech),
  },
  {
    title: "Backend & APIs",
    description: "Service architecture, REST APIs, and server-side application logic.",
    match: (tech) =>
      /fastapi|nestjs|node\.js|python$|typescript/i.test(tech),
  },
  {
    title: "Frontend engineering",
    description: "Interactive UI development across several frameworks and design systems.",
    match: (tech) =>
      /react|next\.js|vue|nuxt|tailwind|ant design|redux|pinia|vuetify|tkinter/i.test(tech),
  },
  {
    title: "Data & infrastructure",
    description: "Persistence layers, cloud deployment, and delivery pipelines.",
    match: (tech) =>
      /mysql|supabase|sqlite|gcp|ci\/cd/i.test(tech),
  },
  {
    title: "Embedded & industrial systems",
    description: "Hardware integration, PLC logic, and cyber-physical control loops.",
    match: (tech) =>
      /arduino|plc|nema|conveyor|electrical|asrs|industrial automation|embedded|motor|sensor|matlab|ros/i.test(
        tech,
      ),
  },
];

function collectAllTech(): string[] {
  const tech = new Set<string>();
  for (const project of projects) {
    for (const item of project.tech) tech.add(item);
  }
  for (const entry of experience) {
    for (const item of entry.tech ?? []) tech.add(item);
  }
  return Array.from(tech);
}

export function CapabilityMatrix() {
  const allTech = collectAllTech();

  const groups = CAPABILITY_GROUPS.map((group) => ({
    ...group,
    items: allTech.filter((tech) => group.match(tech)),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-lg border border-border bg-surface p-6">
          <h3 className="font-semibold text-text">{group.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
            {group.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

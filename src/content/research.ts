import type { ResearchTheme } from "./types";

/**
 * Durable research themes rather than a single lab-specific pitch (strategy
 * §7). Framed as open questions to explore, not claimed contributions -
 * there is no peer-reviewed publication to point to.
 */
export const researchThemes: ResearchTheme[] = [
  {
    id: "resource-aware-computer-vision",
    title: "Resource-aware computer vision",
    description:
      "Object detection and perception pipelines that stay accurate under real hardware constraints - limited compute, fixed cameras, and tight per-item time budgets - rather than assuming a GPU-rich deployment.",
    questions: [
      "How much accuracy can lightweight detectors like YOLOv4-tiny recover through better data curation instead of bigger models?",
      "What perception architectures degrade gracefully - rather than catastrophically - when compute or lighting conditions shift?",
    ],
    relatedProjectSlugs: ["automatic-retail-checkout"],
  },
  {
    id: "intelligent-sensing-computational-imaging",
    title: "Intelligent sensing & computational imaging",
    description:
      "Extending perception beyond a single RGB camera - combining classical image processing with learned models to make sensing more robust in constrained physical setups.",
    questions: [
      "Where does classical computer vision (lighting control, fixed geometry, calibration) still outperform end-to-end learned pipelines in constrained environments?",
      "How should a system decide when to trust a sensor reading versus flag it for review?",
    ],
    relatedProjectSlugs: ["automatic-retail-checkout", "industrial-asrs"],
  },
  {
    id: "reliable-multimodal-ai",
    title: "Reliable multimodal AI",
    description:
      "Systems that combine text, vision, and structured data through multiple cooperating agents - and that are honest about their own uncertainty rather than always returning a confident single answer.",
    questions: [
      "How can adversarial self-review (one agent checking another's output) be measured, not just assumed to help?",
      "What's the right way to communicate model uncertainty to a non-technical end user making a real decision?",
    ],
    relatedProjectSlugs: ["firstcheck-ai", "livestock-ai"],
  },
  {
    id: "human-in-the-loop-decision-systems",
    title: "Human-in-the-loop decision systems",
    description:
      "Decision-support tools for operational settings - hospitals, farms, financial research - where an AI recommendation should inform a human decision, never replace it.",
    questions: [
      "What interface and logging patterns make human override genuinely easy to exercise, rather than a rubber stamp?",
      "How should confidence scores and alternative recommendations be presented so they're actually useful under time pressure?",
    ],
    relatedProjectSlugs: ["aegisops-ai", "firstcheck-ai"],
  },
  {
    id: "cyber-physical-intelligent-automation",
    title: "Cyber-physical & intelligent automation",
    description:
      "Systems that connect software decisions to physical actuation - conveyors, motors, PLCs - where timing, safety, and hardware failure modes matter as much as model accuracy.",
    questions: [
      "How should a vision-driven control loop detect and recover from its own hardware-side failures (jams, missed indexing, sensor dropout)?",
      "What does it take to move a lab-validated cyber-physical prototype toward dependable, repeatable operation?",
    ],
    relatedProjectSlugs: ["automatic-retail-checkout", "industrial-asrs"],
  },
];

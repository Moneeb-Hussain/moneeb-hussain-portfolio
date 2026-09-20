import type { Project } from "./types";

/**
 * Verified project inventory. Ranking, roles, and figures are sourced from
 * PORTFOLIO_CONTENT_AUDIT.md - the latest CV is the tiebreaker for any
 * conflicting older resume. Do not add metrics, demo URLs, or team credits
 * that aren't independently verifiable.
 */
export const projects: Project[] = [
  // 1 ------------------------------------------------------------------
  {
    slug: "automatic-retail-checkout",
    title: "Automatic Retail Checkout V-3",
    subtitle:
      "A vision-based, barcode-free checkout prototype integrating perception, motion, counting, and billing.",
    summary:
      "Final-year thesis building a barcode-free retail checkout: a webcam and YOLOv4-tiny pipeline detects and counts products on a running conveyor, then a Tkinter GUI prints the bill.",
    status: "academic-thesis",
    featured: 1,
    role: "Computer Vision & Systems Engineer",
    team: [
      { name: "Moneeb Hussain", role: "Computer Vision & Systems Engineer" },
      { name: "Arbaz Ch.", role: "Team Member" },
      { name: "Khawaja Daniyal", role: "Team Member" },
    ],
    advisor: "Muhammad Rzi Abbas",
    organization: "AI & Robotics Laboratory, UET Lahore",
    location: "Lahore, Pakistan",
    tech: [
      "Python",
      "OpenCV",
      "YOLOv4-tiny",
      "Darknet",
      "Tkinter",
      "Arduino Uno",
      "NEMA 17",
      "Conveyor",
      "Webcam",
    ],
    metrics: [
      {
        label: "Detection accuracy",
        value: "98.78%",
        description: "Measured in controlled lab tests, not real-world retail conditions",
      },
      {
        label: "Training images",
        value: "3,500",
        description: "Custom dataset captured from the project's own conveyor rig",
      },
      {
        label: "Product classes",
        value: "70",
        description: "Retail product classes recognized by the detector",
      },
      {
        label: "Per-item processing time",
        value: "~4s → under 1s",
        description: "Improvement from the earliest prototype to the V-3 pipeline",
      },
    ],
    links: {},
    safetyNote:
      "Accuracy figures are from controlled lab testing only and should not be read as a real-world retail benchmark.",
    caseStudySlug: "automatic-retail-checkout",
    relatedSlugs: ["industrial-asrs", "aegisops-ai"],
    order: 1,
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Conventional retail checkout depends on barcodes and manual scanning, which slows throughput and breaks down for loose or mislabeled items. The thesis asked whether a camera-only pipeline could reliably identify and count products moving past a fixed point, then hand that count to a billing system without a cashier scanning each item.",
        ],
      },
      {
        id: "physical-architecture",
        heading: "Physical architecture",
        paragraphs: [
          "A motorised conveyor carries products under a wooden hood with LED lighting and a fixed Logitech C310 webcam. V-3 counts on a running belt: a virtual green line in software, not a laser that stops the belt. A separate rotary indexer (NEMA 17 and Arduino Uno) is used to photograph new products for retraining, not to sequence checkout.",
        ],
      },
      {
        id: "perception",
        heading: "Perception pipeline",
        paragraphs: [
          "A YOLOv4-tiny model trained with Darknet performs real-time object detection on each captured frame, classifying products into one of 70 trained classes. YOLOv4-tiny was chosen over larger YOLO variants specifically for its lower latency on modest hardware, which mattered for keeping the per-item cycle time down.",
        ],
      },
      {
        id: "dataset",
        heading: "Dataset",
        paragraphs: [
          "The team captured roughly 3,500 images directly from the conveyor rig rather than relying on stock product-image datasets, so the training distribution matched the actual camera angle, lighting, and motion blur the system would see in operation.",
        ],
      },
      {
        id: "hardware",
        heading: "Hardware integration",
        paragraphs: [
          "A Tkinter desktop application on the PC runs inference, keeps a running bill, and drives an HP LaserJet to print the receipt. The Arduino Uno and NEMA 17 belong to the rotary indexer used when a new SKU has to enter the catalog.",
        ],
      },
      {
        id: "software",
        heading: "Software",
        paragraphs: [
          "Python and OpenCV handle frame capture and preprocessing. The Tkinter UI presents live detections and a running bill. A virtual counting line increments the bill when a box crosses it, so several SKUs can share a frame without the belt stopping.",
        ],
      },
      {
        id: "decisions",
        heading: "Key decisions",
        paragraphs: [
          "The team chose a barcode-free approach specifically to explore whether computer vision alone could replace scanning for a constrained product set. Using YOLOv4-tiny instead of a heavier detector traded a small amount of accuracy for real-time performance on the lab's hardware - a trade-off validated by the sub-1-second per-item processing time.",
        ],
      },
      {
        id: "limitations",
        heading: "Limitations",
        paragraphs: [
          "The 98.78% accuracy figure comes from controlled lab conditions with fixed lighting and a limited 70-class product catalog; it is not a claim about open-set retail environments, cluttered scenes, or adversarial packaging. The system was built and evaluated as a thesis prototype, not a deployed retail product.",
        ],
      },
      {
        id: "future-work",
        heading: "Future work",
        paragraphs: [
          "Natural next steps identified during the thesis include expanding the product catalog beyond 70 classes, testing robustness under variable ambient lighting, and evaluating occlusion handling when multiple items pass the camera close together.",
        ],
      },
    ],
  },

  // 2 ------------------------------------------------------------------
  {
    slug: "aegisops-ai",
    title: "AegisOps AI - Digital Hospital Command Center",
    subtitle:
      "An operational decision-support prototype that scores urgency, tracks resources, and routes AI recommendations through human approval.",
    summary:
      "A hackathon prototype for hospital operations teams: urgency scoring and resource monitoring surface AI recommendations with confidence and alternatives, but every action still requires human approval before it takes effect.",
    status: "hackathon-prototype",
    featured: 2,
    role: "AI/ML Engineer",
    teamSize: 6,
    tech: ["FastAPI", "React", "Tailwind CSS", "Supabase", "OpenAI", "Render"],
    links: {
      github: "https://github.com/Moneeb-Hussain/real-time-hospital-intelligence-platform",
    },
    safetyNote:
      "Operational decision support only - not a diagnostic or prescribing system. No real patient data is used or claimed. Every AI recommendation requires human approval, with a rule-based fallback available if AI services are unavailable.",
    caseStudySlug: "aegisops-ai",
    relatedSlugs: ["firstcheck-ai", "livestock-ai"],
    order: 2,
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Hospital operations teams juggle bed availability, staff allocation, and incoming case urgency under time pressure, often without a single view that ranks what needs attention first. AegisOps AI was built during a hackathon to prototype that command-center view.",
        ],
      },
      {
        id: "approach",
        heading: "Approach",
        paragraphs: [
          "The system scores incoming cases for urgency and cross-references live resource monitoring (beds, staff, equipment) to recommend an allocation. Recommendations are presented with a confidence score and alternative options rather than a single black-box answer, and every recommendation sits behind a human approve/override step with a full audit log.",
        ],
      },
      {
        id: "role",
        heading: "My role",
        paragraphs: [
          "As one of six team members, I worked as the AI/ML engineer, building the FastAPI services that produce urgency scores and AI recommendations and wiring them to Supabase for persistence and to OpenAI for the reasoning layer, with a deterministic rule-based fallback so the system degrades safely if the AI service is unavailable.",
        ],
      },
      {
        id: "safety-design",
        heading: "Safety design",
        paragraphs: [
          "Because the domain is healthcare operations, the team scoped the system to decision support rather than diagnosis: it never claims to diagnose a patient, never acts autonomously, and does not use or claim access to real patient data. Human approve/override and audit logging were treated as first-class requirements, not an afterthought.",
        ],
      },
      {
        id: "limitations",
        heading: "Limitations",
        paragraphs: [
          "AegisOps AI is a hackathon prototype validated with simulated scenarios, not a clinically deployed or validated system. No hospital deployment, clinical validation, or award should be inferred from this project.",
        ],
      },
    ],
  },

  // 3 ------------------------------------------------------------------
  {
    slug: "firstcheck-ai",
    title: "FirstCheck AI - VC Brain",
    subtitle:
      "A multi-agent research pipeline that screens startups, drafts investment memos, and routes conclusions through adversarial review and human sign-off.",
    summary:
      "Built for the Hack-Nation VC Brain hackathon: a multi-agent pipeline discovers and screens startups, drafts a memo, subjects it to adversarial review, and requires a human decision before anything is treated as final.",
    status: "hackathon-prototype",
    featured: 3,
    role: "Backend & trustworthy AI systems contributor",
    organization: "Hack-Nation / VC Brain hackathon",
    tech: ["Next.js", "FastAPI", "SQLite", "OpenAI", "Multi-agent pipeline"],
    links: {
      github: "https://github.com/Moneeb-Hussain/venture-intelligence",
    },
    disclaimer:
      "Research/hackathon prototype - not investment advice. No customers, returns, or production deployment are claimed.",
    caseStudySlug: "firstcheck-ai",
    relatedSlugs: ["aegisops-ai", "pakai-capital"],
    order: 3,
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Early-stage investment screening involves reading through founder materials, filings, and market context to produce a defensible view of a startup - work that's slow and inconsistent when done manually at volume. FirstCheck AI prototypes an assisted pipeline for that screening process.",
        ],
      },
      {
        id: "pipeline",
        heading: "Pipeline",
        paragraphs: [
          "The system moves through discovery, extraction, screening, and diligence stages before drafting an investment memo. That memo then goes through an adversarial review step designed to challenge its own conclusions, followed by a verification pass, before a human makes the final call - with every step logged for audit.",
        ],
      },
      {
        id: "role",
        heading: "My role",
        paragraphs: [
          "I contributed to the backend and to the trustworthy-AI aspects of the pipeline - the parts of the system responsible for verification, adversarial review, and keeping a human in the decision loop rather than letting the pipeline auto-conclude.",
        ],
      },
      {
        id: "trust-by-design",
        heading: "Trust by design",
        paragraphs: [
          "The adversarial review and verification stages exist specifically so a generated memo isn't taken at face value - the pipeline is designed to argue with itself before a human ever sees a final recommendation, and every recommendation requires a human decision before it's treated as final.",
        ],
      },
      {
        id: "limitations",
        heading: "Limitations",
        paragraphs: [
          "FirstCheck AI is a hackathon research prototype. It does not constitute investment advice, and no customers, deployed usage, or financial outcomes are claimed.",
        ],
      },
    ],
  },

  // 4 ------------------------------------------------------------------
  {
    slug: "pakai-capital",
    title: "PakAI Capital",
    subtitle:
      "Multi-agent research assistants that synthesize market, filings, news, macro, and risk data for the Pakistan Stock Exchange.",
    summary:
      "A hackathon prototype where LLM-driven agents each specialize in a data domain - market data, filings, news, macro, and risk - to assemble a combined research view of PSX-listed activity.",
    status: "hackathon-prototype",
    role: "AI Systems Developer",
    tech: ["Next.js", "FastAPI", "Python", "LLM Agents"],
    links: {
      github: "https://github.com/abdulrehman-work/psx-ai-trading-agents-hackathon",
    },
    disclaimer: "Research prototype - not financial advice.",
    relatedSlugs: ["firstcheck-ai", "livestock-ai"],
    order: 4,
  },

  // 5 ------------------------------------------------------------------
  {
    slug: "livestock-ai",
    title: "Livestock AI Assistant",
    subtitle:
      "A multimodal assistant that helps farmers triage livestock symptoms via text, voice, and images, with guidance toward professional care when needed.",
    summary:
      "Led a hackathon team building a livestock health assistant: farmers describe or photograph a symptom and the system responds with guidance and, where appropriate, an escalation path - not a diagnosis.",
    status: "hackathon-prototype",
    role: "Team Lead",
    tech: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "Groq",
      "Gemini Vision",
      "OpenStreetMap",
    ],
    links: {
      demo: "https://livestock-ai-assistant.vercel.app/",
      github: "https://github.com/Moneeb-Hussain/livestock-ai-assistant",
    },
    safetyNote:
      "Provides guidance and escalation pathways only - it is not a substitute for veterinary diagnosis.",
    relatedSlugs: ["aegisops-ai", "pakai-capital"],
    order: 5,
  },

  // 6 ------------------------------------------------------------------
  {
    slug: "esgtree",
    title: "ESGTree - Sustainability Reporting Platform",
    subtitle:
      "A sanitised case study of a production ESG data-collection and reporting platform built at Septem Systems.",
    summary:
      "A full-stack sustainability reporting platform that collects ESG data from organisations and turns it into structured reports - described here without client-identifying detail.",
    status: "professional-work",
    confidential: true,
    role: "Full-stack Software Developer",
    organization: "Septem Systems (client engagement)",
    tech: ["Nuxt 2", "Vuex", "Node.js", "MySQL"],
    links: {},
    relatedSlugs: ["unodc-workflow", "smart-interview-coach"],
    order: 6,
  },

  // 7 ------------------------------------------------------------------
  {
    slug: "unodc-workflow",
    title: "MLA & Extradition Workflow Platform",
    subtitle:
      "A sanitised case study of a case-management workflow system for cross-border legal assistance requests, built at Septem Systems.",
    summary:
      "A structured workflow platform supporting mutual legal assistance and extradition case processes - described here at a system level, without case records or confidential process detail.",
    status: "professional-work",
    confidential: true,
    role: "Full-stack Developer",
    organization: "Septem Systems (client engagement)",
    period: "Jun 2024 – Jan 2026",
    tech: ["TypeScript", "NestJS", "Vue 3", "Pinia", "Vuetify", "MySQL"],
    links: {},
    relatedSlugs: ["esgtree", "smart-interview-coach"],
    order: 7,
  },

  // 8 ------------------------------------------------------------------
  {
    slug: "hackerrank-orchestrate",
    title: "HackerRank Orchestrate - Terminal Triage Agent",
    subtitle:
      "A terminal-based agent built for HackerRank's Orchestrate competition, triaging support-style tickets across multiple corpora.",
    summary:
      "Designed and built a terminal agent that triages tickets across HackerRank, Claude, and Visa-related corpora for the Orchestrate competition, finishing rank 373 of roughly 10,000 entrants after a judged interview round.",
    status: "competition-project",
    role: "AI Systems Developer",
    period: "May 2026",
    tech: ["Python", "LLM Agents", "Terminal Tooling"],
    metrics: [
      {
        label: "Result",
        value: "Top 4%",
        description: "Ranked 373 of approximately 10,000 participants",
      },
    ],
    links: {},
    relatedSlugs: ["firstcheck-ai", "aegisops-ai"],
    order: 8,
  },

  // 9 ------------------------------------------------------------------
  {
    slug: "industrial-asrs",
    title: "Industrial ASRS Commissioning",
    subtitle:
      "Hands-on PLC and automated storage/retrieval system commissioning at Style Textile.",
    summary:
      "Commissioned and maintained an automated storage and retrieval system on the plant floor - PLC logic, electrical schematics, I/O troubleshooting, and emergency electrical/control maintenance.",
    status: "industrial-engineering",
    role: "Engineer",
    organization: "Style Textile Pvt. Ltd.",
    period: "Aug 2021 – Aug 2023",
    tech: [
      "PLC Programming",
      "Electrical Schematics",
      "I/O Troubleshooting",
      "ASRS",
      "Industrial Automation",
    ],
    links: {},
    relatedSlugs: ["automatic-retail-checkout"],
    order: 9,
  },

  // 10 -----------------------------------------------------------------
  {
    slug: "smart-interview-coach",
    title: "Smart Interview Coach",
    subtitle:
      "A full-stack interview-preparation tool built at Septem Systems.",
    summary:
      "An interview-practice application covering question banks, session tracking, and feedback flows for candidates preparing for technical interviews.",
    status: "professional-work",
    role: "Full-stack Developer",
    organization: "Septem Systems",
    period: "Nov 2023 – Feb 2024",
    tech: ["TypeScript", "React", "Ant Design", "Redux", "NestJS", "MySQL"],
    links: {},
    relatedSlugs: ["esgtree", "unodc-workflow"],
    order: 10,
  },

  // 11 -----------------------------------------------------------------
  {
    slug: "line-following-robot",
    title: "Line Following Robot",
    subtitle: "An autonomous line-following robot built for an institutional robotics competition.",
    summary:
      "Designed and built an autonomous line-following robot as part of an undergraduate robotics competition, combining sensor feedback with closed-loop motor control.",
    status: "competition-project",
    role: "Competitor",
    organization: "UET Lahore",
    tech: ["Embedded Systems", "Sensor Integration", "Motor Control"],
    links: {},
    relatedSlugs: ["robowars", "industrial-asrs"],
    order: 11,
  },

  // 12 -----------------------------------------------------------------
  {
    slug: "robowars",
    title: "RoboWars",
    subtitle: "A combat robotics build for an institutional RoboWars competition.",
    summary:
      "Built and piloted a combat robot for an institutional RoboWars competition, covering mechanical design, drive control, and durability under direct contact.",
    status: "competition-project",
    role: "Competitor",
    organization: "UET Lahore",
    tech: ["Embedded Systems", "Motor Control", "Mechanical Design"],
    links: {},
    relatedSlugs: ["line-following-robot", "industrial-asrs"],
    order: 12,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Featured flagships for the homepage, ordered by their `featured` rank. */
export function getFeaturedProjects(): Project[] {
  return projects
    .filter(
      (project): project is Project & { featured: number } =>
        typeof project.featured === "number",
    )
    .sort((a, b) => a.featured - b.featured);
}

/** Every project meant for public listing, in curated order. Hides `planned` work. */
export function getVisibleProjects(): Project[] {
  return projects
    .filter((project) => project.status !== "planned")
    .slice()
    .sort((a, b) => a.order - b.order);
}

/**
 * Related work for a project's detail page: explicit `relatedSlugs` first,
 * then a fallback ranked by shared tech tags.
 */
export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];

  const explicit = (current.relatedSlugs ?? [])
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((project): project is Project => Boolean(project));

  if (explicit.length >= limit) {
    return explicit.slice(0, limit);
  }

  const explicitSlugs = new Set(explicit.map((project) => project.slug));

  const bySharedTech = getVisibleProjects()
    .filter(
      (project) => project.slug !== slug && !explicitSlugs.has(project.slug),
    )
    .map((project) => ({
      project,
      overlap: project.tech.filter((tech) => current.tech.includes(tech))
        .length,
    }))
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .map((entry) => entry.project);

  return [...explicit, ...bySharedTech].slice(0, limit);
}

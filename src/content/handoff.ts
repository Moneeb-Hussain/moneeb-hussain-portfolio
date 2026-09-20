/**
 * Typed content for the handoff homepage and retail-checkout case study.
 * Copy is taken from design_handoff_portfolio (README + HTML references).
 */

export type ThemeName = "dark" | "light";
export type ProjectSort = "recent" | "impact";
export type ProjectFilter = "All" | "Computer Vision" | "GenAI" | "Robotics";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const PROJECT_FILTERS: ProjectFilter[] = [
  "All",
  "Computer Vision",
  "GenAI",
  "Robotics",
];

export interface HandoffStat {
  value: string;
  label: string;
}

export interface HandoffProject {
  id: string;
  title: string;
  date: string;
  tags: Array<Exclude<ProjectFilter, "All">>;
  blurb: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  sourceHref: string;
  caseStudyHref: string | null;
  impact: number;
}

export interface HandoffPrinciple {
  title: string;
  text: string;
}

export interface HandoffExperience {
  period: string;
  role: string;
  org: string;
  bullets: string[];
}

export interface HandoffSkillGroup {
  title: string;
  items: string[];
}

export interface HandoffResearchInterest {
  title: string;
  text: string;
  question: string;
  relatedProjects: string[];
}

export interface HandoffAchievement {
  mark: string;
  category: string;
  text: string;
}

export interface CaseStudyObjective {
  title: string;
  text: string;
}

export interface CaseStudyImprovement {
  from: string;
  to: string;
}

export const handoffProfile = {
  name: "Moneeb Hussain",
  mark: "MH",
  eyebrow: "AI Systems · Computer Vision · Robotics · Intelligent Automation",
  statement:
    "Turning machine-learning research into systems that ship, from perception to action.",
  lead: "I am Moneeb Hussain, a software engineer and mechatronics graduate building computer-vision, multimodal-AI and operational decision systems across physical and digital environments.",
  email: "moneebhussain539@gmail.com",
  phone: "+92 321 4694262",
  phoneHref: "tel:+923214694262",
  github: "https://github.com/Moneeb-Hussain",
  linkedin: "https://www.linkedin.com/in/moneebhussain112/",
  resumeHref: "/assets/Moneeb-Hussain-Resume.pdf",
  resumeDownloadName: "Moneeb-Hussain-Resume.pdf",
  headshotSrc: "/assets/headshot.png",
  headshotAlt: "Portrait of Moneeb Hussain",
  footerHeading: "Let's build something.",
  footerLead: "Open to computer vision, applied AI, and systems-engineering roles.",
  copyright: "© 2026 Moneeb Hussain",
} as const;

export const handoffNav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
] as const;

export const STATS: HandoffStat[] = [
  { value: "98.78%", label: "Detection accuracy, Retail Checkout" },
  { value: "3.9s → 1.2s", label: "API latency cut at Septem Systems" },
  { value: "3,500", label: "Training images across 70 classes" },
  { value: "150+", label: "Learners mentored at iCodeGuru" },
  { value: "Top 4%", label: "HackerRank Orchestrate, 10,000+ entrants" },
  { value: "7+", label: "International hackathons" },
];

export const PROJECTS: HandoffProject[] = [
  {
    id: "retail-checkout",
    title: "Automatic Retail Checkout V-3",
    date: "2020 – 2021 · Senior Thesis",
    tags: ["Computer Vision", "Robotics"],
    blurb:
      "Barcode-free retail checkout that detects, counts, and bills products in under a second.",
    problem:
      "Manual barcode scanning bottlenecks checkout lines. The goal: identify retail items and generate a bill without a barcode scanner or a skilled operator.",
    approach:
      "Trained YOLOv4-tiny on a custom conveyor-captured dataset of 3,500 images across 70 product classes. Designed a rotary-indexer mechanism to automate new-product image capture, paired OpenCV inference with controlled LED lighting, and wired the pipeline to a GUI for automatic receipt generation.",
    result:
      "98.78% detection accuracy in controlled testing. Checkout time per item dropped from ~4s to under 1s, with multiple products now detectable on a running conveyor instead of one at a time.",
    stack: [
      "Python",
      "OpenCV",
      "YOLOv4-tiny",
      "Darknet",
      "Arduino Uno",
      "NEMA 17 Stepper",
    ],
    sourceHref: "https://github.com/Moneeb-Hussain",
    caseStudyHref: "/retail-checkout",
    impact: 3,
  },
  {
    id: "heatlens",
    title: "HeatLens",
    date: "Sep 2026 · Hackathon",
    tags: ["GenAI", "Computer Vision"],
    blurb:
      "Maps street-level photos to real air-temperature differences to prioritize urban canopy investment.",
    problem:
      "Satellite land-surface temperature misses what pedestrians actually feel at street level, and cities need a street-view signal to target tree-canopy investment.",
    approach:
      "Ran SegFormer over street photos to extract canopy, asphalt, sky, and building fractions, then fit °C-per-canopy coefficients against FortyGuard’s 2m air ΔT readings.",
    result:
      "Ranked streets by projected ΔT drop if canopy coverage rises toward 40%, shipped as a live web app for city planners.",
    stack: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "SegFormer",
      "FastAPI",
      "Next.js",
      "Mapillary API",
    ],
    sourceHref: "https://github.com/Moneeb-Hussain",
    caseStudyHref: null,
    impact: 2,
  },
  {
    id: "livestock-ai",
    title: "Livestock AI",
    date: "May 2026 · Hackathon · Team Lead",
    tags: ["GenAI", "Robotics"],
    blurb:
      "Multimodal triage assistant guiding under-resourced farmers through livestock health issues.",
    problem:
      "Farmers in under-resourced regions lack fast, reliable access to veterinary guidance when livestock show signs of illness.",
    approach:
      "Led a team building multimodal triage across symptom chat, photo observations, and voice input, with structured AI outputs carrying severity labels and safety validation before any care advice.",
    result:
      "Deployed a live triage app with case history and outbreak reporting, including a built-in vet-escalation path for high-severity cases.",
    stack: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "Groq",
      "Gemini Vision",
      "OpenStreetMap",
    ],
    sourceHref: "https://github.com/Moneeb-Hussain",
    caseStudyHref: null,
    impact: 1,
  },
];

export const PRINCIPLES: HandoffPrinciple[] = [
  {
    title: "Constrain the problem before scaling it",
    text: "The retail-checkout thesis worked because the fixed rig and lighting bounded the problem: the model only had to be confident within that controlled setup. Scope discipline usually beats a bigger model.",
  },
  {
    title: "Human approval before consequential action",
    text: "Livestock AI routes every high-severity case through a vet-escalation path before advice reaches a farmer. Decision support should inform judgment, not replace it.",
  },
  {
    title: "State the limits as clearly as the results",
    text: "A controlled-lab accuracy figure is not a real-world benchmark. The retail-checkout writeup documents its working assumptions, occlusion, catalog closure, packaging orientation, alongside the 98.78% number.",
  },
  {
    title: "Match training data to deployment reality",
    text: "The retail-checkout dataset was captured on the exact conveyor rig it would run on, not sourced from generic product photography, closing the gap between training and deployment distributions.",
  },
];

export const EXPERIENCE: HandoffExperience[] = [
  {
    period: "Oct 2023 – Present",
    role: "Software Engineer II",
    org: "Septem Systems · Lahore, Pakistan",
    bullets: [
      "Built production workflows across front-end, backend APIs, secure workflows, CI/CD, and GCP deployments.",
      "Reduced API latency from 3.9s to 1.2s through SQL optimization, legacy refactoring, and debugging.",
      "Recognized as Employee of the Quarter for problem-solving and reliable delivery.",
    ],
  },
  {
    period: "Feb 2026 – Present",
    role: "Technical Trainer & Moderator",
    org: "iCodeGuru · Remote, Silicon Valley",
    bullets: [
      "Mentored 80+ underprivileged learners across programming, data structures, and AI-focused training.",
      "Co-designed a 6-week Python-to-GenAI curriculum for a cohort of 150+ enrolled learners.",
      "Designed a two-part MATLAB/Simulink control-systems workshop, from PID fundamentals to closed-loop robustness.",
    ],
  },
  {
    period: "Aug 2021 – Aug 2023",
    role: "Engineer",
    org: "Style Textile Pvt. Ltd. · Lahore, Pakistan",
    bullets: [
      "Analyzed PLC logic, electrical schematics, and I/O behavior to troubleshoot automation faults.",
      "Validated hardware-control integration during ASRS warehouse-automation commissioning and deployment.",
    ],
  },
];

export const SKILL_GROUPS: HandoffSkillGroup[] = [
  {
    title: "AI, ML & GenAI",
    items: ["Generative AI", "Multimodal AI", "LLM Agents", "Multi-Agent Systems"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "Object Detection", "Image Processing", "Image Annotation"],
  },
  {
    title: "Programming",
    items: ["Python", "MATLAB", "JavaScript", "TypeScript", "Pandas", "NumPy"],
  },
  {
    title: "Robotics & Control",
    items: [
      "ROS",
      "Simulink",
      "Arduino",
      "Control Systems",
      "Sensor/Actuator Integration",
    ],
  },
  {
    title: "Backend & Cloud",
    items: ["FastAPI", "Node.js", "NestJS", "Next.js", "React.js", "Docker", "GCP"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase", "Git", "GitHub"],
  },
];

export const RESEARCH_INTERESTS: HandoffResearchInterest[] = [
  {
    title: "Resource-aware computer vision",
    text: "Object detection and perception pipelines that stay accurate under real hardware constraints: limited compute, fixed cameras, and tight per-item time budgets, rather than assuming a GPU-rich deployment.",
    question:
      "How much accuracy can lightweight detectors like YOLOv4-tiny recover through better data curation instead of bigger models?",
    relatedProjects: ["Automatic Retail Checkout V-3"],
  },
  {
    title: "Intelligent sensing & computational imaging",
    text: "Extending perception beyond a single RGB camera, combining classical image processing with learned models to make sensing more robust in constrained physical setups.",
    question:
      "Where does classical computer vision (lighting control, fixed geometry, calibration) still outperform end-to-end learned pipelines in constrained environments?",
    relatedProjects: [
      "Automatic Retail Checkout V-3",
      "Industrial ASRS Commissioning",
    ],
  },
  {
    title: "Reliable multimodal AI",
    text: "Systems that combine text, vision, and voice input to make structured, safety-checked decisions, and that route uncertain or high-severity cases to a human instead of guessing.",
    question:
      "How should severity labels and escalation paths in a triage system be tested for reliability, rather than assumed to work?",
    relatedProjects: ["Livestock AI Assistant", "HeatLens"],
  },
];

export const ACHIEVEMENTS: HandoffAchievement[] = [
  {
    mark: "01",
    category: "Competition Win",
    text: "Winner, Harvard CS50x Puzzle Day, perfect 10/10 score as Team Lead.",
  },
  {
    mark: "02",
    category: "Global Ranking",
    text: "Top 4% of 10,000+ entrants, HackerRank Orchestrate (support-ticket triage agent).",
  },
  {
    mark: "03",
    category: "Global Ranking",
    text: "Top 8% worldwide among 220+ teams, CodeSprint, hosted by UCLA.",
  },
  {
    mark: "04",
    category: "Honour",
    text: "Pre-Finalist and Special Honour recipient, International Computer Science Competition 2026.",
  },
  {
    mark: "05",
    category: "Program",
    text: "Top 5% performer, GenAI Program by Pak Angels USA & PEC Pakistan.",
  },
  {
    mark: "06",
    category: "Robotics",
    text: "Winner, Line Following Robot and RoboWars, institutional robotics competitions.",
  },
  {
    mark: "07",
    category: "Leadership",
    text: "Team Lead, 5+ international AI hackathons.",
  },
  {
    mark: "08",
    category: "Fellowship",
    text: "Stanford-Funded Fellowship with Honors.",
  },
  {
    mark: "09",
    category: "Certification",
    text: "IELTS Academic, Band 7 overall (C1).",
  },
];

export const EDUCATION = {
  school: "University of Engineering and Technology, Lahore",
  degree: "BS, Mechatronics & Control Engineering",
  tools:
    "MATLAB/Simulink for feedback-control modeling · ROS for robot communication and simulation",
  years: "2017 – 2021",
  cgpa: "CGPA 3.16 / 4.0",
} as const;

export const RETAIL_CASE_STUDY = {
  eyebrow: "Case Study · Senior Thesis · AI & Robotics Lab, UET Lahore",
  title: "Automatic Retail Checkout V-3",
  lead: "A barcode-free checkout system that detects, counts, and bills retail products from a conveyor-mounted camera, no scanner, no cashier.",
  meta: [
    { label: "Role", value: "Vision & ML lead, hardware co-design" },
    { label: "Team", value: "3 engineers · Advisor: Muhammad Rzi Abbas" },
    { label: "Timeline", value: "Final year, 2020 – 2021" },
    { label: "Stack", value: "Python · OpenCV · YOLOv4-tiny · Arduino" },
  ],
  placeholders: [
    { label: "// conveyor rig + rotary indexer, photo" },
    { label: "// billing GUI, screen capture" },
  ],
  heroStats: [
    { value: "98.78%", label: "Detection accuracy" },
    { value: "4s → <1s", label: "Per-item checkout time" },
    { value: "3,500 / 70", label: "Training images / classes" },
  ] satisfies HandoffStat[],
  problem: [
    "Supermarket checkout lines run on barcode scanners: an operator locates each barcode by hand and hovers a scanner over it. It works, but it is slow, and every extra second in the queue compounds at scale.",
    "The brief we set for ourselves: identify retail items and generate a bill without a barcode scanner or a skilled operator, reducing dependency on trained staff while speeding up the process.",
  ],
  objectives: [
    {
      title: "Object Identification",
      text: "Accurately identify retail items without a barcode.",
    },
    {
      title: "Autonomy",
      text: "Reduce dependency on a trained operator for checkouts.",
    },
    {
      title: "Time Saving",
      text: "Cut per-item checkout time from roughly four seconds.",
    },
    {
      title: "Extensibility",
      text: "Add new products to the database without retraining from scratch.",
    },
  ] satisfies CaseStudyObjective[],
  approachIntro:
    "We proposed a deep-learning alternative: a CNN-based detector paired with a simple image-acquisition rig, replacing the barcode scan with a camera and a model.",
  hardware: [
    "Conveyor belt with a wooden hood, LED strip lighting, and a fixed image-acquisition camera to keep exposure consistent.",
    "A rotary indexer (angle iron, aluminum plate, NEMA 17 stepper, iron rod and flexible coupling) built to automate capturing and labeling images of new products for retraining.",
    "Thermal receipt printer wired into the GUI for automatic billing output.",
  ],
  software: [
    "Custom dataset: 3,500 conveyor-captured images across 70 retail-product classes, trained on products' logo-visible faces only.",
    "YOLOv4-tiny (Darknet) for detection and counting, tuned to track items as they move rather than requiring the belt to stop.",
    "OpenCV inference pipeline feeding a billing GUI that tallies detected items and prints a receipt.",
  ],
  v2Intro:
    "V-3's job was to remove the constraints that made the earlier prototype impractical:",
  improvements: [
    {
      from: "One box at a time, centered on belt",
      to: "Multiple boxes, placed anywhere on the belt",
    },
    {
      from: "Conveyor must stop per item",
      to: "Detects on a running conveyor",
    },
    {
      from: "No way to add new products",
      to: "Rotary indexer auto-captures & labels new items",
    },
    {
      from: "~4s per item",
      to: "<1s per item, multiple items at once",
    },
  ] satisfies CaseStudyImprovement[],
  result: [
    "In controlled testing, the system reached 98.78% detection accuracy across the 70 trained classes, and cut per-item checkout time from roughly four seconds to under one — while handling multiple products at once, placed anywhere on the belt instead of a fixed center point.",
    "Working assumptions we scoped around: no occlusion between stacked items, a closed product catalog matching training data, and packaging oriented so identifying features (logo, print) face the camera.",
  ],
  resultHighlight: "98.78% detection accuracy",
  stack: [
    "Python",
    "OpenCV",
    "YOLOv4-tiny",
    "Darknet",
    "Arduino Uno",
    "NEMA 17 Stepper",
    "Tkinter GUI",
  ],
  sourceHref: "https://github.com/Moneeb-Hussain",
} as const;

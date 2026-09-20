/**
 * Typed content for the handoff homepage and retail-checkout case study.
 * Copy is taken from design_handoff_portfolio (README + HTML references).
 */

export type ThemeName = "dark" | "light";
export type ProjectSort = "recent" | "impact";
export type ProjectFilter =
  | "All"
  | "Computer Vision"
  | "GenAI"
  | "Robotics"
  | "Software";

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
  featured?: boolean;
  tags: Array<Exclude<ProjectFilter, "All">>;
  blurb: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  sourceHref: string | null;
  caseStudyHref: string | null;
  impact: number;
  highlight?: "research";
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

export interface CaseStudyFigure {
  src: string;
  alt: string;
  caption: string;
  contain?: boolean;
  aspect?: string;
}

export interface CaseStudyPipelineStep {
  mark: string;
  title: string;
  text: string;
}

export interface CaseStudyAssumption {
  title: string;
  text: string;
}

export const handoffProfile = {
  name: "Moneeb Hussain",
  mark: "MH",
  eyebrow: "AI Systems · Computer Vision · Robotics · Intelligent Automation",
  statement:
    "Turning machine-learning research into systems that ship, from perception to action.",
  lead: "I am Moneeb Hussain, a software engineer and mechatronics graduate building computer-vision, multimodal-AI and operational decision systems across physical and digital environments.",
  email: "moneebhussain539@gmail.com",
  phone: "+92 (321) 4694262",
  phoneHref: "tel:+923214694262",
  github: "https://github.com/Moneeb-Hussain",
  linkedin: "https://www.linkedin.com/in/moneebhussain112/",
  resumeHref: "/assets/Moneeb-Hussain-Resume.pdf",
  resumeDownloadName: "Moneeb-Hussain-Resume.pdf",
  headshotSrc: "/assets/headshot.png",
  headshotAlt: "Portrait of Moneeb Hussain",
  footerHeading: "Let's build something.",
  footerLead:
    "Aspiring researcher in computer vision and intelligent systems. Open to graduate research, collaborations, and applied AI opportunities.",
  copyright: "© 2026 Moneeb Hussain",
} as const;

export const CONTACT_FORM = {
  nameLabel: "Name",
  namePlaceholder: "Your full name",
  emailLabel: "Email",
  emailPlaceholder: "your@email.com",
  linkedinLabel: "LinkedIn Profile (Optional)",
  linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
  messageLabel: "Message",
  messagePlaceholder:
    "Tell me about your project, opportunity, or idea...",
  submit: "Send Message",
  sending: "Sending...",
  success: "Sent. I will reply to the email you entered.",
  error: "Could not send. Email me directly instead.",
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
    featured: true,
    highlight: "research",
    title: "Automatic Retail Checkout V-3",
    date: "2020 – 2021 · Senior Thesis",
    tags: ["Computer Vision", "Robotics"],
    blurb:
      "Barcode-free retail checkout that detects, counts, and bills products in under a second.",
    problem:
      "Manual barcode scanning bottlenecks checkout lines. The goal: identify retail items and generate a bill without a barcode scanner or a skilled operator.",
    approach:
      "Trained YOLOv4-tiny on 3,500 conveyor frames across 70 classes. Replaced V-2's laser stop with a virtual counting line so the belt stays running, built a rotary indexer to capture new SKUs, and wired OpenCV inference to a Tkinter GUI and HP LaserJet.",
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
    impact: 13,
  },
  {
    id: "heatlens",
    featured: true,
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
    impact: 10,
  },
  {
    id: "livestock-ai",
    featured: true,
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
      "Shipped a live triage app with case history and outbreak reporting, including a vet-escalation path for high-severity cases. Guidance only - not a veterinary diagnosis.",
    stack: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "Groq",
      "Gemini Vision",
      "OpenStreetMap",
    ],
    sourceHref: "https://github.com/Moneeb-Hussain/livestock-ai-assistant",
    caseStudyHref: null,
    impact: 9,
  },
  {
    id: "aegisops-ai",
    featured: true,
    title: "AegisOps AI - Digital Hospital Command Center",
    date: "Hackathon · AI/ML Engineer",
    tags: ["GenAI"],
    blurb:
      "Hospital operations prototype that scores urgency, tracks resources, and requires human approval before any action.",
    problem:
      "Hospital operations teams juggle beds, staff, and incoming case urgency without a single view that ranks what needs attention first.",
    approach:
      "Built FastAPI urgency scoring and OpenAI recommendations with confidence plus alternatives, wired to a React command-center UI and Supabase. Every recommendation sits behind human approve/override, with a rule-based fallback if the AI service is down.",
    result:
      "Hackathon prototype validated on simulated scenarios - decision support only, no diagnosis, no real patient data, no clinical deployment.",
    stack: ["FastAPI", "React", "Tailwind CSS", "Supabase", "OpenAI", "Render"],
    sourceHref:
      "https://github.com/Moneeb-Hussain/real-time-hospital-intelligence-platform",
    caseStudyHref: null,
    impact: 12,
  },
  {
    id: "firstcheck-ai",
    featured: true,
    title: "FirstCheck AI - VC Brain",
    date: "Hack-Nation · VC Brain Hackathon",
    tags: ["GenAI"],
    blurb:
      "Multi-agent pipeline that screens startups, drafts memos, and argues with its own conclusions before a human signs off.",
    problem:
      "Early-stage screening means reading founder materials, filings, and market context at volume - slow and inconsistent when done by hand.",
    approach:
      "Contributed to the backend and trustworthy-AI path: discovery → extraction → screening → diligence → memo, then adversarial review and verification, with a required human decision and a full audit trail.",
    result:
      "Hackathon research prototype of a trust-oriented screening pipeline. Not investment advice; no customers or production deployment claimed.",
    stack: ["Next.js", "FastAPI", "SQLite", "OpenAI", "Multi-agent pipeline"],
    sourceHref: "https://github.com/Moneeb-Hussain/venture-intelligence",
    caseStudyHref: null,
    impact: 11,
  },
  {
    id: "pakai-capital",
    title: "PakAI Capital",
    date: "Hackathon · AI Systems Developer",
    tags: ["GenAI"],
    blurb:
      "LLM agents that specialize in market, filings, news, macro, and risk data for Pakistan Stock Exchange research.",
    problem:
      "PSX research is split across market data, filings, news, macro, and risk - hard to assemble into one view under time pressure.",
    approach:
      "Built a hackathon prototype where each LLM agent owns one data domain and the outputs are combined into a single research picture of listed activity.",
    result:
      "Research prototype for synthesizing a PSX research view. Not financial advice.",
    stack: ["Next.js", "FastAPI", "Python", "LLM Agents"],
    sourceHref:
      "https://github.com/abdulrehman-work/psx-ai-trading-agents-hackathon",
    caseStudyHref: null,
    impact: 8,
  },
  {
    id: "hackerrank-orchestrate",
    title: "HackerRank Orchestrate - Terminal Triage Agent",
    date: "May 2026 · Competition",
    tags: ["GenAI"],
    blurb:
      "Terminal agent that triages support-style tickets across multiple corpora.",
    problem:
      "Support-style tickets arrive across different corpora and need consistent triage without a heavyweight UI.",
    approach:
      "Designed a terminal agent that routes and triages tickets across HackerRank, Claude, and Visa-related corpora for the Orchestrate competition.",
    result:
      "Finished top 4% - rank 373 of roughly 10,000 entrants after a judged interview round.",
    stack: ["Python", "LLM Agents", "Terminal Tooling"],
    sourceHref: null,
    caseStudyHref: null,
    impact: 7,
  },
  {
    id: "esgtree",
    title: "ESGTree - Sustainability Reporting Platform",
    date: "Septem Systems · Production",
    tags: ["Software"],
    blurb:
      "Production ESG data-collection and reporting platform, described without client-identifying detail.",
    problem:
      "Organisations need a structured way to collect ESG data and turn it into reports without a one-off spreadsheet process.",
    approach:
      "Built the full-stack reporting platform at Septem Systems: Nuxt 2 / Vuex on the client, Node.js APIs, and MySQL for persistence.",
    result:
      "Shipped as a production client engagement. Case details stay sanitised.",
    stack: ["Nuxt 2", "Vuex", "Node.js", "MySQL"],
    sourceHref: null,
    caseStudyHref: null,
    impact: 6,
  },
  {
    id: "unodc-workflow",
    title: "MLA & Extradition Workflow Platform",
    date: "Jun 2024 – Jan 2026 · Septem Systems",
    tags: ["Software"],
    blurb:
      "Case-management workflow for cross-border legal assistance requests, described at system level only.",
    problem:
      "Mutual legal assistance and extradition requests need a structured path across teams, without leaking case records into a public writeup.",
    approach:
      "Built the workflow platform as a full-stack developer: TypeScript, NestJS, Vue 3, Pinia, Vuetify, and MySQL.",
    result:
      "Production client engagement at Septem Systems. Process detail and case records are not published.",
    stack: ["TypeScript", "NestJS", "Vue 3", "Pinia", "Vuetify", "MySQL"],
    sourceHref: null,
    caseStudyHref: null,
    impact: 5,
  },
  {
    id: "smart-interview-coach",
    title: "Smart Interview Coach",
    date: "Nov 2023 – Feb 2024 · Septem Systems",
    tags: ["Software"],
    blurb:
      "Interview-practice app covering question banks, session tracking, and feedback flows.",
    problem:
      "Candidates preparing for technical interviews need a structured place to practice questions and review how a session went.",
    approach:
      "Built the full-stack tool at Septem Systems with React, Ant Design, Redux, NestJS, and MySQL.",
    result:
      "Internal interview-preparation product covering banks, sessions, and feedback.",
    stack: ["TypeScript", "React", "Ant Design", "Redux", "NestJS", "MySQL"],
    sourceHref: null,
    caseStudyHref: null,
    impact: 4,
  },
  {
    id: "industrial-asrs",
    title: "Industrial ASRS Commissioning",
    date: "Aug 2021 – Aug 2023 · Style Textile",
    tags: ["Robotics"],
    blurb:
      "Plant-floor commissioning of an automated storage and retrieval system.",
    problem:
      "An automated warehouse only works if PLC logic, I/O, and electrical control stay in agreement during commissioning and live faults.",
    approach:
      "Analyzed PLC logic, electrical schematics, and I/O behavior; validated hardware-control integration during ASRS deployment and handled emergency electrical/control maintenance.",
    result:
      "Commissioned and maintained the ASRS on the plant floor at Style Textile.",
    stack: [
      "PLC Programming",
      "Electrical Schematics",
      "I/O Troubleshooting",
      "ASRS",
      "Industrial Automation",
    ],
    sourceHref: null,
    caseStudyHref: null,
    impact: 3,
  },
  {
    id: "line-following-robot",
    title: "Line Following Robot",
    date: "UET Lahore · Competition",
    tags: ["Robotics"],
    blurb:
      "Autonomous line-following robot built for an institutional robotics competition.",
    problem:
      "The robot had to track a line reliably using onboard sensing, not a remote driver.",
    approach:
      "Combined sensor feedback with closed-loop motor control on an embedded platform.",
    result:
      "Winner, Line Following Robot, institutional robotics competitions.",
    stack: ["Embedded Systems", "Sensor Integration", "Motor Control"],
    sourceHref: null,
    caseStudyHref: null,
    impact: 2,
  },
  {
    id: "robowars",
    title: "RoboWars",
    date: "UET Lahore · Competition",
    tags: ["Robotics"],
    blurb:
      "Combat robot built for an institutional RoboWars competition.",
    problem:
      "A combat platform has to drive, survive contact, and stay controllable under impact.",
    approach:
      "Built and piloted the robot covering mechanical design, drive control, and durability.",
    result: "Winner, RoboWars, institutional robotics competitions.",
    stack: ["Embedded Systems", "Motor Control", "Mechanical Design"],
    sourceHref: null,
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
  lead: "A barcode-free checkout system that detects, counts, and bills retail products from a conveyor-mounted camera. No scanner. No cashier.",
  meta: [
    { label: "Role", value: "Vision & ML lead, hardware co-design" },
    { label: "Team", value: "Moneeb Hussain, Arbaz Ch., Khawaja Daniyal" },
    { label: "Advisor", value: "Muhammad Rzi Abbas" },
  ],
  figures: {
    hardware: {
      src: "/images/projects/retail-checkout/hardware-setup.png",
      alt: "Green conveyor belt with a wooden capture hood, laptop on top, and an HP LaserJet printer beside the rig.",
      caption:
        "The V-3 rig in the lab: motorised conveyor, wooden hood with LED lighting, control laptop, and HP LaserJet for printed bills.",
      aspect: "4 / 3",
    },
    team: {
      src: "/images/projects/retail-checkout/thesis-team.jpg",
      alt: "Three thesis teammates standing beside the conveyor in the AI and Robotics Lab at UET Lahore.",
      caption:
        "Thesis team at the AI & Robotics Lab, UET Lahore, with the conveyor at left. Photo: AKS UET Photography Society.",
      aspect: "16 / 10",
    },
    virtualLine: {
      src: "/images/projects/retail-checkout/virtual-line-counting.png",
      alt: "Webcam frame with a green virtual counting line. An SMD bulb is labeled above the line and a Mayfair Care pack is crossing it.",
      caption:
        "The counting trick. A green virtual line sits across the frame. When a box crosses it, that SKU is counted once. The belt never stops.",
      aspect: "4 / 3",
    },
    detection: {
      src: "/images/projects/retail-checkout/detection-multi.png",
      alt: "YOLOv4-tiny bounding boxes on several biscuit, tea, and snack packs at once on the conveyor.",
      caption:
        "Multi-product detection on a running belt. V-3 no longer needed a single, centered item the way V-2 did.",
      aspect: "4 / 3",
    },
    billing: {
      src: "/images/projects/retail-checkout/gui-billing.png",
      alt: "Tkinter GUI with live product detections on the left and a five-line bill totaling 445 on the right.",
      caption:
        "Tkinter billing view: live detections on the left, running line items and total on the right, Checkout and QUIT at the bottom.",
      aspect: "16 / 9",
    },
    labelimg: {
      src: "/images/projects/retail-checkout/labelimg.png",
      alt: "LabelImg with bounding boxes on four snack packs on the conveyor.",
      caption:
        "Every training frame was labeled by hand in LabelImg, on the same conveyor the detector would later see.",
      aspect: "16 / 9",
    },
    labelimgBoxes: {
      src: "/images/projects/retail-checkout/labelimg-boxes.png",
      alt: "LabelImg class list and file list for conveyor-captured product images.",
      caption:
        "Class list and capture folder for the custom set: about 3,500 frames across 70 retail classes.",
      aspect: "16 / 9",
    },
    indexer: {
      src: "/images/projects/retail-checkout/rotary-indexer.png",
      alt: "Rotary indexer: a round aluminum plate on a black frame with a stepper motor housing.",
      caption:
        "Rotary indexer for new SKUs, not for checkout. Aluminum plate, angle-iron frame, NEMA 17 stepper. Turn, photograph, label, retrain.",
      aspect: "16 / 10",
    },
    circuit: {
      src: "/images/projects/retail-checkout/indexer-circuit.png",
      alt: "Circuit diagram of an Arduino Uno wired to a stepper driver and NEMA 17 motor, powered at 8 to 32 volts, 2 amps.",
      caption:
        "Thesis Figure 28. Arduino Uno, stepper driver, and NEMA 17 wiring for the indexer. Supply: 8-32 V, 2 A.",
      contain: true,
      aspect: "4 / 3",
    },
  } satisfies Record<string, CaseStudyFigure>,
  heroStats: [
    { value: "98.78%", label: "Lab detection accuracy" },
    { value: "4s → <1s", label: "Per-item checkout time" },
    { value: "3,500 / 70", label: "Training images / classes" },
  ] satisfies HandoffStat[],
  problem: [
    "Supermarket checkout still runs on barcodes. An operator finds each code by hand and hovers a scanner over it. It works, but it is slow, and every extra second in the queue compounds at scale.",
    "The brief we set: identify retail items and generate a bill without a barcode scanner or a skilled operator. Faster checkouts, less dependence on trained staff.",
  ],
  objectives: [
    {
      title: "Object identification",
      text: "Name retail items from a camera, with no barcode in the loop.",
    },
    {
      title: "Autonomy",
      text: "Cut the need for a trained operator at the till.",
    },
    {
      title: "Time saving",
      text: "Bring per-item checkout time down from roughly four seconds.",
    },
    {
      title: "Extensibility",
      text: "Add a new product without rebuilding the whole dataset from scratch.",
    },
  ] satisfies CaseStudyObjective[],
  approachIntro:
    "V-3 replaces the barcode with a camera and a detector. Products ride a lit conveyor. YOLOv4-tiny names them. A virtual green line counts them. A desktop GUI prints the bill.",
  pipeline: [
    {
      mark: "01",
      title: "Conveyor",
      text: "Items ride a running belt under a wooden hood with LED lighting.",
    },
    {
      mark: "02",
      title: "Camera",
      text: "A fixed Logitech C310 looks down from inside the hood.",
    },
    {
      mark: "03",
      title: "Detect",
      text: "YOLOv4-tiny (Darknet) draws a box and class name on each SKU.",
    },
    {
      mark: "04",
      title: "Count",
      text: "A virtual green line counts an item once as its box crosses. The belt stays moving.",
    },
    {
      mark: "05",
      title: "Bill",
      text: "Tkinter tallies prices and prints the receipt on an HP LaserJet.",
    },
  ] satisfies CaseStudyPipelineStep[],
  countingInsight:
    "V-2 used a laser trigger that halted the belt for about three seconds so one centered item could be photographed. V-3 deleted that pause. Counting is a line in software. If the box crosses it, the SKU goes on the bill.",
  hardwareIntro:
    "The checkout path is mechanical only in the sense that a belt and a hood present a repeatable scene to the camera. The Arduino and stepper live on a separate machine: a rotary indexer used when a new product has to enter the catalog.",
  hardware: [
    "Green steel conveyor with a wooden capture hood, LED strip lighting, and a fixed Logitech C310 webcam.",
    "HP LaserJet beside the rig, driven from the billing GUI once Checkout is pressed.",
    "Rotary indexer (aluminum plate, angle iron, NEMA 17, iron rod and flexible coupling) to photograph new products for retraining. It is not what sequences items at checkout.",
  ],
  software: [
    "Custom set: about 3,500 conveyor frames, 70 classes, labeled in LabelImg on logo-visible faces only.",
    "YOLOv4-tiny on Darknet, chosen over full YOLOv4 so inference stayed under a second on lab hardware.",
    "OpenCV on the PC feeding a Tkinter GUI: live feed, running bill, Checkout, Quit, print.",
  ],
  v2Intro:
    "V-3's job was to drop the constraints that made the earlier prototype impractical on a real belt:",
  improvements: [
    {
      from: "One box at a time, centered on the belt",
      to: "Several boxes, placed anywhere on the belt",
    },
    {
      from: "Laser halt, about 3 seconds per item",
      to: "Virtual counting line, belt keeps running",
    },
    {
      from: "No path to add new products",
      to: "Indexer captures and labels new SKUs",
    },
    {
      from: "About 4 seconds per item",
      to: "Under 1 second, several items at once",
    },
  ] satisfies CaseStudyImprovement[],
  result: [
    "In controlled testing, each trained item ran the conveyor ten times. The system reached 98.78% detection accuracy across the 70 classes, and cut per-item checkout time from roughly four seconds to under one, while handling multiple products at once instead of a single center point.",
    "Read that number as a lab result under a closed catalog and controlled light, not as a supermarket benchmark.",
  ],
  resultHighlight: "98.78% detection accuracy",
  assumptions: [
    {
      title: "No stacking",
      text: "Items must not occlude each other. Overlap on the belt is already hard. Stacks were out of scope.",
    },
    {
      title: "Closed catalog",
      text: "Only the 70 trained classes are in play. An unknown SKU is not a graceful miss. It is outside the test.",
    },
    {
      title: "Logo facing the camera",
      text: "Training used the printed face of each pack. A blank or inverted face was not part of the evaluation.",
    },
  ] satisfies CaseStudyAssumption[],
  stack: [
    "Python",
    "OpenCV",
    "YOLOv4-tiny",
    "Darknet",
    "LabelImg",
    "Tkinter",
    "Arduino Uno",
    "NEMA 17",
    "Logitech C310",
    "HP LaserJet",
  ],
  ask: {
    title: "Questions about this system?",
    lead: "Happy to walk through the architecture, trade-offs, or limitations in detail.",
  },
  sourceHref: "https://github.com/Moneeb-Hussain",
} as const;

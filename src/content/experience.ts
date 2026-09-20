import type { ExperienceEntry } from "./types";

/**
 * Reverse-chronological timeline. Dates and highlights are sourced from the
 * latest CV; where older resumes conflict, the latest CV wins (see audit §3).
 */
export const experience: ExperienceEntry[] = [
  {
    id: "icodeguru",
    type: "mentorship",
    organization: "iCodeGuru",
    role: "Trainer & Moderator",
    period: "Feb 2026 – Present",
    location: "Remote - Silicon Valley, USA",
    summary:
      "Teaching a Python-to-GenAI curriculum to a large remote cohort, covering programming fundamentals through applied AI/ML.",
    highlights: [
      "Mentored 80+ learners across a 6-week curriculum",
      "Curriculum enrolled 150+ participants",
      "Taught Python, operating systems fundamentals, and AI/ML",
    ],
    tech: ["Python", "AI/ML", "Operating Systems"],
  },
  {
    id: "septem-systems",
    type: "employment",
    organization: "Septem Systems",
    role: "Software Engineer Level II",
    period: "Oct 2023 – Present",
    location: "Lahore, Pakistan",
    summary:
      "Building production frontend and backend systems - REST APIs, secure workflows, and CI/CD pipelines deployed on GCP - across several client engagements.",
    highlights: [
      "Improved a production API's response time from 3.9s to 1.2s through SQL optimisation and refactoring",
      "Recognised as Employee of the Quarter",
      "Delivered production systems including a sustainability reporting platform, a legal case-management workflow platform, and an interview-preparation tool",
    ],
    tech: [
      "TypeScript",
      "Vue",
      "Nuxt",
      "NestJS",
      "Node.js",
      "MySQL",
      "GCP",
      "CI/CD",
    ],
    relatedProjectSlugs: ["esgtree", "unodc-workflow", "smart-interview-coach"],
  },
  {
    id: "style-textile",
    type: "employment",
    organization: "Style Textile Pvt. Ltd.",
    role: "Engineer",
    period: "Aug 2021 – Aug 2023",
    location: "Lahore, Pakistan",
    summary:
      "Plant-floor engineering role covering PLC logic, electrical schematics, and automated storage/retrieval system commissioning and maintenance.",
    highlights: [
      "Commissioned and maintained an automated storage and retrieval system (ASRS)",
      "Diagnosed and resolved I/O and control faults across plant equipment",
      "Performed emergency electrical and control maintenance",
    ],
    tech: ["PLC", "Electrical Schematics", "Industrial Automation"],
    relatedProjectSlugs: ["industrial-asrs"],
  },
  {
    id: "uet-lahore",
    type: "education",
    organization: "University of Engineering and Technology, Lahore",
    role: "BS Mechatronics and Control Engineering",
    period: "2017 – 2021",
    location: "Lahore, Pakistan",
    summary:
      "Coursework spanning AI, machine learning, computer vision, robotics, control systems, embedded systems, and industrial automation, culminating in a final-year thesis on vision-based retail checkout.",
    highlights: [
      "Final-year thesis: Automatic Retail Checkout V-3, advised by Muhammad Rzi Abbas",
      "Academic tooling: MATLAB/Simulink for feedback-control modelling, ROS basics for robot communication and simulation",
    ],
    tech: ["MATLAB/Simulink", "ROS (basics)", "Control Systems"],
    relatedProjectSlugs: ["automatic-retail-checkout"],
  },
];

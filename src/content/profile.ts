import type { Profile } from "./types";

/**
 * Single source of truth for Moneeb's identity, positioning, and contact
 * links. Every value here is verified against the latest CV and the
 * portfolio content audit — do not add a phone number or unverified metrics.
 */
export const profile: Profile = {
  name: "Moneeb Hussain",
  location: "Lahore, Pakistan",
  label: "AI Systems • Computer Vision • Intelligent Automation",
  headline: "Engineering AI systems that connect perception, reasoning and action.",
  support:
    "I am Moneeb Hussain, a software engineer and mechatronics graduate building computer-vision, multimodal-AI and operational decision systems across physical and digital environments.",
  availability: "Exploring funded graduate research opportunities",
  links: {
    email: "moneebhussain539@gmail.com",
    linkedin: "https://www.linkedin.com/in/moneebhussain112",
    github: "https://github.com/Moneeb-Hussain",
    cv: "/documents/Moneeb-Hussain-CV.pdf",
  },
  education: {
    degree: "BS Mechatronics and Control Engineering",
    institution: "University of Engineering and Technology, Lahore",
    period: "2017 – 2021",
    gpa: "3.16/4.0",
  },
  /**
   * Homepage credibility strip. Every figure is traceable to a specific
   * project or role — see PORTFOLIO_CONTENT_AUDIT.md §14. Never add a metric
   * here without a verified source.
   */
  metrics: [
    {
      value: "98.78%",
      label: "Detection accuracy",
      detail: "Automatic Retail Checkout, controlled lab tests",
    },
    {
      value: "3,500",
      label: "Training images",
      detail: "Custom conveyor-captured retail dataset",
    },
    {
      value: "70",
      label: "Product classes",
      detail: "Recognized by the checkout vision pipeline",
    },
    {
      value: "3.9s → 1.2s",
      label: "API latency improved",
      detail: "Production optimisation at Septem Systems",
    },
    {
      value: "80+",
      label: "Learners mentored",
      detail: "iCodeGuru Python-to-GenAI cohort",
    },
    {
      value: "Top 4%",
      label: "HackerRank Orchestrate",
      detail: "Ranked 373 of ~10,000 participants",
    },
  ],
};

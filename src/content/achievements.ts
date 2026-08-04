import type { Achievement } from "./types";

/**
 * Editorial achievements list, ordered by verified strength (audit §5).
 * Excludes vanity/unverifiable claims such as typing speed.
 */
export const achievements: Achievement[] = [
  {
    id: "cs50x-puzzle-day",
    title: "Harvard CS50x Puzzle Day — Winner, Team Lead",
    description:
      "Led a team to a 10/10 winning result at Harvard's CS50x Puzzle Day.",
    category: "competition",
    verifyUrl:
      "https://cs50.harvard.edu/certificates/2802764d-9741-48c4-ad22-53d2beaf5305",
    priority: 1,
  },
  {
    id: "hackerrank-orchestrate",
    title: "HackerRank Orchestrate — Top 4%",
    description:
      "Ranked 373 of roughly 10,000 participants building a terminal triage agent, following a judged interview round.",
    category: "competition",
    date: "May 2026",
    priority: 2,
  },
  {
    id: "ucla-codesprint",
    title: "UCLA CodeSprint — Top 8% (Beginner Division)",
    description:
      "Finished 19th on the Beginner track leaderboard as part of team \"Alpha Fighters.\"",
    category: "competition",
    priority: 3,
  },
  {
    id: "icsc-pre-finalist",
    title: "ICSC 2026 — Pre-Finalist & Special Honour",
    description:
      "Advanced as a pre-finalist and received a Special Honour after passing all test cases.",
    category: "competition",
    date: "2026",
    priority: 4,
  },
  {
    id: "pak-angels-pec-genai",
    title: "Pak Angels USA & PEC — GenAI Top 5%",
    description:
      "Placed in the top 5% of a Generative AI challenge run with Pak Angels USA and the Pakistan Engineering Council.",
    category: "competition",
    priority: 5,
  },
  {
    id: "lfr-robowars",
    title: "Line Following Robot & RoboWars — Competition Winner",
    description:
      "Won institutional robotics competitions in both line-following and combat robotics categories at UET Lahore.",
    category: "competition",
    priority: 6,
  },
  {
    id: "ielts-7",
    title: "IELTS Academic — Band 7.0",
    description:
      "Overall band 7.0 (Listening 7.5, Reading 7.0, Writing 6.5, Speaking 6.5).",
    category: "academic",
    priority: 7,
  },
  {
    id: "merit-laptop",
    title: "Merit Laptop Award",
    description:
      "Awarded a laptop through a national youth merit initiative.",
    category: "recognition",
    priority: 8,
  },
  {
    id: "employee-of-the-quarter",
    title: "Employee of the Quarter — Septem Systems",
    description:
      "Recognised for engineering impact, including a production API latency improvement from 3.9s to 1.2s.",
    category: "recognition",
    priority: 9,
  },
  {
    id: "amal-fellowship",
    title: "AMAL Academy Fellowship — Honors",
    description: "Completed the AMAL Academy fellowship program with Honors.",
    category: "recognition",
    priority: 10,
  },
  {
    id: "lean-six-sigma-yellow-belt",
    title: "Lean Six Sigma — Yellow Belt",
    description: "Certified in Lean Six Sigma Yellow Belt process-improvement methodology.",
    category: "certification",
    priority: 11,
  },
  {
    id: "genai-application-developer",
    title: "Generative AI Application Developer",
    description: "Certified as a Generative AI Application Developer.",
    category: "certification",
    priority: 12,
  },
];

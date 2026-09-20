import type { CaseStudy } from "../types";

/**
 * Long-form case study for AegisOps AI. Every safety claim here matches
 * PORTFOLIO_CONTENT_AUDIT.md §4.2 - decision support only, no diagnosis, no
 * real patient data, no clinical deployment or validation claim.
 */
export const aegisopsAiCaseStudy: CaseStudy = {
  slug: "aegisops-ai",
  title: "AegisOps AI - Digital Hospital Command Center",
  dek: "A hackathon prototype for hospital operations: urgency scoring and resource monitoring that inform a human decision, never replace one.",
  sections: [
    {
      id: "context",
      heading: "Context",
      paragraphs: [
        "AegisOps AI was built during a hackathon by a six-person team. Moneeb worked as the team's AI/ML Engineer - not as a lead or systems architect - building the services that turn raw case and resource data into urgency scores and recommendations.",
        "The prototype targets a real operational pain point: hospital coordination teams need to decide, quickly, which incoming cases need attention first and how to allocate limited beds, staff, and equipment. AegisOps AI is a command-center interface and backend for exploring that problem, not a system that has been deployed in an actual hospital.",
      ],
    },
    {
      id: "problem",
      heading: "The problem it prototypes",
      paragraphs: [
        "In a hospital operations setting, incoming cases arrive with varying urgency, and resources (beds, staff, specialised equipment) are limited and shift in real time. Without a consolidated view, coordination relies on manual communication across departments - slow under pressure, and easy to get wrong when multiple urgent cases compete for the same resource.",
      ],
    },
    {
      id: "system-design",
      heading: "System design",
      paragraphs: [
        "The backend, built with FastAPI, computes an urgency score for each incoming case and cross-references it against live resource monitoring data stored in Supabase (PostgreSQL). Rather than returning a single recommendation, the system surfaces a ranked set of options with an associated confidence score, so a human coordinator can see the reasoning trade-off rather than a single opaque answer.",
        "The React and Tailwind CSS frontend presents this as a command-center dashboard: incoming cases, current resource state, and pending recommendations awaiting human approval. OpenAI's models power the reasoning layer that generates recommendations and their explanations; a deterministic rule-based fallback exists specifically so the system continues to function in a reduced but predictable mode if the AI service is unavailable.",
      ],
    },
    {
      id: "my-contribution",
      heading: "My contribution",
      paragraphs: [
        "Within the six-person team, my work centered on the AI/ML layer: building the FastAPI endpoints that generate urgency scores and recommendations, integrating the OpenAI-backed reasoning step, and implementing the rule-based fallback path so the system degrades safely rather than failing silently when the AI service isn't available.",
      ],
    },
    {
      id: "human-in-the-loop",
      heading: "Human-in-the-loop by design",
      paragraphs: [
        "Every recommendation the system produces sits behind an explicit human approve/override step before it has any effect, and every decision - approved, overridden, or ignored - is written to an audit log. This wasn't an add-on; it was a design constraint from the start, because the team scoped the system as decision support, not autonomous action.",
      ],
      bullets: [
        "Urgency scoring with resource cross-referencing",
        "Recommendations shown with confidence + alternatives, not a single answer",
        "Mandatory human approve/override before any action",
        "Full audit logging of every decision",
        "Rule-based fallback if the AI service is unavailable",
      ],
    },
    {
      id: "safety-boundaries",
      heading: "Safety boundaries",
      paragraphs: [
        "AegisOps AI does not diagnose or prescribe anything - it operates purely at the level of operational coordination (which case gets attention, which resource gets allocated), never clinical judgment. It does not use or claim access to real patient data; all testing used simulated scenarios. And it never acts autonomously: the human approve/override step is mandatory, not optional.",
      ],
    },
    {
      id: "limitations",
      heading: "Limitations",
      paragraphs: [
        "This is a hackathon prototype, evaluated with simulated data over a short build window - it has not been clinically validated, deployed in a hospital, or recognised with any award. Those distinctions matter, and this case study makes no claim beyond what the team actually built and tested.",
      ],
    },
  ],
};

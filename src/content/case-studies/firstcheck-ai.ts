import type { CaseStudy } from "../types";

/**
 * Long-form case study for FirstCheck AI. Role wording matches
 * PORTFOLIO_CONTENT_AUDIT.md §4.3 — "Backend & trustworthy AI systems
 * contributor," since an individual "Lead" title was not independently
 * verifiable beyond the Hack-Nation certificate and repo ownership.
 */
export const firstcheckAiCaseStudy: CaseStudy = {
  slug: "firstcheck-ai",
  title: "FirstCheck AI — VC Brain",
  dek: "A multi-agent research pipeline for early-stage startup screening, built to argue with its own conclusions before a human ever sees them.",
  sections: [
    {
      id: "context",
      heading: "Context",
      paragraphs: [
        "FirstCheck AI (internally, \"VC Brain\") was built for a Hack-Nation hackathon focused on venture research tooling. It prototypes a pipeline that takes a startup from initial discovery through to a draft investment memo — with the pipeline designed to critique and verify its own output before handing a decision to a human.",
        "My contribution was on the backend and on the trustworthy-AI mechanics of the pipeline: the verification and adversarial-review stages responsible for keeping the system honest about its own conclusions, plus the FastAPI services underlying it. Individual title claims beyond this are not independently verified, so this case study describes contribution rather than asserting a formal leadership role.",
      ],
    },
    {
      id: "problem",
      heading: "The problem it prototypes",
      paragraphs: [
        "Screening early-stage startups involves synthesising founder materials, filings, market context, and risk factors into a coherent view — work that's time-consuming and inconsistent when done manually across many candidates. FirstCheck AI explores whether a structured multi-agent pipeline can accelerate that first pass without skipping the scrutiny a human analyst would normally apply.",
      ],
    },
    {
      id: "pipeline-architecture",
      heading: "Pipeline architecture",
      paragraphs: [
        "The system moves through a defined sequence: discovery (identifying candidate startups), extraction (pulling structured information from source materials), screening (a first filter pass), and diligence (deeper analysis). From there it drafts an investment memo — but that memo doesn't go straight to a human.",
        "It first passes through an adversarial review stage, where a separate agent role is prompted specifically to challenge the memo's conclusions and look for weak reasoning or unsupported claims. A verification stage follows, cross-checking specific factual claims where possible. Only after both stages does a human make the final decision, with the entire chain — from discovery through decision — captured in an audit trail.",
      ],
      bullets: [
        "Discover → extract → screen → diligence",
        "Draft investment memo",
        "Adversarial review (a dedicated agent challenges the memo's own conclusions)",
        "Verification pass on factual claims",
        "Human decision — required, not optional",
        "Full audit trail across every stage",
      ],
    },
    {
      id: "why-adversarial-review",
      heading: "Why adversarial review",
      paragraphs: [
        "A single LLM-generated memo tends to sound confident regardless of how well-supported its conclusions actually are. Rather than trusting that confidence at face value, the pipeline deliberately introduces a second agent role whose job is to argue against the memo — surfacing unsupported claims or reasoning gaps before a human analyst spends time on it. This is the core trustworthy-AI mechanism the pipeline relies on, and the part of the system I focused on most directly.",
      ],
    },
    {
      id: "tech-stack",
      heading: "Technical stack",
      paragraphs: [
        "The frontend is built with Next.js; the backend runs on FastAPI with SQLite for persistence during the hackathon build. OpenAI's models power the agent reasoning steps, with a deterministic demo mode available so the pipeline can be walked through without live API calls.",
      ],
    },
    {
      id: "limitations",
      heading: "Limitations",
      paragraphs: [
        "FirstCheck AI is a hackathon research prototype. It is not investment advice, has no real customers or track record, and was not deployed in any production capacity. Its value is as a demonstration of a trust-oriented pipeline pattern — discovery through adversarial review through human decision — rather than as a finished product.",
      ],
    },
  ],
};

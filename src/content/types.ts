/**
 * Shared content schema for the portfolio.
 *
 * These types intentionally avoid any React/Next.js imports so that content
 * files remain plain, serializable data that can be consumed by Server
 * Components, Client Components, tests, or scripts alike.
 */

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

/**
 * How a project came to exist. Used for filtering and for choosing the right
 * amount of confidence/caveat language on the project card and case study.
 */
export type ProjectStatus =
  | "academic-thesis"
  | "hackathon-prototype"
  | "professional-work"
  | "competition-project"
  | "industrial-engineering"
  | "planned";

export interface ProjectMetric {
  /** Short label shown above/below the value, e.g. "Detection accuracy" */
  label: string;
  /** The verified figure, e.g. "98.78%" */
  value: string;
  /** Optional qualifier so numbers are never presented without their context */
  description?: string;
}

export interface ProjectLinks {
  /** Public source repository, if one exists and is safe to share */
  github?: string;
  /** Live/deployed demo URL */
  demo?: string;
  /** Verification artifact (certificate, standings page, LinkedIn post, etc.) */
  verify?: string;
}

export interface ProjectTeamMember {
  name: string;
  role?: string;
}

/**
 * A single block of inline case-study content rendered on the project's own
 * page. Kept intentionally lightweight; the three flagship projects also have
 * a matching long-form entry in `src/content/case-studies/`.
 */
export interface ProjectSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  /** One or two sentence summary used on cards and OG descriptions */
  summary: string;
  status: ProjectStatus;
  /** Homepage flagship rank (1 = first). Omit for non-featured projects. */
  featured?: number;
  /** True when identifying details (client, org) must stay sanitised */
  confidential?: boolean;
  /** Moneeb's individual, verified role/title on this project */
  role: string;
  /** Named collaborators, only included when publicly documented */
  team?: ProjectTeamMember[];
  /** Size of the team when a full roster isn't listed (e.g. hackathon squads) */
  teamSize?: number;
  /** Academic/industry advisor, where applicable */
  advisor?: string;
  /** Employer, lab, or event this project was produced under */
  organization?: string;
  /** Human-readable period, e.g. "Oct 2023 – Present" */
  period?: string;
  location?: string;
  tech: string[];
  metrics?: ProjectMetric[];
  links?: ProjectLinks;
  /** Required wording for anything touching health, finance, or safety */
  safetyNote?: string;
  /** Required wording for prototypes that must not be read as production claims */
  disclaimer?: string;
  /** Inline case-study content for the project's detail page */
  sections?: ProjectSection[];
  /** Slugs of other projects to prefer when computing "related work" */
  relatedSlugs?: string[];
  /** Slug of the matching entry in `src/content/case-studies/`, if any */
  caseStudySlug?: string;
  /** Manual sort order across the full project index (lower = earlier) */
  order: number;
}

// ---------------------------------------------------------------------------
// Long-form case studies
// ---------------------------------------------------------------------------

export interface CaseStudySection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudy {
  /** Matches the parent project's slug */
  slug: string;
  title: string;
  /** One-line standfirst/dek shown under the case study title */
  dek: string;
  sections: CaseStudySection[];
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type ExperienceType = "employment" | "education" | "mentorship";

export interface ExperienceEntry {
  id: string;
  type: ExperienceType;
  organization: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech?: string[];
  /** Slugs of projects produced during this role */
  relatedProjectSlugs?: string[];
}

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export type AchievementCategory =
  | "competition"
  | "certification"
  | "recognition"
  | "academic";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  /** Human-readable date or period, when known */
  date?: string;
  /** Link to a certificate, standings page, or verification source */
  verifyUrl?: string;
  /** Lower number = shown first */
  priority: number;
}

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  /** Open questions framed for exploration, not claimed contributions */
  questions: string[];
  relatedProjectSlugs?: string[];
}

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export interface ProfileLinks {
  email: string;
  linkedin: string;
  github: string;
  /** Path under /public to the CV PDF */
  cv: string;
}

export interface ProfileEducation {
  degree: string;
  institution: string;
  period: string;
  /** Only ever rendered on the About page, never in hero/metrics/OG */
  gpa: string;
}

export interface HomepageMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface Profile {
  name: string;
  location: string;
  /** Short positioning line used as the hero label/eyebrow */
  label: string;
  /** Hero headline */
  headline: string;
  /** Hero supporting sentence */
  support: string;
  availability: string;
  links: ProfileLinks;
  education: ProfileEducation;
  metrics: HomepageMetric[];
}

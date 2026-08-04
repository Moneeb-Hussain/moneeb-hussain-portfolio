import type { CaseStudy } from "../types";
import { automaticRetailCheckoutCaseStudy } from "./automatic-retail-checkout";
import { aegisopsAiCaseStudy } from "./aegisops-ai";
import { firstcheckAiCaseStudy } from "./firstcheck-ai";

export { automaticRetailCheckoutCaseStudy } from "./automatic-retail-checkout";
export { aegisopsAiCaseStudy } from "./aegisops-ai";
export { firstcheckAiCaseStudy } from "./firstcheck-ai";

export const caseStudies: CaseStudy[] = [
  automaticRetailCheckoutCaseStudy,
  aegisopsAiCaseStudy,
  firstcheckAiCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

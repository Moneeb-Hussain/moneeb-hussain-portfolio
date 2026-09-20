import type { Metadata } from "next";
import { CaseStudyView } from "@/components/handoff/CaseStudyView";
import { RETAIL_CASE_STUDY } from "@/content/handoff";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: RETAIL_CASE_STUDY.title,
  description: RETAIL_CASE_STUDY.lead,
  path: "/retail-checkout",
});

export default function RetailCheckoutPage() {
  return <CaseStudyView />;
}

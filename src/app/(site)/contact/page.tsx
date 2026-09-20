import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactPanel } from "@/components/contact/ContactPanel";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Moneeb Hussain about AI systems engineering, computer vision, research collaboration, or roles.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Get in touch"
        description="Whether it's about a role, a research collaboration, or a question about how one of these systems works - reach out directly."
      />

      <div className="mt-10">
        <ContactPanel />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { profile } from "@/content/profile";
import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CapabilityMatrix } from "@/components/about/CapabilityMatrix";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Moneeb Hussain's engineering background - from mechatronics and industrial automation to computer vision and multi-agent AI systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="About"
        title="From plant floors to perception pipelines"
      />

      <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-text-secondary">
        <p>
          {profile.support}
        </p>
        <p>
          My engineering path started on a literal factory floor. Two years
          commissioning and maintaining an automated storage and retrieval
          system at Style Textile meant living with PLC logic, electrical
          schematics, and I/O faults that had to be diagnosed under time
          pressure - no simulation, no undo button. That grounding in
          physical systems shows up directly in the final-year thesis that
          followed: a barcode-free retail checkout that had to coordinate a
          stepper motor, a webcam, and a YOLOv4-tiny detector into one
          working loop, from perception through to a printed receipt.
        </p>
        <p>
          Since then, the work has moved between two modes that inform each
          other. As a Software Engineer at Septem Systems, I build and ship
          production frontend and backend systems - the kind of work where
          an API latency improvement from 3.9s to 1.2s matters because real
          users are waiting on it. In parallel, hackathon and research-style
          projects - AegisOps AI, FirstCheck AI, and others - let me explore
          multi-agent AI, human-in-the-loop decision support, and trustworthy
          system design without a client deadline forcing every corner to be
          cut the same way.
        </p>
        <p>
          What ties it together is a preference for systems that are honest
          about their own limits: constrained scope over inflated claims,
          human approval before consequential action, and metrics that are
          always reported with the conditions they were measured under.
          That&rsquo;s the standard this entire site tries to hold itself to
          as well.
        </p>
      </div>

      <div className="mt-10">
        <DownloadCvButton variant="primary" />
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="mt-6 flex gap-4 rounded-lg border border-border bg-surface p-6">
          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-cobalt">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold text-text">{profile.education.degree}</h3>
            <p className="text-sm text-text-secondary">
              {profile.education.institution} · {profile.education.period}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              CGPA: <span className="font-medium text-text">{profile.education.gpa}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where the technical range sits"
          description="Grouped by the kind of problem each technology gets used for, drawn directly from the projects and roles on this site."
        />
        <div className="mt-8">
          <CapabilityMatrix />
        </div>
      </div>
    </div>
  );
}

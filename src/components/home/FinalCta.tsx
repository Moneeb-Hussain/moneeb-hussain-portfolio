import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";

export function FinalCta() {
  return (
    <section className="bg-dark-section" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2
          id="final-cta-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-surface sm:text-4xl"
        >
          {profile.availability}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-surface/70">
          If you&apos;re building perception, reasoning, or automation
          systems and want to talk specifics — architecture, trade-offs, or a
          role — I&apos;d like to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cobalt px-5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
          >
            Get in touch
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <CopyEmailButton
            email={profile.links.email}
            className="border-surface/20 bg-transparent text-surface hover:border-cobalt hover:text-cobalt"
          />
          <DownloadCvButton className="border-surface/20 bg-transparent text-surface hover:border-cobalt hover:text-cobalt" />
        </div>
      </div>
    </section>
  );
}

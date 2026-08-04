import { ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";

export function ContactPanel() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-teal">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span>
          {profile.availability}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-text">
          Let&apos;s talk about the work
        </h2>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-text-secondary">
          Email is the most reliable way to reach me. I read everything and
          reply personally — no forms, no gatekeeping.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <CopyEmailButton email={profile.links.email} variant="primary" />
          <DownloadCvButton />
        </div>

        <dl className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center gap-2.5 text-sm text-text-secondary">
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            <dt className="sr-only">Email</dt>
            <dd>{profile.links.email}</dd>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-text-secondary">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            <dt className="sr-only">Location</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-cobalt"
        >
          <div>
            <p className="font-semibold text-text">LinkedIn</p>
            <p className="text-sm text-text-secondary">Professional background &amp; updates</p>
          </div>
          <ExternalLink className="size-5 text-text-secondary" aria-hidden="true" />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-cobalt"
        >
          <div>
            <p className="font-semibold text-text">GitHub</p>
            <p className="text-sm text-text-secondary">Source code for public projects</p>
          </div>
          <ExternalLink className="size-5 text-text-secondary" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

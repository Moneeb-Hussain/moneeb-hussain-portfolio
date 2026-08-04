import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs font-medium tracking-[0.15em] text-cobalt uppercase">
          {profile.label}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">
          {profile.support}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cobalt px-5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
          >
            View selected work
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/research"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-semibold text-text transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Explore research profile
          </Link>
          <DownloadCvButton variant="secondary" />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center gap-1.5 hover:text-cobalt"
          >
            <Mail className="size-4" aria-hidden="true" />
            {profile.links.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cobalt"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cobalt"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

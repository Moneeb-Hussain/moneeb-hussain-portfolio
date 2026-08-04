import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { primaryNavigation } from "./navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-mono text-sm font-semibold text-text"
            >
              <span className="flex size-9 items-center justify-center rounded-md bg-dark-section text-surface">
                MH
              </span>
              Moneeb Hussain
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              {profile.label}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
              Site
            </p>
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-6 text-sm text-text-secondary hover:text-cobalt"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
              Connect
            </p>
            <a
              href={`mailto:${profile.links.email}`}
              className="flex min-h-6 items-center gap-1.5 text-sm text-text-secondary hover:text-cobalt"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {profile.links.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-6 items-center gap-1.5 text-sm text-text-secondary hover:text-cobalt"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-6 items-center gap-1.5 text-sm text-text-secondary hover:text-cobalt"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
              Based in
            </p>
            <p className="text-sm text-text-secondary">{profile.location}</p>
            <p className="text-sm text-text-secondary">{profile.availability}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

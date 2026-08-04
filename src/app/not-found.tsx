import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium tracking-[0.15em] text-cobalt uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
        The page you&apos;re looking for may have moved or never existed. Try
        one of the links below.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cobalt px-5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
        >
          Back to home
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-semibold text-text transition-colors hover:border-cobalt hover:text-cobalt"
        >
          View work
        </Link>
      </div>
    </div>
  );
}

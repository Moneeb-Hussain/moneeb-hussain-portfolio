import { profile } from "@/content/profile";

export function MetricRail() {
  return (
    <section className="border-b border-border bg-dark-section" aria-label="Credibility metrics">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <p className="font-mono text-2xl font-semibold text-surface sm:text-3xl">
                {metric.value}
              </p>
              <p className="text-sm font-medium text-surface/90">{metric.label}</p>
              {metric.detail ? (
                <p className="text-xs leading-snug text-surface/60">{metric.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

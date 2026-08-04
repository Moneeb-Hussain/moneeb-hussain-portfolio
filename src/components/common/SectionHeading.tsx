import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  /** Renders the title as an h1 instead of the default h2 (page-level use only). */
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-xs font-medium tracking-[0.15em] text-cobalt uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "mt-3 text-balance font-semibold tracking-tight text-text",
          as === "h1" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { Download } from "lucide-react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

interface DownloadCvButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  label?: string;
}

export function DownloadCvButton({
  className,
  variant = "secondary",
  label = "Download CV",
}: DownloadCvButtonProps) {
  return (
    <a
      href={profile.links.cv}
      download
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors",
        variant === "primary"
          ? "border-cobalt bg-cobalt text-white hover:bg-cobalt-hover"
          : "border-border bg-surface text-text hover:border-cobalt hover:text-cobalt",
        className,
      )}
    >
      <Download className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

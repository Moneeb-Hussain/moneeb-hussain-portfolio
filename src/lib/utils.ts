import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectStatus } from "@/content/types";

/**
 * Merge conditional class names and resolve conflicting Tailwind utility
 * classes, keeping the last-applied one (e.g. `cn("p-2", isActive && "p-4")`).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  "academic-thesis": "Academic thesis",
  "hackathon-prototype": "Hackathon prototype",
  "professional-work": "Professional work",
  "competition-project": "Competition project",
  "industrial-engineering": "Industrial engineering",
  planned: "Planned",
};

/** Human-readable label for a project's provenance, used on cards and badges. */
export function formatProjectStatus(status: ProjectStatus): string {
  return PROJECT_STATUS_LABELS[status];
}

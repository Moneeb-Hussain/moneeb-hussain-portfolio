"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectStatus } from "@/content/types";
import { cn, formatProjectStatus } from "@/lib/utils";
import { ProjectGrid } from "./ProjectGrid";

interface ProjectFilterProps {
  projects: Project[];
}

type FilterValue = "all" | ProjectStatus;

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const availableStatuses = useMemo(() => {
    const statuses = new Set<ProjectStatus>();
    for (const project of projects) statuses.add(project.status);
    return Array.from(statuses);
  }, [projects]);

  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [projects, activeFilter]);

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: `All (${projects.length})` },
    ...availableStatuses.map((status) => ({
      value: status,
      label: `${formatProjectStatus(status)} (${projects.filter((p) => p.status === status).length})`,
    })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const active = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={active}
              className={cn(
                "min-h-9 rounded-full border px-3.5 text-sm font-medium transition-colors",
                active
                  ? "border-cobalt bg-cobalt text-white"
                  : "border-border bg-surface text-text-secondary hover:border-cobalt hover:text-cobalt",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
}

import {
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
  ShieldAlert,
  UserCheck,
  Users,
} from "lucide-react";
import type { Project } from "@/content/types";

interface ProjectMetadataProps {
  project: Project;
}

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  const hasLinks =
    project.links && (project.links.github || project.links.demo || project.links.verify);

  return (
    <aside className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-6">
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
          Role
        </p>
        <p className="mt-1.5 flex items-start gap-2 text-sm text-text">
          <UserCheck className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
          {project.role}
        </p>
      </div>

      {project.team && project.team.length > 0 ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Team
          </p>
          <ul className="mt-1.5 flex flex-col gap-1">
            {project.team.map((member) => (
              <li key={member.name} className="flex items-start gap-2 text-sm text-text">
                <Users className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
                <span>
                  {member.name}
                  {member.role ? (
                    <span className="text-text-secondary"> - {member.role}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : project.teamSize ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Team size
          </p>
          <p className="mt-1.5 flex items-start gap-2 text-sm text-text">
            <Users className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            {project.teamSize} people
          </p>
        </div>
      ) : null}

      {project.advisor ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Advisor
          </p>
          <p className="mt-1.5 text-sm text-text">{project.advisor}</p>
        </div>
      ) : null}

      {project.organization ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Organization
          </p>
          <p className="mt-1.5 flex items-start gap-2 text-sm text-text">
            <Building2 className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            {project.organization}
          </p>
        </div>
      ) : null}

      {project.period ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Period
          </p>
          <p className="mt-1.5 flex items-start gap-2 text-sm text-text">
            <Calendar className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            {project.period}
          </p>
        </div>
      ) : null}

      {project.location ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Location
          </p>
          <p className="mt-1.5 flex items-start gap-2 text-sm text-text">
            <MapPin className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            {project.location}
          </p>
        </div>
      ) : null}

      <div>
        <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
          Stack
        </p>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {hasLinks ? (
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
            Links
          </p>
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {project.links?.github ? (
              <li>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cobalt hover:text-cobalt-hover"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  Source repository
                </a>
              </li>
            ) : null}
            {project.links?.demo ? (
              <li>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cobalt hover:text-cobalt-hover"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  Live demo
                </a>
              </li>
            ) : null}
            {project.links?.verify ? (
              <li>
                <a
                  href={project.links.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cobalt hover:text-cobalt-hover"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  Verification
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}

      {project.safetyNote ? (
        <div className="rounded-md border border-amber/40 bg-amber/10 p-3">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-text">
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden="true" />
            {project.safetyNote}
          </p>
        </div>
      ) : null}

      {project.disclaimer ? (
        <div className="rounded-md border border-amber/40 bg-amber/10 p-3">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-text">
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden="true" />
            {project.disclaimer}
          </p>
        </div>
      ) : null}
    </aside>
  );
}

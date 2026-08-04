import { Award, BadgeCheck, GraduationCap, Trophy } from "lucide-react";
import type { Achievement, AchievementCategory } from "@/content/types";

const CATEGORY_ICON: Record<AchievementCategory, typeof Trophy> = {
  competition: Trophy,
  certification: BadgeCheck,
  recognition: Award,
  academic: GraduationCap,
};

const CATEGORY_LABEL: Record<AchievementCategory, string> = {
  competition: "Competition",
  certification: "Certification",
  recognition: "Recognition",
  academic: "Academic",
};

interface AchievementListProps {
  achievements: Achievement[];
}

export function AchievementList({ achievements }: AchievementListProps) {
  const sorted = [...achievements].sort((a, b) => a.priority - b.priority);

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {sorted.map((achievement) => {
        const Icon = CATEGORY_ICON[achievement.category];
        return (
          <li
            key={achievement.id}
            className="flex gap-4 rounded-lg border border-border bg-surface p-5"
          >
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-amber">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-text-secondary uppercase">
                {CATEGORY_LABEL[achievement.category]}
                {achievement.date ? ` · ${achievement.date}` : ""}
              </p>
              <h3 className="mt-1 font-semibold text-text">{achievement.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {achievement.description}
              </p>
              {achievement.verifyUrl ? (
                <a
                  href={achievement.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-cobalt hover:text-cobalt-hover"
                >
                  View verification
                </a>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

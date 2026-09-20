import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  PRINCIPLES,
  RESEARCH_INTERESTS,
  SKILL_GROUPS,
  STATS,
  handoffProfile,
} from "@/content/handoff";
import { FeaturedProjects } from "./FeaturedProjects";
import { HomeNav } from "./Nav";
import { ContactForm } from "./ContactForm";

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function PrincipleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function HomeView() {
  const featured = ACHIEVEMENTS[0];
  const rest = ACHIEVEMENTS.slice(1);

  return (
    <>
      <HomeNav />
      <main id="main-content">
        <header id="top" className="pf-hero">
          <div className="pf-hero-text">
            <div className="pf-hero-eyebrow">{handoffProfile.eyebrow}</div>
            <h1 className="pf-h1">{handoffProfile.name}</h1>
            <p className="pf-hero-statement">{handoffProfile.statement}</p>
            <p className="pf-hero-lead">{handoffProfile.lead}</p>
            <div className="pf-cta-row">
              <a href="#work" className="pf-btn-primary">
                View Work ↓
              </a>
              <a href={`mailto:${handoffProfile.email}`} className="pf-btn-secondary">
                Email
              </a>
              <a
                href={handoffProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn-secondary"
              >
                GitHub
              </a>
              <a
                href={handoffProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="pf-hero-photo-wrap">
            <Image
              src={handoffProfile.headshotSrc}
              alt={handoffProfile.headshotAlt}
              width={240}
              height={240}
              className="pf-hero-photo"
              priority
            />
          </div>
        </header>

        <section className="pf-stats" aria-label="Highlights">
          {STATS.map((stat) => (
            <div key={stat.label} className="pf-stat-card">
              <div className="pf-stat-num">{stat.value}</div>
              <div className="pf-stat-label">{stat.label}</div>
            </div>
          ))}
        </section>

        <FeaturedProjects />

        <section className="pf-inner" data-section="true">
          <div className="pf-section-head">
            <div className="pf-eyebrow">Engineering Principles</div>
            <h2 className="pf-h2">How these systems are meant to fail safely</h2>
            <p className="pf-lead">
              A few things I try to stick to on every project below, based on
              choices I actually made, not just ideas I like.
            </p>
          </div>
          <div className="pf-principles-grid">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="pf-principle">
                <div className="pf-principle-icon">
                  <PrincipleIcon />
                </div>
                <div>
                  <div className="pf-principle-title">{principle.title}</div>
                  <p className="pf-principle-text">{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="pf-band" data-section="true">
          <div className="pf-inner">
            <div className="pf-section-head">
              <div className="pf-eyebrow">Career</div>
              <h2 className="pf-h2">Experience & Mentorship</h2>
            </div>
            <div className="pf-timeline">
              {EXPERIENCE.map((entry, index) => (
                <div key={entry.role} className="pf-exp-row">
                  <div className="pf-exp-rail">
                    <div className="pf-exp-dot" />
                    {index < EXPERIENCE.length - 1 ? (
                      <div className="pf-exp-line" />
                    ) : null}
                  </div>
                  <div className="pf-exp-content">
                    <div className="pf-exp-period">{entry.period}</div>
                    <h3 className="pf-exp-role">{entry.role}</h3>
                    <div className="pf-exp-org">{entry.org}</div>
                    <ul className="pf-exp-list">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="pf-inner" data-section="true">
          <div className="pf-section-head">
            <div className="pf-eyebrow">Toolbox</div>
            <h2 className="pf-h2">Skills</h2>
          </div>
          <div className="pf-skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="pf-skill-card">
                <div className="pf-skill-title">{group.title}</div>
                <div className="pf-skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="pf-skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-inner" data-section="true">
          <div className="pf-section-head">
            <div className="pf-eyebrow">Research Interests</div>
            <h2 className="pf-h2">Open questions I keep coming back to</h2>
            <p className="pf-lead">
              Questions I don&apos;t have answers to yet, but keep running into
              across these projects.
            </p>
          </div>
          <div className="pf-ri-grid">
            {RESEARCH_INTERESTS.map((item) => (
              <div key={item.title} className="pf-ri-card">
                <div className="pf-ri-title">{item.title}</div>
                <p className="pf-ri-text">{item.text}</p>
                <div className="pf-ri-question">
                  <span className="pf-ri-qmark">?</span>
                  <span className="pf-ri-qtext">{item.question}</span>
                </div>
                <div className="pf-ri-spacer" />
                <div className="pf-ri-tags">
                  {item.relatedProjects.map((project) => (
                    <span key={project} className="pf-ri-tag">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="pf-band" data-section="true">
          <div className="pf-inner">
            <div className="pf-section-head">
              <div className="pf-eyebrow">Recognition</div>
              <h2 className="pf-h2">Achievements</h2>
            </div>
            <div className="pf-ach-featured">
              <div className="pf-ach-featured-tag">{featured.category}</div>
              <p className="pf-ach-featured-text">{featured.text}</p>
            </div>
            <div className="pf-ach-list">
              {rest.map((item) => (
                <div key={item.mark} className="pf-ach-row">
                  <span className="pf-ach-mark">{item.mark}</span>
                  <span className="pf-ach-cat">{item.category}</span>
                  <p className="pf-ach-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pf-edu-inner" data-section="true" aria-labelledby="education-heading">
          <div className="pf-edu-card">
            <div>
              <div className="pf-eyebrow">Education</div>
              <h3 id="education-heading" className="pf-edu-school">
                {EDUCATION.school}
              </h3>
              <div className="pf-edu-degree">{EDUCATION.degree}</div>
              <div className="pf-edu-tools">{EDUCATION.tools}</div>
            </div>
            <div className="pf-edu-meta">
              <div className="pf-edu-years">{EDUCATION.years}</div>
              <div className="pf-edu-cgpa">{EDUCATION.cgpa}</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="pf-footer" data-section="true">
        <div className="pf-footer-inner">
          <h2 className="pf-footer-head">{handoffProfile.footerHeading}</h2>
          <p className="pf-footer-lead">{handoffProfile.footerLead}</p>
          <div className="pf-contact-layout">
            <div className="pf-contact-details">
              <a
                className="pf-contact-card"
                href={`mailto:${handoffProfile.email}`}
              >
                <span className="pf-contact-icon">
                  <Mail size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span className="pf-contact-kicker">Email</span>
                  <span className="pf-contact-value">{handoffProfile.email}</span>
                </span>
              </a>
              <a className="pf-contact-card" href={handoffProfile.phoneHref}>
                <span className="pf-contact-icon">
                  <Phone size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span className="pf-contact-kicker">Phone</span>
                  <span className="pf-contact-value">{handoffProfile.phone}</span>
                </span>
              </a>
              <div className="pf-contact-social" data-noprint="true">
                <a
                  href={handoffProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-btn-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href={handoffProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-btn-secondary"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="pf-footer-copy">{handoffProfile.copyright}</div>
        </div>
      </footer>
    </>
  );
}

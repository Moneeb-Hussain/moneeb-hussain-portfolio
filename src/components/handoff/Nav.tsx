"use client";

import { useState } from "react";
import Link from "next/link";
import { handoffNav, handoffProfile } from "@/content/handoff";
import { ThemeToggle } from "./theme";

export function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="pf-nav" aria-label="Primary">
        <Link href="#top" className="pf-nav-mark">
          {handoffProfile.mark}
        </Link>
        <div className="pf-nav-right" data-noprint="true">
          <div className="pf-nav-links">
            {handoffNav.map((item) => (
              <a key={item.href} href={item.href} className="pf-nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="pf-nav-menu"
            aria-expanded={open}
            aria-controls="home-nav-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <ThemeToggle />
          <a
            href={handoffProfile.resumeHref}
            download={handoffProfile.resumeDownloadName}
            className="pf-resume"
          >
            Résumé ↓
          </a>
        </div>
      </nav>
      <div
        id="home-nav-drawer"
        className={open ? "pf-nav-drawer is-open" : "pf-nav-drawer"}
        data-noprint="true"
      >
        {handoffNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

export function CaseStudyNav() {
  return (
    <nav className="pf-nav" aria-label="Case study">
      <Link href="/" className="pf-cs-back">
        ← {handoffProfile.name}
      </Link>
      <ThemeToggle />
    </nav>
  );
}

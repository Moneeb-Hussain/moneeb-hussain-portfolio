# Portfolio Strategy - Moneeb Hussain

**Date:** 2026-08-04  
**Companion:** `PORTFOLIO_CONTENT_AUDIT.md`

---

## 1. Audiences

### Primary
1. University professors  
2. Research laboratories  
3. Funded MS/PhD supervisors  
4. Graduate-admissions reviewers  

### Secondary
5. AI engineering teams  
6. Robotics / automation teams  
7. Technical recruiters & engineering managers  
8. Research-oriented startups & collaborators  
9. Hackathon reviewers  

### Not primary
Investors, freelance clients, influencer growth, vanity branding.

---

## 2. Positioning

**Moneeb Hussain is an AI systems engineer and mechatronics graduate working across computer vision, intelligent automation, multimodal AI, trustworthy decision systems, and production software.**

Core narrative: **Sense → Reason → Decide → Act**

He does not ship isolated models; he connects perception, reasoning, software, people, and physical processes.

---

## 3. Homepage messaging

- **Label:** AI Systems • Computer Vision • Intelligent Automation  
- **Headline:** Engineering AI systems that connect perception, reasoning and action.  
- **Support:** I am Moneeb Hussain, a software engineer and mechatronics graduate building computer-vision, multimodal-AI and operational decision systems across physical and digital environments.  
- **CTAs:** View selected work · Explore research profile · Download CV  
- **Availability:** Exploring funded graduate research opportunities  

---

## 4. Site map

```
/                 Homepage
/projects         Project index + filters
/projects/[slug]  Case studies
/research         Research direction
/experience       Timeline
/achievements     Editorial list
/about            Engineering story + capabilities
/contact          Direct contact
```

**Nav:** Work · Research · Experience · Achievements · About · Contact · Download CV  

---

## 5. Homepage hierarchy

1. Header (sticky, accessible)  
2. Hero + Sense→Reason→Decide→Act diagram  
3. Credibility strip (verified metrics only)  
4. Selected systems (3 flagships)  
5. Systems philosophy (Perception / Reasoning / Reliability / Execution)  
6. Additional work  
7. Research direction preview  
8. Experience snapshot  
9. Achievements preview  
10. Final CTA  

---

## 6. Project selection logic

Rank by: graduate-research relevance → problem meaning → individual contribution clarity → technical depth → systems complexity → verified results → artifact quality → recency → privacy feasibility.

Flagships: Retail Checkout, AegisOps, FirstCheck.  
Secondary: PakAI, Livestock, ESGTree, ASRS, Orchestrate, UNODC.

---

## 7. Research positioning

Public page focuses on durable themes (not a single lab pitch):

1. Resource-aware computer vision  
2. Intelligent sensing & computational imaging  
3. Reliable multimodal AI  
4. Human-in-the-loop decision systems  
5. Cyber-physical & intelligent automation  

Modest language; questions to explore - not claimed contributions. No publications section.

---

## 8. Visual direction

Technical-editorial, light-first:

| Token | Value |
|-------|-------|
| Background | `#F7F8FA` |
| Surface | `#FFFFFF` |
| Text | `#0B1220` |
| Secondary text | `#526071` |
| Dark section | `#0F172A` |
| Cobalt | `#2563EB` |
| Teal | `#0F766E` |
| Amber | `#F59E0B` |
| Border | `#DDE3EA` |

Typography: Geist Sans + Geist Mono.  
Motion: one pipeline pulse, gentle entrances, hover feedback, `prefers-reduced-motion` fallbacks.  
No neon/cyberpunk/gaming aesthetics; no skill bars; no fake portraits in hero.

---

## 9. Copy principles

Direct, specific, evidence-led, modest. Distinguish team vs personal ownership. Label prototypes honestly. Never invent metrics.

---

## 10. Calls to action

Primary: View selected work / Discuss research / Email.  
Always available: Download CV, LinkedIn, GitHub.  
No contact-form backend unless configured securely later.

---

## 11. Technology stack

- Next.js (App Router) + TypeScript strict  
- Tailwind CSS + CSS variables  
- Server Components by default  
- Framer Motion sparingly  
- Lucide icons  
- Typed local content (+ MDX for flagship narratives)  
- Playwright smoke tests  
- Vercel-compatible  

No CMS/database required. Analytics optional and off by default.

---

## 12. Privacy strategy

- No phone number  
- No passport/identity docs in `public/`  
- Sanitised ESGTree & UNODC  
- Placeholders for missing demos/screenshots  
- Revoke any leaked credentials found outside this repo  

---

## 13. Risks & assumptions

| Risk | Mitigation |
|------|------------|
| Missing project screenshots | Designed placeholders + abstract diagrams |
| Role inflation on hackathons | Use README/certificate-verified titles only |
| Conflicting CV facts | Prefer latest CV; document contradictions |
| Confidential professional work | Sanitised copy only |
| Over-animation | Prefer performance & comprehension |

**Assumptions:** Latest CV is authoritative; sibling repos are authentic implementations of named projects; Drive verification links remain valid.

---

## 14. Pre-launch requirements

- [ ] Replace placeholders with approved images  
- [ ] Confirm FirstCheck role wording with Moneeb  
- [ ] Add demo URLs when available  
- [ ] Verify CS50 “Winner 10/10” language against official result page  
- [ ] Copy latest CV into `public/documents/`  
- [ ] Production build + Playwright smoke  
- [ ] Accessibility pass (keyboard, focus, contrast, skip link)  
- [ ] Deploy to Vercel; set canonical URL  
- [ ] Confirm analytics consent before enabling  

---

## 15. Component map

`SiteHeader`, `MobileNavigation`, `SiteFooter`, `Hero`, `SystemPipeline`, `MetricRail`, `SectionHeading`, `FeaturedProjectCard`, `ProjectCard`, `ProjectFilter`, `ArchitectureDiagram`, `ResearchInterestCard`, `ExperienceTimeline`, `AchievementList`, `CapabilityMatrix`, `ContactPanel`, `CopyEmailButton`, `DownloadCvButton`, `ReadingProgress`, `PlaceholderAsset`, `SkipToContent`

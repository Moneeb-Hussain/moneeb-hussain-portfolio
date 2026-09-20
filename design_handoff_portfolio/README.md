# Handoff: Moneeb Hussain — AI Systems Engineer Portfolio

## Overview
A two-page personal portfolio site: a scrolling homepage (hero, stats, projects, experience, skills, research interests, achievements, education, contact) and one linked case-study page for the flagship project. Built for an AI/CV/robotics engineer; clean-technical aesthetic, dark/light toggle, expandable project cards.

## About the Design Files
The `.dc.html` files in this bundle are **design references** — interactive HTML prototypes built in a proprietary component format (not plain React/Vue). They render correctly only inside the tool that made them. Treat them as the source of truth for layout, copy, and behavior, and **rebuild the UI in your target codebase's actual stack** (React, Next.js, plain HTML/CSS, whatever the project uses) — do not try to run or import the `.dc.html` files directly.

## Fidelity
**High-fidelity.** All colors, type, spacing, and copy below are final. Recreate pixel-for-pixel where practical.

## Pages

### 1. `Portfolio.dc.html` — Homepage (single scroll)
Sections top to bottom, each full-width with `max-width: 1200px` centered content and `48px` horizontal padding:
1. **Sticky nav** — logo mark "MH" (left), links Work/Experience/Skills/Achievements/Contact, theme toggle button, "Résumé ↓" download pill (right). `backdrop-filter: blur(10px)`, bottom border, `padding: 16px 48px`.
2. **Hero** — flex row (wraps on narrow), text column left / photo right. Eyebrow tag ("AI Systems · Computer Vision · Robotics · Intelligent Automation"), H1 name, bold 23px statement line, 16.5px lead paragraph, 4 CTA buttons (View Work / Email / GitHub / LinkedIn). Photo: 240×240 rounded (20px), `headshot.png`.
3. **Stats strip** — grid of cards (auto-fit, min 180px), 1px gap on border color background so cards look separated by hairlines. Mono numbers, 26px, accent color.
4. **Featured Projects** (`#work`) — filter chips (All/Computer Vision/GenAI/Robotics), sort toggle (Recent/Impact), list of expandable cards. Each card: header row (date, tag pills, title, blurb, +/− toggle) that expands to Problem/Approach/Result blocks, tech-stack pills, "Read full case study →" + "Source Code ↗" links.
5. **Engineering Principles** — eyebrow "Engineering Principles", H2 "How these systems are meant to fail safely", one-line subhead. 2×2 grid (auto-fit, min 320px), each item: 36×36 rounded icon box (bordered, accent-colored concentric-circle glyph) + title (16px bold) + 14px description. 4 principles.
6. **Experience & Mentorship** (`#experience`) — vertical timeline: dot + connecting line rail, period/role/org/bullets per entry. 3 entries (Septem Systems, iCodeGuru, Style Textile).
7. **Skills** (`#skills`) — grid of cards, each a category title + wrapped chip row. 6 categories.
8. **Research Interests** — header row: eyebrow "Research Interests", H2 "Open questions I keep coming back to", one-line subhead (no side link). 3-column grid of cards (auto-fit, min 280px); each card: title (17px bold), short paragraph, then a question row (small circled "?" mono glyph + italic 13px question text), a hairline spacer, then wrapped project-name tag pills at the bottom.
9. **Achievements** — one featured banner (accent border, category pill + large 17px statement) for the top achievement, followed by a bordered list (rows with mono index, category label, description) for the rest. 9 items total.
10. **Education** — single card, school/degree/tools left, years/CGPA right-aligned.
11. **Footer** (`#contact`) — centered: heading, subtext, contact link row (email/phone/GitHub/LinkedIn), copyright line.

### 2. `Case Study - Retail Checkout.dc.html`
Linked from the retail-checkout project card. Single-column, `max-width: 900px`. Structure: back-link nav + theme toggle → hero (eyebrow, H1, lead, 4-item meta grid) → striped image placeholder (rig photo) → numbered sections (01 Problem w/ objectives grid, 02 Approach w/ 2-col hardware/software cards, striped placeholder for GUI screenshot, 03 What changed from V-2 as before/after comparison rows, 04 Result, 05 Stack pills) → footer nav row (back to projects / source code).

## Design Tokens

### Typography
- Sans: **Inter** (400/500/600/700/800), Google Fonts.
- Mono: **JetBrains Mono** (400–700), Google Fonts.
- H1: `clamp(40px,6vw,68px)`, weight 800, letter-spacing -0.02em.
- H2 (section): `clamp(28px,4vw,38px)`, weight 800.
- Body/lead: 15–18px, weight 400.
- Mono labels/eyebrows: 11–13px, uppercase, letter-spacing 0.02–0.08em.

### Colors — Dark theme (default)
- Background: `oklch(0.16 0.004 250)`
- Background alt: `oklch(0.19 0.005 250)`
- Background alt 2 (section tint): `oklch(0.135 0.004 250)`
- Card background: `oklch(0.185 0.005 250)`
- Border: `oklch(0.30 0.006 250)`; border soft: `oklch(0.26 0.006 250)`
- Text: `oklch(0.95 0.003 250)`; dim: `oklch(0.66 0.008 250)`; faint: `oklch(0.48 0.01 250)`
- Accent (signal green): `oklch(0.78 0.18 150)`; accent-on text: `oklch(0.14 0.02 150)`
- Nav bg (blurred): `oklch(0.16 0.004 250 / 0.82)`

### Colors — Light theme
- Background: `oklch(0.985 0.002 250)`; alt: `oklch(0.965 0.003 250)`; alt2: `oklch(0.945 0.004 250)`
- Card: `oklch(0.99 0.002 250)`
- Border: `oklch(0.87 0.005 250)`; soft: `oklch(0.91 0.004 250)`
- Text: `oklch(0.20 0.006 250)`; dim: `oklch(0.42 0.008 250)`; faint: `oklch(0.58 0.01 250)`
- Accent: `oklch(0.50 0.15 150)`; accent-on text: `oklch(0.99 0.01 150)`

Convert OKLCH to hex/RGB in your target stack as needed — all accent colors share the same hue (150°) at different lightness for dark/light.

### Spacing / radii
- Section padding: `96px 48px` (homepage sections), `56px 48px` (case-study sections).
- Card radius: 14–16px. Pills/chips: 8–24px (fully rounded for buttons/tags).
- Grid gaps: 16–24px typical.

## Interactions & Behavior
- **Theme toggle**: persisted to `localStorage` key `portfolio-theme` (`"dark"`/`"light"`), shared across both pages — reading the same key keeps them in sync.
- **Project cards**: click header row to expand/collapse (only one expanded at a time in current build — `expandedId` state). Filter chips are single-select (`All` clears filter). Sort toggle switches between original order ("Recent") and a manual `impact` rank field ("Impact").
- **Résumé download**: `<a download>` pointing at `assets/Moneeb-Hussain-Resume.pdf`.
- **Print**: elements marked "no-print" (nav links, theme toggle, filter/sort controls, contact link row) are hidden via `@media print`; used for résumé/CV-style PDF export of the homepage.
- Smooth-scroll anchors: `#work`, `#experience`, `#skills`, `#contact`.

## State Management
- `theme`: `'dark' | 'light'`, initialized from `localStorage`, toggled by nav button, written back on change.
- `filter`: currently active project tag (`'All'` default).
- `sort`: `'recent' | 'impact'`.
- `expandedId`: id of the currently expanded project card (or `null`); defaults to the retail-checkout project open on load.
- Case-study page only tracks `theme` (same localStorage key).

## Content Data (recreate as typed data, not hardcoded JSX)
- **Stats** (7): 98.78% detection accuracy; 3.9s→1.2s API latency; 3,500 training images/70 classes; 150+ learners mentored; Top 4% HackerRank Orchestrate; 7+ international hackathons.
- **Projects** (3): Automatic Retail Checkout V-3 (has case-study link), HeatLens, Livestock AI — each with date, tags, blurb, problem/approach/result, tech stack array, source link, `impact` rank int.
- **Experience** (3): Septem Systems (Software Engineer II, Oct 2023–present), iCodeGuru (Technical Trainer & Moderator, Feb 2026–present), Style Textile (Engineer, Aug 2021–Aug 2023).
- **Skill groups** (6): AI/ML & GenAI, Computer Vision, Programming, Robotics & Control, Backend & Cloud, Databases & Tools.
- **Engineering principles** (4): Constrain the problem before scaling it; Human approval before consequential action; State the limits as clearly as the results; Match training data to deployment reality. Each has a title + description; all use the same concentric-circle icon glyph.
- **Research interests** (3): Resource-aware computer vision, Intelligent sensing & computational imaging, Reliable multimodal AI. Each has title, paragraph, an open-ended question, and 1–2 related-project tags (e.g. "Automatic Retail Checkout V-3").
- **Achievements** (9, ordered): Harvard CS50x win (featured), HackerRank top 4%, CodeSprint top 8%, ICSC 2026 honour, GenAI program top 5%, robotics competition wins, Team Lead 5+ international AI hackathons, Stanford-Funded Fellowship with Honors, IELTS Academic Band 7 (C1).
- **Education**: UET Lahore, BS Mechatronics & Control Engineering, 2017–2021, CGPA 3.16/4.0.
- **Contact**: moneebhussain539@gmail.com, +92 321 4694262, github.com/Moneeb-Hussain, linkedin.com/in/moneebhussain112.

## Assets
- `assets/headshot.png` — profile photo, used in hero (240×240, cropped/rounded).
- `assets/Moneeb-Hussain-Resume.pdf` — downloadable résumé, linked from nav.
- Two content-placeholder image slots on the case-study page (conveyor rig photo, billing GUI screenshot) — currently striped placeholders; replace with real photos/screenshots when available.

## Files in this bundle
- `Portfolio.dc.html` — homepage design reference
- `Case Study - Retail Checkout.dc.html` — case-study page design reference
- `assets/headshot.png`
- `assets/Moneeb-Hussain-Resume.pdf`

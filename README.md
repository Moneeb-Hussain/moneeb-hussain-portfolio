# Moneeb Hussain - Portfolio

Research-oriented engineering portfolio for **Moneeb Hussain**: AI systems, computer vision, multimodal AI, trustworthy decision workflows, production software, and hardware–software integration.

Primary audiences: professors, research labs, graduate admissions, and funded MS/PhD supervisors.

> Engineering AI systems that connect perception, reasoning and action.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (sparing micro-interactions)
- Lucide icons
- Typed local content (no CMS)
- Playwright smoke tests
- Vercel-compatible

**Node.js 20+ required** (see `.nvmrc` → 22).

## Getting started

```bash
nvm use        # or: nvm use 22
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test:e2e` | Playwright smoke tests |

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/projects` | Project index + filters |
| `/projects/[slug]` | Case studies |
| `/research` | Research direction |
| `/experience` | Career timeline |
| `/achievements` | Verified achievements |
| `/about` | Engineering story + capabilities |
| `/contact` | Direct contact (no phone) |

CV download: `/documents/Moneeb-Hussain-CV.pdf`

## Editing content

All public copy lives under `src/content/`:

| File | Edit for |
|------|----------|
| `profile.ts` | Name, headline, links, homepage metrics |
| `projects.ts` | Project cards & metadata |
| `case-studies/*.ts` | Long-form flagship narratives |
| `experience.ts` | Timeline |
| `achievements.ts` | Achievements |
| `research.ts` | Research themes |

### Add a project

1. Append a `Project` object in `src/content/projects.ts` (see `types.ts`).
2. Optionally add a case-study file under `src/content/case-studies/` and register it in `case-studies/index.ts`.
3. Place images in `public/images/projects/<slug>/` and reference them from the project `images` field.
4. Run `npm run typecheck`.

### Replace images

Put assets in `public/images/`. Until real screenshots exist, pages use `PlaceholderAsset` (“Visual evidence to be added”). Do not invent product screenshots.

### Update the CV

Replace:

```text
public/documents/Moneeb-Hussain-CV.pdf
```

Link text is driven by `profile.links.cv`.

### Edit homepage metrics

Edit `profile.metrics` in `src/content/profile.ts`. Every value must remain evidence-backed (see `PORTFOLIO_CONTENT_AUDIT.md`).

## Evidence & strategy docs

- `PORTFOLIO_CONTENT_AUDIT.md` - verified inventory, contradictions, privacy notes
- `PORTFOLIO_STRATEGY.md` - audiences, IA, visual direction, risks

Source materials (CVs, FYP, certificates) remain in the repo for authoring. **Do not** copy passport or identity documents into `public/`.

## Environment variables

None required for the static portfolio.

Optional later:

```bash
# .env.local - analytics only if explicitly approved
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`NEXT_PUBLIC_SITE_URL` is read by `src/lib/metadata.ts` for canonical URLs / sitemap. Analytics stay disabled until configured intentionally.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel (framework: Next.js, root directory: `.`).
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Deploy.

## Testing

```bash
npm run typecheck
npm run lint
npm run build
npx playwright install   # once per machine
npm run test:e2e
```

Note: Playwright Chromium may require a supported OS/browser host; smoke routes can also be checked manually against `npm run start`.

## Accessibility checklist

- [ ] Skip-to-content works
- [ ] Keyboard navigation through header + mobile menu (Escape closes)
- [ ] Visible focus indicators
- [ ] One `h1` per page
- [ ] Diagrams have text equivalents
- [ ] Contrast holds on cobalt/teal accents
- [ ] `prefers-reduced-motion` respected on pipeline animation

## Privacy checklist

- [ ] No phone number on the site
- [ ] ESGTree / UNODC remain sanitised
- [ ] No passport / identity docs in `public/`
- [ ] No secrets in client bundles or git history for this app
- [ ] Demo URLs only when verified

## Pre-launch checklist

- [ ] Replace project visual placeholders with approved images
- [ ] Confirm FirstCheck role wording with Moneeb
- [ ] Add verified demo URLs (AegisOps, FirstCheck, PakAI) when available
- [ ] Confirm CS50 “Winner 10/10” language against official results page
- [ ] Set production `NEXT_PUBLIC_SITE_URL`
- [ ] Production build + smoke tests
- [ ] Share OG preview in Slack/email and verify
- [ ] Enable analytics only with consent/config

## License

Private portfolio site. All rights reserved by Moneeb Hussain.

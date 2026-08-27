# Building AI Confidence in the Gaeltacht Workplace

An interactive course website for the AI literacy and workplace training programme
delivered by **Munster Technological University** for **Údarás na Gaeltachta**, through
the medium of Irish, at Campas Íosagáin.

Facilitator: **Dr Haithem Afli** — Human-Centred AI, NLP, Machine Translation, Responsible AI.
Academic website: <https://hafli.github.io/haithem-afli-academic-website/about.html>

---

## What you have been given

| File | What it is | Use it for |
|---|---|---|
| `udaras-ai-course-github-pages.zip` | The full project **plus** the GitHub Actions workflow, `.nojekyll` and `.gitignore` | **Push this to GitHub.** It builds and publishes itself. |
| `udaras-ai-course-source.zip` | The same React project without the deployment plumbing | Editing locally, or dropping into an existing repo |
| `udaras-ai-course-build.zip` | The finished static site (`dist/`) | Uploading a pre-built site anywhere, including a `gh-pages` branch |
| `Udaras-AI-Course.html` | The whole site in one self-contained file | Backup. Double-click it. Works offline, no server. |
| `README-AI-Course.md` | This document | — |


The published site is entirely static.

---

## Project overview

Stack: **React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide · Vite**.

Routing is hash-based (`#/session/s1`), which matters for GitHub Pages: there are no
server rewrites to configure and no 404 fallback to maintain. Every route works from any
directory.

All course content is data, not markup. To change what the site says, edit `src/data/` —
you should not need to open a component.

```
src/
  data/
    programme.ts        Contractual facts, the 7-stage journey, the 10 questions, the 4 frameworks
    sessionPrep.ts      Preparatory planning day
    session1.ts         Session 1 — full day, Week 2
    session2.ts         Session 2 — full day, Week 4
    session3.ts         Session 3 — half day, Week 6  (the Irish-language session)
    session4.ts         Session 4 — half day, Week 8  (the confidence clinic)
    exerciseContent.ts  Quiz items, scenarios, STOP, risk items, Irish opportunities
    aiact.ts            EU AI Act content and sources
    research.ts         Concepts, the six-stage Irish AI pipeline, placeholders
    facilitator.ts      Dr Afli's profile, research areas, feedback form URL
    finalPlan.ts        My Responsible AI Plan, final reflection, closing statements
  components/           Reusable UI: timeline, cards, workflows, prompt builder, dialogs
  pages/                Landing, Session, Between, Frameworks, AI Act, AI + Irish, Research, Plan
  i18n/                 GA/EN language layer
```

---

## Course structure

| Stage | | When |
|---|---|---|
| Preparatory planning session | Campas Íosagáin | Before Week 2 |
| **Session 1** — Understanding AI: Opportunity, Limitations and Trust | Full day | Week 2 |
| *Between:* try AI three times | | Weeks 2–4 |
| **Session 2** — Responsible AI and AI for Everyday Business | Full day | Week 4 |
| *Between:* turn one task into a workflow | | Weeks 4–6 |
| **Session 3** — AI, Irish and the Future of the Gaeltacht Workplace | Half day | Week 6 |
| **Session 4** — AI Confidence Clinic and Personal AI Plan | Half day | Week 8 |

### Contractual vs proposed

`src/data/programme.ts` → `CONTRACT` holds only what is in the signed Terms of Engagement:
title, 6–8 week duration, August–October 2026, Irish-medium delivery at Campas Íosagáin,
the preparatory planning session, the four sessions and their weeks, the roles of MTU and
Údarás, and the iterative principle. **Do not change these without a corresponding change
to the signed document.** Everything else — timetables, slide plans, exercises,
between-session tasks — is proposed pedagogical detail and is labelled as such in the
interface.

Fees, budget lines and payment terms are deliberately not reproduced anywhere.

### ⚠ One thing to confirm with Údarás in writing

Appendix A of the Terms of Engagement contradicts itself about Session 4. The heading reads
**"Half-Day Wrap-Up (Week 8)"**; the paragraph beneath it refers to **"week twelve"**.

The site uses **Week 8** throughout, consistent with the heading and with the stated 6–8 week
duration, and says so on the programme page. This should be confirmed in writing before the
schedule is circulated.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build -> dist/
npm run preview    # serve the production build locally, to check it before pushing
npm run typecheck  # TypeScript, no emit
npm run single     # one self-contained HTML file -> dist-single/index.html
```

---

## Publish on GitHub Pages

The workflow does the building. You push source; GitHub builds and publishes.

### 1. Create a repository

On GitHub: **New repository**. Public. Give it a short name — the name becomes part of the
URL, so `udaras-ai-course` gives you
`https://<your-username>.github.io/udaras-ai-course/`.

Do not add a README, `.gitignore` or licence — the project already has them.

### 2. Push the project

Unzip `udaras-ai-course-github-pages.zip`, then from inside that folder:

```bash
git init
git add .
git commit -m "Building AI Confidence in the Gaeltacht Workplace"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

### 3. Turn on GitHub Pages

Repository → **Settings** → **Pages** → under **Build and deployment**, set
**Source** to **GitHub Actions**.

That is the only setting to change. Do not pick "Deploy from a branch".

### 4. Wait for the build

Repository → **Actions** tab → the **Deploy to GitHub Pages** run. It installs
dependencies, type-checks, builds and publishes. It takes roughly one to two minutes. A
green tick means it is live.

### 5. Find the published URL

Two places: at the end of the Actions run (the `deploy` job shows the URL), and under
**Settings → Pages**, where it appears at the top. It will be:

```
https://<your-username>.github.io/<repository-name>/
```

### 6. Updating the site later

Edit, commit, push to `main`. The workflow runs again and republishes. Nothing to copy by
hand, no generated files to commit.

```bash
git add .
git commit -m "Update Session 3 slide plan"
git push
```

You can also trigger a rebuild without changing anything: **Actions → Deploy to GitHub
Pages → Run workflow**.

### 7. Renaming the repository, or changing the base path

Nothing to do. The workflow passes the repository name to the build automatically:

```yaml
env:
  VITE_BASE_PATH: /${{ github.event.repository.name }}/
```

Rename the repo and the next build picks it up. If you ever want to force a specific base:

```bash
VITE_BASE_PATH=/some-path/ npm run build
```

And if you build with no `VITE_BASE_PATH` at all, Vite uses a **relative** base (`./`), which
works at any depth — including opening `dist/index.html` straight off your disk. That is how
`udaras-ai-course-build.zip` was built, which is why you can drop it anywhere.

### Alternative: publish the pre-built folder

If you would rather not use Actions, unzip `udaras-ai-course-build.zip` and commit its
contents to a `gh-pages` branch (or to `/docs` on `main`), then set **Settings → Pages →
Source** to **Deploy from a branch**. It works because that build uses relative paths.
The trade-off is that you have to rebuild and re-upload by hand after every change.

---

## Images and attribution

| Asset | Source | Notes |
|---|---|---|
| Portrait of Dr Haithem Afli | Supplied by Dr Afli. Bundled with the site at `src/assets/haithem-afli.jpg` (cropped to 4:5 and resized to 880×1100, ~99 KB). | Bundled, so it works offline and at any base path. |
| Topographic contour motif | Drawn in code (`src/components/Contours.tsx`) | Original SVG, generated at runtime. No licence issues. |
| Icons | [Lucide](https://lucide.dev) | ISC licence, bundled via `lucide-react`. |
| Typefaces | Fraunces and Inter via Google Fonts | Both SIL Open Font Licence. Loaded from `fonts.googleapis.com`; the page falls back to Georgia / system sans if that is unavailable. |

No MTU or Údarás na Gaeltachta logo assets have been used or reproduced — branding is
text-based placeholder only. No stock photography, no generic AI imagery, no photograph of
any other person.

### Replacing the portrait

Drop a new 4:5 portrait JPEG at `src/assets/haithem-afli.jpg` and rebuild. Because it is
imported rather than served from `public/`, Vite fingerprints it in the normal build and
inlines it in the single-file build — so both are genuinely self-contained.

If it ever fails to load, the component falls back to the copy on your own academic
website, and then to a clearly marked `[Dr Haithem Afli — professional photograph]`
placeholder. It never substitutes another person's photograph.

### A note on the biography

The biography on the site is the text you supplied. Your own academic website currently
describes you as **"Lecturer in Artificial Intelligence"** and as **founder** of the
Human-Centred AI Research Group; the supplied text says **"Lecturer in Computer Science"**
and **Director**. Since the site links straight to that page, it is worth aligning the two.
Edit `FACILITATOR.bio` in `src/data/facilitator.ts`.

---

## Irish-language validation

There is a working `GA | EN` toggle in the header. Irish is used for navigation, section
headings, session titles, straplines, central questions and the course's key messages;
detailed planning content stays in English.

**Irish strings carry `needsValidation: true` until a native speaker has actually cleared
them.** Those strings render with a dotted gold underline and a screen-reader note. The
flags have deliberately not been removed to make the interface look finished. To clear one,
delete `needsValidation: true` from that entry in the data file. UI chrome strings live in
`src/i18n/strings.ts`.

Exercise 5 ("Is this good Irish?") ships **empty**, with a facilitator note to generate the
Irish live on the day from the tool participants are actually using. A pre-written sample
would be an illustration rather than evidence.

---

## Research section

`src/data/research.ts` and `src/data/facilitator.ts`.

**No publication, dataset, figure, statistic or result is asserted anywhere.** Areas of work
are described in general terms only. The material that needs to come from you is rendered on
the page as visible dashed placeholders:

- `[REAL IRISH-LANGUAGE EXAMPLE TO BE PROVIDED]` — one real Irish sentence taken through
  the six-stage pipeline, with the actual errors marked where they occurred. This would be
  the strongest single slide in Session 3, and it has to come from real output.
- Selected publications
- Named projects, datasets or tools
- Any figures or evaluation results

The six-stage pipeline — Irish speech → speech recognition → Irish text → language
processing → translation → English — gives every stage three panels: **what AI does**,
**what can go wrong**, and **where human expertise matters**.

---

## EU AI Act content

`src/data/aiact.ts`. Headed **"EU AI Act — current position: August 2026"** and labelled
throughout as **educational guidance, not legal advice**.

Checked in August 2026 against the European Commission's own pages and the Article 4 text,
and updated for **Regulation (EU) 2026/1744** (the Digital Omnibus on AI), published in the
Official Journal on 24 July 2026 and in force from 27 July 2026 — which deferred the
high-risk deadlines to 2 December 2027 and 2 August 2028 and softened Article 4, while
leaving the Article 50 transparency obligations applying from 2 August 2026.

Article 4 is framed as: providers and deployers must take measures to *support* AI literacy
appropriate to people's role, knowledge, experience, training and context. The page states
plainly that no individual certification is prescribed, and that:

> This programme can form part of an organisation's measures to support AI literacy under
> Article 4 of the AI Act.

with an explicit caveat that it does not, on its own, make any organisation compliant.
A "four things people get wrong" section addresses the common misreadings directly.

This is a live area. Re-check the dates before each delivery — and showing participants
*how* you checked is part of the lesson.

---

## Accessibility

- Semantic HTML, one `h1` per page, correct heading order, skip link, unique landmarks.
- Full keyboard navigation with a visible focus ring; `Esc` closes dialogs; dialogs are
  labelled and trap focus.
- Automated axe-core scan clean — no critical, serious or moderate violations — across every
  route and with dialogs open.
- All text meets WCAG AA contrast.
- No information carried by colour alone: every risk state has a shape and a word too.
- `prefers-reduced-motion` disables animation rather than shortening it.
- Responsive from 320px up; wide content scrolls inside its own container.

## Privacy

Nothing typed into the prompt builder, the reflection cards, the Responsible AI Plan, the
experiment logs or any other input is stored, transmitted or persisted. State lives in
memory for the life of the page and is gone when it closes. There is no analytics, no
cookie, no local storage and no backend.

The Google Forms feedback link is an external service and is clearly marked as such. It
opens in a new tab and nothing is passed to it from this site.

---

## Verified before delivery

- `npm ci` and `npm run build` complete cleanly.
- `npm run typecheck` passes with no errors.
- The production build was served from a **subdirectory** (`/udaras-ai-course/`) with a
  static server and every route was loaded and checked, not assumed.
- No application console errors on any route.
- All 13 routes render; dialogs, tabs, accordions, the prompt builder, the decision tree,
  the pipeline, the quizzes and the plan form all work in the production build.
- The GA/EN toggle works throughout.
- External links (academic website, Google Form) resolve and carry
  `target="_blank" rel="noopener noreferrer"`.
- axe-core clean on every route tested.

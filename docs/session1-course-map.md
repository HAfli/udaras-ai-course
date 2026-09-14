# Session 1 course map — single source of truth

This is the developer-facing cross-reference for the PowerPoint, the website
and the workshop sheets. Change one activity, check this table, and you can
see every other place it touches — that's the point of it. It is **generated
from `src/data/session1.ts`**, not hand-maintained separately, so it will
drift out of date if `session1.ts` changes and this file is not regenerated.
(The generator is a short Python script; ask for it to be re-run after any
slide-count or numbering change — see "Keeping this in sync" below.)

## ID system

| Prefix | Meaning | Defined in |
|---|---|---|
| `S1-<n>` | One slide, matching the `n` field in `session1.ts` → `slideGroups[].slides[]`, and the physical slide position in the PPTX (both the original 44-slide deck and this repo's `_v3_DRAFT.pptx`, which are numbered identically from slide 1). | `src/data/session1.ts` |
| `S1-A<1-6>` | One story act. | `src/data/story1.ts` → `STORY_ACTS` |
| `S1-W<1-4>` / `S1-EXP` / `S1-BETWEEN` | One workshop / the closing activity / the between-session activity. Maps 1:1 to the existing exercise ids `e1`–`e4`, `e5b`. | `src/data/session1.ts` → `exercises[]`, ids used on the workshop-sheet PDF |
| `S1-V<n>` | One multimedia resource (video or diagram). | `src/data/multimedia.ts` |
| `S1-DECIDE` | The single interactive "what should Aoife do?" decision moment. | `src/data/story1.ts` → `AOIFE_DECISION` |

No activity has five separately typed identities: the exercise ids (`e1`…)
were already in `session1.ts` before this redesign, and every new id
(`S1-A*`, `S1-W*`, `S1-V*`) is defined once, cross-referenced everywhere
else, never re-typed.

## Website routes

- `#/session/s1` — lands on **The story** tab (Session 1 only; Sessions 2–4
  are unaffected and still open on **Overview**).
- `#/session/s1/story` — deep-links straight to the story tab.
- `#/session/s1/exercises` — deep-links straight to the four workshops.
- `#/session/s1/slides` / `#/session/s1/timetable` — deep-link to those tabs.
- These are exactly the targets used by the "Continue online →" links in
  `Udaras_AI_Course_Session_1_MTU_v3_DRAFT.pptx`.

## Slide-by-slide map (52 slides)

<!-- generated from src/data/session1.ts — see "Keeping this in sync" -->

| Slide ID | Title | Story Act | Activity | Video/Diagram |
|---|---|---|---|---|
| S1-1 | Building AI Confidence in the Gaeltacht Workplace | S1-A1 |  |  |
| S1-2 | Meet Aoife. (08:47 · Monday morning) | S1-A1 |  |  |
| S1-3 | Her workload grows. (09:02) | S1-A1 |  |  |
| S1-4 | She looks at the workload. (09:08) | S1-A1 |  |  |
| S1-5 | Following on from Mary | S1-A1 |  |  |
| S1-6 | Today's question | S1-A1 |  |  |
| S1-7 | Before we start: what do you think? | S1-A1 |  |  |
| S1-8 | The wall | S1-A1 |  |  |
| S1-9 | All three are true | S1-A1 |  |  |
| S1-10 | How today runs | S1-A1 |  |  |
| S1-11 | What is AI? | S1-A2 |  |  |
| S1-12 | AI is already around us | S1-A2 |  |  |
| S1-13 | Closer to home | S1-A2 |  |  |
| S1-14 | AI in Irish context | S1-A2 |  | S1-V4 (placeholder) |
| S1-15 | Why Irish matters | S1-A2 |  | S1-V4 (placeholder) |
| S1-16 | AI is not one single technology | S1-A2 |  | S1-V2 |
| S1-17 | Traditional software | S1-A2 |  |  |
| S1-18 | Machine learning | S1-A2 |  |  |
| S1-19 | Generative AI | S1-A2 |  |  |
| S1-20 | Coffee | S1-A2 |  |  |
| S1-21 | Software, automation or AI? | S1-A2 |  |  |
| S1-22 | Where each one usually lands | S1-A2 |  |  |
| S1-23 | Large language models | S1-A2 |  |  |
| S1-24 | What is a large language model? | S1-A2 |  | S1-V1 |
| S1-25 | Prediction is not understanding | S1-A2 + S1-A4 |  |  |
| S1-26 | Fluent is not the same as factual | S1-A2 + S1-A4 |  | S1-V3 |
| S1-27 | The prompt is the variable | S1-A2 |  |  |
| S1-28 | Lunch | S1-A2 |  |  |
| S1-29 | What can AI do for my work? | S1-A3 |  |  |
| S1-30 | AI as an assistant, not an authority | S1-A3 |  |  |
| S1-31 | Live demonstration: generate content (S1-D1) | S1-A3 |  |  |
| S1-32 | Live demonstration: edit a proposal (S1-D2) | S1-A3 |  |  |
| S1-33 | Live demonstration: create a newsletter (S1-D3) | S1-A3 |  |  |
| S1-34 | Live demonstration: analyse survey feedback (S1-D4) | S1-A3 |  |  |
| S1-35 | Live demonstration: ask questions of documents (S1-D5) | S1-A3 |  |  |
| S1-36 | Afternoon workshops | S1-A5 |  |  |
| S1-37 | Workshop 1 — Can AI help me? | S1-A5 | S1-W1 (e1) |  |
| S1-38 | Workshop 2 — The prompt challenge | S1-A5 | S1-W2 (e2) |  |
| S1-39 | Coffee | S1-A5 |  |  |
| S1-40 | Workshop 3 — AI judges AI | S1-A5 | S1-W3 (e3) |  |
| S1-41 | The point of Workshop 3 | S1-A5 |  |  |
| S1-42 | Real case: GAA match-programme artwork | S1-A4 |  | S1-GAA1 |
| S1-43 | Real case: more than the strange hands | S1-A4 |  | S1-GAA2 |
| S1-44 | Workshop 4 — the paragraph, unrevealed | S1-A5 + S1-A4 | S1-W4 (e4) |  |
| S1-45 | Workshop 4 — two problems revealed | S1-A5 + S1-A4 | S1-W4 (e4) |  |
| S1-46 | Workshop 4 — Trust, verify, improve | S1-A5 + S1-A4 | S1-W4 (e4) |  |
| S1-47 | A method you can keep — STOP | S1-A5 |  |  |
| S1-48 | My first AI experiment | S1-A5 + S1-A6 | S1-EXP (e5b) |  |
| S1-49 | Before Session 2: try AI three times | S1-A6 |  |  |
| S1-50 | What we said today | S1-A6 |  |  |
| S1-51 | Session 2 preview | S1-A6 |  |  |
| S1-52 | Go raibh maith agaibh | S1-A6 |  |  |

*S1-A2 + S1-A4 on slides 25/26/44–46 is intentional, not an error: the
concept (fluent ≠ factual) is taught mid-morning as part of Act 2's
technical explanation, and dramatised properly that afternoon in
Workshop 4 (Act 5) — so those slides genuinely belong to both. Likewise
S1-48 sits at the seam between Act 5 (the last workshop item) and Act 6
(the return to Aoife), which is why both acts claim it.*

## Worksheet cross-reference

`Session_1_Workshop_Sheets_v2_DRAFT.pdf` — one page per activity, each
headed with its id: `S1-W1`, `S1-W2`, `S1-W3`, `S1-W4`, `S1-EXP`,
`S1-BETWEEN`. Content matches the already-approved original sheet verbatim;
only the id labels and a plain rubric table (Workshop 3) are new.

## v4 PPTX redesign (visual/story pass)

`Udaras_AI_Course_Session_1_MTU_v4_DRAFT.pptx` is a further visual/story
redesign on top of the structure above, done after a genuine rendered
visual review found the deck too static (see the review that preceded
this pass). It is now **48 slides**, not 46, because of two additions:

- A new slide 2, "Meet Aoife" (the story character, previously named only
  in `story1.ts`/the website and never on an actual slide).
- The Workshop 4 "Trust, verify, improve" slide became a genuine 3-stage
  reveal (paragraph only → partial reveal → full reveal), replacing the
  single pre-solved slide, per the explicit "no pre-solved grid" direction.

**This has not been mechanically re-synced into `session1.ts`'s own slide
numbering** (still 46, per the table above) — doing so was judged out of
scope for a visual/story pass on an already-approved data layer, per the
explicit instruction not to rebuild the website/data layer. The two are
therefore off by 2 in raw slide count; the content and ordering otherwise
match. If the data layer is revisited, re-run the generator noted below
with the v4 slide list.

Per-workshop deep links now go to the exercise directly, not just the
tab: `#/session/s1/exercises/e1` (Workshop 1) … `e4` (Workshop 4),
`e5b` (My first AI experiment) — implemented via a new optional
`autoOpen` prop on `ExerciseCard` and a 4th hash segment read in `App.tsx`.
`S1-STOP` reuses `e4`'s destination, since the STOP content lives inside
the Workshop 4 exercise (`ErrorSpot.tsx`), not as a separate exercise.

## v5 PPTX — visual/story pass, and the numbering is now synchronised

`Udaras_AI_Course_Session_1_MTU_v5_DRAFT.pptx` is **50 slides**, and
**`session1.ts` has been renumbered to match it exactly** (the v4/v5
divergence noted above is resolved — that section is kept only as
history). Two real, structural additions over v4:

- **S1-40 / S1-41 — a real GAA case study**, inserted before Workshop 4.
  Barry Masterson's actual X post (18 May 2024) questioning AI-generated
  GAA match-programme artwork, used as an unmodified screenshot, plus a
  zoomed detail of the real artwork showing a misspelt county crest
  ("CIR COGHAIN" for Tír Eoghain). This is a **real, publicly documented
  case** — clearly distinguished from the fictional Coastal Craft
  exercise that follows it. See `GAA_CASE_RESOURCES` in `multimedia.ts`.
- **S1-42 / S1-43 — Workshop 4 is now a genuine 3-stage reveal**
  (paragraph unrevealed → two problems → all five), not a single
  pre-solved slide. S1-44 is the original "Trust, verify, improve" slide,
  now the final stage.

Original course-created visuals of the fictional character Aoife (the
opening/closing scenes, the Irish signpost+chain image, the proposal
sticky-notes, the Coastal-Craft-plus-STOP visual — illustrative artwork,
not photographs, and not any real person's likeness) replaced several
hand-built icon illustrations from v4
— see `AOIFE_PHOTO_RESOURCES` in `multimedia.ts` for exactly which slide
uses which supplied asset, and what was cropped versus left untouched.

## v5.1 — polish pass (opening sequence, Irish-language QA, breathing room)

`Udaras_AI_Course_Session_1_MTU_v5.1_DRAFT.pptx` split the single "Meet
Aoife" slide into a three-frame opening sequence (08:47 → 09:02 → 09:08,
now 52 slides), and corrected the Aoife-visual descriptions to "original
course-created visuals of the fictional character Aoife" (never
"photographs"). This version's slide count was not synced into
`session1.ts` at the time — that gap is closed by v5.2 below.

## v5.2 — final polish pass (this is the current baseline)

`Udaras_AI_Course_Session_1_MTU_v5.2_FINAL_REVIEW.pptx` is **52 slides**,
and `session1.ts`/`story1.ts`/`multimedia.ts` are now renumbered to match
it exactly — there is no PPTX ↔ website slide-count mismatch. Changes in
this pass:

- **S1-2 to S1-4** — the opening sequence now shows genuinely different
  framing of the same fictional Aoife (wide establishing shot → medium
  shot → close-up) instead of reusing one static image three times.
- **S1-15** — the "Why Irish matters" cover chip reads plainly as that;
  the earlier "(animated GIF style)" wording is gone. A leftover debug
  label baked into the opening-frame image (S1-2) was also found and
  removed during real-PowerPoint render QA.
- **S1-18 / S1-19** — the "what that means" bullets for Machine Learning
  and Generative AI now use the exact required wording.
- **S1-26** — the seaweed fictional example no longer references a grant,
  and states the lesson explicitly: precise details can sound
  authoritative even when they are invented.
- **S1-42** — the real GAA case now carries a proper citation: Irish
  Independent, "GAA defends use of AI applications to create artwork for
  match programmes following criticism", 18 May 2024.
- **S1-47 (STOP)** — the Coastal Craft illustrative image had a
  "www.gov.ie/coastal-craft" string styled as a live, clickable link;
  it has been recoloured to plain body text so it can never be mistaken
  for a real, official government URL. Breathing room below the image
  (fixed in v5.1) is unchanged.
- **S1-44/S1-45 (Workshop 4)** — the ONE deliberate Irish-language error
  had drifted from the website's canonical text (an accidental
  "tacíocht" typo, on top of the intended "ghnóanna" mistake). Corrected
  in the PPTX to match `WORKSHOP4_IRISH_CORRECTION.faulty` in
  `exerciseContent.ts` exactly, so there is exactly one deliberate error,
  not three.
- **S1-52 (closing)** — a leftover debug label baked into the 08:47→15:25
  bookend image was found during render QA and removed.
- Every Irish-language sentence introduced or touched in this pass was
  checked against the public An Gramadóir API (cadhan.com) — used as a
  verification aid, not a final authority; results were interpreted by
  hand (e.g. a predicative "ceart" flag on the proposal-demo checklist
  image was judged a false positive, not a real error, and left as-is).

## Keeping this in sync

If you change the slide count, slide numbers, or which slide a workshop
sits on in `src/data/session1.ts`, three things need to move together:

1. `src/data/story1.ts` → `STORY_ACTS[].slideIds` (the act ranges)
2. `src/data/multimedia.ts` → `MULTIMEDIA_RESOURCES[].slideIds`
3. This table

The table above was generated with a short script that regexes
`{ n: N, title: { en: '...' } }` entries out of `session1.ts` in order —
regenerate it the same way rather than hand-editing rows, so it can never
silently drift from the actual data file.

# Session 1 teaching plan — operational guide

For the facilitator on the day. Pairs with `Udaras_AI_Course_Session_1_MTU_v6.0_DRAFT.pptx`,
`Session_1_Workshop_Sheets_v2_DRAFT.pdf`, and the live website's **Story**
tab (`#/session/s1/story`). See `session1-course-map.md` for the full
slide-by-slide cross-reference.

## The story, in one line

*One busy Monday in a Gaeltacht workplace, where we discover together what
AI can do, where it can help, where it can fool us, and how to use it
without giving up human judgement.*

Aoife is the recurring fictional worker (no further biography — she exists
only for continuity, the way "a participant" would). She appears at the
open (08:47) and the close (15:20), and in the one interactive "what
should she do?" decision on the website.

## Timing (recalculated for v6.0 — welcome first, then Mary; two workshops, two reflections)

| Time | What | Act |
|---|---|---|
| 10:00–10:05 | Welcome and expectations | S1-A1 |
| 10:05–10:25 | Cybersecurity foundations (Mary) | S1-A1 |
| 10:25–10:35 | What do you think? (concerns wall) | S1-A1 |
| 10:35–10:55 | AI in the Irish context | S1-A2 |
| 10:55–11:15 | What actually is AI? | S1-A2 |
| 11:15–11:30 | Coffee break | — |
| 11:30–11:55 | Software / automation / AI | S1-A2 |
| 11:55–12:15 | Large language models | S1-A2 |
| 12:15–12:25 | Live demonstration | S1-A2 / S1-A4 (setup) |
| 12:25–13:10 | Lunch break | — |
| 13:10–13:30 | Practical AI opportunities (5 live demos) | S1-A3 |
| 13:30–13:40 | Real case: could AI get this wrong? (GAA) | S1-A3 / S1-A4 |
| 13:40–14:05 | Workshop 1 — Can AI help me? | S1-A5 |
| 14:05–14:15 | Reflection 1 — What did we learn? | S1-A5 |
| 14:15–14:40 | Workshop 2 — Prompt challenge | S1-A5 |
| 14:40–14:55 | Coffee break | — |
| 14:55–15:05 | Reflection 2 — What changed? | S1-A5 |
| 15:05–15:20 | My first AI experiment | S1-A6 |
| 15:20–15:30 | What we said today, and close | S1-A6 |

Workshop 3 (AI judges AI) and Workshop 4 (Trust, verify, improve) are
**not** in this timetable — see "v6.0 — two workshops, not four" below.
No multimedia addition changes this schedule. Nothing added runs longer
than the live demonstrations already timetabled.

## Act by act

**Act 1 — AI has already entered the room (S1-1–S1-12).** Open on the
08:47 → 09:02 → 09:08 opening sequence (S1-2–S1-4), not a definition.
Then Welcome and expectations (S1-5) — five minutes, logistics only, not
a lecture — straight into Mary's cybersecurity foundations (S1-12,
10:05–10:25, her own material). Bridge from Mary's session explicitly
(S1-6): cybersecurity asks "what are we allowing in?"; AI asks "what are
we handing over, and what will we do with what comes back?" Then the
concerns wall (S1-7–S1-10): take two or three answers to "could AI
help?" and "what would you trust it with?" without resolving them — the
day answers them.

**Act 2 — What are we actually dealing with? (S1-13–S1-30).** The honest
Irish answer (S1-16) comes before the technology explanation, not after —
say plainly what's true and what we won't claim, no invented numbers. Then
the "Why Irish matters" moment (S1-17): about two minutes, personal, your
own words, not a lecture — this is where the fictional research-story text
lives (see `src/data/story1.ts` → `STORY_ACTS[1]` / the actual quoted
lines are in `session1.ts` slide 17's note). Then traditional
software → ML → generative AI → LLM mechanics, closing with "prediction is
not understanding" / "fluent is not the same as factual" (S1-27/28) — this
is also where Act 4's setup happens; flag it explicitly: *"Hold that
thought — we're going to test it on you this afternoon."*

**Act 3 — AI as a workplace assistant (S1-31–S1-40).** Five live
demonstrations, Aoife's real tasks (S1-34–S1-38). For each: problem →
prediction → prompt → output → what's useful → what might be wrong →
what to check → human decision. Do the predictions out loud before
showing output — that's the interaction, not a video. Before the demos,
the safety frame (S1-32: DELEGATE / SUPERVISE / KEEP HUMAN) and the new
explicit privacy slide (S1-33: what never goes into a public AI tool,
directly tied to Mary's section). Immediately after the demos, the real
GAA case (S1-39/40) closes the act on a caution: AI can look fine and
still be wrong.

**Act 4 — The moment AI fools us (real case at S1-39/40, setup at
S1-27/28).** The GAA match-programme AI-artwork controversy (Irish
Independent, 18 May 2024) — say explicitly this is real, not an
exercise: culturally recognisable, not culturally appropriate. The
deeper fictional-paragraph exercise that used to dramatise this same
idea (Workshop 4) is **not run in Session 1** — do not attempt it; it
moves to Session 2.

**Act 5 — Now you are the reviewer (S1-41–S1-47).** Two workshops, two
reflections, not four workshops: help Aoife decide where AI fits (W1,
S1-42), reflect (S1-43), sharpen a weak prompt (W2, S1-44), reflect again
(S1-46). STOP (S1-47) is introduced as a method to carry forward, not
tied to a workshop reveal — the deeper AI-judges-AI (W3) and trust/verify
(W4) exercises built on these same ideas move to Session 2; do not run
them today.

**Act 6 — Back to Monday morning (S1-48–S1-52).** Return to Aoife, 15:20.
"What would you do differently tomorrow morning?" then "what is YOUR first
AI experiment?" (S1-48, now fifteen minutes, and includes: what
information will I NOT put into the AI, and who makes the final
decision?) — straight into the between-session sheet (S1-49). Close the
loop explicitly: name the 08:47 question again.

## Multimedia — what's actually used live, and what isn't

Live demonstrations carry almost all of the "show, don't just tell" weight
in Session 1 already — see `src/data/multimedia.ts` for the full registry.
In short: **nothing external is played live**. Two real, well-corroborated
longer videos (3Blue1Brown on LLMs; IBM Technology on AI/ML/GenAI and on
hallucinations) are offered only as optional between-session links, because
each is roughly 10 minutes — too long for this timetable. One slot
(multilingual/low-resource AI) has no verified short video and is marked
as an open placeholder rather than filled with something unverified. If
the venue has no internet on the day, nothing in the live session depends
on it.

## Where the AI Act sits

Session 1 mentions responsible AI, human oversight, verification, privacy
and organisational awareness only in passing (see the STOP moment and the
"what would you check" refrain). The detailed EU AI Act material
(`src/data/aiact.ts`) stays in Session 2, as before. Do not expand this
into legal material here.

## v4 redesign — the story is now in the PPTX, not just the website

A rendered visual review of v3 found the deck itself told no story —
"Aoife" existed only in the website's data. v4 fixes that directly in the
slides:

- Slide 2 introduces her by name, with a small flat-icon "desk scene"
  (avatar + task list) — original artwork built from the deck's own icon
  set, not stock photography or a generic AI image.
- The four section dividers now carry a one-line Aoife/story beat instead
  of sitting mostly empty.
- Each of the five live demos is framed as "Aoife's problem," carries a
  prediction prompt before the output, an illustrative example-output
  card (also the offline fallback), and an "Aoife's decision" line.
- The early Coastal Craft Grant mention (previously a spoiler on the
  "Fluent is not the same as factual" slide) was replaced with a smaller,
  different, clearly fictional one-line example, so Workshop 4 is a real
  surprise.
- Workshop 4 is now a 3-stage reveal across three slides (paragraph only
  → two problems → all five), not one pre-solved slide.
- Four short polls/hands-up prompts were added across the two previously
  passive stretches (traditional software → generative AI, and the LLM
  section).
- The closing slides explicitly return to 08:47/Aoife, and the final
  slide echoes the opening ("08:47 → 15:25").
- Every "Continue online" link was repositioned (the MTU logo and footer
  graphic are baked into the slide background image, not movable shapes,
  so links now sit in the one clear strip — above the kicker line) and
  each workshop now links to its own exercise, not a shared destination.

This was verified by actually rendering the PPTX (PowerPoint → PDF →
image) and inspecting every slide, twice, after fixing collisions found
on the first pass — not just checking that the file opens.

## v5 — original course-created visuals, a real case study, session1.ts now synchronised

v5 replaces several v4 hand-built illustrations with the supplied
original course-created visuals of the fictional character Aoife
(opening scene, Irish signpost+chain, proposal sticky-notes,
Coastal-Craft-plus-STOP visual, closing bookend) — illustrative artwork,
not photographs, and not any real person's likeness — and inserts a genuine
**real-world case study before Workshop 4**: the actual, publicly posted
GAA match-programme AI-artwork controversy (Barry Masterson, X, 18 May
2024), shown as an unmodified screenshot, with a zoomed detail of the
real artwork's misspelt crest ("CIR COGHAIN" instead of Tír Eoghain).
Say explicitly in the room that this is real, not an exercise — the
fictional Coastal Craft paragraph that follows in Workshop 4 is a
separate, clearly fictional moment, and the two should not be conflated.
Workshop 4 itself is now a true 3-stage reveal across three slides.

`session1.ts` was renumbered to match the v5 PPTX (50 slides) at the time.

## v5.2 — final polish pass (current baseline, 52 slides)

The opening scene became a genuine three-frame sequence (v5.1), and this
final pass fixed everything a real render pass could still catch:
exact required wording on the Machine Learning and Generative AI slides;
the seaweed example's lesson line and removed grant reference; the real
GAA case's proper source citation; the Coastal Craft image's
gov.ie-styled URL recoloured so it can't read as a real government link;
the one deliberate Irish-language error in Workshop 4 brought back in
line with the website's canonical faulty sentence (it had picked up an
extra, accidental typo); and two leftover debug labels, baked into the
opening-frame and closing-bookend images, removed by clone-stamping.
`session1.ts`, `story1.ts` and `multimedia.ts` are now renumbered to
match this 52-slide deck exactly — see `session1-course-map.md` for the
full table and the complete list of changes.

## v6.0 — two workshops, not four (current baseline)

Depth over breadth: the afternoon now runs Workshop 1 → Reflection 1 →
Workshop 2 → Reflection 2 → My first AI experiment. Workshop 3 (AI
judges AI) and Workshop 4 (Trust, verify, improve) are **not** Session 1
participant workshops any more — see `session1-course-map.md` for the
full list of what moved, what's new, and the exact slide renumbering.
Two operational things every facilitator needs to know:

- **The day starts differently.** Welcome and expectations (10:00–10:05)
  now comes first; Mary's cybersecurity foundations follow immediately
  (10:05–10:25). Keep the welcome to five minutes — logistics only.
- **Reflections are not lectures.** Ten minutes each, right after their
  workshop. Ask the six questions, capture 3–5 observations, connect
  explicitly back to the morning, close on the one-line message. If a
  reflection is running long, stop it — the next activity matters more
  than finishing every question.

## Known gaps needing your input

- **Video 4 (Irish/multilingual AI).** No genuinely short, reputable,
  verifiable video was found — see the placeholder entry in
  `multimedia.ts` (`S1-V4-PLACEHOLDER`).
- **QR codes.** Not added. The PPTX uses short clickable "Continue online →"
  text links instead, which is lower-risk in a room with patchy signal and
  needs no separate readability check.

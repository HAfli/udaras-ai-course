# Session 1 teaching plan — operational guide

For the facilitator on the day. Pairs with `Udaras_AI_Course_Session_1_MTU_v5.2_FINAL_REVIEW.pptx`,
`Session_1_Workshop_Sheets_v2_DRAFT.pdf`, and the live website's **Story**
tab (`#/session/s1/story`). See `session1-course-map.md` for the full
slide-by-slide cross-reference.

## The story, in one line

*One busy Monday in a Gaeltacht workplace, where we discover together what
AI can do, where it can help, where it can fool us, and how to use it
without giving up human judgement.*

Aoife is the recurring fictional worker (no further biography — she exists
only for continuity, the way "a participant" would). She appears at the
open (08:47) and the close (15:25), and in the one interactive "what
should she do?" decision on the website.

## Timing (unchanged from the approved schedule)

| Time | What | Act |
|---|---|---|
| 10:00–10:20 | Cybersecurity bridge (Mary) | — |
| 10:20–10:30 | Welcome / expectations | S1-A1 |
| 10:30–10:50 | AI in everyday life and Ireland | S1-A1 |
| 10:50–11:15 | What is AI? (incl. Irish thread + Why Irish matters) | S1-A2 |
| 11:15–11:30 | Coffee | — |
| 11:30–12:00 | Software / automation / AI | S1-A2 |
| 12:00–12:30 | LLMs and generative AI | S1-A2 / S1-A4 (setup) |
| 12:30–13:15 | Lunch | — |
| 13:15–13:35 | Practical AI opportunities (5 live demos) | S1-A3 |
| 13:35–14:10 | Workshop 1 + Workshop 2 | S1-A5 |
| 14:10–14:30 | Workshop 3 / transition | S1-A5 |
| 14:30–14:45 | Coffee | — |
| 14:45–15:10 | Workshop 4 | S1-A4 (payoff) / S1-A5 |
| 15:10–15:25 | First AI experiment | S1-A6 |
| 15:25–15:30 | Closing | S1-A6 |

No multimedia addition changes this schedule. Nothing added runs longer
than the live demonstrations already timetabled.

## Act by act

**Act 1 — AI has already entered the room (S1-1–S1-13).** Open on the
08:47 → 09:02 → 09:08 opening sequence (S1-2–S1-4), not a definition. Say "why don't you use AI?" as if
someone just said it to you. Take two or three answers to "could AI help?"
and "what would you trust it with?" without resolving them — the day
answers them. Bridge from Mary's cybersecurity session explicitly: same
instinct to protect ourselves, new question of how far to invite AI in.

**Act 2 — What are we actually dealing with? (S1-14–S1-28).** The honest
Irish answer (S1-14) comes before the technology explanation, not after —
say plainly what's true and what we won't claim, no invented numbers. Then
the "Why Irish matters" moment (S1-15): about two minutes, personal, your
own words, not a lecture — this is where the fictional research-story text
lives (see `src/data/story1.ts` → `STORY_ACTS[1]` / the actual quoted
lines are in `session1.ts` slide 15's note). Then traditional
software → ML → generative AI → LLM mechanics, closing with "prediction is
not understanding" / "fluent is not the same as factual" (S1-25/26) — this
is also where Act 4's setup happens; flag it explicitly: *"Hold that
thought — we're going to test it on you this afternoon."*

**Act 3 — AI as a workplace assistant (S1-29–S1-35).** Five live
demonstrations, Aoife's real tasks. For each: problem → prediction → prompt
→ output → what's useful → what might be wrong → what to check → human
decision. Do the predictions out loud before showing output — that's the
interaction, not a video.

**Act 4 — The moment AI fools us (real case at S1-42/43, payoff at
S1-44–S1-46, setup at S1-25/26).** A real case comes first: the GAA
match-programme AI-artwork controversy (Irish Independent, 18 May 2024) —
say explicitly this is real, not an exercise. Then the emotional turn
inside Workshop 4: show the fictional paragraph, ask "would you believe
this?", let the room sit with it before revealing the five problems
(factual error, unsupported claim, irrelevant statement, overconfident
statement, Irish-language problem). The confident, plausible-sounding
claim is normally found last, if at all — say so, it's the lesson.

**Act 5 — Now you are the reviewer (S1-36–S1-48).** Four workshops as
missions, not exercises: help Aoife (W1), sharpen a prompt (W2), out-vote
three AI systems but keep the final vote yourselves (W3), investigate the
flawed paragraph (W4) then apply STOP (Stop · Think · Observe · Proceed —
say plainly this is a course mnemonic, not a governance framework).

**Act 6 — Back to Monday morning (S1-48–S1-52).** Return to Aoife, 15:25.
"What would you do differently tomorrow morning?" then "what is YOUR first
AI experiment?" — straight into the real activity and the between-session
sheet. Close the loop explicitly: name the 08:47 question again.

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

## Known gaps needing your input

- **Video 4 (Irish/multilingual AI).** No genuinely short, reputable,
  verifiable video was found — see the placeholder entry in
  `multimedia.ts` (`S1-V4-PLACEHOLDER`).
- **QR codes.** Not added. The PPTX uses short clickable "Continue online →"
  text links instead, which is lower-risk in a room with patchy signal and
  needs no separate readability check.

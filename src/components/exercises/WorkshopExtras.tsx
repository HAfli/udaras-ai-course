import type { ReactNode } from 'react'
import { ShieldAlert, Sparkles, GraduationCap, ChevronDown } from 'lucide-react'
import { PRIVACY_GUIDANCE, AI_TOOLS_GUIDANCE } from '../../data/exerciseContent'

/** "What never goes into a public AI tool" — shared between Workshop 1
 *  and Workshop 2's live and self-study content, so the list is typed
 *  once, not per-workshop. */
export function PrivacyNotice() {
  return (
    <div className="rounded-xl2 border border-risk-red/25 bg-red-50/60 p-4">
      <div className="flex items-center gap-2 text-risk-red">
        <ShieldAlert className="h-4 w-4" aria-hidden />
        <p className="text-[.72rem] font-bold uppercase tracking-wide">Before you begin: what never goes in</p>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{PRIVACY_GUIDANCE.intro}</p>
      <ul className="mt-3 grid gap-1.5 text-sm text-ink-soft sm:grid-cols-2">
        {PRIVACY_GUIDANCE.doNotEnter.map(item => (
          <li key={item} className="flex gap-2">
            <span aria-hidden>•</span>{item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm font-semibold text-ink">{PRIVACY_GUIDANCE.instruction}</p>
    </div>
  )
}

/** AI-tool guidance — shared between both workshops. */
export function AIToolsNotice() {
  return (
    <div className="rounded-xl2 border border-ink/10 bg-paper-deep/40 p-4">
      <div className="flex items-center gap-2 text-moss-700">
        <Sparkles className="h-4 w-4" aria-hidden />
        <p className="text-[.72rem] font-bold uppercase tracking-wide">Which AI tool?</p>
      </div>
      <p className="mt-2 text-sm text-ink-soft">
        {AI_TOOLS_GUIDANCE.intro} {AI_TOOLS_GUIDANCE.examples.join(', ')}.
      </p>
      <p className="mt-2 text-sm text-ink-soft">{AI_TOOLS_GUIDANCE.note}</p>
      <p className="mt-2 text-sm italic text-ink-mute">{AI_TOOLS_GUIDANCE.fallback}</p>
    </div>
  )
}

/** "Doing this yourself" — the self-study version of the same workshop,
 *  not a different exercise. Shown on both the live card and the
 *  self-study page, from the same step data. */
export function SelfStudySteps({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl2 border border-moss-300 bg-moss-50/60 p-4">
      <div className="flex items-center gap-2 text-moss-700">
        <GraduationCap className="h-4 w-4" aria-hidden />
        <p className="text-[.72rem] font-bold uppercase tracking-wide">Doing this yourself</p>
      </div>
      <p className="mt-1 text-sm text-ink-soft">
        Not at the live session, or revisiting it later? This is the same workshop, done alone.
      </p>
      <ol className="mt-3 space-y-1.5 text-sm text-ink-soft">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-2">
            <span className="font-semibold text-moss-700">{i + 1}.</span>{s}
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Facilitator notes, clearly separated from participant instructions —
 *  collapsed by default so participants are never required to read them
 *  to understand the task. */
export function FacilitatorNotes({ children }: { children: ReactNode }) {
  return (
    <details className="group rounded-xl2 border border-ink/10 bg-paper-card">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 p-4 text-sm font-semibold text-ink-mute">
        For the facilitator (Haithem / Mary)
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="space-y-2 border-t border-ink/8 p-4 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </details>
  )
}

/** "See this in the slides →" — the website half of the slide↔website
 *  mapping. Links to the published participant-safe PDF at the right
 *  page when a page number is known; falls back to a plain mention of
 *  the slide range otherwise. Never invented — only used where a real
 *  slide number exists. */
export function SlideLink({ page, range }: { page?: number; range?: string }) {
  const href = page ? `${import.meta.env.BASE_URL}session1-slides.pdf#page=${page}` : undefined
  return (
    <p className="text-[.78rem] text-ink-faint">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-moss-700 hover:underline">
          See this in the slides → (slide {page})
        </a>
      ) : (
        range && <>See this in the slides → PPTX {range}</>
      )}
    </p>
  )
}

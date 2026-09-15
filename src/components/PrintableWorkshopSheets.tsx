import { FileDown, ArrowUpRight } from 'lucide-react'
import { WORKSHOP_PDF } from './exercises/WorkshopExtras'

/** The one "PRINTABLE WORKSHOP SHEETS" block, reused wherever the task
 *  asks it to appear (Session 1 overview, Workshops & activities, Learn
 *  it yourself) rather than four different hand-rolled versions. Each
 *  sheet links both to the live/self-study activity and to its
 *  standalone A4 PDF. */
const SHEETS: { id: keyof typeof WORKSHOP_PDF; title: string }[] = [
  { id: 'e1', title: 'Workshop 1 — Can AI help me?' },
  { id: 'e2', title: 'Workshop 2 — Prompt challenge' },
]

export function PrintableWorkshopSheets({ className = '' }: { className?: string }) {
  return (
    <section aria-labelledby="printable-sheets-h" className={`border-y border-ink/12 py-6 sm:py-8 ${className}`}>
      <p id="printable-sheets-h" className="eyebrow">Printable workshop sheets</p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Each workshop is also a standalone, print-ready A4 handout — enough detail to run or complete it without
        opening the slides. Print one per participant, or work from the page online instead.
      </p>
      <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {SHEETS.map(s => (
          <div key={s.id}>
            <p className="font-display text-base font-semibold leading-snug">{s.title}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              <a
                href={`#/session/s1/exercises/${s.id}`}
                className="inline-flex items-center gap-1 font-semibold text-ink hover:text-moss-700 hover:underline"
              >
                Open online <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}${WORKSHOP_PDF[s.id]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-ink hover:text-moss-700 hover:underline"
              >
                Printable PDF <FileDown className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

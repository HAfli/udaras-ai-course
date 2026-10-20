import type { ReactNode } from 'react'
import { ArrowRight, ExternalLink, FileDown } from 'lucide-react'
import { S4 } from '../data/session4Content'
import { FEEDBACK } from '../data/facilitator'
import { Bi } from './ui/Bi'
import { tr, pick } from '../i18n/lang'
import { Label, Note } from './exercises/Session2Exercises'
import { KindTag, KindsLegend } from './exercises/Session4Exercises'

/* Session 4 session guide: a participant-facing companion to the presentation and the workbook, built from the same
 * generated data (src/data/session4Content.ts). Each section summarises one part of the day and links to its
 * interactive exercise. Facilitator answer guides are never exported to the site, so none can appear here. */

type B = { readonly ga: string; readonly en: string }
type Kind = 'L' | 'C' | 'G' | 'P'
const V = (b: B) => ({ ga: b.ga, en: b.en, needsValidation: true })
const G = S4.SITE.guide
const PDF = (f: string) => `${import.meta.env.BASE_URL}${f}`
const EX = Object.fromEntries(S4.SITE.exercises.map(e => [e.id, e]))
const TIME = Object.fromEntries(S4.TIMETABLE.map(t => [t.part, t.time]))

const SECTIONS = [
  { id: 'about', title: G.about },
  { id: 's4-recap', title: EX['s4-recap'].title },
  { id: 's4-act', title: EX['s4-act'].title },
  { id: 's4-scenarios', title: EX['s4-scenarios'].title },
  { id: 's4-privacy', title: EX['s4-privacy'].title },
  { id: 's4-public', title: EX['s4-public'].title },
  { id: 's4-business', title: EX['s4-business'].title },
  { id: 's4-workflow', title: EX['s4-workflow'].title },
  { id: 's4-plan', title: EX['s4-plan'].title },
  { id: 'sources', title: G.sources },
] as const

const anchor = (id: string) => `s4g-${id}`

function Section({ id, children }: { id: (typeof SECTIONS)[number]['id']; children: ReactNode }) {
  const s = SECTIONS.find(x => x.id === id)!
  const ex = EX[id as keyof typeof EX]
  return (
    <section id={anchor(id)} aria-labelledby={`${anchor(id)}-h`} className="scroll-mt-24 border-t-2 border-ink pt-5">
      {ex && ex.part > 0 && <p className="kicker">{TIME[ex.part]} · {tr('{n} minutes', { n: ex.minutes ?? 0 })}</p>}
      <h2 id={`${anchor(id)}-h`} className="mt-1 font-display text-2xl font-semibold leading-tight sm:text-3xl"><Bi v={V(s.title)} compact /></h2>
      <div className="mt-4 space-y-5">{children}</div>
      {ex && (
        <a href={`#/session/s4/exercises/${id}`} className="btn-ghost mt-5 inline-flex">
          {pick(G.open)} <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      )}
    </section>
  )
}

const List = ({ items, className = '' }: { items: readonly B[]; className?: string }) => (
  <ul className={`list-disc space-y-1.5 pl-5 text-sm leading-relaxed ${className}`}>{items.map(x => <li key={x.en}>{pick(x)}</li>)}</ul>
)

export function Session4Guide() {
  const A = S4.ACT
  const P = S4.PRIVACY
  const PU = S4.PUBLIC
  const BZ = S4.BUSINESS
  return (
    <div className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
      <nav aria-label={pick(G.contents)} className="lg:sticky lg:top-24 lg:self-start">
        <p className="kicker">{pick(G.contents)}</p>
        <ol className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <button type="button" onClick={() => document.getElementById(anchor(s.id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="border border-ink/20 px-2.5 py-1 text-left text-xs font-semibold text-ink-soft hover:text-ink lg:border-0 lg:px-0 lg:text-sm">
                {pick(s.title)}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="min-w-0 space-y-12">
        <p className="text-[.98rem] leading-relaxed text-ink-soft">{pick(G.intro)}</p>

        {/* A · About this session */}
        <Section id="about">
          <dl className="grid gap-3 sm:grid-cols-3">
            {([[G.date, pick(S4.META.date)], [G.time, S4.META.time], [G.venue, S4.META.venue]] as const).map(([k, v]) => (
              <div key={k.en} className="card p-3"><dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{pick(k)}</dt><dd className="mt-1 font-display text-lg font-semibold">{v}</dd></div>
            ))}
          </dl>
          <Note><Bi v={V(S4.WELCOME.intro)} compact /> <Bi v={V(S4.META.promised)} compact /></Note>
          <List items={S4.WELCOME.today} />
          <div>
            <Label>{pick(G.journey)}</Label>
            <ol className="mt-2 grid gap-3 md:grid-cols-3">
              {S4.RECAP.map(r => (
                <li key={r.session.en} className="card p-4">
                  <p className="font-semibold"><Bi v={V(r.session)} compact /></p>
                  <p className="text-xs text-ink-mute">{pick(r.date)}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">{r.keep.map(k => <li key={k.en}>{pick(k)}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* D · Recap */}
        <Section id="s4-recap">
          <p className="text-sm leading-relaxed">{pick(EX['s4-recap'].purpose)}</p>
          <div>
            <Label>{pick(G.habits)}</Label>
            <ol className="mt-2 grid gap-2 sm:grid-cols-2">
              {S4.HABITS.map((h, i) => (
                <li key={h.id} className="flex gap-3 border-l-2 border-gold pl-3 text-sm"><span className="font-bold text-ink-faint">{i + 1}</span><span className="font-semibold">{pick(h.name)}</span><span className="ml-auto text-xs text-ink-mute">{h.from}</span></li>
              ))}
            </ol>
          </div>
          <p className="border-y border-ink/15 py-3 font-display text-lg"><Bi v={V(S4.RECAP_CLOSE)} /></p>
        </Section>

        {/* E · The EU AI Act */}
        <Section id="s4-act">
          <p className="text-xs italic text-ink-mute">{pick(S4.META.notLegal)} {pick(S4.META.checked)}</p>
          <Note><Bi v={V(A.what)} compact /> <Bi v={V(A.why)} compact /></Note>
          <div>
            <Label>{tr('Four misreadings')}</Label>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">{A.notThese.map(m => <li key={m.en} className="border-l-2 border-coral pl-3 text-sm font-semibold">✕ {pick(m)}</li>)}</ul>
          </div>
          <KindsLegend />
          <div>
            <Label>{tr('Four risk levels')}</Label>
            <ul className="mt-2 space-y-2">
              {A.tiers.map(t => (
                <li key={t.id} className="card p-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold">{pick(t.label)} <span className="ml-1 text-xs font-normal text-ink-mute">{pick(t.when)}</span></p>
                    <KindTag k={t.kind as Kind} />
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{pick(t.what)}</p>
                  <p className="mt-1 text-sm font-semibold">{pick(t.you)}</p>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-ink-soft">{pick(A.newProhibitions)}</p>
          </div>
          <div>
            <Label>{tr('Who carries which obligations')}</Label>
            <ul className="mt-2 grid gap-3 md:grid-cols-3">
              {A.roles.map(r => (
                <li key={r.role.en} className="card p-3 text-sm">
                  <p className="font-semibold">{pick(r.role)}</p>
                  <p className="mt-1 text-ink-soft">{pick(r.who)}</p>
                  <p className="mt-2 font-semibold text-emerald">{pick(r.duty)}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 border-l-2 border-gold pl-3 text-sm">{pick(A.rolesNote)}</p>
          </div>
          <div className="card p-4">
            <div className="flex items-start justify-between gap-3"><p className="font-semibold">{pick(A.literacy.title)}</p><KindTag k="L" /></div>
            <p className="mt-1 text-sm">{pick(A.literacy.text)}</p>
            <List items={A.literacy.points} className="mt-2 text-ink-soft" />
          </div>
          <div>
            <Label>{pick(A.ireland.title)}</Label>
            <List items={A.ireland.points} className="mt-2 text-ink-soft" />
          </div>
          <div className="border border-gold p-4">
            <p className="font-semibold">{pick(A.otherLaws.title)}</p>
            <List items={A.otherLaws.items} className="mt-2" />
          </div>
          <div>
            <Label>{tr('Dates — checked {d}', { d: pick(S4.CHECKED) })}</Label>
            <ol className="mt-2 divide-y divide-ink/10 border-y border-ink/10 text-sm">
              {S4.TIMELINE.map(t => (
                <li key={t.date.en} className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]"><span className="font-mono text-xs font-semibold text-ink-mute">{pick(t.date)}</span><span>{pick(t.what)}</span></li>
              ))}
            </ol>
          </div>
          <div className="border border-coral p-4">
            <p className="font-semibold text-coral-deep">{pick(A.review.title)}</p>
            <List items={A.review.triggers} className="mt-2" />
            <p className="mt-3 text-sm text-ink-soft">{pick(A.review.who)}</p>
          </div>
          <p className="text-sm text-ink-soft">{pick(A.uncertain)} <a href="#/ai-act" className="font-semibold text-atlantic underline">{tr('The AI Act page')}</a></p>
        </Section>

        {/* F · Scenarios (participant-facing questions only) */}
        <Section id="s4-scenarios">
          <p className="border-l-4 border-gold bg-gold/10 p-3 text-sm font-semibold">{pick(S4.SC_RULE)}</p>
          <div>
            <Label>{pick(G.scenarios)}</Label>
            <ol className="mt-2 grid gap-3 md:grid-cols-2">
              {S4.SCENARIOS.map(sc => (
                <li key={sc.id} className="card p-4">
                  <p className="kicker">{sc.n} · {pick(sc.who)}</p>
                  <h3 className="mt-1 font-semibold"><Bi v={V(sc.title)} compact /></h3>
                  <p className="mt-2 text-sm leading-relaxed">{pick(sc.case)}</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-soft">{sc.qs.map(q => <li key={q.en}>› {pick(q)}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>{pick(G.sixQ)}</Label>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{S4.SC_QUESTIONS.map(q => <li key={q.id}>{pick(q.q)}</li>)}</ol>
            </div>
            <div>
              <Label>{pick(G.decisions)}</Label>
              <ul className="mt-2 flex flex-wrap gap-2">{S4.DECISIONS.map(d => <li key={d.id} className="border border-ink/25 px-2.5 py-1 text-xs font-semibold">{pick(d.label)}</li>)}</ul>
            </div>
          </div>
          <p className="text-sm text-ink-soft">{pick(G.scenarioNote)}</p>
          <a href={PDF('Session-4-Participant-Package.pdf')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-atlantic underline">
            <FileDown className="h-4 w-4" aria-hidden /> {pick(G.cardsPdf)}
          </a>
          <p className="border-y border-ink/15 py-3 font-display text-lg"><Bi v={V(S4.SC_LESSON)} /></p>
        </Section>

        {/* G · Privacy */}
        <Section id="s4-privacy">
          <div className="bg-ink p-5 text-paper">
            <p className="kicker text-paper/70">{tr('The rule')}</p>
            <p className="mt-2 font-display text-xl leading-snug"><Bi v={V(P.rule)} compact /></p>
          </div>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            <li className="border-l-2 border-coral pl-3 font-semibold">{pick(P.notReplace)}</li>
            <li className="border-l-2 border-gold pl-3 font-semibold">{pick(P.notSame)}</li>
          </ul>
          <div>
            <Label>{pick(G.kinds8)}</Label>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {P.kinds.map(k => <li key={k.id} className="text-sm"><span className="font-semibold">{pick(k.label)}</span> <span className="text-ink-soft">— {pick(k.eg)}</span></li>)}
            </ul>
          </div>
          <div>
            <Label>{pick(G.checks7)}</Label>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm">{P.checks.map(c => <li key={c.q.en}><span className="font-semibold">{pick(c.q)}</span> <span className="text-ink-mute">{pick(c.hint)}</span></li>)}</ol>
          </div>
          <div className="border border-emerald p-4">
            <Label>{tr('Accountability')}</Label>
            <List items={P.accountability} className="mt-2" />
            <p className="mt-3 text-sm text-ink-soft">{pick(P.dpc)}</p>
          </div>
        </Section>

        {/* H · Public officers and community organisations */}
        <Section id="s4-public">
          <p className="bg-gold p-4 font-display text-lg font-semibold text-ink">{pick(PU.line)}</p>
          <p className="text-sm leading-relaxed">{pick(PU.intro)}</p>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            <li className="border-l-2 border-coral pl-3 font-semibold">{pick(PU.notRecord)}</li>
            <li className="border-l-2 border-coral pl-3 font-semibold">{pick(PU.notAssume)}</li>
          </ul>
          <div>
            <Label>{tr('Practical examples')}</Label>
            <ul className="mt-2 grid gap-2 md:grid-cols-2">
              {PU.examples.map(x => (
                <li key={x.task.en} className="card p-3 text-sm">
                  <p className="font-semibold">{pick(x.task)}</p>
                  <p className="mt-1 text-ink-soft"><span className="font-semibold">{tr('Leave out')}:</span> {pick(x.out)}</p>
                  <p className="text-ink-soft"><span className="font-semibold">{tr('Verify')}:</span> {pick(x.verify)}</p>
                  <p className="text-ink-soft"><span className="font-semibold">{tr('Approves')}:</span> {pick(x.approve)}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="border border-coral p-4 text-sm font-semibold text-coral-deep">{pick(PU.decisions)}</p>
          <div>
            <Label>{tr('Procurement and organisational readiness')}</Label>
            <List items={PU.readiness} className="mt-2" />
            <p className="mt-3 text-sm text-ink-soft">{pick(PU.guidelines)}</p>
          </div>
        </Section>

        {/* I · Gaeltacht businesses */}
        <Section id="s4-business">
          <p className="text-sm leading-relaxed">{pick(BZ.intro)}</p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {BZ.uses.map(u => (
              <li key={u.use.en} className="card p-3 text-sm">
                <p className="font-semibold">{pick(u.use)}</p>
                <p className="mt-1 text-emerald">+ {pick(u.gain)}</p>
                <p className="text-coral-deep">! {pick(u.care)}</p>
              </li>
            ))}
          </ul>
          <p className="bg-gold/20 p-3 text-sm font-semibold">{pick(BZ.noPromise)}</p>
          <div>
            <Label>{tr('Business precautions')}</Label>
            <List items={BZ.precautions} className="mt-2" />
          </div>
          <div className="bg-ink p-5 text-paper">
            <ul className="space-y-1 font-display text-xl">{BZ.irishQ.map(q => <li key={q.en}>{pick(q)}</li>)}</ul>
            <p className="mt-3 text-sm text-paper/80">{pick(BZ.irishNote)}</p>
            <p className="mt-2 text-sm text-paper/80">{pick(BZ.standard)}</p>
          </div>
        </Section>

        {/* J · Safe workflow */}
        <Section id="s4-workflow">
          <p className="text-sm leading-relaxed">{pick(S4.WORKFLOW.intro)} {pick(G.fields10)}</p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {S4.WORKFLOW.fields.map(f => (
              <li key={f.id} className={`card p-3 text-sm ${['stop', 'irish', 'approval'].includes(f.id) ? 'border-emerald' : ''}`}>
                <p className="font-semibold">{f.n}. {pick(f.label)}</p>
                <p className="text-ink-mute">{pick(f.q)}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* K · 30-day plan, next steps and the checklist */}
        <Section id="s4-plan">
          <p className="text-sm leading-relaxed">{pick(G.commit6)}</p>
          <ol className="grid gap-2 sm:grid-cols-2">{S4.PLAN.fields.map((f, i) => <li key={f.id} className="card p-3 text-sm font-semibold">{i + 1}. {pick(f.label)}</li>)}</ol>
          <div className="border-t-2 border-ink pt-4">
            <ul className="space-y-2">{S4.PLAN.close.map(c => <li key={c.en} className="font-display text-lg leading-snug">{pick(c)}</li>)}</ul>
          </div>
          <p className="text-sm text-ink-soft">{pick(G.nextSteps)}</p>
          <div className="card p-4">
            <p className="font-semibold">{pick(S4.CHECKLIST.title)}</p>
            <p className="mt-1 text-sm text-ink-soft">{pick(S4.CHECKLIST.for)} {pick(S4.CHECKLIST.how)}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={PDF('Session-4-Responsible-AI-Checklist.pdf')} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex"
                 aria-label={tr('Download the responsible AI checklist (PDF)')}>
                <FileDown className="h-4 w-4" aria-hidden /> {tr('Checklist (PDF)')}
              </a>
              <a href="#/session/s4/exercises/s4-checklist" className="btn-ghost inline-flex">{pick(G.open)} <ArrowRight className="h-4 w-4" aria-hidden /></a>
            </div>
          </div>
          <a href={FEEDBACK.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">{tr(FEEDBACK.label)} <ExternalLink className="h-4 w-4" aria-hidden /></a>
        </Section>

        {/* L · Sources */}
        <Section id="sources">
          <p className="text-xs italic text-ink-mute">{pick(S4.META.notLegal)} {pick(S4.META.checked)}</p>
          <ul className="space-y-2 text-sm">
            {S4.SOURCES.map(s => (
              <li key={s.url} data-i18n-exempt>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 font-semibold text-atlantic underline">
                  {s.title} <ExternalLink className="mt-1 h-3 w-3 shrink-0" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm"><a href="#/ai-act" className="font-semibold text-atlantic underline">{tr('The AI Act page')}</a></p>
        </Section>
      </div>
    </div>
  )
}

import { useState, type ReactNode } from 'react'
import { AlertTriangle, ExternalLink, FileDown } from 'lucide-react'
import { S4 } from '../../data/session4Content'
import { FEEDBACK } from '../../data/facilitator'
import { Bi } from '../ui/Bi'
import { tr, pick } from '../../i18n/lang'
import { Note, Label, CheckBox, CopyBlock } from './Session2Exercises'

/* Session 4 (final session) exercises. Content comes from src/data/session4Content.ts (generated from the same
 * source as the slides and Word files; facilitator answer guides are deliberately not exported). Everything
 * typed here stays in the browser: nothing is stored or sent. All exercises use fictional material only. */

type B = { readonly ga: string; readonly en: string }
const V = (b: B) => ({ ga: b.ga, en: b.en, needsValidation: true })
type Kind = 'L' | 'C' | 'G' | 'P'
const KIND_STYLE: Record<Kind, string> = {
  L: 'bg-coral-deep text-paper', C: 'bg-gold text-ink', G: 'bg-emerald text-paper', P: 'bg-atlantic text-paper',
}

function Chips({ n, children }: { n?: string; children?: ReactNode }) {
  return <div className="flex flex-wrap gap-3 text-sm text-ink-mute">{n && <span className="chip">{n}</span>}{children}</div>
}

function Private() {
  return <p className="text-xs text-ink-mute">{tr('What you type stays in this browser and is not saved or sent anywhere.')}</p>
}

function Legal() {
  return <p className="text-xs italic text-ink-mute">{pick(S4.META.notLegal)} {pick(S4.META.checked)}</p>
}

function Fictional() {
  return (
    <div className="flex items-start gap-2 border border-coral bg-coral-soft px-4 py-3 text-coral-deep" role="note">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p className="text-sm font-bold uppercase tracking-wide">{pick(S4.META.fictionLabel)}</p>
    </div>
  )
}

export function KindTag({ k }: { k: Kind }) {
  const label = pick(S4.KINDS[k].label)
  return (
    <span className={`inline-flex h-6 min-w-6 shrink-0 items-center justify-center px-1.5 text-xs font-bold ${KIND_STYLE[k]}`} title={label}>
      <span aria-hidden>{k}</span><span className="sr-only">{label}</span>
    </span>
  )
}

export function KindsLegend() {
  return (
    <div>
      <Label>{tr('Four kinds of statement')}</Label>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {(['L', 'C', 'G', 'P'] as const).map(k => (
          <li key={k} className="card flex gap-3 p-3 text-sm">
            <KindTag k={k} />
            <span><span className="font-semibold"><Bi v={V(S4.KINDS[k].label)} compact /></span><span className="block text-ink-soft">{pick(S4.KINDS[k].desc)}</span></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Steps({ steps }: { steps: readonly { readonly min: number; readonly what: B }[] }) {
  return (
    <ol className="grid gap-2 sm:grid-cols-2">
      {steps.map((st, i) => (
        <li key={i} className="card p-3 text-sm"><span className="font-bold text-ink-faint">{tr('{n} min', { n: st.min })} · </span><Bi v={V(st.what)} compact /></li>
      ))}
    </ol>
  )
}

function useCopy(asText: () => string) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(asText()); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return { copied, copy }
}

function CopyButton({ asText, label }: { asText: () => string; label: string }) {
  const { copied, copy } = useCopy(asText)
  return (
    <div className="space-y-1">
      <button type="button" className="btn-ghost" onClick={copy}>{copied ? tr('Copied') : label}</button>
      <p className="text-xs text-ink-mute">{tr('Nothing is saved: copy it into your own notes before you close this page.')}</p>
    </div>
  )
}

/* ---------- Part 2 · Recap: eight habits ---------- */

export function RecapHabits() {
  const [pickd, setPick] = useState<Record<string, string[]>>({})
  const [txt, setTxt] = useState<Record<number, string>>({})
  const toggle = (c: string, h: string) => setPick(p => {
    const cur = p[c] ?? []
    return { ...p, [c]: cur.includes(h) ? cur.filter(x => x !== h) : [...cur, h] }
  })
  return (
    <div className="space-y-6">
      <Chips n={tr('{n} minutes', { n: 30 })}><span className="chip">{tr('In pairs, then the room')}</span></Chips>
      <ol className="grid gap-3 lg:grid-cols-3">
        {S4.RECAP.map(r => (
          <li key={r.session.en} className="card p-4">
            <p className="font-semibold"><Bi v={V(r.session)} compact /></p>
            <p className="text-xs text-ink-mute">{pick(r.date)}</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">{r.keep.map(k => <li key={k.en}>{pick(k)}</li>)}</ul>
          </li>
        ))}
      </ol>
      <div>
        <Label>{tr('Which habit would have helped? Choose one or two for each situation.')}</Label>
        <ol className="mt-3 space-y-4">
          {S4.RECAP_CASES.map((c, i) => (
            <li key={c.id} className="border-t border-ink/12 pt-3">
              <p className="text-sm font-semibold">{i + 1}. <Bi v={V(c.text)} compact /></p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={tr('Habits for situation {n}', { n: i + 1 })}>
                {S4.HABITS.map(h => {
                  const on = (pickd[c.id] ?? []).includes(h.id)
                  return (
                    <button key={h.id} type="button" aria-pressed={on} onClick={() => toggle(c.id, h.id)}
                      className={`px-2.5 py-1 text-xs font-semibold ${on ? 'bg-ink text-paper' : 'border border-ink/20 text-ink-soft'}`}>
                      {pick(h.name)}
                    </button>
                  )
                })}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-ink-soft">{tr('Compare with your partner and the room. The habits overlap — often more than one is right.')}</p>
      </div>
      <div>
        <Label>{tr('Reflection')}</Label>
        <ol className="mt-2 space-y-3">
          {S4.REFLECT.map((q, i) => (
            <li key={q.en}>
              <label htmlFor={`s4-r${i}`} className="block text-sm font-semibold">{i + 1}. <Bi v={V(q)} compact /></label>
              <textarea id={`s4-r${i}`} rows={2} value={txt[i] ?? ''} onChange={e => setTxt(t => ({ ...t, [i]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
            </li>
          ))}
        </ol>
      </div>
      <p className="border-y border-ink/15 py-3 font-display text-lg"><Bi v={V(S4.RECAP_CLOSE)} /></p>
      <Private />
    </div>
  )
}

/* ---------- Part 3 · The EU AI Act ---------- */

export function AIActEssentials() {
  const A = S4.ACT
  const tone: Record<string, string> = { red: 'border-coral bg-coral-soft', amber: 'border-gold bg-gold/10', moss: 'border-emerald bg-emerald/5', grey: 'border-ink/20 bg-paper-card' }
  return (
    <div className="space-y-7">
      <Chips n={tr('{n} minutes', { n: 30 })} />
      <Legal />
      <Note><Bi v={V(A.what)} compact /> <Bi v={V(A.why)} compact /></Note>
      <div>
        <Label>{tr('Four misreadings')}</Label>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">{A.notThese.map(m => <li key={m.en} className="border-l-2 border-coral pl-3 text-sm font-semibold">✕ <Bi v={V(m)} compact /></li>)}</ul>
      </div>
      <KindsLegend />
      <div>
        <Label>{tr('Four risk levels')}</Label>
        <ul className="mt-2 space-y-2">
          {A.tiers.map(t => (
            <li key={t.id} className={`border-l-4 p-3 ${tone[t.tone]}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold"><Bi v={V(t.label)} compact /> <span className="ml-1 text-xs font-normal text-ink-mute">{pick(t.when)}</span></p>
                <KindTag k={t.kind as Kind} />
              </div>
              <p className="mt-1 text-sm text-ink-soft">{pick(t.what)}</p>
              <p className="mt-1 text-sm font-semibold">{pick(t.you)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Label>{tr('Who carries which obligations')}</Label>
        <ul className="mt-2 grid gap-3 md:grid-cols-3">
          {A.roles.map(r => (
            <li key={r.role.en} className="card p-3 text-sm">
              <p className="font-semibold"><Bi v={V(r.role)} compact /></p>
              <p className="mt-1 text-ink-soft">{pick(r.who)}</p>
              <p className="mt-2 font-semibold text-emerald">{pick(r.duty)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 border-l-2 border-gold pl-3 text-sm">{pick(A.rolesNote)}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <div className="flex items-start justify-between gap-3"><p className="font-semibold"><Bi v={V(A.literacy.title)} compact /></p><KindTag k="L" /></div>
          <p className="mt-1 text-sm">{pick(A.literacy.text)}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">{A.literacy.points.map(p => <li key={p.en}>{pick(p)}</li>)}</ul>
        </div>
        <div className="card p-4">
          <p className="font-semibold"><Bi v={V(A.oversight.title)} compact /></p>
          <ul className="mt-2 space-y-2 text-sm text-ink-soft">
            {A.oversight.points.map((p, i) => <li key={p.en} className="flex gap-2"><KindTag k={(['L', 'C', 'G'] as const)[i]} /><span>{pick(p)}</span></li>)}
          </ul>
        </div>
      </div>
      <div>
        <Label><Bi v={V(A.ireland.title)} compact /></Label>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">{A.ireland.points.map(p => <li key={p.en}>{pick(p)}</li>)}<li className="font-semibold text-ink">{pick(A.gdpr)}</li></ul>
      </div>
      <div>
        <Label>{tr('Dates — checked {d}', { d: pick(S4.CHECKED) })}</Label>
        <ol className="mt-2 divide-y divide-ink/10 border-y border-ink/10 text-sm">
          {S4.TIMELINE.map(t => (
            <li key={t.date.en} className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]"><span className="font-mono text-xs font-semibold text-ink-mute">{pick(t.date)}</span><span>{pick(t.what)}</span></li>
          ))}
        </ol>
      </div>
      <div>
        <Label>{tr('Three examples: benefit → risk → law → check → who decides')}</Label>
        <div className="mt-2 space-y-3">
          {S4.ACT_EXAMPLES.map(x => (
            <details key={x.id} className="card p-3 text-sm">
              <summary className="cursor-pointer font-semibold"><Bi v={V(x.use)} compact /></summary>
              <dl className="mt-2 grid gap-x-4 gap-y-1.5 sm:grid-cols-[9rem_1fr]">
                {([['Benefit', x.benefit], ['Risk', x.risk], ['Law', x.law], ['Check', x.check], ['Who decides', x.decide]] as const).map(([k, v]) => (
                  <div key={k} className="contents"><dt className="font-semibold text-ink-soft">{tr(k)}</dt><dd>{pick(v)}</dd></div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-coral p-4">
          <p className="font-semibold text-coral-deep"><Bi v={V(A.review.title)} compact /></p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{A.review.triggers.map(t => <li key={t.en}>{pick(t)}</li>)}</ul>
          <p className="mt-3 text-sm text-ink-soft">{pick(A.review.who)}</p>
        </div>
        <div className="border border-emerald p-4">
          <p className="font-semibold text-emerald"><Bi v={V(A.smallOrg.title)} compact /></p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{A.smallOrg.steps.map(t => <li key={t.en}>{pick(t)}</li>)}</ol>
        </div>
      </div>
      <p className="text-sm text-ink-soft">{pick(A.uncertain)} <a href="#/ai-act" className="font-semibold text-atlantic underline">{tr('The AI Act page')}</a></p>
      <Sources />
    </div>
  )
}

function Sources() {
  return (
    <div>
      <Label>{tr('Official sources')}</Label>
      <ul className="mt-2 space-y-1.5 text-sm">
        {S4.SOURCES.map(s => (
          <li key={s.url} data-i18n-exempt>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 text-atlantic underline">
              {s.title} <ExternalLink className="mt-1 h-3 w-3 shrink-0" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Part 4 · Scenarios ---------- */

export function ScenarioClassify() {
  const [cur, setCur] = useState<string>(S4.SCENARIOS[0].id)
  const [ans, setAns] = useState<Record<string, string>>({})
  const [dec, setDec] = useState<Record<string, string>>({})
  const sc = S4.SCENARIOS.find(s => s.id === cur)!
  const asText = () => [`${sc.n}. ${pick(sc.title)}`, pick(sc.case), ...S4.SC_QUESTIONS.map(q => `${pick(q.q)}: ${ans[`${cur}-${q.id}`] ?? ''}`),
    `${tr('Decision')}: ${dec[cur] ? pick(S4.DECISIONS.find(d => d.id === dec[cur])!.label) : ''}`].join('\n')
  return (
    <div className="space-y-6">
      <Chips n={tr('{n} minutes', { n: 40 })}><span className="chip">{tr('Groups of three or four')}</span></Chips>
      <Legal />
      <p className="border-l-4 border-gold bg-gold/10 p-3 text-sm font-semibold"><Bi v={V(S4.SC_RULE)} compact /></p>
      <Steps steps={S4.SC_STEPS} />
      <div className="flex flex-wrap gap-2" role="group" aria-label={tr('Choose a scenario')}>
        {S4.SCENARIOS.map(s => (
          <button key={s.id} type="button" aria-pressed={cur === s.id} onClick={() => setCur(s.id)}
            className={`px-3 py-1.5 text-sm font-semibold ${cur === s.id ? 'bg-ink text-paper' : 'border border-ink/25 text-ink-soft'}`}>
            {s.n} · {pick(s.title)}
          </button>
        ))}
      </div>
      <article className="card p-4">
        <p className="kicker">{pick(sc.who)}</p>
        <h3 className="mt-1 font-display text-xl font-semibold"><Bi v={V(sc.title)} compact /></h3>
        <p className="mt-2 text-[.98rem] leading-relaxed">{pick(sc.case)}</p>
        <ul className="mt-3 space-y-1 text-sm text-ink-soft">{sc.qs.map(q => <li key={q.en}>› {pick(q)}</li>)}</ul>
      </article>
      <ol className="space-y-3">
        {S4.SC_QUESTIONS.filter(q => q.id !== 'decision').map((q, i) => (
          <li key={q.id}>
            <label htmlFor={`s4-sc-${cur}-${q.id}`} className="block text-sm font-semibold">{i + 1}. <Bi v={V(q.q)} compact /></label>
            <textarea id={`s4-sc-${cur}-${q.id}`} rows={2} value={ans[`${cur}-${q.id}`] ?? ''} onChange={e => setAns(a => ({ ...a, [`${cur}-${q.id}`]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <fieldset>
        <legend className="text-sm font-semibold">6. <Bi v={V(S4.SC_QUESTIONS[5].q)} compact /></legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {S4.DECISIONS.map(d => (
            <button key={d.id} type="button" aria-pressed={dec[cur] === d.id} onClick={() => setDec(x => ({ ...x, [cur]: d.id }))}
              className={`px-3 py-1.5 text-sm font-semibold ${dec[cur] === d.id ? 'bg-ink text-paper' : 'border border-ink/25 text-ink-soft'}`}>
              {pick(d.label)}
            </button>
          ))}
        </div>
      </fieldset>
      <p className="border-y border-ink/15 py-3 font-display text-lg"><Bi v={V(S4.SC_LESSON)} /></p>
      <CopyButton asText={asText} label={tr('Copy our answers as text')} />
      <Private />
    </div>
  )
}

/* ---------- Part 5 · Privacy: can this go in? ---------- */

export function PrivacyGoIn() {
  const P = S4.PRIVACY
  const [chk, setChk] = useState<Record<number, boolean>>({})
  const [sort, setSort] = useState<Record<string, string>>({})
  return (
    <div className="space-y-6">
      <Chips n={tr('{n} minutes', { n: 30 })} />
      <div className="bg-ink p-5 text-paper">
        <p className="kicker text-paper/70">{tr('The rule')}</p>
        <p className="mt-2 font-display text-xl leading-snug"><Bi v={V(P.rule)} compact /></p>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2 text-sm">
        <li className="border-l-2 border-coral pl-3 font-semibold">{pick(P.notReplace)}</li>
        <li className="border-l-2 border-gold pl-3 font-semibold">{pick(P.notSame)}</li>
      </ul>
      <div>
        <Label>{tr('Eight kinds of information that need care')}</Label>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {P.kinds.map(k => (
            <li key={k.id} className={`card p-3 text-sm ${k.id === 'special' ? 'border-coral' : ''}`}>
              <p className="font-semibold"><Bi v={V(k.label)} compact /></p><p className="text-ink-soft">{pick(k.eg)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Label>{tr('Seven checks')}</Label>
        <ul className="mt-2 space-y-2">
          {P.checks.map((c, i) => {
            const label = pick(c.q)
            return (
              <li key={c.q.en} className="flex items-start gap-3">
                <CheckBox on={!!chk[i]} onChange={v => setChk(x => ({ ...x, [i]: v }))} label={label} />
                <span className="text-sm"><span className="font-semibold">{label}</span> <span className="text-ink-mute">{pick(c.hint)}</span></span>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <Label>{tr('Can this go in? Choose one answer for each item.')}</Label>
        <ol className="mt-3 space-y-4">
          {S4.GO_IN.map((g, i) => (
            <li key={g.id} className="border-t border-ink/12 pt-3">
              <p className="text-sm font-semibold">{i + 1}. <Bi v={V(g.text)} compact /></p>
              <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={pick(g.text)}>
                {S4.GO_IN_OPTIONS.map(o => (
                  <button key={o.id} type="button" role="radio" aria-checked={sort[g.id] === o.id} onClick={() => setSort(x => ({ ...x, [g.id]: o.id }))}
                    className={`px-2.5 py-1 text-xs font-semibold ${sort[g.id] === o.id ? 'bg-ink text-paper' : 'border border-ink/20 text-ink-soft'}`}>
                    {pick(o.label)}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-ink-soft">{tr('Compare with your partner. “It depends — I would ask” is a good answer when the facts are not on the card.')}</p>
      </div>
      <div className="border border-emerald p-4">
        <Label>{tr('Accountability')}</Label>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{P.accountability.map(a => <li key={a.en}>{pick(a)}</li>)}</ul>
        <p className="mt-3 text-sm text-ink-soft">{pick(P.dpc)}</p>
      </div>
      <Legal />
      <Private />
    </div>
  )
}

/* ---------- Part 6 · Public officers and community organisations ---------- */

const CARD_FIELDS = [
  { id: 'task', en: 'Task' }, { id: 'how', en: 'Workflow and tool' }, { id: 'out', en: 'What stays out' },
  { id: 'verify', en: 'Verification' }, { id: 'approve', en: 'Who approves' }, { id: 'kind', en: 'Drafting, or a decision about a person?' },
] as const

export function PublicGuidance() {
  const P = S4.PUBLIC
  const [v, setV] = useState<Record<string, string>>({})
  const [r, setR] = useState<Record<number, boolean>>({})
  const asText = () => [1, 2].map(n => [tr('Task card {n}', { n }), ...CARD_FIELDS.map(f => `${tr(f.en)}: ${v[`${n}-${f.id}`] ?? ''}`)].join('\n')).join('\n\n')
  return (
    <div className="space-y-6">
      <Chips n={tr('{n} minutes', { n: 35 })}><span className="chip">{tr('In pairs')}</span></Chips>
      <p className="bg-gold p-4 font-display text-lg font-semibold text-ink"><Bi v={V(P.line)} compact /></p>
      <Note><Bi v={V(P.intro)} compact /></Note>
      <ul className="grid gap-2 sm:grid-cols-2 text-sm">
        <li className="border-l-2 border-coral pl-3 font-semibold">{pick(P.notRecord)}</li>
        <li className="border-l-2 border-coral pl-3 font-semibold">{pick(P.notAssume)}</li>
      </ul>
      <div>
        <Label>{tr('Practical examples')}</Label>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[44rem] border-collapse text-sm">
            <thead><tr className="border-b-2 border-ink text-left text-xs uppercase tracking-wide text-ink-faint">
              {['Task', 'Workflow', 'Leave out', 'Verify', 'Approves'].map(h => <th key={h} scope="col" className="py-2 pr-3">{tr(h)}</th>)}
            </tr></thead>
            <tbody>
              {P.examples.map(x => (
                <tr key={x.task.en} className="border-b border-ink/10 align-top">
                  <th scope="row" className="py-2 pr-3 text-left font-semibold"><Bi v={V(x.task)} compact /></th>
                  <td className="py-2 pr-3">{pick(x.how)}</td><td className="py-2 pr-3">{pick(x.out)}</td>
                  <td className="py-2 pr-3">{pick(x.verify)}</td><td className="py-2 pr-3">{pick(x.approve)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="border border-coral p-4 text-sm font-semibold text-coral-deep">{pick(P.decisions)}</p>
      <div>
        <Label>{tr('Procurement and organisational readiness')}</Label>
        <ul className="mt-2 space-y-2">
          {P.readiness.map((x, i) => (
            <li key={x.en} className="flex items-start gap-3"><CheckBox on={!!r[i]} onChange={b => setR(y => ({ ...y, [i]: b }))} label={pick(x)} /><span className="text-sm">{pick(x)}</span></li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-ink-soft">{pick(P.guidelines)}</p>
      </div>
      <Steps steps={P.activity} />
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2].map(n => (
          <fieldset key={n} className="card p-4">
            <legend className="px-1 font-semibold">{tr('Task card {n}', { n })}</legend>
            {CARD_FIELDS.map(f => (
              <div key={f.id} className="mt-2">
                <label htmlFor={`s4-pc-${n}-${f.id}`} className="block text-xs font-semibold text-ink-soft">{tr(f.en)}</label>
                <textarea id={`s4-pc-${n}-${f.id}`} rows={f.id === 'task' ? 2 : 1} value={v[`${n}-${f.id}`] ?? ''} onChange={e => setV(x => ({ ...x, [`${n}-${f.id}`]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
              </div>
            ))}
          </fieldset>
        ))}
      </div>
      <CopyButton asText={asText} label={tr('Copy my task cards as text')} />
      <Private />
    </div>
  )
}

/* ---------- Part 7 · Gaeltacht businesses ---------- */

export function BusinessHandsOn() {
  const Bz = S4.BUSINESS
  const [task, setTask] = useState<string>('')
  const [chk, setChk] = useState<Record<string, boolean>>({})
  const [changed, setChanged] = useState('')
  const checks = [{ id: 'facts', en: 'Every fact checked against the card' }, { id: 'invent', en: 'Nothing invented' }, { id: 'irish', en: 'The IRISH check' }] as const
  return (
    <div className="space-y-6">
      <Chips n={tr('{n} minutes', { n: 35 })}><span className="chip">{tr('In pairs')}</span></Chips>
      <Note><Bi v={V(Bz.intro)} compact /></Note>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {Bz.uses.map(u => (
          <li key={u.use.en} className="card p-3 text-sm">
            <p className="font-semibold"><Bi v={V(u.use)} compact /></p>
            <p className="mt-1 text-emerald">+ {pick(u.gain)}</p>
            <p className="text-coral-deep">! {pick(u.care)}</p>
          </li>
        ))}
      </ul>
      <p className="bg-gold/20 p-3 text-sm font-semibold">{pick(Bz.noPromise)}</p>
      <div>
        <Label>{tr('Business precautions')}</Label>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{Bz.precautions.map(p => <li key={p.en}>{pick(p)}</li>)}</ul>
      </div>
      <div className="bg-ink p-5 text-paper">
        <ul className="space-y-1 font-display text-xl">{Bz.irishQ.map(q => <li key={q.en}>{pick(q)}</li>)}</ul>
        <p className="mt-3 text-sm text-paper/80">{pick(Bz.irishNote)}</p>
        <p className="mt-2 text-sm text-paper/80">{pick(Bz.standard)}</p>
      </div>
      <Fictional />
      <div className="card p-4">
        <p className="text-sm font-semibold">{Bz.biz.name} — <span className="font-normal text-ink-soft"><Bi v={V(Bz.biz.what)} compact /></span></p>
        <dl className="mt-3 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-[8rem_1fr]">
          {Bz.biz.facts.map(f => (
            <div key={f.k.en} className="contents">
              <dt className="font-semibold text-ink-soft">{pick(f.k)}</dt>
              <dd className={f.v.en.includes('[') ? 'font-bold text-coral-deep' : ''}>{pick(f.v)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold">{tr('Choose one task')}</legend>
        <div className="mt-2 flex flex-col gap-2" role="radiogroup" aria-label={tr('Choose one task')}>
          {Bz.tasks.map(t => (
            <button key={t.id} type="button" role="radio" aria-checked={task === t.id} onClick={() => setTask(t.id)}
              className={`px-3 py-2 text-left text-sm font-semibold ${task === t.id ? 'bg-ink text-paper' : 'border border-ink/25 text-ink-soft'}`}>
              {pick(t.label)}
            </button>
          ))}
        </div>
      </fieldset>
      <div>
        <Label>{tr('The prompt — use it, or improve it')}</Label>
        <div className="mt-2"><CopyBlock ga={Bz.prompt.ga} en={Bz.prompt.en} /></div>
      </div>
      <Steps steps={Bz.activity} />
      <div>
        <Label>{tr('Check')}</Label>
        <ul className="mt-2 space-y-2">
          {checks.map(c => (
            <li key={c.id} className="flex items-start gap-3"><CheckBox on={!!chk[c.id]} onChange={b => setChk(x => ({ ...x, [c.id]: b }))} label={tr(c.en)} /><span className="text-sm">{tr(c.en)}</span></li>
          ))}
          {Bz.irishQ.map(q => (
            <li key={q.en} className="flex items-start gap-3"><CheckBox on={!!chk[q.en]} onChange={b => setChk(x => ({ ...x, [q.en]: b }))} label={pick(q)} /><span className="text-sm">{pick(q)}</span></li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="s4-biz-changed" className="block text-sm font-semibold">{tr('What did you change, and why?')}</label>
        <textarea id="s4-biz-changed" rows={3} value={changed} onChange={e => setChanged(e.target.value)} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
      </div>
      <Private />
    </div>
  )
}

/* ---------- Part 8 · Safe workflow (one page) ---------- */

export function SafeWorkflowSheet() {
  const W = S4.WORKFLOW
  const [v, setV] = useState<Record<string, string>>({})
  const asText = () => [pick(W.title), ...W.fields.map(f => `${f.n}. ${pick(f.label)}: ${v[f.id] ?? ''}`)].join('\n')
  return (
    <div className="space-y-5">
      <Chips n={tr('{n} minutes', { n: 20 })}><span className="chip">{tr('Alone, then in pairs')}</span></Chips>
      <Note><Bi v={V(W.intro)} compact /></Note>
      <Steps steps={W.steps} />
      <ol className="grid gap-3 sm:grid-cols-2">
        {W.fields.map(f => (
          <li key={f.id} className={`card p-3 ${['stop', 'irish', 'approval'].includes(f.id) ? 'border-emerald' : ''}`}>
            <label htmlFor={`s4-wf-${f.id}`} className="block text-sm font-semibold">{f.n}. <Bi v={V(f.label)} compact /></label>
            <span className="block text-xs text-ink-mute">{pick(f.q)}</span>
            <textarea id={`s4-wf-${f.id}`} rows={2} value={v[f.id] ?? ''} onChange={e => setV(x => ({ ...x, [f.id]: e.target.value }))} className="mt-2 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <CopyButton asText={asText} label={tr('Copy my workflow as text')} />
    </div>
  )
}

/* ---------- Part 9 · 30-day action plan ---------- */

export function ActionPlan30() {
  const P = S4.PLAN
  const [v, setV] = useState<Record<string, string>>({})
  const asText = () => [pick(P.title), ...P.fields.map(f => `${pick(f.label)}: ${v[f.id] ?? ''}`)].join('\n')
  return (
    <div className="space-y-5">
      <Chips n={tr('{n} minutes', { n: 10 })}><span className="chip">{tr('Alone')}</span></Chips>
      <ol className="grid gap-3 sm:grid-cols-2">
        {P.fields.map(f => (
          <li key={f.id} className="card p-3">
            <label htmlFor={`s4-pl-${f.id}`} className="block text-sm font-semibold"><Bi v={V(f.label)} compact /></label>
            <textarea id={`s4-pl-${f.id}`} rows={f.lines + 1} value={v[f.id] ?? ''} onChange={e => setV(x => ({ ...x, [f.id]: e.target.value }))} className="mt-2 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <CopyButton asText={asText} label={tr('Copy my plan as text')} />
      <div className="border-t-2 border-ink pt-4">
        <Label>{tr('What to take with you')}</Label>
        <ul className="mt-2 space-y-2">{P.close.map(c => <li key={c.en} className="font-display text-lg leading-snug"><Bi v={V(c)} compact /></li>)}</ul>
      </div>
      <a href={FEEDBACK.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">{tr(FEEDBACK.label)} <ExternalLink className="h-4 w-4" aria-hidden /></a>
    </div>
  )
}

/* ---------- Downloadable checklist ---------- */

export function ResponsibleChecklist() {
  const C = S4.CHECKLIST
  const [on, setOn] = useState<Record<string, boolean>>({})
  return (
    <div className="space-y-6">
      <Note><Bi v={V(C.for)} compact /> {pick(C.how)}</Note>
      <a href={`${import.meta.env.BASE_URL}Session-4-Responsible-AI-Checklist.pdf`} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex"
         aria-label={tr('Download the responsible AI checklist (PDF)')}>
        <FileDown className="h-4 w-4" aria-hidden /> {tr('Checklist (PDF)')}
      </a>
      <KindsLegend />
      {C.sections.map(s => (
        <section key={s.title.en} aria-label={pick(s.title)}>
          <h3 className="font-semibold"><Bi v={V(s.title)} compact /></h3>
          <ul className="mt-2 space-y-2">
            {s.items.map(it => {
              const label = pick(it.text)
              return (
                <li key={it.text.en} className="flex items-start gap-3">
                  <CheckBox on={!!on[it.text.en]} onChange={b => setOn(x => ({ ...x, [it.text.en]: b }))} label={label} />
                  <KindTag k={it.kind as Kind} />
                  <span className="text-sm">{label}</span>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
      <p className="text-xs italic text-ink-mute">{pick(C.foot)}</p>
    </div>
  )
}

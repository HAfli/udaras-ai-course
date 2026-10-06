import { useMemo, useState, type ReactNode } from 'react'
import { AlertTriangle, Check, Copy } from 'lucide-react'
import { S2 } from '../../data/session2Content'
import { Bi } from '../ui/Bi'

/* Session 2 exercises. Content comes from src/data/session2Content.ts (generated from the same
 * source as the slides and Word files). Everything typed here stays in the browser: nothing is
 * stored or sent. All exercises use fictional material only. */

type B = { readonly ga: string; readonly en: string }
const V = (b: B) => ({ ga: b.ga, en: b.en, needsValidation: true })

export function Note({ children }: { children: ReactNode }) {
  return <div className="prose-note"><p>{children}</p></div>
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">{children}</p>
}

function Fictional() {
  return (
    <div className="flex items-start gap-2 border border-coral bg-coral-soft px-4 py-3 text-coral-deep" role="note">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p className="text-sm font-bold uppercase tracking-wide">
        <span lang="ga">{S2.PROPOSAL.label.ga}</span>
        <span className="block text-[.72rem] font-semibold normal-case tracking-normal" lang="en">{S2.PROPOSAL.label.en}</span>
      </p>
    </div>
  )
}

function Educational() {
  return (
    <p className="text-xs italic text-ink-mute">
      <span lang="ga">{S2.META.notLegal.ga}</span> · <span lang="en">{S2.META.notLegal.en}</span>
    </p>
  )
}

function Principle() {
  return (
    <div className="border border-gold bg-gold-soft p-4">
      {S2.PRINCIPLE.map(p => (
        <p key={p.en} className="text-sm"><span lang="ga" className="font-semibold text-ink">{p.ga}</span> <span lang="en" className="text-ink-mute">{p.en}</span></p>
      ))}
    </div>
  )
}

export function CheckBox({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button" role="checkbox" aria-checked={on} aria-label={label} onClick={() => onChange(!on)}
      className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 ${on ? 'border-emerald bg-emerald text-paper' : 'border-ink/40 bg-paper-card'}`}
    >
      {on && <Check className="h-4 w-4" aria-hidden />}
    </button>
  )
}

export function CopyBlock({ ga, en }: { ga: string; en: string }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(`${ga}\n\n${en}`); setDone(true); setTimeout(() => setDone(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="border border-ink/15 bg-paper-card p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed text-ink" lang="ga">{ga}</p>
        <button type="button" onClick={copy} className="btn-quiet shrink-0" aria-label="Copy the Irish and English text">
          {done ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        </button>
      </div>
      <p className="mt-3 border-t border-ink/10 pt-3 text-sm leading-relaxed text-ink-mute" lang="en">{en}</p>
    </div>
  )
}

/* ---------- e6 · What went wrong ---------- */

export function FailureSort() {
  const [seen, setSeen] = useState<Record<string, boolean>>({})
  const [shown, setShown] = useState<Record<string, boolean>>({})
  const count = Object.values(seen).filter(Boolean).length
  return (
    <div className="space-y-4">
      <Note>Nine kinds of failure, taken from real experiments. Tick the ones you have seen in your own three experiments, then look at the check that would have caught each. Do not repeat Session 1 — use your own cases.</Note>
      <ol className="grid gap-3 sm:grid-cols-2">
        {S2.FAILURES.map((f, i) => (
          <li key={f.id} className="card p-4">
            <div className="flex gap-3">
              <CheckBox on={!!seen[f.id]} onChange={v => setSeen(s => ({ ...s, [f.id]: v }))} label={`I have seen this: ${f.name.en}`} />
              <div>
                <p className="flex gap-2 text-sm font-semibold"><span className="text-ink-faint">{i + 1}.</span><span><Bi v={V(f.name)} /></span></p>
                <p className="mt-1 text-sm text-ink-soft"><Bi v={f.looks} /></p>
              </div>
            </div>
            {shown[f.id]
              ? <p className="mt-3 border-t border-ink/10 pt-3 text-sm font-medium text-emerald-deep"><Bi v={V(f.check)} /></p>
              : <button type="button" className="btn-quiet mt-2" onClick={() => setShown(s => ({ ...s, [f.id]: true }))}>Show the check</button>}
          </li>
        ))}
      </ol>
      <p className="text-sm text-ink-soft">You have seen {count} of 9. Choose the three most common in your group.</p>
      <p className="text-xs text-ink-mute">“Hallucination” has no established Irish term in the dictionaries checked, so the English word is kept and explained.</p>
    </div>
  )
}

/* ---------- e7 · STOP test ---------- */

const STOP_STYLE: Record<string, string> = { S: 'bg-atlantic text-paper', T: 'bg-atlantic-deep text-paper', O: 'bg-emerald text-paper', P: 'bg-emerald-deep text-paper' }

export function StopTest() {
  const [pick, setPick] = useState<Record<string, string>>({})
  return (
    <div className="space-y-6">
      <Note>Four questions before anything goes <strong>into</strong> an AI tool: about 90 seconds. This is a different STOP from Session 1’s — that one is for what comes <strong>out</strong>.</Note>
      <div className="grid gap-2 sm:grid-cols-4">
        {S2.STOP.map(s => (
          <div key={s.letter} className={`p-4 ${STOP_STYLE[s.letter]}`}>
            <p className="font-display text-3xl font-bold">{s.letter}</p>
            <p className="mt-1 text-sm font-semibold" lang="ga">{s.word.ga} <span className="font-normal opacity-90" lang="en">· {s.word.en}</span></p>
            <p className="mt-3 text-sm" lang="ga">{s.question.ga}</p>
            <p className="mt-1 text-xs opacity-90" lang="en">{s.question.en}</p>
          </div>
        ))}
      </div>
      <div className="border border-ink/15 p-4">
        <p className="text-sm"><span className="font-semibold" lang="ga">{S2.TWO_STOPS.out.tag.ga}:</span> {S2.TWO_STOPS.out.words} — <span className="text-ink-mute">{S2.TWO_STOPS.out.line.en}</span></p>
        <p className="mt-1 text-sm"><span className="font-semibold" lang="ga">{S2.TWO_STOPS.in.tag.ga}:</span> {S2.TWO_STOPS.in.words} — <span className="text-ink-mute">{S2.TWO_STOPS.in.line.en}</span></p>
      </div>
      <div>
        <Label>Six cases — go, fix first, or stop?</Label>
        <ol className="mt-3 space-y-3">
          {S2.STOP_DRILL.map((c, i) => {
            const p = pick[c.id]
            return (
              <li key={c.id} className="card p-4">
                <p className="flex gap-2 text-sm font-medium"><span className="text-ink-faint">{i + 1}.</span><span><Bi v={c.text} /></span></p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(['go', 'fix', 'stop'] as const).map(k => (
                    <button key={k} type="button" aria-pressed={p === k} onClick={() => setPick(x => ({ ...x, [c.id]: k }))}
                      className={`btn ${p === k ? 'bg-ink text-paper' : 'border border-ink/30 text-ink hover:border-ink'}`}>
                      {S2.FINAL_LABELS[k].ga} <span className="ml-1 text-xs opacity-80">· {S2.FINAL_LABELS[k].en}</span>
                    </button>
                  ))}
                </div>
                {p && (
                  <div className="mt-3 border-t border-ink/10 pt-3 text-sm">
                    <p className="flex flex-wrap gap-2">
                      {(['S', 'T', 'O', 'P'] as const).map(l => (
                        <span key={l} className={`px-2 py-0.5 text-xs font-bold ${c.verdict[l] === 'ok' ? 'bg-moss-100 text-risk-green' : 'bg-coral-soft text-coral-deep'}`}>
                          {l} {c.verdict[l] === 'ok' ? '✓' : '⚑'}
                        </span>
                      ))}
                    </p>
                    <p className="mt-2 font-semibold">{p === c.final ? 'Yes — ' : 'Compare: '}<Bi v={S2.FINAL_LABELS[c.final]} compact /> — <Bi v={c.action} /></p>
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

/* ---------- e8 · Privacy sort ---------- */

const LEVEL_CLASS: Record<string, string> = {
  green: 'border-risk-green bg-moss-50 text-risk-green',
  amber: 'border-risk-amber bg-gold-soft text-risk-amber',
  red: 'border-risk-red bg-coral-soft text-risk-red',
}
const LEVEL_SYMBOL: Record<string, string> = { green: '●', amber: '◐', red: '■' }

export function PrivacySort() {
  const [pick, setPick] = useState<Record<string, string>>({})
  const [mine, setMine] = useState('')
  const [showAfter, setShowAfter] = useState(false)
  const cards = useMemo(() => [...S2.PRIVACY_CARDS].sort((a, b) => (a.id < b.id ? 1 : -1)), [])
  const right = Object.entries(pick).filter(([id, l]) => S2.PRIVACY_CARDS.find(c => c.id === id)?.level === l).length
  return (
    <div className="space-y-6">
      <Note>Three kinds of information: personal data, confidential information, public information. Sort twelve cards. Shape and label carry the meaning as well as colour.</Note>
      <div className="grid gap-3 sm:grid-cols-3">
        {S2.PRIVACY_TYPES.map(t => (
          <div key={t.id} className="card p-4">
            <p className="font-display text-base font-semibold"><Bi v={t.name} /></p>
            <p className="mt-2 text-sm text-ink-soft"><Bi v={t.def} /></p>
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold"><Bi v={S2.PRIVACY_KEY} /></p>
      <ol className="grid gap-3 sm:grid-cols-2">
        {cards.map(c => {
          const p = pick[c.id]
          return (
            <li key={c.id} className="card p-4">
              <p className="text-sm font-medium"><Bi v={c.text} /></p>
              <div className="mt-3 flex gap-1.5">
                {(['green', 'amber', 'red'] as const).map(l => (
                  <button key={l} type="button" aria-pressed={p === l} aria-label={S2.LEVEL_LABELS[l].en} onClick={() => setPick(x => ({ ...x, [c.id]: l }))}
                    className={`flex flex-1 items-center justify-center gap-1.5 border px-2 py-2 text-[.72rem] font-semibold ${p === l ? LEVEL_CLASS[l] : 'border-ink/15 text-ink-mute hover:border-ink/40'}`}>
                    <span aria-hidden>{LEVEL_SYMBOL[l]}</span>{S2.LEVEL_LABELS[l].ga.split(' — ')[0]}
                  </button>
                ))}
              </div>
              {p && (
                <div className="mt-3 border-t border-ink/10 pt-3 text-sm">
                  <p className={`inline-block border px-2 py-0.5 text-xs font-bold ${LEVEL_CLASS[c.level]}`}>{LEVEL_SYMBOL[c.level]} <span lang="ga">{S2.LEVEL_LABELS[c.level].ga}</span></p>
                  <p className="mt-2 text-ink-soft"><Bi v={c.why} /></p>
                </div>
              )}
            </li>
          )
        })}
      </ol>
      <p className="text-sm text-ink-soft">{right} of {Object.keys(pick).length} answered match the key. Amber cards are the hard ones: the answer is “fix it first”, not “yes” or “no”.</p>
      <div className="space-y-3">
        <Label>Make it safe — fictional complaint</Label>
        <div className="border border-coral bg-coral-soft/50 p-4 text-sm"><Bi v={S2.MAKE_SAFE.before} /></div>
        <label className="block text-sm font-medium" htmlFor="s2-safe">Your safe version (stays in this browser; nothing is sent)</label>
        <textarea id="s2-safe" value={mine} onChange={e => setMine(e.target.value)} rows={4}
          className="w-full border border-ink/25 bg-paper-card p-3 text-sm" />
        <button type="button" className="btn-ghost" onClick={() => setShowAfter(s => !s)}>{showAfter ? 'Hide' : 'Show'} one safe version</button>
        {showAfter && <div className="border border-emerald bg-emerald-soft p-4 text-sm"><Bi v={S2.MAKE_SAFE.after} /></div>}
      </div>
      <Educational />
    </div>
  )
}

/* ---------- e9 · Challenge 1: AI → AI ---------- */

export function AiToAi() {
  const [ticks, setTicks] = useState<Record<number, boolean>>({})
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3 text-sm text-ink-mute"><span className="chip">10 minutes</span><span className="chip">Groups of three</span></div>
      <Note>Ask one AI to design a prompt for a second AI that will review a funding proposal. Then check the prompt yourselves — a better prompt does not guarantee a correct answer.</Note>
      <div>
        <Label>Ask the first AI</Label>
        <div className="mt-2"><CopyBlock ga={S2.C1.metaPrompt.ga} en={S2.C1.metaPrompt.en} /></div>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={S2.C1.twoAI} compact /></p>
      </div>
      <div>
        <Label>Check the prompt it wrote</Label>
        <ul className="mt-2 space-y-2">
          {S2.C1.promptChecklist.map((q, i) => (
            <li key={q.en} className="flex items-start gap-3 text-sm">
              <CheckBox on={!!ticks[i]} onChange={v => setTicks(t => ({ ...t, [i]: v }))} label={q.en} />
              <span><Bi v={q} /></span>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-y border-ink/15 py-3 text-sm font-semibold italic"><Bi v={S2.C1.message} /></p>
      <Educational />
    </div>
  )
}

/* ---------- e9b · Challenge 2: Proposal → Review ---------- */

export function ProposalReview() {
  const [flag, setFlag] = useState<Record<string, boolean>>({})
  const [key, setKey] = useState(false)
  const [reply, setReply] = useState(false)
  const [dec, setDec] = useState<Record<string, string>>({})
  const cat = (id: string) => S2.C2.categories.find(c => c.id === id)!.label
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 text-sm text-ink-mute"><span className="chip">18 minutes</span><span className="chip">Review first → rewrite second</span></div>
      <Fictional />
      <Note>Read the fictional proposal as a critical reviewer. Tap any paragraph you think has a problem. Then ask a second AI to review it, and decide what is right, wrong or still needs a person to check. The AI misses some things and invents others.</Note>
      <article className="doc p-5">
        <h4 className="font-display text-lg font-semibold"><Bi v={S2.PROPOSAL.title} /></h4>
        <p className="text-xs italic text-ink-mute" lang="ga">{S2.PROPOSAL.org.ga}</p>
        {S2.PROPOSAL.sections.map(sec => (
          <section key={sec.id} className="mt-4">
            <p className="kicker"><Bi v={sec.head} compact /></p>
            {sec.paras.map(p => {
              const k = `${sec.id}-${p.t.en}`
              return (
                <button key={k} type="button" aria-pressed={!!flag[k]} onClick={() => setFlag(f => ({ ...f, [k]: !f[k] }))}
                  className={`mt-1 block w-full border-l-4 px-3 py-2 text-left text-sm ${flag[k] ? 'border-coral bg-coral-soft/60' : 'border-transparent hover:bg-paper-deep/60'}`}>
                  <span lang="ga">{p.t.ga}</span>
                  <span className="block text-xs text-ink-mute" lang="en">{p.t.en}</span>
                  {key && p.defect && <span className="mt-1 inline-block bg-ink px-2 py-0.5 text-[.7rem] font-bold text-paper">{p.defect}</span>}
                </button>
              )
            })}
          </section>
        ))}
      </article>
      <div>
        <Label>The review prompt (reference)</Label>
        <div className="mt-2"><CopyBlock ga={S2.C2.reviewPrompt.ga} en={S2.C2.reviewPrompt.en} /></div>
      </div>
      <div>
        <Label>Human revision — choose three items</Label>
        <p className="mt-2 text-sm text-ink-soft"><Bi v={S2.C2.reviseRule} /></p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map(n => (
            <div key={n} className="card p-3">
              <p className="text-xs font-bold text-ink-faint">Item {n}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {S2.C2.decisions.map(d => (
                  <button key={d.id} type="button" aria-pressed={dec[n] === d.id} onClick={() => setDec(x => ({ ...x, [n]: d.id }))}
                    className={`px-2 py-1 text-xs font-semibold ${dec[n] === d.id ? 'bg-ink text-paper' : 'border border-ink/25'}`}>
                    {d.label.ga}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold"><Bi v={S2.C2.diffRule} /></p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-ghost" onClick={() => setKey(k => !k)}>{key ? 'Hide' : 'Show'} the answer key</button>
        <button type="button" className="btn-ghost" onClick={() => setReply(r => !r)}>{reply ? 'Hide' : 'Show'} the Organiser’s Reply (11:52)</button>
      </div>
      {key && (
        <ul className="grid gap-2 sm:grid-cols-2">
          {S2.DEFECTS.map(d => (
            <li key={d.id} className="card p-3 text-sm">
              <p className="font-semibold">{d.id} · <Bi v={d.what} compact /></p>
              <p className="text-xs font-bold uppercase tracking-wide text-ink-faint"><Bi v={cat(d.cat)} compact /></p>
              <p className="mt-1 text-ink-soft">{d.why}</p>
              <p className="mt-1 text-emerald-deep">{d.fix}</p>
            </li>
          ))}
        </ul>
      )}
      {reply && (
        <div className="border border-atlantic/30 bg-atlantic-soft p-4">
          <p className="text-sm font-semibold"><Bi v={S2.ORGANISER_REPLY.head} /></p>
          <div className="mt-2"><CopyBlock ga={S2.ORGANISER_REPLY.ga} en={S2.ORGANISER_REPLY.en} /></div>
          <p className="mt-3 text-sm font-medium">Your output: a verified summary of eight lines at most. Anything unconfirmed is marked [le fíorú] or removed. It is the only input to Challenge 3.</p>
        </div>
      )}
      <Educational />
    </div>
  )
}

/* ---------- e9c · Challenge 3: Proposal → Promotion ---------- */

export function Promotion() {
  const [grid, setGrid] = useState<Record<string, boolean>>({})
  const [irish, setIrish] = useState<Record<string, boolean>>({})
  const [approver, setApprover] = useState('')
  const total = S2.NINE_CHECKS.length * S2.C3.outputs.length
  const done = Object.values(grid).filter(Boolean).length
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 text-sm text-ink-mute"><span className="chip">22 minutes</span><span className="chip">AI-assisted communication</span></div>
      <Note>Use <strong>only</strong> the verified summary. AI drafts four things; people check, revise and approve. Fluent output is not automatically correct.</Note>
      <p className="text-sm font-semibold"><Bi v={S2.C3.flow} /></p>
      <div>
        <Label>Prompt template</Label>
        <div className="mt-2"><CopyBlock ga={S2.C3.promptTemplate.ga} en={S2.C3.promptTemplate.en} /></div>
      </div>
      <div className="border border-risk-red/40 bg-coral-soft/60 p-4">
        <p className="text-sm font-bold text-risk-red"><Bi v={S2.C3.noInventLine} /></p>
        <p className="mt-2 text-sm text-ink-soft" lang="ga">{S2.C3.noInvent.map(x => x.ga).join(', ')}.</p>
        <p className="mt-1 text-xs text-ink-mute" lang="en">{S2.C3.noInvent.map(x => x.en).join(', ')}.</p>
      </div>
      <div>
        <Label>The four outputs</Label>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {S2.C3.outputs.map((o, i) => (
            <li key={o.id} className="card p-3 text-sm"><p className="font-semibold">{i + 1}. <Bi v={o.label} compact /></p><p className="mt-1 text-xs text-ink-mute"><Bi v={o.parts} compact /></p></li>
          ))}
        </ul>
      </div>
      <div>
        <Label>Nine checks — tick each output that passes ({done} of {total})</Label>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead><tr className="border-b-2 border-ink text-left text-xs uppercase tracking-wide text-ink-faint">
              <th scope="col" className="py-2 pr-3">Check</th>
              {S2.C3.outputs.map((o, i) => <th key={o.id} scope="col" className="px-2 py-2 text-center">Output {i + 1}</th>)}
            </tr></thead>
            <tbody>
              {S2.NINE_CHECKS.map(c => (
                <tr key={c.id} className="border-b border-ink/10">
                  <th scope="row" className="py-2 pr-3 text-left font-medium"><Bi v={V(c.label)} compact /> <span className="block text-xs font-normal text-ink-mute"><Bi v={c.ask} compact /></span></th>
                  {S2.C3.outputs.map(o => (
                    <td key={o.id} className="px-2 py-2"><div className="flex justify-center"><CheckBox on={!!grid[`${c.id}-${o.id}`]} onChange={v => setGrid(g => ({ ...g, [`${c.id}-${o.id}`]: v }))} label={`${c.label.en}, ${o.label.en}`} /></div></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm font-semibold"><Bi v={S2.C3.sameMeaning} /></p>
      </div>
      <div>
        <Label>Irish-language checks — for every Irish text the AI writes</Label>
        <ul className="mt-2 space-y-2">
          {S2.IRISH_CHECKS.map(c => (
            <li key={c.id} className="flex items-start gap-3 text-sm">
              <CheckBox on={!!irish[c.id]} onChange={v => setIrish(g => ({ ...g, [c.id]: v }))} label={c.label.en} />
              <span><span className="font-semibold" lang="ga">{c.label.ga}</span> <span className="text-ink-mute" lang="en">({c.label.en})</span> — <span lang="ga">{c.ask.ga}</span></span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm font-semibold"><Bi v={S2.IRISH_MESSAGE} /></p>
        <p className="mt-1 text-xs text-ink-mute"><Bi v={S2.IRISH_TOOL_NOTE} compact /></p>
      </div>
      <div>
        <Label>Design (optional)</Label>
        <p className="mt-2 text-sm font-semibold"><Bi v={S2.C3.canva.message} /></p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
          {S2.C3.canva.steps.map(s => <li key={s.en}><Bi v={s} compact /></li>)}
        </ul>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={S2.C3.canva.fallback} compact /></p>
      </div>
      <div className="border border-emerald bg-emerald-soft p-4">
        <p className="text-sm font-bold">Ceadú · Approval</p>
        <label htmlFor="s2-approver" className="mt-2 block text-sm"><Bi v={S2.C3.approval.signed} compact /></label>
        <input id="s2-approver" value={approver} onChange={e => setApprover(e.target.value)} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" placeholder="Name of the person who approves" />
        <p className="mt-2 text-sm"><Bi v={S2.C3.approval.notYet} compact /></p>
      </div>
      <p className="text-xs text-ink-mute"><Bi v={S2.C3.transparency} compact /></p>
      <Principle />
    </div>
  )
}

/* ---------- e9d · Safe AI workflow ---------- */

export function SafeWorkflow() {
  const [ans, setAns] = useState<Record<string, string>>({})
  const [who, setWho] = useState('')
  return (
    <div className="space-y-5">
      <Note><Bi v={S2.WORKFLOW_TASK} compact /> Plan it — do not run it in a public tool.</Note>
      <ol className="space-y-3">
        {S2.WORKFLOW.map((w, i) => (
          <li key={w.id} className="card p-4">
            <label htmlFor={`s2-${w.id}`} className="block">
              <span className="font-display text-base font-semibold">{i + 1}. <Bi v={w.step} compact /></span>
              <span className="mt-1 block text-sm text-ink-soft"><Bi v={w.q} compact /></span>
            </label>
            <textarea id={`s2-${w.id}`} value={ans[w.id] ?? ''} onChange={e => setAns(a => ({ ...a, [w.id]: e.target.value }))} rows={2}
              className="mt-2 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <div>
        <label htmlFor="s2-who" className="text-sm font-semibold">An duine a cheadaíonn · The person who approves</label>
        <input id="s2-who" value={who} onChange={e => setWho(e.target.value)} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
      </div>
      <p className="text-sm font-semibold"><Bi v={S2.WORKFLOW_NOTE} /></p>
      <p className="text-xs text-ink-mute">What you type stays in this browser and is not saved or sent anywhere.</p>
    </div>
  )
}

/* ---------- reflection ---------- */

export function Session2Reflection() {
  const [txt, setTxt] = useState<Record<number, string>>({})
  return (
    <div className="space-y-5">
      <Note>Write alone, no discussion.</Note>
      <ol className="space-y-4">
        {S2.REFLECTION.questions.map((q, i) => (
          <li key={q.en}>
            <label htmlFor={`s2-r${i}`} className="block text-sm font-semibold">{i + 1}. <Bi v={q} compact /></label>
            <textarea id={`s2-r${i}`} value={txt[i] ?? ''} onChange={e => setTxt(t => ({ ...t, [i]: e.target.value }))} rows={2} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <Principle />
      <p className="text-sm font-semibold"><Bi v={S2.REFLECTION.bridge} /></p>
    </div>
  )
}

import { useState, type ReactNode } from 'react'
import { AlertTriangle, Check, Copy, ExternalLink } from 'lucide-react'
import { S3 } from '../../data/session3Content'
import { Bi } from '../ui/Bi'
import { Note, Label, CheckBox, CopyBlock } from './Session2Exercises'

/* Session 3 exercises. Content comes from src/data/session3Content.ts (generated from the same source
 * as the slides and Word files; answer keys are deliberately not exported). Everything typed here stays
 * in the browser: nothing is stored or sent. All exercises use fictional material only. */

type B = { readonly ga: string; readonly en: string }
const V = (b: B) => ({ ga: b.ga, en: b.en, needsValidation: true })

function Fictional() {
  return (
    <div className="flex items-start gap-2 border border-coral bg-coral-soft px-4 py-3 text-coral-deep" role="note">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p className="text-sm font-bold uppercase tracking-wide">
        <span lang="ga">{S3.META.fictionLabel.ga}</span>
        <span className="block text-[.72rem] font-semibold normal-case tracking-normal" lang="en">{S3.META.fictionLabel.en}</span>
      </p>
    </div>
  )
}

function Hybrid({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-atlantic pl-3 text-sm text-ink-soft">
      <span className="font-semibold text-ink">Hybrid · </span>{children}
    </p>
  )
}

function Private() {
  return <p className="text-xs text-ink-mute">What you type stays in this browser and is not saved or sent anywhere.</p>
}

function Chips({ n, children }: { n?: string; children?: ReactNode }) {
  return <div className="flex flex-wrap gap-3 text-sm text-ink-mute">{n && <span className="chip">{n}</span>}{children}</div>
}

function FactCard() {
  return (
    <div className="card p-4">
      <p className="text-sm font-semibold"><Bi v={V(S3.SCENARIO.org)} compact /> — <span className="font-normal text-ink-soft"><Bi v={V(S3.SCENARIO.orgWhat)} compact /></span></p>
      <dl className="mt-3 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-[10rem_1fr]">
        {S3.SCENARIO.facts.map(f => (
          <div key={f.k.en} className="contents">
            <dt className="font-semibold text-ink-soft"><Bi v={V(f.k)} compact /></dt>
            <dd className={f.v.ga.startsWith('[') ? 'font-bold text-coral-deep' : ''}><span lang="ga">{f.v.ga}</span> <span className="text-xs text-ink-mute" lang="en">· {f.v.en}</span></dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const SCALE = S3.COMPARE.scale
const TOOLS = ['ChatGPT', 'Claude', 'Copilot'] as const

/* ---------- Part 3 · Same prompt, three systems ---------- */

export function SamePromptCompare() {
  const [score, setScore] = useState<Record<string, number>>({})
  const [why, setWhy] = useState<Record<string, string>>({})
  return (
    <div className="space-y-6">
      <Chips n="25 minutes"><span className="chip">Groups of three · one tool each</span></Chips>
      <Fictional />
      <FactCard />
      <div>
        <Label>The prompt — paste it word for word into each tool</Label>
        <div className="mt-2"><CopyBlock ga={S3.COMPARE.prompt.ga} en={S3.COMPARE.prompt.en} /></div>
      </div>
      <ol className="grid gap-2 sm:grid-cols-2">
        {S3.COMPARE.how.map((h, i) => (
          <li key={i} className="card p-3 text-sm"><span className="font-bold text-ink-faint">{h.min} min · </span><Bi v={V(h.what)} compact /></li>
        ))}
      </ol>
      <div>
        <Label>Compare — score each answer, and give one reason</Label>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <thead><tr className="border-b-2 border-ink text-left text-xs uppercase tracking-wide text-ink-faint">
              <th scope="col" className="py-2 pr-3">Lens</th>
              {TOOLS.map(t => <th key={t} scope="col" className="px-2 py-2">{t}</th>)}
              <th scope="col" className="px-2 py-2">Reason</th>
            </tr></thead>
            <tbody>
              {S3.COMPARE.dimensions.map(d => (
                <tr key={d.id} className="border-b border-ink/10 align-top">
                  <th scope="row" className="py-2 pr-3 text-left font-semibold">
                    <Bi v={V(d.label)} compact />
                    <ul className="mt-1 space-y-0.5 text-xs font-normal text-ink-mute">{d.qs.map(q => <li key={q.en}><span lang="ga">{q.ga}</span></li>)}</ul>
                  </th>
                  {TOOLS.map(t => (
                    <td key={t} className="px-2 py-2">
                      <div className="flex flex-col gap-1" role="group" aria-label={`${d.label.en}, ${t}`}>
                        {SCALE.map((sc, k) => {
                          const key = `${d.id}-${t}`
                          return (
                            <button key={sc.en} type="button" aria-pressed={score[key] === k} onClick={() => setScore(x => ({ ...x, [key]: k }))}
                              className={`px-2 py-0.5 text-left text-xs font-semibold ${score[key] === k ? 'bg-ink text-paper' : 'border border-ink/20 text-ink-soft'}`}>
                              <span lang="ga">{sc.ga}</span>
                            </button>
                          )
                        })}
                      </div>
                    </td>
                  ))}
                  <td className="px-2 py-2">
                    <label className="sr-only" htmlFor={`s3-why-${d.id}`}>Reason for {d.label.en}</label>
                    <textarea id={`s3-why-${d.id}`} rows={3} value={why[d.id] ?? ''} onChange={e => setWhy(w => ({ ...w, [d.id]: e.target.value }))}
                      className="w-full border border-ink/25 bg-paper-card p-2 text-xs" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="border border-ink/15 p-4">
        <Label>Post one line in the Teams chat</Label>
        <p className="mt-2 text-sm"><Bi v={V(S3.COMPARE.share)} /></p>
      </div>
      <p className="border-y border-ink/15 py-3 text-sm font-semibold"><Bi v={V(S3.TASK_DECIDES)} /></p>
      <p className="text-sm text-ink-soft"><Bi v={V(S3.COMPARE.noBest)} /></p>
      <Hybrid>Online groups work in breakout rooms on the same fact card and prompt; room groups at their tables. Every group — online first — posts its line in the Teams meeting chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 5A · IRISH check + proofreading ---------- */

export function IrishCheckProofread() {
  const [flag, setFlag] = useState<Record<number, boolean>>({})
  const [kind, setKind] = useState<Record<number, string>>({})
  const [mine, setMine] = useState<Record<number, string>>({})
  const n = Object.values(flag).filter(Boolean).length
  return (
    <div className="space-y-6">
      <Chips n="12 minutes"><span className="chip">IRISH 3 · proofreading 9 · alone → pairs</span></Chips>
      <div className="border border-gold bg-gold-soft p-4">
        <p className="text-sm font-bold"><Bi v={V(S3.AUTHORITY.line)} /></p>
        <ol className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
          {S3.AUTHORITY.steps.map((s, i) => (
            <li key={s.label.en} className="flex items-center gap-2">
              <span className={`px-2 py-1 ${s.actor === 'ai' ? 'bg-atlantic text-paper' : 'bg-emerald text-paper'}`}><span lang="ga">{s.label.ga}</span> <span className="opacity-90">· {s.label.en}</span></span>
              {i < S3.AUTHORITY.steps.length - 1 && <span aria-hidden>→</span>}
            </li>
          ))}
        </ol>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {S3.AUTHORITY.ladder.map(l => (
          <div key={l.level.en} className="card p-3 text-sm">
            <p className="font-semibold"><Bi v={V(l.level)} compact /></p>
            <p className="mt-1 text-xs text-ink-mute"><Bi v={V(l.eg)} compact /></p>
            <p className="mt-2 font-medium text-emerald-deep"><Bi v={V(l.check)} compact /></p>
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold"><Bi v={V(S3.AUTHORITY.ladderLine)} compact /></p>
      <div>
        <Label>The IRISH check</Label>
        <div className="mt-2 grid gap-2 sm:grid-cols-5">
          {S3.IRISH.map((it, i) => (
            <div key={i} className={`p-3 text-paper ${['bg-atlantic', 'bg-atlantic-deep', 'bg-emerald', 'bg-emerald-deep', 'bg-coral-deep'][i]}`}>
              <p className="font-display text-3xl font-bold">{it.letter}</p>
              <p className="text-sm font-semibold" lang="ga">{it.word.ga} <span className="font-normal opacity-90" lang="en">· {it.word.en}</span></p>
              <p className="mt-2 text-sm" lang="ga">{it.q.ga}</p>
              <p className="mt-1 text-xs opacity-90" lang="en">{it.q.en}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm font-semibold"><Bi v={V(S3.DL.IRISH_PLUS.label)} compact />: <Bi v={V(S3.DL.IRISH_PLUS.q)} compact /></p>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={V(S3.IRISH_LINK)} compact /></p>
      </div>
      <Fictional />
      <div>
        <Label>Challenge A — tap each sentence with a problem, name the type, write your version</Label>
        <p className="mt-1 text-sm text-ink-soft"><Bi v={V(S3.DRAFT_EN_SUPPORT)} compact /></p>
        <article className="doc mt-3 p-5">
          <h4 className="font-display text-lg font-semibold" lang="ga">{S3.DRAFT_TITLE}</h4>
          <ol className="mt-3 space-y-2">
            {S3.DRAFT.map((t, i) => (
              <li key={i}>
                <button type="button" aria-pressed={!!flag[i]} onClick={() => setFlag(f => ({ ...f, [i]: !f[i] }))}
                  className={`block w-full border-l-4 px-3 py-2 text-left text-sm ${flag[i] ? 'border-coral bg-coral-soft/60' : 'border-transparent hover:bg-paper-deep/60'}`}>
                  <span className="mr-2 font-bold text-ink-faint">{i + 1}.</span><span lang="ga">{t}</span>
                </button>
                {flag[i] && (
                  <div className="mt-2 grid gap-2 pl-4 sm:grid-cols-[14rem_1fr]">
                    <label className="text-xs">
                      <span className="sr-only">Type of problem in sentence {i + 1}</span>
                      <select value={kind[i] ?? ''} onChange={e => setKind(k => ({ ...k, [i]: e.target.value }))} className="w-full border border-ink/25 bg-paper-card p-1.5 text-xs">
                        <option value="">Cineál · Type…</option>
                        {S3.PROBLEM_TYPES.map(p => <option key={p.en} value={p.en}>{p.ga} · {p.en}</option>)}
                      </select>
                    </label>
                    <label className="text-xs">
                      <span className="sr-only">Your version of sentence {i + 1}</span>
                      <input lang="ga" value={mine[i] ?? ''} onChange={e => setMine(m => ({ ...m, [i]: e.target.value }))} placeholder="Mo leagan · My version"
                        className="w-full border border-ink/25 bg-paper-card p-1.5 text-xs" />
                    </label>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </article>
        <p className="mt-2 text-sm text-ink-soft">You have marked {n} of 9 sentences. There are nine problems — one in each sentence.</p>
      </div>
      <p className="text-sm font-semibold"><Bi v={V(S3.CHALLENGE_A.tip)} /></p>
      <p className="text-sm text-ink-soft"><Bi v={V(S3.CHALLENGE_A.aiTwist)} /></p>
      <Note>The answers are discussed in the room after groups have shared. The facilitator holds the answer key.</Note>
      <Hybrid>Work alone, then in pairs — online pairs in breakout rooms. Share findings in the chat by sentence number.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 5B · Translation ---------- */

export function TranslationChallenge() {
  const [tick, setTick] = useState<Record<string, boolean>>({})
  const [notes, setNotes] = useState('')
  return (
    <div className="space-y-6">
      <Chips n="Optional"><span className="chip">Pairs · two tools</span></Chips>
      <Fictional />
      <article className="border border-atlantic/30 bg-atlantic-soft p-5">
        <h4 className="font-display text-lg font-semibold" lang="ga">{S3.NOTICE_TITLE}</h4>
        <div className="mt-2 space-y-2 text-[.98rem]" lang="ga">{S3.NOTICE.map(t => <p key={t}>{t}</p>)}</div>
        <p className="mt-3 text-xs text-ink-mute"><Bi v={V(S3.NOTICE_NOTE)} compact /></p>
      </article>
      <div>
        <Label>The prompt</Label>
        <div className="mt-2"><CopyBlock ga={S3.CHALLENGE_B.prompt.ga} en={S3.CHALLENGE_B.prompt.en} /></div>
      </div>
      <div>
        <Label>Check both translations</Label>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-sm">
            <thead><tr className="border-b-2 border-ink text-left text-xs uppercase tracking-wide text-ink-faint">
              <th scope="col" className="py-2 pr-3">Check</th><th scope="col" className="px-2 py-2 text-center">Tool 1 OK</th><th scope="col" className="px-2 py-2 text-center">Tool 2 OK</th>
            </tr></thead>
            <tbody>
              {S3.CHALLENGE_B.check.map(c => (
                <tr key={c.id} className="border-b border-ink/10">
                  <th scope="row" className="py-2 pr-3 text-left font-medium"><Bi v={V(c.label)} compact /><span className="block text-xs font-normal text-ink-mute"><Bi v={V(c.q)} compact /></span></th>
                  {[1, 2].map(t => (
                    <td key={t} className="px-2 py-2"><div className="flex justify-center"><CheckBox on={!!tick[`${c.id}-${t}`]} onChange={v => setTick(x => ({ ...x, [`${c.id}-${t}`]: v }))} label={`${c.label.en}, tool ${t}`} /></div></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <label className="block text-sm font-medium" htmlFor="s3-tr-notes">What did each tool do with ‘meitheal’, ‘seanchaí’, the names and the proverb?</label>
      <textarea id="s3-tr-notes" rows={4} value={notes} onChange={e => setNotes(e.target.value)} className="w-full border border-ink/25 bg-paper-card p-3 text-sm" />
      <p className="text-sm text-ink-soft"><Bi v={V(S3.CHALLENGE_B.extension)} /></p>
      <Hybrid>Pairs in the room or in breakout rooms: two people, two tools, the same notice. Post one surprising translation in the chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 6 · Settings ---------- */

const PRIV_CLASS: Record<string, string> = { low: 'bg-moss-100 text-risk-green', medium: 'bg-gold-soft text-risk-amber', high: 'bg-coral-soft text-risk-red' }
const KIND_LABEL: Record<string, string> = { verified: 'Verified', observation: 'Observation', recommend: 'Course recommendation' }

export function SettingsExplorer() {
  const [mine, setMine] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(S3.IRISH_INSTRUCTIONS.ga); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="space-y-6">
      <Chips n="4 minutes + reference"><span className="chip">Your own account</span><span className="chip">Checked {S3.CHECKED}</span></Chips>
      <Note><Bi v={V(S3.SETTINGS_INTRO)} compact /> <Bi v={V(S3.SETTINGS_TASK)} compact /></Note>
      <ul className="grid gap-3 sm:grid-cols-2">
        {S3.SETTINGS.map(st => (
          <li key={st.id} className="card p-4 text-sm">
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-base font-semibold"><Bi v={V(st.name)} compact /></p>
              <span className={`shrink-0 px-2 py-0.5 text-[.7rem] font-bold ${PRIV_CLASS[st.privacy]}`}>Privacy: {S3.PRIVACY_LABELS[st.privacy].en}</span>
            </div>
            <dl className="mt-2 space-y-1.5">
              {([['does', 0], ['why', 1], ['care', 2]] as const).map(([k, qi]) => (
                <div key={k}><dt className="text-xs font-bold text-ink-faint"><Bi v={V(S3.SETTINGS_QS[qi])} compact /></dt><dd><Bi v={V(st[k])} compact /></dd></div>
              ))}
            </dl>
            <ul className="mt-2 space-y-0.5 border-t border-ink/10 pt-2 text-xs text-ink-soft">
              <li><strong>ChatGPT:</strong> {st.where.chatgpt}</li>
              <li><strong>Claude:</strong> {st.where.claude}</li>
              <li><strong>Copilot:</strong> {st.where.copilot}</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label={`Is ${st.name.en} on my account?`}>
              {['Yes', 'No', 'Not sure'].map(o => (
                <button key={o} type="button" aria-pressed={mine[st.id] === o} onClick={() => setMine(m => ({ ...m, [st.id]: o }))}
                  className={`px-2 py-1 text-xs font-semibold ${mine[st.id] === o ? 'bg-ink text-paper' : 'border border-ink/25'}`}>{o}</button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="border border-atlantic/30 bg-atlantic-soft p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Label>A standing instruction for Irish (optional — your choice)</Label>
            <p className="mt-2 text-sm" lang="ga">{S3.IRISH_INSTRUCTIONS.ga}</p>
            <p className="mt-1 text-xs text-ink-mute" lang="en">{S3.IRISH_INSTRUCTIONS.en}</p>
          </div>
          <button type="button" onClick={copy} className="btn-quiet shrink-0" aria-label="Copy the Irish instruction">
            {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>
      <p className="text-sm font-semibold"><Bi v={V(S3.SETTINGS_CHOICE)} compact /></p>
      <details className="border border-ink/15 p-4">
        <summary className="cursor-pointer text-sm font-semibold">What is verified about each tool — with sources</summary>
        <div className="mt-3 space-y-4">
          {Object.values(S3.PLATFORMS).map(p => (
            <div key={p.name}>
              <p className="font-semibold">{p.name} <span className="text-xs font-normal text-ink-mute">· {p.maker} · {p.open}</span></p>
              <ul className="mt-1 space-y-1 text-sm">
                {p.facts.map(f => (
                  <li key={f.text} className="flex flex-wrap items-baseline gap-2">
                    <span className={`px-1.5 py-0.5 text-[.65rem] font-bold uppercase ${f.kind === 'verified' ? 'bg-moss-100 text-risk-green' : 'bg-gold-soft text-risk-amber'}`}>{KIND_LABEL[f.kind]}</span>
                    <span className="text-ink-soft">{f.text}</span>
                    {f.url && <a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs underline">source <ExternalLink className="h-3 w-3" aria-hidden /></a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs text-ink-mute">Checked {S3.CHECKED}. Commercial AI products change often; free and paid features differ, and work accounts follow your organisation’s policy.</p>
        </div>
      </details>
      <Hybrid>Everyone works on their own device, in the room or online, and posts one ‘surprise’ in the chat.</Hybrid>
    </div>
  )
}

/* ---------- source pack links (shared) ---------- */

function SourcePackLinks() {
  const base = import.meta.env.BASE_URL
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <a className="btn-ghost inline-flex" href={`${base}Session-3-Source-Pack.pdf`} target="_blank" rel="noopener noreferrer">An Pacáiste Foinsí · Supporting Source Pack (PDF, 8 pp.)</a>
    </div>
  )
}

function SourceList() {
  return (
    <ol className="grid gap-2 sm:grid-cols-2">
      {S3.SOURCES.map(src => (
        <li key={src.n} className={`card p-3 text-sm ${src.n === 4 ? 'border-coral' : ''}`}>
          <span className="font-bold text-ink-faint">{src.n} · </span><span className="font-semibold" lang={src.lang === 'en' ? 'en' : 'ga'}>{src.title.ga}</span>
          <span className="block text-xs text-ink-mute">{src.title.en}</span>
        </li>
      ))}
    </ol>
  )
}

/* ---------- Part 4 · AI beyond the chatbot: give AI a folder ---------- */

export function NotebookFolder() {
  const [cleaned, setCleaned] = useState(false)
  const [rec, setRec] = useState<Record<string, string>>({})
  const [ev, setEv] = useState<Record<number, string>>({})
  return (
    <div className="space-y-6">
      <Chips n="30 minutes"><span className="chip">Pairs or threes</span><span className="chip">Checked {S3.CHECKED}</span></Chips>
      <Fictional />
      <div className="grid gap-3 sm:grid-cols-2">
        {([['chat', 'chatLine'], ['folder', 'folderLine']] as const).map(([k, l], i) => (
          <div key={k} className={`p-4 text-paper ${i ? 'bg-emerald' : 'bg-atlantic'}`}>
            <p className="text-xs font-bold uppercase tracking-wide opacity-90">{i ? '2 · Fillteán · Folder' : '1 · Cúntóir · Assistant'}</p>
            <p className="mt-2 font-display text-lg font-semibold" lang="ga">{S3.DOCAI[k].ga}</p>
            <p className="text-xs opacity-90" lang="en">{S3.DOCAI[k].en}</p>
            <p className="mt-2 text-sm" lang="ga">{S3.DOCAI[l].ga}</p>
            <p className="text-xs opacity-90" lang="en">{S3.DOCAI[l].en}</p>
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold"><Bi v={V(S3.DOCAI.notProduct)} /></p>
      <div>
        <Label>A document-AI workflow — seven steps</Label>
        <ol className="mt-2 grid gap-2 sm:grid-cols-7">
          {S3.WORKFLOW.map(w => (
            <li key={w.n} className={`p-2 text-paper ${[2, 6, 7].includes(w.n) ? 'bg-emerald-deep' : 'bg-atlantic-deep'}`}>
              <p className="font-display text-xl font-bold">{w.n}</p>
              <p className="text-sm font-semibold" lang="ga">{w.step.ga}</p>
              <p className="text-xs opacity-90" lang="en">{w.step.en}</p>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={V(S3.WORKFLOW_LINK)} compact /></p>
      </div>
      <div className="border border-coral bg-coral-soft/50 p-4">
        <p className="text-sm font-bold"><Bi v={V(S3.UPLOAD.title)} compact /></p>
        <p className="mt-1 text-sm"><Bi v={V(S3.UPLOAD.principle)} /></p>
        <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">{S3.UPLOAD.qs.map(q => <li key={q.en}>☐ <Bi v={V(q)} compact /></li>)}</ul>
        <p className="mt-3 text-sm font-semibold text-coral-deep"><Bi v={V(S3.UPLOAD.task)} compact /></p>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <CheckBox on={cleaned} onChange={setCleaned} label="I removed the personal data from source 4" />
          <span>I removed the personal data from source 4 before uploading.</span>
        </div>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={S3.UPLOAD.notLegal} compact /></p>
      </div>
      <div>
        <Label>The folder — eight fictional sources</Label>
        <div className="mt-2"><SourceList /></div>
        <div className="mt-3"><SourcePackLinks /></div>
        <p className="mt-2 text-xs text-ink-mute"><Bi v={V(S3.PACK_NOTE)} compact /></p>
      </div>
      <div>
        <Label>Three ways in — nobody is a spectator</Label>
        <ul className="mt-2 grid gap-2 sm:grid-cols-3">
          {S3.ACCESS.paths.map(p => (
            <li key={p.id} className="card p-3 text-sm"><p className="font-semibold"><Bi v={V(p.label)} compact /></p><p className="mt-1 text-xs text-ink-soft"><Bi v={V(p.how)} compact /></p></li>
          ))}
        </ul>
        <p className="mt-2 text-sm font-semibold"><Bi v={V(S3.ACCESS.irishNote)} compact /></p>
      </div>
      <div>
        <Label>Give AI a folder — the steps (copy the prompts)</Label>
        <ol className="mt-2 space-y-3">
          {S3.STEPS.map(st => (
            <li key={st.n}>
              <p className="text-sm font-semibold">{st.n}. <Bi v={V(st.title)} compact /></p>
              {st.prompt ? <div className="mt-1"><CopyBlock ga={st.prompt.ga} en={st.prompt.en} /></div>
                : st.do && <p className="mt-1 text-sm text-ink-soft"><Bi v={V(st.do)} compact /></p>}
            </li>
          ))}
        </ol>
        <p className="mt-2 text-sm"><Bi v={V(S3.LANG_TIP)} compact /></p>
      </div>
      <div className="border border-gold bg-gold-soft p-4">
        <p className="text-sm font-bold">{S3.EVIDENCE.chain.map(c => c.ga).join(' → ')} <span className="font-normal text-ink-mute">· {S3.EVIDENCE.chain.map(c => c.en).join(' → ')}</span></p>
        <p className="mt-1 text-sm"><Bi v={V(S3.EVIDENCE.task)} compact /></p>
        <ol className="mt-3 space-y-2">
          {S3.EVIDENCE.qs.map((q, i) => (
            <li key={q.en}>
              <label htmlFor={`s3-ev-${i}`} className="block text-sm font-medium">{i + 1}. <Bi v={V(q)} compact /></label>
              <input id={`s3-ev-${i}`} value={ev[i] ?? ''} onChange={e => setEv(x => ({ ...x, [i]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-1.5 text-sm" />
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm font-semibold"><Bi v={V(S3.EVIDENCE.line)} compact /> <Bi v={V(S3.KEY_LESSON)} compact /></p>
      </div>
      <div>
        <Label>My record</Label>
        <ol className="mt-2 grid gap-3 sm:grid-cols-2">
          {S3.RECORD.map(r => (
            <li key={r.id}>
              <label htmlFor={`s3-rec-${r.id}`} className="block text-sm font-semibold"><Bi v={V(r.label)} compact /></label>
              <textarea id={`s3-rec-${r.id}`} rows={2} value={rec[r.id] ?? ''} onChange={e => setRec(x => ({ ...x, [r.id]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
            </li>
          ))}
        </ol>
      </div>
      <details className="border border-ink/15 p-4">
        <summary className="cursor-pointer text-sm font-semibold">What is verified about Gemini Notebook — and the alternatives (with sources)</summary>
        <ul className="mt-3 space-y-1 text-sm">
          {[...S3.NOTEBOOK.facts, ...S3.NOTEBOOK.alternatives].map(f => (
            <li key={f.text} className="flex flex-wrap items-baseline gap-2">
              <span className={`px-1.5 py-0.5 text-[.65rem] font-bold uppercase ${f.kind === 'verified' ? 'bg-moss-100 text-risk-green' : 'bg-gold-soft text-risk-amber'}`}>{f.kind === 'verified' ? 'Verified' : 'Observation'}</span>
              <span className="text-ink-soft">{f.text}</span>
              {f.url && <a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs underline">source <ExternalLink className="h-3 w-3" aria-hidden /></a>}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-ink-mute">Checked {S3.CHECKED}. Products change often — check your own account.</p>
      </details>
      <Hybrid>Online pairs work in breakout rooms with the same files; anyone without a tool follows the facilitator’s notebook and sends questions in the chat. Every group posts one finding and one error in the Teams chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 6 · Cén Ghaeilge? (dialect and local context) ---------- */

export function WhichIrish() {
  const [rows, setRows] = useState<{ phrase: string; mine: string; kind: string; why: string }[]>([{ phrase: '', mine: '', kind: '', why: '' }])
  const [refl, setRefl] = useState('')
  const set = (i: number, k: 'phrase' | 'mine' | 'kind' | 'why', v: string) => setRows(r => r.map((x, j) => (j === i ? { ...x, [k]: v } : x)))
  return (
    <div className="space-y-6">
      <Chips n="8 minutes"><span className="chip">Pairs · you are the authority</span></Chips>
      <div className="border border-ink/15 p-4">
        <p className="text-sm font-semibold"><Bi v={V(S3.DL.DIALECT.question)} /></p>
        <p className="mt-2 text-sm font-semibold"><Bi v={V(S3.DL.DIALECT.question2)} /></p>
        <p className="mt-3 text-sm">{S3.DL.DIALECT.varieties.map(v => v.ga).join(' · ')} <span className="text-ink-mute">· {S3.DL.DIALECT.varieties.map(v => v.en).join(' · ')}</span></p>
        <p className="mt-1 text-xs text-ink-mute"><Bi v={V(S3.DL.DIALECT.standard)} compact /></p>
        <p className="mt-3 text-sm"><Bi v={V(S3.DL.DIALECT.muscrai)} /></p>
        <p className="mt-3 text-sm font-semibold"><Bi v={V(S3.DL.DIALECT.legit)} /></p>
      </div>
      <div>
        <Label>English to translate</Label>
        <div className="mt-2"><CopyBlock ga={S3.DL.SOURCE_TEXT} en="(English source — ask the AI to translate it)" /></div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><Label>Prompt A</Label><div className="mt-2"><CopyBlock ga={S3.DL.PROMPT_A.ga} en={S3.DL.PROMPT_A.en} /></div></div>
        <div><Label>Prompt B — Múscraí</Label><div className="mt-2"><CopyBlock ga={S3.DL.PROMPT_B.ga} en={S3.DL.PROMPT_B.en} /></div></div>
      </div>
      <div>
        <Label>What would you change?</Label>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <thead><tr className="border-b-2 border-ink text-left text-xs uppercase tracking-wide text-ink-faint">
              <th scope="col" className="py-2 pr-2">AI phrase</th><th scope="col" className="px-2 py-2">My version</th><th scope="col" className="px-2 py-2">Kind</th><th scope="col" className="px-2 py-2">Why</th>
            </tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-ink/10">
                  {(['phrase', 'mine'] as const).map(k => (
                    <td key={k} className="py-1.5 pr-2"><input lang="ga" aria-label={`${k === 'phrase' ? 'AI phrase' : 'My version'}, row ${i + 1}`} value={r[k]} onChange={e => set(i, k, e.target.value)} className="w-full border border-ink/25 bg-paper-card p-1.5 text-sm" /></td>
                  ))}
                  <td className="px-2 py-1.5">
                    <select aria-label={`Kind of change, row ${i + 1}`} value={r.kind} onChange={e => set(i, 'kind', e.target.value)} className="w-full border border-ink/25 bg-paper-card p-1.5 text-xs">
                      <option value="">—</option>
                      {S3.DL.EXERCISE.kinds.map(k => <option key={k.en} value={k.en}>{k.ga} · {k.en}</option>)}
                    </select>
                  </td>
                  <td className="py-1.5 pl-2"><input aria-label={`Why, row ${i + 1}`} value={r.why} onChange={e => set(i, 'why', e.target.value)} className="w-full border border-ink/25 bg-paper-card p-1.5 text-sm" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn-quiet mt-2" onClick={() => setRows(r => [...r, { phrase: '', mine: '', kind: '', why: '' }])}>+ Add a row</button>
        <p className="mt-2 text-sm font-semibold text-coral-deep"><Bi v={V(S3.DL.EXERCISE.fair)} compact /></p>
      </div>
      <div>
        <Label>Discuss</Label>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{S3.DL.EXERCISE.compare.map(q => <li key={q.en}><Bi v={V(q)} compact /></li>)}</ol>
      </div>
      <p className="border-y border-ink/15 py-3 text-sm font-semibold"><Bi v={V(S3.DL.EXERCISE.promptLesson)} /></p>
      <p className="text-sm">{S3.DL.EXERCISE.flow.map(f => f.ga).join(' → ')} <span className="text-ink-mute">· {S3.DL.EXERCISE.flow.map(f => f.en).join(' → ')}</span></p>
      <div>
        <label htmlFor="s3-dl-refl" className="block text-sm font-semibold"><Bi v={V(S3.DL.REFLECT.q)} compact /></label>
        <textarea id="s3-dl-refl" rows={2} value={refl} onChange={e => setRefl(e.target.value)} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
        <p className="mt-2 text-sm font-semibold"><Bi v={V(S3.DL.REFLECT.close)} /></p>
      </div>
      <div>
        <Label>Dialect-aware prompts to keep</Label>
        <ul className="mt-2 space-y-3">{S3.DL.PROMPTS.map(p => <li key={p.title.en}><p className="mb-1 text-sm font-semibold"><Bi v={V(p.title)} compact /></p><CopyBlock ga={p.p.ga} en={p.p.en} /></li>)}</ul>
      </div>
      <details className="border border-ink/15 p-4">
        <summary className="cursor-pointer text-sm font-semibold">What is verified — with sources</summary>
        <ul className="mt-3 space-y-1 text-sm">
          {S3.DL.FACTS.map(f => (
            <li key={f.text} className="flex flex-wrap items-baseline gap-2">
              <span className={`px-1.5 py-0.5 text-[.65rem] font-bold uppercase ${f.kind === 'verified' ? 'bg-moss-100 text-risk-green' : 'bg-gold-soft text-risk-amber'}`}>{f.kind === 'verified' ? 'Verified' : 'Observation'}</span>
              <span className="text-ink-soft">{f.text}</span>
              {f.url && <a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs underline">source <ExternalLink className="h-3 w-3" aria-hidden /></a>}
            </li>
          ))}
        </ul>
      </details>
      <Hybrid>Pairs in the room or in breakout rooms; post one change you made — and what kind of change it was — in the Teams chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 6 B · Irish-language documents ---------- */

export function IrishDocuments() {
  const [ans, setAns] = useState<Record<number, string>>({})
  return (
    <div className="space-y-6">
      <Chips n="8 minutes"><span className="chip">Same notebook · pairs</span></Chips>
      <Fictional />
      <Note><Bi v={V(S3.IRISHDOCS.intro)} compact /> Choose two of the five prompts — prompt 5 is source 8, the Múscraí youth club.</Note>
      <ol className="space-y-3">
        {[...S3.IRISHDOCS.prompts, S3.DL.NOTEBOOK_Q.prompt].map((p, i) => <li key={p.en}><p className="mb-1 text-sm font-semibold">{i + 1}.</p><CopyBlock ga={p.ga} en={p.en} /></li>)}
      </ol>
      <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">{S3.DL.NOTEBOOK_Q.reflect.map(q => <li key={q.en}><Bi v={V(q)} compact /></li>)}</ul>
      <ol className="space-y-3">
        {S3.IRISHDOCS.reflect.map((q, i) => (
          <li key={q.en}>
            <label htmlFor={`s3-id-${i}`} className="block text-sm font-semibold"><Bi v={V(q)} compact /></label>
            <textarea id={`s3-id-${i}`} rows={2} value={ans[i] ?? ''} onChange={e => setAns(a => ({ ...a, [i]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <p className="text-sm"><Bi v={V(S3.IRISHDOCS.irishApplies)} /></p>
      <p className="border-y border-ink/15 py-3 text-sm font-semibold"><Bi v={V(S3.IRISHDOCS.lesson)} /></p>
      <SourcePackLinks />
      <Hybrid>Pairs in the room or in breakout rooms; post one thing the AI got right — or wrong — about the Irish in the chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 7 · Which workflow? ---------- */

export function WhichWorkflow() {
  const [pick, setPick] = useState<Record<string, string>>({})
  const [why, setWhy] = useState<Record<string, string>>({})
  return (
    <div className="space-y-6">
      <Chips n="6 minutes"><span className="chip">Individual · answers in the chat</span></Chips>
      <Note><Bi v={V(S3.WHICH.intro)} compact /></Note>
      <ul className="grid gap-2 sm:grid-cols-4">
        {S3.WHICH.workflows.map(w => (
          <li key={w.id} className="card p-3 text-sm"><p className="font-semibold">{w.id} · <Bi v={V(w.name)} compact /></p><p className="mt-1 text-xs text-ink-mute">{w.eg}</p></li>
        ))}
      </ul>
      <ol className="space-y-3">
        {S3.WHICH.tasks.map(t => (
          <li key={t.id} className="card p-3">
            <p className="text-sm font-semibold">{t.id}. <Bi v={V(t.text)} compact /></p>
            <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label={`Workflow for task ${t.id}`}>
              {S3.WHICH.workflows.map(w => (
                <button key={w.id} type="button" aria-pressed={pick[t.id] === w.id} onClick={() => setPick(p => ({ ...p, [t.id]: w.id }))}
                  className={`px-2 py-1 text-xs font-semibold ${pick[t.id] === w.id ? 'bg-ink text-paper' : 'border border-ink/25'}`}>{w.id}</button>
              ))}
            </div>
            <label className="sr-only" htmlFor={`s3-wh-${t.id}`}>Why, for task {t.id}</label>
            <input id={`s3-wh-${t.id}`} value={why[t.id] ?? ''} onChange={e => setWhy(x => ({ ...x, [t.id]: e.target.value }))} placeholder="Cén fáth? · Why?" className="mt-2 w-full border border-ink/25 bg-paper-card p-1.5 text-sm" />
          </li>
        ))}
      </ol>
      <p className="text-xs text-ink-mute">Consider: {S3.WHICH.consider.map(c => c.en).join(' · ')}</p>
      <p className="text-sm font-semibold"><Bi v={V(S3.WHICH.share)} compact /></p>
      <p className="text-xs text-ink-mute">There is no single right answer — the facilitator will discuss the options in the room.</p>
      <Private />
    </div>
  )
}

/* ---------- Part 8 · Real-world scenario ---------- */

export function ScenarioChallenge() {
  const [task, setTask] = useState<number | null>(null)
  const [found, setFound] = useState<Record<number, string>>({})
  const [ans, setAns] = useState<Record<string, string>>({})
  const [approver, setApprover] = useState('')
  return (
    <div className="space-y-6">
      <Chips n="20 minutes"><span className="chip">Same groups</span></Chips>
      <Fictional />
      <p className="text-sm font-semibold"><Bi v={V(S3.SCENARIO_INTRO)} /></p>
      <ol className="grid gap-2 sm:grid-cols-3">
        {S3.SCENARIO_STEPS.map((st, i) => <li key={i} className="card p-3 text-sm"><span className="font-bold text-ink-faint">{st.min} min · </span><Bi v={V(st.what)} compact /></li>)}
      </ol>
      <div>
        <Label>1 · <Bi v={V(S3.CHANGED.title)} compact /></Label>
        <p className="mt-1 text-sm text-ink-soft"><Bi v={V(S3.CHANGED.intro)} compact /></p>
        <div className="mt-2"><CopyBlock ga={S3.CHANGED.prompt.ga} en={S3.CHANGED.prompt.en} /></div>
        <ul className="mt-3 space-y-2">
          {S3.CHANGED.cats.map((c, i) => (
            <li key={c.en}>
              <label htmlFor={`s3-ch-${i}`} className="block text-sm font-semibold"><Bi v={V(c)} compact /></label>
              <input id={`s3-ch-${i}`} value={found[i] ?? ''} onChange={e => setFound(f => ({ ...f, [i]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-1.5 text-sm" />
            </li>
          ))}
        </ul>
        <p className="mt-2 text-sm font-semibold"><Bi v={V(S3.CHANGED.check)} compact /></p>
        <p className="mt-1 text-xs text-ink-mute"><Bi v={V(S3.CHANGED.lesson)} compact /></p>
      </div>
      <div>
        <Label>2 · Choose one output</Label>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {S3.TASKS.filter(t => t.n !== 8).map(t => (
            <li key={t.n}>
              <button type="button" aria-pressed={task === t.n} onClick={() => setTask(t.n)}
                className={`flex w-full gap-3 border p-3 text-left text-sm ${task === t.n ? 'border-emerald bg-emerald-soft' : 'border-ink/15 hover:border-ink/40'}`}>
                <span className="font-display text-xl font-bold text-ink-faint">{t.n}</span>
                <span><span className="font-semibold"><Bi v={V(t.title)} compact /></span><span className="mt-1 block text-xs text-ink-soft"><Bi v={V(t.what)} compact /></span></span>
              </button>
            </li>
          ))}
        </ul>
        {task === 4 && (
          <ol className="mt-3 space-y-2 text-sm">
            {S3.QUESTIONS.map((q, i) => (
              <li key={q.id} className="card p-3"><span className="font-bold text-ink-faint">{i + 1}. </span><span lang={q.lang}>{q.text.ga}</span>
                {q.lang === 'ga' && <span className="mt-1 block text-xs text-ink-mute" lang="en">{q.text.en}</span>}</li>
            ))}
          </ol>
        )}
      </div>
      <div className="border border-emerald bg-emerald-soft/60 p-3 text-sm">
        <p className="font-semibold"><Bi v={V(S3.DL.SCENARIO_REQ.req)} compact /></p>
        <p className="mt-1 text-ink-soft"><Bi v={V(S3.DL.SCENARIO_REQ.consider)} compact /></p>
      </div>
      <div>
        <Label>Decision card</Label>
        <ul className="mt-2 space-y-2">
          {S3.DECISIONS.map((q, qi) => (
            <li key={q.en}>
              <label htmlFor={`s3-dc-${qi}`} className="block text-sm font-medium"><Bi v={V(q)} compact /></label>
              <input id={`s3-dc-${qi}`} value={ans[qi] ?? ''} onChange={e => setAns(a => ({ ...a, [qi]: e.target.value }))} className="mt-1 w-full border border-ink/25 bg-paper-card p-1.5 text-sm" />
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-risk-red/40 bg-coral-soft/60 p-4">
        <p className="text-sm font-bold text-risk-red">Ná tabhair do AI riamh · Never delegate</p>
        <ul className="mt-2 flex flex-wrap gap-2 text-xs">{S3.NEVER.map(n => <li key={n.en} className="border border-risk-red/40 px-2 py-1"><Bi v={V(n)} compact /></li>)}</ul>
      </div>
      <div className="border border-emerald bg-emerald-soft p-4">
        <p className="text-sm font-bold">3 · Ceadú · Approval</p>
        <label htmlFor="s3-approver" className="mt-2 block text-sm"><Bi v={S3.APPROVAL.signed} compact /></label>
        <input id="s3-approver" value={approver} onChange={e => setApprover(e.target.value)} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" placeholder="Name of the person who approves" />
        <p className="mt-2 text-sm"><Bi v={S3.APPROVAL.notYet} compact /></p>
      </div>
      <SourcePackLinks />
      <Hybrid>Same groups: online in breakout rooms, room at tables. Every group posts its approved text — or “Gan cheadú go fóill” and what is missing — in the chat.</Hybrid>
      <Private />
    </div>
  )
}

/* ---------- Part 9 · Toolkit ---------- */

export function MyToolkit() {
  const [v, setV] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const asText = () => [S3.TOOLKIT.title.en, ...S3.TOOLKIT.fields.map(f => `${f.label.en}: ${v[f.id] ?? ''}`)].join('\n')
  const copy = async () => {
    try { await navigator.clipboard.writeText(asText()); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="space-y-5">
      <Chips n="7 minutes"><span className="chip">Alone</span></Chips>
      <Note><Bi v={V(S3.TOOLKIT.intro)} compact /></Note>
      <ol className="grid gap-3 sm:grid-cols-2">
        {S3.TOOLKIT.fields.map(f => (
          <li key={f.id} className={`card p-3 ${['safety', 'irish'].includes(f.id) ? 'border-emerald' : ''}`}>
            <label htmlFor={`s3-tk-${f.id}`} className="block text-sm font-semibold"><Bi v={V(f.label)} compact /></label>
            <textarea id={`s3-tk-${f.id}`} rows={2} value={v[f.id] ?? ''} onChange={e => setV(x => ({ ...x, [f.id]: e.target.value }))} className="mt-2 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <button type="button" className="btn-ghost" onClick={copy}>{copied ? 'Copied' : 'Copy my toolkit as text'}</button>
      <p className="text-xs text-ink-mute">Nothing is saved: copy it into your own notes before you close this page.</p>
      <Hybrid>Fill it in here or in the workbook — online and in the room alike. Share one line in the chat if you like.</Hybrid>
    </div>
  )
}

/* ---------- Part 9 · Reflection ---------- */

export function Session3Reflection() {
  const [txt, setTxt] = useState<Record<number, string>>({})
  return (
    <div className="space-y-5">
      <Note>Write alone, no discussion.</Note>
      <ol className="space-y-4">
        {S3.REFLECTION.questions.map((q, i) => (
          <li key={q.en}>
            <label htmlFor={`s3-r${i}`} className="block text-sm font-semibold">{i + 1}. <Bi v={V(q)} compact /></label>
            <textarea id={`s3-r${i}`} value={txt[i] ?? ''} onChange={e => setTxt(t => ({ ...t, [i]: e.target.value }))} rows={2} className="mt-1 w-full border border-ink/25 bg-paper-card p-2 text-sm" />
          </li>
        ))}
      </ol>
      <div className="border border-gold bg-gold-soft p-4">
        {S3.PRINCIPLE.map(p => <p key={p.en} className="text-sm"><span lang="ga" className="font-semibold">{p.ga}</span> <span lang="en" className="text-ink-mute">{p.en}</span></p>)}
      </div>
      <p className="text-sm"><Bi v={V(S3.STRENGTHEN)} /></p>
      <p className="text-sm font-semibold"><Bi v={V(S3.REFLECTION.bridge)} /></p>
      <Private />
    </div>
  )
}

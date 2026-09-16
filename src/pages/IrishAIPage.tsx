import { ArrowRight } from 'lucide-react'
import { FRAMEWORKS } from '../data/programme'
import { FrameworkCard } from '../components/FrameworkCard'
import { BilingualLab } from '../components/exercises/BilingualLab'
import { IrishFirstBusiness } from '../components/exercises/IrishFirstBusiness'
import { NeverAutomate } from '../components/exercises/NeverAutomate'
import { Reveal } from '../components/ui/Reveal'
import { session3 } from '../data/sessions'
import { IRISH_OPPORTUNITIES } from '../data/exerciseContent'
import { FeedbackLink } from '../components/FeedbackLink'
import { IrishChain } from '../components/diagrams/IrishChain'
import signpost from '../assets/gaeltacht-signpost.jpg'

const CONTRIBUTIONS = [
  { label: 'Publish in Irish', body: 'Every Irish-language page, post and document you publish is Irish that exists in the digital world. That is not a metaphor — it is literally the material these systems are short of.' },
  { label: 'Publish well', body: 'Badly generated Irish published at volume makes the problem worse, not better. Quality is the contribution.' },
  { label: 'Keep the human in it', body: 'Validated Irish is worth more than fast Irish, to your readers and to the language.' },
  { label: 'Say what you need', body: 'Terminology gaps, dialect handling, tools that do not work — someone has to say so for it to be fixed.' },
]

export function IrishAIPage() {
  const irishFw = FRAMEWORKS.find(f => f.id === 'irish')!

  return (
    <div>
      <header className="relative overflow-hidden bg-emerald text-paper">
        <img
          src={signpost}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="wrap relative py-20 sm:py-28">
          <p className="text-[.72rem] font-semibold uppercase tracking-[.16em] text-paper/90">
            Session 3 · The signature session
          </p>
          <h1 className="display-huge mt-5 max-w-4xl" lang="ga">
            AI don Ghaeilge —<br />ní AI in ionad na Gaeilge.
          </h1>
          <p className="mt-5 text-xl text-paper/90 sm:text-2xl">AI for Irish — not AI instead of Irish.</p>
          <p className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-paper/90">
            {session3.secondaryQuestion?.en ?? session3.centralQuestion.en}
          </p>
          <a href="#/session/s3" className="btn-cta mt-8">
            Open Session 3 <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </header>

      {/* The chain — a major campaign statement, not a sidebar diagram */}
      <section aria-labelledby="chain-h" className="wrap py-16 sm:py-20">
        <h2 id="chain-h" className="sr-only">The AI-to-Irish chain</h2>
        <IrishChain />
      </section>

      {/* Low resource explained */}
      <section aria-labelledby="lr-h" className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <Reveal>
            <p className="eyebrow">The idea the session turns on</p>
            <h2 id="lr-h" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Not all languages are equal in AI — and that is a fact about data, not about languages
            </h2>
          </Reveal>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              These systems learn from enormous quantities of text and speech. English has an extraordinary amount
              of it. Irish has a great deal less — not because it is a lesser language, but because far less Irish
              has been written down, digitised, transcribed and made available in a form a machine can read.
            </p>
            <p>
              That is what <strong className="font-semibold text-ink">low-resource</strong> means. It is a
              description of the training material, not a judgement about the language, its speakers, or its future.
            </p>
            <p>
              It has a practical consequence that participants feel immediately: the same tool is sharper in English
              than in Irish. It will still produce Irish confidently. Confidence is not the same as quality — the
              same lesson as Session 1, arriving in a new place.
            </p>
            <p className="border-l-2 border-ink pl-5 font-display text-xl leading-snug text-ink">
              Data matters. But data is not the whole story — cultural and dialectal adaptation matter too, and they
              do not arrive automatically with more of it.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow framework */}
      <section aria-labelledby="wf-h" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">The workflow</p>
            <h2 id="wf-h" className="mt-3 text-3xl font-semibold sm:text-4xl">How Irish content actually gets made</h2>
          </Reveal>
          <div className="mt-8"><FrameworkCard f={irishFw} i={3} /></div>
          <div className="mt-8">
            <h3 className="font-display text-2xl font-semibold">The bilingual content laboratory</h3>
            <div className="mt-5"><BilingualLab /></div>
          </div>
        </div>
      </section>

      {/* From translation to creation */}
      <section aria-labelledby="tc-h" className="wrap py-16">
        <Reveal>
          <p className="eyebrow">The shift</p>
          <h2 id="tc-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">From translation to creation</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            The habit in most bilingual organisations is: write it in English, then translate. It is efficient and
            it quietly makes Irish a second-class output — always derived, never original.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {[
            { t: 'The old default', s: ['Write in English', 'Translate to Irish', 'Publish both'], note: 'Irish arrives second, shaped by English word order and English assumptions. Readers can tell.', emphasis: false },
            { t: 'Irish first', s: ['Write in Irish', 'Human validation', 'Write a proper English version', 'Publish both'], note: 'The Irish is original and the English is a real piece of writing rather than a mirror. AI makes this affordable for the first time.', emphasis: true },
          ].map(row => (
            <div key={row.t} className={`border-t-2 pt-5 ${row.emphasis ? 'border-ink' : 'border-ink/25'}`}>
              <p className="kicker">{row.t}</p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-ink-soft">
                {row.s.map((x, i) => (
                  <li key={x} className="flex items-center gap-2">
                    {x}
                    {i < row.s.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-ink-faint" aria-hidden />}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[.98rem] leading-relaxed text-ink-soft">{row.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section aria-labelledby="op-h" className="wrap py-16">
        <Reveal>
          <p className="eyebrow">Where AI can add Irish, not replace it</p>
          <h2 id="op-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Ten places Irish usually loses to the clock
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            In most bilingual organisations Irish is not dropped on principle. It is dropped because there was not
            time this week. Every item below is a place where AI can buy that time back — and every one of them
            still ends with a person.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-x-8 gap-y-5 border-t border-ink/15 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {IRISH_OPPORTUNITIES.map(o => (
            <li key={o.label}>
              <p className="font-display text-lg font-semibold leading-snug">{o.label}</p>
              <p className="mt-1.5 text-[.95rem] leading-relaxed text-ink-soft">{o.body}</p>
            </li>
          ))}
        </ul>
        <p className="pull-quote mt-10 border-t border-ink/15 pt-6 text-ink">
          AI-generated Irish needs human linguistic and cultural validation.
        </p>
      </section>

      {/* Contribution */}
      <section aria-labelledby="ct-h" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">Irish in the AI economy</p>
            <h2 id="ct-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              What can your business actually contribute?
            </h2>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
              This is the part participants tend not to expect: they are not only consumers of Irish-language
              technology. What they publish is part of what the next generation of systems will learn from.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-6 border-t border-ink/15 pt-6 sm:grid-cols-2">
            {CONTRIBUTIONS.map(c => (
              <div key={c.label}>
                <p className="font-display text-lg font-semibold">{c.label}</p>
                <p className="mt-1.5 text-[.98rem] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ex-h" className="wrap space-y-12 py-16">
        <div>
          <h2 id="ex-h" className="font-display text-2xl font-semibold">Irish-first business</h2>
          <div className="mt-5"><IrishFirstBusiness /></div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">What should never be automated?</h2>
          <div className="mt-5"><NeverAutomate /></div>
        </div>
      </section>

      <section className="wrap py-10">
        <FeedbackLink />
      </section>

      <section className="border-y border-ink/15 bg-atlantic text-paper">
        <div className="wrap py-16 text-center sm:py-20">
          <p className="font-display text-2xl leading-snug sm:text-4xl">The future is not predetermined.</p>
          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-paper/80">
            What Irish looks like in the AI economy depends partly on what the organisations in this room decide to do.
          </p>
        </div>
      </section>
    </div>
  )
}

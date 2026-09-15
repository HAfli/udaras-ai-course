import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useHashRoute } from '../hooks/useHashRoute'

const LINKS = [
  { to: '#/', key: 'programme' as const },
  { to: '#/frameworks', key: 'frameworks' as const },
  { to: '#/ai-act', key: 'aiAct' as const },
  { to: '#/irish-ai', key: 'irishAI' as const },
  { to: '#/research', key: 'research' as const },
  { to: '#/plan', key: 'plan' as const },
]

export function Nav() {
  const { t, lang, setLang } = useLang()
  const { hash } = useHashRoute()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => setOpen(false), [hash])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        solid ? 'border-b border-ink/15 bg-paper/95 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center gap-6">
        <a href="#/" className="min-w-0">
          <span className="block truncate font-display text-[1.05rem] font-semibold leading-tight">
            Building AI Confidence
          </span>
          <span className="block truncate text-[.66rem] uppercase tracking-[.16em] text-ink-mute">
            MTU · Údarás na Gaeltachta
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {LINKS.map(l => {
            const on = hash === l.to || (l.to !== '#/' && hash.startsWith(l.to))
            return (
              <a
                key={l.to}
                href={l.to}
                aria-current={on ? 'page' : undefined}
                className={`border-b-2 py-1 text-[.82rem] font-semibold uppercase tracking-[.06em] transition-colors ${
                  on ? 'border-ink text-ink' : 'border-transparent text-ink-mute hover:text-ink'
                }`}
              >
                {t(l.key)}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <div role="group" aria-label="Language" className="flex items-center gap-0.5 text-[.72rem] font-semibold">
            {(['ga', 'en'] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-0.5">
                {i > 0 && <span aria-hidden className="text-ink-faint">/</span>}
                <button
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-1 py-1.5 uppercase tracking-wider transition-colors ${
                    lang === l ? 'text-ink underline decoration-2 underline-offset-4' : 'text-ink-faint hover:text-ink-mute'
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <button
            className="btn-quiet lg:hidden"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Main" className="border-t border-ink/15 bg-paper-card lg:hidden">
          <div className="wrap flex flex-col py-2">
            {LINKS.map(l => (
              <a key={l.to} href={l.to} className="border-b border-ink/10 py-3 text-sm font-medium text-ink-soft last:border-0">
                {t(l.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

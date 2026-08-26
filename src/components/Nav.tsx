import { motion, useReducedMotion } from 'framer-motion'
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
  const reduce = useReducedMotion()

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
        solid ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center gap-4">
        <a href="#/" className="group flex min-w-0 items-center gap-3">
          <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-moss-700 text-[.65rem] font-bold tracking-tight text-paper">
            AI
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[.95rem] font-semibold leading-tight">
              Building AI Confidence
            </span>
            <span className="block truncate text-[.68rem] uppercase tracking-[.14em] text-ink-mute">
              MTU · Údarás na Gaeltachta
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
          {LINKS.map(l => {
            const on = hash === l.to || (l.to !== '#/' && hash.startsWith(l.to))
            return (
              <a
                key={l.to}
                href={l.to}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  on ? 'text-moss-700' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t(l.key)}
                {on && (
                  <motion.span
                    layoutId={reduce ? undefined : 'nav-pill'}
                    className="absolute inset-0 -z-10 rounded-full bg-moss-100/70"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <div
            role="group"
            aria-label="Language"
            className="flex items-center overflow-hidden rounded-full border border-ink/15 text-[.72rem] font-semibold"
          >
            {(['ga', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1.5 uppercase tracking-wider transition-colors ${
                  lang === l ? 'bg-moss-700 text-paper' : 'text-ink-mute hover:text-ink'
                }`}
              >
                {l}
              </button>
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
        <nav aria-label="Main" className="border-t border-ink/10 bg-paper-card lg:hidden">
          <div className="wrap flex flex-col py-2">
            {LINKS.map(l => (
              <a key={l.to} href={l.to} className="border-b border-ink/5 py-3 text-sm font-medium text-ink-soft last:border-0">
                {t(l.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

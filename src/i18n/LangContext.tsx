import { createContext, useContext, useState, useCallback, useEffect, Fragment, type ReactNode } from 'react'
import { UI, type UIKey } from './strings'
import { setCurrentLang, pick, flagged, type Lang, type Bilingual } from './lang'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (k: UIKey) => string
  /** Resolve a { ga, en } content pair for the current language — one language only. */
  tx: (v: Bilingual) => { text: string; flagged: boolean }
}

const LangCtx = createContext<Ctx | null>(null)
const KEY = 'udaras-lang'

function initialLang(): Lang {
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ga') return s } catch { /* storage unavailable */ }
  return 'ga' // Irish is the course's first language: the site opens in Irish
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  setCurrentLang(lang) // before any child renders, so tr()/pick() resolve to this language

  const setLang = useCallback((l: Lang) => {
    setCurrentLang(l)
    setLangState(l)
    try { localStorage.setItem(KEY, l) } catch { /* a remembered choice is only a convenience */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'ga' ? 'Muinín in AI a Thógáil in Ionad Oibre na Gaeltachta' : 'Building AI Confidence in the Gaeltacht Workplace'
  }, [lang])

  const t = useCallback((k: UIKey) => UI[lang][k], [lang])
  const tx = useCallback((v: Bilingual) => ({ text: pick(v), flagged: flagged(v) }), [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  // Re-keying on the language re-renders the whole tree in the new language, including
  // components that read tr()/pick() without subscribing to this context.
  return (
    <LangCtx.Provider value={{ lang, setLang, t, tx }}>
      <Fragment key={lang}>{children}</Fragment>
    </LangCtx.Provider>
  )
}

export function useLang() {
  const c = useContext(LangCtx)
  if (!c) throw new Error('useLang must be used inside LangProvider')
  return c
}

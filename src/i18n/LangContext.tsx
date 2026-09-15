import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { UI, type Lang, type UIKey } from './strings'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (k: UIKey) => string
  /** Resolve a bilingual content object for the current language. */
  tx: (v: { ga?: string; en: string; needsValidation?: boolean }) => { text: string; flagged: boolean }
}

const LangCtx = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  // Irish is a primary language of this course, not a fallback — the
  // site opens in Irish. The toggle still switches interface chrome
  // (nav labels, tab labels) freely in either direction.
  const [lang, setLangState] = useState<Lang>('ga')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
  }, [])

  // Keep <html lang> correct for the initial render too, not only after
  // the toggle is used.
  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const t = useCallback((k: UIKey) => UI[lang][k], [lang])

  const tx = useCallback(
    (v: { ga?: string; en: string; needsValidation?: boolean }) => {
      if (lang === 'ga' && v.ga) return { text: v.ga, flagged: !!v.needsValidation }
      return { text: v.en, flagged: false }
    },
    [lang],
  )

  return <LangCtx.Provider value={{ lang, setLang, t, tx }}>{children}</LangCtx.Provider>
}

export function useLang() {
  const c = useContext(LangCtx)
  if (!c) throw new Error('useLang must be used inside LangProvider')
  return c
}

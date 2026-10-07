/* Language resolution — GA = Gaeilge amháin, EN = English only.
 *
 * Exactly one language is rendered at a time; the other is never put in the DOM.
 *  - tr(en)       plain participant-facing text, written in English in the source and
 *                 looked up in the Irish catalogue (./ga.ts) when GA is selected.
 *  - pick(v)      a { ga, en } content pair: the selected language's value.
 *  - <Tr>         like tr(), but **bold** spans in the string render as <strong>.
 *
 * There is no silent cross-language fallback: a GA lookup that finds no Irish is recorded in
 * window.__i18nMissing (and warned in development). The language tests crawl every route in GA
 * mode and fail on any recorded miss, so the catalogue must be complete before release.
 * The current language lives here (not only in React context) so that data helpers can call
 * tr()/pick() anywhere; LangProvider re-keys the tree on a switch so everything re-renders. */
import { GA } from './ga'

export type Lang = 'ga' | 'en'
export type Bilingual = { ga?: string; en: string; needsValidation?: boolean }

let current: Lang = 'ga'
export const setCurrentLang = (l: Lang) => { current = l }
export const getLang = (): Lang => current

declare global { interface Window { __i18nMissing?: Set<string> } }

function missing(key: string) {
  if (typeof window === 'undefined') return
  ;(window.__i18nMissing ??= new Set()).add(key)
  if (import.meta.env.DEV) console.warn('[i18n] no Irish for:', key)
}

function fill(s: string, vars?: Record<string, string | number>) {
  return vars ? s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : s
}

/** Irish for an English source string (GA mode), or the English itself (EN mode). */
export function tr(en: string, vars?: Record<string, string | number>): string {
  if (current === 'en') return fill(en, vars)
  const ga = GA[en]
  if (ga === undefined) { missing(en); return fill(en, vars) }
  return fill(ga, vars)
}

/** The selected language's side of a { ga, en } pair. An absent `ga` is looked up by its English. */
export function pick(v: Bilingual): string {
  if (current === 'en') return v.en
  return v.ga ?? tr(v.en)
}

/** True when this pair's Irish is still awaiting native-speaker validation (GA mode only). */
export function flagged(v: Bilingual): boolean {
  return current === 'ga' && !!v.ga && !!v.needsValidation
}

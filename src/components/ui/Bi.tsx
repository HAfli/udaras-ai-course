import { tr, pick, flagged, getLang, type Bilingual } from '../../i18n/lang'

/** A quiet mark on Irish that is still awaiting native-speaker validation (GA mode only). */
function ValidationMark() {
  const label = tr('Irish awaiting linguistic validation')
  return (
    <span className="validation-mark" title={label}>
      <span aria-hidden>†</span>
      <span className="sr-only"> ({label})</span>
    </span>
  )
}

/** Renders a { ga, en } content value in the SELECTED language only — GA shows Irish, EN shows
 *  English. The other language is not rendered at all. (`compact` is kept for call-site
 *  compatibility; both forms now render a single line.) */
export function Bi({ v, className }: { v: Bilingual; className?: string; compact?: boolean }) {
  return (
    <span className={className}>
      {pick(v)}
      {flagged(v) && <ValidationMark />}
    </span>
  )
}

/** Irish-led line (e.g. a strapline or principle). GA: the Irish. EN: its English (`en`, or the
 *  English given in the catalogue's reverse entry). */
export function GaLine({ ga, en, needsValidation, className }: { ga: string; en?: string; needsValidation?: boolean; className?: string }) {
  if (getLang() === 'en') return <span className={className}>{en ?? tr(ga)}</span>
  return (
    <span className={`${className ?? ''} gaeilge`}>
      {ga}
      {needsValidation && <ValidationMark />}
    </span>
  )
}

/** tr() with **bold** spans rendered as <strong>. */
export function Tr({ k, vars }: { k: string; vars?: Record<string, string | number> }) {
  const parts = tr(k, vars).split(/\*\*(.+?)\*\*/g)
  return <>{parts.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}</>
}

import { FileDown } from 'lucide-react'
import { DOWNLOADS } from '../data/downloads'
import { tr, getLang } from '../i18n/lang'

/** The PDF downloads for one session. PDF only — see src/data/downloads.ts. Labels in the selected language only. */
export function SessionDownloads({ id, heading = true }: { id: 's1' | 's2' | 's3'; heading?: boolean }) {
  const items = DOWNLOADS[id]
  const n = id.slice(1)
  const ga = getLang() === 'ga'
  return (
    <section aria-labelledby={heading ? `dl-${id}` : undefined} aria-label={heading ? undefined : tr('Session {n} downloads', { n })}>
      {heading && (
        <>
          <h2 id={`dl-${id}`} className="kicker">{tr('Session {n} downloads (PDF)', { n })}</h2>
          <p className="mt-2 text-sm text-ink-soft">{tr('The same files for everyone — in the room and on Teams.')}</p>
        </>
      )}
      <ul className="mt-3 flex flex-wrap gap-3">
        {items.map(d => {
          const label = ga ? d.ga : d.en
          const pages = ga ? `${d.pages} lch.` : `${d.pages} pp.`
          return (
            <li key={d.file}>
              <a href={`${import.meta.env.BASE_URL}${d.file}`} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex"
                 aria-label={tr('Download Session {n}: {label} (PDF, {p} pages)', { n, label: ga ? d.gaDetail : d.enDetail, p: d.pages })}>
                <FileDown className="h-4 w-4" aria-hidden />
                <span>{label} <span className="text-xs opacity-80">(PDF, {pages})</span></span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

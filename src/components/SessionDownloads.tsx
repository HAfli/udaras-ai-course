import { FileDown } from 'lucide-react'
import { DOWNLOADS } from '../data/downloads'

/** The PDF downloads for one session. PDF only — see src/data/downloads.ts. */
export function SessionDownloads({ id, heading = true }: { id: 's1' | 's2' | 's3'; heading?: boolean }) {
  const items = DOWNLOADS[id]
  const n = id.slice(1)
  return (
    <section aria-labelledby={heading ? `dl-${id}` : undefined} aria-label={heading ? undefined : `Session ${n} downloads`}>
      {heading && (
        <>
          <h2 id={`dl-${id}`} className="kicker">Íoslódáil · Session {n} downloads (PDF)</h2>
          <p className="mt-2 text-sm text-ink-soft">The same files for everyone — in the room and on Teams.</p>
        </>
      )}
      <ul className="mt-3 flex flex-wrap gap-3">
        {items.map(d => (
          <li key={d.file}>
            <a href={`${import.meta.env.BASE_URL}${d.file}`} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex"
               aria-label={`Download Session ${n} ${d.en} (PDF, ${d.pages} pages)`}>
              <FileDown className="h-4 w-4" aria-hidden />
              <span><span lang="ga">{d.ga}</span> · {d.en.split(' — ')[0]} <span className="text-xs opacity-80">(PDF, {d.pages} pp.)</span></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

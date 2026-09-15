import { ExternalLink, PlayCircle, ShieldAlert } from 'lucide-react'
import type { MultimediaResource } from '../data/multimedia'

export function MultimediaResourceCard({ r }: { r: MultimediaResource }) {
  const isPlaceholder = r.verified === false

  return (
    <div className="py-5">
      <div className="flex items-start gap-2.5">
        {isPlaceholder ? (
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden />
        ) : (
          <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute" aria-hidden />
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{r.title}</p>
          <p className="mt-1 text-[.85rem] leading-relaxed text-ink-soft">{r.description}</p>
        </div>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-[.72rem] text-ink-mute">
        {r.source && (<><dt className="font-semibold">Source</dt><dd>{r.source}</dd></>)}
        {r.durationLabel && (<><dt className="font-semibold">Length</dt><dd>{r.durationLabel}</dd></>)}
        {r.liveUseSuitable === false && (<><dt className="font-semibold">Live use</dt><dd>Not used live — between-session link only</dd></>)}
      </dl>

      {r.questionWhileWatching && (
        <p className="mt-2.5 border-l-2 border-ink/20 pl-3 text-[.82rem] italic leading-relaxed text-ink-mute">
          While watching: {r.questionWhileWatching}
        </p>
      )}

      <p className="mt-2.5 text-[.78rem] leading-relaxed text-ink-faint">
        <span className="font-semibold">If unavailable: </span>{r.fallback}
      </p>

      {r.url ? (
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[.82rem] font-semibold text-atlantic hover:underline"
        >
          Watch on {r.source} <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      ) : (
        <p className="mt-3 text-[.78rem] font-semibold text-ink-faint">No verified source — placeholder only.</p>
      )}
      {r.attribution && r.licence && (
        <p className="mt-2 text-[.68rem] text-ink-faint">{r.attribution} · {r.licence}</p>
      )}
    </div>
  )
}

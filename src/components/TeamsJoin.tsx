import { Video } from 'lucide-react'
import { S3_TEAMS } from '../data/teams'
import { tr } from '../i18n/lang'

/** Microsoft Teams join link — Session 3 only. Only the link is published, no access codes. */
export function TeamsJoin() {
  return (
    <section aria-labelledby="teams-s3" className="mt-8 max-w-3xl border-2 border-current p-5">
      <h2 id="teams-s3" className="text-[.72rem] font-semibold uppercase tracking-[.16em]">{tr('Microsoft Teams meeting')}</h2>
      <p className="mt-3">
        <a href={S3_TEAMS.join} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 bg-paper px-4 py-2 font-semibold text-ink underline-offset-4 hover:underline">
          <Video className="h-4 w-4" aria-hidden /> {tr('Join the Session 3 meeting online')}
        </a>
      </p>
      <p className="mt-3 text-sm opacity-90">{tr('Friday 9 October 2026 · 10:00–13:00 (Irish time). In person: Campas Íosagáin.')}</p>
    </section>
  )
}

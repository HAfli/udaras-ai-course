import { Video } from 'lucide-react'
import { S3_TEAMS } from '../data/teams'

/** Microsoft Teams joining details — Session 3 only. */
export function TeamsJoin() {
  return (
    <section aria-labelledby="teams-s3" className="mt-8 max-w-3xl border-2 border-current p-5">
      <h2 id="teams-s3" className="text-[.72rem] font-semibold uppercase tracking-[.16em]">
        <span lang="ga">Glac páirt ar líne trí Microsoft Teams</span> · Join online via Microsoft Teams
      </h2>
      <p className="mt-3">
        <a href={S3_TEAMS.join} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 bg-paper px-4 py-2 font-semibold text-ink underline-offset-4 hover:underline">
          <Video className="h-4 w-4" aria-hidden /> Join the Session 3 Teams meeting
        </a>
      </p>
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="font-semibold">Meeting ID</dt><dd className="font-mono">{S3_TEAMS.meetingId}</dd>
        <dt className="font-semibold">Passcode</dt><dd className="font-mono">{S3_TEAMS.passcode}</dd>
      </dl>
      <p className="mt-3 text-sm opacity-90">Friday 9 October 2026 · 10:00–13:00 (Irish time). In person: Campas Íosagáin.</p>
    </section>
  )
}

import { useState } from 'react'

const COLS = [
  { id: 'task', label: 'Task', ph: 'Weekly newsletter' },
  { id: 'time', label: 'Time now', ph: '90 min' },
  { id: 'ai', label: 'AI opportunity', ph: 'First draft + Irish version' },
  { id: 'risk', label: 'Risk', ph: 'Wrong dates; stiff Irish' },
  { id: 'review', label: 'Human review', ph: 'Máire checks facts + Irish' },
]

export function UseCaseTable() {
  const [rows, setRows] = useState<Record<string, string>[]>(Array.from({ length: 5 }, () => ({})))
  const set = (i: number, c: string, v: string) =>
    setRows(p => p.map((r, ri) => (ri === i ? { ...r, [c]: v } : r)))

  return (
    <div>
      <div className="prose-note"><p>
        Five tasks from your own week. If you cannot fill the last column, it is not a use case yet — that is the
        test the exercise is really applying.
      </p></div>

      <div className="scrollbar-thin mt-5 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-sm">
          <thead>
            <tr>
              {COLS.map(c => (
                <th key={c.id} scope="col" className="border-b border-ink/15 pb-2 text-left text-[.7rem] font-bold uppercase tracking-wider text-ink-mute">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="group">
                {COLS.map(c => (
                  <td key={c.id} className="border-b border-ink/8 py-1 pr-3">
                    <input
                      value={r[c.id] ?? ''}
                      onChange={e => set(i, c.id, e.target.value)}
                      placeholder={i === 0 ? c.ph : ''}
                      aria-label={`${c.label}, row ${i + 1}`}
                      className="w-full rounded-md border-0 bg-transparent px-2 py-2 placeholder:text-ink-faint/70 focus:bg-moss-50 focus:outline-none focus:ring-1 focus:ring-moss-400"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

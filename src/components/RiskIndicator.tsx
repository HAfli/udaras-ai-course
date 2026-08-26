const MAP = {
  green: { label: 'Low risk', symbol: '●', cls: 'border-risk-green/40 bg-moss-50 text-risk-green' },
  amber: { label: 'Check first', symbol: '◐', cls: 'border-risk-amber/40 bg-lichen-soft/50 text-risk-amber' },
  red:   { label: 'Don’t do it', symbol: '■', cls: 'border-risk-red/40 bg-red-50 text-risk-red' },
} as const

/** Never colour alone: every state carries a shape and a word. */
export function RiskIndicator({ level, note }: { level: keyof typeof MAP; note?: string }) {
  const m = MAP[level]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[.72rem] font-bold uppercase tracking-wider ${m.cls}`}>
      <span aria-hidden>{m.symbol}</span>
      {m.label}
      {note && <span className="font-medium normal-case tracking-normal opacity-75">· {note}</span>}
    </span>
  )
}

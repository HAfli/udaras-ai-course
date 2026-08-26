/** Subtle topographic motif — a landscape reference without a postcard. */
export function Contours({ className = '' }: { className?: string }) {
  const lines = Array.from({ length: 9 }, (_, i) => i)
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      fill="none"
    >
      {lines.map(i => {
        const y = 90 + i * 34
        const amp = 26 + i * 5
        return (
          <path
            key={i}
            d={`M -40 ${y} C 200 ${y - amp}, 380 ${y + amp}, 600 ${y - amp * 0.5} S 1000 ${y + amp * 0.8}, 1240 ${y - amp * 0.3}`}
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? 1.1 : 0.7}
            opacity={0.14 - i * 0.008}
          />
        )
      })}
    </svg>
  )
}

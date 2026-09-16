/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Clean campaign off-white — the "quiet" state between bold
        // colour-field sections, not a card background.
        paper:   { DEFAULT: '#F6F3EC', deep: '#EAE6DA', card: '#FBFAF6' },
        ink:     { DEFAULT: '#12181B', soft: '#3A4448', mute: '#4C5559', faint: '#5A6367' },
        // The campaign palette — used boldly, in large full-section colour
        // fields (hero, chapter breaks, statement moments), not as small
        // UI accents. Each hue has one job: atlantic is the primary
        // campaign field, emerald marks Irish-identity moments, gold is
        // energy/action (CTAs, numerals), coral is one rare emphasis.
        atlantic: { DEFAULT: '#0A3D5C', deep: '#072A40', soft: '#DCE7EE' },
        emerald:  { DEFAULT: '#0B6E4F', deep: '#084F39', soft: '#DCEEE5' },
        gold:     { DEFAULT: '#F2B705', deep: '#C99400', text: '#9A7200', soft: '#FDF2CC' },
        coral:    { DEFAULT: '#D6553F', deep: '#B03F2C', soft: '#F8E0DA' },
        // Kept only for exercises/reference pages that rely on it for
        // semantic meaning (a correct-answer highlight, a caution note,
        // unverified-content marking) — never used as decorative brand
        // colour on an editorial surface.
        moss:    { 50:'#EEF4EF', 100:'#D8E7DC', 200:'#B0CCB9', 300:'#7FAC8F', 400:'#4E8767', 500:'#2E6B4F', 600:'#235640', 700:'#1B4433', 800:'#143427', 900:'#0E241B' },
        lichen:  { DEFAULT: '#B08430', soft: '#E8D9B6', deep: '#7A5A1E' },
        heather: { DEFAULT: '#544868', soft: '#E3DDEA' },
        risk: { green:'#2E6B4F', amber:'#8A5A16', red:'#9E3B2E' },
      },
      fontFamily: {
        display: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { content: '78rem', prose: '42rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(28,37,33,.05), 0 8px 24px -12px rgba(28,37,33,.18)',
        lift: '0 2px 4px rgba(28,37,33,.06), 0 18px 40px -18px rgba(28,37,33,.30)',
      },
      borderRadius: { xl2: '1.25rem' },
      opacity: { 8:'0.08', 12:'0.12', 15:'0.15', 18:'0.18', 35:'0.35', 45:'0.45', 55:'0.55', 65:'0.65', 85:'0.85' },
    },
  },
  plugins: [],
}

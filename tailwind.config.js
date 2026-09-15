/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // A quieter, greyer neutral — closer to raw paper stock or a
        // gallery wall than a "warm cream" (the single most recognisable
        // AI-product background tell). Contrast-checked against every
        // ink shade below.
        paper:   { DEFAULT: '#EBE9E2', deep: '#DEDBCF', card: '#F7F6F1' },
        ink:     { DEFAULT: '#1C2521', soft: '#3E4A44', mute: '#4F5C57', faint: '#596661' },
        // Kept for the exercises and reference pages that already rely on
        // it for semantic meaning (risk/caution, unverified-content
        // marking) — no longer used as a "brand" colour on the editorial
        // surfaces (Hero, Journey, Landing, Story).
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
      maxWidth: { content: '78rem' },
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

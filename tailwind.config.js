/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white / raw paper stock, not a bakery cream.
        paper:   { DEFAULT: '#EBE9E2', deep: '#DEDBCF', card: '#F7F6F1' },
        ink:     { DEFAULT: '#1C2521', soft: '#3E4A44', mute: '#4F5C57', faint: '#596661' },
        // The single sparse identity accent — a deep, desaturated Atlantic
        // slate blue, the colour of the sea and sky already present in the
        // real course photography, used only for links and the rare
        // emphasis word. Not a UI brand colour: no fills, no outlines,
        // no badges.
        atlantic: { DEFAULT: '#33475A', deep: '#1F2E3B', soft: '#DCE3E8' },
        // Kept only for exercises/reference pages that rely on it for
        // semantic meaning (a correct-answer highlight, a caution note,
        // unverified-content marking) — never used as decorative brand
        // colour on an editorial surface (Hero, Journey, Landing, Story).
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

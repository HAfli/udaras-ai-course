/* Site test, run once per language: sessions, dates, PDF downloads, the Session 3 Teams link (no meeting ID or
 * passcode anywhere), Session 2 approval wording, exercises, accessibility (axe: no serious/critical issues),
 * console errors, 375 px layout, and that retired files are no longer served.
 * Usage: node tests/site.mjs [baseUrl]   (default http://localhost:4179/) */
import { chromium } from 'playwright'
import fs from 'fs'

const base = process.argv[2] || 'http://localhost:4179/'
const axe = fs.readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8')
const TEAMS = 'https://teams.microsoft.com/meet/340159189301354?p=MWXlx4XdeJcIGHqvo4'
// Never publish access codes: no Teams meeting-ID pattern (15 digits in groups of three) and no ID/passcode labels.
const CODES = /\b\d{3} \d{3} \d{3} \d{3} \d{3}\b|Passcode|Meeting ID|Pasfhocal|Pascód|ID an chruinnithe/i
const EXPECT = {
  s1: ['Session-1-Participant-Package.pdf', 'Session-1-Slides.pdf'],
  s2: ['Session-2-Participant-Package.pdf', 'Session-2-Slides.pdf'],
  s3: ['Session-3-Participant-Package.pdf', 'Session-3-Slides.pdf', 'Session-3-Source-Pack.pdf'],
}
const T = {
  en: { dates: { s1: '18 September 2026', s2: '28 September 2026', s3: '9 October 2026' }, teamsHead: 'Microsoft Teams meeting', teamsLink: 'Join the Session 3 meeting online',
    landing: ['Three sessions, one journey', 'Understand and experiment', 'Use safely and critically', 'Choose, ground, verify and adapt'],
    sourcePack: 'Supporting Source Pack', approval: ['Approval', 'Not approved yet'] },
  ga: { dates: { s1: '18 Meán Fómhair 2026', s2: '28 Meán Fómhair 2026', s3: '9 Deireadh Fómhair 2026' }, teamsHead: 'Cruinniú Microsoft Teams', teamsLink: 'Glac páirt ar líne trí Microsoft Teams',
    landing: ['Trí sheisiún, turas amháin', 'Tuig agus bain triail as', 'Úsáid go sábháilte agus go criticiúil', 'Roghnaigh, bunaigh, fíoraigh agus oiriúnaigh'],
    sourcePack: 'An Pacáiste Foinsí', approval: ['Ceadú', 'Gan cheadú go fóill'] },
}
const S3_EX = ['s3-compare', 's3-notebook', 's3-irish', 's3-dialect', 's3-irishdocs', 's3-which', 's3-settings', 's3-scenario', 's3-toolkit', 's3-reflection', 's3-translate']

const b = await chromium.launch()
const fails = []
const ok = (c, m) => { if (!c) fails.push(m) }
for (const lang of ['ga', 'en']) {
  const L = T[lang]
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' })
  await ctx.addInitScript(l => { try { localStorage.setItem('udaras-lang', l) } catch {} }, lang)
  const p = await ctx.newPage()
  const errs = []
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message))
  const go = async r => { await p.goto(base + r); await p.reload(); await p.waitForTimeout(900) }
  const body = () => p.locator('body').innerText()
  const audit = async label => {
    await p.addScriptTag({ content: axe })
    const r = await p.evaluate(async () => (await axe.run(document, { resultTypes: ['violations'] })).violations
      .filter(v => ['critical', 'serious'].includes(v.impact)).map(v => v.id + ':' + v.nodes.length))
    ok(r.length === 0, `${lang} axe ${label} ${r}`)
  }
  for (const s of ['s1', 's2', 's3']) {
    await go('#/session/' + s); const t = await body()
    ok(t.toLowerCase().includes(L.dates[s].toLowerCase()), `${lang} date ${s}`)
    ok(!CODES.test(t), `${lang} Teams codes visible on ${s}`)
    const n = await p.locator(`a[href="${TEAMS}"]`).count()
    ok(s === 's3' ? n === 1 && t.toLowerCase().includes(L.teamsHead.toLowerCase()) && t.includes(L.teamsLink) : n === 0, `${lang} Teams link ${s}`)
    const hrefs = [...new Set(await p.locator('a[href$=".pdf"]').evaluateAll(as => as.map(a => a.getAttribute('href'))))]
    ok(JSON.stringify(hrefs.map(h => h.split('/').pop()).sort()) === JSON.stringify([...EXPECT[s]].sort()), `${lang} PDF set ${s}: ${hrefs}`)
    for (const h of hrefs) { const r = await p.request.get(new URL(h, p.url()).href); ok(r.status() === 200 && (r.headers()['content-type'] || '').includes('pdf'), `${lang} PDF ${h} ${r.status()}`) }
    ok(!/ormheas|Gan Ceadú|Pacáiste Cáis/.test(t), `${lang} stale wording on ${s}`)
    if (s === 's3') {
      const tb = await p.locator('#teams-s3').boundingBox(), dl = await p.locator('#dl-s3').boundingBox()
      ok(tb && dl && tb.y < dl.y, `${lang} Teams block above downloads`)
      ok(t.includes(L.sourcePack), `${lang} source pack label`)
      const a = p.locator(`a[href="${TEAMS}"]`); ok(await a.isVisible() && (await a.getAttribute('target')) === '_blank', `${lang} Teams link clickable`)
    }
    await audit(s)
  }
  await go('#/'); let t = await body()
  for (const x of L.landing) ok(t.includes(x), `${lang} landing: ${x}`)
  ok(!CODES.test(t), `${lang} landing Teams codes`)
  ok(new Set(await p.locator('a[href$=".pdf"]').evaluateAll(as => as.map(a => a.getAttribute('href')))).size === 7, `${lang} landing has 7 PDFs`)
  for (const s of ['s1', 's2', 's3']) ok(await p.locator(`a[href="#/session/${s}"]`).count() > 0, `${lang} landing link ${s}`)
  await audit('landing')
  for (const r of ['#/frameworks', '#/ai-act', '#/irish-ai', '#/research', '#/plan', '#/between/b1', '#/between/b2', '#/session/prep', '#/session/s4']) {
    await go(r); ok((await p.locator('h1').count()) > 0, `${lang} h1 ${r}`); await audit(r)
  }
  await go('#/session/s2/exercises/e9c'); t = await body()
  ok(L.approval.every(x => t.includes(x)), `${lang} Session 2 approval wording`)
  // Gemini Notebook exercise: eight individual source files, each the exact file in public/session-3-sources/
  await go('#/session/s3/exercises/s3-notebook')
  const files = await p.locator('[role=dialog] a[href*="session-3-sources/"]').evaluateAll(as => as.map(a => [a.getAttribute('href'), a.textContent, a.getAttribute('aria-label')]))
  ok(files.length === 8, `${lang} eight source-file links (found ${files.length})`)
  ok((await p.locator('#s3-source-files').innerText()).length > 0 && (await p.locator('#s3-source-files').innerText()).includes(lang === 'ga' ? 'Íoslódáil na hocht gcomhad foinse' : 'Download the eight source files'), `${lang} source-file heading`)
  for (const [i, [h]] of files.entries()) {
    const name = `Source_${i + 1}.docx`
    ok(h.endsWith('session-3-sources/' + name), `${lang} link ${i + 1} -> ${h}`)
    const r = await p.request.get(new URL(h, p.url()).href)
    const local = fs.readFileSync(new URL('../public/session-3-sources/' + name, import.meta.url))
    ok(r.status() === 200 && Buffer.compare(Buffer.from(await r.body()), local) === 0, `${lang} ${name} served intact (${r.status()})`)
  }
  for (const ex of S3_EX) { await go('#/session/s3/exercises/' + ex); ok((await p.locator('[role=dialog]').count()) === 1, `${lang} dialog ${ex}`); await audit(ex) }
  await p.setViewportSize({ width: 375, height: 800 })
  for (const r of ['#/', '#/session/s1', '#/session/s2', '#/session/s3']) {
    await go(r); const d = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    ok(d <= 1, `${lang} 375px overflow ${r} +${d}`)
  }
  for (const old of ['session1-slides.pdf', 'Session_3_Source_Pack.zip', 'Session_1_Workshop_1_Can_AI_Help_Me.pdf']) {
    const r = await p.request.get(base + old); ok(!(r.status() === 200 && /pdf|zip/.test(r.headers()['content-type'] || '')), `old file served: ${old}`)
  }
  ok(errs.length === 0, `${lang} console errors: ${errs.slice(0, 3)}`)
  await ctx.close()
}
await b.close()
console.log(fails.length ? 'SITE TEST: FAIL\n' + fails.join('\n') : 'SITE TEST: PASS')
process.exit(fails.length ? 1 : 0)

/* Language-separation test: GA = Irish only, EN = English only.
 *
 * Renders every public route in each language (desktop, plus 375 px for the main pages), opens every
 * tab, exercise modal and collapsed section, and inspects the rendered DOM — visible text, screen-reader
 * text and aria-label / title / placeholder / alt — for prose in the other language.
 *   GA: fails on any Irish-catalogue miss (window.__i18nMissing) and on English prose.
 *   EN: fails on Irish prose.
 * Exempt: elements marked data-i18n-exempt (exercise artefacts that ARE in one language — e.g. the Irish
 * draft participants proofread, the English source participants compare — and citation titles),
 * <code>, URLs, e-mail addresses, and the proper names / product names listed below.
 *
 * Usage: node tests/language.mjs [baseUrl]   (default http://localhost:4179/; run `npx vite preview --port 4179` first)
 * Writes tests/.language-report.json (git-ignored) and exits 1 on failure. */
import { chromium } from 'playwright'
import fs from 'fs'

const base = process.argv[2] || 'http://localhost:4179/'

// Proper names, product names and fixed titles that legitimately appear in either language.
const NAMES = [
  'Údarás na Gaeltachta', 'Munster Technological University', 'Ollscoil Teicneolaíochta na Mumhan', 'Campas Íosagáin', 'Baile Bhuirne',
  'Comharchumann Chois Cuain', 'Comharchumann Forbartha Mhúscraí', 'Cois Cuain', 'Gaeltacht Mhúscraí', 'Múscraí', 'Mhúscraí',
  'Baile Mhúirne', 'Baile Mhic Íre', 'Béal Átha’n Ghaorthaidh', 'Cill na Martra', 'Cúil Aodha', 'Ré na nDoirí', 'Gaeltachta', 'Gaeltacht',
  'Haithem Afli', 'Mary Uí Choileáin', 'Seán Sampla', 'Ó Cuív', 'Brian Ó Cuív', 'Microsoft Teams', 'Microsoft Copilot', 'Copilot Notebooks',
  'Gemini Notebook', 'NotebookLM', 'ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Canva', 'PowerPoint', 'Word', 'Teams', 'Google', 'OpenAI',
  'Anthropic', 'Microsoft', 'Teanglann', 'Foclóir Gaeilge–Béarla', 'focloir.ie', 'Foras na Gaeilge', 'An Gramadóir', 'Gramadóir', 'Téarma',
  'Ionad na Gaeilge Labhartha', 'Caighdeán Oifigiúil', 'An Caighdeán Oifigiúil', 'Abair.ie', 'abair.ie', 'Fiontar', 'Gaeilge', 'MTU', 'AI', 'UCC',
  // quoted sign text, fictional organisations and people, a quoted proverb, an Irish place name
  'Fáilte', 'An Ceantar', 'Ár dTeanga', 'Ár bPobal', 'Lios na Scéalta', 'Peadar Ó Sé', 'Ní neart go cur le chéile', 'Tír Eoghain',
  'CIR COGHAIN', 'Halla an Phobail',
  // book titles, and the AI products' own English menu labels (Irish is not one of their interface languages)
  'The Irish of West Muskerry, Co. Cork: a phonetic study', 'The Irish of West Muskerry', 'Personalization and memory', 'Improve the model for everyone',
  'Help improve Claude', 'Training on conversation activity', 'Training on voice conversations', 'Instructions for Claude', 'Custom instructions', 'Data controls',
  'Temporary Chat', 'Incognito chat', 'Quick response', 'Think deeper', 'Personalization', 'Memory', 'Settings',
  // English sentence quoted as material to translate (Session 3 optional extension)
  'Our café will be closed on Monday for staff training. We apologise for any inconvenience.', 'Aoife', 'Máire', 'Siobhán Ní Bhriain', 'Comharchumann', 'Barry Masterson', 'Dr Haithem Afli',
]

const EN_WORDS = new Set(('the and of to are with your you for this that what how from will can not it be by or which when where who why has have was were ' +
  'should would there their they we our my about into than then but if at all only use each every also does don’t it’s its these those ' +
  'session sessions here more next back open close menu download slides participant package join meeting online').split(' '))
const GA_WORDS = new Set(('agus atá tá bhfuil níl ní conas cad cén cé leat agat mé tú seo sin freisin ach nó ag chun faoi ó don dá ar le na ' +
  'é í iad sé sí bhí beidh rud duine daoine seisiún seisiúin oscail dún íoslódáil sleamhnáin pacáiste rannpháirtí cleachtaí clár').split(' '))

function strip(s) {
  let t = ' ' + s + ' '
  for (const n of [...NAMES].sort((a, b) => b.length - a.length)) t = t.split(n).join(' ')
  return t.replace(/https?:\/\/\S+|\S+@\S+|\b[\w.-]+\.(ie|com|org|pdf|google)\b\S*/g, ' ')
}
const words = s => strip(s).toLowerCase().match(/[a-záéíóúA-ZÁÉÍÓÚ’']+/g) || []
function isEnglish(s) { const w = words(s); if (!w.length) return false; const en = w.filter(x => EN_WORDS.has(x)).length; const ga = w.filter(x => GA_WORDS.has(x)).length; return en >= 1 && en > ga }
function isIrish(s) { const w = words(s); if (!w.length) return false; const ga = w.filter(x => GA_WORDS.has(x)).length; const fada = w.filter(x => /[áéíóú]/.test(x)).length; const en = w.filter(x => EN_WORDS.has(x)).length
  return (ga >= 1 || fada >= 1) && ga + fada > en }

const ROUTES = ['#/', '#/frameworks', '#/ai-act', '#/irish-ai', '#/research', '#/plan', '#/session/prep', '#/session/s1', '#/session/s2',
  '#/session/s3', '#/session/s4', '#/between/b1', '#/between/b2']

const browser = await browser_()
async function browser_() { return chromium.launch() }
const report = { base, ga: { missing: [], leaks: [] }, en: { leaks: [] }, errors: [] }

async function collect(page) {
  return page.evaluate(() => {
    const out = []
    const skip = el => el.closest('[data-i18n-exempt], script, style, noscript, code, svg title')
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    for (let n; (n = w.nextNode());) { const t = n.nodeValue.replace(/\s+/g, ' ').trim(); if (t.length > 1 && !skip(n.parentElement)) out.push(t) }
    for (const el of document.body.querySelectorAll('[aria-label],[title],[placeholder],[alt]')) {
      if (skip(el)) continue
      for (const a of ['aria-label', 'title', 'placeholder', 'alt']) { const v = el.getAttribute(a); if (v && v.trim().length > 1) out.push(v.trim()) }
    }
    return out
  })
}

async function expandAll(page) {
  await page.evaluate(() => document.querySelectorAll('details').forEach(d => { d.open = true }))
  const btns = page.locator('button[aria-expanded="false"]:not([aria-label="Menu"]):not([aria-label="Roghchlár"])')
  const n = await btns.count()
  for (let i = 0; i < n; i++) { try { await btns.nth(0).click({ timeout: 800 }) } catch { break } }
}

// Click every ordinary control once (options, reveals, steps) so feedback text renders too.
async function clickAll(page, scopeSel) {
  const sel = `${scopeSel} button:visible:not([role=tab]):not([data-no-sweep])`
  for (let i = 0; i < 120; i++) {
    const b = page.locator(sel).nth(i)
    if (!(await b.count())) break
    const label = (await b.getAttribute('aria-label')) || ''
    if (/^(Close|Dún|Menu|Roghchlár)$/.test(label)) continue
    try { await b.click({ timeout: 600 }) } catch { /* detached or covered */ }
  }
}

async function sweep(lang, viewport) {
  const ctx = await browser.newContext({ viewport, reducedMotion: 'reduce' })
  await ctx.addInitScript(l => { try { localStorage.setItem('udaras-lang', l) } catch {} }, lang)
  const page = await ctx.newPage()
  page.on('pageerror', e => report.errors.push(`${lang} PAGEERROR ${e.message}`))
  page.on('console', m => { if (m.type() === 'error') report.errors.push(`${lang} console: ${m.text()}`) })
  const texts = new Map()
  const miss = new Set()
  const add = async (route, arr) => {
    for (const t of arr) if (!texts.has(t)) texts.set(t, route)
    for (const m of await page.evaluate(() => [...(window.__i18nMissing || [])])) miss.add(m)
  }
  for (const r of ROUTES) {
    await page.goto(base + r); await page.reload(); await page.waitForTimeout(700)
    await expandAll(page); await add(r, await collect(page))
    if (!r.startsWith('#/session')) { await clickAll(page, 'main'); await expandAll(page); await add(r + ' (all clicked)', await collect(page)) }
    const tabs = page.locator('[role=tab]'); const nt = await tabs.count()
    for (let i = 0; i < nt; i++) {
      await tabs.nth(i).click(); await page.waitForTimeout(250); await expandAll(page); await add(r + ' tab' + i, await collect(page))
      const cards = page.locator('[data-exercise-open]'); const nc = await cards.count()
      for (let c = 0; c < nc; c++) {
        await cards.nth(c).click(); await page.waitForTimeout(350)
        await expandAll(page); await add(r + ' exercise' + c, await collect(page))
        await clickAll(page, '[role=dialog]'); await expandAll(page); await add(r + ' exercise' + c + ' (all clicked)', await collect(page))
        await page.keyboard.press('Escape'); await page.waitForTimeout(150)
      }
    }
  }
  if (lang === 'ga') report.ga.missing = [...miss]
  await ctx.close()
  return texts
}

const dumpTexts = {}
for (const lang of ['ga', 'en']) {
  const texts = await sweep(lang, { width: 1280, height: 900 })
  dumpTexts[lang] = [...texts.keys()]
  for (const [t, route] of texts) {
    if (lang === 'ga' && isEnglish(t)) report.ga.leaks.push({ route, text: t.slice(0, 200) })
    if (lang === 'en' && isIrish(t)) report.en.leaks.push({ route, text: t.slice(0, 200) })
  }
}
// 375 px: every route in both languages, with the mobile menu open; also checks for sideways scrolling.
report.mobile = { overflow: [] }
for (const lang of ['ga', 'en']) {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 }, reducedMotion: 'reduce' })
  await ctx.addInitScript(l => { try { localStorage.setItem('udaras-lang', l) } catch {} }, lang)
  const page = await ctx.newPage()
  page.on('pageerror', e => report.errors.push(`${lang} mobile PAGEERROR ${e.message}`))
  for (const r of ROUTES) {
    await page.goto(base + r); await page.reload(); await page.waitForTimeout(500)
    const menu = page.locator('header button[aria-expanded]')
    if (await menu.count()) { await menu.first().click(); await page.waitForTimeout(150) }
    const sw = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    if (sw > 1) report.mobile.overflow.push(`${lang} ${r} +${sw}px`)
    for (const t of await collect(page)) {
      if (lang === 'ga' && isEnglish(t)) report.ga.leaks.push({ route: r + ' (375px)', text: t.slice(0, 200) })
      if (lang === 'en' && isIrish(t)) report.en.leaks.push({ route: r + ' (375px)', text: t.slice(0, 200) })
    }
    if (lang === 'ga') for (const m of await page.evaluate(() => [...(window.__i18nMissing || [])])) if (!report.ga.missing.includes(m)) report.ga.missing.push(m)
  }
  await ctx.close()
}

await browser.close()
fs.writeFileSync(new URL('./.language-report.json', import.meta.url), JSON.stringify(report, null, 1))
fs.writeFileSync(new URL('./.language-texts.json', import.meta.url), JSON.stringify(dumpTexts))
const fail = report.ga.missing.length + report.ga.leaks.length + report.en.leaks.length + report.errors.length + report.mobile.overflow.length
console.log(`GA: ${report.ga.missing.length} missing Irish, ${report.ga.leaks.length} English leaks · EN: ${report.en.leaks.length} Irish leaks · 375px overflow: ${report.mobile.overflow.length} · errors: ${report.errors.length}`)
console.log(fail ? 'LANGUAGE TEST: FAIL' : 'LANGUAGE TEST: PASS')
process.exit(fail ? 1 : 0)

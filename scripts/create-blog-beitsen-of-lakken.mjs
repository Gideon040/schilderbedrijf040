// Script om de blogpost "Beitsen of lakken: wat past bij je kozijnen?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-beitsen-of-lakken.mjs
// Schrijft alleen naar drafts.blog-beitsen-of-lakken. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'beitsen-of-lakken'
const DRAFT_ID = `drafts.blog-${SLUG}`

// Token uit de omgeving, anders uit .env.local
let TOKEN = process.env.SANITY_API_TOKEN
if (!TOKEN) {
  try {
    const env = fs.readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
    TOKEN = env.match(/^SANITY_API_TOKEN=["']?([^"'\r\n]+)/m)?.[1]
  } catch {}
}
if (!TOKEN) {
  console.error('SANITY_API_TOKEN is niet ingesteld (omgeving of .env.local).')
  process.exit(1)
}

// Helper om unieke keys te genereren
let keyCounter = 0
const key = (p = 'k') => `${p}${++keyCounter}`

// Zet een regel met **vet** en [link](href) om naar spans + markDefs
function inline(text) {
  const markDefs = []
  const children = []
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _type: 'span', _key: key('s'), text: text.slice(last, m.index), marks: [] })
    if (m[1]) {
      children.push({ _type: 'span', _key: key('s'), text: m[1], marks: ['strong'] })
    } else {
      const lk = key('link')
      markDefs.push({ _type: 'link', _key: lk, href: m[3] })
      children.push({ _type: 'span', _key: key('s'), text: m[2], marks: [lk] })
    }
    last = re.lastIndex
  }
  if (last < text.length) children.push({ _type: 'span', _key: key('s'), text: text.slice(last), marks: [] })
  return { markDefs, children }
}

// Lichte markdown (## h2, ### h3, - bullet, 1. genummerd, alinea's) naar Portable Text
function toPortableText(src) {
  return src
    .trim()
    .split(/\n\s*\n|\n(?=- |\d+\. |#)/)
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((raw) => {
      let style = 'normal'
      let listItem
      let text = raw.replace(/\s*\n\s*/g, ' ')
      if (text.startsWith('### ')) { style = 'h3'; text = text.slice(4) }
      else if (text.startsWith('## ')) { style = 'h2'; text = text.slice(3) }
      else if (text.startsWith('- ')) { listItem = 'bullet'; text = text.slice(2) }
      else if (/^\d+\. /.test(text)) { listItem = 'number'; text = text.replace(/^\d+\. /, '') }
      const { markDefs, children } = inline(text)
      const block = { _type: 'block', _key: key('b'), style, markDefs, children }
      if (listItem) Object.assign(block, { listItem, level: 1 })
      return block
    })
}

const body = `
Lak vormt een dichte, slijtvaste laag op het hout en gaat op kozijnen het langst mee: met een hoogwaardige buitenlak gemiddeld 8 tot 10 jaar. Beits trekt deels in het hout, is vochtregulerend en laat bij transparante beits de houtnerf zien, maar vraagt vaker onderhoud. Voor kozijnen, ramen en deuren kies je meestal lak, voor gevelhout vaak beits. Meer over [kozijnen laten schilderen](/diensten/kozijnen-schilderen) lees je op de dienstpagina.

## Wat is het verschil tussen beitsen en lakken?

Het belangrijkste verschil is waar de afwerking zit. Lak ligt als een gesloten film op het hout. Beits dringt deels in het hout en vormt een dunnere laag die vocht beter doorlaat. Daaruit volgen de verschillen in uiterlijk, bescherming en onderhoud:

- **Lak (dekkende verf):** egale kleur in elke gewenste tint, van mat tot hoogglans. Vormt een dichte laag die slijtvast is en goed tegen weer bestand is. Vraagt een grondverf als eerste laag. Onderhoudscyclus van een hoogwaardige buitenlak: doorgaans 8 tot 10 jaar.
- **Dekkende beits:** egale kleur, maar met een zijdematte uitstraling en de structuur van het hout zichtbaar. Vochtregulerend en zonder aparte grondverf aan te brengen. Een gevelbeits als CetaBever Gevel Hout Snel Beits Dekkend beschermt in 3 lagen tot ongeveer 7 jaar.
- **Transparante beits:** kleurt het hout, maar laat de nerf zien. Vochtregulerend, met minder pigment en daardoor minder bescherming tegen zonlicht. Afhankelijk van het product en de ondergrond is onderhoud elke 2 tot 7 jaar nodig.

Een vochtregulerende afwerking laat vocht uit het hout ontsnappen. Dat is de kracht van beits op hout dat veel werkt of nat wordt. Lak sluit het hout beter af en is harder, en dat past bij onderdelen die maatvast moeten blijven, zoals ramen en deuren die goed moeten sluiten.

## Wat past bij welk hout en welk onderdeel?

Niet de voorkeur voor een uiterlijk bepaalt de keuze, maar het onderdeel en de houtsoort.

### Kozijnen, ramen en deuren

Dit zijn maatvaste onderdelen: ze moeten passen, sluiten en waterdicht blijven. Een dekkend laksysteem is hier de gangbare keuze, omdat de dichte laag het hout het beste afsluit en lang meegaat. Transparant kan ook, maar vraagt veel vaker onderhoud. GND, de garantie-instelling voor houten buitendeuren, schrijft voor transparant afgewerkte buitendeuren om de 2 jaar een nieuwe laag voor, tegen een controle in jaar 2 en overschilderen in jaar 6 bij dekkend.

### Gevelbetimmering, rabatdelen en boeidelen van naaldhout

Gevelbekleding en rabatdelen van zachthout, zoals vuren, douglas of ceder, werken meer en worden eerder nat. Hier is beits vaak de betere keuze, omdat het vocht kan ontsnappen. Sikkens Cetol Novatech noemt zich bijvoorbeeld bijzonder geschikt voor naaldhout en gevelbeschietingen, en CetaBever Gevel Hout Snel Beits is bedoeld voor gevelbetimmeringen en rabatdelen van onder meer douglas, ceder, teak en bankirai.

### Hardhout

Hardhout zoals meranti kun je zowel lakken als beitsen. Belangrijk is de voorbereiding: vette houtsoorten als teak en meranti moeten extra worden ontvet voordat de eerste laag erop gaat, anders hecht de afwerking slecht.

### Blank of kleurloos buiten?

Een volledig kleurloze afwerking wordt buiten afgeraden. Kleurloze systemen beschermen te weinig tegen UV-licht en zijn daardoor minder duurzaam. Fabrikanten adviseren een kleurloze laag alleen als er eerst minstens 3 lagen transparante beits in een houtkleur zijn aangebracht.

## Hoe ziet het onderhoud eruit bij beits en bij lak?

Bij beits is het onderhoud vaker nodig, maar per keer eenvoudig. Voor een gevelbeits schrijft CetaBever voor: de intacte laag reinigen, kale of beschadigde plekken schuren tot op het kale hout en die als nieuw hout behandelen, de rest licht opschuren en afwerken met 2 nieuwe lagen. Bij een transparante beits als Cetol Novatech noemt Sikkens een onderhoudsbeurt om de ongeveer 2 jaar: reinigen, schuren, gebreken herstellen en het geheel opnieuw overstrijken. Omdat beits grotendeels in het hout trekt en geen dikke film vormt, hoef je bij tijdig onderhoud zelden alles kaal te maken.

Bij lak is het onderhoud minder vaak nodig, maar per keer grondiger. Een dekkend laksysteem gaat lang mee, zolang je kleine beschadigingen tussendoor bijwerkt. Wacht je te lang, dan laat lak plaatselijk los en kruipt er vocht onder de laag. Dan moet er meer worden geschuurd, bijgegrond en soms hersteld voordat de nieuwe laag erop kan.

## Kun je overstappen van beits naar lak, of andersom?

Dat kan, maar het is meer werk dan een gewone onderhoudsbeurt. Van transparante beits naar dekkend is het lastigst. Transparante beits laat zonlicht door, waardoor het hout eronder langzaam verweert. Sikkens schrijft dat de hechting van een oud transparant systeem vaak onvoldoende is, ook als het er nog goed uitziet. Bij systemen ouder dan 5 tot 6 jaar moeten vrijwel altijd alle lagen worden verwijderd, en ook het verweerde, grijze hout moet worden weggeschuurd tot op gezond hout.

Andersom, van lak naar beits, vraagt kaal hout. Beits moet in het hout kunnen trekken, en dat lukt niet door een laklaag heen. Een gevelbeits als die van CetaBever is bedoeld voor kaal hout of hout dat eerder met hetzelfde soort afwerking is behandeld.

## Wat kost het om kozijnen te laten lakken of beitsen?

Bij Schildersbedrijf040 kost het schilderen van kozijnen buiten €50 tot €100 per kozijn, afhankelijk van de grootte en de staat van het houtwerk. Wil je overstappen van transparant naar dekkend, houd dan rekening met extra voorbereiding. Hoe vaak je daarna terug moet, lees je in de blog [hoe vaak moet je buiten schilderen](/blog/hoe-vaak-buitenschilderwerk).

## Gratis offerte aanvragen

Twijfel je tussen beitsen en lakken? Schildersbedrijf040 komt gratis kijken, beoordeelt het hout en de huidige afwerking en adviseert wat het beste past. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Is beitsen goedkoper dan lakken?',
    answer:
      'Per keer vaak wel, op de lange termijn meestal niet. Beits heeft geen aparte grondverf nodig en is in minder stappen aan te brengen. Maar transparante beits vraagt veel vaker onderhoud: GND rekent bij transparant afgewerkte buitendeuren met een nieuwe laag om de 2 jaar, tegen overschilderen in jaar 6 bij dekkend. Over tien of twaalf jaar betekent dat meerdere beurten extra. Voor kozijnen die je zo min mogelijk wilt onderhouden, is een dekkend systeem daarom meestal de voordeligere keuze.',
  },
  {
    question: 'Kun je dekkende verf over transparante beits zetten?',
    answer:
      'Alleen als de hechting van de oude beits goed is, en dat is vaak niet zo. Transparante beits laat UV-licht door, waardoor het hout eronder verweert en de beits minder goed hecht. Sikkens adviseert daarom eerst een hechtingsproef en bij de minste twijfel alle transparante lagen te verwijderen, inclusief het verweerde hout. Bij transparante systemen ouder dan 5 tot 6 jaar is dat volgens Sikkens vrijwel altijd nodig. Sla je die stap over, dan is de kans op blaasjes en afbladderen groot.',
  },
  {
    question: 'Waarom wordt blanke of kleurloze beits buiten afgeraden?',
    answer:
      'Omdat kleurloze beits het hout te weinig beschermt tegen zonlicht. Pigment in de beits houdt een deel van het UV-licht tegen, en een kleurloze beits heeft dat niet. Het hout eronder vergrijst en verweert daardoor sneller, en de beits laat eerder los. CetaBever en Sikkens adviseren buiten daarom geen volledig kleurloos systeem. Een kleurloze laag mag alleen als afwerking op minstens 3 lagen transparante beits in een houtkleur. Wil je de natuurlijke uitstraling van het hout, kies dan een transparante beits in een lichte houtkleur.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Beitsen of lakken: wat past bij je kozijnen?',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Beitsen of lakken? Zo kies je | Schildersbedrijf040',
  metaDescription:
    'Beitsen of lakken? Lak is slijtvast en gaat op kozijnen het langst mee, beits is vochtregulerend en past bij gevelhout. Vergelijk dekkend, transparant en lak.',
  excerpt:
    'Lak gaat op kozijnen het langst mee, beits is vochtregulerend en laat de nerf zien. Zo verschillen lak, dekkende en transparante beits, en zo kies je wat past bij jouw hout.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-551f89a6382a7472405dcaf5a8eb5fc03c1603fd-1179x851-jpg' },
  },
  date: '2026-10-12',
  readTime: '6 min',
  category: 'Materialen',
  keywords: [
    'beitsen of lakken',
    'dekkend of transparant beitsen',
    'beits of lak kozijnen',
    'verschil beits en lak',
    'dekkende beits',
    'transparante beits',
    'gevelhout beitsen',
  ],
  author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
  content,
  faq,
  relatedPosts: ['blogPost-hoe-schilder-je-een-deur'].map((ref, i) => ({
    _type: 'reference',
    _ref: ref,
    _key: `rel${i + 1}`,
  })),
}

// Controle vooraf: node <script> --dry (schrijft niets)
if (process.argv.includes('--dry')) {
  const woorden = (t) => t.split(/\s+/).filter(Boolean).length
  const tekst = content.map((b) => b.children.map((c) => c.text).join('')).join(' ')
  const faqTekst = faq.map((f) => `${f.question} ${f.answer}`).join(' ')
  const alles = JSON.stringify(document)
  console.log({
    id: document._id,
    woordenTekst: woorden(tekst),
    woordenFaq: woorden(faqTekst),
    faqAntwoorden: faq.map((f) => woorden(f.answer)),
    metaTitle: document.metaTitle.length,
    metaDescription: document.metaDescription.length,
    dashes: /[\u2013\u2014\u00ad]/.test(alles),
    jordy: alles.includes('JORDY'),
    links: [...new Set(content.flatMap((b) => b.markDefs.map((m) => m.href)))],
  })
  process.exit(0)
}

// Lokale blog (zonder Sanity): node <script> --json schrijft data/blog/ruw/<slug>.json
if (process.argv.includes('--json')) {
  const fs = await import('node:fs')
  fs.writeFileSync(`data/blog/ruw/${SLUG}.json`, JSON.stringify({ ...document, _id: `blogPost-${SLUG}` }, null, 1))
  console.log('JSON geschreven:', SLUG)
  process.exit(0)
}

async function createDraft() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ mutations: [{ createOrReplace: document }] }),
  })
  const result = await response.json()
  if (!response.ok) {
    console.error('Fout bij aanmaken:', JSON.stringify(result, null, 2))
    process.exit(1)
  }
  console.log('Concept aangemaakt:', result.results?.[0]?.id)

  // Controle: lees het concept terug met token
  const q = encodeURIComponent(`*[_id == "${DRAFT_ID}"][0]{_id, title, "slug": slug.current, "blokken": count(content), "faq": count(faq)}`)
  const check = await fetch(`https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${q}&perspective=raw`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  }).then((r) => r.json())
  console.log('Controle:', JSON.stringify(check.result))
}

createDraft()

// Script om de blogpost "Hoe vaak moet je buitenschilderwerk laten doen?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-hoe-vaak-buitenschilderwerk.mjs
// Schrijft alleen naar drafts.blog-hoe-vaak-buitenschilderwerk. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'hoe-vaak-buitenschilderwerk'
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
Dekkend geschilderde kozijnen, ramen en deuren hebben gemiddeld elke 6 tot 10 jaar een nieuwe verflaag nodig, met een controle na ongeveer 2 jaar. Transparant gebeitst hout vraagt vaker onderhoud: ongeveer elke 2 tot 4 jaar. De zon- en regenkant slijt sneller. Kijk dus niet alleen naar de jaren, maar ook naar de signalen. Meer over de aanpak lees je bij [buitenschilderwerk](/diensten/buitenschilderwerk).

## Hoe vaak moet je buiten schilderen per onderdeel?

Hoe vaak een onderdeel aan de beurt is, hangt vooral af van de afwerking: een dichte, dekkende lak gaat langer mee dan een transparante beits, die meer zonlicht doorlaat. Fabrikanten en de branche geven deze richtlijnen:

- **Houten kozijnen en ramen, dekkend gelakt:** onderhoudscyclus van doorgaans 8 tot 10 jaar met een hoogwaardige buitenlak, zoals Sikkens opgeeft voor Rubbol XD High Gloss. Een controle tussendoor vangt kleine schade op tijd af.
- **Houten buitendeur, dekkend afgewerkt:** volgens het onderhoudsschema van GND (Garantie Nederlandse Deuren) een kwaliteitscontrole in jaar 2 en overschilderen in jaar 6.
- **Houten buitendeur, transparant afgewerkt:** volgens GND om de 2 jaar overschilderen.
- **Gevelbetimmering en rabatdelen, gebeitst:** een watergedragen gevelbeits als CetaBever Gevel Hout Snel Beits beschermt in een systeem van 3 lagen tot ongeveer 7 jaar, zowel dekkend als transparant.
- **Gevelbetimmering met een transparante, licht filmvormende beits:** Sikkens Cetol Novatech noemt een buitenduurzaamheid van 3 tot 4 jaar, met een onderhoudsbeurt om de ongeveer 2 jaar.
- **Kitnaden rond glas:** bij elke controle nakijken, vooral in de hoeken, en herstellen zodra er scheurtjes of loslatende kit te zien zijn.

Dit zijn richtlijnen voor goed aangebracht schilderwerk. Werk dat ooit in een te dunne laag of op nat hout is gezet, is vaak eerder aan de beurt. Het omgekeerde geldt ook: een kozijn onder een overstek op het noorden kan langer mee.

## Waarom slijt de ene kant sneller dan de andere?

Zon en regen zijn de grootste slijters van buitenschilderwerk. GND noemt de ligging op het zuiden en westen, beschut of onbeschut, het gebruik en hoe vaak je schoonmaakt als de factoren die bepalen hoe vaak onderhoud nodig is. Op het zuiden breekt UV-licht de verf sneller af, op het westen krijgt het houtwerk de meeste regen te verduren.

Ook de kleur speelt mee. Lichte kleuren houden het langer vol dan (zeer) donkere kleuren. Een donkere kleur wordt in de zon veel warmer, waardoor de verf sneller veroudert en het hout meer gaat werken. Het gevolg is dat je zelden het hele huis tegelijk hoeft te doen: vaak is de zon- en regenkant eerder aan de beurt dan de noordgevel.

## Hoe herken je dat je buitenschilderwerk aan de beurt is?

Een paar minuten rond het huis lopen vertelt je meer dan de datum van de vorige schilderbeurt. Let op deze signalen:

1. **Krijten:** veeg met je vinger over de verf. Blijft er een poederig laagje aan je vinger, dan breekt de verf af en neemt de bescherming af.
2. **Doffe of verbleekte verf:** de glans is weg of de kleur is zichtbaar lichter op de zonzijde.
3. **Haarscheurtjes:** fijne scheurtjes in de verf, vaak op de verbindingen van kozijnen en bij onderdorpels.
4. **Bladderen en kale plekken:** de verf laat los en het hout ligt bloot. Hier komt vocht direct in het hout.
5. **Gescheurde of losse kit:** kitnaden rond het glas of het kozijn die scheuren of loskomen, laten water door.
6. **Zachte plekken in het hout:** druk met een schroevendraaier op de onderdorpel en de hoeken. Geeft het hout mee, dan is er waarschijnlijk houtrot.

Zie je alleen de eerste twee signalen, dan ben je op tijd voor een gewone onderhoudsbeurt. Bij bladderen, open naden of zachte plekken is het tijd om snel te handelen.

## Kun je het onderhoud over meerdere jaren spreiden?

Ja, en dat is vaak verstandig. Omdat de zon- en regenkant sneller slijt, kun je die gevels eerder laten doen en de beschutte kanten een of twee jaar later. Zo spreid je de kosten en voorkom je dat de zwaarst belaste kozijnen te lang wachten. Laat in de tussenliggende jaren wel een controle doen, zoals GND die na 2 jaar aanbeveelt: kleine beschadigingen en open kitnaden direct bijwerken houdt de volgende grote beurt beperkt.

## Wat gebeurt er als je te lang wacht?

Wacht je te lang, dan wordt de volgende beurt groter en duurder. Waar verf loslaat, trekt vocht het hout in. Dat geeft eerst grijs, verweerd hout en op termijn houtrot, die eerst hersteld moet worden met [houtrotsanering](/diensten/houtrot-sanering) voordat er geschilderd kan worden.

Bij transparant gebeitst hout is wachten extra riskant. Transparante beits laat zonlicht door, waardoor het hout eronder langzaam verweert. Sikkens geeft aan dat transparante systemen die ouder zijn dan 5 tot 6 jaar vrijwel altijd helemaal verwijderd moeten worden voordat er dekkend over geschilderd kan worden. Een tijdige onderhoudsbeurt, waarbij je alleen schoonmaakt, licht schuurt en een nieuwe laag zet, is dan veel minder werk.

## Wat kost buitenschilderwerk als je op tijd bent?

Op tijd schilderen is goedkoper, omdat er minder voorbereiding nodig is. Bij Schildersbedrijf040 kost het schilderen van kozijnen buiten €50 tot €100 per kozijn, afhankelijk van de grootte en de staat. Lees meer over [kozijnen laten schilderen](/diensten/kozijnen-schilderen). Een geschilderde gevel kost €35 tot €45 per m². Wil je weten welk moment in het jaar het meest geschikt is? Lees dan de blog over [wanneer je het beste buiten kunt schilderen](/blog/wanneer-buiten-schilderen).

## Gratis offerte aanvragen

Twijfel je of je buitenschilderwerk al aan de beurt is? Schildersbedrijf040 komt gratis kijken, beoordeelt de staat van je kozijnen, deuren en gevel en adviseert wat nu nodig is en wat nog kan wachten. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Verlengt schoonmaken de levensduur van buitenschilderwerk?',
    answer:
      'Ja. GND schrijft in de onderhoudsvoorschriften voor buitendeuren dat reinigen sterk bijdraagt aan een langere levensduur, omdat vuile deuren sneller verweren. Maak kozijnen, deuren en boeidelen daarom een of twee keer per jaar schoon met water en eventueel een zachte zeepoplossing. Spoel na met schoon water en droog af met een zachte doek. Neem ook het glas en de kit rond de ruiten mee. Vermijd schuurmiddelen en schuursponsjes, want die beschadigen de verflaag en halen juist de beschermende toplaag weg.',
  },
  {
    question: 'Gaat een lichte kleur buiten langer mee dan een donkere?',
    answer:
      'Ja. Lichte kleuren geven een gunstiger onderhoudsresultaat dan (zeer) donkere kleuren, schrijft GND. Hoe lichter de kleur, hoe langer de afwerklaag zijn beschermende functie blijft vervullen. Donkere kleuren worden in de zon veel warmer. Daardoor veroudert de verf sneller en gaat het hout meer werken, wat bij deuren ook de vormvastheid niet ten goede komt. Kies je toch voor antraciet of zwart op een zonnige gevel, houd dan rekening met een kortere onderhoudscyclus en controleer de zonzijde vaker.',
  },
  {
    question: 'Moeten nieuwe houten kozijnen of deuren snel geschilderd worden?',
    answer:
      'Vaak wel. Veel nieuwe houten deuren worden geleverd met een grond- of voorlaklaag, en die is niet bedoeld als eindafwerking. Volgens het GND-garantiereglement moeten deuren met een voorlaksysteem binnen 6 maanden (transparant) of 18 maanden (dekkend) na levering of plaatsing worden afgelakt. Daarna geldt het normale onderhoudsschema. Vraag bij nieuwe kozijnen of deuren altijd na in welke afwerking ze geleverd worden en wat de fabrikant voorschrijft, zodat je de garantie niet verliest.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Hoe vaak moet je buitenschilderwerk laten doen?',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Hoe vaak moet je buiten schilderen? | Schildersbedrijf040',
  metaDescription:
    'Hoe vaak buitenschilderwerk? Dekkend gelakte kozijnen gemiddeld elke 6 tot 10 jaar, gebeitst hout vaker. Zie de cyclus per onderdeel en wanneer het tijd is.',
  excerpt:
    'Dekkend gelakte kozijnen en deuren gaan gemiddeld 6 tot 10 jaar mee, transparant gebeitst hout 2 tot 4 jaar. Bekijk de onderhoudscyclus per onderdeel en de signalen dat je buitenschilderwerk aan de beurt is.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-80fb4368869db0591078fc7e77b1d72fe6226a02-1536x2048-jpg' },
  },
  date: '2026-10-12',
  readTime: '6 min',
  category: 'Tips & Advies',
  keywords: [
    'hoe vaak buitenschilderwerk',
    'hoe vaak kozijnen schilderen',
    'hoe vaak buiten schilderen',
    'onderhoudscyclus schilderwerk',
    'hoe vaak huis schilderen',
    'wanneer kozijnen schilderen',
  ],
  author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
  content,
  faq,
  relatedPosts: ['blogPost-hoe-schilder-je-een-deur', 'blogPost-btw-tarief-schilderwerk'].map((ref, i) => ({
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

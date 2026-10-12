// Script om de blogpost "Wanneer kun je het beste buiten schilderen?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-wanneer-buiten-schilderen.mjs
// Schrijft alleen naar drafts.blog-wanneer-buiten-schilderen. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'wanneer-buiten-schilderen'
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
Buiten schilderen kan het best van eind april tot en met september, op droge dagen tussen ongeveer 10 en 25 °C en bij een luchtvochtigheid onder 85%. Mei, juni en september zijn meestal ideaal: niet te heet, niet te nat. Plan het werk ruim vooruit, want juist in die maanden is het druk. Meer over de aanpak lees je bij [buitenschilderwerk in Eindhoven](/diensten/buitenschilderwerk).

## Welk weer heb je nodig om buiten te schilderen?

Je hebt droog weer nodig, een temperatuur die niet te laag en niet te hoog is, en een ondergrond die droog is. Het weer van die dag is daarbij net zo belangrijk als het weer van de uren erna, want de verf moet de kans krijgen om te drogen.

### Temperatuur: tussen ongeveer 10 en 25 °C

Weeronline noemt 18 tot 19 °C het ideale schilderweer, met 10 tot 25 °C als bruikbare marge. Fabrikanten geven per product hun eigen grenzen. Een watergedragen gevelbeits van CetaBever mag niet onder 10 °C of boven 25 °C worden verwerkt. Een terpentinegedragen buitenlak zoals Sikkens Rubbol XD High Gloss kan volgens de fabrikant tussen 0 en 30 °C. De regel van de schilder: houd je aan het product, en blijf bij twijfel tussen 10 en 25 °C. Onder de 10 °C droogt verf traag, boven de 25 °C droogt de verf te snel aan de buitenkant.

### Luchtvochtigheid en dauwpunt

De relatieve luchtvochtigheid mag maximaal 85% zijn. Daarnaast moet de ondergrond minstens 3 °C warmer zijn dan het dauwpunt. Is dat niet zo, dan slaat er een dun laagje vocht op het hout neer en hecht de verf slecht. Dat is de reden dat een schilder op een frisse ochtend wacht tot de dauw van de kozijnen is verdwenen.

### Droog hout

Hout dat nat is van regen of dauw moet eerst opdrogen. In de praktijk mag hout bij het schilderen maximaal ongeveer 18% vocht bevatten. Is het natter, dan blijft vocht onder de verf zitten. Dat zoekt een uitweg, met blaasjes, afbladderen en op termijn houtrot als gevolg. Een vochtmeter geeft hier uitsluitsel.

### Geen regen tot de verf droog is

Na het schilderen moet de verf een aantal uren droog kunnen blijven. Een buitenlak als Rubbol XD is bij 23 °C na ongeveer 4 uur kleefvrij, bij 5 °C en hoge luchtvochtigheid pas na ongeveer 8 uur. Een bui in die uren kan de verflaag beschadigen. Kijk dus niet alleen naar de ochtend, maar naar de weersverwachting van de hele dag.

## In welke maanden kun je buiten schilderen?

Buitenschilderwerk loopt in Nederland grofweg van april tot en met oktober. Binnen dat seizoen verschillen de maanden flink:

- **Maart en april:** mogelijk op zachte, droge dagen. Ochtenden zijn vaak koud en vochtig, waardoor de werkdag later begint.
- **Mei en juni:** ideaal. Gematigde temperaturen, lange dagen en relatief vaak droog weer.
- **Juli en augustus:** goed, maar let op hitte. Op dagen boven 25 °C werkt een schilder in de schaduw of op een ander moment van de dag.
- **September:** ideaal. Nog voldoende warmte, minder hitte dan in de zomer.
- **Oktober:** vaak nog mogelijk, met kortere dagen en langer natte ochtenden door dauw.
- **November tot en met februari:** buiten meestal niet verstandig. Dit is de periode voor binnenwerk.

## Op welk moment van de dag schilder je welke gevel?

Vermijd fel zonlicht op het vlak waaraan je werkt. Weeronline geeft een handige vuistregel: 's ochtends de westkant, 's middags de oostkant, aan het eind van de middag of 's avonds de zuidkant, en de noordkant op elk moment van de dag. Zo werk je steeds in de schaduw en droogt de verf gelijkmatig. Begin niet te vroeg op een vochtige ochtend, en stop op tijd, zodat de verf droog is voordat 's avonds de dauw valt. Ook wind speelt mee: een lichte bries helpt bij het drogen, harde wind blaast stof en blad in de natte verf.

## Waarom nu al buitenschilderwerk inplannen?

Omdat iedereen in dezelfde maanden wil schilderen. Mei, juni en september zijn voor schilders de drukste periode van het jaar, terwijl het aantal geschikte werkdagen door regen beperkt is. Wie in het voorjaar pas een offerte aanvraagt, schuift vaak door naar later in het seizoen. Twijfel je of je kozijnen dit jaar al aan de beurt zijn? In de blog [hoe vaak moet je buiten schilderen](/blog/hoe-vaak-buitenschilderwerk) lees je per onderdeel na hoeveel jaar een nieuwe verflaag nodig is en aan welke signalen je dat herkent.

Plan daarom in de winter of het vroege voorjaar. Dan heb je de offerte op tijd binnen, kun je de kleuren rustig kiezen en staat je klus op een vaste plek in de planning. Een vroege inspectie heeft nog een voordeel: eventuele houtrot in kozijnen of boeidelen komt dan op tijd aan het licht. Die kan eerst worden hersteld met [houtrotsanering](/diensten/houtrot-sanering), zodat het schilderwerk direct daarna op gezond hout kan beginnen.

## Wat kun je in de winter wel laten doen?

In de winter ligt de nadruk op binnenwerk. In een verwarmde woning zijn temperatuur en luchtvochtigheid goed te regelen, dus muren, plafonds, kozijnen en deuren binnen kunnen het hele jaar door. Lees meer over [schilderen in de winter](/diensten/winterschilder). Zo gebruik je de wintermaanden voor het binnenwerk en het voorjaar en de zomer voor de gevel en de kozijnen.

## Gratis offerte aanvragen

Wil je je buitenschilderwerk op tijd vastleggen? Schildersbedrijf040 komt gratis kijken en maakt een offerte met een voorstel voor de planning. Ter indicatie: gevelschilderwerk kost €35 tot €45 per m² en kozijnen buiten €50 tot €100 per kozijn. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Kun je buiten schilderen na een regenbui?',
    answer:
      'Niet direct. Na een bui is het hout aan de buitenkant nat, en verf hecht slecht op een vochtige ondergrond. Hout mag bij het schilderen maximaal ongeveer 18% vocht bevatten. Hoe snel hout na regen weer droog genoeg is, hangt af van de zon, de wind en de ligging van de gevel. Een kozijn op het zuiden is soms binnen enkele uren droog, een noordgevel kan een dag nodig hebben. Een schilder meet dit met een vochtmeter in plaats van te vertrouwen op wat er aan de buitenkant droog uitziet.',
  },
  {
    question: 'Is het te warm om buiten te schilderen bij 30 graden?',
    answer:
      'Meestal wel. Boven ongeveer 25 °C droogt verf aan de buitenkant te snel, terwijl de laag eronder nog nat is. Dat geeft kans op aanzetten, blaasjes en een slechtere hechting. Sommige producten mogen tot 30 °C worden verwerkt, andere, zoals veel watergedragen beitsen, al niet boven 25 °C. Op hete dagen begint een schilder daarom vroeg, werkt hij in de schaduw en schuift hij de zonzijde op naar het eind van de dag. Is het de hele dag heet, dan is uitstellen vaak verstandiger.',
  },
  {
    question: 'Hoe lang moet buitenverf droog blijven na het schilderen?',
    answer:
      'Reken op minimaal een aantal uren zonder regen. Een buitenlak als Sikkens Rubbol XD High Gloss is bij 23 °C na ongeveer 2 uur stofdroog en na ongeveer 4 uur kleefvrij. Bij 5 °C en een hoge luchtvochtigheid duurt kleefvrij ongeveer 8 uur. Een volgende laag kan pas na ongeveer 18 uur. Watergedragen producten drogen vaak sneller aan, maar ook daar geldt dat lagere temperaturen de droging vertragen. Plan buitenwerk dus op een dag waarop ook de middag en avond droog blijven.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Wanneer kun je het beste buiten schilderen?',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Wanneer kun je buiten schilderen? | Schildersbedrijf040',
  metaDescription:
    'Wanneer kun je buiten schilderen? Van eind april tot en met september, droog en tussen 10 en 25 °C. Lees welk weer je nodig hebt en waarom je vroeg plant.',
  excerpt:
    'Buitenschilderwerk lukt het best van eind april tot en met september, op droge dagen tussen 10 en 25 °C. Dit weer heb je nodig, zo kies je het juiste moment van de dag en daarom plan je het op tijd.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-80fb4368869db0591078fc7e77b1d72fe6226a02-1536x2048-jpg' },
  },
  date: '2026-10-12',
  readTime: '6 min',
  category: 'Tips & Advies',
  keywords: [
    'wanneer buiten schilderen',
    'beste tijd buitenschilderwerk',
    'buiten schilderen temperatuur',
    'buiten schilderen luchtvochtigheid',
    'beste maand buitenschilderwerk',
    'buitenschilderwerk plannen',
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

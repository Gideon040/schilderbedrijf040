// Script om de blogpost "Latex spuiten of rollen?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-latex-spuiten-of-rollen.mjs
// Schrijft alleen naar drafts.blog-latex-spuiten-of-rollen. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'latex-spuiten-of-rollen'
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
Latex spuiten geeft een strakker, streeploos resultaat en gaat sneller bij grote oppervlakken, maar vraagt meer afplakwerk en een lege of goed afgedekte ruimte. Rollen is flexibeler en handiger voor één kamer, een bewoonde ruimte of veel kozijnen. Bij Schildersbedrijf040 kost [latex spuiten](/diensten/latex-spuiten) €8 tot €12 per m² voor muren.

## Wat is het verschil tussen latex spuiten en rollen?

Het verschil zit niet in de verf, maar in de manier van aanbrengen. Bij spuiten brengt een airless machine de latex onder hoge druk als fijne nevel aan. Bij rollen (ook wel sauzen genoemd) zet de schilder de verf met een vachtroller op de muur. Dezelfde latex, een ander gereedschap, en daardoor een ander resultaat en een andere werkwijze. Die druk ligt rond de 200 bar, waardoor de verf zich als een gelijkmatige film over de muur legt. Een roller laat altijd een lichte structuur en overgangen tussen de banen achter, die je in strijklicht kunt zien. Zo verhouden de twee methoden zich:

- **Strakheid:** spuiten geeft een egale laag zonder aanzetten of rolstrepen. Bij rollen is een strak resultaat goed mogelijk, maar er is meer kans op banen, vooral op grote vlakken en in strijklicht.
- **Snelheid:** spuiten is sneller bij grote oppervlakken. Bij een kleine ruimte is het tijdsverschil klein, omdat het afplakken dan zwaarder weegt.
- **Prijs per m²:** spuiten is per m² meestal voordeliger op grote oppervlakken. Voor één kleine kamer maakt het weinig uit.
- **Afplakken:** spuiten vraagt veel afplakwerk: vloeren, kozijnen, ramen, stopcontacten en alles wat niet geverfd mag worden. Rollen vraagt alleen afplakken langs de randen.
- **Rommel:** spuiten geeft nevel, dus de ruimte moet leeg of volledig afgedekt zijn. Rollen kan met meubels in het midden van de kamer onder folie.
- **Kleuren:** met rollen is elke kleur en elke combinatie in één ruimte eenvoudig. Bij spuiten werk je bij voorkeur met één kleur per ruimte.

## Wanneer kies je voor spuiten?

Spuiten is de beste keuze als je veel vierkante meters hebt en de ruimte leeg kan. Dan weegt het afplakwerk niet op tegen de tijd die je wint, en profiteer je volop van het strakke resultaat.

### Nieuwbouw of een lege woning

In een nieuwbouwwoning of een woning tussen twee bewoners staan geen meubels en is de vloer vaak nog niet gelegd. Afdekken gaat dan snel, en alle muren en plafonds kunnen in één doorlopende werkgang gespoten worden. Dat is precies de situatie waarin spuiten het meeste oplevert.

### Grote plafonds en hoge wanden

Op een plafond zie je strepen van een roller het snelst, zeker als er licht van opzij langs scheert. Spuiten geeft een gelijkmatige laag zonder aanzetten, ook op grote vlakken. Hetzelfde geldt voor een hoog trapgat of een open woonkamer met een vide: daar is een egale laag met een roller lastig te halen.

### Vers stucwerk

Nieuw stucwerk is glad en vlak, en daarop komt een egale spuitlaag het mooist tot zijn recht. Let wel op: het stucwerk moet eerst goed droog zijn en krijgt meestal een voorstrijkmiddel. Spuiten verbergt geen oneffenheden; wat in de muur zit, blijft zichtbaar.

## Wanneer is rollen de betere keuze?

Rollen wint als de ruimte bewoond is, als er weinig vierkante meters zijn of als er veel moet worden afgeplakt. Ook bij meerdere kleuren in één kamer is rollen handiger.

### Eén kamer in een bewoond huis

Moet één slaapkamer of een werkkamer opnieuw geschilderd worden terwijl je thuis woont, dan is de winst van spuiten klein. De kast kan in het midden onder folie blijven staan en er is geen nevel die door het huis trekt.

### Veel kozijnen, ramen en deuren

Hoe meer glas en houtwerk in een ruimte, hoe meer afplakwerk spuiten vraagt. In een kleine kamer met een groot raam, een deur en een radiator is de schilder soms langer bezig met afplakken dan met spuiten. Dan is rollen sneller klaar.

### Accentmuren en meerdere kleuren

Een donkere accentmuur naast lichte wanden vraagt bij spuiten opnieuw afplakken per kleur. Met een roller en een strakke kwastlijn is dat eenvoudiger.

## Wat merk je als bewoner van het verschil?

Bij spuiten moet de ruimte leeg of volledig afgedekt zijn, en is de schilder de eerste uren vooral aan het afplakken. Daarna gaat het snel. Bij rollen kun je meer laten staan en is er minder voorbereiding, maar duurt het verven zelf langer. De droogtijd is bij beide gelijk, omdat het om dezelfde muurverf gaat. Meer over doorlooptijden per ruimte lees je in de blog [hoe lang duurt binnenschilderwerk](/blog/hoe-lang-duurt-binnenschilderwerk).

## Latex spuiten of rollen: wat is beter?

Er is geen methode die altijd beter is. Spuiten is beter als je een complete woning, nieuwbouw of grote plafonds wilt laten doen en de ruimtes leeg kunnen. Rollen is beter voor één kamer, een bewoond huis, ruimtes met veel glas en houtwerk, en voor meerdere kleuren in één ruimte. Kijk dus vooral naar het aantal vierkante meters en naar hoeveel er afgeplakt moet worden. Bij twijfel geeft een schilder na een korte inspectie snel uitsluitsel.

## Wat kost latex spuiten vergeleken met rollen?

Latex spuiten kost bij Schildersbedrijf040 €8 tot €12 per m² voor muren, inclusief afplakken en materiaal. Spuiten is per m² vaak voordeliger dan rollen, omdat het verven zelf minder arbeidstijd kost. Het afplakken is echter een vaste klus per ruimte. Daarom is het prijsvoordeel bij een complete woning groot en bij één kleine kamer klein. Vraag bij twijfel een offerte voor beide methoden, dan zie je direct wat voor jouw situatie het voordeligst is.

## Gratis offerte aanvragen

Twijfel je tussen spuiten en rollen? Schildersbedrijf040 komt gratis kijken en adviseert welke methode bij jouw woning past. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Kun je spuiten en rollen in één ruimte combineren?',
    answer:
      'Ja, dat kan goed. Een veelgebruikte combinatie is het plafond spuiten en de muren rollen. Op een plafond zie je strepen het snelst, dus daar levert spuiten de meeste winst op. De muren kunnen daarna met een roller, bijvoorbeeld als er een accentkleur op één wand komt of als de kamer niet helemaal leeg kan. Belangrijk is dat dezelfde soort muurverf wordt gebruikt, zodat de afwerking en de glansgraad overal gelijk zijn. Een schilder bepaalt per ruimte wat de handigste verdeling is.',
  },
  {
    question: 'Wordt een gespoten muur gladder dan een gerolde muur?',
    answer:
      'Een gespoten muur heeft geen rolstrepen of aanzetten, dus de verflaag zelf is egaler. Maar spuiten maakt een muur niet vlakker. Scheuren, deuken, spijkergaten en een ongelijk stucwerk blijven na het spuiten net zo goed zichtbaar als na het rollen. Soms vallen ze zelfs meer op, omdat de verflaag eromheen zo egaal is. De voorbereiding is daarom bij spuiten minstens zo belangrijk: gaten vullen, schuren en waar nodig voorstrijken. Pas dan levert spuiten echt dat strakke resultaat op.',
  },
  {
    question: 'Kan ik zelf latex spuiten met een gehuurde verfspuit?',
    answer:
      'Dat kan, maar het is lastiger dan het lijkt. Een airless verfspuit werkt met hoge druk en geeft meer nevel dan rollen, waardoor goed afplakken en afdekken onmisbaar is. Een gelijkmatige laag zonder lopers vraagt bovendien oefening: de juiste afstand, snelheid en overlap per baan. Wie voor het eerst spuit, raakt makkelijk tijd kwijt aan afplakken en schoonmaken van de machine. Voor één kamer is rollen voor een doe-het-zelver vaak sneller en veiliger. Bij een complete woning kan uitbesteden de moeite waard zijn.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Latex spuiten of rollen? Zo maak je de juiste keuze',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Latex spuiten of rollen? Zo kies je | Schildersbedrijf040',
  metaDescription:
    'Latex spuiten of rollen? Spuiten is strakker en sneller op grote vlakken, rollen handiger in een bewoonde kamer. Vergelijk snelheid, prijs en afplakwerk.',
  excerpt:
    'Spuiten geeft een strak, streeploos resultaat en is snel op grote oppervlakken. Rollen is handiger in een bewoonde kamer of bij veel kozijnen. Zo kies je de methode die bij jouw woning past.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-2f562ce11e6405f8de6f6c5792dce9fdca121d73-1179x868-jpg' },
  },
  date: '2026-10-12',
  readTime: '6 min',
  category: 'Tips & Advies',
  keywords: [
    'latex spuiten of rollen',
    'latex spuiten voordelen',
    'latex spuiten nadelen',
    'spuiten of sauzen',
    'muren spuiten of rollen',
    'plafond spuiten of rollen',
  ],
  author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
  content,
  faq,
  relatedPosts: ['blogPost-plafond-schilderen', 'blogPost-hoe-verf-je-een-muur'].map((ref, i) => ({
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

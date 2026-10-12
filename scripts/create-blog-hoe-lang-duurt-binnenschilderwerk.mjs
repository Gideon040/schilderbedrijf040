// Script om de blogpost "Hoe lang duurt binnenschilderwerk?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-hoe-lang-duurt-binnenschilderwerk.mjs
// Schrijft alleen naar drafts.blog-hoe-lang-duurt-binnenschilderwerk. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'hoe-lang-duurt-binnenschilderwerk'
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
Binnenschilderwerk duurt korter dan veel mensen denken. Een slaapkamer of woonkamer is meestal in 1 tot 2 werkdagen klaar, een complete woning in ongeveer 5 tot 10 werkdagen. Muren drogen snel; vooral lakwerk aan kozijnen en deuren en de voorbereiding bepalen de doorlooptijd. Wonen kan gewoon door. Meer over de aanpak lees je op de pagina over [binnenschilderwerk in Eindhoven](/diensten/binnenschilderwerk).

## Hoe lang duurt binnenschilderwerk per ruimte?

De doorlooptijd hangt vooral af van wat er geschilderd wordt: alleen muren en plafond, of ook kozijnen, deuren en plinten. Deze indicaties gaan uit van een normale ondergrond, twee lagen verf en een verwarmde woning:

- **Slaapkamer, muren en plafond:** ongeveer 1 werkdag. Twee lagen muurverf passen op één dag, omdat muurverf na circa 4 uur overschilderbaar is.
- **Woonkamer, muren en plafond:** 1 tot 2 werkdagen. Meer oppervlak en vaak meer kleine reparaties.
- **Kozijnen, deuren en plinten in één ruimte lakken:** 2 tot 3 werkdagen, door schuren, gronden en aflakken met droogtijd tussen elke laag.
- **Woonkamer latex spuiten:** meestal 1 werkdag. Het afplakken kost hier de meeste tijd, het spuiten zelf gaat snel.
- **Complete woning binnen:** ongeveer 5 tot 10 werkdagen, afhankelijk van het aantal ruimtes en de hoeveelheid lakwerk.

Waarom muren sneller gaan dan lakwerk? Watergedragen muurverf is bij 20 °C na ongeveer 4 uur overschilderbaar en na 24 uur doorgehard. Een watergedragen binnenlak zoals Sikkens Rubbol BL Satura is pas na ongeveer 6 uur overschilderbaar, en tussen de lagen wordt licht geschuurd. Per laag lak gaat er dus al snel een halve werkdag heen. Een schilder vult die wachttijd door in een andere ruimte verder te werken, zodat de totale klus niet stil ligt.

## Wat maakt binnenschilderwerk sneller of langzamer?

Vijf dingen bepalen of je planning aan de korte of de lange kant uitkomt.

### De staat van muren en houtwerk

Scheurtjes, spijkergaten en loszittende verf moeten eerst gevuld, geschuurd en soms voorgestreken worden. Een muur waar net behang af is gehaald, vraagt meer voorbereiding dan een muur die vorig jaar nog geschilderd is. Nieuw stucwerk moet eerst goed droog zijn en krijgt een voorstrijkmiddel, zodat de muurverf gelijkmatig hecht. Hoe beter de ondergrond, hoe sneller de schilder bij de eerste laag verf is.

### Een grote kleurwissel

Van een donkere naar een lichte kleur, of andersom, vraagt vaak een extra laag. Dat kost bij muurverf al snel een extra halve dag, omdat ook die laag eerst moet drogen.

### Hoeveel lakwerk er is

Kozijnen, deuren, plinten en een trap zijn de tijdrovende onderdelen. Een kamer met één deur en een raam is anders dan een woonkamer met een open trap en een glazen tussendeur. Wil je het lakwerk later laten doen, dan ben je met alleen de muren veel sneller klaar.

### Temperatuur en ventilatie

Verf droogt langzamer in een koude ruimte. Bij 10 °C is muurverf pas na ongeveer 8 uur overschilderbaar in plaats van 4, en onder de 10 °C raden fabrikanten verwerken af. In een verwarmde woning is dat geen probleem, ook niet in de winter. Daarom is [schilderen in de winter](/diensten/winterschilder) voor binnenwerk een prima moment. Een beetje ventilatie helpt de verf om goed door te harden.

### Spuiten of rollen

Latex spuiten gaat bij grote, lege oppervlakken sneller dan rollen, maar vraagt meer afplakwerk. Voor één kamer met veel kozijnen weegt dat afplakken zwaarder. In de blog [latex spuiten of rollen](/blog/latex-spuiten-of-rollen) lees je wanneer welke methode tijd scheelt.

Hoe lang duurt latex spuiten dan? Een gemiddelde woonkamer, muren en plafond, is meestal in één werkdag gespoten. Het grootste deel van die dag gaat op aan afdekken en afplakken van vloer, kozijnen en stopcontacten. Het spuiten zelf gaat snel. De droogtijd is gelijk aan die van gerolde muurverf, dus ook na spuiten kun je de ruimte meestal de volgende dag weer inrichten.

## Kun je thuis blijven wonen tijdens het schilderwerk?

Ja. De meeste mensen blijven gewoon thuis wonen, omdat een schilder ruimte voor ruimte werkt. Moderne watergedragen verf ruikt weinig, en een geschilderde kamer is na een dag meestal weer te gebruiken. Met een paar afspraken vooraf verloopt het soepel:

1. **Begin met de ruimtes die je het minst gebruikt.** Een logeerkamer of zolder eerst, de woonkamer en keuken aan het eind.
2. **Plan slaapkamers slim.** Laat een slaapkamer bij voorkeur 's ochtends schilderen, zodat de verf voor de avond droog is en de ruimte kan luchten.
3. **Zet deuren en ramen op een kier.** Ventilatie helpt bij het drogen en houdt de lucht fris.
4. **Houd huisdieren en kinderen weg van natte verf.** Vooral lak voelt snel droog aan, maar is dan nog niet hard.
5. **Wees voorzichtig met vers lakwerk.** Lak heeft na het droog aanvoelen nog enkele dagen nodig om volledig door te harden. Laat deuren in die tijd niet tegen deurstoppers of meubels slaan.

Gaat het om een complete woning en wil je de overlast zo kort mogelijk houden? Dan is het soms handiger om een paar dagen bij familie te logeren terwijl de benedenverdieping wordt gedaan. Dat is geen must, wel een keuze die de planning versnelt.

## Hoe plan je binnenschilderwerk het slimst?

Vraag bij de offerte om een planning per dag. Dan weet je welke ruimte wanneer leeg moet zijn en wanneer je hem weer kunt gebruiken. Ruim vooraf kleine spullen, gordijnen en schilderijen op, dan kan de schilder direct beginnen met afdekken en voorbereiden. En combineer klussen: muren, plafonds en lakwerk in één keer laten doen gaat sneller dan drie losse afspraken, omdat de droogtijden dan overlappen.

## Gratis offerte aanvragen

Wil je weten hoe lang jouw klus duurt? Schildersbedrijf040 kijkt gratis bij je langs en maakt een offerte met een duidelijke planning. Binnenschilderwerk kost gemiddeld €30 tot €35 per m². Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel direct naar [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Wanneer kun je een geschilderde kamer weer gebruiken?',
    answer:
      'Een kamer waar alleen de muren en het plafond zijn geschilderd, kun je meestal dezelfde avond of de volgende dag weer gebruiken. Watergedragen muurverf is bij 20 °C na ongeveer een uur stofdroog en na 24 uur doorgehard. Zet meubels pas na die 24 uur weer tegen de muur, zodat er geen afdrukken in de verf komen. Is er ook gelakt, dan is de kamer na een dag bruikbaar, maar heeft het lakwerk nog enkele dagen nodig om volledig hard te worden. Ga in die periode voorzichtig om met deuren en kozijnen.',
  },
  {
    question: 'Waarom duurt lakwerk langer dan muren schilderen?',
    answer:
      'Lak heeft langere droogtijden en meer tussenstappen dan muurverf. Een watergedragen binnenlak is pas na ongeveer 6 uur overschilderbaar, tegen ongeveer 4 uur voor muurverf. Daarnaast wordt houtwerk eerst geschuurd, waar nodig gegrond of gerepareerd, en tussen de lagen opnieuw licht geschuurd en stofvrij gemaakt. Elk kozijn en elke deur heeft bovendien randen, sponningen en hoeken die met de kwast worden gedaan. Daardoor kost het lakken van de kozijnen en deuren in een kamer vaak meer tijd dan het schilderen van alle muren in diezelfde kamer.',
  },
  {
    question: 'Hoe lang duurt het om een heel huis te laten schilderen?',
    answer:
      'Voor een complete woning binnen, dus muren, plafonds en lakwerk, moet je rekenen op ongeveer 5 tot 10 werkdagen. Een appartement zonder veel lakwerk zit aan de korte kant, een eengezinswoning met trap, veel binnendeuren en oude kozijnen aan de lange kant. Buitenschilderwerk komt daar los bij en hangt sterk af van het weer. Lees daarover meer in de blog over wanneer je het beste buiten kunt schilderen. Vraag bij de offerte altijd om een planning per dag, dan weet je precies welke ruimte wanneer klaar is.',
  },
  {
    question: 'Hoeveel lagen verf komen er op een binnenmuur?',
    answer:
      'Op een binnenmuur komen meestal twee lagen muurverf. Bij nieuw of kaal stucwerk gaat daar eerst een voorstrijkmiddel onder, zodat de muur de verf gelijkmatig opneemt en er geen vlekken ontstaan. Bij een grote kleurwissel, bijvoorbeeld van donkerblauw naar gebroken wit, kan een derde laag nodig zijn. Elke extra laag betekent extra droogtijd, dus ook een iets langere planning. Een schilder ziet bij de inspectie vooraf hoeveel lagen jouw muren nodig hebben.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Hoe lang duurt binnenschilderwerk? Planning per ruimte',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Hoe lang duurt binnenschilderwerk? | Schildersbedrijf040',
  metaDescription:
    'Hoe lang duurt binnenschilderwerk? Een kamer is vaak in 1 tot 2 werkdagen klaar, een hele woning in 5 tot 10. Zie de planning per ruimte en tips voor wonen.',
  excerpt:
    'Een kamer is meestal in 1 tot 2 werkdagen klaar, een complete woning in 5 tot 10 werkdagen. Zo ziet de planning eruit, dit maakt het sneller of langzamer en zo blijf je gewoon thuis wonen.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-2f562ce11e6405f8de6f6c5792dce9fdca121d73-1179x868-jpg' },
  },
  date: '2026-10-12',
  readTime: '6 min',
  category: 'Tips & Advies',
  keywords: [
    'hoe lang duurt binnenschilderwerk',
    'hoe lang duurt latex spuiten',
    'hoe lang duurt het om een huis te schilderen',
    'hoe lang duurt het om een kamer te schilderen',
    'droogtijd muurverf',
    'wonen tijdens schilderwerk',
  ],
  author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
  content,
  faq,
  relatedPosts: ['blogPost-hoe-verf-je-een-muur', 'blogPost-plafond-schilderen', 'blogPost-verven-na-behang'].map(
    (ref, i) => ({ _type: 'reference', _ref: ref, _key: `rel${i + 1}` }),
  ),
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

// Script om de blogpost "Kitnaden vervangen: zelf doen of laten doen?" als CONCEPT (draft) aan te maken in Sanity
// Gebruik: node scripts/create-blog-kitnaden-vervangen.mjs
// Schrijft alleen naar drafts.blog-kitnaden-vervangen. Publiceert niets.

import fs from 'node:fs'

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const SLUG = 'kitnaden-vervangen'
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
Een kitnaad vervang je door de oude kit volledig weg te snijden, resten en vet te verwijderen, de juiste kit aan te brengen en die strak af te werken. Een kitrand in de badkamer of een paar meter langs een binnenkozijn kun je prima zelf doen. Kitnaden rond buitenkozijnen en glas laat je het best meenemen bij het [buitenschilderwerk](/diensten/buitenschilderwerk).

## Welke kit gebruik je waar?

De juiste kit kiezen is de halve klus. Er zijn drie soorten die je in en om het huis tegenkomt, en ze zijn niet uitwisselbaar:

- **Acrylaatkit:** overschilderbaar en glad af te werken met water. Geschikt voor naden tussen kozijn en muur, langs plinten en in hoeken die je daarna schildert. Acrylaatkit kan beperkt bewegen; de buitenvariant Zwaluw Acryl Exterior+ heeft een bewegingsopname van 12,5%. Tijdens het uitharden krimpt acrylaatkit iets.
- **Siliconenkit:** water- en schimmelbestendig, elastisch en bestand tegen temperatuurwisselingen. Dé kit voor de badkamer, het aanrecht en de douche. Siliconenkit is niet overschilderbaar: verf hecht er niet op.
- **Hybride kit (MS-polymeer):** blijvend elastisch, hecht op vrijwel elke ondergrond en is overschilderbaar. Er zijn speciale varianten voor beglazing, zoals Zwaluw Hybriseal 2PS, een overschilderbare beglazingskit voor glas- en aansluitvoegen.

De vuistregel: wil je er later overheen schilderen, gebruik dan nooit siliconenkit. Op houten kozijnen die geschilderd worden, hoort een overschilderbare kit.

## Hoe vervang je een kitnaad? Stap voor stap

Voor een kleine klus heb je een scherp afbreekmes, een kitpistool, de juiste kit, afplaktape, een ontvetter of spiritus, een doek en bij siliconenkit een kitverwijderaar nodig. Werk bij een temperatuur van minimaal 5 °C; veel kitten mogen niet kouder worden aangebracht.

1. **Oude kit wegsnijden.** Snijd met een scherp mesje langs beide zijkanten van de naad. Trek de kit daarna in een zo lang mogelijke strook los of rol hem op. Werk voorzichtig langs glas en geschilderd hout.
2. **Resten verwijderen.** Haal de laatste resten weg met het mesje of een kunststof schraper. Siliconenresten zijn hardnekkig: breng een kitverwijderaar aan, laat die inwerken tot de resten zacht zijn en neem ze af met een doek.
3. **Schoonmaken en ontvetten.** De naad moet schoon, droog, vet- en stofvrij zijn. Nieuwe kit hecht niet op oude kitresten, vet of stof.
4. **Diepe naden opvullen met rugvulling.** Is de naad dieper dan nodig, druk dan eerst een rond schuimkoord in de naad. Dat zorgt voor de juiste diepte en voorkomt dat de kit aan drie kanten hecht, zodat de kit vrij kan meebewegen.
5. **Afplakken.** Plak beide randen strak af met tape. Dan krijg je een rechte lijn en blijft er geen kit op de ondergrond achter.
6. **Kit aanbrengen.** Snijd de spuitmond schuin af op de breedte van de naad en spuit de kit in één vloeiende beweging in de naad.
7. **Afwerken.** Strijk de kit glad met een afwerkspatel of een natte vinger, voordat er een huidje op komt. Bij Zwaluw Acryl Exterior+ is dat na ongeveer 10 minuten. Trek de tape direct daarna los.
8. **Laten uitharden.** Kit hardt van buiten naar binnen uit. Acryl Exterior+ hardt bij 23 °C ongeveer 2 mm per 24 uur uit. Schilder pas na volledige uitharding.

### Hoe breed en diep moet een kitnaad zijn?

Een kitnaad werkt alleen als de verhouding tussen breedte en diepte klopt. Zwaluw geeft als regel: tot 10 mm breed is de diepte gelijk aan de breedte, met een minimum van 5 mm. Bij bredere naden is de diepte de breedte gedeeld door 3, plus 6 mm. Een naad van 18 mm breed is dus 12 mm diep. Een te dikke laag kit kan minder goed meebewegen en scheurt eerder.

## Hoe herken je een kitnaad die vervangen moet worden?

Kitnaden verouderen door zon, kou en beweging van het hout en het glas. Vervang een naad als je dit ziet:

- **Scheurtjes in de kit**, vooral in de hoeken van een raam of kozijn.
- **Kit die loslaat** van het glas, het hout of de muur, zodat er een spleet ontstaat.
- **Harde, brosse kit** die niet meer veert als je erop drukt.
- **Zwarte plekken** in siliconenkit in de badkamer die niet meer weg te poetsen zijn.

Rond het glas van buitenkozijnen is dit extra belangrijk. GND adviseert de beglazingskit bij elke onderhoudsbeurt te controleren op scheurtjes en loslatende kit, met name in de hoeken, en die te herstellen zodat er geen vocht binnendringt. Vocht dat langs het glas het kozijn in loopt, tast het isolatieglas en het hout aan.

## Wanneer laat je kitnaden vervangen?

Zelf doen is prima voor een badkamerrand, een keukenblad of een paar meter naad langs een binnenkozijn. Laat het doen als het om meer gaat dan een klein klusje:

- **Buitenkozijnen en beglazing.** Een slecht aangebrachte kitnaad rond glas laat water door, met houtrot als gevolg. Bovendien moet de kit dan in hetzelfde systeem passen als de verf.
- **Werk op hoogte.** Kozijnen op de verdieping of een dakkapel betekenen werken op een ladder of steiger.
- **Siliconenkit op geschilderd houtwerk.** Is er ooit siliconenkit gebruikt waar geschilderd moet worden, dan moet alles eruit en moeten de resten grondig worden verwijderd, anders hecht de verf niet.
- **Veel strekkende meters.** Bij een hele gevel loont het om de kitnaden in één keer met het schilderwerk mee te nemen.

Laat je je buitenschilderwerk doen, vraag dan of het controleren en vervangen van de kitnaden is opgenomen in de offerte. Dan worden de naden vervangen vóór het schilderen en is alles in één keer goed afgesloten. Wanneer je buitenwerk aan de beurt is, lees je in de blog [hoe vaak moet je buiten schilderen](/blog/hoe-vaak-buitenschilderwerk).

## Gratis offerte aanvragen

Zijn je kozijnen buiten toe aan nieuw schilderwerk en nieuwe kitnaden? Schildersbedrijf040 komt gratis kijken en maakt een offerte op maat. Kozijnen buiten schilderen kost €50 tot €100 per kozijn. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft een 5,0 op Google. [Gratis offerte aanvragen](/contact) of bel [06-38903004](tel:+31638903004).
`

const content = toPortableText(body)

const faq = [
  {
    question: 'Kun je nieuwe kit over oude kit aanbrengen?',
    answer:
      'Nee, dat is geen goed idee. Nieuwe kit hecht slecht op oude kit, en zeker niet op siliconenkit. De oude naad is bovendien vaak al gescheurd of losgekomen; als je daar een nieuwe laag overheen zet, zit het probleem er nog steeds onder. Na een paar maanden laat de nieuwe laag dan op dezelfde plekken los. Snijd de oude kit daarom altijd volledig weg, verwijder de resten en ontvet de naad. Dat is het meeste werk van de klus, maar het bepaalt hoe lang de nieuwe kitnaad meegaat.',
  },
  {
    question: 'Hoe lang moet kit uitharden voordat je kunt schilderen?',
    answer:
      'Dat hangt af van de kit en de dikte van de naad. Kit hardt van buiten naar binnen uit. Zwaluw Acryl Exterior+ hardt bij 23 °C en 50% luchtvochtigheid ongeveer 2 mm per 24 uur uit, dus een naad van 6 mm diep heeft al gauw een paar dagen nodig. De fabrikant adviseert om pas na volledige uitharding te schilderen, omdat de kit tijdens het doorharden krimpt en de verf anders kan scheuren. Bij kou en vocht duurt het langer. Kijk altijd op het technisch blad van de kit die je gebruikt.',
  },
  {
    question: 'Waarom scheurt de verf op een kitnaad?',
    answer:
      'Er zijn twee veelvoorkomende oorzaken. De eerste is te vroeg schilderen: acrylaatkit krimpt tijdens het doorharden, en verf die er al op zit, kan daardoor scheuren of barsten. De tweede is de verkeerde verf of kit: Zwaluw waarschuwt dat hooggevulde dispersieverven op acrylaatkit kunnen gaan scheuren, en daarom adviseert de fabrikant om de verf vooraf te testen. Op siliconenkit hecht verf helemaal niet. Ook een naad die meer beweegt dan de kit aankan, scheurt na verloop van tijd.',
  },
  {
    question: 'Welke kit gebruik je tussen een kozijn en de muur binnen?',
    answer:
      'Binnen gebruik je tussen een kozijn en een gestucte of geschilderde muur meestal acrylaatkit. Acrylaatkit is overschilderbaar, laat zich glad afwerken met water en is goed te gebruiken op hout, stucwerk en beton. Daardoor schilder je de naad daarna gewoon mee met de muur of het kozijn. Gebruik binnen geen siliconenkit op plekken die je wilt schilderen. Siliconenkit is bedoeld voor natte plekken zoals de douche, het bad en het aanrecht, en is niet overschilderbaar.',
  },
].map((f, i) => ({ _type: 'object', _key: `faq${i + 1}`, ...f }))

const document = {
  _id: DRAFT_ID,
  _type: 'blogPost',
  title: 'Kitnaden vervangen: zelf doen of laten doen?',
  slug: { _type: 'slug', current: SLUG },
  metaTitle: 'Kitnaden vervangen: zo doe je dat | Schildersbedrijf040',
  metaDescription:
    'Kitnaden vervangen? Oude kit verwijderen, de juiste kit kiezen en strak afwerken in 8 stappen. Plus: wanneer je kitwerk rond buitenkozijnen beter laat doen.',
  excerpt:
    'Oude kit verwijderen en een nieuwe kitnaad zetten kun je bij een klein klusje prima zelf. Zo kies je de juiste kit, zo werk je in 8 stappen en zo weet je wanneer je het beter laat doen.',
  coverImage: {
    _type: 'image',
    asset: { _type: 'reference', _ref: 'image-184e607570e9241eaac1990fb6d0ae2a6c580435-1179x1534-jpg' },
  },
  date: '2026-10-12',
  readTime: '7 min',
  category: 'How-To',
  keywords: [
    'kitnaden vervangen',
    'oude kit verwijderen',
    'kitnaad vervangen',
    'kit verwijderen',
    'siliconenkit verwijderen',
    'acrylaatkit of siliconenkit',
    'kitnaden kozijnen',
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

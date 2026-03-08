// Script om de blogpost "Verven na behang" aan te maken in Sanity
// Gebruik: node scripts/create-blog-verven-na-behang.mjs

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const TOKEN = process.env.SANITY_API_TOKEN

if (!TOKEN) {
  console.error('SANITY_API_TOKEN is niet ingesteld. Run met:')
  console.error('SANITY_API_TOKEN=<token> node scripts/create-blog-verven-na-behang.mjs')
  process.exit(1)
}

// Helper om unieke keys te genereren
let keyCounter = 0
const key = () => `block${++keyCounter}`

// Helper om een tekst-block te maken
const textBlock = (text, style = 'normal', markDefs = [], children = null) => ({
  _type: 'block',
  _key: key(),
  style,
  markDefs,
  children: children || [{ _type: 'span', _key: key(), text, marks: [] }],
})

// Helper voor block met links
const textBlockWithLinks = (style, markDefs, ...parts) => ({
  _type: 'block',
  _key: key(),
  style,
  markDefs,
  children: parts.map(p => ({
    _type: 'span',
    _key: key(),
    text: p.text,
    marks: p.marks || [],
  })),
})

const linkBinnen = { _type: 'link', _key: 'link-binnen', href: '/diensten/binnenschilderwerk' }
const linkMuur = { _type: 'link', _key: 'link-muur', href: '/blog/hoe-verf-je-een-muur' }
const linkContact = { _type: 'link', _key: 'link-contact', href: '/contact' }

const content = [
  // Intro
  textBlockWithLinks('normal', [linkMuur],
    { text: 'Verven na behang is een van de meest voorkomende klussen bij een interieurverandering. Je wilt het behang eraf, een frisse kleur op de muur en een strak resultaat. Maar hoe pak je dat aan zonder dat de verf bladdert, de lijmresten doorkomen of je drie keer opnieuw moet beginnen? In deze handleiding legt Schildersbedrijf040 stap voor stap uit hoe je een muur verft waar behang op zat, wanneer je juist over behang heen kunt schilderen en welke fouten je absoluut wilt vermijden. Heb je onze ' },
    { text: 'handleiding over muur verven', marks: ['link-muur'] },
    { text: ' al gelezen? Dan is dit artikel de perfecte aanvulling.' },
  ),

  // H2: Kun je over behang heen verven?
  textBlock('Kun je over behang heen verven?', 'h2'),

  textBlock('Ja, in bepaalde gevallen kun je over behang heen verven zonder het eerst te verwijderen. Of dit een goed idee is hangt af van het type behang, de staat waarin het verkeert en het resultaat dat je wilt bereiken. Over behang verven bespaart je de tijdrovende stap van verwijderen, maar levert alleen een goed resultaat als de omstandigheden kloppen.'),

  // H3: Wanneer wel: vliesbehang en glad behang
  textBlock('Wanneer wel: vliesbehang en glad behang', 'h3'),

  textBlock('Vliesbehang en glad papierbehang zijn geschikt om over te schilderen, mits het behang overal stevig vastzit en geen loszittende naden of luchtbellen vertoont. Vliesbehang is zelfs speciaal ontworpen om overgeschilderd te worden – veel nieuwbouwwoningen hebben om die reden vliesbehang op de muren. Test eerst of het behang goed vastzit door met een natte spons over de naden te gaan. Blijft alles zitten? Dan kun je er direct overheen sauzen met latex of muurverf.'),

  textBlock('Waarom werkt dit bij vliesbehang zo goed? Vliesbehang heeft een egale, gladde structuur die verf gelijkmatig opneemt. De verf hecht zich aan de gladde toplaag zonder dat er oneffenheden doorschijnen. Met twee lagen dekkende muurverf zie je het verschil met een geschilderde muur nauwelijks.'),

  // H3: Wanneer niet: structuurbehang en los behang
  textBlock('Wanneer niet: structuurbehang en los behang', 'h3'),

  textBlock('Bij structuurbehang, grof reliëfbehang of schuimvinyl is overschilderen geen goed idee. De grove textuur blijft namelijk zichtbaar door de verf heen, ongeacht hoeveel lagen je aanbrengt. Het resultaat is een muur die er niet uitziet als een geschilderde muur, maar als overgeschilderd behang – en dat is precies wat je wilt vermijden.'),

  textBlock('Ook als het behang loslaat bij de naden, luchtbellen vertoont of vochtschade heeft, moet het behang er eerst af. Verf over los behang trekt het behang verder los door het vocht in de verf. Binnen een paar weken zie je dan bellen en barsten verschijnen in je verse verflaag. In die gevallen is behang verwijderen en verven de enige route naar een duurzaam resultaat.'),

  // H2: Behang verwijderen: stap-voor-stap
  textBlock('Behang verwijderen: stap-voor-stap', 'h2'),

  textBlock('Als je besluit om het behang te verwijderen voordat je gaat verven, is een goede aanpak cruciaal. Haastig behang eraf trekken leidt tot beschadigde muren, achtergebleven lijmresten en uiteindelijk meer werk. Neem de tijd en volg deze stappen voor het beste resultaat.'),

  // H3: Benodigdheden
  textBlock('Benodigdheden', 'h3'),

  textBlock('Voor het verwijderen van behang heb je nodig: een behangafstomer of plantenspuit, een brede plamuurmes of behangspatels, een perforatieroller (ook wel \'tijger\' genoemd), warm water met een scheut afwasmiddel of behangverweeker, afdekfolie voor de vloer en emmer voor de behangstroken. Een behangafstomer huur je bij de bouwmarkt voor ongeveer 15-25 euro per dag en is de investering absoluut waard bij meer dan 10 m² behang.'),

  // H3: Behang weken en verwijderen
  textBlock('Behang weken en verwijderen', 'h3'),

  textBlock('Begin met het perforeren van het behang met de perforatieroller. Dit werktuig maakt kleine gaatjes in het behang waardoor het water tot achter het behang en de lijmlaag kan doordringen. Zonder perforatie blijft het water op het oppervlak liggen en weekt het behang niet los – vooral bij vinyl- en wasbaar behang is deze stap onmisbaar.'),

  textBlock('Breng vervolgens ruim warm water met behangverweeker aan met een plantenspuit of brede kwast. Laat dit 10-15 minuten intrekken. De lijm onder het behang lost op in het water, waardoor het behang makkelijk loskomt. Begin onderaan de muur en werk naar boven. Trek het behang in brede stroken van de muur – gebruik de plamuurmes om hardnekkige stukken voorzichtig los te wrikken zonder de onderliggende stuclaag te beschadigen.'),

  textBlock('Bij meerdere lagen behang over elkaar moet je dit proces per laag herhalen. Het heeft geen zin om te proberen drie lagen tegelijk te verwijderen – de onderste laag zit dan nog steeds vast. Reken op 30-45 minuten per muurvlak van ongeveer 8 m².'),

  // H3: Lijmresten verwijderen
  textBlock('Lijmresten verwijderen', 'h3'),

  textBlock('Na het verwijderen van het behang zitten er vrijwel altijd lijmresten op de muur. Deze resten zijn de grootste valkuil bij muur verven na behang verwijderen. Lijmresten verhinderen dat de verf goed hecht aan de muur en veroorzaken vlekken, bellen en afbladderende verf.'),

  textBlock('Was de muur grondig af met warm water en een spons. Gebruik bij hardnekkige lijmresten een scheut ammoniak (1 eetlepel op 5 liter water) of een speciale lijmrestverwijderaar. Spoel na met schoon water en laat de muur minimaal 24 uur drogen. Hoe weet je of alle lijmresten weg zijn? Strijk met je hand over de droge muur – voelt het glad en niet plakkerig? Dan is de muur klaar voor de volgende stap.'),

  // H2: Muur voorbereiden na behang verwijderen
  textBlock('Muur voorbereiden na behang verwijderen', 'h2'),

  textBlock('De voorbereiding na het verwijderen van behang bepaalt of je eindresultaat er professioneel uitziet of juist alle oneffenheden laat zien. Deze stappen kosten tijd, maar besparen je het dubbele werk van opnieuw moeten beginnen.'),

  // H3: Schuren en egaliseren
  textBlock('Schuren en egaliseren', 'h3'),

  textBlock('Inspecteer de kale muur op beschadigingen. Bij het verwijderen van behang komen vrijwel altijd kleine scheurtjes, gaatjes van pluggen en beschadigingen aan de stuclaag aan het licht. Vul alle oneffenheden met muurvuller of lichte plamuur. Breng de plamuur aan met een breed plamuurmes en laat minimaal 2 uur drogen, afhankelijk van het product.'),

  textBlock('Schuur de gerepareerde plekken vlak met schuurpapier korrel 120-150 en schuur vervolgens de hele muur licht op met korrel 180. Waarom de hele muur schuren? Omdat behanglijm de ondergrond ongelijkmatig heeft gemaakt. Licht opschuren zorgt voor een egale, licht ruwe ondergrond waarop de verf optimaal hecht. Verwijder al het schuurstof met een vochtige doek of stofzuiger.'),

  // H3: Primer of voorstrijk aanbrengen
  textBlock('Primer of voorstrijk aanbrengen', 'h3'),

  textBlock('Primer of voorstrijk is bij muur verven na behang geen optie maar een noodzaak. De kale muur zuigt verf ongelijkmatig op, waardoor je vlekken en kleurverschillen krijgt, zelfs na drie lagen muurverf. Een goede primer sluit de ondergrond af, zorgt voor gelijkmatige zuiging en verbetert de hechting van de verflaag.'),

  textBlock('Gebruik een fixerende voorstrijk bij zuigende of poederige ondergronden. Test de zuigkracht door een natte spons tegen de muur te drukken. Trekt het water binnen 10 seconden weg? Dan is voorstrijken absoluut noodzakelijk. Breng de primer aan met een roller en laat minimaal 4-6 uur drogen voordat je begint met verven. Deze ene extra stap scheelt je minstens één laag muurverf en levert een zichtbaar egaler eindresultaat.'),

  // H2: Behang sauzen – wanneer en hoe?
  textBlock('Behang sauzen – wanneer en hoe?', 'h2'),

  textBlock('Behang sauzen is een populaire keuze wanneer het bestaande behang nog goed vastzit en je snel een kleurverandering wilt. Het bespaart de arbeid van verwijderen, schuren en voorstrijken. Maar niet elke verf is geschikt en de techniek verschilt van het schilderen van een kale muur.'),

  // H3: Welke verf gebruik je op behang?
  textBlock('Welke verf gebruik je op behang?', 'h3'),

  textBlock('Voor behang sauzen gebruik je bij voorkeur latex muurverf of acrylaat muurverf. Kies een verf met goede dekking – een dekkende muurverf van een A-merk (Flexa, Histor, Sikkens) dekt in twee lagen, waar een budgetverf er vier nodig heeft. Bij donker behang dat je licht wilt overschilderen is een isolerende primer als eerste laag aan te raden, anders blijft de donkere kleur doorschemeren.'),

  textBlock('Welke glansgraad kies je? Mat en zijdemat zijn het meest geschikt voor behang, omdat ze kleine oneffenheden in de behangstructuur camoufleren. Zijdeglans en hoogglans benadrukken juist elke textuur en naad, waardoor het behang eronder zichtbaar wordt. Kies dus mat of zijdemat tenzij je vliesbehang hebt dat speciaal voor overschilderen is bedoeld.'),

  // H3: Tips voor een strak resultaat
  textBlock('Tips voor een strak resultaat', 'h3'),

  textBlock('Begin met het bijwerken van alle naden en randen. Als naden licht opkrullen, lijm ze eerst opnieuw vast met nadenlijm en laat dit volledig drogen voordat je gaat verven. Droog schilderen over loszittende naden maakt het probleem alleen maar erger – de verf trekt de naden verder open.'),

  textBlock('Breng de eerste laag verdund aan: meng 10% water door de verf voor de eerste laag. Waarom verdunnen? Een verdunde eerste laag trekt beter in het behang en voorkomt dat je met een te dikke laag het behang losweekt. De tweede laag breng je onverdund aan voor optimale dekking. Rol altijd in één richting en werk nat-in-nat om strepen te voorkomen. Laat tussen de lagen minimaal 4-6 uur droogtijd, ook als de verf eerder droog aanvoelt.'),

  // H2: Veelgemaakte fouten bij verven na behang
  textBlock('Veelgemaakte fouten bij verven na behang', 'h2'),

  textBlock('De meest gemaakte fout is het overslaan van de voorbereiding. Geen lijmresten verwijderen, niet gronden, geen naden controleren – het bespaart je een uur werk maar kost je een heel weekend opnieuw doen als de verf na een week begint te bladderen of vlekken vertoont.'),

  textBlock('Fout twee is te veel verf in één keer aanbrengen. Bij behang sauzen is dit extra riskant omdat het vocht in dikke verflagen het behang kan loswerken. De behanglijm lost opnieuw op en het behang begint te bellen onder de natte verflaag. Twee dunne lagen zijn altijd beter dan één dikke laag – dit geldt voor elke verfsituatie, maar bij behang is het cruciaal.'),

  textBlock('Fout drie is de verkeerde verf kiezen. Alkydverf (op terpentinebasis) is niet geschikt voor behang omdat de oplosmiddelen het behang aantasten. Gebruik uitsluitend watergedragen latex of acrylaat muurverf. Controleer ook of je verf geschikt is voor de specifieke ondergrond – niet alle muurverven hechten even goed op vinyl behang.'),

  textBlock('Fout vier is geen proefvlak maken. Schilder eerst een klein stuk van ongeveer 50x50 cm en wacht 24 uur. Laat het behang los? Trekt de kleur eronder door? Ziet de structuur er ongewenst uit? Dan weet je dit op tijd en kun je alsnog beslissen het behang te verwijderen, in plaats van een hele kamer opnieuw te moeten doen.'),

  // H2: Liever een professional? Vraag een offerte aan
  textBlockWithLinks('h2', [], { text: 'Liever een professional? Vraag een offerte aan' }),

  textBlockWithLinks('normal', [linkBinnen, linkContact],
    { text: 'Behang verwijderen en een muur strak verven is vakwerk dat tijd en geduld vraagt. Bij Schildersbedrijf040 hebben we dagelijks te maken met muren waar behang op heeft gezeten – van nieuwbouw met vliesbehang tot jaren \'70 woningen met drie lagen structuurbehang over elkaar. Ons team van vakmensen zorgt voor een vlekkeloos resultaat, van het verwijderen van het behang tot en met de laatste verflaag. Bekijk onze ' },
    { text: 'binnenschilderwerk diensten', marks: ['link-binnen'] },
    { text: ' voor meer informatie over wat we kunnen betekenen.' },
  ),

  textBlockWithLinks('normal', [linkContact],
    { text: 'Benieuwd wat het kost om je muren professioneel te laten schilderen na het verwijderen van behang? Wij maken graag een vrijblijvende offerte op maat. Neem ' },
    { text: 'contact', marks: ['link-contact'] },
    { text: ' met ons op of bel direct naar 06-38903004 – we staan je graag te woord.' },
  ),
]

const document = {
  _type: 'blogPost',
  title: 'Verven Na Behang: Alles Wat Je Moet Weten [2026 Gids]',
  slug: { _type: 'slug', current: 'verven-na-behang' },
  metaTitle: 'Verven Na Behang | Behang Verwijderen & Sauzen Tips [2026]',
  metaDescription: 'Muur verven na behang verwijderen? Of juist over behang heen sauzen? Complete handleiding met tips van de vakman. Stap-voor-stap uitleg voor een strak resultaat.',
  excerpt: 'Behang eraf en verven, of juist over behang heen sauzen? Ontdek wanneer welke aanpak het beste werkt en vermijd de meest gemaakte fouten.',
  date: '2026-03-08',
  readTime: '10 min',
  category: 'How-To',
  keywords: [
    'verven na behang',
    'muur verven waar behang op zat',
    'muur verven na behang',
    'verven na behang verwijderen',
    'behang sauzen',
    'behang verven',
    'behang schilderen',
    'sauzen over behang',
    'behang verwijderen en verven',
    'behang eraf halen en verven',
    'verven over behang',
    'over behang verven',
    'muur verven na behang verwijderen',
  ],
  author: {
    name: 'Jordy Jacobs',
    role: 'Eigenaar Schildersbedrijf040',
  },
  content,
  faq: [
    {
      _type: 'object',
      _key: 'faq1',
      question: 'Kan je over behang verven?',
      answer: 'Ja, je kunt over behang verven als het behang glad is (vliesbehang of glad papierbehang), overal stevig vastzit en geen luchtbellen of loszittende naden heeft. Gebruik latex of acrylaat muurverf in een matte of zijdematte glansgraad. Bij structuurbehang, loszittend behang of meerdere lagen behang over elkaar is verwijderen de betere keuze.',
    },
    {
      _type: 'object',
      _key: 'faq2',
      question: 'Moet je gronden na behang verwijderen?',
      answer: 'Ja, gronden (voorstrijken) na het verwijderen van behang is noodzakelijk. De kale muur zuigt verf ongelijkmatig op, waardoor je vlekken en kleurverschillen krijgt. Een fixerende voorstrijk sluit de ondergrond af, zorgt voor gelijkmatige zuiging en verbetert de hechting. Dit scheelt je minstens één extra laag muurverf en levert een egaler resultaat.',
    },
    {
      _type: 'object',
      _key: 'faq3',
      question: 'Hoeveel lagen verf na behang verwijderen?',
      answer: 'Na het verwijderen van behang heb je minimaal één laag primer of voorstrijk nodig, gevolgd door twee lagen muurverf. Bij een grote kleurovergang (donker naar licht) kan een extra laag nodig zijn. Gebruik kwaliteitsverf van een A-merk – deze dekt in twee lagen, terwijl budgetverf er soms vier nodig heeft.',
    },
  ],
}

async function createBlogPost() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`

  const mutations = [
    {
      createOrReplace: {
        ...document,
        _id: 'blogPost-verven-na-behang',
      },
    },
  ]

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    })

    const result = await response.json()

    if (response.ok) {
      console.log('Blogpost succesvol aangemaakt!')
      console.log('Document ID:', result.results?.[0]?.id)
      console.log('Bekijk op: https://schildersbedrijf040.nl/blog/verven-na-behang')
    } else {
      console.error('Fout bij aanmaken:', JSON.stringify(result, null, 2))
    }
  } catch (error) {
    console.error('Fout:', error.message)
  }
}

createBlogPost()

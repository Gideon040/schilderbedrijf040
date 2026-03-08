// Script om de blogpost "Plafond Schilderen" aan te maken in Sanity
// Gebruik: SANITY_API_TOKEN=<token> node scripts/create-blog-plafond-schilderen.mjs

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const TOKEN = process.env.SANITY_API_TOKEN

if (!TOKEN) {
  console.error('SANITY_API_TOKEN is niet ingesteld. Run met:')
  console.error('SANITY_API_TOKEN=<token> node scripts/create-blog-plafond-schilderen.mjs')
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

// Helper voor block met links en/of bold
const textBlockWithParts = (style, markDefs, ...parts) => ({
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

// Link definities
const linkBinnen = { _type: 'link', _key: 'link-binnen', href: '/diensten/binnenschilderwerk' }
const linkMuur = { _type: 'link', _key: 'link-muur', href: '/blog/hoe-verf-je-een-muur' }
const linkContact = { _type: 'link', _key: 'link-contact', href: '/contact' }

const content = [
  // ── Intro ──
  textBlockWithParts('normal', [linkMuur],
    { text: 'Plafond schilderen is een klus die de meeste doe-het-zelvers uitstellen — en dat is begrijpelijk. Boven je hoofd werken is zwaarder dan een muur verven, de verf druppelt in je gezicht en strepen in het plafond vallen genadeloos op bij daglicht. Toch is een fris wit plafond het verschil tussen een verzorgd interieur en een ruimte die moe oogt. In deze handleiding deelt Schildersbedrijf040 de exacte werkwijze die wij dagelijks toepassen: van de juiste verfrichting en plafondverf tot de voorbereiding die het verschil maakt. Heb je ook je ' },
    { text: 'muren nodig? Lees dan onze muurgids', marks: ['link-muur'] },
    { text: ' als aanvulling.' },
  ),

  // ── H2: Plafond schilderen in de lengte of breedte? ──
  textBlock('Plafond schilderen in de lengte of breedte?', 'h2'),

  textBlock('De meest gestelde vraag bij plafond sauzen is: werk je in de lengte of in de breedte van de kamer? Het antwoord hangt af van één factor — de richting van het licht. Schilder je de verkeerde kant op, dan worden rolstrepen zichtbaar zodra de zon naar binnen valt. Schilder je mee met het licht, dan verdwijnen die strepen optisch en oogt het plafond egaal en strak.'),

  // H3: De vuistregel: richting van het licht
  textBlock('De vuistregel: richting van het licht', 'h3'),

  textBlock('De vuistregel bij plafond verven is simpel: rol altijd in de richting van het raam, dus mee met de lichtinval. Staat het raam aan de korte zijde van de kamer? Dan rol je in de lengterichting. Staat het raam aan de lange zijde? Dan rol je in de breedte. Bij meerdere ramen aan verschillende wanden kies je het raam waar het meeste daglicht doorheen komt — in de meeste Nederlandse woningen is dat het raam op het zuiden of westen.'),

  textBlock('Waarom werkt dit? Daglicht dat over het plafond strijkt, legt elke oneffenheid in de verflaag bloot. Rolstrepen ontstaan waar de roller keert en een licht verhoogde rand achterlaat. Door in de richting van het licht te rollen, strijkt het daglicht langs de strepen in plaats van er dwars overheen — waardoor ze onzichtbaar worden.'),

  // H3: Waarom dit uitmaakt voor het eindresultaat
  textBlock('Waarom dit uitmaakt voor het eindresultaat', 'h3'),

  textBlock('Het verschil tussen de goede en de verkeerde richting is niet subtiel. Bij plafond sauzen in de verkeerde richting zie je binnen een dag lichte schaduwbanden over het hele plafond — vooral in kamers met veel daglicht. Dit effect verdwijnt niet met een extra laag verf, omdat elke laag dezelfde rolstrepen achterlaat. De enige oplossing is opnieuw beginnen in de juiste richting. Neem dus altijd even de tijd om de lichtinval te bepalen voordat je de eerste rol oppakt.'),

  // ── H2: Voorbereiding: plafond schuren voor verven ──
  textBlock('Voorbereiding: plafond schuren voor verven', 'h2'),

  textBlock('Een goed geschuurd plafond is de basis van een strak verfresultaat. Plafond schuren voor verven zorgt ervoor dat de nieuwe laag goed hecht, vlekken van rook of vocht worden verwijderd en oneffenheden worden gladgestreken. Sla je deze stap over, dan zie je na het drogen elke oneffenheid terug in het eindresultaat.'),

  // H3: Wanneer schuren noodzakelijk is
  textBlock('Wanneer schuren noodzakelijk is', 'h3'),

  textBlock('Plafond schuren is noodzakelijk wanneer het bestaande plafond al een of meerdere lagen verf heeft, wanneer er nicotinevlekken of watervlekken zichtbaar zijn, wanneer de oude verflaag bladdert of loslaat, of wanneer er plamuurplekken zitten van eerdere reparaties. Bij een volledig nieuw stucwerk plafond dat nog nooit geverfd is, is licht schuren met korrel 180 voldoende om de primer gelijkmatig te laten hechten.'),

  // H3: Hoe schuur je een plafond goed?
  textBlock('Hoe schuur je een plafond goed?', 'h3'),

  textBlock('Gebruik een schuurblok of handschuurmachine met korrel 120 voor het verwijderen van oneffenheden en oude verfresten. Werk het hele plafond systematisch af in banen, net zoals je later gaat verven. Schuur niet op één plek te lang — dat veroorzaakt deuken in het stucwerk. Na het grof schuren ga je over het hele oppervlak met korrel 180 voor een egale, licht ruwe structuur.'),

  textBlock('Verwijder al het schuurstof grondig met een vochtige doek of stofzuiger met zachte borstel. Schuurstof dat achterblijft, mengt zich met de verf en veroorzaakt een korrelig oppervlak dat niet meer glad wordt. Breng na het schuren altijd een laag fixerende voorstrijk aan — dit sluit het plafond af en voorkomt dat zuigende plekken de verf ongelijkmatig opnemen.'),

  // ── H2: Welke plafondverf kies je? ──
  textBlock('Welke plafondverf kies je?', 'h2'),

  textBlock('De keuze van plafondverf bepaalt het eindresultaat minstens zo sterk als de techniek. Een goede plafondverf spat minder, dekt beter en droogt streepvrij op. Niet elke muurverf is geschikt voor plafonds — het verschil zit in de viscositeit en het druipgedrag.'),

  // H3: Latex vs muurverf vs kalkverf
  textBlock('Latex vs muurverf vs kalkverf', 'h3'),

  textBlock('Latex muurverf is de meest gebruikte keuze voor plafond schilderen in Nederlandse woningen. Latex is watergedragen, ruikt nauwelijks en droogt snel. Kies een latex die specifiek als plafondverf wordt aangeboden — deze heeft een dikkere consistentie waardoor de verf minder druppelt bij het boven je hoofd aanbrengen. Merken als Boonstoppel, Sikkens en Histor hebben speciale plafondlatex in hun assortiment.'),

  textBlock('Kalkverf is een traditioneel alternatief dat een karakteristieke, licht poederige uitstraling geeft. Kalkverf ademt mee met de ondergrond en is ideaal voor monumentale panden of woningen met vochtproblemen. Het nadeel is dat kalkverf minder goed dekt dan latex en meer vakkennis vereist bij het aanbrengen. Gewone muurverf is in principe bruikbaar voor plafonds, maar druppelt meer dan gespecialiseerde plafondverf — reken op meer spatten en een langzamer werkproces.'),

  // H3: Mat, zijdeglans of hoogglans?
  textBlock('Mat, zijdeglans of hoogglans?', 'h3'),

  textBlock('Voor plafonds is matte verf vrijwel altijd de beste keuze. Mat camoufleert kleine oneffenheden in het stucwerk, reflecteert geen licht en geeft een rustige, egale uitstraling. Zijdeglans kan in badkamers en keukens — de lichte glans maakt het plafond beter afwasbaar en bestand tegen vocht. Hoogglans op een plafond is af te raden tenzij het plafond perfect vlak is, omdat hoogglans elke oneffenheid, rolstreep en reparatie genadeloos zichtbaar maakt.'),

  // ── H2: Plafond schilderen: stap voor stap ──
  textBlock('Plafond schilderen: stap voor stap', 'h2'),

  textBlock('Een goed geschilderd plafond ontstaat niet door gewoon verf op een roller te smeren en boven je hoofd heen en weer te gaan. De volgorde, techniek en droogtijd bepalen of het resultaat er professioneel uitziet. Hieronder de werkwijze die Schildersbedrijf040 bij elk plafondproject hanteert.'),

  textBlock('Begin met het afplakken van de randen waar het plafond de muren raakt. Gebruik een kwalitatieve schilderstape en druk de tape stevig aan om onderkruipen te voorkomen. Dek de vloer en meubels af met afdekfolie. Schilder eerst de randen en hoeken met een platte kwast van 5 centimeter — dit heet \'aanzetten\'. Werk hierbij ongeveer 5-8 centimeter vanuit de hoek het plafond op.'),

  textBlock('Pak vervolgens een korteharige roller van 18-25 centimeter breed. Doop de roller in de verf en rol het overtollige eruit op het rooster. Begin bij het raam en rol in banen van maximaal 1 meter breed, altijd in de richting van het licht. Werk nat-in-nat: zorg dat de vorige baan nog vochtig is wanneer je de volgende ernaast aanbrengt. Dit voorkomt zichtbare aanzetten en strepen.'),

  textBlock('Laat de eerste laag minimaal 4-6 uur drogen. Bij plafond witten is de verleiding groot om snel een tweede laag aan te brengen, maar een niet volledig gedroogde eerste laag laat los bij het aanbrengen van de tweede laag — met een vlekkerig resultaat als gevolg. Breng de tweede laag aan op dezelfde manier: zelfde richting, zelfde techniek, nat-in-nat.'),

  // ── H2: Hoe lang duurt plafond witten? ──
  textBlock('Hoe lang duurt plafond witten?', 'h2'),

  textBlock('Hoe lang plafond witten duurt hangt af van de grootte van de ruimte, de staat van het plafond en het aantal lagen dat nodig is. Als richtlijn rekent Schildersbedrijf040 met de volgende tijden voor een gemiddelde kamer van 12-15 m²: voorbereiding en afplakken kost 30-45 minuten, schuren en stofvrij maken 30-60 minuten, primer aanbrengen en laten drogen een halve dag, de eerste verflaag aanbrengen 45-60 minuten, droogtijd 4-6 uur, en de tweede verflaag nog eens 45-60 minuten.'),

  textBlock('In totaal ben je voor een plafond van een gemiddelde woonkamer minimaal een volle dag kwijt, inclusief droogtijden. Bij een plafond dat in slechte staat verkeert — met scheuren, vlekken of bladderende verf — komt daar een halve tot hele dag voorbereiding bij. Een ervaren schilder werkt sneller en efficiënter, waardoor de totale doorlooptijd korter is en het resultaat direct goed.'),

  // ── H2: 5 veelgemaakte fouten bij plafond schilderen ──
  textBlock('5 veelgemaakte fouten bij plafond schilderen', 'h2'),

  textBlock('De eerste fout is te weinig verf op de roller. Een halfdroge roller laat strepen en een ongelijkmatige dekking achter. Doop de roller goed in de verf, rol overtollige verf eruit op het rooster, maar zorg dat de roller gelijkmatig gevuld is. Een goed gevulde roller glijdt moeiteloos over het plafond.'),

  textBlock('De tweede fout is te snel werken zonder nat-in-nat door te rollen. Zodra de rand van de vorige baan opdroogt voordat je de volgende aanbrengt, ontstaat een zichtbare aanzet — een streep die na het drogen permanent zichtbaar blijft. Werk daarom altijd in een tempo waarin je de vorige baan nog vochtig kunt overlappen.'),

  textBlock('De derde fout is de verkeerde roller gebruiken. Een langharige roller geeft een sinaasappelhuid-structuur op het plafond. Kies een kortharige viltroller of een lakroller voor een glad resultaat. De vierde fout is de droogtijd niet respecteren. Verf die droog aanvoelt is niet per se doorgehard — breng de tweede laag pas aan na de door de fabrikant opgegeven droogtijd.'),

  textBlock('De vijfde fout is het plafond schilderen zonder het eerst te isoleren van vlekken. Nicotinevlekken, waterkringen en roestvlekken van oude lekkages trekken door reguliere muurverf heen, ook na drie lagen. Gebruik bij vlekken altijd eerst een isolerende primer zoals Sigma Isoprim of Sikkens Alpha Isoleerfix. Eén laag is voldoende om de vlekken permanent af te dekken.'),

  // ── H2: Hulp nodig? Schakel een vakman in ──
  textBlockWithParts('h2', [], { text: 'Hulp nodig? Schakel een vakman in' }),

  textBlockWithParts('normal', [linkBinnen, linkContact],
    { text: 'Plafond schilderen is fysiek zwaar werk en vereist de juiste techniek voor een streepvrij resultaat. Bij Schildersbedrijf040 schilderen we wekelijks plafonds in woningen door heel Eindhoven en omgeving — van kleine badkamerplafonds tot grote woonkamers met hoge plafonds. Wij werken uitsluitend met Boonstoppel verf en leveren een resultaat waar je jarenlang van geniet. Bekijk onze ' },
    { text: 'binnenschilderwerk diensten', marks: ['link-binnen'] },
    { text: ' voor meer informatie.' },
  ),

  textBlockWithParts('normal', [linkContact],
    { text: 'Wil je weten wat het kost om je plafond professioneel te laten schilderen? Wij maken graag een vrijblijvende offerte op maat. ' },
    { text: 'Neem contact op', marks: ['link-contact'] },
    { text: ' of bel direct naar 06-38903004 — we helpen je graag verder.' },
  ),
]

const document = {
  _type: 'blogPost',
  title: 'Plafond Schilderen: De Complete Handleiding met Tips van de Vakman',
  slug: { _type: 'slug', current: 'plafond-schilderen' },
  metaTitle: 'Plafond Schilderen: Tips, Richting & Voorbereiding [2026 Gids]',
  metaDescription: 'Plafond schilderen of witten? Complete handleiding: lengte of breedte, welke verf, schuren & stap-voor-stap tips van de vakman. Vermijd de 5 meest gemaakte fouten.',
  excerpt: 'Plafond schilderen zonder strepen? Leer de juiste richting, de beste plafondverf en de voorbereiding die het verschil maakt — tips van een vakman met jarenlange ervaring.',
  date: '2026-03-10',
  readTime: '9 min',
  category: 'How-To',
  keywords: [
    'plafond schilderen',
    'plafond sauzen',
    'plafond verven',
    'plafond witten',
    'plafond schilderen lengte of breedte',
    'plafond sauzen in de lengte of breedte',
    'plafond schuren',
    'plafond schuren voor verven',
    'plafond verven tips',
    'plafond schilderen tips',
    'plafond verf',
    'hoe lang duurt plafond witten',
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
      question: 'Hoeveel kost plafond schilderen?',
      answer: 'De kosten voor plafond schilderen liggen gemiddeld tussen de €8 en €15 per vierkante meter, afhankelijk van de staat van het plafond, het aantal lagen dat nodig is en of er voorbereidend werk zoals schuren en plamuren bij komt. Een gemiddelde woonkamer van 15 m² kost dus tussen de €120 en €225. Bij Schildersbedrijf040 maken we altijd een vrijblijvende offerte op maat.',
    },
    {
      _type: 'object',
      _key: 'faq2',
      question: 'Moet je een plafond schuren voor het verven?',
      answer: 'Ja, plafond schuren voor verven is sterk aan te raden als er al verf op het plafond zit. Schuren met korrel 120-180 zorgt voor een licht ruwe ondergrond waarop de nieuwe verf goed hecht. Bij een nieuw, onbehandeld stucwerk plafond volstaat licht schuren met korrel 180 gevolgd door een laag fixerende voorstrijk.',
    },
    {
      _type: 'object',
      _key: 'faq3',
      question: 'Schilder je een plafond in de lengte of breedte?',
      answer: 'Schilder een plafond altijd in de richting van het raam, dus mee met de lichtinval. Staat het raam aan de korte zijde, dan rol je in de lengterichting. Staat het raam aan de lange zijde, dan rol je in de breedte. Door mee te rollen met het licht worden rolstrepen onzichtbaar.',
    },
    {
      _type: 'object',
      _key: 'faq4',
      question: 'Hoeveel lagen verf heeft een plafond nodig?',
      answer: 'Een plafond heeft minimaal twee lagen verf nodig voor een egaal, dekkend resultaat. Daarnaast is één laag primer of voorstrijk aan te raden, zeker bij zuigende of vlekkerige ondergronden. Bij een grote kleuromslag — bijvoorbeeld van geel naar wit — kan een derde verflaag nodig zijn.',
    },
    {
      _type: 'object',
      _key: 'faq5',
      question: 'Welke verf gebruik je voor een plafond?',
      answer: 'Gebruik matte latex plafondverf voor de meeste woonruimtes. Plafondverf heeft een dikkere consistentie dan gewone muurverf waardoor het minder druppelt. Voor badkamers en keukens is zijdematte latex beter omdat deze beter bestand is tegen vocht. Merken als Boonstoppel, Sikkens en Histor bieden speciale plafondverf aan.',
    },
    {
      _type: 'object',
      _key: 'faq6',
      question: 'Hoe voorkom je strepen bij plafond schilderen?',
      answer: 'Voorkom strepen door altijd in de richting van het licht te rollen, nat-in-nat te werken zodat er geen droge randen ontstaan, een goed gevulde kortharige roller te gebruiken en voldoende droogtijd tussen de lagen aan te houden. Werk in banen van maximaal 1 meter breed en zorg dat elke baan de vorige overlapt terwijl die nog nat is.',
    },
    {
      _type: 'object',
      _key: 'faq7',
      question: 'Hoe lang duurt het om een plafond te witten?',
      answer: 'Voor een gemiddelde kamer van 12-15 m² ben je inclusief voorbereiding, schuren, primer en twee verflagen minimaal een volle dag kwijt. Het daadwerkelijke schilderen kost ongeveer 45-60 minuten per laag, maar de droogtijden (4-6 uur tussen de lagen) bepalen de totale doorlooptijd.',
    },
    {
      _type: 'object',
      _key: 'faq8',
      question: 'Kun je een plafond schilderen zonder schuren?',
      answer: 'Bij een schoon, vlak plafond zonder vlekken of bladderende verf kun je soms zonder schuren schilderen, mits je een goede hechtprimer gebruikt. In de meeste gevallen is licht opschuren echter aan te raden — het kost 30 minuten extra maar voorkomt dat de nieuwe verf loslaat of ongelijkmatig dekt.',
    },
  ],
}

async function createBlogPost() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`

  const mutations = [
    {
      createOrReplace: {
        ...document,
        _id: 'blogPost-plafond-schilderen',
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
      console.log('Blogpost "Plafond Schilderen" succesvol aangemaakt!')
      console.log('Document ID:', result.results?.[0]?.id)
      console.log('Bekijk op: https://schildersbedrijf040.nl/blog/plafond-schilderen')
    } else {
      console.error('Fout bij aanmaken:', JSON.stringify(result, null, 2))
    }
  } catch (error) {
    console.error('Fout:', error.message)
  }
}

createBlogPost()

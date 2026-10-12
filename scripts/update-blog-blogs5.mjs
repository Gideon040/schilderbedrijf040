// Briefing 12 (blogs5): werkt vijf bestaande blogs bij als DRAFT in Sanity.
// Het gepubliceerde document blijft ongewijzigd; Jordy of Gideon publiceren later in Sanity Studio.
//
// Per blog:
//  - korte openingsalinea met direct antwoord vóór de bestaande intro
//  - blok "Liever laten doen?" aan het eind (dienst + /diensten/winterschilder + /contact)
//  - em dashes en en dashes vervangen door punt, komma of dubbele punt (vaste tabel per fragment)
//  - btw-blog: correcties volgens belastingdienst.nl (materialen vallen ook onder 9%, termijn telt vanaf eerste ingebruikname)
//
// Gebruik:  node --env-file=.env.local scripts/update-blog-blogs5.mjs          (proefrun, schrijft niets)
//           node --env-file=.env.local scripts/update-blog-blogs5.mjs --write  (schrijft de drafts)

const PROJECT_ID = 'lrd4dy39'
const DATASET = 'production'
const API = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data`
const TOKEN = process.env.SANITY_API_TOKEN
const WRITE = process.argv.includes('--write')

if (!TOKEN) {
  console.error('SANITY_API_TOKEN ontbreekt. Draai met: node --env-file=.env.local scripts/update-blog-blogs5.mjs')
  process.exit(1)
}

// ---------- helpers ----------
let k = 0
const key = (p) => `b5-${p}-${++k}`

const p = (style, parts) => {
  const markDefs = []
  const children = parts.map((part) => {
    if (typeof part === 'string') return { _type: 'span', _key: key('s'), text: part, marks: [] }
    const mk = key('l')
    markDefs.push({ _type: 'link', _key: mk, href: part.href })
    return { _type: 'span', _key: key('s'), text: part.text, marks: [mk] }
  })
  return { _type: 'block', _key: key('blk'), style, markDefs, children }
}
const L = (text, href) => ({ text, href })
const TEL = L('06-38903004', 'tel:+31638903004')

const blockText = (b) => (b.children || []).map((c) => c.text).join('')

// Vervang de volledige tekst van een blok met één span (alleen voor blokken zonder links)
function setBlockText(doc, index, oud, nieuw) {
  const b = doc.content[index]
  if (b.children.length !== 1 || blockText(b) !== oud) throw new Error(`Blok ${index} komt niet overeen:\n${blockText(b)}`)
  b.children[0].text = nieuw
}
function setFaq(doc, i, veld, oud, nieuw) {
  if (doc.faq[i][veld] !== oud) throw new Error(`FAQ ${i}.${veld} komt niet overeen:\n${doc.faq[i][veld]}`)
  doc.faq[i][veld] = nieuw
}

// Vervangt in alle strings (behalve _velden) elk fragment precies één keer
function replaceDashes(doc, tabel) {
  const gevonden = new Map(tabel.map(([van]) => [van, 0]))
  const walk = (v) => {
    if (typeof v === 'string') {
      let s = v
      for (const [van, naar] of tabel) {
        if (s.includes(van)) {
          gevonden.set(van, gevonden.get(van) + s.split(van).length - 1)
          s = s.split(van).join(naar)
        }
      }
      return s
    }
    if (Array.isArray(v)) return v.map(walk)
    if (v && typeof v === 'object') {
      const out = {}
      for (const [kk, x] of Object.entries(v)) out[kk] = kk.startsWith('_') || kk === 'slug' ? x : walk(x)
      return out
    }
    return v
  }
  const res = walk(doc)
  for (const [van, n] of gevonden) if (n !== 1) throw new Error(`Fragment ${n}x gevonden (verwacht 1): ${van}`)
  const rest = JSON.stringify(res).match(/[—–]/g)
  if (rest) throw new Error(`Nog ${rest.length} dashes over in ${doc.slug.current}`)
  return { doc: res, aantal: tabel.reduce((n, [van]) => n + (van.match(/[—–]/g) || []).length, 0) }
}

// Ongebruikte markDefs opruimen (zelfde opschoning als in de oude drafts van maart 2026)
function cleanMarkDefs(doc) {
  for (const b of doc.content) {
    if (b._type !== 'block' || !b.markDefs?.length) continue
    const used = new Set(b.children.flatMap((c) => c.marks || []))
    b.markDefs = b.markDefs.filter((m) => used.has(m._key))
  }
}

// ---------- per blog ----------
const BLOGS = {
  'btw-tarief-schilderwerk': {
    intro: p('normal', [
      'Schilderwerk aan een woning die langer dan twee jaar in gebruik is, valt onder het lage BTW-tarief van 9%. Volgens de Belastingdienst geldt dat voor de arbeid, het voorbereidende werk en de materialen die de schilder gebruikt. Voor nieuwbouw jonger dan twee jaar, bedrijfspanden en verf die je zelf koopt, betaal je 21%.',
    ]),
    cta: [
      p('h2', ['Liever laten doen?']),
      p('normal', [
        'Wil je je woning laten schilderen en meteen weten welk BTW-tarief op jouw offerte hoort? Schildersbedrijf040 schildert woningen in Eindhoven en omgeving en zet de BTW per post op de offerte. Wat we binnen doen en wat dat per vierkante meter kost, lees je op de pagina over ',
        L('binnenschilderwerk', '/diensten/binnenschilderwerk'),
        '.',
      ]),
      p('normal', [
        'Binnenschilderwerk loopt in de winter gewoon door, want verf droogt binnen bij kamertemperatuur goed en het BTW-tarief is in januari hetzelfde als in juni. Lees meer over ',
        L('binnen schilderen in de winter', '/diensten/winterschilder'),
        '. Wil je een offerte met de juiste BTW? ',
        L('Vraag een gratis offerte aan', '/contact'),
        ' of bel ',
        TEL,
        '.',
      ]),
    ],
    dashes: [
      ['schilder – de regels', 'schilder: de regels'],
      ['twee jaar – hier is', 'twee jaar: hier is'],
    ],
    correcties(doc) {
      setBlockText(doc, 5,
        'Het lage BTW-tarief van 9% is van toepassing als je woning ouder is dan twee jaar én het gaat om arbeidskosten. Dit betekent dat de woning minimaal twee jaar geleden is opgeleverd door de aannemer. Een woning die in januari 2024 is opgeleverd, komt dus vanaf januari 2026 in aanmerking voor het lage tarief.',
        'Het lage BTW-tarief van 9% is van toepassing als je woning ouder is dan twee jaar. Volgens de Belastingdienst telt die termijn vanaf de datum waarop het pand voor het eerst als woning in gebruik is genomen. Een woning die in januari 2024 voor het eerst is bewoond, komt dus vanaf januari 2026 in aanmerking voor het lage tarief.')
      setBlockText(doc, 6,
        'Belangrijk: het lage tarief geldt alleen voor de arbeid, niet voor de materialen. Als je schilder een offerte maakt van €2.000, waarvan €1.400 arbeid en €600 materialen, dan betaal je 9% BTW over de €1.400 (€126) en 21% over de €600 (€126). Totaal: €252 BTW. Had het hoge tarief overal gegolden, dan was dit €420 geweest – een verschil van €168.',
        'Belangrijk: het lage tarief geldt niet alleen voor de arbeid. Volgens de Belastingdienst vallen ook de materialen die de schilder gebruikt en het voorbereidende werk onder 9%. Als je schilder een offerte maakt van €2.000, waarvan €1.400 arbeid en €600 materialen, dan betaal je 9% BTW over het hele bedrag: €180. Had het hoge tarief overal gegolden, dan was dit €420 geweest, een verschil van €240.')
      setBlockText(doc, 7,
        'Sommige schilders splitsen de offerte niet uit en rekenen overal 21%. Dit is niet in jouw voordeel. Vraag dus altijd om een uitgesplitste offerte met apart de arbeidskosten en materiaalkosten. Een professioneel schildersbedrijf doet dit automatisch.',
        'Sommige schilders rekenen toch 21% over de materialen of over het hele bedrag. Dit is niet in jouw voordeel. Vraag dus altijd om een uitgesplitste offerte met apart de arbeidskosten en materiaalkosten, met per post het BTW-tarief. Een professioneel schildersbedrijf doet dit automatisch.')
      setBlockText(doc, 9,
        'Het hoge tarief van 21% geldt in drie situaties. Ten eerste bij nieuwbouwwoningen jonger dan twee jaar – hier is geen uitzondering mogelijk. Ten tweede voor alle materiaalkosten, ongeacht de leeftijd van de woning. En ten derde voor schilderwerk aan bedrijfspanden, winkels en andere niet-woonruimtes.',
        'Het hoge tarief van 21% geldt in drie situaties. Ten eerste bij nieuwbouwwoningen jonger dan twee jaar – hier is geen uitzondering mogelijk. Ten tweede voor materialen die je zelf koopt, zoals verf uit de bouwmarkt: alleen materialen die de schilder bij het werk gebruikt, vallen onder 9%. En ten derde voor schilderwerk aan bedrijfspanden, winkels en andere niet-woonruimtes.')
      setBlockText(doc, 13,
        'Je laat de woonkamer, hal en drie slaapkamers schilderen. De offerte bedraagt €2.800, waarvan €2.000 arbeid en €800 materialen. Omdat de woning ouder is dan twee jaar, geldt het lage tarief voor de arbeid. Je betaalt €180 BTW over de arbeid (9%) en €168 over de materialen (21%). Totale BTW: €348. Bij volledig hoog tarief was dit €588 geweest – je bespaart €240.',
        'Je laat de woonkamer, hal en drie slaapkamers schilderen. De offerte bedraagt €2.800, waarvan €2.000 arbeid en €800 materialen. Omdat de woning ouder is dan twee jaar, geldt het lage tarief voor de arbeid en de materialen. Je betaalt €180 BTW over de arbeid en €72 over de materialen (beide 9%). Totale BTW: €252. Bij volledig hoog tarief was dit €588 geweest: je bespaart €336.')
      setBlockText(doc, 15,
        'Dezelfde werkzaamheden in een nieuwbouwwoning. Omdat de woning jonger is dan twee jaar, geldt overal 21% BTW. Over de totale €2.800 betaal je €588 BTW. Tip: kun je het schilderwerk uitstellen tot de woning twee jaar oud is? Dan bespaar je €240.',
        'Dezelfde werkzaamheden in een nieuwbouwwoning. Omdat de woning jonger is dan twee jaar, geldt overal 21% BTW. Over de totale €2.800 betaal je €588 BTW. Tip: kun je het schilderwerk uitstellen tot de woning twee jaar oud is? Dan bespaar je €336.')
      setBlockText(doc, 17,
        'Complete buitenschilderbeurt: kozijnen, deuren, boeidelen. Offerte: €6.500, waarvan €4.800 arbeid en €1.700 materialen. De woning is van 1978. Je betaalt €432 BTW over de arbeid en €357 over de materialen. Totaal: €789. Besparing ten opzichte van volledig hoog tarief: €576.',
        'Complete buitenschilderbeurt: kozijnen, deuren, boeidelen. Offerte: €6.500, waarvan €4.800 arbeid en €1.700 materialen. De woning is van 1978. Je betaalt €432 BTW over de arbeid en €153 over de materialen (beide 9%). Totaal: €585. Besparing ten opzichte van volledig hoog tarief: €780.')
      setBlockText(doc, 19,
        'De eerste fout die we vaak zien is dat mensen niet om een gesplitste offerte vragen. Daardoor betalen ze 21% over het totaalbedrag, terwijl ze recht hebben op 9% over de arbeid. Dit kost je bij een gemiddeld project €150-€300 extra.',
        'De eerste fout die we vaak zien is dat mensen niet om een gesplitste offerte vragen. Daardoor betalen ze soms 21% over de materialen of over het totaalbedrag, terwijl bij een woning ouder dan twee jaar 9% geldt over arbeid en materialen. Dit kost je bij een gemiddeld project €150-€300 extra.')

      setFaq(doc, 0, 'answer',
        'Voor woningen ouder dan 2 jaar geldt 9% BTW op arbeidskosten en 21% op materialen. Voor nieuwbouwwoningen (jonger dan 2 jaar) en bedrijfspanden geldt altijd 21% BTW op zowel arbeid als materialen.',
        'Voor woningen ouder dan 2 jaar geldt 9% BTW op het schilderwerk, inclusief het voorbereidende werk en de materialen die de schilder gebruikt. Voor nieuwbouwwoningen (jonger dan 2 jaar) en bedrijfspanden geldt altijd 21% BTW op zowel arbeid als materialen.')
      setFaq(doc, 1, 'answer',
        'Je woning moet minimaal 2 jaar geleden zijn opgeleverd. De datum van oplevering staat in je koopakte of kun je opvragen bij de gemeente. Twijfel je? Je schilder kan dit voor je controleren aan de hand van het bouwjaar.',
        'Je woning moet minimaal 2 jaar geleden voor het eerst als woning in gebruik zijn genomen. Twijfel je? Het bouwjaar en de gegevens van je woning staan in de Basisregistratie Adressen en Gebouwen (BAG) van het Kadaster. Je schilder kan je ook een verklaring laten tekenen dat de woning ouder is dan 2 jaar.')
      setFaq(doc, 2, 'answer',
        'Nee, voor materialen geldt altijd 21% BTW, ongeacht de leeftijd van je woning. Alleen de arbeidskosten komen in aanmerking voor het lage tarief. Vraag daarom altijd een offerte met gesplitste kosten.',
        'Ja, als de schilder de materialen levert en gebruikt bij schilderwerk aan een woning ouder dan 2 jaar. De Belastingdienst noemt de gebruikte materialen en het voorbereiden uitdrukkelijk als onderdeel van het 9%-tarief voor schilderen. Koop je de verf zelf, bijvoorbeeld in de bouwmarkt, dan betaal je daarover 21% BTW.')
      setFaq(doc, 3, 'answer',
        'Vraag hier expliciet om. Een professioneel schildersbedrijf splitst arbeids- en materiaalkosten standaard uit. Als een schilder dit weigert of niet kan, is dat een rode vlag – je betaalt dan waarschijnlijk te veel BTW.',
        'Vraag hier expliciet om. Een professioneel schildersbedrijf splitst arbeids- en materiaalkosten standaard uit, zodat je ziet waar je voor betaalt. Controleer ook het tarief: bij schilderwerk aan een woning ouder dan 2 jaar hoort op zowel de arbeid als de materialen 9% BTW te staan. Staat er 21%, vraag dan waarom.')
      setFaq(doc, 4, 'answer',
        'Ja, zowel binnen- als buitenschilderwerk komen in aanmerking voor 9% BTW op de arbeidskosten, mits de woning ouder is dan 2 jaar. Dit geldt ook voor kozijnen, deuren, dakgoten en boeidelen.',
        'Ja, zowel binnen- als buitenschilderwerk komen in aanmerking voor 9% BTW op de arbeid en de gebruikte materialen, mits de woning ouder is dan 2 jaar. Dit geldt ook voor kozijnen, deuren, dakgoten en boeidelen.')
    },
  },

  'hoe-schilder-je-een-deur': {
    intro: p('normal', [
      'Een deur schilder je zo: haal de deur uit de sponning en leg hem plat, verwijder het beslag, schuur met korrel 180, ontvet en plamuur, grond waar het hout kaal is en breng twee dunne laklagen aan met tussenschuren op korrel 240. Door de droogtijden ben je met één binnendeur minstens twee dagen bezig.',
    ]),
    cta: [
      p('h2', ['Liever laten doen?']),
      p('normal', [
        'Heb je geen zin in dagen schuren, gronden en lakken, of wil je meerdere deuren tegelijk aanpakken? Dan kun je het lakken van je deuren uitbesteden aan Schildersbedrijf040. Op de pagina over ',
        L('lakwerk voor deuren, kozijnen en trappen', '/diensten/lakwerk'),
        ' lees je hoe we werken en wat het kost.',
      ]),
      p('normal', [
        'Binnendeuren lakken is binnenwerk en kan dus ook in de wintermaanden: lak droogt binnen bij kamertemperatuur goed. Meer daarover lees je op de pagina over ',
        L('schilderen in de winter', '/diensten/winterschilder'),
        '. Wil je weten wat het lakken van jouw deuren kost? ',
        L('Vraag een vrijblijvende offerte aan', '/contact'),
        ' of bel ',
        TEL,
        '.',
      ]),
    ],
    dashes: [
      ['(geen goedkope – investeer', '(geen goedkope: investeer'],
      ['geen verf in komt – dit voorkomt', 'geen verf in komt. Dit voorkomt'],
      ['Stap 2: Schuren – de basis', 'Stap 2: Schuren, de basis'],
      ['mat aanvoelt – glanzende', 'mat aanvoelt: glanzende'],
      ['Laat volledig drogen – minimaal', 'Laat volledig drogen: minimaal'],
      ['heen – verf vult geen gaten', 'heen: verf vult geen gaten'],
      ['korrel 240 – dit kost', 'korrel 240. Dit kost'],
      ['vlak deel – dit geeft', 'vlak deel. Dit geeft'],
      ['van het blik – niet aan', 'van het blik, niet aan'],
      ['te snel draaien – dit veroorzaakt', 'te snel draaien. Dit veroorzaakt'],
      ['contraproductief – je schuurt je eigen werk weg – maar', 'contraproductief, je schuurt je eigen werk weg, maar'],
      ['inclusief materiaal – en dan', 'inclusief materiaal, en dan'],
    ],
  },

  'hoe-verf-je-een-muur': {
    intro: p('normal', [
      'Een muur verf je in vaste stappen: kies de juiste muurverf, repareer en schuur de muur, strijk voor als de ondergrond zuigt en plak af. Werk eerst de randen bij met een kwast en rol daarna nat-in-nat in vakken van ongeveer 1 m². Na minimaal 4 uur droogtijd volgt de tweede laag.',
    ]),
    cta: [
      p('h2', ['Liever laten doen?']),
      p('normal', [
        'Zie je op tegen een hoog trappenhuis, veel vierkante meters of muren met vlekken die eerst geïsoleerd moeten worden? Schildersbedrijf040 schildert muren en plafonds in woningen in Eindhoven en omgeving. Hoe we dat aanpakken en wat het kost, lees je op de pagina over ',
        L('binnenschilderwerk', '/diensten/binnenschilderwerk'),
        '. Bij grote oppervlakken of nieuwbouw is ',
        L('latex spuiten', '/diensten/latex-spuiten'),
        ' vaak sneller dan rollen.',
      ]),
      p('normal', [
        'Muren schilderen kan het hele jaar door, ook in de winter: in een verwarmde woning droogt muurverf gewoon goed. Lees meer over ',
        L('binnenschilderwerk in de winter', '/diensten/winterschilder'),
        '. Benieuwd wat het schilderen van jouw muren kost? ',
        L('Neem contact op', '/contact'),
        ' voor een gratis offerte of bel ',
        TEL,
        '.',
      ]),
    ],
    dashes: [
      ['schoon te maken – wrijf je', 'schoon te maken: wrijf je'],
      ['10-15% extra – je hebt', '10-15% extra: je hebt'],
      ['muurvuller – direct uit', 'muurvuller, direct uit'],
      ['overlappingen – strepen die', 'overlappingen: strepen die'],
      ['zinloos – de schimmel', 'zinloos: de schimmel'],
      ['droog is – na 1-2 uur', 'droog is, na 1-2 uur'],
      ['natte spons – komen ze los', 'natte spons. Komen ze los'],
    ],
  },

  'plafond-schilderen': {
    intro: p('normal', [
      'Een plafond schilder je in de richting van het licht: begin bij het raam en rol mee met de lichtinval, nat-in-nat in banen van maximaal 1 meter. Schuur en ontstof het plafond eerst, zet de randen aan met een kwast en breng na 4 tot 6 uur droogtijd de tweede laag aan.',
    ]),
    cta: [
      p('h2', ['Liever laten doen?']),
      p('normal', [
        'Boven je hoofd werken is zwaar, en strepen in een plafond zie je bij elk zonnetje terug. Wil je dat niet zelf doen, dan kan Schildersbedrijf040 je plafond rollen of spuiten. Bij grote plafonds of een hele verdieping is ',
        L('latex spuiten', '/diensten/latex-spuiten'),
        ' vaak de snelste route naar een egaal resultaat. Voor een losse kamer valt het plafond onder ons ',
        L('binnenschilderwerk', '/diensten/binnenschilderwerk'),
        '.',
      ]),
      p('normal', [
        'Plafonds schilderen kan ook in de winter, omdat verf binnen bij kamertemperatuur goed droogt. Lees meer over ',
        L('schilderen in de wintermaanden', '/diensten/winterschilder'),
        '. Wil je een prijs voor jouw plafond? ',
        L('Vraag een gratis offerte aan', '/contact'),
        ' of bel ',
        TEL,
        '.',
      ]),
    ],
    dashes: [
      ['uitstellen — en dat is', 'uitstellen, en dat is'],
      ['één factor — de richting', 'één factor: de richting'],
      ['doorheen komt — in de meeste', 'doorheen komt. In de meeste'],
      ['dwars overheen — waardoor', 'dwars overheen, waardoor'],
      ['hele plafond — vooral', 'hele plafond, vooral'],
      ['te lang — dat veroorzaakt', 'te lang. Dat veroorzaakt'],
      ['voorstrijk aan — dit sluit', 'voorstrijk aan. Dit sluit'],
      ['voor plafonds — het verschil', 'voor plafonds: het verschil'],
      ['wordt aangeboden — deze heeft', 'wordt aangeboden. Deze heeft'],
      ['plafondverf — reken op', 'plafondverf: reken op'],
      ['badkamers en keukens — de lichte', 'badkamers en keukens: de lichte'],
      ['5 centimeter — dit heet', '5 centimeter. Dit heet'],
      ['tweede laag — met een vlekkerig', 'tweede laag, met een vlekkerig'],
      ['verkeert — met scheuren, vlekken of bladderende verf — komt', 'verkeert, met scheuren, vlekken of bladderende verf, komt'],
      ['zichtbare aanzet — een streep', 'zichtbare aanzet: een streep'],
      ['doorgehard — breng', 'doorgehard. Breng'],
      ['en omgeving — van kleine', 'en omgeving, van kleine'],
      ['06-38903004 — we helpen', '06-38903004, we helpen'],
      ['het verschil maakt — tips van', 'het verschil maakt. Tips van'],
      ['kleuromslag — bijvoorbeeld van geel naar wit — kan', 'kleuromslag, bijvoorbeeld van geel naar wit, kan'],
      ['aan te raden — het kost', 'aan te raden: het kost'],
    ],
  },

  'verven-na-behang': {
    intro: p('normal', [
      'Verven na behang kan op twee manieren. Glad vliesbehang dat overal vastzit, kun je direct sauzen met latex of acrylaat muurverf. Structuurbehang of loszittend behang haal je eerst weg. Daarna verwijder je alle lijmresten, vul en schuur je de muur, breng je een voorstrijk aan en volgen twee lagen muurverf.',
    ]),
    cta: [
      p('h2', ['Liever laten doen?']),
      p('normal', [
        'Behang weghalen, lijmresten afwassen, plamuren, voorstrijken en twee lagen verf: met de droogtijden ben je al snel een paar dagen per kamer bezig. Wil je dat uitbesteden? Schildersbedrijf040 haalt het oude behang weg en schildert de muren daarna strak af. Hoe we dat aanpakken, lees je op de pagina over ',
        L('binnenschilderwerk in Eindhoven en omgeving', '/diensten/binnenschilderwerk'),
        '.',
      ]),
      p('normal', [
        'Behang verwijderen en muren schilderen is binnenwerk en kan dus ook in de winter, als de verf bij kamertemperatuur goed droogt. Lees meer over ',
        L('binnen laten schilderen in de winter', '/diensten/winterschilder'),
        '. Wil je weten wat het kost voor jouw kamer? ',
        L('Vraag een vrijblijvende offerte aan', '/contact'),
        ' of bel ',
        TEL,
        '.',
      ]),
    ],
    dashes: [
      ['overgeschilderd te worden – veel', 'overgeschilderd te worden. Veel'],
      ['overgeschilderd behang – en dat', 'overgeschilderd behang, en dat'],
      ['niet los – vooral', 'niet los. Vooral'],
      ['van de muur – gebruik', 'van de muur. Gebruik'],
      ['tegelijk te verwijderen – de onderste', 'tegelijk te verwijderen: de onderste'],
      ['droge muur – voelt het', 'droge muur. Voelt het'],
      ['Behang sauzen – wanneer', 'Behang sauzen: wanneer'],
      ['goede dekking – een dekkende', 'goede dekking: een dekkende'],
      ['alleen maar erger – de verf', 'alleen maar erger: de verf'],
      ['naden controleren – het bespaart', 'naden controleren. Het bespaart'],
      ['één dikke laag – dit geldt', 'één dikke laag. Dit geldt'],
      ['specifieke ondergrond – niet alle', 'specifieke ondergrond: niet alle'],
      ['behang op heeft gezeten – van nieuwbouw', 'behang op heeft gezeten, van nieuwbouw'],
      ['06-38903004 – we staan', '06-38903004, we staan'],
      ['A-merk – deze dekt', 'A-merk: deze dekt'],
    ],
  },
}

// ---------- uitvoeren ----------
async function query(groq) {
  const r = await fetch(`${API}/query/${DATASET}?query=${encodeURIComponent(groq)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  if (!r.ok) throw new Error(`Query mislukt: ${r.status} ${await r.text()}`)
  return (await r.json()).result
}

const mutations = []
for (const [slug, cfg] of Object.entries(BLOGS)) {
  const pub = await query(`*[_type=="blogPost" && slug.current=="${slug}" && !(_id in path("drafts.**"))][0]`)
  if (!pub) throw new Error(`Gepubliceerd document niet gevonden: ${slug}`)
  const { _rev, _updatedAt, _createdAt, _system, ...rest } = pub
  let doc = structuredClone(rest)
  doc._id = `drafts.${pub._id}`

  const dashesVoor = (JSON.stringify(doc).match(/[—–]/g) || []).length
  if (cfg.correcties) cfg.correcties(doc)
  const dashesNaCorrectie = (JSON.stringify(doc).match(/[—–]/g) || []).length
  const { doc: fixed, aantal } = replaceDashes(doc, cfg.dashes)
  doc = fixed
  cleanMarkDefs(doc)

  doc.content = [cfg.intro, ...doc.content, ...cfg.cta]

  const nieuw = JSON.stringify([cfg.intro, ...cfg.cta])
  if (/[—–]/.test(nieuw)) throw new Error(`Nieuwe tekst bevat een dash: ${slug}`)

  console.log(`\n${slug} -> ${doc._id}`)
  console.log(`  dashes: ${dashesVoor} in gepubliceerde versie, ${dashesVoor - dashesNaCorrectie} weg via btw-correctie, ${aantal} via tabel`)
  console.log(`  blokken: ${pub.content.length} -> ${doc.content.length}, FAQ: ${doc.faq?.length}`)
  const introWoorden = blockText(cfg.intro).split(/\s+/).length
  console.log(`  openingsalinea: ${introWoorden} woorden`)
  mutations.push({ createOrReplace: doc })
}

// Lokale blog (zonder Sanity): --json schrijft de bijgewerkte versies naar data/blog/ruw/<slug>.json
if (process.argv.includes('--json')) {
  const fs = await import('node:fs')
  for (const m of mutations) {
    const d = { ...m.createOrReplace, _id: m.createOrReplace._id.replace(/^drafts\./, '') }
    fs.writeFileSync(`data/blog/ruw/${d.slug.current}.json`, JSON.stringify(d, null, 1))
    console.log('JSON geschreven:', d.slug.current)
  }
  process.exit(0)
}

if (!WRITE) {
  console.log('\nProefrun: niets geschreven. Draai met --write om de drafts op te slaan.')
  process.exit(0)
}

const r = await fetch(`${API}/mutate/${DATASET}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
  body: JSON.stringify({ mutations }),
})
console.log('\nMutatie:', r.status, await r.text())
if (!r.ok) {
  console.error('Schrijven mislukt. Het token in .env.local is alleen-lezen; gebruik een token met Editor-rechten:')
  console.error('  SANITY_API_TOKEN=<editor-token> node scripts/update-blog-blogs5.mjs --write')
  process.exit(1)
}

// Controle: drafts bestaan en gepubliceerde versies zijn onveranderd
const ids = mutations.map((m) => m.createOrReplace._id)
const check = await query(`*[_id in ${JSON.stringify(ids)}]{_id, _updatedAt, "blokken": count(content), "faq": count(faq)}`)
console.log('Drafts:', check)

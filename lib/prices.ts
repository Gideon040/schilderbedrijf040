// Eén bron voor alle prijzen op de site. Indicatief, exclusief btw.
// Prijslijst van Jordy Jacobs, 16-10-2026 (WhatsApp). Kozijnen vallen onder lakwerk per m², niet per stuk.

export type PriceRow = {
  wat: string
  prijs: string
  // Voor schema.org (UnitPriceSpecification)
  min?: number
  max?: number
  unit?: 'MTK' | 'C62' | 'MTR' // m², stuk, strekkende meter
}

const range = (min: number, max: number, suffix = '') =>
  `€${min.toLocaleString('nl-NL')} tot €${max.toLocaleString('nl-NL')}${suffix}`
const vanaf = (min: number, suffix = '') => `vanaf €${min.toLocaleString('nl-NL')}${suffix}`
const vast = (bedrag: number, suffix = '') => `€${bedrag.toLocaleString('nl-NL')}${suffix}`

// De prijslijst zelf, op één plek
export const PRIJSLIJST = {
  wanden: { min: 10, max: 25 }, // wanden latexen/schilderen per m²
  plafonds: { min: 10, max: 25 }, // per m²
  lakwerkBuiten: { min: 45, max: 120 }, // per m², ook kozijnen buiten
  lakwerkBinnen: { min: 30, max: 75 }, // per m², ook kozijnen binnen
  gevel: { min: 25, max: 50 }, // per m²
  behangen: { min: 15, max: 25 }, // per m²
  latexSpuiten: { min: 10, max: 20 }, // per m²
  houtrot: { vanaf: 100 },
  trap: 350, // vanaf
  deur: 80, // vanaf, per stuk
  schuren: 3, // wanden/plafonds per m²
  voorstrijken: 4, // primeren/voorstrijken per m²
}
const P = PRIJSLIJST

const schuren: PriceRow = { wat: 'Wanden of plafonds schuren', prijs: vast(P.schuren, ' /m²'), min: P.schuren, max: P.schuren, unit: 'MTK' }
const voorstrijken: PriceRow = { wat: 'Primeren of voorstrijken', prijs: vast(P.voorstrijken, ' /m²'), min: P.voorstrijken, max: P.voorstrijken, unit: 'MTK' }
const lakBinnen: PriceRow = { wat: 'Lakwerk binnen (kozijnen, deuren, plinten)', prijs: range(P.lakwerkBinnen.min, P.lakwerkBinnen.max, ' /m²'), min: P.lakwerkBinnen.min, max: P.lakwerkBinnen.max, unit: 'MTK' }
const lakBuiten: PriceRow = { wat: 'Lakwerk buiten (kozijnen, deuren, boeidelen)', prijs: range(P.lakwerkBuiten.min, P.lakwerkBuiten.max, ' /m²'), min: P.lakwerkBuiten.min, max: P.lakwerkBuiten.max, unit: 'MTK' }
const deur: PriceRow = { wat: 'Deur lakken', prijs: vanaf(P.deur, ' /stuk'), min: P.deur, unit: 'C62' }
const trap: PriceRow = { wat: 'Trap schilderen of lakken', prijs: vanaf(P.trap), min: P.trap, unit: 'C62' }

export const prijzen: Record<string, PriceRow[]> = {
  binnenschilderwerk: [
    { wat: 'Wanden schilderen', prijs: range(P.wanden.min, P.wanden.max, ' /m²'), min: P.wanden.min, max: P.wanden.max, unit: 'MTK' },
    { wat: 'Plafond schilderen', prijs: range(P.plafonds.min, P.plafonds.max, ' /m²'), min: P.plafonds.min, max: P.plafonds.max, unit: 'MTK' },
    lakBinnen,
    deur,
    trap,
    schuren,
    voorstrijken,
  ],
  buitenschilderwerk: [
    { wat: 'Gevel schilderen', prijs: range(P.gevel.min, P.gevel.max, ' /m²'), min: P.gevel.min, max: P.gevel.max, unit: 'MTK' },
    { ...lakBuiten, wat: 'Kozijnen buiten (lakwerk)' },
    { ...lakBuiten, wat: 'Boeidelen en windveren (lakwerk)' },
    { ...deur, wat: 'Buitendeur lakken' },
    { wat: 'Houtrot herstellen', prijs: vanaf(P.houtrot.vanaf), min: P.houtrot.vanaf, unit: 'C62' },
  ],
  behangen: [
    { wat: 'Behangen', prijs: range(P.behangen.min, P.behangen.max, ' /m²'), min: P.behangen.min, max: P.behangen.max, unit: 'MTK' },
    schuren,
    voorstrijken,
  ],
  lakwerk: [lakBinnen, lakBuiten, deur, trap],
  'latex-spuiten': [
    { wat: 'Wanden en plafonds spuiten', prijs: range(P.latexSpuiten.min, P.latexSpuiten.max, ' /m²'), min: P.latexSpuiten.min, max: P.latexSpuiten.max, unit: 'MTK' },
    schuren,
    voorstrijken,
  ],
  'houtrot-sanering': [
    { wat: 'Houtrot herstellen', prijs: vanaf(P.houtrot.vanaf), min: P.houtrot.vanaf, unit: 'C62' },
    { ...lakBuiten, wat: 'Afschilderen na herstel (lakwerk buiten)' },
  ],
}

// Fase 7: nieuwe dienst- en kostenpagina's, samengesteld uit dezelfde regels
const wandenRij: PriceRow = prijzen.binnenschilderwerk[0]
const plafondRij: PriceRow = prijzen.binnenschilderwerk[1]
const gevelRij: PriceRow = prijzen.buitenschilderwerk[0]
const latexRij: PriceRow = prijzen['latex-spuiten'][0]
const behangRij: PriceRow = prijzen.behangen[0]
const houtrotRij: PriceRow = prijzen['houtrot-sanering'][0]
prijzen['trap-schilderen'] = [trap, { ...lakBinnen, wat: 'Leuning, spijlen en traphekje (lakwerk binnen)' }, schuren]
prijzen['dakkapel-schilderen'] = [{ ...lakBuiten, wat: 'Kozijnen en boeidelen dakkapel (lakwerk buiten)' }, houtrotRij]
prijzen['vve-en-zakelijk'] = [wandenRij, latexRij, gevelRij, { ...lakBuiten, wat: 'Kozijnen, deuren en boeidelen buiten (lakwerk)' }]
prijzen['latex-spuiten-nieuwbouw'] = [latexRij, schuren, voorstrijken]
prijzen['kosten-latex-spuiten'] = [latexRij, { ...wandenRij, wat: 'Ter vergelijking: wanden rollen' }, schuren, voorstrijken]
prijzen['kosten-plafond-schilderen'] = [plafondRij, { ...latexRij, wat: 'Plafond spuiten (latex)' }, schuren, voorstrijken]
prijzen['kosten-kozijnen-schilderen'] = [{ ...lakBuiten, wat: 'Kozijnen buiten (lakwerk)' }, { ...lakBinnen, wat: 'Kozijnen binnen (lakwerk)' }, houtrotRij]
prijzen['overzicht'] = [wandenRij, plafondRij, latexRij, behangRij, lakBinnen, lakBuiten, gevelRij, houtrotRij, deur, trap, schuren, voorstrijken]

// Eén regel per dienst, voor overzichten (homepage, locatiepagina's). Zelfde bedragen als hierboven.
export const vanafPrijzen: { dienst: string; slug: string; prijs: string }[] = [
  { dienst: 'Latex spuiten', slug: 'latex-spuiten', prijs: prijzen['latex-spuiten'][0].prijs },
  { dienst: 'Binnenschilderwerk (wanden)', slug: 'binnenschilderwerk', prijs: prijzen.binnenschilderwerk[0].prijs },
  { dienst: 'Buitenschilderwerk (gevel)', slug: 'buitenschilderwerk', prijs: prijzen.buitenschilderwerk[0].prijs },
  { dienst: 'Kozijnen buiten (lakwerk)', slug: 'kozijnen-schilderen', prijs: prijzen.buitenschilderwerk[1].prijs },
  { dienst: 'Behangen', slug: 'behangen', prijs: prijzen.behangen[0].prijs },
  { dienst: 'Houtrot herstellen', slug: 'houtrot-sanering', prijs: prijzen['houtrot-sanering'][0].prijs },
]

export const prijsNoot = 'Indicatieve prijzen, exclusief btw. De exacte prijs hoort u na de gratis inspectie.'

// Korte prijszin voor teksten (locatiepagina's, FAQ)
export const prijsZinRegio = 'gemiddeld €10 tot €25 per m² voor binnenschilderwerk en €25 tot €50 per m² voor buitenschilderwerk aan de gevel'

// ---------- Prijzen in lopende tekst ----------
// Teksten op dienst-, locatie- en homepagina lezen hun bedragen hieruit, zodat elke pagina dezelfde prijs noemt.
const bereik = (r: { min: number; max: number }) => range(r.min, r.max)
export const prijsKort = {
  wanden: bereik(P.wanden), // muren en plafonds binnen
  gevel: bereik(P.gevel),
  lakBuiten: bereik(P.lakwerkBuiten), // ook kozijnen buiten
  lakBinnen: bereik(P.lakwerkBinnen),
  behangen: bereik(P.behangen),
  latex: bereik(P.latexSpuiten),
  houtrot: vanaf(P.houtrot.vanaf),
  deur: vanaf(P.deur),
  trap: vanaf(P.trap),
  schuren: vast(P.schuren),
  voorstrijken: vast(P.voorstrijken),
}
export const prijsTekst = {
  wanden: `${prijsKort.wanden} per m²`,
  gevel: `${prijsKort.gevel} per m²`,
  lakBuiten: `${prijsKort.lakBuiten} per m²`,
  lakBinnen: `${prijsKort.lakBinnen} per m²`,
  behangen: `${prijsKort.behangen} per m²`,
  latex: `${prijsKort.latex} per m²`,
  houtrot: `${prijsKort.houtrot} per reparatie`,
  deur: `${prijsKort.deur} per deur`,
  trap: prijsKort.trap,
  schuren: `${prijsKort.schuren} per m²`,
  voorstrijken: `${prijsKort.voorstrijken} per m²`,
}

// Rekenvoorbeeld: m² maal de bandbreedte, bijvoorbeeld 40 m² gevel
export const rekenvoorbeeld = (m2: number, r: { min: number; max: number }) => range(m2 * r.min, m2 * r.max)

// Vaste sleutels voor de prijsregels (pagina's zochten eerder op omschrijving, wat lege prijsplekken gaf)
export const prijsRij = {
  gevel: prijzen.buitenschilderwerk[0],
  kozijnenBuiten: prijzen.buitenschilderwerk[1],
  boeidelen: prijzen.buitenschilderwerk[2],
  buitendeur: prijzen.buitenschilderwerk[3],
  houtrot: prijzen['houtrot-sanering'][0],
}

// ---------- Nog te bevestigen door Jordy ----------
// Bedragen die al op de site stonden maar niet op de prijslijst van 16-10-2026 staan. Eén plek, zodat Jordy ze
// in één keer kan goedkeuren of schrappen (VRAGEN-JORDY.md). Ze spreken de prijslijst hierboven niet tegen.
export const teBevestigen = {
  uurBinnen: '€35 tot €45',
  uurBuiten: '€40 tot €55',
  uurBehangen: '€35 tot €50',
  uurHoutrot: '€45 tot €55',
  uurLakwerk: '€40 tot €50',
  uurLatex: '€35 tot €50',
  houtrotKleinKozijn: '€150 tot €250',
  houtrotGrootKozijn: '€300 tot €450',
  kozijnGedeeltelijkVervangen: '€200 tot €500',
  kozijnVervangen: '€600 tot €1.500',
  buitenWoningTotaal: '€2.500 tot €6.000',
  behangVerwijderen: '€5 tot €10 per m²',
  keukenkastenSpuiten: '€150 tot €300 per strekkende meter',
  radiatorLakken: '€80 tot €120 per stuk',
  dakkapel: '[INVULLEN: prijs dakkapel schilderen]',
}

// Eén bron voor alle prijzen op de site. Indicatief, inclusief materiaal, exclusief btw.
// Bedragen komen van de bestaande dienstpagina's. Waar pagina's elkaar tegenspraken is één
// waarde gekozen (zie seo/voortgang.md). [JORDY: bevestig tabel]

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

export const prijzen: Record<string, PriceRow[]> = {
  binnenschilderwerk: [
    { wat: 'Muren schilderen', prijs: range(30, 35, ' /m²'), min: 30, max: 35, unit: 'MTK' },
    { wat: 'Plafond schilderen', prijs: range(32, 38, ' /m²'), min: 32, max: 38, unit: 'MTK' },
    { wat: 'Kozijnen lakken', prijs: range(40, 55, ' /stuk'), min: 40, max: 55, unit: 'C62' },
    { wat: 'Deuren lakken', prijs: range(80, 120, ' /stuk'), min: 80, max: 120, unit: 'C62' },
    { wat: 'Trap schilderen', prijs: range(350, 600) },
    { wat: 'Complete kamer (20 m²)', prijs: range(500, 900) },
  ],
  buitenschilderwerk: [
    { wat: 'Gevel schilderen', prijs: range(35, 45, ' /m²'), min: 35, max: 45, unit: 'MTK' },
    { wat: 'Kozijnen buiten', prijs: range(50, 100, ' /stuk'), min: 50, max: 100, unit: 'C62' },
    { wat: 'Deuren buiten', prijs: range(100, 150, ' /stuk'), min: 100, max: 150, unit: 'C62' },
    { wat: 'Boeiboorden & windveren', prijs: range(20, 35, ' /m¹'), min: 20, max: 35, unit: 'MTR' },
    { wat: 'Dakkapel schilderen', prijs: range(400, 800) },
    { wat: 'Complete woning buiten', prijs: range(2500, 6000) },
  ],
  behangen: [
    { wat: 'Vliesbehang aanbrengen', prijs: range(15, 25, ' /m²'), min: 15, max: 25, unit: 'MTK' },
    { wat: 'Glasvezelbehang', prijs: range(18, 30, ' /m²'), min: 18, max: 30, unit: 'MTK' },
    { wat: 'Fotobehang plaatsen', prijs: range(25, 40, ' /m²'), min: 25, max: 40, unit: 'MTK' },
    { wat: 'Oud behang verwijderen', prijs: range(5, 10, ' /m²'), min: 5, max: 10, unit: 'MTK' },
    { wat: 'Muren voorbehandelen', prijs: range(8, 12, ' /m²'), min: 8, max: 12, unit: 'MTK' },
    { wat: 'Complete kamer (20 m²)', prijs: range(400, 800) },
  ],
  lakwerk: [
    // Gelijkgetrokken met binnenschilderwerk (stond hier op €35 tot €75)
    { wat: 'Kozijnen lakken (binnen)', prijs: range(40, 55, ' /stuk'), min: 40, max: 55, unit: 'C62' },
    { wat: 'Kozijnen lakken (buiten)', prijs: range(50, 100, ' /stuk'), min: 50, max: 100, unit: 'C62' },
    // Stond als "Deuren lakken €100 tot €150"; binnen en buiten nu apart, gelijk aan de andere dienstpagina's
    { wat: 'Binnendeuren lakken', prijs: range(80, 120, ' /stuk'), min: 80, max: 120, unit: 'C62' },
    { wat: 'Buitendeuren lakken', prijs: range(100, 150, ' /stuk'), min: 100, max: 150, unit: 'C62' },
    { wat: 'Trap lakken', prijs: range(350, 600) },
    { wat: 'Radiator lakken', prijs: range(80, 120, ' /stuk'), min: 80, max: 120, unit: 'C62' },
    { wat: 'Keukenkasten spuiten', prijs: range(150, 300, ' /m¹'), min: 150, max: 300, unit: 'MTR' },
  ],
  'latex-spuiten': [
    { wat: 'Muren spuiten', prijs: range(8, 12, ' /m²'), min: 8, max: 12, unit: 'MTK' },
    { wat: 'Plafond spuiten', prijs: '€5,50 tot €7 /m²', min: 5.5, max: 7, unit: 'MTK' },
    { wat: 'Nieuwbouw compleet', prijs: '€3,50 tot €7 /m²', min: 3.5, max: 7, unit: 'MTK' },
    { wat: 'Renovatie spuiten', prijs: range(8, 13, ' /m²'), min: 8, max: 13, unit: 'MTK' },
    { wat: 'Trappenhuis spuiten', prijs: range(7, 10, ' /m²'), min: 7, max: 10, unit: 'MTK' },
    { wat: 'Kantoor/bedrijfspand', prijs: range(6, 9, ' /m²'), min: 6, max: 9, unit: 'MTK' },
  ],
  'houtrot-sanering': [
    { wat: 'Klein kozijn repareren', prijs: range(150, 250, ' /stuk'), min: 150, max: 250, unit: 'C62' },
    { wat: 'Groot kozijn repareren', prijs: range(300, 450, ' /stuk'), min: 300, max: 450, unit: 'C62' },
    { wat: 'Deurkozijn houtrot', prijs: range(200, 400, ' /stuk'), min: 200, max: 400, unit: 'C62' },
    { wat: 'Dorpel vervangen', prijs: range(150, 350, ' /stuk'), min: 150, max: 350, unit: 'C62' },
    { wat: 'Boeiboord reparatie', prijs: range(20, 40, ' /m¹'), min: 20, max: 40, unit: 'MTR' },
    { wat: 'Kozijn volledig vervangen', prijs: range(600, 1500, ' /stuk'), min: 600, max: 1500, unit: 'C62' },
  ],
}

// Eén regel per dienst, voor overzichten (homepage, locatiepagina's). Zelfde bedragen als hierboven.
export const vanafPrijzen: { dienst: string; slug: string; prijs: string }[] = [
  { dienst: 'Binnenschilderwerk (muren)', slug: 'binnenschilderwerk', prijs: prijzen.binnenschilderwerk[0].prijs },
  { dienst: 'Buitenschilderwerk (gevel)', slug: 'buitenschilderwerk', prijs: prijzen.buitenschilderwerk[0].prijs },
  { dienst: 'Kozijnen buiten', slug: 'buitenschilderwerk', prijs: prijzen.buitenschilderwerk[1].prijs },
  { dienst: 'Behangen (vliesbehang)', slug: 'behangen', prijs: prijzen.behangen[0].prijs },
  { dienst: 'Latex spuiten (muren)', slug: 'latex-spuiten', prijs: prijzen['latex-spuiten'][0].prijs },
  { dienst: 'Houtrot (klein kozijn)', slug: 'houtrot-sanering', prijs: prijzen['houtrot-sanering'][0].prijs },
]

export const prijsNoot = 'Indicatieve prijzen, inclusief materiaal en exclusief btw. De exacte prijs hoort u na de gratis inspectie.'

// Korte prijszin voor teksten (locatiepagina's, FAQ)
export const prijsZinRegio = 'gemiddeld €30 tot €35 per m² voor binnenschilderwerk en €35 tot €45 per m² voor buitenschilderwerk aan de gevel'

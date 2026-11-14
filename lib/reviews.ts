// Eén bron voor alle reviews en tellingen: data/reviews.json (Google en Werkspot, overgenomen op 13-11-2026).
// Reviewteksten worden letterlijk getoond. Plaats en diensten per review kunnen in dat bestand worden aangevuld
// (of via `node scripts/reviews-csv.mjs export` en `import` in een spreadsheet), zonder code aan te passen.
import data from '@/data/reviews.json'

export type Review = {
  id: string
  bron: 'google' | 'werkspot'
  naam: string
  sterren: number
  jaar: number | null
  plaats: string | null
  diensten: string[]
  heeft_fotos: boolean
  ingekort?: boolean
  tekst: string
}

export const alleReviews = data.reviews as Review[]

const nl = (n: number) => n.toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

// Tellingen en scores: lege reviews tellen mee, want ze staan wel op Google
export const reviewTotalen = {
  google: { score: data.totalen.google.score, scoreTekst: nl(data.totalen.google.score), aantal: data.totalen.google.aantal },
  werkspot: { score: data.totalen.werkspot.score, scoreTekst: nl(data.totalen.werkspot.score), aantal: data.totalen.werkspot.aantal },
}

export const bronNaam = { google: 'Google', werkspot: 'Werkspot' } as const

// Alleen tonen met tekst en als de volledige tekst bekend is
export const toonbaar = (r: Review) => r.tekst.trim().length > 0 && !r.ingekort

export const toonbareReviews = alleReviews.filter(toonbaar)

export function reviewOpId(id: string): Review | undefined {
  return toonbareReviews.find((r) => r.id === id)
}

const plaatsGelijk = (a: string | null, b: string) => !!a && a.toLowerCase() === b.toLowerCase()

// Reviews voor een dienst- of locatiepagina: eerst met de juiste tag of plaats, dan aanvullen met reviews
// zonder dienst-tag (algemene ervaringen). Volgorde in het bestand blijft behouden (nieuwste eerst).
export function reviewsVoor({ dienst, plaats, aantal = 4 }: { dienst?: string; plaats?: string; aantal?: number }): Review[] {
  const passend = toonbareReviews.filter((r) => (dienst ? r.diensten.includes(dienst) : true) && (plaats ? plaatsGelijk(r.plaats, plaats) : true))
  if (passend.length >= aantal) return passend.slice(0, aantal)
  const algemeen = toonbareReviews.filter((r) => !passend.includes(r) && r.diensten.length === 0 && r.tekst.length > 60)
  return [...passend, ...algemeen].slice(0, aantal)
}

// Reviews die echt uit een plaats komen (voor het blok "Review uit de buurt")
export function reviewsUit(plaats: string): Review[] {
  return toonbareReviews.filter((r) => plaatsGelijk(r.plaats, plaats))
}

// Homepage: afwisselend binnen en buiten, aangevuld met algemene reviews
export function homeReviews(aantal = 9): Review[] {
  const binnen = toonbareReviews.filter((r) => r.diensten.some((d) => ['binnenschilderwerk', 'behangen', 'latex-spuiten', 'trap-schilderen'].includes(d)))
  const buiten = toonbareReviews.filter((r) => !binnen.includes(r) && r.diensten.some((d) => ['buitenschilderwerk', 'kozijnen-schilderen', 'houtrot-sanering'].includes(d)))
  const uit: Review[] = []
  for (let i = 0; uit.length < aantal - 1 && (i < binnen.length || i < buiten.length); i++) {
    if (binnen[i]) uit.push(binnen[i])
    if (buiten[i] && uit.length < aantal - 1) uit.push(buiten[i])
  }
  const werkspot = toonbareReviews.find((r) => r.bron === 'werkspot' && !uit.includes(r))
  if (werkspot) uit.push(werkspot)
  return uit.slice(0, aantal)
}

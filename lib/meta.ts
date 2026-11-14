// Titels en meta descriptions: één plek voor de vaste formats (instructie 7.1). Titel circa 60 tekens,
// beschrijving maximaal 155. Reviewcijfers, prijzen en termijnen komen uit hun eigen bron.
import type { Metadata } from 'next'
import { prijsTekst } from './prices'
import { site } from './site'

const MERK = ' | Schildersbedrijf040'
const MAX_TITEL = 62

// Merknaam erachter als het past, anders alleen de titel
export const titel = (basis: string) => (basis.endsWith(MERK) ? basis : basis.length + MERK.length <= MAX_TITEL ? basis + MERK : basis)

// Beschrijving inkorten op een zinsgrens (vangnet; de teksten hieronder passen al)
export function beschrijving(tekst: string, max = 155): string {
  if (tekst.length <= max) return tekst
  const zinnen = tekst.split(/(?<=\.)\s+/)
  let uit = ''
  for (const z of zinnen) {
    if ((uit + ' ' + z).trim().length > max) break
    uit = (uit + ' ' + z).trim()
  }
  return uit || tekst.slice(0, max - 1).replace(/\s+\S*$/, '') + '.'
}

export function meta({ titel: t, beschrijving: b, pad, extra = {} }: { titel: string; beschrijving: string; pad: string; extra?: Metadata }): Metadata {
  const url = `${site.url}${pad === '/' ? '' : pad}`
  const tt = titel(t)
  const bb = beschrijving(b)
  return {
    ...extra,
    title: { absolute: tt },
    description: bb,
    alternates: { canonical: url },
    openGraph: { title: tt, description: bb, url, type: 'website', locale: 'nl_NL', siteName: site.name, ...(extra.openGraph ?? {}) },
  }
}

const r = site.google
export const formats = {
  home: `Schilder Eindhoven | ${r.rating} uit ${r.reviewCount} reviews`,
  // Volledig format met merknaam als het past; anders "Vaste prijs" met merknaam; anders zonder merknaam
  dienst: (naam: string) =>
    [`${naam} Eindhoven | Vaste prijs vooraf${MERK}`, `${naam} Eindhoven | Vaste prijs${MERK}`].find((t) => t.length <= MAX_TITEL) ??
    `${naam} Eindhoven | Vaste prijs vooraf`,
  locatie: (plaats: string) => `Schilder ${plaats} | ${r.rating} op Google`,
  // Vaste staart van elke beschrijving: gratis inspectie en reactietermijn
  staart: `Gratis inspectie, vaste prijs vooraf en reactie ${site.termijnen.reactie}.`,
}

export const locatieBeschrijving = (plaats: string) =>
  `Schilder in ${plaats} nodig? Binnen ${prijsTekst.wanden}, gevel ${prijsTekst.gevel}. ${formats.staart}`

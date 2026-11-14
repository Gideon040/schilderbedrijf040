// Gedeelde bouwstenen voor de pagina's uit fase 7 (dienst- en kostenpagina's).
// Alleen feiten die al op de site staan: gratis inspectie, vaste prijs, Boonstoppel-verf, termijnen uit lib/site.ts.
import { breadcrumbSchema, faqSchema, orgRef, serviceOffers, werkgebied } from './schema'
import { hoofd, site } from './site'

export type Faq = { question: string; answer: string; link?: { href: string; tekst: string } }

export function schemaVoor({
  slug,
  prijsSlug,
  pad,
  naam,
  beschrijving,
  faqs,
  kruimels,
}: {
  slug: string
  prijsSlug?: string
  pad: string
  naam: string
  beschrijving: string
  faqs: Faq[]
  kruimels: [string, string][]
}) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}${pad}#service`,
    name: naam,
    description: beschrijving,
    provider: orgRef,
    url: `${site.url}${pad}`,
    areaServed: werkgebied.map((name) => ({ '@type': 'City', name })),
    serviceType: naam,
    offers: serviceOffers(prijsSlug ?? slug),
  }
  return [service, breadcrumbSchema(kruimels), faqSchema(faqs)]
}

// Vast werkproces (zelfde stappen als op de bestaande dienstpagina's)
export const standaardStappen = (onderwerp: string) => [
  {
    titel: 'Inspectie',
    beschrijving: `Jordy komt gratis langs, bekijkt ${onderwerp} en de ondergrond, en bespreekt met u wat er nodig is.`,
  },
  {
    titel: 'Offerte',
    beschrijving: `${hoofd(site.termijnen.offerte)} na de inspectie ontvangt u een offerte met een vaste prijs, inclusief materiaal en voorbereiding.`,
  },
  {
    titel: 'Voorbereiding',
    beschrijving: 'Afdekken en afplakken, schuren, vullen en gronden waar nodig. De voorbereiding bepaalt hoe lang het resultaat meegaat.',
  },
  {
    titel: 'Uitvoering en oplevering',
    beschrijving: 'Afwerken met Boonstoppel-verf, samen het resultaat nalopen en de werkplek netjes achterlaten.',
  },
]

export const standaardUsps = () => [
  {
    titel: 'Hoogst beoordeeld in de regio',
    beschrijving: `${site.google.rating} op Google uit ${site.google.reviewCount} reviews en ${site.werkspot.rating} op Werkspot.`,
  },
  { titel: 'Vaste prijs vooraf', beschrijving: 'Na de gratis inspectie een offerte met vaste prijs, zonder verrassingen achteraf.' },
  { titel: 'Boonstoppel-verf', beschrijving: 'Schildersbedrijf040 werkt met Boonstoppel, verf die 8 tot 10 jaar meegaat.' },
  { titel: 'Eén aanspreekpunt', beschrijving: 'Eigenaar Jordy Jacobs is uw vaste aanspreekpunt, van inspectie tot oplevering.' },
]

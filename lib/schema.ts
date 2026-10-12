// JSON-LD op één plek. Het bedrijf (HousePainter) staat sitebreed in app/(site)/layout.tsx;
// pagina's verwijzen ernaar via ORG_ID in plaats van het bedrijf opnieuw te beschrijven.
import { site } from './site'
import { prijzen } from './prices'

export const ORG_ID = `${site.url}/#organization`
export const WEBSITE_ID = `${site.url}/#website`
export const orgRef = { '@id': ORG_ID }

// Alle plaatsen met een eigen pagina, plus Eindhoven (homepage)
export const werkgebied = [
  'Eindhoven', 'Veldhoven', 'Waalre', 'Best', 'Nuenen', 'Geldrop', 'Helmond', 'Son en Breugel',
  'Valkenswaard', 'Oirschot', 'Heeze', 'Mierlo', 'Meerhoven', 'Deurne', 'Beek en Donk',
  'Eersel', 'Bergeijk', 'Maarheeze',
]

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  '@id': ORG_ID,
  name: site.name,
  description:
    'Schildersbedrijf in Eindhoven en omgeving voor binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering.',
  url: site.url,
  logo: site.logo,
  image: site.ogImage,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: '€€',
  founder: { '@type': 'Person', name: site.owner },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode.replace(' ', ''),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: site.openingHours.opens,
    closes: site.openingHours.closes,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.google.ratingValue.toFixed(1),
    reviewCount: site.google.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  // [JORDY: link naar het Werkspot-profiel toevoegen aan sameAs]
  sameAs: [...site.sameAs],
  areaServed: werkgebied.map((name) => ({ '@type': 'City', name })),
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: site.name,
  url: site.url,
  inLanguage: 'nl-NL',
  publisher: orgRef,
}

export function breadcrumbSchema(items: [name: string, path: string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${site.url}${path === '/' ? '' : path}`,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

// Offer per prijsregel met een eenheidsprijs (m², stuk, strekkende meter)
export function serviceOffers(slug: string) {
  return (prijzen[slug] ?? [])
    .filter((r) => r.min !== undefined)
    .map((r) => ({
      '@type': 'Offer',
      name: r.wat,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        minPrice: r.min,
        maxPrice: r.max,
        unitCode: r.unit,
        valueAddedTaxIncluded: false,
      },
    }))
}

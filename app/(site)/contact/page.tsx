import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { ContactHero } from '@/components/sections/contact-hero'
import { QuoteForm } from '@/components/sections/quote-form'
import { ContactDetails } from '@/components/sections/contact-details'

export const metadata: Metadata = {
  title: 'Contact | Gratis Offerte Aanvragen',
  description: 'Neem contact op met Schildersbedrijf040 in Eindhoven. Vraag een gratis offerte aan voor schilderwerk. ✓ Binnen 24 uur reactie ✓ Vrijblijvend advies ✓ Eerlijke prijzen',
  keywords: ['contact schilder eindhoven', 'offerte schilderwerk', 'schilder offerte', 'schildersbedrijf contact'],
  openGraph: {
    title: 'Contact | Schildersbedrijf040',
    description: 'Neem contact op voor een gratis offerte voor uw schilderproject in Eindhoven.',
    url: 'https://schildersbedrijf040.nl/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/contact',
  },
}

export default function ContactPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://schildersbedrijf040.nl/contact',
    mainEntity: {
      '@type': 'PaintingContractor',
      name: 'Schildersbedrijf040',
      telephone: '+31638903004',
      email: 'info@schildersbedrijf040.nl',
      url: 'https://schildersbedrijf040.nl',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+31638903004',
        email: 'info@schildersbedrijf040.nl',
        contactType: 'customer service',
        areaServed: 'Eindhoven en omgeving',
        availableLanguage: 'Dutch'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Straatsburglaan 26',
        addressLocality: 'Eindhoven',
        postalCode: '5627DB',
        addressCountry: 'NL'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30'
      }
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://schildersbedrijf040.nl/contact'
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <ContactHero />
      <QuoteForm />
      <ContactDetails />
    </main>
  )
}

import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Behangen Eindhoven | Professioneel Behangwerk',
  description: 'Professioneel behangen in Eindhoven. Van klassiek tot modern behang, vakkundig aangebracht. ✓ Alle behangsoorten ✓ Strakke afwerking ✓ Gratis offerte',
  keywords: ['behangen eindhoven', 'behanger', 'behangwerk', 'glasvezel behang', 'vliesbehang', 'behanger eindhoven'],
  openGraph: {
    title: 'Behangen Eindhoven | Schildersbedrijf040',
    description: 'Professioneel behangwerk in Eindhoven. Van klassiek tot modern, wij zorgen voor een perfecte afwerking.',
    url: 'https://schildersbedrijf040.nl/diensten/behangen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/behangen',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipNI8hPbuWSdgczF1ESCx3LJuCE1R20aoXhy4qw0=s680-w680-h510"

const benefits = [
  'Ruime keuze in behangsoorten',
  'Professionele voorbereiding',
  'Naadloze aansluiting',
  'Strakke afwerking',
  'Advies over materialen',
  'Snelle uitvoering'
]

export default function BehangenPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/behangen',
    name: 'Behangen',
    description: 'Professioneel behangwerk voor woningen en bedrijfspanden in Eindhoven en omgeving',
    provider: {
      '@type': 'PaintingContractor',
      name: 'Schildersbedrijf040',
      telephone: '+31638903004',
      url: 'https://schildersbedrijf040.nl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacob van Campenweg 25',
        addressLocality: 'Eindhoven',
        postalCode: '5624CD',
        addressCountry: 'NL'
      }
    },
    areaServed: 'Eindhoven en omgeving',
    serviceType: 'Behangen'
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
        name: 'Diensten',
        item: 'https://schildersbedrijf040.nl/diensten'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Behangen',
        item: 'https://schildersbedrijf040.nl/diensten/behangen'
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
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Behangen in Eindhoven - Schildersbedrijf040"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">PROFESSIONEEL</span><br />
              <span className="text-[#0088FF]">BEHANGEN</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Geef uw ruimte een nieuwe uitstraling met professioneel behangwerk. 
              Van klassiek tot modern, wij zorgen voor een perfect resultaat.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Professioneel Behangwerk in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Met behang kunt u uw ruimte een complete metamorfose geven. 
                  Ons team heeft ruime ervaring met alle soorten behang en zorgt voor 
                  een perfecte voorbereiding en afwerking.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Onze Expertise</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We hebben ervaring met alle soorten behang, van vinyl tot glasweefsel 
                  en van fotobehang tot structuurbehang. We adviseren u graag over de 
                  mogelijkheden en zorgen voor een perfect eindresultaat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Waarom Kiezen voor Schildersbedrijf040?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-accent-light rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Onze Behang Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Verwijderen oud behang</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Voorbehandeling wanden</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Aanbrengen nieuw behang</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Afwerking en schoonmaak</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Offerte Aanvragen</h3>
                <p className="mb-6">
                  Wij maken graag een vrijblijvende offerte voor uw behangproject. 
                  Neem contact met ons op voor advies en een prijsopgave.
                </p>
                <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center font-bebas text-lg tracking-wider hover:bg-gray-100 transition-colors">
                  OFFERTE AANVRAGEN
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

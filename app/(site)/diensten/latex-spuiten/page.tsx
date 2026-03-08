import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latex Spuiten Eindhoven | Snel & Strak Resultaat',
  description: 'Professioneel latex spuiten in Eindhoven. Muren en plafonds snel en egaal afgewerkt. ✓ Airless spuiten ✓ Geen strepen ✓ Snelle uitvoering ✓ Gratis offerte',
  keywords: ['latex spuiten eindhoven', 'airless spuiten', 'muren spuiten', 'plafond spuiten', 'spuitwerk eindhoven'],
  openGraph: {
    title: 'Latex Spuiten Eindhoven | Schildersbedrijf040',
    description: 'Professioneel latex spuiten in Eindhoven. Sneller en egaler dan traditioneel rollen.',
    url: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510"

const benefits = [
  'Snellere uitvoering dan rollen',
  'Egale en strakke afwerking',
  'Geen rolstrepen of structuur',
  'Ideaal voor grote oppervlakken',
  'Professionele airless apparatuur',
  'Minder verfverbruik'
]

export default function LatexSpuitenPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
    name: 'Latex Spuiten',
    description: 'Professioneel latex spuiten voor muren en plafonds in Eindhoven en omgeving',
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
    serviceType: 'Latex Spuiten'
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
        name: 'Latex Spuiten',
        item: 'https://schildersbedrijf040.nl/diensten/latex-spuiten'
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
            alt="Latex Spuiten in Eindhoven - Schildersbedrijf040"
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
              <span className="text-white">LATEX</span><br />
              <span className="text-[#0088FF]">SPUITEN</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Sneller, egaler en efficiënter dan traditioneel rollen. 
              Met latex spuiten realiseren wij een perfect strakke afwerking.
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
                <h2 className="text-3xl font-bold mb-4">Professioneel Latex Spuiten in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Latex spuiten is de ideale techniek voor het snel en egaal afwerken van 
                  grote oppervlakken. Met onze professionele airless apparatuur spuiten wij 
                  uw muren en plafonds in een fractie van de tijd die rollen zou kosten.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Voordelen van Latex Spuiten</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  In tegenstelling tot rollen of strijken geeft spuiten een perfect egale 
                  afwerking zonder rolstrepen of penseelstreken. Het resultaat is een 
                  strak, professioneel ogend oppervlak dat jarenlang mooi blijft.
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
                <h3 className="text-2xl font-bold mb-4">Onze Spuitwerk Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Muren en plafonds spuiten</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Nieuwbouw en renovatie</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Kantoren en bedrijfspanden</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Zorgvuldige afplakking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Offerte Aanvragen</h3>
                <p className="mb-6">
                  Wilt u weten wat latex spuiten voor uw project kost? 
                  Neem contact met ons op voor een vrijblijvende offerte.
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

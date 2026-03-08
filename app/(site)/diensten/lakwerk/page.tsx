import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lakwerk Eindhoven | Professioneel Schilderen & Lakken',
  description: 'Professioneel lakwerk in Eindhoven. Kozijnen, deuren, trappen en meubels vakkundig gelakt. ✓ Hoogglans & zijdeglans ✓ Strakke afwerking ✓ Gratis offerte',
  keywords: ['lakwerk eindhoven', 'lakken', 'kozijnen lakken', 'deuren lakken', 'trap lakken', 'schilder eindhoven'],
  openGraph: {
    title: 'Lakwerk Eindhoven | Schildersbedrijf040',
    description: 'Professioneel lakwerk in Eindhoven. Kozijnen, deuren en trappen vakkundig gelakt.',
    url: 'https://schildersbedrijf040.nl/diensten/lakwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/lakwerk',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510"

const benefits = [
  'Professionele voorbereiding',
  'Hoogwaardige lakproducten',
  'Strakke en gladde afwerking',
  'Diverse glansgraden',
  'Snelle doorharding',
  'Duurzaam resultaat'
]

export default function LakwerkPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/lakwerk',
    name: 'Lakwerk',
    description: 'Professioneel lakwerk voor kozijnen, deuren en trappen in Eindhoven en omgeving',
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
    serviceType: 'Lakwerk'
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
        name: 'Lakwerk',
        item: 'https://schildersbedrijf040.nl/diensten/lakwerk'
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
            alt="Lakwerk in Eindhoven - Schildersbedrijf040"
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
              <span className="text-[#0088FF]">LAKWERK</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Geef uw kozijnen, deuren en trappen een strakke en duurzame afwerking 
              met professioneel lakwerk van Schildersbedrijf040.
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
                <h2 className="text-3xl font-bold mb-4">Vakkundig Lakwerk in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Lakwerk vraagt om precisie en vakmanschap. Of het nu gaat om kozijnen, 
                  deuren, trappen of meubels - wij zorgen voor een perfecte, gladde afwerking 
                  die jarenlang mooi blijft.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Onze Werkwijze</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Een goed lakresultaat begint bij de voorbereiding. We schuren alle 
                  oppervlakken zorgvuldig, vullen oneffenheden op en zorgen voor een 
                  stofvrije omgeving. Zo garanderen we een vlekkeloze eindlaag.
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
                <h3 className="text-2xl font-bold mb-4">Onze Lakwerk Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Lakken van kozijnen en deuren</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Trappen en balustrades</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Meubels en kasten</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Radiators en leidingen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Offerte Aanvragen</h3>
                <p className="mb-6">
                  Wij maken graag een vrijblijvende offerte voor uw lakwerk. 
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

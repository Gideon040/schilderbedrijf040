import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Binnenschilderwerk Eindhoven | Professioneel & Vakkundig',
  description: 'Professioneel binnenschilderwerk in Eindhoven. Muren, plafonds, kozijnen en deuren vakkundig geschilderd. Gratis offerte binnen 24 uur. ✓ 5+ jaar ervaring ✓ 1 jaar garantie',
  keywords: ['binnenschilderwerk eindhoven', 'binnenschilder', 'muren schilderen', 'plafond schilderen', 'kozijnen schilderen', 'schilder eindhoven'],
  openGraph: {
    title: 'Binnenschilderwerk Eindhoven | Schildersbedrijf040',
    description: 'Professioneel binnenschilderwerk in Eindhoven. Muren, plafonds, kozijnen en deuren vakkundig geschilderd met 1 jaar garantie.',
    url: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510"

const benefits = [
  'Vakkundige voorbereiding van ondergronden',
  'Hoogwaardige verfproducten',
  'Strakke en duurzame afwerking',
  'Professioneel kleuradvies',
  'Nette en schone werkplek',
  '1 jaar garantie op uitgevoerd werk'
]

export default function BinnenschilderwerkPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk',
    name: 'Binnenschilderwerk',
    description: 'Professioneel binnenschilderwerk voor woningen en bedrijfspanden in Eindhoven en omgeving',
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
      },
      areaServed: {
        '@type': 'City',
        name: 'Eindhoven'
      }
    },
    areaServed: 'Eindhoven en omgeving',
    serviceType: 'Binnenschilderwerk',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Binnenschilderwerk diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Muren en plafonds schilderen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kozijnen en deuren schilderen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparatie en voorbehandeling'
          }
        }
      ]
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
        name: 'Diensten',
        item: 'https://schildersbedrijf040.nl/diensten'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Binnenschilderwerk',
        item: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk'
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
            alt="Binnenschilderwerk in Eindhoven - Schildersbedrijf040"
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
              <span className="text-white">BINNEN</span><br />
              <span className="text-[#0088FF]">SCHILDERWERK</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Transformeer uw interieur met ons vakkundige binnenschilderwerk. 
              Van muren en plafonds tot kozijnen en deuren - wij zorgen voor een perfect resultaat.
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
                <h2 className="text-3xl font-bold mb-4">Professioneel Binnenschilderwerk in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Bij Schildersbedrijf040 begrijpen we dat uw interieur een belangrijke rol speelt in uw dagelijks leven. 
                  Ons team van ervaren schilders zorgt voor een perfecte afwerking van uw binnenmuren, plafonds, kozijnen en deuren. 
                  We werken met de beste materialen en technieken om een duurzaam en mooi resultaat te garanderen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Onze Aanpak</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We beginnen met een grondige inspectie en voorbereiding van alle te schilderen oppervlakken. 
                  Beschadigingen worden hersteld, ondergronden worden geschuurd en waar nodig wordt er voorbehandeld. 
                  Pas dan beginnen we met het aanbrengen van de nieuwe verflagen.
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
                <h3 className="text-2xl font-bold mb-4">Onze Binnenschilderwerk Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Schilderen van muren en plafonds</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Behandeling van kozijnen en deuren</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Reparatie van beschadigingen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Professioneel kleuradvies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Offerte Aanvragen</h3>
                <p className="mb-6">
                  Wij maken graag een vrijblijvende offerte voor uw binnenschilderwerk. 
                  Neem contact met ons op voor advies en een prijsopgave binnen 24 uur.
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

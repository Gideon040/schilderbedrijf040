import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buitenschilderwerk Eindhoven | Duurzaam & Weerbestendig',
  description: 'Professioneel buitenschilderwerk in Eindhoven. Gevels, kozijnen en deuren vakkundig geschilderd met weerbestendige verf. ✓ Houtrot behandeling ✓ Gratis offerte ✓ 1 jaar garantie',
  keywords: ['buitenschilderwerk eindhoven', 'buitenschilder', 'gevel schilderen', 'kozijnen schilderen buiten', 'schilder eindhoven'],
  openGraph: {
    title: 'Buitenschilderwerk Eindhoven | Schildersbedrijf040',
    description: 'Professioneel buitenschilderwerk in Eindhoven. Bescherm uw woning tegen alle weersomstandigheden.',
    url: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipNXyfpYcsRHyYj-UkgdSInfmglcLJzMdNdm5g_1=s680-w680-h510"

const benefits = [
  'Grondige inspectie van buitenwerk',
  'Houtrot preventie en behandeling',
  'Weerbestendige verfproducten',
  'Professionele voorbereiding',
  'Duurzame bescherming',
  '1 jaar garantie op uitgevoerd werk'
]

export default function BuitenschilderwerkPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
    name: 'Buitenschilderwerk',
    description: 'Professioneel buitenschilderwerk voor woningen en bedrijfspanden in Eindhoven en omgeving',
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
    serviceType: 'Buitenschilderwerk',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Buitenschilderwerk diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gevels schilderen'
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
            name: 'Houtrot inspectie en behandeling'
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
        name: 'Buitenschilderwerk',
        item: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk'
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
            alt="Buitenschilderwerk in Eindhoven - Schildersbedrijf040"
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
              <span className="text-white">BUITEN</span><br />
              <span className="text-[#0088FF]">SCHILDERWERK</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Bescherm en verfraai uw woning met professioneel buitenschilderwerk. 
              Wij zorgen voor een duurzame bescherming tegen alle weersomstandigheden.
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
                <h2 className="text-3xl font-bold mb-4">Vakkundig Buitenschilderwerk in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Goed buitenschilderwerk is essentieel voor de bescherming van uw woning. 
                  Ons team van ervaren schilders zorgt voor een perfecte voorbereiding en afwerking 
                  van alle buitenelementen, van gevels tot kozijnen en deuren.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Onze Werkwijze</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We beginnen met een grondige inspectie van het buitenwerk. 
                  Eventuele houtrot wordt behandeld, oppervlakken worden geschuurd en gereinigd. 
                  We gebruiken alleen hoogwaardige, weerbestendige verfproducten voor een langdurig resultaat.
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
                <h3 className="text-2xl font-bold mb-4">Onze Buitenschilderwerk Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Schilderen van gevels en kozijnen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Houtrot inspectie en behandeling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Kleuradvies en planning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Garantie op uitgevoerd werk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Offerte Aanvragen</h3>
                <p className="mb-6">
                  Wij maken graag een vrijblijvende offerte voor uw buitenschilderwerk. 
                  Neem contact met ons op voor een inspectie en prijsopgave binnen 24 uur.
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

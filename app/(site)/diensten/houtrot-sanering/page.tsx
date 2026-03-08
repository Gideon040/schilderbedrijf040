import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Houtrot Sanering Eindhoven | Professionele Houtreparatie',
  description: 'Professionele houtrot sanering in Eindhoven. Kozijnen, deuren en raamwerk vakkundig hersteld. ✓ Preventieve behandeling ✓ Duurzame oplossingen ✓ Gratis inspectie',
  keywords: ['houtrot sanering eindhoven', 'houtrot reparatie', 'kozijn reparatie', 'houtrot behandeling', 'houtreparatie eindhoven'],
  openGraph: {
    title: 'Houtrot Sanering Eindhoven | Schildersbedrijf040',
    description: 'Professionele houtrot sanering in Eindhoven. Voorkom verdere schade en bespaar kosten.',
    url: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
  },
}

const heroImage = "https://lh3.googleusercontent.com/p/AF1QipNXyfpYcsRHyYj-UkgdSInfmglcLJzMdNdm5g_1=s680-w680-h510"

const benefits = [
  'Grondige inspectie van houtwerk',
  'Professionele houtreparatie',
  'Preventieve behandeling',
  'Duurzame epoxy vullingen',
  'Bescherming tegen hernieuwde rot',
  'Garantie op uitgevoerd werk'
]

export default function HoutrotSaneringPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
    name: 'Houtrot Sanering',
    description: 'Professionele houtrot sanering en houtreparatie in Eindhoven en omgeving',
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
    serviceType: 'Houtrot Sanering'
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
        name: 'Houtrot Sanering',
        item: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering'
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
            alt="Houtrot Sanering in Eindhoven - Schildersbedrijf040"
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
              <span className="text-white">HOUTROT</span><br />
              <span className="text-[#0088FF]">SANERING</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Voorkom verdere schade aan uw kozijnen en houtwerk met professionele houtrot sanering. 
              Wij repareren en beschermen uw houtwerk voor de lange termijn.
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
                <h2 className="text-3xl font-bold mb-4">Professionele Houtrot Sanering in Eindhoven</h2>
                <p className="text-gray-600 leading-relaxed">
                  Houtrot is een veelvoorkomend probleem bij houten kozijnen en deuren. 
                  Onbehandeld kan het leiden tot ernstige schade en hoge vervangingskosten. 
                  Ons team is gespecialiseerd in het tijdig opsporen en behandelen van houtrot.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Onze Aanpak</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We beginnen met een grondige inspectie om de omvang van de houtrot vast te stellen. 
                  Vervolgens verwijderen we al het aangetaste hout, behandelen we het gezonde hout 
                  en vullen we de gaten op met duurzame epoxy. Tot slot schilderen we het houtwerk 
                  voor optimale bescherming.
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
                <h3 className="text-2xl font-bold mb-4">Onze Houtrot Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Grondige houtrot inspectie</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Verwijderen aangetast hout</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Epoxy reparatie en vulling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>Preventieve behandeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis Inspectie Aanvragen</h3>
                <p className="mb-6">
                  Twijfelt u of uw houtwerk houtrot heeft? Wij komen graag langs voor 
                  een gratis inspectie en vrijblijvende offerte.
                </p>
                <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center font-bebas text-lg tracking-wider hover:bg-gray-100 transition-colors">
                  INSPECTIE AANVRAGEN
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

import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over Ons | Ervaren Schildersbedrijf Eindhoven',
  description: 'Leer Schildersbedrijf040 kennen. Meer dan 5 jaar ervaring in Eindhoven. Vakkundig, betrouwbaar en persoonlijk. Ontdek onze geschiedenis en werkwijze.',
  keywords: ['over schildersbedrijf040', 'schilder eindhoven', 'ervaren schilder', 'betrouwbaar schildersbedrijf'],
  openGraph: {
    title: 'Over Ons | Schildersbedrijf040',
    description: 'Leer Schildersbedrijf040 kennen. Meer dan 5 jaar ervaring in vakkundig schilderwerk.',
    url: 'https://schildersbedrijf040.nl/over-ons',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/over-ons',
  },
}

const benefits = [
  'Meer dan 5 jaar ervaring',
  'Alles onder één dak',
  'Vakkundig en betrouwbaar',
  'Persoonlijke aanpak',
  'Flexibele planning',
  'Kwaliteitsgarantie'
]

export default function OverOnsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://schildersbedrijf040.nl/over-ons',
    mainEntity: {
      '@type': 'PaintingContractor',
      name: 'Schildersbedrijf040',
      description: 'Professioneel schildersbedrijf in Eindhoven met meer dan 5 jaar ervaring in binnen- en buitenschilderwerk, behangen en houtrot sanering.',
      foundingDate: '2019',
      founder: {
        '@type': 'Person',
        name: 'Jordy Jacobs',
        jobTitle: 'Eigenaar'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacob van Campenweg 25',
        addressLocality: 'Eindhoven',
        postalCode: '5624CD',
        addressCountry: 'NL'
      },
      areaServed: 'Eindhoven en omgeving',
      knowsAbout: [
        'Binnenschilderwerk',
        'Buitenschilderwerk',
        'Behangen',
        'Houtrot sanering',
        'Latex spuiten',
        'Lakwerk'
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
        name: 'Over Ons',
        item: 'https://schildersbedrijf040.nl/over-ons'
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
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.55.12_amqj6v.jpg"
            alt="Over Schildersbedrijf040 - Uw schilder in Eindhoven"
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
              <span className="text-white">OVER</span><br />
              <span className="text-[#0088FF]">SCHILDERSBEDRIJF040</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              MEER DAN EEN SCHILDERSBEDRIJF
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
                <h2 className="text-3xl font-bold mb-6">Onze Geschiedenis</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Ons schildersbedrijf is opgericht vanuit passie voor het schildersvak. Na jarenlang ervaring
                    op te hebben gedaan te midden van ervaren mensen, was het voor Jordy Jacobs tijd voor
                    een nieuwe stap. En dat is uitgegroeid tot meer dan een schildersbedrijf.
                  </p>
                  <p>
                    Wij hebben alles onder één dak, of het nu gaat om schilderen, wrappen, (renovlies) behangen,
                    latex spuiten, houtherstel of timmer- of stukadoorswerk. Deze passie en dit vakmanschap hebben
                    geleid tot een grote tevreden klantenkring.
                  </p>
                  <p>
                    Bij ons is afspraak ook echt afspraak, en u hoeft zich geen seconde druk te maken of we wel doen
                    wat we zeggen. Want dat doen we altijd. Wilt u ook kiezen voor goed en betrouwbaar schilderwerk?
                    Onze schilders en andere vakmannen in Eindhoven en omstreken komen graag langs!
                  </p>
                </div>
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
              {/* Owner Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.54.37_htpaan.jpg"
                  alt="Jordy Jacobs - Eigenaar Schildersbedrijf040 Eindhoven"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Klaar voor uw Project?</h3>
                <p className="mb-6">
                  Wij denken graag met u mee over uw schilderproject. 
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

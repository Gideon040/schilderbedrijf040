import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Statistics } from '@/components/sections/statistics'
import { Process } from '@/components/sections/process'
import { Reviews } from '@/components/sections/reviews'
import { About } from '@/components/sections/about'
import { Guarantees } from '@/components/sections/guarantees'
import { ServiceArea } from '@/components/sections/service-area'
import { FAQ } from '@/components/sections/faq-section'
import { RecentProjects } from '@/components/sections/recent-projects'
import { Callback } from '@/components/sections/callback'
import { SocialMedia } from '@/components/sections/social-media'
import { ContactForm } from '@/components/sections/contact-form'
import Script from 'next/script'

export const metadata = {
  title: 'Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven',
  description: 'Professioneel schildersbedrijf in Eindhoven voor binnen- en buitenschilderwerk, behangen en houtrot sanering. Meer dan 5 jaar ervaring en 100% kwaliteitsgarantie.',
  alternates: {
    canonical: 'https://schildersbedrijf040.nl',
  },
  openGraph: {
    title: 'Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven',
    description: 'Professioneel schildersbedrijf in Eindhoven voor binnen- en buitenschilderwerk, behangen en houtrot sanering. Meer dan 5 jaar ervaring en 100% kwaliteitsgarantie.',
    url: 'https://schildersbedrijf040.nl',
    siteName: 'Schildersbedrijf040',
    images: [
      {
        url: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/schildersbedrijf040_logo_aqxhxr.png',
        width: 800,
        height: 600,
        alt: 'Schildersbedrijf040 Logo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  }
}

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'PaintingCompany',
    '@id': 'https://schildersbedrijf040.nl/#organization',
    name: 'Schildersbedrijf040',
    description: 'Schildersbedrijf040 is een professioneel schildersbedrijf in Eindhoven, gespecialiseerd in binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering.',
    image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/schildersbedrijf040_logo_aqxhxr.png',
    url: 'https://schildersbedrijf040.nl',
    telephone: '+31638903004',
    email: 'info@schildersbedrijf040.nl',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Straatsburglaan 26',
      addressLocality: 'Eindhoven',
      addressRegion: 'Noord-Brabant',
      postalCode: '5627DB',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4334,
      longitude: 5.4834
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '17:30'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100064851917826',
      'https://www.instagram.com/schildersbedrijf040/'
    ],
    areaServed: [
      { '@type': 'City', name: 'Eindhoven' },
      { '@type': 'City', name: 'Waalre' },
      { '@type': 'City', name: 'Veldhoven' },
      { '@type': 'City', name: 'Best' },
      { '@type': 'City', name: 'Son en Breugel' },
      { '@type': 'City', name: 'Geldrop' },
      { '@type': 'City', name: 'Nuenen' },
      { '@type': 'City', name: 'Helmond' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '41',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Schilderdiensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Binnenschilderwerk',
            description: 'Professioneel binnenschilderwerk voor uw woning of bedrijfspand in Eindhoven'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buitenschilderwerk',
            description: 'Vakkundig buitenschilderwerk met duurzame Boonstoppel verfproducten'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Behangen',
            description: 'Professioneel behangwerk voor een naadloze afwerking'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lakwerk',
            description: 'Specialistisch lakwerk voor deuren, kozijnen en meubels'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Latex Spuiten',
            description: 'Efficiënt latex spuiten voor een egale, rolstreepvrije afwerking'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Houtrot Sanering',
            description: 'Preventieve en curatieve houtrot sanering om grotere schade te voorkomen'
          }
        }
      ]
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat kost een schilder in Eindhoven?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een schilder in Eindhoven kost gemiddeld tussen € 35 en € 55 per uur, afhankelijk van het type schilderwerk en de staat van de ondergrond. Binnenschilderwerk valt doorgaans lager uit dan buitenschilderwerk, omdat buitenwerk meer voorbereiding vereist zoals schuren, gronden en eventueel houtrot sanering. Schildersbedrijf040 brengt altijd eerst een gratis inspectie uit en levert een gedetailleerde offerte op maat, zodat u vooraf precies weet wat de kosten zijn, zonder verrassingen achteraf.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoe lang duurt een schilderproject?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een gemiddeld schilderproject bij Schildersbedrijf040 duurt tussen de 3 en 10 werkdagen, afhankelijk van de omvang en het type werk. Het schilderen van een woonkamer (muren en plafond) kost doorgaans 2 tot 3 dagen, terwijl een complete buitenschilderbeurt van een rijtjeswoning 5 tot 8 werkdagen in beslag neemt. Bij de offerte ontvangt u altijd een concreet tijdschema. Schildersbedrijf040 plant projecten strak in, zodat het werk binnen de afgesproken termijn wordt opgeleverd.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welke garantie geeft Schildersbedrijf040 op schilderwerk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Schildersbedrijf040 biedt garantie op zowel het vakmanschap als de gebruikte materialen. De exacte garantieperiode hangt af van het type schilderwerk: binnenschilderwerk kent doorgaans een garantie van 3 tot 5 jaar, buitenschilderwerk van 5 tot 7 jaar. Schildersbedrijf040 werkt uitsluitend met Boonstoppel verf, waardoor het schilderwerk langer meegaat. Mocht er binnen de garantieperiode een gebrek ontstaan, dan herstelt Schildersbedrijf040 dit kosteloos.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan er het hele jaar door geschilderd worden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Binnenschilderwerk kan het hele jaar door worden uitgevoerd, ongeacht het seizoen of de weersomstandigheden. Voor buitenschilderwerk geldt dat de buitentemperatuur minimaal 10 °C moet zijn en de ondergrond droog. In de praktijk voert Schildersbedrijf040 buitenschilderwerk daarom hoofdzakelijk uit van april tot en met oktober. In de wintermaanden richt Schildersbedrijf040 zich op binnenwerk, behangen, lakwerk en latex spuiten.'
        }
      },
      {
        '@type': 'Question',
        name: 'Werkt Schildersbedrijf040 ook buiten Eindhoven?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Vaste werkgebieden zijn onder meer Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond, Valkenswaard, Oirschot, Heeze, Mierlo, Meerhoven, Deurne, Beek en Donk, Eersel, Bergeijk en Maarheeze.'
        }
      }
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://schildersbedrijf040.nl/#website',
    name: 'Schildersbedrijf040',
    url: 'https://schildersbedrijf040.nl',
    publisher: {
      '@id': 'https://schildersbedrijf040.nl/#organization'
    }
  }

  return (
    <main>
      <Script id="schema-markup" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="website-schema" type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </Script>
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <Process />
      <About />
      <Guarantees />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <RecentProjects />
      <Callback />
      <SocialMedia />
      <ContactForm />
    </main>
  )
}

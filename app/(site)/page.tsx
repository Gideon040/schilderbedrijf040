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
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Schilder Eindhoven | Schildersbedrijf040' },
  description: 'Schilder in Eindhoven en omgeving voor binnen- en buitenschilderwerk, behangen en latex spuiten. Boonstoppel-verf, gratis inspectie en een vaste prijs.',
  alternates: {
    canonical: 'https://schildersbedrijf040.nl',
  },
  openGraph: {
    title: 'Schilder Eindhoven | Schildersbedrijf040',
    description: 'Schilder in Eindhoven en omgeving voor binnen- en buitenschilderwerk, behangen en latex spuiten. Boonstoppel-verf, gratis inspectie en een vaste prijs.',
    url: 'https://schildersbedrijf040.nl',
    siteName: 'Schildersbedrijf040',
    images: [
      {
        url: '/images/schildersbedrijf040-schilder-eindhoven.jpg',
        width: 1200,
        height: 630,
        alt: 'Schildersbedrijf040, schilder in Eindhoven',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  }
}

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat kost een schilder in Eindhoven?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een schilder in Eindhoven kost gemiddeld €30 tot €35 per m² voor binnenschilderwerk en €35 tot €45 per m² voor buitenschilderwerk aan de gevel, afhankelijk van het type schilderwerk en de staat van de ondergrond. Binnenschilderwerk valt doorgaans lager uit dan buitenschilderwerk, omdat buitenwerk meer voorbereiding vereist zoals schuren, gronden en eventueel houtrot sanering. Schildersbedrijf040 brengt altijd eerst een gratis inspectie uit en levert een gedetailleerde offerte op maat, zodat u vooraf precies weet wat de kosten zijn, zonder verrassingen achteraf.'
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

  return (
    <main>
      <JsonLd data={faqSchema} />
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

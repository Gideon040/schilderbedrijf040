import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/hero'
import {
  Diensten,
  OverOns,
  ReviewsBlok,
  UitOnsWerk,
  Werkwijze,
  WerkgebiedEnFaq,
  Winterband,
  type Faq,
} from '@/components/home/sections'
import { OfferteBlok } from '@/components/home/offerte-blok'
import { JsonLd } from '@/components/json-ld'
import { faqSchema } from '@/lib/schema'
import { huidigSeizoen } from '@/lib/seizoen'

// Dagelijks opnieuw opbouwen, zodat het seizoensblok vanzelf wisselt
export const revalidate = 86400

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
  },
}

// Zichtbare antwoorden, dezelfde tekst als in het FAQPage-schema
const faqs: Faq[] = [
  {
    question: 'Wat kost een schilder in Eindhoven?',
    answer:
      'Een schilder in Eindhoven kost gemiddeld €30 tot €35 per m² voor binnenschilderwerk en €35 tot €45 per m² voor buitenschilderwerk aan de gevel, afhankelijk van het type schilderwerk en de staat van de ondergrond. Binnenschilderwerk valt doorgaans lager uit dan buitenschilderwerk, omdat buitenwerk meer voorbereiding vereist zoals schuren, gronden en eventueel houtrot sanering. Schildersbedrijf040 brengt altijd eerst een gratis inspectie uit en levert een gedetailleerde offerte op maat, zodat u vooraf precies weet wat de kosten zijn, zonder verrassingen achteraf.',
    link: { href: '/diensten/binnenschilderwerk', tekst: 'Bekijk de prijzen voor binnenschilderwerk.' },
  },
  {
    question: 'Hoe herkent u een goede schilder in Eindhoven?',
    answer:
      'Een goede schilder in Eindhoven herkent u aan ervaringen van klanten, een duidelijke offerte en zorgvuldige voorbereiding. Kijk naar reviews: Schildersbedrijf040 heeft een 5,0 op Google uit 41 reviews en een 4,9 op Werkspot. Vraag om een inspectie bij u thuis en een offerte met vaste prijs, en vraag welke verf er wordt gebruikt. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft ruim vijf jaar ervaring in Eindhoven en omgeving.',
  },
  {
    question: 'Kan er het hele jaar door geschilderd worden?',
    answer:
      'Binnenschilderwerk kan het hele jaar door worden uitgevoerd, ongeacht het seizoen of de weersomstandigheden. Voor buitenschilderwerk geldt dat de buitentemperatuur minimaal 10 °C moet zijn en de ondergrond droog. In de praktijk voert Schildersbedrijf040 buitenschilderwerk daarom hoofdzakelijk uit van april tot en met oktober. In de wintermaanden richt Schildersbedrijf040 zich op binnenwerk, behangen, lakwerk en latex spuiten.',
    link: { href: '/diensten/winterschilder', tekst: 'Lees meer over schilderen in de winter.' },
  },
  {
    question: 'Werkt Schildersbedrijf040 ook buiten Eindhoven?',
    answer:
      'Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Vaste werkgebieden zijn onder meer Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond, Valkenswaard, Oirschot, Heeze, Mierlo, Meerhoven, Deurne, Beek en Donk, Eersel, Bergeijk en Maarheeze.',
  },
  {
    question: 'Hoe lang duurt een schilderproject?',
    answer:
      'Een gemiddeld schilderproject bij Schildersbedrijf040 duurt tussen de 3 en 10 werkdagen, afhankelijk van de omvang en het type werk. Het schilderen van een woonkamer (muren en plafond) kost doorgaans 2 tot 3 dagen, terwijl een complete buitenschilderbeurt van een rijtjeswoning 5 tot 8 werkdagen in beslag neemt. Bij de offerte ontvangt u altijd een concreet tijdschema. Schildersbedrijf040 plant projecten strak in, zodat het werk binnen de afgesproken termijn wordt opgeleverd.',
  },
]

export default function Home() {
  const seizoen = huidigSeizoen()
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <HomeHero seizoen={seizoen} />
      <Winterband seizoen={seizoen} />
      <Diensten />
      <UitOnsWerk />
      <OverOns />
      <Werkwijze />
      <ReviewsBlok />
      <WerkgebiedEnFaq faqs={faqs} />
      <OfferteBlok />
    </main>
  )
}

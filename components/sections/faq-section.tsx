'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Wat kost een schilder in Eindhoven?',
    answer:
      'Een schilder in Eindhoven kost gemiddeld tussen € 35 en € 55 per uur, afhankelijk van het type schilderwerk en de staat van de ondergrond. Binnenschilderwerk valt doorgaans lager uit dan buitenschilderwerk, omdat buitenwerk meer voorbereiding vereist zoals schuren, gronden en eventueel houtrot sanering. Schildersbedrijf040 brengt altijd eerst een gratis inspectie uit en levert een gedetailleerde offerte op maat, zodat u vooraf precies weet wat de kosten zijn, zonder verrassingen achteraf.',
  },
  {
    question: 'Hoe lang duurt een schilderproject?',
    answer:
      'Een gemiddeld schilderproject bij Schildersbedrijf040 duurt tussen de 3 en 10 werkdagen, afhankelijk van de omvang en het type werk. Het schilderen van een woonkamer (muren en plafond) kost doorgaans 2 tot 3 dagen, terwijl een complete buitenschilderbeurt van een rijtjeswoning 5 tot 8 werkdagen in beslag neemt. Bij de offerte ontvangt u altijd een concreet tijdschema. Schildersbedrijf040 plant projecten strak in, zodat het werk binnen de afgesproken termijn wordt opgeleverd.',
  },
  {
    question: 'Welke garantie geeft Schildersbedrijf040 op schilderwerk?',
    answer:
      'Schildersbedrijf040 biedt garantie op zowel het vakmanschap als de gebruikte materialen. De exacte garantieperiode hangt af van het type schilderwerk: binnenschilderwerk kent doorgaans een garantie van 3 tot 5 jaar, buitenschilderwerk van 5 tot 7 jaar. Schildersbedrijf040 werkt uitsluitend met Boonstoppel verf, waardoor het schilderwerk langer meegaat. Mocht er binnen de garantieperiode een gebrek ontstaan, dan herstelt Schildersbedrijf040 dit kosteloos.',
  },
  {
    question: 'Kan er het hele jaar door geschilderd worden?',
    answer:
      'Binnenschilderwerk kan het hele jaar door worden uitgevoerd, ongeacht het seizoen of de weersomstandigheden. Voor buitenschilderwerk geldt dat de buitentemperatuur minimaal 10 °C moet zijn en de ondergrond droog. In de praktijk voert Schildersbedrijf040 buitenschilderwerk daarom hoofdzakelijk uit van april tot en met oktober. In de wintermaanden richt Schildersbedrijf040 zich op binnenwerk, behangen, lakwerk en latex spuiten.',
  },
  {
    question: 'Werkt Schildersbedrijf040 ook buiten Eindhoven?',
    answer:
      'Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Vaste werkgebieden zijn onder meer Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen en Helmond. Ook in plaatsen als Den Bosch, Tilburg en Weert voert Schildersbedrijf040 regelmatig schilderwerk uit. Bekijk de pagina van uw stad voor meer informatie over onze diensten bij u in de buurt.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="veelgestelde-vragen" className="text-4xl md:text-5xl font-bold mb-4">
            VEELGESTELDE VRAGEN
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hieronder vindt u antwoorden op de meest gestelde vragen over schilderwerk in Eindhoven
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Staat uw vraag er niet tussen?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Neem contact op met Schildersbedrijf040
            </Link>. Wij helpen u graag verder.
          </p>
        </div>
      </div>
    </section>
  )
}

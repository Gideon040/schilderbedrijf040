'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ClipboardList, PaintBucket, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'CONTACT',
    description: 'Neem telefonisch of via het formulier contact op voor een vrijblijvende afspraak. Schildersbedrijf040 reageert op werkdagen doorgaans binnen 24 uur.'
  },
  {
    icon: ClipboardList,
    title: 'INSPECTIE & OFFERTE',
    description: 'Wij komen gratis bij u langs om het schilderwerk te inspecteren en de ondergrond te beoordelen. Binnen 48 uur na de inspectie ontvangt u een gedetailleerde offerte.'
  },
  {
    icon: PaintBucket,
    title: 'UITVOERING',
    description: 'Vakkundige uitvoering door gediplomeerde schilders met hoogwaardige Boonstoppel verfproducten. Schildersbedrijf040 werkt netjes en beschermt uw interieur tijdens het project.'
  },
  {
    icon: ThumbsUp,
    title: 'OPLEVERING',
    description: 'Na afronding loopt u samen met de schilder het resultaat na. Schildersbedrijf040 levert pas op wanneer u volledig tevreden bent en biedt garantie op het geleverde werk.'
  }
]

export function Process() {
  return (
    <section id="werkwijze" className="py-24 bg-white">
      <div className="container">
        <h2 id="onze-werkwijze" className="text-4xl md:text-5xl font-bold text-center mb-4">
          ONZE WERKWIJZE
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Schildersbedrijf040 hanteert een vast werkproces van contact tot oplevering. Een gestructureerde aanpak voorkomt verrassingen en zorgt ervoor dat elk schilderproject in Eindhoven binnen planning en budget wordt opgeleverd.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1739556938/d46oqzht95tblkswur6p.jpg"
              alt="Jordy Jacobs - Eigenaar Schildersbedrijf040"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Steps Column */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E6F3FF] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#0088FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bebas tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div>
              <Link 
                href="/contact"
                className="btn-primary mt-8 group"
              >
                Gratis offerte aanvragen
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
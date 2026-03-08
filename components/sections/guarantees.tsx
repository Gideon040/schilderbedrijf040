'use client'

import { Shield, Award, Clock, ThumbsUp } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: 'KWALITEITSGARANTIE',
    description: 'Schildersbedrijf040 garandeert vakkundig schilderwerk met Boonstoppel verfproducten. Bij gebreken binnen de garantieperiode herstelt Schildersbedrijf040 het werk kosteloos.'
  },
  {
    icon: Award,
    title: 'GECERTIFICEERD',
    description: 'Het team van Schildersbedrijf040 bestaat uit gediplomeerde schilders met jarenlange praktijkervaring. Elke medewerker volgt regelmatig bijscholing in de nieuwste verftechnieken.'
  },
  {
    icon: Clock,
    title: 'OP TIJD',
    description: 'Schildersbedrijf040 levert elk project op binnen de afgesproken planning. Bij de offerte ontvangt u een concreet tijdschema, zodat u precies weet wanneer het schilderwerk gereed is.'
  },
  {
    icon: ThumbsUp,
    title: 'TEVREDEN KLANTEN',
    description: 'Klanten van Schildersbedrijf040 geven 5 sterren op Google en een 4,9 op Werkspot. Die scores weerspiegelen de combinatie van kwaliteit, communicatie en nette oplevering.'
  }
]

export function Guarantees() {
  return (
    <section id="garanties" className="py-24 bg-accent-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="onze-garanties" className="text-4xl md:text-5xl font-bold mb-4">ONZE GARANTIES</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Schilderwerk is een investering in uw woning — dan wilt u zekerheid over het resultaat. Schildersbedrijf040 biedt daarom duidelijke garanties op materiaal, vakmanschap en planning, zodat u zonder zorgen kunt genieten van uw vernieuwde woning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bebas mb-3">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
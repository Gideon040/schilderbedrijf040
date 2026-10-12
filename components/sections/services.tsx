'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Brush } from 'lucide-react'

const services = [
  {
    title: 'Binnenschilderwerk',
    description: 'Muren, plafonds, kozijnen, deuren en trappen, strak geschilderd en schoon opgeleverd.',
    linkText: 'Meer over binnenschilderwerk',
    image: '/images/binnenschilderwerk-binnendeur-wit-gelakt.jpg',
    alt: 'Wit gelakte binnendeur met glas en kozijn na binnenschilderwerk',
    link: '/diensten/binnenschilderwerk'
  },
  {
    title: 'Buitenschilderwerk',
    description: 'Gevels, kozijnen en boeidelen, goed beschermd tegen weer en houtrot.',
    linkText: 'Meer over buitenschilderwerk',
    image: '/images/buitenschilderwerk-tuinhuis-wit-geschilderd.jpg',
    alt: 'Tuinhuis met wit geschilderde gevel, kozijnen en deuren',
    link: '/diensten/buitenschilderwerk'
  },
  {
    title: 'Behangen',
    description: 'Behang plaatsen of verwijderen, los of samen met het schilderwerk.',
    linkText: 'Meer over behangen',
    image: '/images/behangen-woonkamer-accentwand-rond-haard.jpg',
    alt: 'Woonkamer met donker behang als accentwand rond de haard',
    link: '/diensten/behangen'
  },
  {
    title: 'Lakwerk',
    description: 'Deuren, trappen en kozijnen gelakt in zijdeglans of hoogglans.',
    linkText: 'Meer over lakwerk',
    image: '/images/lakwerk-kozijnen-buiten-wit-gelakt.jpg',
    alt: 'Wit gelakte kozijnen en deuren aan een bakstenen woning',
    link: '/diensten/lakwerk'
  },
  {
    title: 'Latex Spuiten',
    description: 'Muren en plafonds snel en egaal gespoten, ideaal bij nieuwbouw of na stucwerk.',
    linkText: 'Latex spuiten bekijken',
    image: '/images/latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg',
    alt: 'Benedenverdieping in Blixembosch, Eindhoven, met latex gespoten muren en plafond',
    link: '/diensten/latex-spuiten'
  },
  {
    title: 'Houtrot Sanering',
    description: 'Rot hout vakkundig herstellen of vervangen voordat we gaan schilderen.',
    linkText: 'Meer over houtrot sanering',
    image: '/images/houtrot-sanering-kozijn-hersteld-en-geschilderd.jpg',
    alt: 'Kozijn na houtrot sanering hersteld en wit geschilderd',
    link: '/diensten/houtrot-sanering'
  }
]

export function Services() {
  return (
    <section id="diensten" className="py-12 md:py-24 bg-accent-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="onze-diensten" className="text-4xl md:text-5xl font-bold mb-4">ONZE DIENSTEN</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Schildersbedrijf040 biedt zes schilderdiensten voor particulieren en bedrijven in Eindhoven en omgeving. Elk project begint met een gratis inspectie, zodat u vooraf precies weet wat er nodig is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                <div className="absolute top-4 left-4">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bebas text-white tracking-wide">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-base mb-4">
                  {service.description}
                </p>
                <span className="text-primary hover:text-primary/80 font-semibold text-base inline-flex items-center transition-colors duration-300">
                  {service.linkText}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
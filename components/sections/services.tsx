'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Brush } from 'lucide-react'

const services = [
  {
    title: 'Binnenschilderwerk',
    description: 'Muren, plafonds, kozijnen, deuren en trappen, strak geschilderd en schoon opgeleverd.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510',
    link: '/diensten/binnenschilderwerk'
  },
  {
    title: 'Buitenschilderwerk',
    description: 'Gevels, kozijnen en boeidelen, goed beschermd tegen weer en houtrot.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNXyfpYcsRHyYj-UkgdSInfmglcLJzMdNdm5g_1=s680-w680-h510',
    link: '/diensten/buitenschilderwerk'
  },
  {
    title: 'Behangen',
    description: 'Behang plaatsen of verwijderen, los of samen met het schilderwerk.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNI8hPbuWSdgczF1ESCx3LJuCE1R20aoXhy4qw0=s680-w680-h510',
    link: '/diensten/behangen'
  },
  {
    title: 'Lakwerk',
    description: 'Deuren, trappen en kozijnen gelakt in zijdeglans of hoogglans.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOr4IhxZqT7X5yggLlaVSJnnjH9PWYVIF5OE5TG=s680-w680-h510',
    link: '/diensten/lakwerk'
  },
  {
    title: 'Latex Spuiten',
    description: 'Muren en plafonds snel en egaal gespoten, ideaal bij nieuwbouw of na stucwerk.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPWQlzzKHaEZif6B4lo5V6JnTsfDmR6_vbbTv7x=s680-w680-h510',
    link: '/diensten/latex-spuiten'
  },
  {
    title: 'Houtrot Sanering',
    description: 'Rot hout vakkundig herstellen of vervangen voordat we gaan schilderen.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMZixn_Qv18YKLHSq9Y3tZvy3zD__7obCnKGGMF=s680-w680-h510',
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
                  alt={service.title}
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
                <span className="text-primary hover:text-primary/80 font-bebas tracking-wider text-lg inline-flex items-center transition-colors duration-300">
                  MEER INFO
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
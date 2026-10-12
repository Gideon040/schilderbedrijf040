'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Brush } from 'lucide-react'

const services = [
  {
    title: 'Binnenschilderwerk',
    description: 'Professioneel schilderwerk voor uw interieur, van muren en plafonds tot kozijnen en deuren. Goed binnenschilderwerk verhoogt de uitstraling van uw woning en beschermt oppervlakken tot wel 7 jaar.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510',
    link: '/diensten/binnenschilderwerk'
  },
  {
    title: 'Buitenschilderwerk',
    description: 'Bescherm en verfraai uw woning met vakkundig buitenschilderwerk, inclusief gratis houtrot inspectie. Zonder tijdig buitenschilderwerk kan vochtschade de constructie van uw houtwerk aantasten.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNXyfpYcsRHyYj-UkgdSInfmglcLJzMdNdm5g_1=s680-w680-h510',
    link: '/diensten/buitenschilderwerk'
  },
  {
    title: 'Behangen',
    description: 'Van klassiek behang tot moderne wandbekleding. Schildersbedrijf040 zorgt voor een naadloze afwerking. Behang geeft uw interieur direct karakter en is beschikbaar in honderden dessins.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNI8hPbuWSdgczF1ESCx3LJuCE1R20aoXhy4qw0=s680-w680-h510',
    link: '/diensten/behangen'
  },
  {
    title: 'Lakwerk',
    description: 'Specialistisch lakwerk voor een hoogwaardige afwerking van deuren, kozijnen en meubels. Schildersbedrijf040 gebruikt Boonstoppel lakken voor een krasbestendig en duurzaam resultaat.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOr4IhxZqT7X5yggLlaVSJnnjH9PWYVIF5OE5TG=s680-w680-h510',
    link: '/diensten/lakwerk'
  },
  {
    title: 'Latex Spuiten',
    description: 'Efficiënt en strak resultaat met professionele latex spuittechniek. Latex spuiten is tot 3 keer sneller dan rollen en levert een egale, rolstreepvrije afwerking.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPWQlzzKHaEZif6B4lo5V6JnTsfDmR6_vbbTv7x=s680-w680-h510',
    link: '/diensten/latex-spuiten'
  },
  {
    title: 'Houtrot Sanering',
    description: 'Preventieve en curatieve behandeling van houtrot om grotere schade te voorkomen. Onbehandeld houtrot kan zich snel uitbreiden en tot kostbare vervanging van kozijnen leiden.',
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
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
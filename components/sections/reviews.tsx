'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: "Uitstekend binnenschilderwerk geleverd in onze woning in Eindhoven Centrum. Zeer professioneel, netjes afgewerkt en alles keurig afgedekt tijdens het werk.",
    name: "Peter van der Berg",
    location: "Eindhoven Centrum",
    date: "2025-09-12"
  },
  {
    text: "Schildersbedrijf040 heeft prachtig behangwerk geleverd in onze woonkamer in Strijp. Klantvriendelijke service en het resultaat is perfect. Echte aanrader!",
    name: "Maria Jansen",
    location: "Strijp, Eindhoven",
    date: "2025-06-23"
  },
  {
    text: "Zeer tevreden met het buitenschilderwerk aan onze woning in Woensel. Netjes en volgens planning uitgevoerd, inclusief houtrot sanering van twee kozijnen.",
    name: "Johan Smits",
    location: "Woensel, Eindhoven",
    date: "2025-03-08"
  }
]

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/buitenschilderwerk-vrijstaande-woning-wit.jpg"
          alt="Vrijstaande woning met wit geschilderde gevel en kozijnen"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 id="klantenervaringen" className="text-4xl md:text-5xl font-bold text-white mb-4">
            KLANTENERVARINGEN
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            5 sterren op Google en 4,9 op Werkspot, ontdek wat klanten over Schildersbedrijf040 zeggen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white mb-6 min-h-[80px]">{review.text}</p>

              {/* Review Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
                <p className="text-gray-400 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://www.google.com/search?sca_esv=6612082edc0c7c53&sxsrf=AHTn8zqXM9P9rr_DEP_Y8cgSM8P38_O_WA:1739473827108&q=schildersbedrijf040&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfcIc2FTV1Lv9HS2xHpS4Naiopf5KDJFqf-g1lCcIwWSwqfZU8yS9dPvANGrnsOFGXYIdR4%3D&uds=ABqPDvxkc1hlhLTCjoC0jcqe9t98RiHBv3KINteNnsf51M3OAPBwUlP2sXXz29PWHzvPUeJGKAPbEIniywiBMJhN3DGhC25M4IEbo64C2lAkK-SRVgEFE7Q&sa=X&ved=2ahUKEwjP7L38rMGLAxXJ3AIHHYzEH0kQ3PALegQIGRAE&biw=1920&bih=953&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors inline-flex items-center group"
          >
            Bekijk al onze Google Reviews
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
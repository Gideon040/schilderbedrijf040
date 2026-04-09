'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

type Region = {
  name: string
  slug?: string
  href?: string
}

const regions: Region[][] = [
  [
    { name: 'Eindhoven', href: '/' },
    { name: 'Veldhoven', slug: 'veldhoven' },
    { name: 'Waalre', slug: 'waalre' },
    { name: 'Best', slug: 'best' },
    { name: 'Nuenen', slug: 'nuenen' },
    { name: 'Geldrop', slug: 'geldrop' },
  ],
  [
    { name: 'Helmond', slug: 'helmond' },
    { name: 'Son en Breugel', slug: 'son-en-breugel' },
    { name: 'Valkenswaard', slug: 'valkenswaard' },
    { name: 'Oirschot', slug: 'oirschot' },
    { name: 'Heeze', slug: 'heeze' },
    { name: 'Mierlo', slug: 'mierlo' },
  ],
  [
    { name: 'Meerhoven', slug: 'meerhoven' },
    { name: 'Deurne', slug: 'deurne' },
    { name: 'Beek en Donk', slug: 'beek-en-donk' },
    { name: 'Eersel', slug: 'eersel' },
    { name: 'Bergeijk', slug: 'bergeijk' },
    { name: 'Maarheeze', slug: 'maarheeze' },
  ]
]

export function ServiceArea() {
  return (
    <section id="werkgebied" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="ons-werkgebied" className="text-4xl md:text-5xl font-bold mb-4">ONS WERKGEBIED</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Doordat Schildersbedrijf040 lokaal werkt, zijn de reistijden kort en kunnen spoedklussen vaak binnen een week worden ingepland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79586.85804700314!2d5.4834!3d51.4334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d90575ca5e3d%3A0x55989f5f344b006!2sEindhoven!5e0!3m2!1sen!2snl!4v1647870000000!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Service Regions */}
          <div className="bg-accent-light rounded-xl p-8">
            <h3 className="text-2xl font-bebas mb-8">SERVICEREGIO&apos;S</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              {regions.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {column.map((region, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      {region.slug || region.href ? (
                        <Link href={region.href || `/locaties/${region.slug}`} className="text-primary hover:underline">
                          {region.name}
                        </Link>
                      ) : (
                        <span className="text-gray-700">{region.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
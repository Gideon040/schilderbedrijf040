'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, ExternalLink } from 'lucide-react'

const instagramPosts = [
  {
    image: "/images/lakwerk-voordeur-antraciet.jpg",
    caption: "Afgelakte deur 🚪"
  },
  {
    image: "/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg",
    caption: "Houtrot reparatie met schilderwerk 🔨"
  },
  {
    image: "/images/buitenschilderwerk-vrijstaande-woning-wit.jpg",
    caption: "Complete vrijstaande woning buitenschilderwerk 🏠"
  }
]

export function SocialMedia() {
  return (
    <section id="social-media" className="py-24 bg-accent-light overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="volg-onze-projecten" className="text-4xl md:text-5xl font-bold mb-4">
            VOLG ONZE PROJECTEN
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bekijk onze laatste updates en projecten op social media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Social Media Cards */}
          <div className="space-y-8">
            {/* Instagram Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">@schildersbedrijf040</h3>
                    <p className="text-sm text-gray-600">Instagram</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/schildersbedrijf040/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((post, index) => (
                  <a
                    key={index}
                    href="https://www.instagram.com/schildersbedrijf040/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <p className="text-white text-sm text-center">{post.caption}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="https://www.instagram.com/schildersbedrijf040/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-all duration-300 font-bebas tracking-wider"
              >
                VOLG ONS OP INSTAGRAM
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Schildersbedrijf040</h3>
                    <p className="text-sm text-gray-600">Facebook</p>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100064851917826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-gray-600 mb-4">
                Volg ons op Facebook voor de laatste updates, projecten en aanbiedingen!
              </p>

              <a
                href="https://www.facebook.com/profile.php?id=100064851917826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#1877F2] text-white py-3 rounded-lg hover:bg-[#1877F2]/90 transition-colors font-bebas tracking-wider"
              >
                VOLG ONS OP FACEBOOK
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:sticky lg:top-24 space-y-8 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold">Blijf op de hoogte van onze projecten</h3>
            <p className="text-gray-600">
              Volg ons op Instagram en Facebook voor:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">1</span>
                </div>
                <span>Dagelijkse updates van onze projecten</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">2</span>
                </div>
                <span>Voor en na transformaties</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">3</span>
                </div>
                <span>Tips en tricks voor onderhoud</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">4</span>
                </div>
                <span>Exclusieve aanbiedingen</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact"
                className="btn-primary inline-flex items-center group"
              >
                NEEM CONTACT OP
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
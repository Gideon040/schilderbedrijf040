'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const services = [
  { name: 'Binnenschilderwerk', href: '/diensten/binnenschilderwerk' },
  { name: 'Buitenschilderwerk', href: '/diensten/buitenschilderwerk' },
  { name: 'Behangen', href: '/diensten/behangen' },
  { name: 'Lakwerk', href: '/diensten/lakwerk' },
  { name: 'Latex Spuiten', href: '/diensten/latex-spuiten' },
  { name: 'Houtrot Sanering', href: '/diensten/houtrot-sanering' }
]

const werkgebieden = [
  { name: 'Eindhoven', href: '/' },
  { name: 'Veldhoven', href: '/locaties/veldhoven' },
  { name: 'Waalre', href: '/locaties/waalre' },
  { name: 'Best', href: '/locaties/best' },
  { name: 'Nuenen', href: '/locaties/nuenen' },
  { name: 'Geldrop', href: '/locaties/geldrop' },
  { name: 'Helmond', href: '/locaties/helmond' },
  { name: 'Son en Breugel', href: '/locaties/son-en-breugel' },
  { name: 'Valkenswaard', href: '/locaties/valkenswaard' },
  { name: 'Oirschot', href: '/locaties/oirschot' },
  { name: 'Heeze', href: '/locaties/heeze' },
  { name: 'Mierlo', href: '/locaties/mierlo' },
  { name: 'Meerhoven', href: '/locaties/meerhoven' },
  { name: 'Deurne', href: '/locaties/deurne' },
  { name: 'Beek en Donk', href: '/locaties/beek-en-donk' },
  { name: 'Eersel', href: '/locaties/eersel' },
  { name: 'Bergeijk', href: '/locaties/bergeijk' },
  { name: 'Maarheeze', href: '/locaties/maarheeze' },
]

export function Footer() {
  return (
    <footer className="bg-[#001B32] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bebas mb-6">CONTACT</h3>
            <div className="space-y-4">
              <a href="tel:+31638903004" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>06-38903004</span>
              </a>
              <a href="mailto:info@schildersbedrijf040.nl" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@schildersbedrijf040.nl</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Straatsburglaan 26, 5627DB Eindhoven</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bebas mb-6">DIENSTEN</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bebas mb-6">SNELLE LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="hover:text-primary transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Werkgebieden */}
          <div>
            <h3 className="text-xl font-bebas mb-6">WERKGEBIEDEN</h3>
            <ul className="space-y-2">
              {werkgebieden.map((locatie) => (
                <li key={locatie.href}>
                  <Link href={locatie.href} className="hover:text-primary transition-colors">
                    {locatie.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bebas mb-6">VOLG ONS</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064851917826"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/schildersbedrijf040/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

<div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
 <p>© {new Date().getFullYear()} Schildersbedrijf040. Alle rechten voorbehouden. Website gemaakt door <a href="https://www.gostack.nl" target="_blank" rel="noopener noreferrer" className="hover:text-white">GOSTACK</a></p>
</div>
      </div>
    </footer>
  )
}
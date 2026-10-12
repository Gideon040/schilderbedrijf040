import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { Stars } from '@/components/site/stars'
import { diensten, plaatsen } from '@/lib/navigation'
import { site } from '@/lib/site'

const snelleLinks = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Veelgestelde vragen', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-[#AEBBCC]">
      <div className="container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.6fr_1fr] lg:gap-12 lg:py-[72px]">
        <div className="flex flex-col gap-3.5 text-base leading-relaxed">
          <span className="font-heading text-[30px] font-bold text-white">Schildersbedrijf040</span>
          <span>Vakkundig schilderwerk in Eindhoven en omgeving. Eigenaar {site.owner}.</span>
          <span className="flex flex-wrap items-center gap-2 text-white">
            <Stars className="h-3.5 w-3.5" />
            {site.google.rating} op Google ({site.google.reviewCount}) · {site.werkspot.rating} op Werkspot
          </span>
          <div className="mt-2 flex gap-3">
            <a href={site.sameAs[0]} target="_blank" rel="noopener noreferrer" aria-label="Schildersbedrijf040 op Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={site.sameAs[1]} target="_blank" rel="noopener noreferrer" aria-label="Schildersbedrijf040 op Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 text-base">
          <h2 className="mb-1.5 font-sans text-base font-bold text-white">Diensten</h2>
          {diensten.map((d) => (
            <Link key={d.href} href={d.href} className="hover:text-white">
              {d.name}
            </Link>
          ))}
          <h2 className="mb-1.5 mt-4 font-sans text-base font-bold text-white">Snel naar</h2>
          {snelleLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-base">
          <h2 className="mb-1.5 font-sans text-base font-bold text-white">Werkgebied</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {plaatsen.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-white">
                  Schilder {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 text-base leading-normal">
          <h2 className="mb-1.5 font-sans text-base font-bold text-white">Contact</h2>
          <address className="not-italic">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <a href={site.phoneHref} className="font-semibold text-white hover:text-verf">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
          <span>
            {site.openingHours.days} {site.openingHours.opens} tot {site.openingHours.closes}
          </span>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-sm text-[#AEBBCC]">
          © {new Date().getFullYear()} Schildersbedrijf040. Alle rechten voorbehouden. Website gemaakt door{' '}
          <a href="https://www.gostack.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            GOSTACK
          </a>
        </div>
      </div>
    </footer>
  )
}

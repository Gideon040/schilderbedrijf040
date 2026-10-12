'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Stars } from '@/components/site/stars'
import { diensten } from '@/lib/navigation'
import { site } from '@/lib/site'
import { images } from '@/lib/images'

const links = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Werkgebied', href: '/#werkgebied' },
  { name: 'Blog', href: '/blog' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const close = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Topbar (alleen vanaf tablet; op mobiel staat bellen in de actiebalk onderaan) */}
      <div className="hidden md:block bg-ink text-[#D5DDE8] text-sm">
        <div className="container flex h-10 items-center justify-between">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <Stars className="h-3.5 w-3.5" />
              {site.google.rating} op Google ({site.google.reviewCount} reviews)
            </span>
            <span>{site.werkspot.rating} op Werkspot</span>
          </div>
          <div className="flex items-center gap-7">
            <a href={site.phoneHref} className="font-semibold text-white hover:text-verf">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E6E8EC] bg-white">
        <div className="container flex h-16 items-center justify-between md:h-[84px]">
          <Link href="/" className="relative block h-11 w-[100px] md:h-[58px] md:w-[130px]" aria-label="Schildersbedrijf040, naar de homepage">
            <Image src={images.logo.src} alt={images.logo.alt} fill sizes="130px" className="object-contain object-left" priority />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdmenu">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-base font-semibold text-tekst outline-none hover:text-link">
                Diensten
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60 rounded-xl border border-lijn bg-white p-1.5 shadow-lg">
                {diensten.map((d) => (
                  <DropdownMenuItem key={d.href} asChild className="rounded-lg focus:bg-zand">
                    <Link href={d.href} className="w-full px-3 py-2.5 text-base text-tekst">
                      {d.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-base font-semibold text-tekst hover:text-link">
                {l.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary !py-3 !text-base">
              Gratis offerte aanvragen
            </Link>
          </nav>

          <button
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
            <nav className="container flex flex-col gap-1 py-6" aria-label="Mobiel menu">
              <p className="eyebrow mb-1">Diensten</p>
              {diensten.map((d) => (
                <Link key={d.href} href={d.href} onClick={close} className="py-2.5 text-lg text-tekst">
                  {d.name}
                </Link>
              ))}
              <div className="my-3 h-px bg-lijn" />
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={close} className="py-2.5 text-lg font-semibold text-navy">
                  {l.name}
                </Link>
              ))}
              <Link href="/contact" onClick={close} className="btn-primary mt-4 w-full">
                Gratis offerte aanvragen
              </Link>
              <a href={site.phoneHref} className="btn-secondary mt-2 w-full">
                Bel {site.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

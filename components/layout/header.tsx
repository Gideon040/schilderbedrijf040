'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { diensten } from '@/lib/navigation'
import { site } from '@/lib/site'
import { images } from '@/lib/images'
import { Pijl } from '@/components/site/v2'

const links = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Blog', href: '/blog' },
  { name: 'Werkgebied', href: '/#werkgebied' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <div className="top">
        <div className="wrap">
          <span>
            <span className="stars" aria-hidden="true">★★★★★</span> <b>{site.google.rating}</b> op Google ({site.google.reviewCount} reviews) ·{' '}
            <b>{site.werkspot.rating}</b> op Werkspot
          </span>
          <span>
            <a href={site.phoneHref}>{site.phone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
      <header className="nav" id="nav">
        <div className="wrap">
          <Link href="/" aria-label="Schildersbedrijf040, naar de homepage" className="logo">
            <Image src={images.logo.src} alt={images.logo.alt} width={117} height={52} priority />
          </Link>
          <nav aria-label="Hoofdmenu">
            <div className="dd">
              <Link className="l" href="/#diensten">
                Diensten
              </Link>
              <div className="dd-menu">
                {diensten.map((d) => (
                  <Link key={d.href} href={d.href}>
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
            {links.map((l) => (
              <Link key={l.href} className="l" href={l.href}>
                {l.name}
              </Link>
            ))}
            <Link className="btn btn-blue" href="/contact">
              Gratis offerte aanvragen <Pijl />
            </Link>
            <button className="menu-btn" type="button" aria-label={open ? 'Menu sluiten' : 'Menu openen'} aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? '✕' : '☰'}
            </button>
          </nav>
        </div>
        {open && (
          <nav className="mmenu" aria-label="Mobiel menu">
            <div className="wrap">
              <div className="eyebrow">Diensten</div>
              {diensten.map((d) => (
                <Link key={d.href} href={d.href}>
                  {d.name}
                </Link>
              ))}
              <hr />
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="b">
                  {l.name}
                </Link>
              ))}
              <Link className="btn btn-blue" href="/contact">
                Gratis offerte aanvragen <Pijl />
              </Link>
              <a className="btn btn-line" href={site.phoneHref}>
                Bel {site.phone}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { diensten, plaatsen } from '@/lib/navigation'
import { site } from '@/lib/site'
import { images } from '@/lib/images'
import { Pijl, staal } from '@/components/site/v2'
import { Icoon } from '@/components/site/iconen'

const links = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Blog', href: '/blog' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

// Korte omschrijving per dienst in het menu
const omschrijving: Record<string, string> = {
  binnenschilderwerk: 'Muren, plafonds, deuren en trappen',
  'latex-spuiten': 'Muren en plafonds egaal gespoten',
  lakwerk: 'Deuren, kozijnen en trappen gelakt',
  behangen: 'Behang plaatsen of verwijderen',
  winterschilder: 'Binnenwerk in de wintermaanden',
  buitenschilderwerk: 'Gevel, kozijnen en boeidelen',
  'kozijnen-schilderen': 'Houten kozijnen buiten',
  'gevel-schilderen': 'Gevels schilderen en herstellen',
  'houtrot-sanering': 'Rot hout herstellen met epoxy',
}

const groepen = [
  { titel: 'Binnen', slugs: ['latex-spuiten', 'binnenschilderwerk', 'lakwerk', 'behangen', 'winterschilder'] },
  { titel: 'Buiten', slugs: ['buitenschilderwerk', 'kozijnen-schilderen', 'gevel-schilderen', 'houtrot-sanering'] },
]

const slug = (href: string) => href.split('/').pop() as string
const perSlug = Object.fromEntries(diensten.map((d) => [slug(d.href), d]))

function DienstLink({ s, klein = false }: { s: string; klein?: boolean }) {
  const d = perSlug[s]
  if (!d) return null
  const st = staal[s] ?? staal.binnenschilderwerk
  return (
    <Link href={d.href} className="mi" style={{ ['--c' as string]: st.c }} data-donker={st.donker ? '' : undefined}>
      <span className="mi-ic">
        <Icoon naam={s} />
      </span>
      <span className="mi-t">
        <b>{d.name}</b>
        {!klein && <small>{omschrijving[s]}</small>}
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <div className="top">
        <div className="wrap">
          <span className="top-l">
            <span className="top-i">
              <span className="stars" aria-hidden="true">
                <Icoon naam="ster" width={13} height={13} />
                <Icoon naam="ster" width={13} height={13} />
                <Icoon naam="ster" width={13} height={13} />
                <Icoon naam="ster" width={13} height={13} />
                <Icoon naam="ster" width={13} height={13} />
              </span>{' '}
              <b>{site.google.rating}</b> op Google ({site.google.reviewCount} reviews) · <b>{site.werkspot.rating}</b> op Werkspot
            </span>
          </span>
          <span className="top-r">
            <span className="top-i top-uren">
              <Icoon naam="klok" width={15} height={15} /> Ma t/m vr 08:00 tot 17:30
            </span>
            <a className="top-i" href={site.phoneHref}>
              <Icoon naam="telefoon" width={15} height={15} /> {site.phone}
            </a>
            <a className="top-i" href={`mailto:${site.email}`}>
              <Icoon naam="mail" width={15} height={15} /> {site.email}
            </a>
          </span>
        </div>
      </div>
      <header className="nav" id="nav">
        <div className="wrap">
          <Link href="/" aria-label="Schildersbedrijf040, naar de homepage" className="logo">
            <Image src={images.logo.src} alt={images.logo.alt} width={117} height={52} priority />
          </Link>
          <nav aria-label="Hoofdmenu">
            <div className="dd dd-mega">
              <Link className="l" href="/#diensten" aria-haspopup="true">
                Diensten <Icoon naam="chevron" className="chev" width={16} height={16} />
              </Link>
              <div className="dd-menu mega">
                <div className="mega-in">
                  {groepen.map((g) => (
                    <div key={g.titel} className="mega-col">
                      <div className="mega-kop">{g.titel}</div>
                      {g.slugs.map((s) => (
                        <DienstLink key={s} s={s} />
                      ))}
                    </div>
                  ))}
                  <div className="mega-kaart">
                    <div className="mk-score">
                      <Icoon naam="ster" width={18} height={18} /> <b>{site.google.rating}</b> op Google
                    </div>
                    <b className="mk-h">Gratis inspectie bij u thuis</b>
                    <ul>
                      <li>
                        <Icoon naam="check" width={16} height={16} /> Advies van Jordy zelf
                      </li>
                      <li>
                        <Icoon naam="check" width={16} height={16} /> Offerte met vaste prijs
                      </li>
                      <li>
                        <Icoon naam="check" width={16} height={16} /> Boonstoppel-verf
                      </li>
                    </ul>
                    <Link className="btn btn-blue" href="/contact">
                      Gratis offerte <Pijl />
                    </Link>
                    <a className="mk-tel" href={site.phoneHref}>
                      <Icoon naam="telefoon" width={16} height={16} /> {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="dd dd-mega">
              <Link className="l" href="/#werkgebied" aria-haspopup="true">
                Werkgebied <Icoon naam="chevron" className="chev" width={16} height={16} />
              </Link>
              <div className="dd-menu mega">
                <div className="mega-in mega-plaatsen">
                  <div className="mega-kop">
                    <Icoon naam="pin" width={16} height={16} /> Schilder in Eindhoven en omgeving
                  </div>
                  <div className="plaats-grid">
                    {plaatsen.map((p) => (
                      <Link key={p.href} href={p.href}>
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
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
              {groepen.map((g) => (
                <div key={g.titel} className="mm-groep">
                  <div className="eyebrow">{g.titel}</div>
                  {g.slugs.map((s) => (
                    <DienstLink key={s} s={s} klein />
                  ))}
                </div>
              ))}
              <hr />
              <Link href="/#werkgebied" className="b">
                Werkgebied
              </Link>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="b">
                  {l.name}
                </Link>
              ))}
              <Link className="btn btn-blue" href="/contact">
                Gratis offerte aanvragen <Pijl />
              </Link>
              <a className="btn btn-line" href={site.phoneHref}>
                <Icoon naam="telefoon" width={18} height={18} /> Bel {site.phone}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

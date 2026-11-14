'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import type { SiteImage } from '@/lib/images'
import { site } from '@/lib/site'
import { afbreek } from '@/components/site/v2'
import { OfferteFormulier } from '@/components/site/offerte-formulier'
import { KnopWhatsApp } from '@/components/site/whatsapp'


// Offerteblok onderaan elke pagina behalve /contact (ontwerp v2, #offerte).
// titel/tekst/extra per pagina, zodat de bestaande afsluiters van elke pagina letterlijk terugkomen.
export function Offerte({
  titel = 'Benieuwd wat uw klus kost?',
  streek = 'klus',
  tekst = 'Vul het formulier in of bel direct. We komen gratis langs voor een inspectie en u krijgt een offerte met vaste prijs.',
  eyebrow = 'Gratis offerte',
  extra,
  formTitel = 'Offerte aanvragen',
  achtergrond,
}: {
  titel?: string
  streek?: string
  tekst?: ReactNode
  eyebrow?: string
  extra?: ReactNode
  formTitel?: string
  // Optioneel sfeerbeeld op de achtergrond, met donkere overlay
  achtergrond?: SiteImage
}) {
  const i = titel.lastIndexOf(streek)
  const kop =
    i >= 0 ? (
      <>
        {afbreek(titel.slice(0, i))}
        <span className="p2">{afbreek(streek)}</span>
        {afbreek(titel.slice(i + streek.length))}
      </>
    ) : (
      afbreek(titel)
    )

  return (
    <section className={`quote on-dark${achtergrond ? ' bg-beeld' : ''}`} id="offerte">
      {achtergrond && (
        <div className="bg">
          <Image src={achtergrond.src} alt={achtergrond.alt} fill sizes="100vw" />
        </div>
      )}
      <svg className="splat" viewBox="0 0 200 200" aria-hidden="true">
        <path
          fill="#1A5BFF"
          d="M100 18c18 0 22 20 38 24s34-6 40 10-12 26-8 42 22 28 12 44-30 6-42 18-12 34-30 30-14-26-30-32-38 4-44-12 14-26 12-42-24-26-14-40 30-2 44-12 14-30 32-30z"
        />
      </svg>
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow" style={{ color: '#7FA3FF' }}>
            {eyebrow}
          </div>
          <h2 id="gratis-offerte" className="disp" style={{ marginTop: 16 }}>
            {kop}
          </h2>
          {typeof tekst === 'string' ? <p className="qt">{tekst}</p> : tekst}
          <ul>
            <li>Gratis inspectie en advies bij u thuis</li>
            <li>Offerte met vaste prijs, geen verrassingen</li>
            <li>Reactie {site.termijnen.reactie} op werkdagen</li>
          </ul>
          <a className="phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <KnopWhatsApp className="on-dark-wa" />
          {extra}
        </div>
        <div className="rv">
          <OfferteFormulier formulier="offerteblok" titel={formTitel} />
        </div>
      </div>
    </section>
  )
}

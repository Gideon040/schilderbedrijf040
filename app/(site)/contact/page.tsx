import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { OfferteFormulier } from '@/components/site/offerte-formulier'
import { KnopBel } from '@/components/site/v2'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Offerte schilderwerk Eindhoven aanvragen | Schildersbedrijf040' },
  description: `Vraag gratis een offerte voor schilderwerk in Eindhoven aan, met foto's van de klus. Reactie ${site.termijnen.reactie}, gratis inspectie en een vaste prijs vooraf.`,
  keywords: ['offerte schilderwerk eindhoven', 'offerte schilder eindhoven', 'schilder offerte', 'contact schilder eindhoven'],
  openGraph: {
    title: 'Offerte schilderwerk Eindhoven aanvragen | Schildersbedrijf040',
    description: 'Vraag gratis een offerte voor schilderwerk in Eindhoven aan. Gratis inspectie en een vaste prijs vooraf.',
    url: 'https://schildersbedrijf040.nl/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/contact',
  },
}

export default function ContactPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://schildersbedrijf040.nl/contact',
    mainEntity: {
      '@type': 'HousePainter',
      '@id': 'https://schildersbedrijf040.nl/#organization',
      name: 'Schildersbedrijf040',
      telephone: '+31638903004',
      email: 'info@schildersbedrijf040.nl',
      url: 'https://schildersbedrijf040.nl',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+31638903004',
        email: 'info@schildersbedrijf040.nl',
        contactType: 'customer service',
        areaServed: 'Eindhoven en omgeving',
        availableLanguage: 'Dutch'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Straatsburglaan 26',
        addressLocality: 'Eindhoven',
        postalCode: '5627DB',
        addressCountry: 'NL'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30'
      }
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Offerte aanvragen',
        item: 'https://schildersbedrijf040.nl/contact'
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="dp-hero ct-hero" style={{ padding: 0 }}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <b aria-current="page">Offerte aanvragen</b>
            </nav>
            <h1 className="disp">
              <span className="w">
                <span>Offerte</span>
              </span>{' '}
              <span className="w">
                <span className="paint">schilderwerk</span>
              </span>
              <br />
              <span className="w">
                <span>Eindhoven aanvragen</span>
              </span>
            </h1>
            <p className="lead">
              Vraag hier gratis en vrijblijvend een offerte voor schilderwerk in Eindhoven en omgeving aan. Stuur gerust foto&apos;s van de klus
              mee. U hoort {site.termijnen.reactie} van ons, Jordy komt gratis langs voor een inspectie en {site.termijnen.offerte} daarna heeft u
              een offerte met vaste prijs. Liever direct contact? Bel of app Jordy.
            </p>
            <div className="cta-row">
              <KnopBel />
            </div>
            <h2 className="cc-kop">Contactgegevens</h2>
            <div className="ccards">
              <div className="cc rv">
                <h3>TELEFOON</h3>
                <p>
                  <a href={site.phoneHref}>{site.phone}</a>
                </p>
              </div>
              <div className="cc rv">
                <h3>EMAIL</h3>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
              <div className="cc rv">
                <h3>ADRES</h3>
                <p>Straatsburglaan 26, 5627DB Eindhoven</p>
              </div>
              <div className="cc rv">
                <h3>OPENINGSTIJDEN</h3>
                <p>Ma-Vr: 08:00 - 17:30</p>
                <p className="cc-sub">Za-Zo: Gesloten</p>
              </div>
            </div>
          </div>
          <OfferteFormulier formulier="offerte" className="cform" kopNiveau="h2" titel="Vraag direct een offerte aan" />
        </div>
      </section>

      <section className="ct-kaart">
        <div className="wrap ct-kaart-grid">
          <div className="ct-foto rv">
            <Image
              src="/images/buitenschilderwerk-vrijstaande-woning-wit.jpg"
              alt="Vrijstaande woning met wit geschilderde gevel en kozijnen"
              fill
              sizes="(max-width: 980px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="mapcard rv">
            <iframe
              src="https://www.google.com/maps?q=Straatsburglaan+26,+5627+DB+Eindhoven&output=embed"
              title="Kaart: Schildersbedrijf040, Straatsburglaan 26 in Eindhoven"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="maplabel">
              <b>Schildersbedrijf040</b>
              <span>Straatsburglaan 26, 5627 DB Eindhoven</span>
              <a
                className="btn btn-line"
                href="https://www.google.com/maps/search/?api=1&query=Straatsburglaan+26+Eindhoven"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

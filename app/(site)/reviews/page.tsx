import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { ReviewKaarten } from '@/components/site/reviews'
import { Eyebrow, KnopOfferte, Pijl, Streek } from '@/components/site/v2'
import { toonbareReviews } from '@/lib/reviews'
import { breadcrumbSchema } from '@/lib/schema'
import { site } from '@/lib/site'

const titel = `Reviews | ${site.google.rating} uit ${site.google.reviewCount} Google-reviews`

export const metadata: Metadata = {
  title: titel,
  description: `Lees wat klanten zeggen over Schildersbedrijf040: ${site.google.rating} op Google uit ${site.google.reviewCount} reviews en ${site.werkspot.rating} op Werkspot. Binnen- en buitenschilderwerk in Eindhoven en omgeving.`,
  alternates: { canonical: 'https://schildersbedrijf040.nl/reviews' },
  openGraph: { title: `${titel} | Schildersbedrijf040`, url: 'https://schildersbedrijf040.nl/reviews', type: 'website' },
}

export default function ReviewsPage() {
  const google = toonbareReviews.filter((r) => r.bron === 'google')
  const werkspot = toonbareReviews.filter((r) => r.bron === 'werkspot')
  const schrijfUrl = site.google.schrijfReviewUrl ?? site.google.reviewsUrl

  return (
    <main>
      <JsonLd data={breadcrumbSchema([['Home', '/'], ['Reviews', '/reviews']])} />
      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap pg-hero">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <b aria-current="page">Reviews</b>
            </nav>
            <h1 className="disp">
              <span className="w">
                <span>Wat klanten</span>
              </span>
              <br />
              <span className="w">
                <span className="paint">zeggen</span>
              </span>
            </h1>
            <p className="lead">
              Schildersbedrijf040 heeft een {site.google.rating} op Google uit {site.google.reviewCount} reviews en een {site.werkspot.rating} op
              Werkspot uit {site.werkspot.reviewCount} beoordelingen. Hieronder staan de reviews letterlijk zoals klanten ze schreven.
            </p>
            <div className="cta-row">
              <a className="btn btn-blue" href={schrijfUrl} target="_blank" rel="noopener noreferrer">
                Schrijf een review op Google <Pijl />
              </a>
              <KnopOfferte />
            </div>
          </div>
        </div>
      </section>

      <section className="rev-sec">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Google</Eyebrow>
              <h2 id="google-reviews" className="disp">
                Reviews op <Streek>Google</Streek>
              </h2>
            </div>
            <p>
              {site.google.rating} gemiddeld uit {site.google.reviewCount} reviews. Een paar reviews bestaan alleen uit sterren en staan daarom
              niet als tekst op deze pagina.
            </p>
          </div>
          <ReviewKaarten reviews={google} drie />
          <div className="rev-meer rv">
            <a className="btn btn-line" href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer">
              Bekijk alle reviews op Google <Pijl />
            </a>
          </div>
        </div>
      </section>

      {werkspot.length > 0 && (
        <section className="rev-sec" style={{ background: 'var(--paper-2)' }}>
          <div className="wrap">
            <div className="head rv">
              <div>
                <Eyebrow>Werkspot</Eyebrow>
                <h2 id="werkspot-reviews" className="disp">
                  Beoordelingen op <Streek>Werkspot</Streek>
                </h2>
              </div>
              <p>
                {site.werkspot.rating} gemiddeld uit {site.werkspot.reviewCount} beoordelingen op Werkspot.
              </p>
            </div>
            <ReviewKaarten reviews={werkspot} drie />
          </div>
        </section>
      )}

      <Offerte />
    </main>
  )
}

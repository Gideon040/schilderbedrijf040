import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { ReviewKaart } from '@/components/site/reviews'
import { ProjectKaarten } from '@/components/projecten/kaarten'
import { Eyebrow, KnopBel, KnopOfferte, MetLinks, Pijl, Streek } from '@/components/site/v2'
import { jordy, toonBlok } from '@/lib/jordy'
import { dienstNaam, indexeerbaar, plaatsLabel, plaatsLink, project, projecten } from '@/lib/projecten'
import { reviewOpId } from '@/lib/reviews'
import { breadcrumbSchema, orgRef } from '@/lib/schema'
import { site } from '@/lib/site'
import { titel as metaTitel } from '@/lib/meta'

export const dynamicParams = false

export function generateStaticParams() {
  return projecten.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = project(params.slug)
  if (!p) return { title: 'Project niet gevonden' }
  const url = `${site.url}/projecten/${p.slug}`
  const titel = jordy(p.titel)
  const plaats = jordy(p.plaats)
  return {
    title: { absolute: metaTitel(titel.length > 60 ? `${jordy(p.kaartTitel)}, ${plaats}` : titel) },
    description: jordy(p.samenvatting).slice(0, 155),
    alternates: { canonical: url },
    // Oude Instagram-kaarten: pagina bestaat, maar niet indexeren tot de gegevens compleet zijn
    ...(indexeerbaar(p) ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: titel,
      description: jordy(p.samenvatting),
      url,
      type: 'article',
      images: [{ url: p.fotos[0].src, width: p.fotos[0].width, height: p.fotos[0].height, alt: p.fotos[0].alt }],
    },
  }
}

export default function ProjectPagina({ params }: { params: { slug: string } }) {
  const p = project(params.slug)
  if (!p) notFound()

  const plaats = jordy(p.plaats)
  const locatie = plaatsLink(plaats)
  const review = p.review_id ? reviewOpId(p.review_id) : undefined
  const anderen = projecten.filter((x) => x.slug !== p.slug && indexeerbaar(x) && x.diensten.some((d) => p.diensten.includes(d))).slice(0, 3)
  const periode = [p.maand, p.jaar].filter(Boolean).join(' ')
  const feiten: [string, string][] = [
    ['Plaats', plaatsLabel(p)],
    ['Type werk', p.typeWerk],
    ['Materialen', p.materialen.join(', ')],
    ['Doorlooptijd', p.doorlooptijd],
    ...(periode ? ([['Uitgevoerd', periode]] as [string, string][]) : []),
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${site.url}/projecten/${p.slug}#project`,
    name: jordy(p.titel),
    description: jordy(p.samenvatting),
    url: `${site.url}/projecten/${p.slug}`,
    image: p.fotos.map((f) => `${site.url}${f.src}`),
    creator: orgRef,
    locationCreated: { '@type': 'Place', name: jordy(plaatsLabel(p)) },
    ...(p.jaar ? { dateCreated: String(p.jaar) } : {}),
    about: p.diensten.map((d) => ({ '@type': 'Service', name: dienstNaam(d), url: `${site.url}/diensten/${d}` })),
  }

  return (
    <main>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([['Home', '/'], ['Projecten', '/projecten'], [jordy(p.kaartTitel), `/projecten/${p.slug}`]])} />

      <section className="dp-hero pj-hero" style={{ padding: 0 }}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/projecten">Projecten</Link>
              <span>/</span>
              <b aria-current="page">{jordy(p.kaartTitel)}</b>
            </nav>
            <h1 className="disp pj-h1">{jordy(p.titel)}</h1>
            <p className="lead">{jordy(p.samenvatting)}</p>
            <dl className="pj-feiten">
              {feiten
                .filter(([, w]) => toonBlok(w))
                .map(([k, w]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{jordy(w)}</dd>
                  </div>
                ))}
              <div>
                <dt>Diensten</dt>
                <dd>
                  {p.diensten.map((d, i) => (
                    <span key={d}>
                      {i > 0 && ', '}
                      <Link href={`/diensten/${d}`}>{dienstNaam(d)}</Link>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="cta-row">
              <KnopOfferte />
              <KnopBel />
            </div>
          </div>
          <div className="pj-hoofdfoto">
            <Image src={p.fotos[0].src} alt={p.fotos[0].alt} width={p.fotos[0].width} height={p.fotos[0].height} priority sizes="(max-width: 980px) 92vw, 520px" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap pj-tekst lopend">
          {p.situatie.some((t) => jordy(t)) && (
            <>
              <h2 id="situatie" className="disp dp-h2">
                De <Streek>situatie</Streek>
              </h2>
              {p.situatie.map((t, i) => jordy(t) && <p key={i}>{jordy(t)}</p>)}
            </>
          )}
          <h2 id="aanpak" className="disp dp-h2">
            Onze <Streek>aanpak</Streek>
          </h2>
          <ol className="pj-stappen">
            {p.aanpak
              .filter((s) => jordy(s.tekst))
              .map((s) => (
                <li key={s.titel}>
                  <h3>{s.titel}</h3>
                  <p>{jordy(s.tekst)}</p>
                </li>
              ))}
          </ol>
          <h2 id="resultaat" className="disp dp-h2">
            Het <Streek>resultaat</Streek>
          </h2>
          {p.resultaat.map(
            (t, i) =>
              jordy(t) && (
                <p key={i}>
                  <MetLinks tekst={jordy(t)} />
                </p>
              ),
          )}
          {p.instagram && (
            <p>
              <a href={p.instagram} target="_blank" rel="noopener noreferrer">
                Bekijk dit project op Instagram →
              </a>
            </p>
          )}
        </div>
      </section>

      {p.fotos.length > 1 && (
        <section style={{ background: 'var(--paper-2)' }}>
          <div className="wrap">
            <div className="head rv">
              <div>
                <Eyebrow>Foto&apos;s</Eyebrow>
                <h2 id="fotos" className="disp">
                  Het project in <Streek>beeld</Streek>
                </h2>
              </div>
            </div>
            <div className="pj-galerij">
              {p.fotos.map((f) => (
                <figure key={f.src} className="rv">
                  <Image src={f.src} alt={f.alt} width={f.width} height={f.height} sizes="(max-width: 980px) 92vw, 400px" />
                  <figcaption>{f.bijschrift}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {review && (
        <section className="rev-sec">
          <div className="wrap">
            <Eyebrow>Review van deze klant</Eyebrow>
            <div className="cards" style={{ maxWidth: 640 }}>
              <ReviewKaart r={review} />
            </div>
          </div>
        </section>
      )}

      <section className="dp-more">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Meer weten</Eyebrow>
              <h2 id="gerelateerd" className="disp">
                Diensten bij dit <Streek>project</Streek>
              </h2>
            </div>
          </div>
          <div className="places rv">
            {p.diensten.map((d) => (
              <Link key={d} href={`/diensten/${d}`}>
                {dienstNaam(d)}
              </Link>
            ))}
            {locatie && <Link href={locatie.href}>{locatie.tekst}</Link>}
            <Link href="/projecten">Alle projecten</Link>
          </div>
          {anderen.length > 0 && (
            <>
              <h2 id="meer-projecten" className="mini-h2 rv">
                Vergelijkbare projecten
              </h2>
              <ProjectKaarten projecten={anderen} />
            </>
          )}
          <div className="rv" style={{ marginTop: 28 }}>
            <Link className="btn btn-line" href="/projecten">
              Alle projecten bekijken <Pijl />
            </Link>
          </div>
        </div>
      </section>

      <Offerte titel="Ook zo'n resultaat bij u thuis?" streek="thuis?" />
    </main>
  )
}

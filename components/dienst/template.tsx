import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { VoorNa, type Project } from '@/components/site/voor-na'
import { Winterband } from '@/components/site/winterband'
import { afbreek, Eyebrow, KnopBel, KnopOfferte, Pijl, Streek, StreekKop, staal } from '@/components/site/v2'
import { Stappen } from '@/components/home/v2'
import type { SiteImage } from '@/lib/images'
import { liveDiensten } from '@/lib/live-diensten'
import { diensten, linkLive, plaatsen, PRIJSGIDS } from '@/lib/navigation'
import { prijsNoot, prijzen } from '@/lib/prices'
import { reviewsVoor } from '@/lib/reviews'
import { ReviewKaarten } from '@/components/site/reviews'
import { ProjectKaarten } from '@/components/projecten/kaarten'
import { projectenMetDienst } from '@/lib/projecten'
import { jordy } from '@/lib/jordy'
import { site } from '@/lib/site'

export type DienstPagina = {
  slug: string
  naam: string
  h1: string
  heroTekst: ReactNode
  heroImg: SiteImage
  // Beeld bij de uitleg ("Wat is ..."); sfeerbeelden krijgen nooit een tekst die eigen werk suggereert
  sectieImg?: SiteImage
  kerncijfers: { waarde: string; label: string }[]
  watIs: { id: string; h2: string; body: ReactNode }
  kosten: { id: string; h2: string; body: ReactNode }
  // Nieuwe blokken uit de briefing, onder de bestaande tekst
  extra?: ReactNode
  soorten: { id: string; h2: string; intro: string; kaarten: { titel: string; beschrijving: string; link: string; linkTekst: string }[] }
  werkwijze: { id: string; h2: string; intro: string; stappen: { titel: string; beschrijving: string }[] }
  waarom: { h2: string; tekst: string; usps: { titel: string; beschrijving: string }[] }
  projecten: Project[]
  faqs: { question: string; answer: string; link?: { href: string; tekst: string } }[]
  faqTitel: string
  // Prijstabel van een andere dienst tonen (bijv. winterschilder -> binnenschilderwerk)
  prijsSlug?: string
  cta: { titel: string; tekst: string }
  schema: object[]
}

// Lange samengestelde woorden in de H1 splitsen zoals in het prototype (tekst blijft gelijk)
const splits: Record<string, [string, string]> = {
  Binnenschilderwerk: ['Binnen', 'schilderwerk'],
  Buitenschilderwerk: ['Buiten', 'schilderwerk'],
  Winterschilder: ['Winter', 'schilder'],
}

// Alt-tekst: projectfoto's en sfeerbeelden houden hun eigen beschrijving; oude foto's de vaste alt van de live site
const altVoor = (img: SiteImage, liveAlt?: string) => (img.eigenAlt ? img.alt : liveAlt ?? img.alt)

const reviewTags: Record<string, string> = { 'gevel-schilderen': 'buitenschilderwerk', winterschilder: 'binnenschilderwerk' }

const kleuren = ['var(--sw1)', 'var(--sw2)', 'var(--sw3)', 'var(--sw5)', 'var(--sw4)', 'var(--sw6)']

// Getal vooraan laten oplopen als het een geheel getal is (tellers, ontwerp v2)
function Kerncijfer({ waarde }: { waarde: string }) {
  const m = waarde.match(/^(\d+)(.*)$/)
  if (!m) return <>{waarde}</>
  return (
    <>
      <span data-to={m[1]}>{m[1]}</span>
      {m[2]}
    </>
  )
}

// Foto naast de FAQ: een tweede projectfoto als die er is, anders de herofoto
function faqFoto(d: DienstPagina): SiteImage {
  return d.projecten[1]?.na ?? d.projecten[0]?.na ?? d.heroImg
}

export function DienstTemplate({ d }: { d: DienstPagina }) {
  const tabel = prijzen[d.prijsSlug ?? d.slug] ?? []
  const tabelNaam = d.prijsSlug ? d.prijsSlug.replace('-', ' ') : d.naam.toLowerCase()
  const live = liveDiensten[d.slug]
  // Reviews met de dienst-tag (gevel en winter vallen onder buiten- en binnenwerk), aangevuld met algemene reviews
  const reviewTag = reviewTags[d.slug] ?? d.slug
  const klantReviews = reviewsVoor({ dienst: reviewTag, aantal: 6 })
  const eigenProjecten = projectenMetDienst(d.slug === 'winterschilder' ? 'binnenschilderwerk' : d.slug)
  const metTag = klantReviews.filter((r) => r.diensten.includes(reviewTag)).length
  const kleur = staal[d.slug] ?? staal.binnenschilderwerk
  const [eersteWoord, ...rest] = d.h1.split(' ')
  const anderen = diensten.filter((x) => !x.href.endsWith(`/${d.slug}`)).slice(0, 4)
  const slot = live?.slot ?? d.cta.titel

  return (
    <main>
      {d.schema.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      {/* Hero met kleurstaal */}
      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#diensten">Diensten</Link>
              <span>/</span>
              <b aria-current="page">{d.naam}</b>
            </nav>
            <h1 className="disp">
              {splits[eersteWoord] ? (
                <>
                  <span className="w">
                    <span className="paint">{splits[eersteWoord][0]}</span>
                  </span>
                  <span className="w">
                    <span>{splits[eersteWoord][1]}</span>
                  </span>
                </>
              ) : (
                <span className="w">
                  <span className="paint">{eersteWoord}</span>
                </span>
              )}{' '}
              <br />
              <span className="w">
                <span className="sm">{rest.join(' ')}</span>
              </span>
            </h1>
            <div className="lead lopend">{d.heroTekst}</div>
            <div className="cta-row">
              <KnopOfferte />
              <KnopBel />
            </div>
            <div className="trust">
              <div>
                <span className="n">{site.google.rating}</span>
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                <small>{site.google.reviewCount} reviews op Google</small>
              </div>
              <div>
                <span className="n">{site.werkspot.rating}</span>
                <small>op Werkspot</small>
              </div>
              <div>
                <span className="n">Boonstoppel</span>
                <small>{site.boonstoppelAmbassadeur ? 'officieel ambassadeur' : 'verf op elk project'}</small>
              </div>
            </div>
          </div>
          <div className="staal">
            <div className="staal-card">
              <div className="img" style={{ ['--sw1' as string]: kleur.c }}>
                <Image src={d.heroImg.src} alt={altVoor(d.heroImg, live?.alts[0])} fill priority sizes="(max-width: 980px) 92vw, 560px" />
              </div>
              <div className="staal-label">
                <div>
                  <small>KLEURSTAAL {kleur.code}</small>
                  <b>{d.naam}</b>
                </div>
                <span>Boonstoppel</span>
              </div>
            </div>
            <div className="chips" aria-hidden="true">
              {kleuren.slice(0, 4).map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Winterband />

      {/* Kerncijfers */}
      <section className="dp-facts" aria-label={`Kerncijfers ${d.naam.toLowerCase()}`}>
        <div className="wrap">
          <dl className="factrow rv counters">
            {d.kerncijfers.map((k, i) => (
              <div key={k.label}>
                <dd className={`big${i === 3 ? ' blue' : ''}`}>
                  <Kerncijfer waarde={k.waarde} />
                </dd>
                <dt>
                  <small>{k.label}</small>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bestaande tekst naast de kleurenkaart met prijzen */}
      <section style={{ paddingTop: 24 }}>
        <div className="wrap dp-split">
          <div className="rv lopend">
            <Eyebrow>Onze expertise</Eyebrow>
            <h2 id={d.watIs.id} className="disp dp-h2">
              <StreekKop tekst={d.watIs.h2} />
            </h2>
            {d.watIs.body}
            {(d.sectieImg || live) && (
              <figure className="dp-fig">
                <Image
                  src={(d.sectieImg ?? d.heroImg).src}
                  alt={altVoor(d.sectieImg ?? d.heroImg, live?.alts[1])}
                  width={(d.sectieImg ?? d.heroImg).width}
                  height={(d.sectieImg ?? d.heroImg).height}
                  sizes="(max-width: 980px) 92vw, 640px"
                />
              </figure>
            )}
            <Eyebrow style={{ marginTop: 40 }}>Transparante prijzen</Eyebrow>
            <h2 id={d.kosten.id} className="disp dp-h2">
              <StreekKop tekst={d.kosten.h2} />
            </h2>
            {d.kosten.body}
            {d.extra}
          </div>
          <aside className="kaart rv" aria-labelledby={`${d.slug}-prijzen`}>
            <div className="kaart-top">
              <small>KLEURENKAART · {(live?.prijsTitel ?? 'Indicatie prijzen').toUpperCase()}</small>
              <h3 id={`${d.slug}-prijzen`}>Prijzen {tabelNaam}</h3>
            </div>
            <ul>
              {tabel.map((r, i) => (
                <li key={r.wat}>
                  <i style={{ background: kleuren[i % kleuren.length], boxShadow: i === 0 ? 'inset 0 0 0 1px var(--line)' : undefined }} />
                  <span>{r.wat}</span>
                  <b>{r.prijs.replace(' /', ' / ')}</b>
                </li>
              ))}
            </ul>
            <p>{prijsNoot}</p>
            {live && <p>{live.prijsNoot}</p>}
            <Link className="btn btn-blue" href="/contact" style={{ justifyContent: 'center' }}>
              Gratis offerte aanvragen <Pijl />
            </Link>
            {PRIJSGIDS.live && (
              <Link href={PRIJSGIDS.href} className="kaart-link">
                Bekijk alle prijzen in de prijsgids →
              </Link>
            )}
          </aside>
        </div>
      </section>

      {/* Soorten werk als stalen */}
      <section className="dp-types">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Diensten</Eyebrow>
              <h2 id={d.soorten.id} className="disp">
                <StreekKop tekst={d.soorten.h2} />
              </h2>
            </div>
            <p>{d.soorten.intro}</p>
          </div>
          <div className="deck">
            {d.soorten.kaarten.filter((k) => linkLive(k.link)).map((k, i) => (
              <Link key={k.titel} className="card rv" href={k.link} style={{ ['--c' as string]: kleuren[i % kleuren.length] }}>
                <i />
                <small>
                  {kleur.code}
                  {String.fromCharCode(65 + i)}
                </small>
                <h3>{afbreek(k.titel)}</h3>
                <p>{k.beschrijving}</p>
                <span>{k.linkTekst} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Uit ons werk: echte projecten met deze dienst. Zonder projecten de bestaande voor/na-sectie. */}
      {eigenProjecten.length > 0 ? (
        <section style={{ background: 'var(--paper-2)' }}>
          <div className="wrap">
            <div className="head rv">
              <div>
                <Eyebrow>Projecten</Eyebrow>
                <h2 id="uit-ons-werk" className="disp">
                  Uit ons <Streek>werk</Streek>
                </h2>
              </div>
              <p>{live ? live.banner.p : `Projecten waarbij Schildersbedrijf040 ${d.naam.toLowerCase()} heeft uitgevoerd.`}</p>
            </div>
            <ProjectKaarten projecten={eigenProjecten.slice(0, 3)} />
            <div className="rv" style={{ marginTop: 28 }}>
              <Link className="btn btn-line" href="/projecten">
                Alle projecten <Pijl />
              </Link>
            </div>
          </div>
        </section>
      ) : (
      <section className="ba-sec on-dark">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow style={{ color: '#7FA3FF' }}>{d.naam}: voor en na</Eyebrow>
              <h2 id={`${d.slug}-voor-en-na`} className="disp">
                <StreekKop tekst={live?.banner.h2 ?? `${d.naam}: voor en na`} />
              </h2>
            </div>
            {live && <p>{live.banner.p}</p>}
          </div>
          {d.projecten.map((p, i) => (
            <div key={p.titel} style={i ? { marginTop: 48 } : undefined}>
              <VoorNa
                na={p.na}
                voor={p.voor}
                feiten={[
                  ['Project', p.titel],
                  ['Plaats', p.label],
                  ...(p.tekst ? ([['Omschrijving', p.tekst]] as [string, string][]) : []),
                ]}
                knop={i === d.projecten.length - 1 ? { href: '/projecten', tekst: 'Alle projecten' } : undefined}
              />
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Werkwijze */}
      <section>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Hoe wij werken</Eyebrow>
              <h2 id={d.werkwijze.id} className="disp">
                <StreekKop tekst={d.werkwijze.h2} />
              </h2>
            </div>
            <p>{d.werkwijze.intro}</p>
          </div>
          <Stappen stappen={d.werkwijze.stappen.map((s) => ({ titel: s.titel, tekst: s.beschrijving }))} />
        </div>
      </section>

      {/* Waarom, met de reviews van de live pagina */}
      <section style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Waarom wij</Eyebrow>
              <h2 id="waarom-schildersbedrijf040" className="disp">
                <StreekKop tekst={d.waarom.h2} />
              </h2>
            </div>
            <p>{d.waarom.tekst}</p>
          </div>
          <div className="why">
            {d.waarom.usps.map((u) => (
              <div key={u.titel} className="rv">
                <h3>{afbreek(u.titel)}</h3>
                <span>{u.beschrijving}</span>
              </div>
            ))}
            {live && (
              <div className="rv">
                <h3>{live.regio.h3}</h3>
                <span>{live.regio.p}</span>
              </div>
            )}
          </div>
          <h2 id={`${d.slug}-reviews`} className="mini-h2 rv">
            {metTag >= 3 ? `Klanten over ons ${d.naam.toLowerCase()}` : 'Wat klanten zeggen'}
          </h2>
          <ReviewKaarten reviews={klantReviews} drie />
          <p className="rv" style={{ marginTop: 18 }}>
            <Link href="/reviews">Alle {site.google.reviewCount} Google-reviews en {site.werkspot.reviewCount} Werkspot-beoordelingen lezen →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)' }}>
        <div className="wrap two">
          <div className="rv">
            <Eyebrow>Veelgestelde vragen</Eyebrow>
            <h2 id="veelgestelde-vragen" className="disp dp-h2">
              <StreekKop tekst={d.faqTitel} />
            </h2>
            {live && <p style={{ margin: 0, color: 'var(--muted)' }}>{live.vragenIntro}</p>}
            {live?.alts[2] && (
              <div className="faq-img">
                <Image src={faqFoto(d).src} alt={altVoor(faqFoto(d), live.alts[2])} fill sizes="(max-width: 980px) 92vw, 480px" />
              </div>
            )}
            <div className="ask">
              {live?.alts[3] && (
                <div className="ask-foto">
                  <Image src={d.heroImg.src} alt={altVoor(d.heroImg, live.alts[3])} fill sizes="120px" />
                </div>
              )}
              <h3>Nog vragen?</h3>
              {live && <span>{live.nogVragen}</span>}
              <span>
                Bel of app Jordy: <a href={site.phoneHref}>{site.phone}</a> of <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">stuur een WhatsApp</a>
              </span>
            </div>
          </div>
          <div className="rv">
            {d.faqs.filter((f) => jordy(f.answer).length > 0).map((f, i) => (
              <details key={f.question} open={i === 0}>
                <summary>
                  <h3>{f.question}</h3>
                </summary>
                <p>
                  {jordy(f.answer)}
                  {f.link && linkLive(f.link.href) && (
                    <>
                      {' '}
                      <Link href={f.link.href}>{f.link.tekst}</Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Combineer en plaatsen */}
      <section className="dp-more">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Ook interessant</Eyebrow>
              <h2 id="combineer-met" className="disp">
                Combineer <Streek>met</Streek>
              </h2>
            </div>
          </div>
          <div className="more rv">
            {anderen.map((x, i) => (
              <Link key={x.href} href={x.href} style={{ ['--c' as string]: kleuren[(i + 2) % kleuren.length] }}>
                <i />
                <b className="nm">{afbreek(x.name)}</b>
                <span>→</span>
              </Link>
            ))}
          </div>
          <h2 id={`${d.slug}-in-de-buurt`} className="mini-h2 rv">
            {d.naam} bij u in de buurt
          </h2>
          <div className="places rv">
            {plaatsen.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.name === 'Eindhoven' ? 'Schilder Eindhoven' : `Schilder ${p.name}`}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Offerte
        eyebrow={d.cta.titel}
        titel={slot}
        streek={slot.split(' ').slice(-1)[0]}
        tekst={d.cta.tekst}
        extra={
          <div className="q-extra">
            <dl className="q-contact">
              <div>
                <dt>Bel ons direct</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Stuur een e-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Bereikbaarheid</dt>
                <dd>Ma t/m vr: 08:00 tot 17:30</dd>
              </div>
            </dl>
            {live?.alts[4] && (
              <div className="q-foto">
                <Image src={d.heroImg.src} alt={live.alts[4]} fill sizes="320px" />
              </div>
            )}
          </div>
        }
      />
    </main>
  )
}

import type { Metadata } from 'next'
import { cityData } from './data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buren, heroFoto, lokaal } from './data-lokaal'
import { JsonLd } from '@/components/json-ld'
import { Stars } from '@/components/site/stars'
import { CtaBanner } from '@/components/site/cta-banner'
import { VoorNaKaart } from '@/components/site/voor-na'
import { WerkgebiedKaart } from '@/components/werkgebied-kaart'
import { PRIJSGIDS } from '@/lib/navigation'
import { prijzen } from '@/lib/prices'
import { reviews, reviewPlaceholder } from '@/lib/reviews'
import { orgRef } from '@/lib/schema'
import { site } from '@/lib/site'

// Generate static params for all cities
export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }))
}

// Generate dynamic metadata for each city
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city
  const data = cityData[city]

  if (!data) {
    return {
      title: 'Locatie niet gevonden',
    }
  }

  return {
    title: `Op zoek naar een schilder in ${data.displayName}?`,
    description: `Schildersbedrijf040 is uw vakkundige schilder in ${data.displayName}. Binnenschilderwerk, buitenschilderwerk, behangen, lakwerk & houtrot sanering. ✓ Hoogst beoordeeld ✓ Gratis offerte.`,
    keywords: [
      `schilder ${data.displayName.toLowerCase()}`,
      `schildersbedrijf ${data.displayName.toLowerCase()}`,
      `binnenschilderwerk ${data.displayName.toLowerCase()}`,
      `buitenschilderwerk ${data.displayName.toLowerCase()}`,
      `houtrot sanering ${data.displayName.toLowerCase()}`,
      `schilderwerk ${data.displayName.toLowerCase()}`,
    ],
    openGraph: {
      title: `Op zoek naar een schilder in ${data.displayName}? | Schildersbedrijf040`,
      description: `Schildersbedrijf040 is uw vakkundige schilder in ${data.displayName}. Binnenschilderwerk, buitenschilderwerk, behangen, lakwerk & houtrot sanering. ✓ Hoogst beoordeeld ✓ Gratis offerte.`,
      url: `https://schildersbedrijf040.nl/locaties/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://schildersbedrijf040.nl/locaties/${city}`,
    },
  }
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = params.city
  const data = cityData[city]

  if (!data) {
    notFound()
  }

  // Lokale dienst; het bedrijf zelf (HousePainter) staat sitebreed in de layout
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://schildersbedrijf040.nl/locaties/${city}#service`,
    name: `Schilderwerk in ${data.displayName}`,
    serviceType: 'Schilderwerk',
    url: `https://schildersbedrijf040.nl/locaties/${city}`,
    provider: orgRef,
    areaServed: {
      '@type': 'City',
      name: data.displayName,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Schilderdiensten in ${data.displayName}`,
      itemListElement: data.diensten.map((dienst) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: dienst.title,
          description: dienst.description,
          url: `https://schildersbedrijf040.nl/diensten/${dienst.slug}`,
        },
      })),
    },
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.displayName,
        item: `https://schildersbedrijf040.nl/locaties/${city}`,
      },
    ],
  }

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const lok = lokaal[city]
  const foto = heroFoto(city)
  const buurplaatsen = (buren[city] ?? []).filter((b) => cityData[b])
  const review = reviews.find((r) => r.plaats === data.displayName)

  return (
    <main>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero met eigen foto per plaats */}
      <section className="bg-zand">
        <div className="grid lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="flex flex-col gap-5 px-4 py-8 sm:px-6 md:py-10 lg:py-14 lg:pl-8 lg:pr-16 xl:pl-[max(2rem,calc((100vw-1440px)/2+2rem))]">
            <nav aria-label="Kruimelpad" className="text-[15px] text-tekst-licht">
              <Link href="/" className="hover:text-link">
                Home
              </Link>{' '}
              /{' '}
              <Link href="/#werkgebied" className="hover:text-link">
                Werkgebied
              </Link>{' '}
              / <span aria-current="page">{data.displayName}</span>
            </nav>
            <h1 className="mt-2 font-heading text-[42px] font-bold leading-none text-navy md:text-[60px] xl:text-[72px]">Schilder in {data.displayName}</h1>
            <p className="max-w-[600px] text-[18px] leading-relaxed text-tekst md:text-[20px] md:leading-[1.6]">{data.intro}</p>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:gap-3.5">
              <Link href="/contact" className="btn-primary !px-7 !py-4">
                Gratis offerte aanvragen
              </Link>
              <a href={site.phoneHref} className="btn-secondary !px-6 !py-[14px]">
                Bel {site.phone}
              </a>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-tekst">
              <span className="flex items-center gap-2">
                <Stars className="h-4 w-4" color="text-[#C98A00]" />
                <strong>{site.google.rating}</strong> Google ({site.google.reviewCount})
              </span>
              <span>
                <strong>{site.werkspot.rating}</strong> Werkspot
              </span>
              <span>Gevestigd in Eindhoven</span>
            </div>
          </div>
          <div className="relative h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[580px]">
            <Image src={foto.src} alt={foto.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <span className="absolute bottom-4 right-4 rounded-lg bg-[rgba(7,18,31,0.85)] px-3 py-2 text-sm text-white">
              [JORDY: foto van een project in {data.displayName}]
            </span>
          </div>
        </div>
      </section>

      {/* Lokaal blok */}
      <section className="py-14 md:py-[88px]">
        <div className="container flex flex-col gap-9">
          <div className="flex max-w-[860px] flex-col gap-3.5">
            <h2 id="schilderwerk-lokaal" className="h-section">
              Binnen- en buitenschilderwerk in {data.displayName}
            </h2>
            {lok && <p className="text-[18px] leading-[1.7] text-tekst">{lok.tekst}</p>}
            <p className="text-[18px] leading-[1.7] text-tekst">{data.waarom}</p>
          </div>
          {lok ? (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {lok.wijken.map((w) => (
                <li key={w.naam} className="flex flex-col gap-2.5 rounded-[14px] border border-lijn p-7">
                  <span className="text-sm font-semibold text-link">{w.label}</span>
                  <h3 className="font-heading text-[26px] font-bold text-navy md:text-[27px]">{w.naam}</h3>
                  <p className="text-[17px] leading-relaxed text-tekst-zacht">{w.tekst}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-base font-semibold text-navy">Actief in onder andere:</span>
              {data.wijken.map((w) => (
                <span key={w} className="rounded-full bg-zand px-4 py-2 text-[15px] font-semibold text-tekst">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diensten in deze plaats, geen prijstabel */}
      <section className="bg-zand py-14 md:py-[88px]">
        <div className="container flex flex-col gap-9">
          <h2 id="diensten" className="h-section">
            Onze diensten in {data.displayName}
          </h2>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.diensten.map((dienst) => (
              <li key={dienst.slug}>
                <Link href={`/diensten/${dienst.slug}`} className="group flex h-full flex-col gap-2.5 rounded-[14px] bg-white p-6 md:p-7">
                  <h3 className="font-heading text-[24px] font-bold text-navy md:text-[25px]">{dienst.title}</h3>
                  <p className="text-[16px] leading-relaxed text-tekst-zacht">{dienst.description}</p>
                  <span className="mt-auto pt-1 font-semibold text-link group-hover:text-link-hover">
                    Meer over {dienst.title.toLowerCase()} in {data.displayName} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 rounded-[14px] bg-white p-6 md:p-7">
            <h3 id="kosten-schilder" className="font-heading text-[26px] font-bold text-navy">
              Wat kost een schilder in {data.displayName}?
            </h3>
            <p className="text-[17px] leading-relaxed text-tekst">{data.kosten}</p>
            <p className="text-[17px] text-tekst">
              <strong className="text-navy">Prijzen in {data.displayName}</strong> zijn gelijk aan Eindhoven. Binnenschilderwerk vanaf{' '}
              {prijzen.binnenschilderwerk[0].prijs.split(' tot ')[0]} per m², indicatief.{' '}
              {PRIJSGIDS.live ? (
                <Link href={PRIJSGIDS.href} className="link">
                  Bekijk de prijsgids →
                </Link>
              ) : (
                <Link href="/diensten/binnenschilderwerk#kosten-binnenschilderwerk" className="link">
                  Bekijk de prijzen voor binnenschilderwerk →
                </Link>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Project en review uit de plaats */}
      <section className="py-14 md:py-[88px]">
        <div className="container grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-5">
            <h2 id="project" className="h-section">
              Project in {data.displayName}
            </h2>
            <VoorNaKaart
              project={{
                titel: `[JORDY: project in ${data.displayName}]`,
                label: '[JORDY: wijk] · [dienst] · [m²]',
                na: foto,
                tekst: '[JORDY: 2 of 3 zinnen over het project]',
              }}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 id="review" className="font-heading text-[30px] font-bold text-navy md:text-[36px]">
              Review uit de buurt
            </h2>
            <figure className="flex flex-col gap-3 rounded-[14px] bg-zand p-7">
              <Stars className="h-4 w-4" color="text-[#C98A00]" />
              <blockquote className="text-[17px] leading-relaxed text-tekst">{review ? review.tekst : reviewPlaceholder}</blockquote>
              <figcaption className="text-[15px] font-semibold text-navy">
                {review ? `${review.naam} · ${data.displayName} · Google` : `[Naam] · ${data.displayName} · Google`}
              </figcaption>
            </figure>
            <WerkgebiedKaart className="h-[200px]" />
          </div>
        </div>
      </section>

      {/* Werkwijze (bestaande tekst) */}
      <section className="border-t border-lijn py-14 md:py-[72px]">
        <div className="container flex flex-col gap-3.5">
          <h2 id="werkwijze" className="h-section">
            Zo werken we in {data.displayName}
          </h2>
          <p className="max-w-[860px] text-[18px] leading-[1.7] text-tekst">{data.werkwijze}</p>
        </div>
      </section>

      {/* Lokale FAQ, antwoorden zichtbaar */}
      <section className="bg-zand py-14 md:py-[88px]">
        <div className="container flex flex-col gap-5">
          <h2 id="veelgestelde-vragen" className="h-section mb-1.5">
            Vragen over schilderwerk in {data.displayName}
          </h2>
          <div className="grid grid-cols-1 gap-x-14 gap-y-[18px] md:grid-cols-2">
            {data.faqs.map((faq) => (
              <div key={faq.question} className="flex flex-col gap-2 border-b border-[#DDD8CF] pb-[18px]">
                <h3 className="font-sans text-[19px] font-bold leading-snug text-navy md:text-[20px]">{faq.question}</h3>
                <p className="text-[17px] leading-relaxed text-tekst-zacht">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buurplaatsen, met link naar de homepage (ankertekst "Schilder Eindhoven") */}
      <section className="py-12 md:py-16">
        <div className="container flex flex-col gap-[18px]">
          <h2 id="omgeving" className="font-heading text-[28px] font-bold text-navy md:text-[32px]">
            Ook actief rond {data.displayName}
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            <li>
              <Link href="/" className="block rounded-full border border-[#CBD2DC] px-4 py-2.5 text-base font-medium text-tekst hover:border-brand hover:text-link">
                Schilder Eindhoven
              </Link>
            </li>
            {buurplaatsen.map((b) => (
              <li key={b}>
                <Link
                  href={`/locaties/${b}`}
                  className="block rounded-full border border-[#CBD2DC] px-4 py-2.5 text-base font-medium text-tekst hover:border-brand hover:text-link"
                >
                  Schilder {cityData[b].displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner titel={`Schilder nodig in ${data.displayName}?`} tekst={data.contact} />
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { Stars } from '@/components/site/stars'
import { CtaBanner } from '@/components/site/cta-banner'
import { VoorNaKaart, type Project } from '@/components/site/voor-na'
import type { SiteImage } from '@/lib/images'
import { plaatsen, PRIJSGIDS } from '@/lib/navigation'
import { prijsNoot, prijzen } from '@/lib/prices'
import { reviews, reviewPlaceholder } from '@/lib/reviews'
import { site } from '@/lib/site'

export type DienstPagina = {
  slug: string
  naam: string
  h1: string
  heroTekst: ReactNode
  heroImg: SiteImage
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
  // Prijstabel van een andere dienst tonen (bijv. winterschilder -> binnenschilderwerk)
  prijsSlug?: string
  faqTitel: string
  cta: { titel: string; tekst: string }
  schema: object[]
}

const anker = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export function DienstTemplate({ d }: { d: DienstPagina }) {
  const tabel = prijzen[d.prijsSlug ?? d.slug] ?? []
  const tabelNaam = d.prijsSlug ? d.prijsSlug.replace('-', ' ') : d.naam.toLowerCase()
  const dienstReviews = reviews.filter((r) => r.dienst === d.slug).slice(0, 2)
  const reviewSlots = dienstReviews.length ? dienstReviews : [null, null]

  return (
    <main>
      {d.schema.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      {/* Hero */}
      <section className="bg-zand">
        <div className="grid lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="flex flex-col gap-5 px-4 py-8 sm:px-6 md:py-10 lg:py-14 lg:pl-8 lg:pr-16 xl:pl-[max(2rem,calc((100vw-1440px)/2+2rem))]">
            <nav aria-label="Kruimelpad" className="text-[15px] text-tekst-licht">
              <Link href="/" className="hover:text-link">
                Home
              </Link>{' '}
              / <span>Diensten</span> / <span aria-current="page">{d.naam}</span>
            </nav>
            <h1 className="mt-2 font-heading text-[42px] font-bold leading-none text-navy md:text-[60px] xl:text-[72px]">{d.h1}</h1>
            <div className="prose-links max-w-[600px] text-[18px] leading-relaxed text-tekst md:text-[20px] md:leading-[1.6]">{d.heroTekst}</div>
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
              <span>Boonstoppel-verf</span>
            </div>
          </div>
          <div className="relative h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[600px]">
            <Image
              src={d.heroImg.src}
              alt={d.heroImg.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </section>

      {/* Kerncijfers */}
      <section aria-label={`Kerncijfers ${d.naam.toLowerCase()}`} className="container mt-8 md:mt-12">
        <dl className="grid grid-cols-2 overflow-hidden rounded-[14px] border border-lijn lg:grid-cols-4">
          {d.kerncijfers.map((k, i) => (
            <div
              key={k.label}
              className={`flex flex-col-reverse gap-1 p-5 md:px-7 md:py-6 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} border-lijn lg:border-r lg:last:border-r-0`}
            >
              <dt className="text-[15px] text-tekst-zacht md:text-base">{k.label}</dt>
              <dd className="font-heading text-[26px] font-bold text-navy md:text-[36px]">{k.waarde}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Bestaande tekst naast de prijstabel */}
      <section className="container grid gap-10 py-14 md:py-[88px] lg:grid-cols-[1.25fr_1fr] lg:gap-[72px]">
        <div className="flex max-w-[75ch] flex-col gap-[18px] prose-body">
          <h2 id={d.watIs.id} className="h-section scroll-mt-28">
            {d.watIs.h2}
          </h2>
          {d.watIs.body}
          <h2 id={d.kosten.id} className="h-section mt-6 scroll-mt-28">
            {d.kosten.h2}
          </h2>
          {d.kosten.body}
          {d.extra}
        </div>
        <aside
          className="flex flex-col gap-[18px] self-start rounded-card bg-zand p-6 md:p-9 lg:sticky lg:top-28"
          aria-labelledby={`${d.slug}-prijzen`}
        >
          <h2 id={`${d.slug}-prijzen`} className="font-heading text-[30px] font-bold text-navy md:text-[36px]">
            Prijzen {tabelNaam}
          </h2>
          <table className="w-full border-collapse text-[17px]">
            <caption className="sr-only">Indicatieve prijzen {tabelNaam}</caption>
            <tbody>
              {tabel.map((r) => (
                <tr key={r.wat} className="border-b border-[#DDD8CF]">
                  <th scope="row" className="py-3.5 pr-3 text-left font-normal text-tekst">
                    {r.wat}
                  </th>
                  <td className="whitespace-nowrap py-3.5 text-right font-bold text-navy">{r.prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[15px] leading-relaxed text-tekst-zacht">{prijsNoot}</p>
          <Link href="/contact" className="btn-primary">
            Gratis offerte aanvragen
          </Link>
          {PRIJSGIDS.live && (
            <Link href={PRIJSGIDS.href} className="link text-center">
              Bekijk alle prijzen in de prijsgids →
            </Link>
          )}
        </aside>
      </section>

      {/* Soorten werk */}
      <section className="bg-zand py-14 md:py-[88px]">
        <div className="container flex flex-col gap-6 md:gap-10">
          <div className="flex max-w-3xl flex-col gap-3">
            <h2 id={d.soorten.id} className="h-section scroll-mt-28">
              {d.soorten.h2}
            </h2>
            <p className="text-[18px] leading-relaxed text-tekst-zacht">{d.soorten.intro}</p>
          </div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {d.soorten.kaarten.map((k) => (
              <li key={k.titel} className="flex flex-col gap-2.5 rounded-[14px] bg-white p-6 md:p-7">
                <h3 id={`${d.slug}-${anker(k.titel)}`} className="font-heading text-[24px] font-bold text-navy md:text-[26px]">
                  {k.titel}
                </h3>
                <p className="text-[17px] leading-relaxed text-tekst-zacht">{k.beschrijving}</p>
                <Link href={k.link} className="link mt-auto pt-1 text-base">
                  {k.linkTekst} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-14 md:py-[88px]">
        <div className="container flex flex-col gap-8 md:gap-10">
          <div className="flex max-w-3xl flex-col gap-3">
            <h2 id={d.werkwijze.id} className="h-section scroll-mt-28">
              {d.werkwijze.h2}
            </h2>
            <p className="text-[18px] leading-relaxed text-tekst-zacht">{d.werkwijze.intro}</p>
          </div>
          <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {d.werkwijze.stappen.map((s, i) => (
              <li key={s.titel} className="flex flex-col gap-2.5 border-t-[3px] border-brand pt-5">
                <span className="font-heading text-xl font-bold text-link">Stap {i + 1}</span>
                <h3 className="font-heading text-[24px] font-bold text-navy md:text-[25px]">{s.titel}</h3>
                <p className="text-[17px] leading-relaxed text-tekst-zacht">{s.beschrijving}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projecten voor/na */}
      <section className="pb-14 md:pb-[88px]">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 id={`${d.slug}-voor-en-na`} className="h-section">
              {d.naam}: voor en na
            </h2>
            <Link href="/projecten" className="link text-[17px]">
              Alle projecten →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {d.projecten.map((p) => (
              <li key={p.titel}>
                <VoorNaKaart project={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Waarom */}
      <section className="border-t border-lijn py-14 md:py-[88px]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-[72px]">
          <div className="flex flex-col gap-4">
            <h2 id="waarom-schildersbedrijf040" className="h-section">
              {d.waarom.h2}
            </h2>
            <p className="text-[18px] leading-[1.7] text-tekst">{d.waarom.tekst}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {d.waarom.usps.map((u) => (
              <li key={u.titel} className="flex gap-4">
                <span
                  className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-sans text-[18px] font-bold text-navy">{u.titel}</h3>
                  <p className="text-[17px] leading-relaxed text-tekst-zacht">{u.beschrijving}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ + reviews */}
      <section className="bg-zand py-14 md:py-[88px]">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-[72px]">
          <div className="flex flex-col gap-[18px]">
            <h2 id="veelgestelde-vragen" className="h-section mb-1.5">
              {d.faqTitel}
            </h2>
            {d.faqs.map((f) => (
              <div key={f.question} className="flex flex-col gap-2 border-b border-[#DDD8CF] pb-[18px]">
                <h3 className="font-sans text-[19px] font-bold leading-snug text-navy md:text-[20px]">{f.question}</h3>
                <p className="text-[17px] leading-relaxed text-tekst-zacht">
                  {f.answer}
                  {f.link && (
                    <>
                      {' '}
                      <Link href={f.link.href} className="link">
                        {f.link.tekst}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h2 id={`${d.slug}-reviews`} className="font-heading text-[30px] font-bold text-navy md:text-[36px]">
              Klanten over ons {d.naam.toLowerCase()}
            </h2>
            {reviewSlots.map((r, i) => (
              <figure key={i} className="flex flex-col gap-3 rounded-[14px] bg-white p-6">
                <Stars className="h-4 w-4" color="text-[#C98A00]" />
                <blockquote className="text-[17px] leading-relaxed text-tekst">{r ? r.tekst : reviewPlaceholder}</blockquote>
                <figcaption className="text-[15px] font-semibold text-navy">
                  {r ? `${r.naam} · ${r.datum} · Google` : '[Naam] · [datum] · Google'}
                </figcaption>
              </figure>
            ))}
            <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="link text-base">
              Alle {site.google.reviewCount} reviews op Google →
            </a>
          </div>
        </div>
      </section>

      {/* Plaatsen */}
      <section className="py-12 md:py-[72px]">
        <div className="container flex flex-col gap-5">
          <h2 id={`${d.slug}-in-de-buurt`} className="font-heading text-[28px] font-bold text-navy md:text-[36px]">
            {d.naam} bij u in de buurt
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {plaatsen.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="block rounded-full border border-[#CBD2DC] px-4 py-2.5 text-base font-medium text-tekst hover:border-brand hover:text-link"
                >
                  {p.name === 'Eindhoven' ? 'Schilder Eindhoven' : `Schilder ${p.name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner titel={d.cta.titel} tekst={d.cta.tekst} />
    </main>
  )
}

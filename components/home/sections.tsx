import Image from 'next/image'
import Link from 'next/link'
import { Stars } from '@/components/site/stars'
import { WerkgebiedKaart } from '@/components/werkgebied-kaart'
import { images, type SiteImage } from '@/lib/images'
import { plaatsen } from '@/lib/navigation'
import { prijzen } from '@/lib/prices'
import { reviews, reviewPlaceholder } from '@/lib/reviews'
import { site } from '@/lib/site'
import type { Seizoensblok } from '@/lib/seizoen'

export function Winterband({ seizoen }: { seizoen: Seizoensblok }) {
  return (
    <section aria-label="Seizoen" className="px-4 pt-5 md:bg-winter md:px-0 md:pt-0">
      <div className="container flex flex-col gap-2 rounded-xl bg-winter p-5 md:flex-row md:items-center md:justify-between md:gap-10 md:rounded-none md:py-7">
        <div className="flex items-center gap-5">
          <div className="hidden h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-white md:flex" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B1B30" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5" />
            </svg>
          </div>
          <p className="text-base text-tekst md:text-[19px]">
            <strong className="mb-1 block font-heading text-[24px] font-bold text-navy md:mb-0 md:mr-2.5 md:inline md:text-[26px]">{seizoen.kop}</strong>
            {seizoen.tekst}
          </p>
        </div>
        <Link href={seizoen.link} className="link flex-shrink-0 text-base md:text-[17px] md:!text-navy">
          {seizoen.linkTekst} →
        </Link>
      </div>
    </section>
  )
}

const dienstKaarten: { titel: string; tekst: string; link: string; linkTekst: string; prijs: string; img: SiteImage }[] = [
  { titel: 'Binnenschilderwerk', tekst: 'Muren, plafonds, kozijnen, deuren en trappen, strak geschilderd en schoon opgeleverd.', link: '/diensten/binnenschilderwerk', linkTekst: 'Meer over binnenschilderwerk', prijs: `${prijzen.binnenschilderwerk[0].prijs.replace(' /', ' per ')}`, img: images.binnendeur },
  { titel: 'Buitenschilderwerk', tekst: 'Gevels, kozijnen en boeidelen, goed beschermd tegen weer en houtrot.', link: '/diensten/buitenschilderwerk', linkTekst: 'Meer over buitenschilderwerk', prijs: `${prijzen.buitenschilderwerk[0].prijs.replace(' /', ' per ')}`, img: images.tuinhuis },
  { titel: 'Behangen', tekst: 'Behang plaatsen of verwijderen, los of samen met het schilderwerk.', link: '/diensten/behangen', linkTekst: 'Meer over behangen', prijs: `Vlies ${prijzen.behangen[0].prijs.replace(' /', ' per ')}`, img: images.behang },
  { titel: 'Lakwerk', tekst: 'Deuren, trappen en kozijnen gelakt in zijdeglans of hoogglans.', link: '/diensten/lakwerk', linkTekst: 'Meer over lakwerk', prijs: `Deur ${prijzen.lakwerk[2].prijs.replace(' /stuk', '')}`, img: images.lakKozijnen },
  { titel: 'Latex spuiten', tekst: 'Muren en plafonds snel en egaal gespoten, ideaal bij nieuwbouw of na stucwerk.', link: '/diensten/latex-spuiten', linkTekst: 'Latex spuiten bekijken', prijs: `${prijzen['latex-spuiten'][0].prijs.replace(' /', ' per ')}`, img: images.latex },
  { titel: 'Houtrot sanering', tekst: 'Rot hout vakkundig herstellen of vervangen voordat we gaan schilderen.', link: '/diensten/houtrot-sanering', linkTekst: 'Meer over houtrot sanering', prijs: `Klein kozijn ${prijzen['houtrot-sanering'][0].prijs.replace(' /stuk', '')}`, img: images.houtrot },
]

export function Diensten() {
  return (
    <section id="diensten" className="py-10 md:py-24 lg:pb-24 lg:pt-[104px]">
      <div className="container flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col gap-3.5">
          <span className="eyebrow hidden md:block">Diensten</span>
          <h2 id="wat-kunnen-we-voor-u-schilderen" className="h-section lg:text-[58px]">Wat kunnen we voor u schilderen?</h2>
          <p className="max-w-[680px] text-[17px] leading-relaxed text-tekst-zacht md:text-[19px]">
            Schildersbedrijf040 biedt zes schilderdiensten voor particulieren en bedrijven in Eindhoven en omgeving. Elk project begint met een
            gratis inspectie, zodat u vooraf precies weet wat er nodig is.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {dienstKaarten.map((d) => (
            <li key={d.link}>
              <Link href={d.link} className="group flex items-center gap-3.5 rounded-xl border border-lijn p-3 text-tekst md:flex-col md:items-stretch md:gap-[18px] md:border-0 md:p-0">
                <div className="relative h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-[10px] md:h-[270px] md:w-full md:rounded-card">
                  <Image
                    src={d.img.src}
                    alt={d.img.alt}
                    fill
                    sizes="(max-width: 768px) 88px, (max-width: 1024px) 50vw, 420px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 hidden rounded-full bg-white px-3 py-1.5 text-sm font-bold text-navy md:block">{d.prijs}</span>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 md:px-1">
                  <h3 className="font-heading text-[22px] font-bold text-navy md:text-[30px]">{d.titel}</h3>
                  <p className="text-[15px] leading-snug text-tekst-zacht md:text-[17px] md:leading-[1.55]">{d.tekst}</p>
                  <span className="text-sm font-semibold text-tekst md:hidden">{d.prijs}, indicatief</span>
                  <span className="mt-1 hidden font-bold text-link group-hover:text-link-hover md:block">{d.linkTekst} →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-tekst-licht">Prijzen zijn indicatief, inclusief materiaal en exclusief btw. De exacte prijs hoort u na de gratis inspectie.</p>
      </div>
    </section>
  )
}

const werk = [
  { img: images.tuinhuis, titel: 'Gevel en kozijnen wit geschilderd' },
  { img: images.lakKozijnen, titel: 'Kozijnen gelakt' },
  { img: images.latex, titel: 'Benedenverdieping latex gespoten, Blixembosch' },
  { img: images.houtrot, titel: 'Houtrot hersteld en geschilderd' },
]

export function UitOnsWerk() {
  return (
    <section id="projecten" className="bg-navy py-12 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="flex flex-col gap-3.5">
            <span className="eyebrow !text-verf">Projecten</span>
            <h2 id="uit-ons-werk" className="font-heading text-[34px] font-bold leading-none text-white md:text-[58px]">Uit ons werk</h2>
          </div>
          <Link href="/projecten" className="btn-ghost-light self-start">
            Alle projecten bekijken
          </Link>
        </div>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-[1.15fr_1fr_1fr] md:grid-rows-[300px_300px] md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          <figure className="relative h-[300px] w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-card md:row-span-2 md:h-auto md:w-auto">
            <Image src={images.binnendeur.src} alt={images.binnendeur.alt} fill sizes="(max-width: 768px) 85vw, 480px" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[rgba(7,18,31,0.82)] px-6 py-5">
              <span className="text-sm font-semibold text-[#F7CF6E]">Binnenschilderwerk · [JORDY: plaats]</span>
              <span className="font-heading text-[26px] font-bold text-white">Binnendeur en kozijn strak gelakt</span>
            </figcaption>
          </figure>
          {werk.map((w) => (
            <figure key={w.titel} className="relative h-[300px] w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-card md:h-auto md:w-auto">
              <Image src={w.img.src} alt={w.img.alt} fill sizes="(max-width: 768px) 85vw, 400px" className="object-cover" />
              <figcaption className="absolute bottom-3.5 left-3.5 rounded-lg bg-[rgba(7,18,31,0.85)] px-3.5 py-2 text-[15px] font-semibold text-white">{w.titel}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function OverOns() {
  return (
    <section id="over-ons" className="bg-zand py-12 md:py-[104px]">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Over ons</span>
          <h2 id="over-schildersbedrijf040" className="font-heading text-[34px] font-bold leading-[1.05] text-navy md:text-[54px]">
            Een schildersbedrijf uit Eindhoven, met een vast aanspreekpunt
          </h2>
          <p className="text-[18px] leading-[1.7] text-tekst md:text-[19px]">
            Schildersbedrijf040 is opgericht door {site.owner} en heeft meer dan vijf jaar ervaring als schildersbedrijf in Eindhoven. Kwaliteit
            draait bij Schildersbedrijf040 niet alleen om het schilderwerk zelf, maar ook om heldere communicatie, betrouwbaarheid en flexibele
            planning. U heeft één aanspreekpunt van inspectie tot oplevering.
          </p>
          <p className="text-[18px] leading-[1.7] text-tekst md:text-[19px]">
            Schildersbedrijf040 voert binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering uit, en werkt
            uitsluitend met Boonstoppel-verf: verf die 8 tot 10 jaar meegaat in plaats van de 3 tot 5 jaar van budgetverf.
          </p>
          <Link href="/over-ons" className="link text-[17px]">
            Meer over Schildersbedrijf040 →
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:gap-[18px]">
          <li className="flex flex-col gap-1.5 rounded-card bg-white p-5 md:p-[30px]">
            <span className="font-heading text-[44px] font-bold leading-none text-navy md:text-[60px]">{site.google.rating}</span>
            <Stars className="h-4 w-4" color="text-[#C98A00]" />
            <span className="text-[15px] text-tekst-zacht md:text-base">{site.google.reviewCount} reviews op Google</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-card bg-white p-5 md:p-[30px]">
            <span className="font-heading text-[44px] font-bold leading-none text-navy md:text-[60px]">{site.werkspot.rating}</span>
            <Stars className="h-4 w-4" color="text-[#C98A00]" />
            <span className="text-[15px] text-tekst-zacht md:text-base">op Werkspot</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-card bg-brand p-5 md:p-[30px]">
            <span className="font-heading text-[44px] font-bold leading-none text-white md:text-[60px]">5+</span>
            <span className="text-[15px] text-white md:text-base">jaar ervaring</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-card bg-navy p-5 md:p-[30px]">
            <span className="font-heading text-[28px] font-bold leading-[1.2] text-verf md:text-[38px]">Boonstoppel</span>
            <span className="text-[15px] text-[#C9D3E0] md:text-base">verf die 8 tot 10 jaar meegaat</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

const stappen = [
  { titel: 'Aanvraag en inspectie', tekst: 'We komen gratis langs om de ondergrond te bekijken en te adviseren.', bg: 'bg-brand text-white' },
  { titel: 'Offerte met vaste prijs', tekst: 'Werk, materialen en planning duidelijk op een rij.', bg: 'bg-navy text-white' },
  { titel: 'Voorbereiden en schilderen', tekst: 'Afdekken, schuren, repareren en schilderen met Boonstoppel-verf.', bg: 'bg-navy text-white' },
  { titel: 'Schone oplevering', tekst: 'Samen nalopen, alles opruimen en pas klaar als u tevreden bent.', bg: 'bg-verf text-navy' },
]

export function Werkwijze() {
  return (
    <section id="werkwijze" className="py-12 md:py-[104px]">
      <div className="container flex flex-col gap-8 md:gap-[52px]">
        <div className="flex flex-col gap-3.5 md:items-center md:text-center">
          <span className="eyebrow">Werkwijze</span>
          <h2 id="onze-werkwijze" className="h-section lg:text-[58px]">In vier stappen geschilderd</h2>
          <p className="max-w-3xl text-[17px] leading-relaxed text-tekst-zacht md:text-[19px]">
            Schildersbedrijf040 hanteert een vast werkproces van contact tot oplevering. Een gestructureerde aanpak voorkomt verrassingen en zorgt
            ervoor dat elk schilderproject in Eindhoven binnen planning en budget wordt opgeleverd.
          </p>
        </div>
        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-9 md:before:absolute md:before:left-[12%] md:before:right-[12%] md:before:top-[34px] md:before:h-0.5 md:before:bg-[#D6DEEA] md:before:content-['']">
          {stappen.map((s, i) => (
            <li key={s.titel} className="relative flex gap-3.5 md:flex-col md:items-center md:gap-3 md:text-center">
              <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-heading text-xl font-bold md:h-[70px] md:w-[70px] md:border-[6px] md:border-white md:text-[32px] ${s.bg}`}>
                {i + 1}
              </span>
              <div className="flex flex-col gap-1 md:items-center md:gap-3">
                <h3 className="font-sans text-lg font-bold text-navy md:font-heading md:text-[27px]">{s.titel}</h3>
                <p className="text-base leading-relaxed text-tekst-zacht md:max-w-[270px] md:text-[17px]">{s.tekst}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ReviewsBlok() {
  const slots = reviews.length ? reviews.slice(0, 4) : Array.from({ length: 4 }, () => null)
  return (
    <section id="reviews" className="pb-12 md:px-0 md:pb-[104px]">
      <div className="container">
        <div className="grid items-center gap-8 rounded-[24px] bg-brand p-6 md:p-16 lg:grid-cols-[340px_1fr] lg:gap-12">
          <div className="flex flex-col gap-2.5 text-white">
            <h2 id="reviews-google" className="sr-only">Reviews op Google</h2>
            <span className="font-heading text-[80px] font-bold leading-[0.9] md:text-[110px]">{site.google.rating}</span>
            <Stars className="h-6 w-6" />
            <span className="text-[19px]">Gemiddeld uit {site.google.reviewCount} reviews op Google</span>
            <a
              href={site.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 self-start rounded-btn bg-white px-5 py-3 text-base font-bold text-navy hover:bg-zand"
            >
              Alle reviews op Google
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {slots.map((r, i) => (
              <li key={i} className="flex flex-col gap-3 rounded-card bg-white p-6">
                <Stars className="h-4 w-4" color="text-[#C98A00]" />
                <p className="text-[17px] leading-relaxed text-tekst">{r ? r.tekst : reviewPlaceholder}</p>
                <div className="flex justify-between text-[15px]">
                  <strong className="text-navy">{r ? `${r.naam}${r.plaats ? ` · ${r.plaats}` : ''}` : '[Naam] · [wijk]'}</strong>
                  <span className="text-tekst-licht">Google</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export type Faq = { question: string; answer: string; link?: { href: string; tekst: string } }

export function WerkgebiedEnFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="werkgebied" className="pb-12 md:pb-[104px]">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Werkgebied</span>
          <h2 id="werkgebied-eindhoven" className="font-heading text-[34px] font-bold text-navy md:text-[48px]">Actief in Eindhoven en de regio</h2>
          <p className="text-[17px] leading-relaxed text-tekst-zacht">
            Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Doordat Schildersbedrijf040 lokaal
            werkt, zijn de reistijden kort.
          </p>
          <WerkgebiedKaart className="h-[220px] md:h-[300px]" />
          <ul className="flex flex-wrap gap-2.5">
            {plaatsen.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="block rounded-full bg-zand px-[15px] py-[9px] text-[15px] font-semibold text-tekst hover:bg-[#E9E5DD]">
                  {p.name === 'Eindhoven' ? 'Eindhoven' : `Schilder ${p.name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <span className="eyebrow">Vragen</span>
          <h2 id="veelgestelde-vragen" className="mb-1.5 font-heading text-[34px] font-bold text-navy md:text-[48px]">Veelgestelde vragen</h2>
          {faqs.map((f) => (
            <div key={f.question} className="flex flex-col gap-2 rounded-[14px] bg-zand px-6 py-[22px]">
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
          <Link href="/faq" className="link text-[17px]">
            Meer vragen en antwoorden →
          </Link>
        </div>
      </div>
    </section>
  )
}

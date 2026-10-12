import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Stars } from '@/components/site/stars'
import { images } from '@/lib/images'
import { site } from '@/lib/site'
import type { Seizoensblok } from '@/lib/seizoen'

export function HomeHero({ seizoen }: { seizoen: Seizoensblok }) {
  return (
    <section id="hero" className="bg-navy">
      <div className="container grid items-center gap-10 pb-10 md:py-16 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16 lg:py-20 xl:grid-cols-[1fr_560px]">
        {/* Foto: op mobiel bovenaan, op desktop rechts */}
        <div className="relative -mx-4 sm:-mx-6 md:mx-0 lg:order-2">
          <div className="relative h-[260px] overflow-hidden sm:h-[380px] md:rounded-[20px] lg:h-[580px]">
            <Image
              src={images.jordy.src}
              alt={images.jordy.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-[55%_40%]"
            />
          </div>
          <div className="absolute bottom-6 left-4 hidden flex-col rounded-[14px] bg-white px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:flex lg:-left-9 lg:bottom-10">
            <span className="text-[17px] font-bold text-navy">{site.owner}</span>
            <span className="text-[15px] text-tekst-zacht">Eigenaar van Schildersbedrijf040</span>
          </div>
          <div className="absolute right-4 top-4 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full bg-verf shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:h-[120px] md:w-[120px] lg:-right-5 lg:top-9">
            <span className="font-heading text-[30px] font-bold leading-none text-navy md:text-[40px]">{site.google.rating}</span>
            <span className="text-[12px] font-bold text-navy md:text-[13px]">Google</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-6 lg:order-1">
          <Link
            href={seizoen.link}
            className="hidden items-center gap-2.5 self-start rounded-full bg-verf/15 px-4 py-2 text-[15px] font-semibold text-[#F7CF6E] hover:bg-verf/25 md:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-verf" aria-hidden="true" />
            {seizoen.label}
          </Link>
          <h1 className="font-heading text-[48px] font-bold leading-[0.95] text-white sm:text-[72px] lg:text-[96px]">
            Schilder in
            <br />
            <span className="relative inline-block">
              Eindhoven
              <svg
                viewBox="0 0 420 22"
                className="absolute -bottom-2 left-0 h-[14px] w-full sm:-bottom-3 sm:h-[22px]"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M4 14C80 6 190 4 300 8c45 2 80 5 114 9" stroke="#F2B632" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-2 max-w-[560px] text-[17px] leading-relaxed text-[#C9D3E0] md:text-[21px] md:leading-[1.55]">
            Binnen- en buitenschilderwerk, behangen en latex spuiten in Eindhoven en omgeving. Vakwerk met Boonstoppel-verf,
            netjes voorbereid en schoon opgeleverd. Beoordeeld met een {site.google.rating} op Google.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-3.5">
            <Link href="/contact" className="btn-primary !px-7 !py-4 md:!text-lg">
              Gratis offerte aanvragen
            </Link>
            <a href={site.phoneHref} className="btn-ghost-light !px-6 !py-[14px] md:!text-lg">
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-9 gap-y-4 text-[15px] text-[#C9D3E0]">
            <div className="flex flex-col gap-1">
              <Stars className="h-4 w-4" />
              <span>
                <strong className="text-white">{site.google.rating}</strong> uit {site.google.reviewCount} Google-reviews
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Stars className="h-4 w-4" />
              <span>
                <strong className="text-white">{site.werkspot.rating}</strong> op Werkspot
              </span>
            </div>
            <div className="hidden flex-col gap-1 sm:flex">
              <span className="font-heading text-[19px] font-bold leading-none text-white">Boonstoppel</span>
              <span>verf op elk project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

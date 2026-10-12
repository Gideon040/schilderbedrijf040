import Link from 'next/link'
import { site } from '@/lib/site'

// Blauwe afsluiter onderaan dienst- en locatiepagina's
export function CtaBanner({ titel, tekst }: { titel: string; tekst: string }) {
  return (
    <section className="container pb-14 md:pb-[88px]">
      <div className="flex flex-col gap-6 rounded-[18px] bg-brand p-7 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="flex flex-col gap-2.5">
          <h2 id="offerte-aanvragen" className="font-heading text-[32px] font-bold leading-tight text-white md:text-[44px]">{titel}</h2>
          <p className="text-[18px] text-white md:text-[19px]">{tekst}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-3.5">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-btn bg-white px-7 py-4 text-[17px] font-bold text-navy hover:bg-zand">
            Gratis offerte aanvragen
          </Link>
          <a href={site.phoneHref} className="inline-flex items-center justify-center rounded-btn border-2 border-white px-6 py-[14px] text-[17px] font-semibold text-white hover:bg-white/10">
            Bel {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

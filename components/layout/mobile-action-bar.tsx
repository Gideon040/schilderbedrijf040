import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

// Vaste balk onderaan op mobiel (2.9). De layout geeft de pagina onderaan ruimte (pb-[72px]).
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-[72px] gap-2.5 border-t border-lijn bg-white px-4 py-2.5 shadow-[0_-6px_20px_rgba(11,27,48,0.10)] md:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-btn border-2 border-navy text-base font-bold text-navy"
      >
        <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
        Bellen
      </a>
      <Link
        href="/contact"
        className="flex flex-[1.4] items-center justify-center rounded-btn bg-brand text-base font-bold text-white"
      >
        Gratis offerte
      </Link>
    </div>
  )
}

import Link from 'next/link'
import { site } from '@/lib/site'
import { KnopWhatsApp } from '@/components/site/whatsapp'

// Vaste balk onderaan op mobiel (tot 980px, zie v2.css .mbar)
export function MobileActionBar() {
  return (
    <div className="mbar">
      <a className="btn btn-line" href={site.phoneHref}>
        Bellen
      </a>
      <KnopWhatsApp tekst="WhatsApp" />
      <Link className="btn btn-blue" href="/contact">
        Gratis offerte
      </Link>
    </div>
  )
}

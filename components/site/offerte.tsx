'use client'

import { useState, type ReactNode } from 'react'
import { site } from '@/lib/site'
import { bronpagina, trackEvent } from '@/lib/tracking'
import { TOON_JORDY } from '@/lib/jordy'
import { afbreek } from '@/components/site/v2'

const diensten = ['Binnenschilderwerk', 'Buitenschilderwerk', 'Latex spuiten', 'Lakwerk', 'Behangen', 'Houtrot sanering']
const leeg = { name: '', phone: '', email: '', service: diensten[0], message: '' }

// Offerteblok onderaan elke pagina behalve /contact (ontwerp v2, #offerte).
// titel/tekst/extra per pagina, zodat de bestaande afsluiters van elke pagina letterlijk terugkomen.
export function Offerte({
  titel = 'Benieuwd wat uw klus kost?',
  streek = 'klus',
  tekst = 'Vul het formulier in of bel direct. We komen gratis langs voor een inspectie en u krijgt een offerte met vaste prijs.',
  eyebrow = 'Gratis offerte',
  extra,
  formTitel = 'Offerte aanvragen',
}: {
  titel?: string
  streek?: string
  tekst?: ReactNode
  eyebrow?: string
  extra?: ReactNode
  formTitel?: string
}) {
  const [form, setForm] = useState(leeg)
  const [status, setStatus] = useState<'idle' | 'bezig' | 'klaar' | 'fout'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('bezig')
    try {
      const res = await fetch('https://formspree.io/f/mkgovyya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, bronpagina: bronpagina(), formulier: 'offerteblok' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      trackEvent('generate_lead', { form: 'offerteblok' })
      setForm(leeg)
      setStatus('klaar')
    } catch {
      setStatus('fout')
    }
  }

  const i = titel.lastIndexOf(streek)
  const kop =
    i >= 0 ? (
      <>
        {afbreek(titel.slice(0, i))}
        <span className="p2">{afbreek(streek)}</span>
        {afbreek(titel.slice(i + streek.length))}
      </>
    ) : (
      afbreek(titel)
    )

  return (
    <section className="quote on-dark" id="offerte">
      <svg className="splat" viewBox="0 0 200 200" aria-hidden="true">
        <path
          fill="#1A5BFF"
          d="M100 18c18 0 22 20 38 24s34-6 40 10-12 26-8 42 22 28 12 44-30 6-42 18-12 34-30 30-14-26-30-32-38 4-44-12 14-26 12-42-24-26-14-40 30-2 44-12 14-30 32-30z"
        />
      </svg>
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow" style={{ color: '#7FA3FF' }}>
            {eyebrow}
          </div>
          <h2 id="gratis-offerte" className="disp" style={{ marginTop: 16 }}>
            {kop}
          </h2>
          {typeof tekst === 'string' ? <p className="qt">{tekst}</p> : tekst}
          <ul>
            <li>Gratis inspectie en advies bij u thuis</li>
            <li>Offerte met vaste prijs, geen verrassingen</li>
            {TOON_JORDY && <li>Reactie binnen één werkdag [JORDY: klopt?]</li>}
          </ul>
          <a className="phone" href={site.phoneHref}>
            {site.phone}
          </a>
          {extra}
        </div>
        <form className="qform rv" onSubmit={submit}>
          <h3 className="full">{formTitel}</h3>
          <label>
            Naam
            <input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Telefoon
            <input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </label>
          <label className="full">
            E-mail
            <input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label className="full">
            Wat wilt u laten doen?
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {diensten.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="full">
            Korte omschrijving
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button className="btn btn-blue full" type="submit" disabled={status === 'bezig'} style={{ justifyContent: 'center' }}>
            {status === 'bezig' ? 'Bezig met versturen...' : 'Gratis offerte aanvragen'} <span className="arr">→</span>
          </button>
          <p className="sent" role="status">
            {status === 'klaar' && 'Bedankt! We nemen zo snel mogelijk contact met u op.'}
            {status === 'fout' && (
              <>
                Versturen lukte niet. Bel ons op <a href={site.phoneHref}>{site.phone}</a>.
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

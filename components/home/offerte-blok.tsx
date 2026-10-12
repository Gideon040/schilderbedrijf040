'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { bronpagina, trackEvent } from '@/lib/tracking'

const diensten = ['Binnenschilderwerk', 'Buitenschilderwerk', 'Behangen', 'Latex spuiten', 'Lakwerk', 'Houtrot sanering']
const leeg = { name: '', phone: '', email: '', service: diensten[0], message: '' }

export function OfferteBlok({ titel = 'Benieuwd wat uw klus kost?' }: { titel?: string }) {
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

  const veld = 'h-12 w-full rounded-btn border border-[#C9CFD8] px-3 text-base text-tekst focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

  return (
    <section id="offerte" className="bg-navy py-12 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-20">
        <div className="flex flex-col gap-5">
          <span className="eyebrow !text-verf">Gratis offerte</span>
          <h2 id="gratis-offerte" className="font-heading text-[38px] font-bold leading-none text-white md:text-[62px]">{titel}</h2>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-[#C9D3E0] md:text-[19px]">
            Vul het formulier in of bel direct. We komen gratis langs voor een inspectie en u krijgt een offerte met vaste prijs.
          </p>
          <ul className="mt-2 flex flex-col gap-3 text-[17px] text-white md:text-lg">
            {['Gratis inspectie en advies bij u thuis', 'Offerte met vaste prijs, geen verrassingen', 'Reactie binnen één werkdag [JORDY: klopt?]'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="font-bold text-verf" aria-hidden="true">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className="mt-3 font-heading text-[34px] font-bold text-white hover:text-verf md:text-[40px]">
            {site.phone}
          </a>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4 rounded-[20px] bg-white p-6 md:p-9">
          <h3 className="font-heading text-[30px] font-bold text-navy">Offerte aanvragen</h3>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-[15px] font-semibold text-navy">
              Naam
              <input required autoComplete="name" className={veld} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5 text-[15px] font-semibold text-navy">
              Telefoon
              <input required type="tel" autoComplete="tel" className={veld} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-[15px] font-semibold text-navy">
            E-mail
            <input required type="email" autoComplete="email" className={veld} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1.5 text-[15px] font-semibold text-navy">
            Wat wilt u laten doen?
            <select className={`${veld} bg-white`} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {diensten.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[15px] font-semibold text-navy">
            Korte omschrijving
            <textarea rows={3} className={`${veld} h-auto py-2.5`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit" disabled={status === 'bezig'} className="btn-primary h-[54px] w-full !text-lg disabled:opacity-70">
            {status === 'bezig' ? 'Bezig met versturen...' : 'Gratis offerte aanvragen'}
          </button>
          <p role="status" className="min-h-[1.5em] text-[15px]">
            {status === 'klaar' && <span className="text-[#1E7B3A]">Bedankt! We nemen zo snel mogelijk contact met u op.</span>}
            {status === 'fout' && (
              <span className="text-[#B42318]">
                Versturen lukte niet. Bel ons op <a href={site.phoneHref} className="underline">{site.phone}</a>.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

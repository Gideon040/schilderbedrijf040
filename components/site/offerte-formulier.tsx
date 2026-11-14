'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { bronpagina, trackEvent } from '@/lib/tracking'
import { Pijl } from '@/components/site/v2'

const FORMSPREE = 'https://formspree.io/f/mkgovyya'

// Type werk als kleurstalen (meerkeuze). Stucwerk staat er niet meer tussen: niet in het dienstenpakket (zie VRAGEN-JORDY.md).
export const typeWerk = [
  { key: 'binnenschilderwerk', label: 'Binnenschilderwerk', kleur: 'var(--sw1)' },
  { key: 'buitenschilderwerk', label: 'Buitenschilderwerk', kleur: 'var(--sw4)' },
  { key: 'latex-spuiten', label: 'Latex spuiten', kleur: 'var(--sw3)' },
  { key: 'behangen', label: 'Behangen', kleur: 'var(--sw2)' },
  { key: 'lakwerk', label: 'Lakwerk', kleur: 'var(--sw6)' },
  { key: 'houtrot-sanering', label: 'Houtrot herstellen', kleur: 'var(--sw5)' },
]

const MAX_FOTOS = 6
const MAX_MB = 10

// Eén offerteformulier voor de hele site: naam, telefoon, e-mail, plaats, type werk, omschrijving en foto's.
// Verstuurt als multipart naar Formspree (ook zonder JavaScript, via action en name-attributen).
export function OfferteFormulier({
  formulier,
  titel = 'Offerte aanvragen',
  intro,
  className = 'qform',
  kopNiveau = 'h3',
}: {
  formulier: string
  titel?: string
  intro?: string
  className?: string
  kopNiveau?: 'h2' | 'h3'
}) {
  const [status, setStatus] = useState<'idle' | 'bezig' | 'klaar' | 'fout'>('idle')
  const [melding, setMelding] = useState('')
  const Kop = kopNiveau

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const fotos = fd.getAll('fotos').filter((f): f is File => f instanceof File && f.size > 0)
    if (fotos.length > MAX_FOTOS) return setMelding(`Maximaal ${MAX_FOTOS} foto's.`)
    if (fotos.some((f) => f.size > MAX_MB * 1024 * 1024)) return setMelding(`Een foto is groter dan ${MAX_MB} MB.`)
    if (!fotos.length) fd.delete('fotos')
    fd.set('bronpagina', bronpagina())
    setMelding('')
    setStatus('bezig')
    try {
      const res = await fetch(FORMSPREE, { method: 'POST', headers: { Accept: 'application/json' }, body: fd })
      if (!res.ok) throw new Error(String(res.status))
      trackEvent('generate_lead', { form: formulier, met_fotos: fotos.length > 0 })
      form.reset()
      setStatus('klaar')
    } catch {
      setStatus('fout')
    }
  }

  return (
    <form className={`${className} of-form`} action={FORMSPREE} method="POST" encType="multipart/form-data" onSubmit={submit}>
      <input type="hidden" name="formulier" value={formulier} />
      <Kop className="full">{titel}</Kop>
      {intro && <p className="full of-intro">{intro}</p>}
      <label>
        Naam
        <input required name="naam" autoComplete="name" />
      </label>
      <label>
        Telefoon
        <input required type="tel" name="telefoon" autoComplete="tel" />
      </label>
      <label>
        E-mail
        <input required type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Plaats
        <input name="plaats" autoComplete="address-level2" />
      </label>
      <fieldset className="full">
        <legend>Type werk</legend>
        <div className="swatches">
          {typeWerk.map((d) => (
            <label key={d.key} style={{ ['--c' as string]: d.kleur }}>
              <input type="checkbox" name="typeWerk" value={d.label} />
              <i />
              {d.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="full">
        Korte omschrijving
        <textarea name="omschrijving" placeholder="Bijvoorbeeld: woonkamer en hal, muren en plafond, ongeveer 60 m²" />
      </label>
      <label className="full of-fotos">
        Foto&apos;s van de klus (optioneel, maximaal {MAX_FOTOS})
        <input type="file" name="fotos" accept="image/*" multiple />
      </label>
      <button className="btn btn-blue full" type="submit" disabled={status === 'bezig'} style={{ justifyContent: 'center' }}>
        {status === 'bezig' ? 'Bezig met versturen...' : 'Gratis offerte aanvragen'} <Pijl />
      </button>
      <p className="sent full" role="status">
        {melding}
        {status === 'klaar' && `Bedankt! U hoort ${site.termijnen.reactie} van ons.`}
        {status === 'fout' && (
          <>
            Versturen lukte niet. Bel ons op <a href={site.phoneHref}>{site.phone}</a> of stuur een{' '}
            <a href={site.whatsappHref}>WhatsApp-bericht</a>.
          </>
        )}
      </p>
    </form>
  )
}

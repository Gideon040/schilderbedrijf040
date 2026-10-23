'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { DayPicker } from 'react-day-picker'
import { nl } from 'date-fns/locale'
import {
  AFSPRAAK,
  afspraakSchema,
  datumTekst,
  eersteDatum,
  isToegestaneDatum,
  laatsteDatum,
  naarDate,
  naarIso,
  winteractieActief,
  type AfspraakVelden,
} from '@/lib/afspraak'
import { site } from '@/lib/site'
import { bronpagina } from '@/lib/tracking'

// Popup "Plan een vrijblijvende offerte aan huis". Eén keer in de layout.
// Opent via de vaste knop, via elke offerteknop (a.btn naar /contact of [data-afspraak]),
// en één keer automatisch (zie AFSPRAAK.autoOpen). Zonder JavaScript gaan de knoppen gewoon naar /contact.

const OPSLAG_GETOOND = 'afspraak-popup-getoond'
const OPSLAG_VERSTUURD = 'afspraak-popup-verstuurd'

const lees = (k: string) => {
  try {
    return window.localStorage.getItem(k)
  } catch {
    return null
  }
}
const schrijf = (k: string, v: string) => {
  try {
    window.localStorage.setItem(k, v)
  } catch {
    /* privé-venster: dan alleen deze sessie */
  }
}

type Velden = {
  naam: string
  telefoon: string
  email: string
  straat: string
  plaats: string
  omschrijving: string
  soort: '' | 'binnen' | 'buiten' | 'beide'
  datum: string
  tijd: string
  privacy: boolean
  _gotcha: string
}
const leeg: Velden = { naam: '', telefoon: '', email: '', straat: '', plaats: '', omschrijving: '', soort: '', datum: '', tijd: '', privacy: false, _gotcha: '' }

export function AfspraakPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [v, setV] = useState<Velden>(leeg)
  const [fouten, setFouten] = useState<Partial<Record<AfspraakVelden, string>>>({})
  const [status, setStatus] = useState<'invullen' | 'bezig' | 'klaar' | 'fout'>('invullen')
  const [breed, setBreed] = useState(false)
  const dialoog = useRef<HTMLDivElement>(null)
  const terugFocus = useRef<HTMLElement | null>(null)
  const id = useId()

  const openen = useCallback(() => {
    terugFocus.current = document.activeElement as HTMLElement | null
    schrijf(OPSLAG_GETOOND, String(Date.now()))
    setOpen(true)
  }, [])

  const sluiten = useCallback(() => {
    setOpen(false)
    if (status === 'klaar') {
      setV(leeg)
      setStatus('invullen')
    }
    terugFocus.current?.focus?.()
  }, [status])

  // Offerteknoppen op de hele site openen de popup
  useEffect(() => {
    // Capture-fase: vóór de klikafhandeling van Next <Link>, zodat er niet naar /contact wordt genavigeerd
    const klik = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest<HTMLElement>('[data-afspraak], a.btn[href="/contact"]')
      if (!a || a.closest('.afs-dialoog')) return
      e.preventDefault()
      e.stopPropagation()
      openen()
    }
    document.addEventListener('click', klik, true)
    return () => document.removeEventListener('click', klik, true)
  }, [openen])

  // Eén keer automatisch openen: na X seconden of Y% scrollen
  useEffect(() => {
    const cfg = AFSPRAAK.autoOpen
    if (!cfg.aan || cfg.nietOp.includes(pathname) || lees(OPSLAG_VERSTUURD)) return
    const getoond = Number(lees(OPSLAG_GETOOND) || 0)
    if (getoond && Date.now() - getoond < cfg.onthoudDagen * 864e5) return
    if (!cfg.opMobiel && window.matchMedia('(max-width: 980px)').matches) return
    let klaar = false
    const nu = () => {
      if (klaar) return
      klaar = true
      opruimen()
      if (!document.querySelector('.afs-overlay')) openen()
    }
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      if (max > 0 && scrollY / max >= cfg.naScrollProcent / 100) nu()
    }
    const t = window.setTimeout(nu, cfg.naSeconden * 1000)
    addEventListener('scroll', scroll, { passive: true })
    const opruimen = () => {
      clearTimeout(t)
      removeEventListener('scroll', scroll)
    }
    return opruimen
  }, [pathname, openen])

  // Twee maanden naast elkaar op brede schermen
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 760px)')
    setBreed(mq.matches)
  }, [open])

  // Scroll-lock, Escape en focus trap
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const oud = html.style.overflow
    html.style.overflow = 'hidden'
    // Focus op de dialoog zelf (geen toetsenbord dat ongevraagd opent op mobiel); Tab gaat naar het eerste veld
    dialoog.current?.focus()
    const toets = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        sluiten()
        return
      }
      if (e.key !== 'Tab' || !dialoog.current) return
      const f = Array.from(
        dialoog.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea, select, [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => el.offsetParent !== null)
      if (!f.length) return
      const [a, z] = [f[0], f[f.length - 1]]
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault()
        z.focus()
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault()
        a.focus()
      }
    }
    document.addEventListener('keydown', toets)
    return () => {
      html.style.overflow = oud
      document.removeEventListener('keydown', toets)
    }
  }, [open, sluiten])

  const zet = <K extends keyof Velden>(k: K, waarde: Velden[K]) => {
    setV((x) => ({ ...x, [k]: waarde }))
    if (fouten[k as AfspraakVelden]) setFouten((f) => ({ ...f, [k]: undefined }))
  }

  const versturen = async (e: React.FormEvent) => {
    e.preventDefault()
    const r = afspraakSchema.safeParse(v)
    if (!r.success) {
      const f: Partial<Record<AfspraakVelden, string>> = {}
      for (const i of r.error.issues) f[i.path[0] as AfspraakVelden] ??= i.message
      setFouten(f)
      const eersteFout = dialoog.current?.querySelector<HTMLElement>(`[data-veld="${Object.keys(f)[0]}"]`)
      eersteFout?.focus()
      return
    }
    setStatus('bezig')
    try {
      const res = await fetch('/api/afspraak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...v, bronpagina: bronpagina() }),
      })
      const j = await res.json().catch(() => ({}))
      if (res.ok && j.ok) {
        schrijf(OPSLAG_VERSTUURD, String(Date.now()))
        setStatus('klaar')
        dialoog.current?.focus()
        return
      }
      if (j.velden) setFouten(j.velden)
      setStatus('fout')
    } catch {
      setStatus('fout')
    }
  }

  const fout = (k: AfspraakVelden) =>
    fouten[k] ? (
      <span className="afs-fout" id={`${id}-${k}-fout`}>
        {fouten[k]}
      </span>
    ) : null
  const aria = (k: AfspraakVelden) => ({
    'data-veld': k,
    'aria-invalid': fouten[k] ? true : undefined,
    'aria-describedby': fouten[k] ? `${id}-${k}-fout` : undefined,
  })

  const eerste = naarDate(eersteDatum())
  const laatste = naarDate(laatsteDatum())
  const lokaal = (d: Date) => naarIso(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 12)))

  return (
    <>
      <a className="afs-knop" href="/contact" data-afspraak="" hidden={open}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
        Offerte inplannen
      </a>

      {open && (
        <div
          className="afs-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) sluiten()
          }}
        >
          <div
            ref={dialoog}
            className="afs-dialoog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-titel`}
            aria-describedby={`${id}-sub`}
            tabIndex={-1}
          >
            <button type="button" className="afs-sluit" onClick={sluiten} aria-label="Sluiten">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {status === 'klaar' ? (
              <div className="afs-klaar" role="status">
                <div className="afs-vink" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </div>
                <h2 id={`${id}-titel`}>Bedankt, we bevestigen je afspraak per e-mail of telefoon</h2>
                <p id={`${id}-sub`}>
                  Je gekozen moment: <b>{datumTekst(v.datum)}</b> om <b>{v.tijd} uur</b>. Vragen of iets wijzigen? Bel{' '}
                  <a href={site.phoneHref}>{site.phone}</a>.
                </p>
                <button type="button" className="btn btn-blue" onClick={sluiten}>
                  Sluiten
                </button>
              </div>
            ) : (
              <form onSubmit={versturen} noValidate>
                <h2 id={`${id}-titel`} className="afs-titel">
                  Plan een vrijblijvende offerte aan huis
                </h2>
                <p id={`${id}-sub`} className="afs-sub">
                  Jordy komt langs, bekijkt het werk en je ontvangt binnen 2 werkdagen een offerte.
                  {winteractieActief() && <span className="afs-actie"> {AFSPRAAK.winteractie.tekst}</span>}
                </p>

                {/* Honeypot: voor mensen onzichtbaar */}
                <div className="afs-hp" aria-hidden="true">
                  <label>
                    Laat dit veld leeg
                    <input tabIndex={-1} autoComplete="off" value={v._gotcha} onChange={(e) => zet('_gotcha', e.target.value)} />
                  </label>
                </div>

                <div className="afs-rij">
                  <label>
                    Naam
                    <input autoComplete="name" value={v.naam} onChange={(e) => zet('naam', e.target.value)} {...aria('naam')} />
                    {fout('naam')}
                  </label>
                  <label>
                    Telefoon
                    <input type="tel" autoComplete="tel" inputMode="tel" value={v.telefoon} onChange={(e) => zet('telefoon', e.target.value)} {...aria('telefoon')} />
                    {fout('telefoon')}
                  </label>
                </div>
                <label>
                  E-mail
                  <input type="email" autoComplete="email" value={v.email} onChange={(e) => zet('email', e.target.value)} {...aria('email')} />
                  {fout('email')}
                </label>
                <div className="afs-rij afs-adres">
                  <label>
                    Straat en huisnummer
                    <input autoComplete="street-address" value={v.straat} onChange={(e) => zet('straat', e.target.value)} {...aria('straat')} />
                    {fout('straat')}
                  </label>
                  <label>
                    Plaats
                    <input autoComplete="address-level2" value={v.plaats} onChange={(e) => zet('plaats', e.target.value)} {...aria('plaats')} />
                    {fout('plaats')}
                  </label>
                </div>

                <fieldset className="afs-keuze" {...aria('soort')} tabIndex={-1}>
                  <legend>Waar gaat het om?</legend>
                  <div className="afs-segment">
                    {(['binnen', 'buiten', 'beide'] as const).map((s) => (
                      <label key={s} className={v.soort === s ? 'on' : undefined}>
                        <input type="radio" name={`${id}-soort`} value={s} checked={v.soort === s} onChange={() => zet('soort', s)} />
                        {s === 'binnen' ? 'Binnen' : s === 'buiten' ? 'Buiten' : 'Beide'}
                      </label>
                    ))}
                  </div>
                  {fout('soort')}
                </fieldset>

                <label>
                  <span>
                    Korte omschrijving van het werk <span className="afs-opt">(optioneel)</span>
                  </span>
                  <textarea rows={3} value={v.omschrijving} onChange={(e) => zet('omschrijving', e.target.value)} {...aria('omschrijving')} />
                  {fout('omschrijving')}
                </label>

                <fieldset className="afs-keuze" {...aria('datum')} tabIndex={-1}>
                  <legend>
                    Datum <span className="afs-opt">(maandag of woensdag)</span>
                  </legend>
                  <DayPicker
                    mode="single"
                    locale={nl}
                    weekStartsOn={1}
                    numberOfMonths={breed ? 2 : 1}
                    fromDate={eerste}
                    toDate={laatste}
                    defaultMonth={v.datum ? naarDate(v.datum) : eerste}
                    selected={v.datum ? new Date(naarDate(v.datum).getUTCFullYear(), naarDate(v.datum).getUTCMonth(), naarDate(v.datum).getUTCDate()) : undefined}
                    disabled={(d: Date) => !isToegestaneDatum(lokaal(d))}
                    onSelect={(d) => zet('datum', d ? lokaal(d) : '')}
                    showOutsideDays={false}
                    className="afs-kalender"
                  />
                  {v.datum && <span className="afs-gekozen">Gekozen: {datumTekst(v.datum)}</span>}
                  {fout('datum')}
                </fieldset>

                <fieldset className="afs-keuze" {...aria('tijd')} tabIndex={-1}>
                  <legend>Tijdslot</legend>
                  <div className="afs-slots">
                    {AFSPRAAK.slots.map((t) => (
                      <label key={t} className={v.tijd === t ? 'on' : undefined}>
                        <input type="radio" name={`${id}-tijd`} value={t} checked={v.tijd === t} onChange={() => zet('tijd', t)} />
                        {t}
                      </label>
                    ))}
                  </div>
                  {fout('tijd')}
                </fieldset>

                <label className="afs-check">
                  <input type="checkbox" checked={v.privacy} onChange={(e) => zet('privacy', e.target.checked)} {...aria('privacy')} />
                  <span>Ik ga akkoord dat Schildersbedrijf040 mijn gegevens gebruikt om contact met mij op te nemen over deze afspraak.</span>
                </label>
                {fout('privacy')}

                {status === 'fout' && (
                  <p className="afs-melding" role="alert">
                    {Object.keys(fouten).length ? 'Controleer de gemarkeerde velden.' : 'Versturen lukte niet.'} Bel ons gerust op{' '}
                    <a href={site.phoneHref}>{site.phone}</a>.
                  </p>
                )}

                <button className="btn btn-blue afs-verstuur" type="submit" disabled={status === 'bezig'}>
                  {status === 'bezig' ? 'Bezig met versturen...' : 'Afspraak aanvragen'} <span className="arr">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

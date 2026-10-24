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
  soortLabel,
  winteractieActief,
  type AfspraakVelden,
} from '@/lib/afspraak'
import { site } from '@/lib/site'
import { bronpagina } from '@/lib/tracking'

// Popup "Plan een vrijblijvende offerte aan huis". Eén keer in de layout.
// Opent via de vaste knop, via elke offerteknop (a.btn naar /contact of [data-afspraak]),
// en één keer automatisch (zie AFSPRAAK.autoOpen). Zonder JavaScript gaan de knoppen gewoon naar /contact.
// Drie stappen: het werk, het moment, de gegevens. Elke stap wordt apart gecontroleerd.

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

const STAPPEN: { label: string; kop: string; velden: AfspraakVelden[] }[] = [
  { label: 'Het werk', kop: 'Waar gaat het om?', velden: ['soort', 'omschrijving'] },
  { label: 'Moment', kop: 'Wanneer mag Jordy langskomen?', velden: ['datum', 'tijd'] },
  { label: 'Gegevens', kop: 'Waar mogen we komen?', velden: ['naam', 'telefoon', 'email', 'straat', 'plaats', 'privacy'] },
]
const stapVan = (veld: string) => Math.max(0, STAPPEN.findIndex((s) => s.velden.includes(veld as AfspraakVelden)))

// Kleurstalen uit de huisstijl; de kleur vult de tegel bij het kiezen
const SOORTEN = [
  { key: 'binnen', label: 'Binnen', uitleg: 'Muren, plafonds, deuren', kleur: 'var(--sw2)', licht: true },
  { key: 'buiten', label: 'Buiten', uitleg: 'Kozijnen, gevel, houtwerk', kleur: 'var(--sw4)', licht: false },
  { key: 'beide', label: 'Beide', uitleg: 'Binnen en buiten', kleur: 'var(--sw5)', licht: false },
] as const

function SoortIcoon({ soort }: { soort: 'binnen' | 'buiten' | 'beide' }) {
  const p = { viewBox: '0 0 32 32', width: 30, height: 30, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  if (soort === 'binnen')
    // verfroller
    return (
      <svg {...p}>
        <rect x="5" y="5" width="19" height="7" rx="1" />
        <path d="M24 8.5h3v6.5H16v4M14.5 19h3v9h-3z" />
      </svg>
    )
  if (soort === 'buiten')
    // huis met kozijn
    return (
      <svg {...p}>
        <path d="M4 15 16 5l12 10M7 12.5V27h18V12.5" />
        <rect x="12" y="15" width="8" height="7" />
        <path d="M16 15v7M12 18.5h8" />
      </svg>
    )
  // huis met roller
  return (
    <svg {...p}>
      <path d="M3 15 13 6.5 23 15M5.5 13v14h15V13" />
      <rect x="18" y="16" width="11" height="4.5" rx=".8" />
      <path d="M29 18.2h1.5v4H24v2.3M23 24.5h2.2V29H23z" />
    </svg>
  )
}

export function AfspraakPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [stap, setStap] = useState(0)
  const [v, setV] = useState<Velden>(leeg)
  const [fouten, setFouten] = useState<Partial<Record<AfspraakVelden, string>>>({})
  const [status, setStatus] = useState<'invullen' | 'bezig' | 'klaar' | 'fout'>('invullen')
  const [bezet, setBezet] = useState<Set<string>>(new Set())
  const dialoog = useRef<HTMLDivElement>(null)
  const romp = useRef<HTMLDivElement>(null)
  const stapKop = useRef<HTMLHeadingElement>(null)
  const naStapWissel = useRef(false)
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
      setStap(0)
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

  // Bezette momenten ophalen bij openen (en opnieuw na een geweigerde dubbele boeking)
  const haalBezet = useCallback(async () => {
    try {
      const j = await (await fetch('/api/afspraak', { cache: 'no-store' })).json()
      const set = new Set<string>(Array.isArray(j.bezet) ? j.bezet : [])
      setBezet(set)
      setV((x) => (x.datum && x.tijd && set.has(`${x.datum}T${x.tijd}`) ? { ...x, tijd: '' } : x))
    } catch {
      /* geen lijst: de server weigert een dubbele boeking alsnog */
    }
  }, [])
  useEffect(() => {
    if (open) haalBezet()
  }, [open, haalBezet])

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

  // Na een stapwissel: bovenaan beginnen en de kop van de nieuwe stap voorlezen
  useEffect(() => {
    if (!naStapWissel.current) return
    naStapWissel.current = false
    romp.current?.scrollTo({ top: 0 })
    stapKop.current?.focus()
  }, [stap])

  const naarStap = (i: number) => {
    naStapWissel.current = true
    setStap(i)
  }

  const zet = <K extends keyof Velden>(k: K, waarde: Velden[K]) => {
    setV((x) => ({ ...x, [k]: waarde }))
    if (fouten[k as AfspraakVelden]) setFouten((f) => ({ ...f, [k]: undefined }))
  }

  // Fouten tonen en focus op het eerste foute veld (na de render, ook als de stap wisselt)
  const toonFouten = (f: Partial<Record<AfspraakVelden, string>>) => {
    setFouten(f)
    const eerste = Object.keys(f)[0]
    if (!eerste) return
    const s = stapVan(eerste)
    if (s !== stap) setStap(s)
    requestAnimationFrame(() => dialoog.current?.querySelector<HTMLElement>(`[data-veld="${eerste}"]`)?.focus())
  }

  // Fouten van alle stappen t/m `tot`, in de volgorde van de stappen
  const controleer = (tot: number) => {
    const r = afspraakSchema.safeParse(v)
    const f: Partial<Record<AfspraakVelden, string>> = {}
    if (!r.success) {
      const toegestaan = STAPPEN.slice(0, tot + 1).flatMap((s) => s.velden)
      for (const veld of toegestaan) {
        const i = r.error.issues.find((x) => x.path[0] === veld)
        if (i) f[veld] = i.message
      }
    }
    return f
  }

  const versturen = async (e: React.FormEvent) => {
    e.preventDefault()
    const f = controleer(stap)
    if (Object.keys(f).length) return toonFouten(f)
    if (stap < STAPPEN.length - 1) return naarStap(stap + 1)

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
      setStatus('fout')
      if (res.status === 409) {
        setV((x) => ({ ...x, tijd: '' }))
        haalBezet()
      }
      if (j.velden) toonFouten(j.velden)
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
  const gekozenDag = v.datum ? naarDate(v.datum) : undefined
  const laatsteStap = stap === STAPPEN.length - 1
  const actie = winteractieActief()
  const isBezet = (datum: string, tijd: string) => bezet.has(`${datum}T${tijd}`)
  const dagVol = (datum: string) => AFSPRAAK.slots.every((t) => isBezet(datum, t))

  return (
    <>
      <a className="afs-knop" href="/contact" data-afspraak="" hidden={open}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
        {actie ? AFSPRAAK.winteractie.knop : 'Offerte inplannen'}
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
                <span className="eyebrow">Aanvraag ontvangen</span>
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
              <form onSubmit={versturen} noValidate className="afs-form">
                <header className={actie ? 'afs-kop met-actie' : 'afs-kop'}>
                  {actie && (
                    <span className="afs-sticker" aria-hidden="true">
                      <small>{AFSPRAAK.winteractie.sticker[0]}</small>
                      {AFSPRAAK.winteractie.sticker[1]}
                    </span>
                  )}
                  <span className="eyebrow">{actie ? AFSPRAAK.winteractie.label : 'Gratis offerte aan huis'}</span>
                  <h2 id={`${id}-titel`} className="afs-titel">
                    {actie ? (
                      <>
                        {AFSPRAAK.winteractie.kop[0]} <span>{AFSPRAAK.winteractie.kop[1]}</span>
                      </>
                    ) : (
                      'Plan een bezoek van Jordy'
                    )}
                  </h2>
                  <p id={`${id}-sub`} className="afs-sub">
                    {actie
                      ? 'Plan een gratis offerte aan huis en profiteer van 10 tot 20% winterkorting. Jordy komt langs, binnen 2 werkdagen heb je de offerte.'
                      : 'Jordy bekijkt het werk bij je thuis. Binnen 2 werkdagen heb je een vrijblijvende offerte.'}
                  </p>
                  <ol className="afs-stappen" aria-label="Stappen">
                    {STAPPEN.map((s, i) => (
                      <li key={s.label} className={i < stap ? 'af' : i === stap ? 'nu' : undefined} aria-current={i === stap ? 'step' : undefined}>
                        {i < stap ? (
                          <button type="button" onClick={() => naarStap(i)}>
                            <b>{i + 1}</b> {s.label}
                            <span className="afs-vh"> (wijzigen)</span>
                          </button>
                        ) : (
                          <span>
                            <b>{i + 1}</b> {s.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </header>

                <div className="afs-romp" ref={romp}>
                  {/* Honeypot: voor mensen onzichtbaar */}
                  <div className="afs-hp" aria-hidden="true">
                    <label>
                      Laat dit veld leeg
                      <input tabIndex={-1} autoComplete="off" value={v._gotcha} onChange={(e) => zet('_gotcha', e.target.value)} />
                    </label>
                  </div>

                  <h3 className="afs-stapkop" ref={stapKop} tabIndex={-1}>
                    <span className="afs-vh">
                      Stap {stap + 1} van {STAPPEN.length}:{' '}
                    </span>
                    {STAPPEN[stap].kop}
                  </h3>

                  {stap === 0 && (
                    <>
                      <fieldset className="afs-keuze" {...aria('soort')} tabIndex={-1}>
                        <legend className="afs-vh">Soort werk</legend>
                        <div className="afs-soorten">
                          {SOORTEN.map((s) => (
                            <label key={s.key} className={(v.soort === s.key ? 'on' : '') + (s.licht ? ' licht' : '')} style={{ ['--c' as string]: s.kleur }}>
                              <input type="radio" name={`${id}-soort`} value={s.key} checked={v.soort === s.key} onChange={() => zet('soort', s.key)} />
                              <SoortIcoon soort={s.key} />
                              <b>{s.label}</b>
                              <small>{s.uitleg}</small>
                            </label>
                          ))}
                        </div>
                        {fout('soort')}
                      </fieldset>
                      <label>
                        <span>
                          Wat wil je laten schilderen? <span className="afs-opt">(optioneel)</span>
                        </span>
                        <textarea
                          rows={3}
                          placeholder="Bijvoorbeeld: woonkamer en hal, of de kozijnen aan de voorkant"
                          value={v.omschrijving}
                          onChange={(e) => zet('omschrijving', e.target.value)}
                          {...aria('omschrijving')}
                        />
                        {fout('omschrijving')}
                      </label>
                    </>
                  )}

                  {stap === 1 && (
                    <div className="afs-moment">
                      <fieldset className="afs-keuze" {...aria('datum')} tabIndex={-1}>
                        <legend>
                          Datum <span className="afs-opt">(maandag of woensdag)</span>
                        </legend>
                        <DayPicker
                          mode="single"
                          locale={nl}
                          weekStartsOn={1}
                          fromDate={eerste}
                          toDate={laatste}
                          defaultMonth={gekozenDag ? new Date(gekozenDag.getUTCFullYear(), gekozenDag.getUTCMonth(), 1) : eerste}
                          selected={gekozenDag ? new Date(gekozenDag.getUTCFullYear(), gekozenDag.getUTCMonth(), gekozenDag.getUTCDate()) : undefined}
                          disabled={(d: Date) => !isToegestaneDatum(lokaal(d)) || dagVol(lokaal(d))}
                          onSelect={(d) => zet('datum', d ? lokaal(d) : '')}
                          showOutsideDays={false}
                          className="afs-kalender"
                        />
                        {fout('datum')}
                      </fieldset>
                      <fieldset className="afs-keuze" {...aria('tijd')} tabIndex={-1}>
                        <legend>Tijd</legend>
                        {v.datum ? (
                          <>
                            <span className="afs-gekozen">{datumTekst(v.datum)}</span>
                            <div className="afs-slots">
                              {AFSPRAAK.slots.map((t) => {
                                const vol = isBezet(v.datum, t)
                                return (
                                  <label key={t} className={vol ? 'vol' : v.tijd === t ? 'on' : undefined}>
                                    <input type="radio" name={`${id}-tijd`} value={t} checked={v.tijd === t} disabled={vol} onChange={() => zet('tijd', t)} />
                                    {t}
                                    {vol && <span className="afs-vh"> (bezet)</span>}
                                  </label>
                                )
                              })}
                            </div>
                          </>
                        ) : (
                          <p className="afs-leeg">Kies eerst een datum, dan zie je hier de tijden.</p>
                        )}
                        {fout('tijd')}
                      </fieldset>
                    </div>
                  )}

                  {stap === 2 && (
                    <>
                      <div className="afs-samenvatting">
                        <span>
                          {v.soort && soortLabel[v.soort]} · {datumTekst(v.datum)} om {v.tijd} uur
                        </span>
                        <button type="button" onClick={() => naarStap(1)}>
                          Wijzig
                        </button>
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
                      <label className="afs-check">
                        <input type="checkbox" checked={v.privacy} onChange={(e) => zet('privacy', e.target.checked)} {...aria('privacy')} />
                        <span>Ik ga akkoord dat Schildersbedrijf040 mijn gegevens gebruikt om contact met mij op te nemen over deze afspraak.</span>
                      </label>
                      {fout('privacy')}
                    </>
                  )}

                  {status === 'fout' && (
                    <p className="afs-melding" role="alert">
                      {Object.values(fouten).some(Boolean) ? 'Controleer de gemarkeerde velden.' : 'Versturen lukte niet.'} Bel ons gerust op{' '}
                      <a href={site.phoneHref}>{site.phone}</a>.
                    </p>
                  )}
                </div>

                <footer className="afs-voet">
                  {stap > 0 ? (
                    <button type="button" className="afs-terug" onClick={() => naarStap(stap - 1)}>
                      <span aria-hidden="true">←</span> Terug
                    </button>
                  ) : (
                    <a className="afs-bel" href={site.phoneHref}>
                      Liever bellen? <b>{site.phone}</b>
                    </a>
                  )}
                  <button className="btn btn-blue afs-verder" type="submit" disabled={status === 'bezig'}>
                    {status === 'bezig' ? 'Bezig met versturen...' : laatsteStap ? 'Afspraak aanvragen' : 'Volgende'} <span className="arr">→</span>
                  </button>
                </footer>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

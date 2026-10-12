'use client'

import { useState } from 'react'
import { bronpagina, trackEvent } from '@/lib/tracking'
import { Pijl } from '@/components/site/v2'

const buildingTypes = ['Appartement', 'Tussenwoning', 'Hoekwoning', 'Twee-onder-een-kap', 'Vrijstaande woning', 'Bedrijfspand']

// Zelfde velden en sleutels als het bestaande offerteformulier; de diensten zijn kleurstalen (ontwerp v2)
const diensten = [
  { key: 'binnenschilderwerk', label: 'Binnenschilderwerk', kleur: 'var(--sw1)' },
  { key: 'buitenschilderwerk', label: 'Buitenschilderwerk', kleur: 'var(--sw4)' },
  { key: 'latexSpuiten', label: 'Latex Spuiten', kleur: 'var(--sw3)' },
  { key: 'behang', label: 'Behang', kleur: 'var(--sw2)' },
  { key: 'traditioneelStucwerk', label: 'Traditioneel Stucwerk', kleur: 'var(--sw5)' },
  { key: 'exclusiefStucdesign', label: 'Exclusief Stucdesign', kleur: 'var(--sw6)' },
]

const FORMSPREE = 'https://formspree.io/f/mkgovyya'

// Zonder JS post het formulier gewoon naar Formspree (action + name-attributen)
export function ContactFormulier() {
  const [bezig, setBezig] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const datum = String(fd.get('startDate') || '')
    const data = {
      buildingType: fd.get('buildingType'),
      services: fd.getAll('services').join(', '),
      name: fd.get('name'),
      email: fd.get('email'),
      comments: fd.get('comments'),
      startDate: datum ? datum.split('-').reverse().join('-') : null,
      bronpagina: bronpagina(),
      formulier: 'offerte',
    }
    setBezig(true)
    try {
      const response = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        trackEvent('generate_lead', { form: 'offerte' })
        alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
        form.reset()
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch {
      alert('Er is iets misgegaan. Probeer het later opnieuw.')
    }
    setBezig(false)
  }

  return (
    <form id="quote-form" className="cform" action={FORMSPREE} method="POST" onSubmit={handleSubmit}>
      <h2>Vraag direct een offerte aan</h2>
      <p>Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte</p>
      <fieldset>
        <legend>Gewenste diensten</legend>
        <div className="swatches">
          {diensten.map((d) => (
            <label key={d.key} style={{ ['--c' as string]: d.kleur }}>
              <input type="checkbox" name="services" value={d.key} />
              <i />
              {d.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="row2">
        <label htmlFor="c-type">
          Type woning
          <select id="c-type" name="buildingType" required defaultValue="">
            <option value="">Selecteer type woning</option>
            {buildingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="c-date">
          Gewenste startdatum
          <input id="c-date" name="startDate" type="date" />
        </label>
      </div>
      <div className="row2">
        <label htmlFor="c-naam">
          Naam
          <input id="c-naam" name="name" type="text" autoComplete="name" required />
        </label>
        <label htmlFor="c-mail">
          Email
          <input id="c-mail" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label htmlFor="c-opm">
        Opmerkingen
        <textarea id="c-opm" name="comments" rows={4} />
      </label>
      <input type="hidden" name="formulier" value="offerte" />
      <button className="btn btn-blue" type="submit" style={{ justifyContent: 'center' }} disabled={bezig}>
        Gratis offerte aanvragen <Pijl />
      </button>
    </form>
  )
}

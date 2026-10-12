'use client'

import { useState } from 'react'

// Filter op dienst en plaats. Zonder JS staan alle projecten gewoon in de lijst.
export function ProjectFilter({ diensten, plaatsen }: { diensten: { slug: string; naam: string }[]; plaatsen: string[] }) {
  const [dienst, setDienst] = useState('alle')
  const [plaats, setPlaats] = useState('alle')

  const toepassen = (d: string, p: string) => {
    document.querySelectorAll<HTMLElement>('.collage.proj > a').forEach((el) => {
      const okDienst = d === 'alle' || (el.dataset.diensten ?? '').split(' ').includes(d)
      const okPlaats = p === 'alle' || el.dataset.plaats === p
      el.hidden = !(okDienst && okPlaats)
    })
  }

  const knop = (actief: boolean, label: string, onClick: () => void) => (
    <button key={label} type="button" className={actief ? 'on' : undefined} aria-pressed={actief} onClick={onClick}>
      {label}
    </button>
  )

  return (
    <div className="proj-filter">
      <div className="cats" role="group" aria-label="Filter op dienst">
        {knop(dienst === 'alle', 'Alle diensten', () => {
          setDienst('alle')
          toepassen('alle', plaats)
        })}
        {diensten.map((d) =>
          knop(dienst === d.slug, d.naam, () => {
            setDienst(d.slug)
            toepassen(d.slug, plaats)
          }),
        )}
      </div>
      {plaatsen.length > 0 && (
        <div className="cats" role="group" aria-label="Filter op plaats">
          {knop(plaats === 'alle', 'Alle plaatsen', () => {
            setPlaats('alle')
            toepassen(dienst, 'alle')
          })}
          {plaatsen.map((p) =>
            knop(plaats === p, p, () => {
              setPlaats(p)
              toepassen(dienst, p)
            }),
          )}
        </div>
      )}
    </div>
  )
}

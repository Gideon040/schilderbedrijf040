'use client'

import { useState } from 'react'
import { catKleur } from './categorie'

// Filter op onderwerp. Zonder JS staan alle artikelen gewoon in de lijst.
export function BlogFilter({ categorieen }: { categorieen: string[] }) {
  const [actief, setActief] = useState('alle')
  const kies = (c: string) => {
    setActief(c)
    document.querySelectorAll<HTMLElement>('[data-cat]').forEach((el) => {
      if (el.tagName === 'BUTTON') return
      el.classList.toggle('out', c !== 'alle' && el.dataset.cat !== c)
    })
  }
  return (
    <div className="cats" role="group" aria-label="Filter op onderwerp">
      <button type="button" className={actief === 'alle' ? 'on' : undefined} aria-pressed={actief === 'alle'} onClick={() => kies('alle')}>
        Alle artikelen
      </button>
      {categorieen.map((c) => (
        <button
          key={c}
          type="button"
          data-cat={c}
          className={actief === c ? 'on' : undefined}
          aria-pressed={actief === c}
          style={{ ['--c' as string]: catKleur(c) }}
          onClick={() => kies(c)}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

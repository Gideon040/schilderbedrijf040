'use client'

import { useEffect } from 'react'

// Leesvoortgang (penseelstreek bovenaan) en de inhoudsopgave die meeloopt
export function ArtikelVoortgang() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const bar = document.querySelector<HTMLElement>('.readbar i')
    const prose = document.querySelector<HTMLElement>('.prose')
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.toc a'))
    const koppen = Array.from(document.querySelectorAll<HTMLElement>('.prose h2[id]'))
    const opScroll = () => {
      if (prose && bar && !reduce) {
        const r = prose.getBoundingClientRect()
        bar.style.setProperty('--r', String(Math.min(1, Math.max(0, (innerHeight * 0.3 - r.top) / r.height))))
      }
      let huidig = koppen[0]?.id
      koppen.forEach((h) => {
        if (h.getBoundingClientRect().top < innerHeight * 0.35) huidig = h.id
      })
      links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${huidig}`))
    }
    opScroll()
    addEventListener('scroll', opScroll, { passive: true })
    return () => removeEventListener('scroll', opScroll)
  }, [])
  return (
    <div className="readbar" aria-hidden="true">
      <i />
    </div>
  )
}

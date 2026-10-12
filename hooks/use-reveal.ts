'use client'

import { useEffect } from 'react'

// Eén kleine hook voor alle animaties (IntersectionObserver, geen libraries).
// Zonder JS is alles zichtbaar: de klasse "js" zet de startstanden pas aan als deze hook draait,
// en alleen op secties onder de vouw (niet op <html>, dat zou de hele pagina opnieuw laten opmaken).
// Bij prefers-reduced-motion gebeurt er niets.
export function useReveal(sleutel: string) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const opruimen: (() => void)[] = []

    const zodraZichtbaar = (el: Element, fn: () => void, drempel = 0.35) => {
      if (reduce || !('IntersectionObserver' in window)) return fn()
      const o = new IntersectionObserver(
        (es) => {
          if (es[0].isIntersecting) {
            o.disconnect()
            fn()
          }
        },
        { threshold: drempel },
      )
      o.observe(el)
      opruimen.push(() => o.disconnect())
    }

    // Onthullen bij scrollen. De eerste melding van de observer zegt wat al in beeld is (direct tonen);
    // pas daarna krijgt de sectie eromheen de klasse "js", zodat niets zichtbaars eerst verdwijnt.
    const gezien = new WeakSet<Element>()
    const io =
      !reduce && 'IntersectionObserver' in window
        ? new IntersectionObserver(
            (es) =>
              es.forEach((e) => {
                const eerste = !gezien.has(e.target)
                gezien.add(e.target)
                if (e.isIntersecting) {
                  e.target.classList.add('in')
                  io?.unobserve(e.target)
                }
                if (eerste) e.target.closest('section, main > div, main')?.classList.add('js')
              }),
            { rootMargin: '0px 0px -8% 0px' },
          )
        : null
    if (io) opruimen.push(() => io.disconnect())
    document.querySelectorAll<HTMLElement>('.rv:not(.in)').forEach((el, i) => {
      if (!io) return
      el.style.transitionDelay = `${(i % 4) * 0.07}s`
      io.observe(el)
    })

    // Tellers
    document.querySelectorAll<HTMLElement>('.counters').forEach((c) => {
      if (reduce) return
      zodraZichtbaar(c, () =>
        c.querySelectorAll<HTMLElement>('[data-to]').forEach((el) => {
          const doel = parseFloat(el.dataset.to || '0')
          const dec = Number(el.dataset.dec || 0)
          const eind = el.textContent
          const t0 = performance.now()
          const stap = (t: number) => {
            const p = Math.min((t - t0) / 1400, 1)
            const e = 1 - Math.pow(1 - p, 3)
            el.textContent = p < 1 ? (doel * e).toFixed(dec).replace('.', ',') : eind
            if (p < 1) requestAnimationFrame(stap)
          }
          requestAnimationFrame(stap)
        }),
      0.4)
    })

    // Werkwijze-lijn met verfrollertje
    document.querySelectorAll<HTMLElement>('.steps').forEach((s) =>
      zodraZichtbaar(s, () => {
        s.querySelector<HTMLElement>('.track')?.style.setProperty('--p', '1')
        s.classList.add('go')
      }),
    )

    // Voor/na-slider: schuiven en één keer zelf heen en weer
    document.querySelectorAll<HTMLElement>('.ba').forEach((ba) => {
      const input = ba.querySelector('input')
      if (!input) return
      const zet = () => ba.style.setProperty('--x', `${input.value}%`)
      input.addEventListener('input', zet)
      opruimen.push(() => input.removeEventListener('input', zet))
      if (reduce) return
      zodraZichtbaar(
        ba,
        () => {
          const t0 = performance.now()
          const stap = (t: number) => {
            const p = Math.min((t - t0) / 1600, 1)
            const v = 50 + Math.sin(p * Math.PI * 2) * 28 * (1 - p)
            ba.style.setProperty('--x', `${v}%`)
            input.value = String(v)
            if (p < 1) requestAnimationFrame(stap)
          }
          requestAnimationFrame(stap)
        },
        0.5,
      )
    })

    // Foto die met de cursor meezweeft bij de dienstrijen (alleen desktop)
    const peek = document.getElementById('peek')
    const peekImg = document.getElementById('peekimg') as HTMLImageElement | null
    if (peek && peekImg && !reduce && matchMedia('(hover: hover) and (min-width: 981px)').matches) {
      document.querySelectorAll<HTMLElement>('.svc a.row[data-img]').forEach((r) => {
        const aan = () => {
          peekImg.src = r.dataset.img || ''
          peek.classList.add('on')
        }
        const uit = () => peek.classList.remove('on')
        const mee = (e: MouseEvent) => {
          peek.style.left = `${e.clientX + 170}px`
          peek.style.top = `${e.clientY}px`
        }
        r.addEventListener('mouseenter', aan)
        r.addEventListener('mouseleave', uit)
        r.addEventListener('mousemove', mee)
        opruimen.push(() => {
          r.removeEventListener('mouseenter', aan)
          r.removeEventListener('mouseleave', uit)
          r.removeEventListener('mousemove', mee)
        })
      })
    }

    // Sneeuw in de winterband
    const flakes = document.getElementById('flakes')
    if (flakes && !reduce && !flakes.childElementCount) {
      for (let i = 0; i < 26; i++) {
        const f = document.createElement('i')
        const sz = 3 + Math.random() * 5
        f.style.cssText = `left:${Math.random() * 100}%;animation-duration:${7 + Math.random() * 8}s;animation-delay:${-Math.random() * 12}s;width:${sz}px;height:${sz}px`
        flakes.appendChild(f)
      }
    }

    // Schaduw onder de header na scrollen, en vangnet voor reveals
    const nav = document.getElementById('nav')
    const onScroll = () => {
      nav?.classList.toggle('scrolled', scrollY > 10)
      document.querySelectorAll('.rv:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in')
      })
    }
    addEventListener('scroll', onScroll, { passive: true })
    opruimen.push(() => removeEventListener('scroll', onScroll))

    return () => opruimen.forEach((f) => f())
  }, [sleutel])
}

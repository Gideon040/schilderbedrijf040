import Link from 'next/link'
import { ReviewKaart } from '@/components/site/reviews'
import { Pijl } from '@/components/site/v2'
import { prijsTekst } from '@/lib/prices'
import { reviewsVoor } from '@/lib/reviews'

// Per blog: bijbehorende dienstpagina, prijsregel en review-tag
const perBlog: Record<string, { dienst: string; naam: string; prijs: string; ook?: [string, string] }> = {
  'verven-na-behang': { dienst: 'binnenschilderwerk', naam: 'muren laten schilderen', prijs: `Muren schilderen kost ${prijsTekst.wanden}, voorstrijken ${prijsTekst.voorstrijken}.`, ook: ['/kosten/wat-kost-een-schilder', 'wat kost een schilder'] },
  'plafond-schilderen': { dienst: 'binnenschilderwerk', naam: 'het plafond laten schilderen', prijs: `Een plafond schilderen kost ${prijsTekst.wanden}; latex spuiten ${prijsTekst.latex}.`, ook: ['/kosten/plafond-schilderen', 'kosten plafond schilderen'] },
  'hoe-verf-je-een-muur': { dienst: 'binnenschilderwerk', naam: 'muren laten schilderen', prijs: `Muren schilderen kost ${prijsTekst.wanden}.`, ook: ['/kosten/wat-kost-een-schilder', 'wat kost een schilder'] },
  'hoe-lang-duurt-binnenschilderwerk': { dienst: 'binnenschilderwerk', naam: 'binnenschilderwerk laten doen', prijs: `Muren en plafonds kosten ${prijsTekst.wanden}, lakwerk binnen ${prijsTekst.lakBinnen}.`, ook: ['/diensten/trap-schilderen', 'trap schilderen'] },
  'latex-spuiten-of-rollen': { dienst: 'latex-spuiten', naam: 'latex laten spuiten', prijs: `Latex spuiten kost ${prijsTekst.latex}.`, ook: ['/diensten/latex-spuiten-nieuwbouw', 'latex spuiten in nieuwbouw'] },
  'hoe-schilder-je-een-deur': { dienst: 'lakwerk', naam: 'een deur laten lakken', prijs: `Een deur lakken kost ${prijsTekst.deur}.`, ook: ['/diensten/trap-schilderen', 'trap laten lakken'] },
  'beitsen-of-lakken': { dienst: 'lakwerk', naam: 'kozijnen laten lakken of beitsen', prijs: `Lakwerk buiten kost ${prijsTekst.lakBuiten}, binnen ${prijsTekst.lakBinnen}.`, ook: ['/kosten/kozijnen-schilderen', 'kosten kozijnen schilderen'] },
  'kitnaden-vervangen': { dienst: 'kozijnen-schilderen', naam: 'kozijnen laten schilderen', prijs: `Kozijnen buiten lakken kost ${prijsTekst.lakBuiten}.`, ook: ['/kosten/kozijnen-schilderen', 'kosten kozijnen schilderen'] },
  'hoe-vaak-buitenschilderwerk': { dienst: 'buitenschilderwerk', naam: 'buitenschilderwerk laten doen', prijs: `Een gevel schilderen kost ${prijsTekst.gevel}, kozijnen buiten ${prijsTekst.lakBuiten}.`, ook: ['/diensten/dakkapel-schilderen', 'dakkapel schilderen'] },
  'wanneer-buiten-schilderen': { dienst: 'buitenschilderwerk', naam: 'buitenschilderwerk laten doen', prijs: `Een gevel schilderen kost ${prijsTekst.gevel}, kozijnen buiten ${prijsTekst.lakBuiten}.`, ook: ['/diensten/dakkapel-schilderen', 'dakkapel schilderen'] },
  'btw-tarief-schilderwerk': { dienst: 'binnenschilderwerk', naam: 'schilderwerk laten doen', prijs: `Binnen kost schilderwerk ${prijsTekst.wanden}, een gevel ${prijsTekst.gevel}.`, ook: ['/kosten/wat-kost-een-schilder', 'wat kost een schilder'] },
}

const dienstNamen: Record<string, string> = {
  binnenschilderwerk: 'binnenschilderwerk',
  'latex-spuiten': 'latex spuiten',
  lakwerk: 'lakwerk',
  'kozijnen-schilderen': 'kozijnen schilderen',
  buitenschilderwerk: 'buitenschilderwerk',
}

// Offerteblok midden in een blog. `nr` kiest een andere review voor het tweede blok.
export function LieverLatenDoen({ slug, nr = 0 }: { slug: string; nr?: number }) {
  const b = perBlog[slug]
  if (!b) return null
  const review = reviewsVoor({ dienst: b.dienst, aantal: 2 })[nr]
  return (
    <aside className="lld" aria-label="Liever laten doen?">
      <div className="lld-txt">
        <small>Liever laten doen?</small>
        <p className="lld-h">Schildersbedrijf040 kan {b.naam} voor u</p>
        <p>
          {b.prijs} Indicatief, inclusief materiaal en exclusief btw. Na een gratis inspectie krijgt u een offerte met vaste prijs. Lees meer
          over <Link href={`/diensten/${b.dienst}`}>{dienstNamen[b.dienst]}</Link>
          {b.ook && (
            <>
              {' '}
              of over <Link href={b.ook[0]}>{b.ook[1]}</Link>
            </>
          )}
          .
        </p>
        <a className="btn btn-blue" href="#offerte">
          Gratis offerte aanvragen <Pijl />
        </a>
      </div>
      {review && (
        <div className="cards lld-rev">
          <ReviewKaart r={review} className="" />
        </div>
      )}
    </aside>
  )
}

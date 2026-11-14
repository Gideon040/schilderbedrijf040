// Reviewkaarten uit data/reviews.json. Tekst letterlijk; lange reviews klappen in met "Lees meer".
import { bronNaam, type Review } from '@/lib/reviews'

const MAX = 230

// Knip op een woordgrens; de tekst zelf verandert niet
function splits(tekst: string): [string, string] {
  if (tekst.length <= MAX + 40) return [tekst, '']
  const i = tekst.lastIndexOf(' ', MAX)
  return [tekst.slice(0, i), tekst.slice(i)]
}

export function ReviewKaart({ r, className = 'rv' }: { r: Review; className?: string }) {
  const [kort, rest] = splits(r.tekst)
  return (
    <article className={className}>
      <div className="stars" aria-label={`${r.sterren} van 5 sterren`}>
        {'★'.repeat(r.sterren)}
      </div>
      <blockquote>
        {kort}
        {rest && (
          <details className="lees-meer">
            <summary>
              <span aria-hidden="true">… </span>Lees meer
            </summary>
            {rest}
          </details>
        )}
      </blockquote>
      <div className="ft">
        <b>{r.naam}</b>
        <span>
          {[r.plaats, bronNaam[r.bron], r.jaar].filter(Boolean).join(' · ')}
        </span>
      </div>
    </article>
  )
}

export function ReviewKaarten({ reviews, drie = false }: { reviews: Review[]; drie?: boolean }) {
  return (
    <div className={`cards${drie ? ' c3' : ''}`}>
      {reviews.map((r) => (
        <ReviewKaart key={r.id} r={r} />
      ))}
    </div>
  )
}

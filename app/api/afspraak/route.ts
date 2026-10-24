import { NextResponse } from 'next/server'
import { AFSPRAAK, afspraakSchema, datumTekst, soortLabel } from '@/lib/afspraak'
import { bezetteMomenten, geefVrij, reserveer } from '@/lib/boekingen'

export const dynamic = 'force-dynamic'

const BEZET = 'Dit moment is net door iemand anders gekozen. Kies een andere tijd.'
const host = (req: Request) => req.headers.get('x-forwarded-host') ?? req.headers.get('host')

// Bezette momenten voor de popup, als "YYYY-MM-DDTHH:MM"
export async function GET(req: Request) {
  try {
    return NextResponse.json({ bezet: await bezetteMomenten(host(req)) }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (e) {
    console.error('[afspraak] bezette momenten ophalen mislukt', e)
    return NextResponse.json({ bezet: [] }, { headers: { 'Cache-Control': 'no-store' } })
  }
}

// Afspraakaanvraag uit de popup: servercontrole, daarna door naar het bestaande Formspree-formulier.
export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, fout: 'Ongeldige aanvraag.' }, { status: 400 })
  }

  // Honeypot: ingevuld = bot. Doe alsof het gelukt is en stuur niets door.
  if (typeof body._gotcha === 'string' && body._gotcha.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const r = afspraakSchema.safeParse(body)
  if (!r.success) {
    const velden = Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message]))
    return NextResponse.json({ ok: false, fout: 'Controleer de gemarkeerde velden.', velden }, { status: 422 })
  }
  const a = r.data
  const bron = typeof body.bronpagina === 'string' ? body.bronpagina.slice(0, 200) : ''

  const bericht = {
    _subject: `Afspraak offerte aan huis: ${datumTekst(a.datum)} om ${a.tijd} (${a.naam}, ${a.plaats})`,
    _replyto: a.email,
    formulier: 'afspraak',
    'Datum': datumTekst(a.datum),
    'Tijd': `${a.tijd} uur`,
    'Naam': a.naam,
    'Telefoon': a.telefoon,
    'E-mail': a.email,
    'Adres': `${a.straat}, ${a.plaats}`,
    'Binnen of buiten': soortLabel[a.soort],
    'Omschrijving': a.omschrijving || '(geen)',
    'Akkoord privacy': 'ja',
    bronpagina: bron,
  }

  // Moment vastleggen vóór het versturen; bezet = weigeren. Lukt de opslag niet, dan gaat de aanvraag toch door.
  let vastgelegd = false
  try {
    vastgelegd = await reserveer(host(req), a.datum, a.tijd, { naam: a.naam, plaats: a.plaats, aangemaakt: new Date().toISOString() })
    if (!vastgelegd) return NextResponse.json({ ok: false, fout: BEZET, velden: { tijd: BEZET } }, { status: 409 })
  } catch (e) {
    console.error('[afspraak] moment vastleggen mislukt', e)
  }

  // Testen zonder echte mail: AFSPRAAK_DROOG=1 toont het bericht in de serverlog en stuurt niets door
  if (process.env.AFSPRAAK_DROOG === '1') {
    console.log('[afspraak droog]', JSON.stringify(bericht, null, 2))
    return NextResponse.json({ ok: true, droog: true })
  }

  const res = await fetch(AFSPRAAK.formspree, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: 'https://schildersbedrijf040.nl',
      Referer: 'https://schildersbedrijf040.nl/',
    },
    body: JSON.stringify(bericht),
  }).catch(() => null)

  if (!res || !res.ok) {
    if (vastgelegd) await geefVrij(host(req), a.datum, a.tijd).catch(() => {})
    return NextResponse.json({ ok: false, fout: 'Versturen lukte niet.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}

import { NextResponse } from 'next/server'
import { AFSPRAAK, afspraakSchema, datumTekst, soortLabel } from '@/lib/afspraak'

export const dynamic = 'force-dynamic'

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
    return NextResponse.json({ ok: false, fout: 'Versturen lukte niet.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}

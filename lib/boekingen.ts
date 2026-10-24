import { getStore } from '@netlify/blobs'
import { vandaag } from '@/lib/afspraak'

// Geboekte afspraakmomenten, bewaard in Netlify Blobs. Eén sleutel per moment: "2026-11-02_1100".
// Productie (schildersbedrijf040.nl) gebruikt de store "afspraken"; previews en branch-deploys "afspraken-test",
// zodat testboekingen nooit echte momenten blokkeren. Lokaal (geen Netlify) alles in het geheugen.
// Een moment weer vrijgeven: Netlify > Project > Blobs > store "afspraken" > de sleutel verwijderen.

export type Boeking = { naam: string; plaats: string; aangemaakt: string }

const sleutel = (datum: string, tijd: string) => `${datum}_${tijd.replace(':', '')}`
const uitSleutel = (k: string) => `${k.slice(0, 10)}T${k.slice(11, 13)}:${k.slice(13, 15)}`

const geheugen = new Map<string, Boeking>()

function store(host: string | null) {
  const productie = /^(www\.)?schildersbedrijf040\.nl$/.test(host ?? '')
  try {
    return getStore({ name: productie ? 'afspraken' : 'afspraken-test', consistency: 'strong' })
  } catch (e) {
    // Geen Netlify-omgeving (lokaal): alleen geheugen. In productie hoort dit niet te gebeuren.
    if (productie) console.error('[afspraak] Netlify Blobs niet beschikbaar, val terug op geheugen', e)
    return null
  }
}

// Alle bezette momenten vanaf vandaag, als "YYYY-MM-DDTHH:MM"
export async function bezetteMomenten(host: string | null): Promise<string[]> {
  const s = store(host)
  const keys = s ? (await s.list()).blobs.map((b) => b.key) : Array.from(geheugen.keys())
  const vanaf = vandaag()
  return keys.filter((k) => k.slice(0, 10) >= vanaf).map(uitSleutel).sort()
}

// Legt het moment vast. false = het moment was al bezet (atomair, ook bij twee gelijktijdige aanvragen).
export async function reserveer(host: string | null, datum: string, tijd: string, b: Boeking): Promise<boolean> {
  const k = sleutel(datum, tijd)
  const s = store(host)
  if (!s) {
    if (geheugen.has(k)) return false
    geheugen.set(k, b)
    return true
  }
  const r = await s.setJSON(k, b, { onlyIfNew: true })
  return r.modified
}

export async function geefVrij(host: string | null, datum: string, tijd: string) {
  const k = sleutel(datum, tijd)
  const s = store(host)
  if (s) await s.delete(k)
  else geheugen.delete(k)
}

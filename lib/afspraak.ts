import { z } from 'zod'

// =====================================================================================
// Afspraak "offerte aan huis": alles wat je later wilt aanpassen staat in dit blok.
// =====================================================================================
export const AFSPRAAK = {
  // Dagen waarop Jordy langskomt: 0 = zondag, 1 = maandag, 2 = dinsdag, 3 = woensdag, ...
  dagen: [1, 3],
  // Starttijden van de afspraken (laatste afspraak begint om 16:00 en eindigt om 17:00)
  slots: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
  // Vroegst te kiezen datum: zoveel werkdagen na vandaag (1 = morgen, of maandag als het vrijdag is)
  minWerkdagenVooruit: 1,
  // Laatst te kiezen datum: zoveel weken na vandaag
  maxWekenVooruit: 8,
  tijdzone: 'Europe/Amsterdam',

  // Actieregel in de popup (en op /diensten/winterschilder). Verdwijnt vanzelf na de datum `tot`.
  winteractie: {
    tekst: 'Winteractie: 10 tot 20% korting op binnenschilderwerk in november, december en januari.',
    tot: '2027-01-31',
  },

  // Automatisch openen: één keer per bezoeker, na X seconden of Y% scrollen (wat eerst komt)
  autoOpen: {
    aan: true,
    naSeconden: 20,
    naScrollProcent: 50,
    onthoudDagen: 30,
    opMobiel: true, // false = op mobiel alleen openen via de knoppen
    nietOp: ['/contact'],
  },

  // De aanvraag gaat via de eigen API-route (servercontrole) naar het bestaande Formspree-formulier
  formspree: 'https://formspree.io/f/mkgovyya',
}

// ---------- datumregels (gedeeld door popup en server) ----------

// Datum als 'YYYY-MM-DD' in de tijdzone van het bedrijf
export function vandaag(nu: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: AFSPRAAK.tijdzone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(nu)
}

// 'YYYY-MM-DD' <-> Date (12:00 UTC, zodat weekdag en optellen niet van zomertijd afhangen)
export function naarDate(iso: string): Date {
  const [j, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(j, m - 1, d, 12))
}
export function naarIso(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`
}
function plusDagen(iso: string, n: number): string {
  const d = naarDate(iso)
  d.setUTCDate(d.getUTCDate() + n)
  return naarIso(d)
}
const weekdag = (iso: string) => naarDate(iso).getUTCDay()

export function eersteDatum(nu: Date = new Date()): string {
  let d = vandaag(nu)
  let werkdagen = 0
  while (werkdagen < AFSPRAAK.minWerkdagenVooruit) {
    d = plusDagen(d, 1)
    if (weekdag(d) !== 0 && weekdag(d) !== 6) werkdagen++
  }
  return d
}

export function laatsteDatum(nu: Date = new Date()): string {
  return plusDagen(vandaag(nu), AFSPRAAK.maxWekenVooruit * 7)
}

export function isToegestaneDatum(iso: string, nu: Date = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false
  return AFSPRAAK.dagen.includes(weekdag(iso)) && iso >= eersteDatum(nu) && iso <= laatsteDatum(nu)
}

export function winteractieActief(nu: Date = new Date()): boolean {
  return vandaag(nu) <= AFSPRAAK.winteractie.tot
}

export function datumTekst(iso: string): string {
  return new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(naarDate(iso))
}

// ---------- validatie (gedeeld door popup en server) ----------

export const afspraakSchema = z.object({
  naam: z.string().trim().min(2, 'Vul uw naam in.').max(100),
  telefoon: z
    .string()
    .trim()
    .refine((t) => /^[+()\d\s-]+$/.test(t) && t.replace(/\D/g, '').length >= 10 && t.replace(/\D/g, '').length <= 15, 'Vul een geldig telefoonnummer in.'),
  email: z.string().trim().email('Vul een geldig e-mailadres in.').max(200),
  straat: z
    .string()
    .trim()
    .min(3, 'Vul straat en huisnummer in.')
    .max(150)
    .refine((t) => /\d/.test(t), 'Vul ook het huisnummer in.'),
  plaats: z.string().trim().min(2, 'Vul de plaats in.').max(100),
  omschrijving: z.string().trim().max(2000, 'Maximaal 2000 tekens.').optional().default(''),
  soort: z.enum(['binnen', 'buiten', 'beide'], { errorMap: () => ({ message: 'Kies binnen, buiten of beide.' }) }),
  datum: z.string().refine((d) => isToegestaneDatum(d), 'Kies een maandag of woensdag in de kalender.'),
  tijd: z.string().refine((t) => AFSPRAAK.slots.includes(t), 'Kies een tijdslot.'),
  privacy: z.literal(true, { errorMap: () => ({ message: 'Geef akkoord om verder te gaan.' }) }),
})

export type AfspraakInvoer = z.input<typeof afspraakSchema>
export type AfspraakVelden = keyof AfspraakInvoer

export const soortLabel: Record<'binnen' | 'buiten' | 'beide', string> = {
  binnen: 'Binnen',
  buiten: 'Buiten',
  beide: 'Binnen en buiten',
}

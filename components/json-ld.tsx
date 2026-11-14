import { TOON_JORDY } from '@/lib/jordy'

// Server-side JSON-LD, zodat het schema in de HTML staat (next/script zet het pas client-side neer).
// Open punten ([JORDY: ...], [INVULLEN: ...]) komen nooit in de structured data van productie.
export function JsonLd({ data }: { data: object }) {
  let json = JSON.stringify(data)
  if (!TOON_JORDY) json = json.replace(/\s*\[(?:JORDY|INVULLEN)[^\]]*\]/g, '')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json.replace(/</g, '\u003c') }} />
}

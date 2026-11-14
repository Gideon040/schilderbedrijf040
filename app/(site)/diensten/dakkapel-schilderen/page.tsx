import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images, sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'

const pad = '/diensten/dakkapel-schilderen'
const beschrijving = `Dakkapel laten schilderen: kozijnen en boeidelen ${prijsTekst.lakBuiten}, met houtrotcontrole. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: formats.dienst('Dakkapel schilderen'),
  beschrijving,
  pad,
  extra: { keywords: ['dakkapel schilderen', 'dakkapel laten schilderen', 'dakkapel schilderen kosten', 'boeidelen dakkapel schilderen'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost een dakkapel laten schilderen?',
    answer: `De kozijnen en boeidelen van een dakkapel vallen onder lakwerk buiten: ${prijsTekst.lakBuiten}, inclusief schuren, gronden en lak en exclusief btw. Zit er houtrot in, dan kost herstellen ${prijsTekst.houtrot}. Een steiger of hoogwerker, als die nodig is, staat apart in de offerte.`,
    link: { href: '/kosten/kozijnen-schilderen', tekst: 'Bekijk de prijsopbouw van lakwerk buiten.' },
  },
  {
    question: 'Waarom de dakkapel samen met de rest laten schilderen?',
    answer:
      'Een dakkapel zit hoog en is vaak alleen met een steiger of hoogwerker goed te bereiken. Wie de dakkapel samen met de kozijnen en boeidelen van de rest van het huis laat schilderen, betaalt die kosten één keer en krijgt een gelijk eindresultaat.',
  },
  {
    question: 'Wordt de dakkapel ook op houtrot gecontroleerd?',
    answer:
      'Ja. Boeidelen en de onderkant van kozijnen vangen veel water, waardoor daar vaak als eerste houtrot ontstaat. Schildersbedrijf040 controleert het hout voordat er geschilderd wordt en herstelt zacht hout eerst.',
    link: { href: '/diensten/houtrot-sanering', tekst: 'Meer over houtrot herstellen.' },
  },
  {
    question: 'Wanneer kan een dakkapel geschilderd worden?',
    answer:
      'Buitenschilderwerk vraagt droog weer en een droge ondergrond. Een dakkapel wordt daarom meestal in het voorjaar, de zomer of het vroege najaar geschilderd. In de winter plant Schildersbedrijf040 vooral binnenwerk.',
    link: { href: '/blog/wanneer-buiten-schilderen', tekst: 'Lees wanneer buiten schilderen kan.' },
  },
  {
    question: 'Welk btw-tarief geldt voor dakkapel schilderen?',
    answer:
      'Schilderwerk aan een woning die langer dan twee jaar als woning in gebruik is, valt onder 9% btw, inclusief de verf. Houtrot herstellen met nieuwe houten inzetstukken valt volgens de Belastingdienst onder 21%.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Meer over het btw-tarief.' },
  },
]

const pagina: DienstPagina = {
  slug: 'dakkapel-schilderen',
  naam: 'Dakkapel schilderen',
  h1: 'Dakkapel schilderen in Eindhoven',
  prijsSlug: 'dakkapel-schilderen',
  tabelTitel: 'dakkapel schilderen',
  heroTekst: (
    <p>
      Schildersbedrijf040 schildert dakkapellen in Eindhoven en omgeving: kozijnen, boeidelen en ander houtwerk, na een controle op houtrot. Het
      lakwerk buiten kost {prijsTekst.lakBuiten}, houtrot herstellen {prijsTekst.houtrot}. Na de gratis inspectie krijgt u een offerte met vaste
      prijs.
    </p>
  ),
  heroImg: { ...images.dakkapel, eigenAlt: true },
  sectieImg: sfeer.dakkapel,
  kerncijfers: [
    { waarde: prijsKort.lakBuiten, label: 'Per m² kozijnen en boeidelen' },
    { waarde: prijsKort.houtrot, label: 'Houtrot herstellen' },
    { waarde: 'Apart', label: 'Steiger in de offerte' },
    { waarde: '9%', label: 'Btw op schilderwerk' },
  ],
  watIs: {
    id: 'waarom-dakkapel-onderhouden',
    h2: 'Waarom een dakkapel op tijd laten schilderen?',
    body: (
      <>
        <p>
          Een dakkapel krijgt meer weer te verduren dan de rest van de gevel. Hij steekt uit het dak, vangt wind en regen van meerdere kanten en
          staat vaak volop in de zon. Een dakkapel heeft eigen kozijnen, boeiboorden en vaak een zinken of houten bekleding, en al die onderdelen
          hebben onderhoud nodig. Bladdert de verf of is het hout kaal, dan trekt er vocht in en ontstaat er houtrot.
        </p>
        <p>
          Omdat een dakkapel hoog zit, wordt onderhoud vaak uitgesteld. Dat maakt het uiteindelijk duurder: herstel van houtrot komt bovenop het
          schilderwerk. Wie de dakkapel op tijd laat schilderen, houdt het bij lakwerk. Schildersbedrijf040 controleert het hout altijd eerst op
          zachte plekken en herstelt die voordat er geschilderd wordt.
        </p>
        <p>
          Een opgeknapte dakkapel is vanaf de straat goed zichtbaar. Strakke, witte of gekleurde kozijnen en boeidelen geven het hele huis een
          verzorgde uitstraling, zeker als de dakkapel in dezelfde kleur wordt gezet als de kozijnen eronder.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'wat-kost-dakkapel-schilderen',
    h2: 'Wat kost dakkapel schilderen?',
    body: (
      <>
        <p>
          De kozijnen en boeidelen van een dakkapel worden geprijsd als lakwerk buiten: {prijsTekst.lakBuiten}, inclusief schuren, gronden en lak.
          Een dakkapel met samen 5 m² te lakken hout komt daarmee uit op {rekenvoorbeeld(5, PRIJSLIJST.lakwerkBuiten)}, exclusief btw. Houtrot
          herstellen kost {prijsTekst.houtrot}. Een steiger of hoogwerker, als die nodig is, staat apart in de offerte.
        </p>
        <p>
          De prijsopbouw van lakwerk buiten staat uitgebreid op de pagina{' '}
          <Link href="/kosten/kozijnen-schilderen">kosten kozijnen schilderen</Link>. Alle prijzen op een rij vindt u bij{' '}
          <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="dakkapel-en-buitenschilderwerk" className="h-section mt-6 scroll-mt-28">
        Dakkapel en buitenschilderwerk in één keer
      </h2>
      <p>
        Laat u de kozijnen, deuren en boeidelen van het huis toch al schilderen, neem de dakkapel dan mee. Dat scheelt in steiger- of
        ladderkosten en geeft een gelijk eindresultaat. Meer over het complete buitenwerk leest u bij{' '}
        <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link> en{' '}
        <Link href="/diensten/kozijnen-schilderen">kozijnen schilderen</Link>. Hoe vaak buitenschilderwerk nodig is, staat in het artikel{' '}
        <Link href="/blog/hoe-vaak-buitenschilderwerk">hoe vaak moet je buiten schilderen</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'onderdelen-dakkapel',
    h2: 'Wat wordt er aan een dakkapel geschilderd?',
    intro: 'Bij de inspectie bekijkt Jordy elk onderdeel van de dakkapel en de staat van het hout.',
    kaarten: [
      { titel: 'Kozijnen', beschrijving: 'Schuren, gronden en aflakken, met nieuwe kit waar de oude is gescheurd.', link: '/diensten/kozijnen-schilderen', linkTekst: 'Kozijnen schilderen' },
      { titel: 'Boeidelen', beschrijving: 'De randen langs het dak vangen veel water. Eerst controleren op houtrot, dan lakken.', link: '/diensten/buitenschilderwerk', linkTekst: 'Buitenschilderwerk' },
      { titel: 'Houtrot herstellen', beschrijving: `Zacht hout eerst herstellen: ${prijsTekst.houtrot}.`, link: '/diensten/houtrot-sanering', linkTekst: 'Houtrot sanering' },
    ],
  },
  werkwijze: {
    id: 'werkwijze-dakkapel',
    h2: 'Zo verloopt het schilderen van uw dakkapel',
    intro: 'Eerst het hout controleren, dan schilderen bij droog weer.',
    stappen: standaardStappen('de dakkapel'),
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw dakkapel?',
    tekst: 'Houtrotcontrole vooraf, Boonstoppel-verf en een vaste prijs met de steiger apart vermeld.',
    usps: standaardUsps(),
  },
  reviewTag: 'buitenschilderwerk',
  projectTag: null,
  projecten: [],
  faqs,
  faqTitel: 'Vragen over dakkapel schilderen',
  sfeer: { bg: sfeer.dakkapel, rij: [sfeer.kozijn, sfeer.jaren30, sfeer.villaHerfst] },
  blogs: ['hoe-vaak-buitenschilderwerk', 'wanneer-buiten-schilderen', 'kitnaden-vervangen'],
  cta: { titel: 'Dakkapel laten schilderen?', tekst: 'Vraag een gratis inspectie aan, inclusief controle op houtrot.' },
  schema: schemaVoor({
    slug: 'dakkapel-schilderen',
    pad,
    naam: 'Dakkapel schilderen',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Dakkapel schilderen', pad],
    ],
  }),
}

export default function DakkapelPage() {
  return <DienstTemplate d={pagina} />
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'

const pad = '/kosten/kozijnen-schilderen'
const beschrijving = `Kozijnen laten schilderen kost buiten ${prijsTekst.lakBuiten}, binnen ${prijsTekst.lakBinnen}. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: 'Kozijnen schilderen kosten | Schildersbedrijf040',
  beschrijving,
  pad,
  extra: { keywords: ['kozijnen schilderen kosten', 'kozijnen laten schilderen prijs', 'kosten kozijnen lakken', 'kozijnen schilderen prijs per m2'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost kozijnen schilderen?',
    answer: `Kozijnen schilderen valt onder lakwerk. Buiten kost dat bij Schildersbedrijf040 ${prijsTekst.lakBuiten}, binnen ${prijsTekst.lakBinnen}, inclusief schuren, gronden, lak en materiaal en exclusief btw.`,
  },
  {
    question: 'Waarom rekent Schildersbedrijf040 per m² en niet per kozijn?',
    answer:
      'Kozijnen verschillen enorm in maat: een klein toiletraam en een pui met meerdere ramen en een deur zijn allebei één kozijn. Een prijs per m² te lakken hout is eerlijker, omdat u dan betaalt voor wat er echt geschilderd wordt. Bij de inspectie meet Jordy het houtwerk op.',
  },
  {
    question: 'Wat als er houtrot in de kozijnen zit?',
    answer: `Houtrot wordt eerst hersteld, daarna geschilderd. Herstellen kost ${prijsTekst.houtrot}. Na herstel wordt het kozijn geschuurd, gegrond en afgelakt zoals de rest. Hoe eerder houtrot wordt ontdekt, hoe kleiner de reparatie.`,
    link: { href: '/diensten/houtrot-sanering', tekst: 'Meer over houtrot herstellen.' },
  },
  {
    question: 'Welk btw-tarief geldt op kozijnen schilderen?',
    answer:
      'Schilderen en lakken van kozijnen aan een woning die langer dan twee jaar als woning in gebruik is, valt onder 9% btw, inclusief materiaal. Houtrot herstellen met nieuwe houten inzetstukken of onderdorpels, en kozijnen vervangen, vallen volgens de Belastingdienst onder 21%.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Lees de btw-regels.' },
  },
  {
    question: 'Komen er steigerkosten bij?',
    answer:
      'Bij kozijnen op de begane grond meestal niet. Voor kozijnen op hoogte is soms een steiger of hoogwerker nodig; die kosten worden apart in de offerte vermeld, zodat u ziet waar de kosten zitten.',
  },
  {
    question: 'Hoe vaak moeten kozijnen buiten geschilderd worden?',
    answer:
      'Dat hangt af van de zon- en weerkant en de afwerking. Dekkend gelakte kozijnen gaan langer mee dan gebeitst hout. Wie op tijd laat schilderen, voorkomt dat er houtrot ontstaat en houdt de kosten laag.',
    link: { href: '/blog/hoe-vaak-buitenschilderwerk', tekst: 'Lees hoe vaak buitenschilderwerk nodig is.' },
  },
]

const pagina: DienstPagina = {
  slug: 'kosten-kozijnen-schilderen',
  naam: 'Kosten kozijnen schilderen',
  h1: 'Kosten kozijnen schilderen',
  kruimel: { naam: 'Kosten', href: '/kosten/wat-kost-een-schilder' },
  prijsSlug: 'kosten-kozijnen-schilderen',
  tabelTitel: 'kozijnen schilderen',
  heroTekst: (
    <p>
      Kozijnen laten schilderen kost bij Schildersbedrijf040 {prijsTekst.lakBuiten} buiten en {prijsTekst.lakBinnen} binnen, inclusief schuren,
      gronden en lak en exclusief btw. Zit er houtrot in het hout, dan kost herstellen {prijsTekst.houtrot}. De vaste prijs hoort u na de gratis
      inspectie.
    </p>
  ),
  heroImg: sfeer.kozijn,
  sectieImg: sfeer.houtrot,
  kerncijfers: [
    { waarde: prijsKort.lakBuiten, label: 'Per m² kozijnen buiten' },
    { waarde: prijsKort.lakBinnen, label: 'Per m² kozijnen binnen' },
    { waarde: prijsKort.houtrot, label: 'Houtrot herstellen' },
    { waarde: '9%', label: 'Btw op schilderwerk, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'prijsopbouw-kozijnen',
    h2: 'Hoe is de prijs van kozijnen schilderen opgebouwd?',
    body: (
      <>
        <p>
          Kozijnen schilderen is lakwerk en wordt geprijsd per m² te lakken hout. In die prijs zitten het schuren van de oude laag, het bijwerken
          van kale plekken met grondverf, de laklagen en het materiaal. Buiten ligt de prijs hoger ({prijsTekst.lakBuiten}) dan binnen (
          {prijsTekst.lakBinnen}), omdat buitenhout meer voorbereiding vraagt en de lak tegen regen, zon en vorst moet kunnen.
        </p>
        <p>
          Waar u binnen de bandbreedte uitkomt, hangt af van drie dingen. Ten eerste de staat van de oude verf: dof maar heel is sneller klaar dan
          bladderend tot op het hout. Ten tweede de vorm: kozijnen met veel glaslatten, roeden en profielen vragen meer kwastwerk per m² dan vlakke
          delen. Ten derde de bereikbaarheid: een kozijn op de begane grond is sneller gedaan dan een kozijn op de tweede verdieping.
        </p>
        <p>
          Houtrot en kitwerk staan los van het lakwerk. Houtrot herstellen kost {prijsTekst.houtrot}; dat gebeurt altijd vóór het schilderen,
          anders sluit de verf het vocht in. Hoe het lakken zelf verloopt, leest u op de pagina over{' '}
          <Link href="/diensten/kozijnen-schilderen">kozijnen schilderen</Link>.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'rekenvoorbeelden-kozijnen',
    h2: 'Rekenvoorbeelden kozijnen schilderen',
    body: (
      <>
        <p>Met de bandbreedtes uit de prijslijst, exclusief btw en exclusief houtrotherstel en steiger:</p>
        <ul>
          <li>Kozijnen buiten met samen 6 m² te lakken hout: {rekenvoorbeeld(6, PRIJSLIJST.lakwerkBuiten)}.</li>
          <li>Kozijnen buiten met samen 12 m² te lakken hout: {rekenvoorbeeld(12, PRIJSLIJST.lakwerkBuiten)}.</li>
          <li>Kozijnen binnen met samen 8 m² te lakken hout: {rekenvoorbeeld(8, PRIJSLIJST.lakwerkBinnen)}.</li>
        </ul>
        <p>
          Hoeveel m² hout uw kozijnen hebben, meet Jordy bij de inspectie op. Een volledig prijsoverzicht staat op de pagina{' '}
          <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="btw-per-onderdeel" className="h-section mt-6 scroll-mt-28">
        Btw per onderdeel
      </h2>
      <p>
        Op het schilderen en lakken van kozijnen aan een woning die langer dan twee jaar als woning in gebruik is, betaalt u 9% btw, ook over de
        verf en het voorbereidende werk. Houtrot herstellen met nieuwe houten inzetstukken of onderdorpels en het vervangen van kozijnen vallen
        volgens de Belastingdienst onder 21%. In de offerte staat daarom per post welk tarief geldt. Meer daarover in het artikel over het{' '}
        <Link href="/blog/btw-tarief-schilderwerk">btw-tarief voor schilderwerk</Link>.
      </p>
      <h2 id="op-tijd-is-goedkoper" className="h-section mt-6 scroll-mt-28">
        Op tijd schilderen is goedkoper
      </h2>
      <p>
        Het grootste prijsverschil zit niet in het schilderwerk, maar in wat er gebeurt als het te laat is. Een kozijn waarvan de verf dof is, is
        snel opnieuw gelakt. Een kozijn met houtrot vraagt eerst herstel, en dat komt bovenop het schilderwerk. Wie de kozijnen laat schilderen
        zodra de verf dof wordt of begint te bladderen, betaalt dus minder. In het artikel{' '}
        <Link href="/blog/beitsen-of-lakken">beitsen of lakken</Link> leest u welke afwerking het langst meegaat.
      </p>
    </>
  ),
  soorten: {
    id: 'wat-valt-onder-de-prijs',
    h2: 'Wat valt onder de prijs?',
    intro: 'Per onderdeel wat er in de prijs zit en wat apart in de offerte komt.',
    kaarten: [
      { titel: 'Lakwerk buiten', beschrijving: `Schuren, gronden en aflakken van kozijnen buiten: ${prijsTekst.lakBuiten}.`, link: '/diensten/kozijnen-schilderen', linkTekst: 'Werkwijze kozijnen' },
      { titel: 'Lakwerk binnen', beschrijving: `Kozijnen, deuren en plinten binnen: ${prijsTekst.lakBinnen}.`, link: '/diensten/lakwerk', linkTekst: 'Meer over lakwerk' },
      { titel: 'Houtrot herstellen', beschrijving: `Aangetast hout eerst herstellen: ${prijsTekst.houtrot}.`, link: '/diensten/houtrot-sanering', linkTekst: 'Houtrot sanering' },
      { titel: 'Steiger of hoogwerker', beschrijving: 'Alleen als het nodig is, apart vermeld in de offerte.', link: '/diensten/buitenschilderwerk', linkTekst: 'Buitenschilderwerk' },
    ],
  },
  werkwijze: {
    id: 'zo-krijgt-u-een-vaste-prijs',
    h2: 'Zo krijgt u een vaste prijs',
    intro: 'De offerte is gebaseerd op het gemeten houtwerk en de staat van uw kozijnen.',
    stappen: standaardStappen('de kozijnen en het hout'),
  },
  waarom: {
    h2: 'Waarom een offerte van Schildersbedrijf040?',
    tekst: 'Een vaste prijs vooraf, met houtrot en steiger apart vermeld, zodat u ziet waar de kosten zitten.',
    usps: standaardUsps(),
  },
  reviewTag: 'kozijnen-schilderen',
  projectTag: 'kozijnen-schilderen',
  projecten: [],
  faqs,
  faqTitel: 'Vragen over de kosten van kozijnen schilderen',
  sfeer: { bg: sfeer.rijtjeshuis, rij: [sfeer.kozijn, sfeer.entreeOranje, sfeer.houtrot] },
  blogs: ['beitsen-of-lakken', 'hoe-vaak-buitenschilderwerk', 'kitnaden-vervangen'],
  cta: { titel: 'Kozijnen laten schilderen?', tekst: 'Vraag een gratis inspectie aan en ontvang een offerte met vaste prijs.' },
  schema: schemaVoor({
    slug: 'kosten-kozijnen-schilderen',
    pad,
    naam: 'Kozijnen schilderen',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Kosten', '/kosten/wat-kost-een-schilder'],
      ['Kosten kozijnen schilderen', pad],
    ],
  }),
}

export default function KostenKozijnenPage() {
  return <DienstTemplate d={pagina} />
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'
import { hoofd, site } from '@/lib/site'

const pad = '/kosten/plafond-schilderen'
const beschrijving = `Plafond laten schilderen kost ${prijsTekst.wanden}, spuiten ${prijsTekst.latex}. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: 'Plafond schilderen kosten | Schildersbedrijf040',
  beschrijving,
  pad,
  extra: { keywords: ['plafond schilderen kosten', 'plafond laten schilderen prijs', 'plafond laten witten kosten', 'plafond spuiten kosten'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost het om een plafond te laten schilderen?',
    answer: `Een plafond laten schilderen kost bij Schildersbedrijf040 ${prijsTekst.wanden}, inclusief materiaal en exclusief btw. Laten spuiten met latex kost ${prijsTekst.latex}. Voor een plafond van 20 m² komt dat neer op ${rekenvoorbeeld(20, PRIJSLIJST.plafonds)} met de roller.`,
  },
  {
    question: 'Is een plafond duurder per m² dan een muur?',
    answer: `In de prijslijst van Schildersbedrijf040 hebben plafonds en wanden dezelfde bandbreedte: ${prijsTekst.wanden}. Een plafond kost wel vaker meer tijd per m² door het werken boven het hoofd en het afplakken langs wanden en lampen. Daarom zit een plafond in een volle kamer eerder hoger in de bandbreedte dan een plafond in een lege ruimte.`,
  },
  {
    question: 'Wanneer is spuiten voordeliger dan rollen bij een plafond?',
    answer:
      'Bij grote, vrije plafonds, zoals in een lege woning of nieuwbouw, of als meerdere kamers tegelijk worden gedaan. Spuiten geeft dan een egaal resultaat zonder rolbanen in het strijklicht. Bij één plafond in een ingerichte kamer is rollen vaak voordeliger, omdat er dan minder afgeplakt hoeft te worden.',
    link: { href: '/blog/latex-spuiten-of-rollen', tekst: 'Lees de vergelijking spuiten of rollen.' },
  },
  {
    question: 'Wat kost een plafond met vlekken of scheuren?',
    answer: `Vlekken, scheurtjes en oude verflagen vragen voorbereiding. Schuren kost ${prijsTekst.schuren}, voorstrijken ${prijsTekst.voorstrijken}. Jordy beoordeelt bij de inspectie of dat nodig is, zodat u alleen betaalt voor wat uw plafond echt nodig heeft.`,
  },
  {
    question: 'Moet ik zelf de kamer leeghalen?',
    answer:
      'Nee. Schildersbedrijf040 dekt meubels en vloeren af en plakt wanden, kozijnen en lichtpunten af. Het helpt wel als breekbare spullen en lampen vooraf zijn weggehaald; dat bespreekt Jordy bij de inspectie.',
  },
  {
    question: 'Hoe snel heb ik een prijs voor mijn plafond?',
    answer: `${hoofd(site.termijnen.reactie)} op werkdagen hoort u van Schildersbedrijf040. Na de gratis inspectie volgt ${site.termijnen.offerte} een offerte met een vaste prijs.`,
  },
]

const pagina: DienstPagina = {
  slug: 'kosten-plafond-schilderen',
  naam: 'Kosten plafond schilderen',
  h1: 'Kosten plafond schilderen',
  kruimel: { naam: 'Kosten', href: '/kosten/wat-kost-een-schilder' },
  prijsSlug: 'kosten-plafond-schilderen',
  tabelTitel: 'plafond schilderen',
  heroTekst: (
    <p>
      Een plafond laten schilderen kost bij Schildersbedrijf040 {prijsTekst.wanden}, inclusief materiaal en exclusief btw. Laten spuiten met latex
      kost {prijsTekst.latex}. Een plafond van 20 m² komt daarmee uit op {rekenvoorbeeld(20, PRIJSLIJST.plafonds)}. De vaste prijs hoort u na de
      gratis inspectie.
    </p>
  ),
  heroImg: sfeer.plafond,
  sectieImg: sfeer.woonkamer,
  kerncijfers: [
    { waarde: prijsKort.wanden, label: 'Per m² plafond rollen' },
    { waarde: prijsKort.latex, label: 'Per m² plafond spuiten' },
    { waarde: prijsKort.schuren, label: 'Per m² schuren, indien nodig' },
    { waarde: '9%', label: 'Btw, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'waaruit-bestaat-de-prijs',
    h2: 'Waaruit bestaat de prijs van een plafond?',
    body: (
      <>
        <p>
          De prijs van een geschilderd plafond hangt af van de oppervlakte, de staat van het plafond en de methode. In de prijs per m² zitten het
          afdekken van meubels en vloeren, het afplakken van wanden en lichtpunten, de verf en het schilderwerk zelf. Rollen kost{' '}
          {prijsTekst.wanden}, spuiten {prijsTekst.latex}.
        </p>
        <p>
          Voorbereiding wordt apart gerekend, omdat niet elk plafond die nodig heeft. Een plafond met oude, afbladderende verf of oneffenheden
          wordt eerst geschuurd ({prijsTekst.schuren}). Een zuigend plafond, bijvoorbeeld vers stucwerk of een plafond dat lang niet geschilderd
          is, wordt eerst voorgestreken ({prijsTekst.voorstrijken}). Zo krijgt de afwerklaag een egale ondergrond en ontstaan er geen vlekken of
          glansverschillen.
        </p>
        <p>
          Wat de prijs vooral beïnvloedt, is hoeveel er afgeplakt moet worden. Een plafond in een lege kamer is sneller klaar dan een plafond in een
          ingerichte woonkamer met inbouwspots, een vide of balken. Bij de inspectie meet Jordy het plafond op en ziet hij welke voorbereiding
          nodig is.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'rekenvoorbeelden-plafond',
    h2: 'Rekenvoorbeelden plafond schilderen',
    body: (
      <>
        <p>Met de bandbreedtes uit de prijslijst, exclusief btw en exclusief eventueel schuren of voorstrijken:</p>
        <ul>
          <li>Slaapkamer, plafond van 12 m²: {rekenvoorbeeld(12, PRIJSLIJST.plafonds)}.</li>
          <li>Woonkamer, plafond van 30 m²: {rekenvoorbeeld(30, PRIJSLIJST.plafonds)} met de roller, {rekenvoorbeeld(30, PRIJSLIJST.latexSpuiten)} gespoten.</li>
          <li>Hele benedenverdieping, 60 m² plafond: {rekenvoorbeeld(60, PRIJSLIJST.latexSpuiten)} gespoten.</li>
        </ul>
        <p>
          Voor een woning die langer dan twee jaar als woning in gebruik is, geldt 9% btw over het werk en de materialen. Alle prijzen op een rij
          staan op de pagina <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="zelf-of-laten-doen" className="h-section mt-6 scroll-mt-28">
        Zelf doen of laten doen?
      </h2>
      <p>
        Een plafond is het lastigste vlak in huis om zelf strak te krijgen: werken boven het hoofd is zwaar, en rolbanen en aanzetten zijn in
        strijklicht goed zichtbaar. Wilt u het toch zelf doen, dan staat de werkwijze in het artikel{' '}
        <Link href="/blog/plafond-schilderen">plafond schilderen</Link>. Laat u het doen, dan neemt Schildersbedrijf040 het afdekken, de
        voorbereiding en het opruimen voor zijn rekening. Plafonds en wanden in één keer laten doen is meestal voordeliger dan los, omdat het
        afdekken en afplakken dan één keer gebeurt. Meer over het werk zelf leest u bij{' '}
        <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link> en <Link href="/diensten/latex-spuiten">latex spuiten</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'rollen-of-spuiten',
    h2: 'Rollen of spuiten: prijs per situatie',
    intro: 'Welke methode het voordeligst is, hangt af van de ruimte. Jordy adviseert per kamer.',
    kaarten: [
      { titel: 'Eén plafond in een ingerichte kamer', beschrijving: `Meestal rollen: weinig afplakwerk, ${prijsTekst.wanden}.`, link: '/diensten/binnenschilderwerk', linkTekst: 'Binnenschilderwerk' },
      { titel: 'Hele verdieping of lege woning', beschrijving: `Meestal spuiten: egaal en snel, ${prijsTekst.latex}.`, link: '/kosten/latex-spuiten', linkTekst: 'Kosten latex spuiten' },
      { titel: 'Plafond met vlekken of scheuren', beschrijving: `Eerst schuren (${prijsTekst.schuren}) of voorstrijken (${prijsTekst.voorstrijken}).`, link: '/kosten/wat-kost-een-schilder', linkTekst: 'Alle prijzen' },
    ],
  },
  werkwijze: {
    id: 'zo-krijgt-u-een-vaste-prijs',
    h2: 'Zo krijgt u een vaste prijs',
    intro: 'De offerte is gebaseerd op de gemeten oppervlakte en de staat van uw plafond.',
    stappen: standaardStappen('het plafond'),
  },
  waarom: {
    h2: 'Waarom een offerte van Schildersbedrijf040?',
    tekst: 'Een vaste prijs vooraf, inclusief afdekken, materiaal en opruimen.',
    usps: standaardUsps(),
  },
  reviewTag: 'binnenschilderwerk',
  projectTag: 'latex-spuiten',
  projecten: [],
  faqs,
  faqTitel: 'Vragen over de kosten van een plafond',
  sfeer: { bg: sfeer.plafond, rij: [sfeer.woonkamer, sfeer.afplakken, sfeer.nieuwbouw] },
  blogs: ['plafond-schilderen', 'latex-spuiten-of-rollen', 'btw-tarief-schilderwerk'],
  cta: { titel: 'Plafond laten schilderen?', tekst: 'Vraag een gratis inspectie aan en ontvang een offerte met vaste prijs.' },
  schema: schemaVoor({
    slug: 'kosten-plafond-schilderen',
    pad,
    naam: 'Plafond schilderen',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Kosten', '/kosten/wat-kost-een-schilder'],
      ['Kosten plafond schilderen', pad],
    ],
  }),
}

export default function KostenPlafondPage() {
  return <DienstTemplate d={pagina} />
}

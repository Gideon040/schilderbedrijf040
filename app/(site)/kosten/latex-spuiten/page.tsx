import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'
import { site } from '@/lib/site'

const pad = '/kosten/latex-spuiten'
const beschrijving = `Latex spuiten kost ${prijsTekst.latex}, inclusief afplakken en materiaal. Met rekenvoorbeelden. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: 'Latex spuiten kosten per m² | Schildersbedrijf040',
  beschrijving,
  pad,
  extra: { keywords: ['latex spuiten kosten', 'latex spuiten prijs per m2', 'kosten muren spuiten', 'wat kost latex spuiten'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost latex spuiten per m²?',
    answer: `Latex spuiten kost bij Schildersbedrijf040 ${prijsTekst.latex} voor wanden en plafonds, inclusief afplakken en materiaal en exclusief btw. Moet de ondergrond eerst worden geschuurd of voorgestreken, dan komt daar ${prijsTekst.schuren} of ${prijsTekst.voorstrijken} bij.`,
  },
  {
    question: 'Is latex spuiten duurder dan rollen?',
    answer: `Per m² liggen de prijzen dicht bij elkaar: spuiten kost ${prijsTekst.latex}, wanden rollen ${prijsTekst.wanden}. Spuiten vraagt meer afplakwerk, maar is op grote, vrije oppervlakken sneller. Bij een hele woning of veel kamers tegelijk valt spuiten daardoor vaak gunstig uit; voor één wand in een ingerichte kamer is rollen meestal handiger.`,
    link: { href: '/blog/latex-spuiten-of-rollen', tekst: 'Lees de vergelijking spuiten of rollen.' },
  },
  {
    question: 'Zit het afplakken bij de prijs inbegrepen?',
    answer:
      'Ja. In de prijs per m² zitten het afplakken van kozijnen, deuren, vloeren en lichtpunten, het materiaal en het spuitwerk zelf. Schuren en voorstrijken staan apart, omdat niet elke ondergrond dat nodig heeft.',
  },
  {
    question: 'Welk btw-tarief geldt voor latex spuiten?',
    answer:
      'In een woning die langer dan twee jaar als woning in gebruik is, geldt 9% btw over het werk en de materialen. In een nieuwbouwwoning die korter dan twee jaar in gebruik is, geldt 21%.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Meer over het btw-tarief.' },
  },
  {
    question: 'Waarom verschilt de prijs per m² tussen woningen?',
    answer:
      'Vooral door de ondergrond en het afplakwerk. Gladde, lege ruimtes met weinig kozijnen zijn sneller klaar dan kamers met veel hoeken, ramen en lichtpunten. Ook herstel van scheuren en gaatjes in het stucwerk telt mee.',
  },
  {
    question: 'Hoe krijg ik een vaste prijs voor latex spuiten?',
    answer: `Vraag een gratis inspectie aan. Jordy meet de wanden en plafonds op en bekijkt de ondergrond. ${site.termijnen.offerte.charAt(0).toUpperCase() + site.termijnen.offerte.slice(1)} daarna ontvangt u een offerte met een vaste prijs.`,
  },
]

const pagina: DienstPagina = {
  slug: 'kosten-latex-spuiten',
  naam: 'Kosten latex spuiten',
  h1: 'Kosten latex spuiten per m²',
  kruimel: { naam: 'Kosten', href: '/kosten/wat-kost-een-schilder' },
  prijsSlug: 'kosten-latex-spuiten',
  tabelTitel: 'latex spuiten',
  heroTekst: (
    <p>
      Latex spuiten kost bij Schildersbedrijf040 {prijsTekst.latex} voor wanden en plafonds, inclusief afplakken en materiaal en exclusief btw.
      Een woonkamer met 60 m² wanden en plafond komt daarmee uit op {rekenvoorbeeld(60, PRIJSLIJST.latexSpuiten)}. De vaste prijs hoort u na de
      gratis inspectie.
    </p>
  ),
  heroImg: sfeer.nieuwbouw,
  sectieImg: sfeer.afplakken,
  kerncijfers: [
    { waarde: prijsKort.latex, label: 'Per m² wanden en plafonds' },
    { waarde: prijsKort.schuren, label: 'Per m² schuren, indien nodig' },
    { waarde: prijsKort.voorstrijken, label: 'Per m² voorstrijken' },
    { waarde: '9%', label: 'Btw, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'prijsopbouw-latex-spuiten',
    h2: 'Hoe is de prijs van latex spuiten opgebouwd?',
    body: (
      <>
        <p>
          De prijs van latex spuiten bestaat uit drie delen: het afplakken, het materiaal en het spuitwerk zelf. Die drie zitten samen in de prijs
          per m² van {prijsTekst.latex}. Daarnaast kan de ondergrond voorbereiding nodig hebben. Een muur met oude, loszittende verf of
          oneffenheden wordt eerst geschuurd ({prijsTekst.schuren}); vers stucwerk of een zuigende muur wordt eerst voorgestreken (
          {prijsTekst.voorstrijken}). Zo betaalt u alleen voor de voorbereiding die uw muren echt nodig hebben.
        </p>
        <p>
          Afplakken is bij spuiten het grootste deel van het werk. Kozijnen, deuren, vloeren, stopcontacten en lichtpunten worden zorgvuldig
          afgedekt, zodat alleen de wanden en plafonds verf krijgen. Hoe meer ramen, deuren en hoeken een ruimte heeft, hoe meer afplakwerk. Een
          lege nieuwbouwkamer met gladde wanden zit daarom eerder onderin de bandbreedte, een ingerichte kamer met veel kozijnen hoger.
        </p>
        <p>
          Hoe het spuiten zelf in zijn werk gaat, van afplakken tot opleveren, leest u op de pagina over{' '}
          <Link href="/diensten/latex-spuiten">latex spuiten</Link>.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'rekenvoorbeelden-latex-spuiten',
    h2: 'Rekenvoorbeelden latex spuiten',
    body: (
      <>
        <p>Een paar voorbeelden met de bandbreedte uit de prijslijst, exclusief btw en exclusief eventueel schuren of voorstrijken:</p>
        <ul>
          <li>Slaapkamer met 35 m² wanden en plafond: {rekenvoorbeeld(35, PRIJSLIJST.latexSpuiten)}.</li>
          <li>Woonkamer met 60 m² wanden en plafond: {rekenvoorbeeld(60, PRIJSLIJST.latexSpuiten)}.</li>
          <li>Benedenverdieping met 120 m²: {rekenvoorbeeld(120, PRIJSLIJST.latexSpuiten)}.</li>
        </ul>
        <p>
          Moet alles eerst worden voorgestreken, tel dan {prijsTekst.voorstrijken} op. Voor een woning die langer dan twee jaar als woning in
          gebruik is, geldt 9% btw. Alle andere prijzen staan op de pagina{' '}
          <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="spuiten-of-rollen-prijs" className="h-section mt-6 scroll-mt-28">
        Spuiten of rollen: wat is voordeliger?
      </h2>
      <p>
        Per m² liggen spuiten ({prijsTekst.latex}) en rollen ({prijsTekst.wanden}) dicht bij elkaar. Het verschil zit in de situatie. Bij veel
        vierkante meter tegelijk, zoals een hele verdieping of een lege woning, is spuiten sneller en egaler, en het afplakwerk wordt dan over veel
        meters verdeeld. Bij één wand in een kamer die vol staat, kost het afplakken relatief veel en is rollen vaak de betere keuze. Jordy
        adviseert per ruimte welke methode het voordeligst uitvalt. De uitgebreide vergelijking staat in het artikel{' '}
        <Link href="/blog/latex-spuiten-of-rollen">latex spuiten of rollen</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'wat-valt-onder-de-prijs',
    h2: 'Wat valt onder de prijs?',
    intro: 'Zo ziet u per onderdeel wat er in de prijs zit en wat apart wordt gerekend.',
    kaarten: [
      { titel: 'Afplakken', beschrijving: 'Kozijnen, deuren, vloeren en lichtpunten afdekken. Inbegrepen in de prijs per m².', link: '/diensten/latex-spuiten', linkTekst: 'Werkwijze latex spuiten' },
      { titel: 'Materiaal', beschrijving: 'De latex muurverf voor wanden en plafonds. Inbegrepen in de prijs per m².', link: '/diensten/latex-spuiten', linkTekst: 'Werkwijze latex spuiten' },
      { titel: 'Schuren', beschrijving: `Alleen als de ondergrond dat nodig heeft: ${prijsTekst.schuren}.`, link: '/kosten/wat-kost-een-schilder', linkTekst: 'Alle prijzen' },
      { titel: 'Voorstrijken', beschrijving: `Bij vers stucwerk of zuigende muren: ${prijsTekst.voorstrijken}.`, link: '/kosten/wat-kost-een-schilder', linkTekst: 'Alle prijzen' },
    ],
  },
  werkwijze: {
    id: 'zo-krijgt-u-een-vaste-prijs',
    h2: 'Zo krijgt u een vaste prijs',
    intro: 'De prijs in de offerte is gebaseerd op de gemeten vierkante meters en de staat van uw muren.',
    stappen: standaardStappen('de wanden en plafonds'),
  },
  waarom: {
    h2: 'Waarom een offerte van Schildersbedrijf040?',
    tekst: 'U krijgt een vaste prijs per klus, gebaseerd op de echte maten en ondergrond, zonder kosten achteraf.',
    usps: standaardUsps(),
  },
  reviewTag: 'latex-spuiten',
  projectTag: 'latex-spuiten',
  projecten: [],
  faqs,
  faqTitel: 'Vragen over de kosten van latex spuiten',
  sfeer: { bg: sfeer.nieuwbouw, rij: [sfeer.afplakken, sfeer.plafond, sfeer.wandHalverwege] },
  blogs: ['latex-spuiten-of-rollen', 'btw-tarief-schilderwerk'],
  cta: { titel: 'Wat kost uw spuitwerk?', tekst: 'Vraag een gratis inspectie aan en ontvang een offerte met vaste prijs per m².' },
  schema: schemaVoor({
    slug: 'kosten-latex-spuiten',
    prijsSlug: 'kosten-latex-spuiten',
    pad,
    naam: 'Latex spuiten',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Kosten', '/kosten/wat-kost-een-schilder'],
      ['Kosten latex spuiten', pad],
    ],
  }),
}

export default function KostenLatexSpuitenPage() {
  return <DienstTemplate d={pagina} />
}

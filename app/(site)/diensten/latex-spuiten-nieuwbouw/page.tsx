import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'

const pad = '/diensten/latex-spuiten-nieuwbouw'
const beschrijving = `Nieuwbouwwoning laten spuiten: wanden en plafonds ${prijsTekst.latex}, voor u erin trekt. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: 'Latex spuiten nieuwbouw | Schildersbedrijf040',
  beschrijving,
  pad,
  extra: { keywords: ['latex spuiten nieuwbouw', 'nieuwbouw spuiten', 'nieuwbouwwoning laten spuiten', 'muren spuiten nieuwbouw eindhoven'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost latex spuiten in een nieuwbouwwoning?',
    answer: `Latex spuiten kost bij Schildersbedrijf040 ${prijsTekst.latex}, inclusief afplakken en materiaal en exclusief btw. Vers stucwerk wordt eerst voorgestreken (${prijsTekst.voorstrijken}). Nieuwe, gladde wanden zitten doorgaans onderin de bandbreedte, omdat er minder voorbereiding nodig is.`,
    link: { href: '/kosten/latex-spuiten', tekst: 'Bekijk de prijsopbouw van latex spuiten.' },
  },
  {
    question: 'Wanneer kan ik mijn nieuwbouwwoning het beste laten spuiten?',
    answer:
      'Het liefst na de oplevering en vóór de verhuizing. Een lege woning is snel af te plakken, en zonder meubels en vloeren kunnen wanden en plafonds in één keer worden gespoten. Plan het werk daarom zodra u de sleutel heeft.',
  },
  {
    question: 'Welk btw-tarief geldt voor nieuwbouw?',
    answer:
      'Voor een woning die korter dan twee jaar als woning in gebruik is, geldt 21% btw op het schilderwerk. Het lage tarief van 9% geldt pas als de woning twee jaar of langer als woning in gebruik is.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Lees de btw-regels.' },
  },
  {
    question: 'Moet vers stucwerk eerst drogen?',
    answer:
      'Ja. Nieuw stucwerk moet goed droog zijn voordat het wordt voorgestreken en gespoten. Bij de inspectie bekijkt Jordy de wanden en plafonds en spreekt hij af wanneer er kan worden begonnen.',
  },
  {
    question: 'Kunnen wanden en plafonds een andere kleur krijgen?',
    answer:
      'Ja. In de bungalow in Best zijn de plafonds en de wanden in een andere kleur gespoten. Een strakke scheiding tussen plafond en wand ontstaat bij het afplakken.',
    link: { href: '/projecten/bungalow-best', tekst: 'Bekijk het project.' },
  },
  {
    question: 'Is spuiten beter dan rollen in een nieuwbouwwoning?',
    answer:
      'In een lege woning met grote, gladde vlakken is spuiten sneller en geeft het een egaal resultaat zonder rolbanen. Voor één wand in een ingerichte kamer is rollen vaak handiger.',
    link: { href: '/blog/latex-spuiten-of-rollen', tekst: 'Lees de vergelijking spuiten of rollen.' },
  },
]

const pagina: DienstPagina = {
  slug: 'latex-spuiten-nieuwbouw',
  naam: 'Latex spuiten nieuwbouw',
  h1: 'Latex spuiten in uw nieuwbouwwoning',
  prijsSlug: 'latex-spuiten-nieuwbouw',
  tabelTitel: 'latex spuiten nieuwbouw',
  heroTekst: (
    <p>
      Een nieuwbouwwoning krijgt u vaak met kaal of alleen gestuct werk opgeleverd. Schildersbedrijf040 spuit alle wanden en plafonds in één keer
      af met latex, voor {prijsTekst.latex}, inclusief afplakken. Het liefst nadat u de sleutel heeft en voordat u erin trekt.
    </p>
  ),
  heroImg: sfeer.nieuwbouw,
  sectieImg: sfeer.afplakken,
  kerncijfers: [
    { waarde: prijsKort.latex, label: 'Per m² wanden en plafonds' },
    { waarde: prijsKort.voorstrijken, label: 'Per m² voorstrijken' },
    { waarde: '21%', label: 'Btw, woning jonger dan 2 jaar' },
    { waarde: '1 keer', label: 'Alles in één ronde' },
  ],
  watIs: {
    id: 'waarom-nieuwbouw-spuiten',
    h2: 'Waarom een nieuwbouwwoning laten spuiten?',
    body: (
      <>
        <p>
          Bij een nieuwbouwwoning zijn de wanden en plafonds vaak kaal gestuct of alleen voorzien van een eerste laag. Voordat u de vloeren laat
          leggen en de meubels binnenkomen, is het hét moment om alles af te werken. Een lege woning is snel af te plakken en wanden en plafonds
          kunnen in één ronde worden gedaan.
        </p>
        <p>
          Latex spuiten past daar goed bij. Met een airless spuitmachine komt de verf als fijne nevel op de wanden en plafonds, zonder rolbanen of
          kwaststreken. Op grote, vrije vlakken is spuiten sneller dan rollen. Omdat nieuwe muren en plafonds doorgaans glad en schoon zijn, is er
          minder voorbereiding nodig dan in een bestaande woning.
        </p>
        <p>
          Wat wel belangrijk is: vers stucwerk zuigt sterk. Daarom wordt het eerst voorgestreken, zodat de afwerklaag egaal opdroogt zonder vlekken.
          Hoe de prijs is opgebouwd, staat op de pagina <Link href="/kosten/latex-spuiten">kosten latex spuiten</Link>.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'wat-kost-nieuwbouw-spuiten',
    h2: 'Wat kost een nieuwbouwwoning spuiten?',
    body: (
      <>
        <p>
          Latex spuiten kost {prijsTekst.latex}, inclusief afplakken en materiaal. Voorstrijken van vers stucwerk kost {prijsTekst.voorstrijken}.
          Een woning met 250 m² wanden en plafonds komt daarmee uit op {rekenvoorbeeld(250, PRIJSLIJST.latexSpuiten)} voor het spuitwerk, exclusief
          btw.
        </p>
        <p>
          Let op de btw: voor een woning die korter dan twee jaar als woning in gebruik is, geldt 21%. Na twee jaar geldt 9%. Meer daarover in het
          artikel over het <Link href="/blog/btw-tarief-schilderwerk">btw-tarief voor schilderwerk</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="nieuwbouw-in-de-regio" className="h-section mt-6 scroll-mt-28">
        Nieuwbouw in Eindhoven en omgeving
      </h2>
      <p>
        In nieuwbouwwijken zoals Zilverackers in Veldhoven en Meerhoven in Eindhoven worden veel woningen opgeleverd met wanden en plafonds die nog
        afgewerkt moeten worden. Schildersbedrijf040 werkt in de hele regio; lees meer over de schilder in{' '}
        <Link href="/locaties/veldhoven">Veldhoven</Link> en <Link href="/locaties/meerhoven">Meerhoven</Link>. Ook kozijnen, deuren en de trap
        kunnen in dezelfde planning worden meegenomen: zie <Link href="/diensten/lakwerk">lakwerk</Link> en{' '}
        <Link href="/diensten/trap-schilderen">trap schilderen</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'wat-wordt-gespoten',
    h2: 'Wat wordt er gespoten?',
    intro: 'In een lege nieuwbouwwoning kunnen alle wanden en plafonds in één keer worden afgewerkt.',
    kaarten: [
      { titel: 'Wanden', beschrijving: 'Alle wanden in één kleur of per ruimte een eigen kleur.', link: '/diensten/latex-spuiten', linkTekst: 'Meer over latex spuiten' },
      { titel: 'Plafonds', beschrijving: 'Plafonds egaal gespoten, zonder rolbanen in het strijklicht.', link: '/kosten/plafond-schilderen', linkTekst: 'Kosten plafond' },
      { titel: 'Voorstrijken', beschrijving: `Vers stucwerk eerst voorstrijken: ${prijsTekst.voorstrijken}.`, link: '/kosten/latex-spuiten', linkTekst: 'Prijsopbouw' },
    ],
  },
  werkwijze: {
    id: 'werkwijze-nieuwbouw',
    h2: 'Zo verloopt het spuiten van uw nieuwbouwwoning',
    intro: 'Van inspectie na de oplevering tot een woning die klaar is voor de verhuizing.',
    stappen: standaardStappen('de wanden, plafonds en het stucwerk'),
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw nieuwbouwwoning?',
    tekst: 'Alle wanden en plafonds in één ronde, met een vaste prijs vooraf.',
    usps: standaardUsps(),
  },
  reviewTag: 'latex-spuiten',
  projectTag: 'latex-spuiten',
  projecten: [],
  faqs,
  faqTitel: 'Vragen over latex spuiten in nieuwbouw',
  sfeer: { bg: sfeer.nieuwbouw, rij: [sfeer.afplakken, sfeer.plafond, sfeer.woonkamer] },
  blogs: ['latex-spuiten-of-rollen', 'btw-tarief-schilderwerk', 'plafond-schilderen'],
  cta: { titel: 'Nieuwbouwwoning laten spuiten?', tekst: 'Vraag een gratis inspectie aan, het liefst kort na de oplevering.' },
  schema: schemaVoor({
    slug: 'latex-spuiten-nieuwbouw',
    pad,
    naam: 'Latex spuiten nieuwbouw',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Latex spuiten nieuwbouw', pad],
    ],
  }),
}

export default function LatexNieuwbouwPage() {
  return <DienstTemplate d={pagina} />
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { prijsKort, prijsTekst } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'
import { site } from '@/lib/site'

const pad = '/diensten/vve-en-zakelijk'
const beschrijving = `Schilder voor VvE en bedrijf: trappenhuis, gevel, kantoor of winkel, in fases gepland. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: 'Schilderwerk VvE en zakelijk Eindhoven | Schildersbedrijf040',
  beschrijving,
  pad,
  extra: { keywords: ['schilderwerk vve', 'schilder vve eindhoven', 'schilderwerk bedrijfspand', 'zakelijk schilderwerk eindhoven', 'schilder kantoor'] },
})

const faqs: Faq[] = [
  {
    question: 'Schildert Schildersbedrijf040 ook voor een VvE?',
    answer:
      'Ja. Schildersbedrijf040 schildert gemeenschappelijke ruimten zoals trappenhuizen, hallen en galerijen, en het buitenwerk van appartementengebouwen zoals kozijnen, deuren en boeidelen. De offerte wordt per onderdeel opgesteld, zodat het bestuur die kan voorleggen aan de leden.',
  },
  {
    question: 'Kan het werk buiten kantooruren worden uitgevoerd?',
    answer:
      'Bij kantoren, praktijkruimtes en winkels plant Schildersbedrijf040 het schilderwerk buiten kantooruren of in fases, zodat uw bedrijfsvoering zo min mogelijk wordt verstoord. Welke planning past, bespreekt Jordy bij de inspectie.',
  },
  {
    question: 'Welk btw-tarief geldt voor een VvE of bedrijf?',
    answer:
      'Voor schilderwerk aan woningen die langer dan twee jaar als woning in gebruik zijn, en aan de gemeenschappelijke ruimten van een appartementengebouw, geldt 9% btw. Voor bedrijfsruimten geldt 21%. Bij een gemengd pand geldt sinds 1 juli 2025 9% alleen voor het woongedeelte.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Lees de btw-regels.' },
  },
  {
    question: 'Wat kost schilderwerk voor een VvE of bedrijf?',
    answer: `Schildersbedrijf040 rekent met dezelfde prijslijst: muren en plafonds binnen ${prijsTekst.wanden}, latex spuiten ${prijsTekst.latex}, gevel ${prijsTekst.gevel} en lakwerk buiten ${prijsTekst.lakBuiten}, exclusief btw. Na de inspectie krijgt u een vaste prijs per onderdeel.`,
    link: { href: '/kosten/wat-kost-een-schilder', tekst: 'Bekijk alle prijzen.' },
  },
  {
    question: 'Is latex spuiten geschikt voor grote ruimtes?',
    answer:
      'Ja. Voor grote, vrije oppervlakken zoals trappenhuizen, gangen en kantoorvloeren is airless latex spuiten een optie: het is sneller dan rollen en geeft een egaal resultaat.',
    link: { href: '/diensten/latex-spuiten', tekst: 'Meer over latex spuiten.' },
  },
  {
    question: 'Wie is het aanspreekpunt tijdens het werk?',
    answer: `Eigenaar Jordy Jacobs is het vaste aanspreekpunt, van inspectie tot oplevering. Op aanvragen reageert Schildersbedrijf040 ${site.termijnen.reactie} op werkdagen.`,
  },
]

const pagina: DienstPagina = {
  slug: 'vve-en-zakelijk',
  naam: 'VvE en zakelijk',
  h1: 'Schilderwerk voor VvE en zakelijk',
  prijsSlug: 'vve-en-zakelijk',
  tabelTitel: 'VvE en zakelijk',
  heroTekst: (
    <p>
      Schildersbedrijf040 schildert voor verenigingen van eigenaren en bedrijven in Eindhoven en omgeving: trappenhuizen, galerijen, gevels en
      kozijnen, en kantoren, praktijkruimtes en winkels. Het werk wordt in fases of buiten kantooruren gepland, met een vaste prijs per onderdeel na
      een gratis inspectie.
    </p>
  ),
  heroImg: sfeer.appartementen,
  sectieImg: sfeer.witteGevels,
  kerncijfers: [
    { waarde: prijsKort.wanden, label: 'Per m² wanden binnen' },
    { waarde: prijsKort.gevel, label: 'Per m² gevel' },
    { waarde: 'In fases', label: 'Planning rond uw bedrijf' },
    { waarde: '9% of 21%', label: 'Btw: woning of bedrijf' },
  ],
  watIs: {
    id: 'schilderwerk-voor-vve',
    h2: 'Schilderwerk voor een VvE',
    body: (
      <>
        <p>
          Een vereniging van eigenaren is verantwoordelijk voor het onderhoud van de gemeenschappelijke delen: het trappenhuis, de hal, galerijen
          en het buitenwerk zoals kozijnen, deuren en boeidelen. Goed onderhoud houdt het gebouw verzorgd en voorkomt dat kleine schade aan hout en
          verf uitgroeit tot dure reparaties.
        </p>
        <p>
          Voor een bestuur is het belangrijk om vooraf te weten wat het werk kost en wat er precies gebeurt. Schildersbedrijf040 komt gratis kijken
          en maakt een offerte met een vaste prijs per onderdeel. Zo kan het bestuur de kosten helder voorleggen aan de leden en, als dat nodig is,
          kiezen welke onderdelen nu en welke later worden gedaan.
        </p>
        <p>
          In trappenhuizen en hallen is slijtvaste verf belangrijk, omdat die ruimtes intensief worden gebruikt. Voor grote, vrije wanden en
          plafonds is <Link href="/diensten/latex-spuiten">latex spuiten</Link> een snelle manier om egaal af te werken. Voor het buitenwerk geldt
          dezelfde aanpak als bij woningen: eerst het hout controleren op houtrot, dan schuren, gronden en lakken. Meer daarover leest u bij{' '}
          <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link>.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'zakelijk-schilderwerk',
    h2: 'Schilderwerk voor bedrijven',
    body: (
      <>
        <p>
          Kantoren, praktijkruimtes en winkels vragen om schilderwerk dat representatief is en tegen intensief gebruik kan. Schildersbedrijf040
          plant het werk buiten kantooruren of in fases, zodat uw bedrijfsvoering zo min mogelijk wordt verstoord. Voor grote oppervlakken is
          airless spuiten een optie.
        </p>
        <p>
          De prijzen komen uit dezelfde prijslijst als voor particulieren: muren en plafonds {prijsTekst.wanden}, latex spuiten {prijsTekst.latex},
          gevel {prijsTekst.gevel} en lakwerk buiten {prijsTekst.lakBuiten}, exclusief btw. Voor bedrijfsruimten geldt 21% btw. Alle prijzen staan
          op de pagina <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="btw-vve-en-zakelijk" className="h-section mt-6 scroll-mt-28">
        Btw voor VvE, gemengde panden en bedrijven
      </h2>
      <p>
        Voor schilderwerk aan woningen die langer dan twee jaar als woning in gebruik zijn, geldt 9% btw, ook voor de gemeenschappelijke ruimten van
        een appartementengebouw. Voor bedrijfsruimten geldt 21%. Bij een pand met wonen en werken, zoals winkels met woningen erboven, geldt sinds 1
        juli 2025 het lage tarief alleen voor het woongedeelte. In de offerte staat per onderdeel welk tarief van toepassing is. Meer in het artikel
        over het <Link href="/blog/btw-tarief-schilderwerk">btw-tarief voor schilderwerk</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'wat-schildert-schildersbedrijf040',
    h2: 'Wat schildert Schildersbedrijf040 voor VvE en bedrijf?',
    intro: 'Van het trappenhuis tot de gevel, met een vaste prijs per onderdeel.',
    kaarten: [
      { titel: 'Trappenhuizen en hallen', beschrijving: 'Wanden, plafonds en lakwerk in gemeenschappelijke ruimten, met slijtvaste verf.', link: '/diensten/binnenschilderwerk', linkTekst: 'Binnenschilderwerk' },
      { titel: 'Kozijnen en deuren', beschrijving: 'Buitenkozijnen, voordeuren en galerijdeuren, na controle op houtrot.', link: '/diensten/kozijnen-schilderen', linkTekst: 'Kozijnen schilderen' },
      { titel: 'Gevels', beschrijving: `Gevels schilderen: ${prijsTekst.gevel}, exclusief steiger.`, link: '/diensten/gevel-schilderen', linkTekst: 'Gevel schilderen' },
      { titel: 'Kantoren en winkels', beschrijving: 'Binnenwerk buiten kantooruren of in fases, ook met airless spuiten.', link: '/diensten/latex-spuiten', linkTekst: 'Latex spuiten' },
    ],
  },
  werkwijze: {
    id: 'werkwijze-vve-zakelijk',
    h2: 'Zo verloopt een opdracht',
    intro: 'Van inspectie tot oplevering, met een planning die past bij de bewoners of uw bedrijf.',
    stappen: standaardStappen('het pand'),
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor VvE en zakelijk?',
    tekst: 'Een vaste prijs per onderdeel, één aanspreekpunt en een planning rond uw bedrijfsvoering.',
    usps: standaardUsps(),
  },
  reviewTag: 'buitenschilderwerk',
  projectTag: null,
  projecten: [],
  faqs,
  faqTitel: 'Vragen over schilderwerk voor VvE en bedrijf',
  sfeer: { bg: sfeer.appartementen, rij: [sfeer.witteGevels, sfeer.binnendeuren, sfeer.nieuwbouw] },
  blogs: ['btw-tarief-schilderwerk', 'hoe-vaak-buitenschilderwerk'],
  cta: { titel: 'Offerte voor uw VvE of bedrijf?', tekst: 'Vraag een gratis inspectie aan en ontvang een offerte met vaste prijs per onderdeel.' },
  schema: schemaVoor({
    slug: 'vve-en-zakelijk',
    pad,
    naam: 'Schilderwerk voor VvE en zakelijk',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['VvE en zakelijk', pad],
    ],
  }),
}

export default function VveZakelijkPage() {
  return <DienstTemplate d={pagina} />
}

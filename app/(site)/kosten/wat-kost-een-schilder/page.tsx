import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { meta } from '@/lib/meta'
import { PRIJSLIJST, prijsKort, prijsTekst, rekenvoorbeeld } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'
import { site } from '@/lib/site'

const pad = '/kosten/wat-kost-een-schilder'
const beschrijving = `Wat kost een schilder? Muren ${prijsTekst.wanden}, gevel ${prijsTekst.gevel}, kozijnen ${prijsTekst.lakBuiten}. Gratis inspectie en vaste prijs.`

export const metadata: Metadata = meta({
  titel: 'Wat kost een schilder? Prijzen per m² in 2026',
  beschrijving,
  pad,
  extra: { keywords: ['wat kost een schilder', 'schilder kosten', 'schilder prijs per m2', 'kosten schilderwerk', 'offerte schilderwerk'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost een schilder per m²?',
    answer: `Bij Schildersbedrijf040 kost het schilderen van muren en plafonds binnen ${prijsTekst.wanden}, latex spuiten ${prijsTekst.latex} en een gevel schilderen ${prijsTekst.gevel}. Lakwerk aan kozijnen, deuren en plinten kost binnen ${prijsTekst.lakBinnen} en buiten ${prijsTekst.lakBuiten}. Alle bedragen zijn indicatief, inclusief materiaal en exclusief btw.`,
  },
  {
    question: 'Rekent Schildersbedrijf040 per uur of per m²?',
    answer:
      'Schildersbedrijf040 werkt met een vaste prijs per klus. Die prijs wordt na de gratis inspectie berekend op basis van de oppervlakken en de staat van de ondergrond, en staat vooraf in de offerte. Zo weet u wat u betaalt, ook als een klus langer duurt dan gepland.',
  },
  {
    question: 'Welk btw-tarief betaal ik op schilderwerk?',
    answer:
      'Voor schilderwerk aan een woning die langer dan twee jaar als woning in gebruik is, geldt 9% btw. Dat tarief geldt volgens de Belastingdienst voor het werk, de voorbereiding en de materialen die de schilder gebruikt. Voor nieuwbouw jonger dan twee jaar, bedrijfsruimten en behang zelf geldt 21%.',
    link: { href: '/blog/btw-tarief-schilderwerk', tekst: 'Lees alles over het btw-tarief.' },
  },
  {
    question: 'Wat zit er in de prijs van een schilder?',
    answer:
      'In de prijzen van Schildersbedrijf040 zit het materiaal (Boonstoppel-verf), het afdekken en afplakken en het schilderwerk zelf. Schuren en voorstrijken staan als aparte regels in de prijslijst, omdat niet elke ondergrond dat nodig heeft. Steiger- of ladderkosten bij buitenwerk worden apart in de offerte vermeld.',
  },
  {
    question: 'Waarom verschilt de prijs per m² zo veel?',
    answer:
      'De bandbreedte komt vooral door de ondergrond. Een gladde, eerder geschilderde muur is sneller klaar dan een muur met scheuren of oude verflagen die eerst moeten worden geschuurd en gevuld. Bij lakwerk telt ook de vorm mee: een kozijn met veel glaslatten en profielen vraagt meer tijd per m² dan een vlakke deur.',
  },
  {
    question: 'Is een offerte bij Schildersbedrijf040 gratis?',
    answer: `Ja. Jordy komt gratis langs voor een inspectie en ${site.termijnen.offerte} daarna ontvangt u een vrijblijvende offerte met een vaste prijs.`,
  },
]

const pagina: DienstPagina = {
  slug: 'kosten',
  naam: 'Wat kost een schilder?',
  h1: 'Wat kost een schilder?',
  kruimel: { naam: 'Kosten', href: pad },
  prijsSlug: 'overzicht',
  tabelTitel: 'van Schildersbedrijf040',
  heroTekst: (
    <p>
      Een schilder kost bij Schildersbedrijf040 {prijsTekst.wanden} voor muren en plafonds binnen, {prijsTekst.gevel} voor een gevel en{' '}
      {prijsTekst.lakBuiten} voor lakwerk aan kozijnen buiten, inclusief materiaal en exclusief btw. Na een gratis inspectie krijgt u een offerte
      met een vaste prijs.
    </p>
  ),
  heroImg: sfeer.kleurstalen,
  sectieImg: sfeer.gereedschap,
  kerncijfers: [
    { waarde: prijsKort.wanden, label: 'Per m² muren of plafond' },
    { waarde: prijsKort.gevel, label: 'Per m² gevel' },
    { waarde: prijsKort.latex, label: 'Per m² latex spuiten' },
    { waarde: '9%', label: 'Btw, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'waar-bestaat-de-prijs-uit',
    h2: 'Waaruit bestaat de prijs van een schilder?',
    body: (
      <>
        <p>
          Wat een schilder kost, hangt af van drie dingen: hoeveel vierkante meter er geschilderd wordt, hoe de ondergrond eraan toe is en welke
          afwerking u wilt. Schildersbedrijf040 rekent daarom met prijzen per m² en een vaste prijs per klus, niet met een open uurtarief. De
          prijzen op deze pagina komen uit dezelfde prijslijst als de dienstpagina&apos;s, zodat u overal dezelfde bedragen ziet.
        </p>
        <p>
          In de prijs per m² zitten de Boonstoppel-verf, het afdekken en afplakken en het schilderwerk zelf. Heeft een muur of plafond eerst een
          schuurbeurt nodig, dan komt daar {prijsTekst.schuren} bij. Zuigt de ondergrond, bijvoorbeeld bij vers stucwerk of na het verwijderen van
          behang, dan wordt eerst voorgestreken voor {prijsTekst.voorstrijken}. Zo betaalt u alleen voor voorbereiding die bij uw muren echt nodig is.
        </p>
        <p>
          Lakwerk wordt apart geprijsd, omdat het meer handwerk is. Kozijnen, deuren en plinten binnen kosten {prijsTekst.lakBinnen}, buiten{' '}
          {prijsTekst.lakBuiten}. Buitenlak moet tegen regen, zon en vorst kunnen, en buitenhout vraagt vaker herstel voordat er geschilderd
          wordt. Is er houtrot, dan kost herstellen {prijsTekst.houtrot}.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'rekenvoorbeelden',
    h2: 'Rekenvoorbeelden',
    body: (
      <>
        <p>
          Een paar voorbeelden om een idee te krijgen. Ze rekenen met de bandbreedtes uit de prijslijst, exclusief btw. De exacte prijs hoort u
          na de inspectie.
        </p>
        <ul>
          <li>
            Woonkamer met 60 m² muren en plafond: {rekenvoorbeeld(60, PRIJSLIJST.wanden)}, afhankelijk van de staat van de muren. Laten spuiten
            in plaats van rollen: {rekenvoorbeeld(60, PRIJSLIJST.latexSpuiten)}.
          </li>
          <li>Gevel van 40 m²: {rekenvoorbeeld(40, PRIJSLIJST.gevel)}, exclusief eventuele steiger.</li>
          <li>Kozijnen buiten met samen 10 m² te lakken hout: {rekenvoorbeeld(10, PRIJSLIJST.lakwerkBuiten)}.</li>
          <li>
            Een trap laten lakken: {prijsKort.trap}. Een deur laten lakken: {prijsTekst.deur}.
          </li>
        </ul>
        <p>
          Voor woningen die langer dan twee jaar als woning in gebruik zijn, betaalt u 9% btw over het schilderwerk en de materialen in plaats
          van 21%. Meer daarover leest u in het artikel over het <Link href="/blog/btw-tarief-schilderwerk">btw-tarief voor schilderwerk</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="prijs-per-dienst" className="h-section mt-6 scroll-mt-28">
        Prijs per dienst
      </h2>
      <p>
        Wilt u per klus weten hoe de prijs is opgebouwd? Op deze pagina&apos;s staat de uitleg per onderdeel:{' '}
        <Link href="/kosten/latex-spuiten">kosten latex spuiten</Link>, <Link href="/kosten/plafond-schilderen">kosten plafond schilderen</Link>{' '}
        en <Link href="/kosten/kozijnen-schilderen">kosten kozijnen schilderen</Link>. Hoe het werk zelf verloopt, leest u bij{' '}
        <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link>, <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link>,{' '}
        <Link href="/diensten/lakwerk">lakwerk</Link> en <Link href="/diensten/trap-schilderen">trap schilderen</Link>.
      </p>
      <h2 id="goedkoper-uit" className="h-section mt-6 scroll-mt-28">
        Hoe houdt u de kosten laag?
      </h2>
      <p>
        Combineer klussen in één planning: wie binnen de muren, plafonds en het lakwerk tegelijk laat doen, bespaart op afdekken en
        voorbereiding. Laat buitenwerk op tijd doen, voordat houtrot ontstaat, want herstel komt bovenop het schilderwerk. En kies verf die lang
        meegaat: Boonstoppel-verf gaat 8 tot 10 jaar mee, waardoor de kosten per jaar lager uitvallen dan bij budgetverf.
      </p>
    </>
  ),
  soorten: {
    id: 'prijzen-per-onderdeel',
    h2: 'Prijzen per onderdeel',
    intro: 'Elke regel komt uit de prijslijst van Schildersbedrijf040. Klik door voor de werkwijze per dienst.',
    kaarten: [
      { titel: 'Muren en plafonds', beschrijving: `Binnen schilderen kost ${prijsTekst.wanden}, inclusief materiaal.`, link: '/diensten/binnenschilderwerk', linkTekst: 'Binnenschilderwerk' },
      { titel: 'Latex spuiten', beschrijving: `Wanden en plafonds egaal gespoten voor ${prijsTekst.latex}.`, link: '/kosten/latex-spuiten', linkTekst: 'Kosten latex spuiten' },
      { titel: 'Gevel schilderen', beschrijving: `Een gevel schilderen kost ${prijsTekst.gevel}, exclusief steiger.`, link: '/diensten/gevel-schilderen', linkTekst: 'Gevel schilderen' },
      { titel: 'Kozijnen', beschrijving: `Lakwerk buiten kost ${prijsTekst.lakBuiten}, binnen ${prijsTekst.lakBinnen}.`, link: '/kosten/kozijnen-schilderen', linkTekst: 'Kosten kozijnen' },
      { titel: 'Behangen', beschrijving: `Behangen kost ${prijsTekst.behangen}, exclusief het behang zelf.`, link: '/diensten/behangen', linkTekst: 'Behangen' },
      { titel: 'Trap', beschrijving: `Een trap schilderen of lakken kost ${prijsKort.trap}.`, link: '/diensten/trap-schilderen', linkTekst: 'Trap schilderen' },
    ],
  },
  werkwijze: {
    id: 'zo-komt-de-prijs-tot-stand',
    h2: 'Zo komt uw prijs tot stand',
    intro: 'De vaste prijs in de offerte is gebaseerd op wat Jordy bij u thuis ziet, niet op een schatting op afstand.',
    stappen: standaardStappen('de ruimtes'),
  },
  waarom: {
    h2: 'Waarom een vaste prijs van Schildersbedrijf040?',
    tekst: 'Een vaste prijs vooraf betekent dat u weet waar u aan toe bent, ook als een klus meer tijd kost dan verwacht.',
    usps: standaardUsps(),
  },
  projectTag: null,
  projecten: [],
  faqs,
  faqTitel: 'Vragen over de kosten van een schilder',
  reviewTag: 'binnenschilderwerk',
  sfeer: { bg: sfeer.woonkamer, rij: [sfeer.kleurstalen, sfeer.afplakken, sfeer.witteGevels] },
  blogs: ['btw-tarief-schilderwerk', 'hoe-lang-duurt-binnenschilderwerk', 'latex-spuiten-of-rollen'],
  cta: {
    titel: 'Wat kost uw klus?',
    tekst: 'Vraag een gratis inspectie aan. U krijgt een offerte met vaste prijs, inclusief materiaal en voorbereiding.',
  },
  schema: schemaVoor({
    slug: 'overzicht',
    pad,
    naam: 'Schilderwerk',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Wat kost een schilder?', pad],
    ],
  }),
}

export default function WatKostEenSchilderPage() {
  return <DienstTemplate d={pagina} />
}

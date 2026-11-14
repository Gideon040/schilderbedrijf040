import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { sfeer } from '@/lib/images'
import { formats, meta } from '@/lib/meta'
import { prijsKort, prijsTekst } from '@/lib/prices'
import { schemaVoor, standaardStappen, standaardUsps, type Faq } from '@/lib/fase7'
import { site } from '@/lib/site'

const pad = '/diensten/trap-schilderen'
const beschrijving = `Trap laten lakken in Eindhoven: ${prijsKort.trap}, slijtvaste lak en om en om gewerkt. ${formats.staart}`

export const metadata: Metadata = meta({
  titel: formats.dienst('Trap schilderen'),
  beschrijving,
  pad,
  extra: { keywords: ['trap schilderen', 'trap laten schilderen', 'trap lakken', 'trap laten lakken eindhoven', 'trap schilderen kosten'] },
})

const faqs: Faq[] = [
  {
    question: 'Wat kost het om een trap te laten schilderen?',
    answer: `Een trap laten schilderen of lakken kost bij Schildersbedrijf040 ${prijsKort.trap}, inclusief schuren, gronden en de laklagen. Leuningen, spijlen en een traphekje vallen onder lakwerk binnen (${prijsTekst.lakBinnen}). De vaste prijs hoort u na de gratis inspectie.`,
    link: { href: '/kosten/wat-kost-een-schilder', tekst: 'Bekijk alle prijzen.' },
  },
  {
    question: 'Kan ik de trap gebruiken terwijl hij geschilderd wordt?',
    answer:
      'Ja. Schildersbedrijf040 werkt om en om: eerst de ene helft van de treden, daarna de andere. Zo kunt u de trap tussendoor blijven gebruiken en hoeft u niet een paar dagen boven of beneden te blijven.',
  },
  {
    question: 'Hoe lang duurt het om een trap te laten lakken?',
    answer:
      'Een trap is meestal binnen 2 tot 3 dagen klaar. De tijd zit vooral in de voorbereiding en in het drogen tussen de lagen: elke laag moet goed uitharden voordat de volgende erop kan, omdat een trap intensief wordt belopen.',
  },
  {
    question: 'Moet een trap eerst kaal geschuurd worden?',
    answer:
      'Voor een duurzaam resultaat wel. Schildersbedrijf040 schuurt de trap volledig kaal, brengt een hechtingsgrondlaag aan en werkt af met meerdere lagen slijtvaste lak. Over een oude, gladde laklaag heen schilderen geeft een laag die sneller afslijt of loslaat.',
  },
  {
    question: 'Kunnen treden en stootborden een verschillende kleur krijgen?',
    answer:
      'Dat kan, bijvoorbeeld donkere treden met lichte stootborden, of andersom. Jordy bespreekt de kleuren bij de inspectie, zodat de trap past bij de vloer, de deuren en de wanden in de hal.',
  },
  {
    question: 'Kan de trap samen met de hal of het trappenhuis geschilderd worden?',
    answer:
      'Ja, en dat scheelt vaak tijd. De wanden en het plafond in de hal of het trappenhuis vallen onder binnenschilderwerk en kunnen in dezelfde planning worden meegenomen.',
    link: { href: '/diensten/binnenschilderwerk', tekst: 'Meer over binnenschilderwerk.' },
  },
]

const pagina: DienstPagina = {
  slug: 'trap-schilderen',
  naam: 'Trap schilderen',
  h1: 'Trap schilderen in Eindhoven',
  heroTekst: (
    <p>
      Een trap laten schilderen of lakken kost bij Schildersbedrijf040 {prijsKort.trap}. De trap wordt kaal geschuurd, gegrond en afgewerkt met
      meerdere lagen slijtvaste lak, en is meestal binnen 2 tot 3 dagen klaar. Omdat er om en om wordt gewerkt, blijft de trap tussendoor
      bruikbaar.
    </p>
  ),
  heroImg: sfeer.trap,
  sectieImg: sfeer.binnendeuren,
  kerncijfers: [
    { waarde: prijsKort.trap, label: 'Trap schilderen of lakken' },
    { waarde: '2 tot 3 dagen', label: 'Doorlooptijd' },
    { waarde: 'Om en om', label: 'Trap blijft bruikbaar' },
    { waarde: '9%', label: 'Btw, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'waarom-een-trap-laten-lakken',
    h2: 'Waarom een trap laten lakken?',
    body: (
      <>
        <p>
          Een trap is het zwaarst belaste houtwerk in huis. Elke dag lopen er mensen op, met schoenen, sokken of natte voeten, en er wordt van
          alles naar boven en beneden gedragen. Gewone muurverf of een dunne laklaag slijt daar snel door: eerst op de neus van de treden, daarna
          in het midden waar iedereen loopt. Een trap vraagt daarom om een andere opbouw dan een deur of een kozijn.
        </p>
        <p>
          Schildersbedrijf040 schuurt de trap volledig kaal, brengt een hechtingsgrondlaag aan en werkt af met meerdere lagen slijtvaste lak. Die
          volgorde zorgt ervoor dat de lak goed hecht op het hout en tegen dagelijks gebruik kan. Een trap die zo is behandeld, ziet er lang strak
          uit en hoeft minder vaak opnieuw te worden gedaan.
        </p>
        <p>
          Een opgeknapte trap valt meteen op in de hal. Of het nu gaat om een dichte trap die weer egaal moet worden, een open trap met spijlen of
          een trap die een nieuwe kleur krijgt: met de juiste voorbereiding is het resultaat net zo strak als een nieuwe trap. Ook kitwerk langs de
          treden en de wand kan worden meegenomen.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'wat-kost-trap-schilderen',
    h2: 'Wat kost trap schilderen?',
    body: (
      <>
        <p>
          Een trap schilderen of lakken kost {prijsKort.trap}, inclusief schuren, gronden en de laklagen, exclusief btw. Waar u uitkomt, hangt af
          van het aantal treden, of het een open of dichte trap is en hoeveel schuurwerk de oude laag vraagt. Leuningen, spijlen en een traphekje
          worden geprijsd als lakwerk binnen: {prijsTekst.lakBinnen}.
        </p>
        <p>
          Voor woningen die langer dan twee jaar als woning in gebruik zijn, geldt 9% btw over het werk en de gebruikte materialen. Een volledig
          overzicht van alle prijzen staat op de pagina <Link href="/kosten/wat-kost-een-schilder">wat kost een schilder</Link>.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="zo-blijft-uw-trap-bruikbaar" className="h-section mt-6 scroll-mt-28">
        Zo blijft uw trap bruikbaar
      </h2>
      <p>
        Een trap laten schilderen betekent niet dat u dagen niet naar boven kunt. Schildersbedrijf040 werkt om en om: eerst de helft van de
        treden, daarna de andere helft. U stapt in die tijd over de natte treden heen. Bespreek bij de inspectie wanneer het u het beste uitkomt,
        bijvoorbeeld als u een paar dagen minder thuis bent.
      </p>
      <h2 id="trap-en-hal-in-een-keer" className="h-section mt-6 scroll-mt-28">
        Trap en hal in één keer
      </h2>
      <p>
        Laat u de trap doen, dan is het een goed moment om ook de hal of het trappenhuis aan te pakken. De wanden en plafonds vallen onder{' '}
        <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link>, deuren en kozijnen onder <Link href="/diensten/lakwerk">lakwerk</Link>.
        Wie liever zelf een deur schildert, vindt de stappen in het artikel over{' '}
        <Link href="/blog/hoe-schilder-je-een-deur">een deur schilderen zonder strepen</Link>.
      </p>
    </>
  ),
  soorten: {
    id: 'soorten-trappen',
    h2: 'Welke trappen schildert Schildersbedrijf040?',
    intro: 'Elke trap vraagt een eigen aanpak. Bij de inspectie bekijkt Jordy de trap, het hout en de huidige laklaag.',
    kaarten: [
      {
        titel: 'Dichte trap',
        beschrijving: 'Treden en stootborden in één of twee kleuren, inclusief de zijkanten (bomen) van de trap.',
        link: '/contact',
        linkTekst: 'Offerte aanvragen',
      },
      {
        titel: 'Open trap',
        beschrijving: 'Treden zonder stootborden. Extra aandacht voor de onderkant en de zijkanten die vanaf beneden zichtbaar zijn.',
        link: '/contact',
        linkTekst: 'Offerte aanvragen',
      },
      {
        titel: 'Leuning en spijlen',
        beschrijving: `Leuning, spijlen en traphekje lakken, geprijsd als lakwerk binnen (${prijsTekst.lakBinnen}).`,
        link: '/diensten/lakwerk',
        linkTekst: 'Meer over lakwerk',
      },
      {
        titel: 'Trappenhuis',
        beschrijving: 'Wanden en plafond van de hal of het trappenhuis in dezelfde planning.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Binnenschilderwerk',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-trap',
    h2: 'Zo verloopt het lakken van uw trap',
    intro: 'Van inspectie tot de laatste laklaag, met een trap die tussendoor bruikbaar blijft.',
    stappen: standaardStappen('de trap'),
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw trap?',
    tekst: 'Een trap vraagt slijtvaste lak en een goede voorbereiding. Schildersbedrijf040 neemt die voorbereiding volledig voor zijn rekening.',
    usps: standaardUsps(),
  },
  reviewTag: 'trap-schilderen',
  reviewIds: ['g23', 'w03'],
  projectTag: null,
  projecten: [],
  faqs,
  faqTitel: 'Vragen over trap schilderen',
  sfeer: { bg: sfeer.trap, rij: [sfeer.binnendeuren, sfeer.woonkamer, sfeer.kleurstalen] },
  blogs: ['hoe-schilder-je-een-deur', 'hoe-lang-duurt-binnenschilderwerk'],
  cta: {
    titel: 'Trap laten lakken?',
    tekst: `Vraag een gratis inspectie aan. U hoort ${site.termijnen.reactie} van ons en krijgt een offerte met vaste prijs.`,
  },
  schema: schemaVoor({
    slug: 'trap-schilderen',
    pad,
    naam: 'Trap schilderen',
    beschrijving,
    faqs,
    kruimels: [
      ['Home', '/'],
      ['Trap schilderen', pad],
    ],
  }),
}

export default function TrapSchilderenPage() {
  return <DienstTemplate d={pagina} />
}

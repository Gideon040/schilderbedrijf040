import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { breadcrumbSchema, faqSchema, orgRef, serviceOffers, werkgebied } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Winterschilder Eindhoven',
  description:
    'Kun je in de winter binnen laten schilderen? Ja. Winterschilder in Eindhoven: binnenwerk voor €30 tot €35 per m² en vaak sneller plek in de planning.',
  openGraph: {
    title: 'Winterschilder Eindhoven | Schildersbedrijf040',
    description:
      'Binnenschilderwerk in de winter: verf droogt binnen goed bij kamertemperatuur en de planning is ruimer dan in het voorjaar.',
    url: 'https://schildersbedrijf040.nl/diensten/winterschilder',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/winterschilder',
  },
}

const faqs = [
  {
    question: 'Moet ik extra stoken of ventileren als er in de winter binnen geschilderd wordt?',
    answer:
      'Houd de ruimte op normale kamertemperatuur: muurverf en lak verwerken het best tussen 10 en 25 °C. Laat de ventilatie aan of zet een raam op een kier, zodat het vocht uit de verf weg kan. Schildersbedrijf040 zorgt tijdens het werk zelf voor goede ventilatie.',
  },
  {
    question: 'Droogt verf in de winter langzamer?',
    answer:
      'Binnen niet merkbaar, zolang de ruimte verwarmd is. Muurverf heeft 4 tot 6 uur droogtijd per laag. Lak is na 4 tot 6 uur stofdroog, maar volledig uitharden duurt 5 tot 7 dagen; ga in die tijd voorzichtig om met deuren en kozijnen.',
  },
  {
    question: 'Kan ik thuis blijven tijdens het schilderen?',
    answer:
      'Ja. Schildersbedrijf040 werkt binnen met watergedragen, geurarme Boonstoppel-verf en dekt meubels en vloeren af. U kunt gewoon thuis blijven; alleen de ruimte waar geschilderd wordt is tijdelijk niet te gebruiken. Bij een trap wordt om en om gewerkt, zodat u de trap tussendoor kunt blijven gebruiken.',
  },
  {
    question: 'Schildert Schildersbedrijf040 ook rond de feestdagen?',
    answer: '[JORDY: werkt u tussen kerst en oud en nieuw? Tot wanneer kunt u een klus aannemen die vóór de feestdagen klaar moet zijn?]',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/winterschilder/#service',
  name: 'Binnenschilderwerk in de winter',
  serviceType: 'Binnenschilderwerk',
  description:
    'Binnenschilderwerk in de wintermaanden in Eindhoven en omgeving: muren, plafonds, kozijnen, deuren en trappen, met watergedragen Boonstoppel-verf.',
  provider: orgRef,
  areaServed: werkgebied.map((name) => ({ '@type': 'City', name })),
  offers: serviceOffers('binnenschilderwerk'),
}

const pagina: DienstPagina = {
  slug: 'winterschilder',
  naam: 'Winterschilder',
  h1: 'Winterschilder in Eindhoven',
  heroTekst: (
    <p>
      Ja, <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link> kan prima in de winter. In een verwarmde woning ligt de temperatuur tussen 10 en 25 °C, precies goed voor
      muurverf en lak. Het voordeel: in de winter is er vaak sneller plek in de planning dan in het voorjaar. Binnenschilderwerk kost
      gemiddeld €30 tot €35 per m².
    </p>
  ),
  heroImg: images.woonkamer,
  kerncijfers: [
    { waarde: '10 tot 25 °C', label: 'Verwerkingstemperatuur binnen' },
    { waarde: '4 tot 6 uur', label: 'Droogtijd per laag muurverf' },
    { waarde: '1 tot 2 dagen', label: 'Gemiddelde woonkamer' },
    { waarde: '9% btw', label: 'Op arbeid, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'kun-je-in-de-winter-binnen-laten-schilderen',
    h2: 'Kun je in de winter binnen laten schilderen?',
    body: (
      <>
        <p>
          Ja. Binnenschilderwerk is het hele jaar door uitvoerbaar, omdat de temperatuur en de luchtvochtigheid in huis goed te regelen
          zijn. Muurverf en lakverf verwerken het best tussen 10 en 25 °C, en dat is in een verwarmde woning standaard. Buiten is dat
          anders: daar moet het minimaal 10 °C en droog zijn. Daarom plant Schildersbedrijf040 buitenschilderwerk vooral van april tot en
          met oktober, en ligt de nadruk in de wintermaanden op binnenwerk.
        </p>
        <p>
          Schildersbedrijf040 werkt binnen met watergedragen Boonstoppel-verf: oplosmiddelvrij, geurarm en goed drogend bij normale
          kamertemperatuur. Tijdens het werk zorgt Schildersbedrijf040 voor ventilatie, zodat de verf goed kan doorharden. In de winter kunt
          u terecht voor <Link href="/diensten/binnenschilderwerk">binnenschilderwerk aan muren, plafonds, kozijnen en deuren</Link>, maar
          ook voor behangen, lakwerk en <Link href="/diensten/latex-spuiten">latex spuiten</Link>.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'is-een-schilder-in-de-winter-goedkoper',
    h2: 'Is een schilder in de winter goedkoper of sneller beschikbaar?',
    body: (
      <>
        <p>
          Sneller beschikbaar: vaak wel. In het voorjaar en de zomer piekt het buitenwerk. In de winter is er bij Schildersbedrijf040
          meestal sneller plek in de planning voor binnenwerk. [JORDY: huidige wachttijd in de winter]
        </p>
        <p>
          Goedkoper: de prijzen zijn in de winter gelijk aan de rest van het jaar. [JORDY: klopt dit, of komt er een winteractie?]
          Binnenschilderwerk kost gemiddeld €30 tot €35 per m² voor muren en €32 tot €38 per m² voor plafonds, inclusief materiaal en
          exclusief btw. Voor woningen ouder dan twee jaar geldt 9% btw op de arbeid. De exacte prijs hoort u na een gratis inspectie, in
          een offerte met vaste prijs.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="waarom-de-winter-een-goed-moment-is" className="h-section mt-6 scroll-mt-28">
        Waarom de winter een goed moment is voor binnenwerk
      </h2>
      <ol className="list-decimal space-y-3 pl-6 text-[18px] leading-[1.7] text-tekst">
        <li>
          <strong className="text-navy">Ruimere planning.</strong> Het buitenseizoen loopt van april tot en met oktober. In de wintermaanden
          is er meer ruimte om binnenwerk in te plannen op een moment dat u uitkomt.
        </li>
        <li>
          <strong className="text-navy">De temperatuur is te regelen.</strong> Een verwarmde woning heeft de juiste temperatuur voor
          muurverf en lak. Regen, vorst en korte dagen spelen binnen geen rol.
        </li>
        <li>
          <strong className="text-navy">Klaar voor het voorjaar.</strong> Is het binnenwerk in de winter gedaan, dan kan het voorjaar
          volledig naar buitenschilderwerk, de tuin of de verhuizing.
        </li>
      </ol>
      <h2 id="woning-voorbereiden-in-de-winter" className="h-section mt-6 scroll-mt-28">
        Hoe bereidt u uw woning voor op binnenwerk in de winter?
      </h2>
      <p>U hoeft weinig zelf te doen; Schildersbedrijf040 dekt meubels en vloeren af en doet de voorbereiding van muren en houtwerk. Wat helpt:</p>
      <ol className="list-decimal space-y-2 pl-6 text-[18px] leading-[1.7] text-tekst">
        <li>Houd de ruimtes die geschilderd worden op normale kamertemperatuur, ook &apos;s nachts.</li>
        <li>Haal breekbare of waardevolle spullen van de muren en neem gordijnen af.</li>
        <li>Zorg dat ventilatieroosters open kunnen en dat er een raam op een kier kan.</li>
        <li>Bespreek bij de inspectie welke kamers u tijdens het werk nodig heeft, dan wordt de volgorde daarop afgestemd.</li>
      </ol>
      <h2 id="binnen-en-buiten-combineren" className="h-section mt-6 scroll-mt-28">
        Binnen en buiten combineren
      </h2>
      <p>
        Laat binnen nu schilderen en leg het buitenwerk meteen vast voor het voorjaar. Buitenschilderwerk doet Schildersbedrijf040 bij droog
        weer tussen 15 en 25 °C, meestal in mei, juni en september. Vraag bij de inspectie voor het binnenwerk ook om een offerte voor het
        buitenwerk: dan staat de planning voor het voorjaar al vast en weet u vooraf waar u aan toe bent.
      </p>
    </>
  ),
  prijsSlug: 'binnenschilderwerk',
  soorten: {
    id: 'wat-kunnen-we-in-de-winter-voor-u-doen',
    h2: 'Wat kunnen we in de winter voor u doen?',
    intro:
      'Alles wat binnen gebeurt, kan in de winter door. Dit zijn de klussen die Schildersbedrijf040 in de wintermaanden het meest uitvoert.',
    kaarten: [
      {
        titel: 'Binnenschilderwerk',
        beschrijving: 'Muren, plafonds, kozijnen, deuren en trappen, strak geschilderd en schoon opgeleverd.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Meer over binnenschilderwerk',
      },
      {
        titel: 'Latex spuiten',
        beschrijving: 'Muren en plafonds snel en egaal gespoten, ideaal bij nieuwbouw, na stucwerk of bij een verhuizing.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Latex spuiten bekijken',
      },
      {
        titel: 'Lakwerk',
        beschrijving: 'Deuren, trappen en kozijnen binnen gelakt in zijdeglans of hoogglans, met slijtvaste lak.',
        link: '/diensten/lakwerk',
        linkTekst: 'Meer over lakwerk',
      },
      {
        titel: 'Behangen',
        beschrijving: 'Behang plaatsen of verwijderen, los of samen met het schilderwerk in één planning.',
        link: '/diensten/behangen',
        linkTekst: 'Meer over behangen',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-winter',
    h2: 'Zo verloopt binnenwerk in de winter',
    intro: 'Het werkproces is in de winter hetzelfde als de rest van het jaar. Het enige verschil: er is vaak sneller plek om te beginnen.',
    stappen: [
      {
        titel: 'Aanvraag en inspectie',
        beschrijving: 'Schildersbedrijf040 komt gratis langs om muren, plafonds en houtwerk te bekijken en te adviseren.',
      },
      { titel: 'Offerte en planning', beschrijving: 'U krijgt een offerte met vaste prijs en een startdatum die u uitkomt.' },
      {
        titel: 'Voorbereiden en schilderen',
        beschrijving: 'Afdekken, schuren, plamuren en schilderen met watergedragen Boonstoppel-verf, met goede ventilatie.',
      },
      { titel: 'Schone oplevering', beschrijving: 'Samen nalopen, alles opruimen en pas klaar als u tevreden bent.' },
    ],
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor binnenwerk in de winter?',
    tekst:
      'Schildersbedrijf040 is een schildersbedrijf uit Eindhoven met ruim vijf jaar ervaring. Eigenaar Jordy Jacobs is uw vaste aanspreekpunt van inspectie tot oplevering.',
    usps: [
      { titel: '5,0 op Google', beschrijving: 'Uit 41 reviews op Google, en een 4,9 op Werkspot.' },
      { titel: 'Boonstoppel-verf', beschrijving: 'Watergedragen en geurarm binnen, verf die 8 tot 10 jaar meegaat.' },
      { titel: 'Vaste prijs', beschrijving: 'Na een gratis inspectie krijgt u een offerte met vaste prijs.' },
      { titel: 'Netjes in huis', beschrijving: 'Meubels en vloeren worden afgedekt en de werkplek wordt schoon opgeleverd.' },
    ],
  },
  projecten: [
    { titel: 'Woonkamer, wanden en plafond geschilderd', label: '[JORDY: plaats] · [JORDY: maand]', na: images.woonkamer },
    { titel: 'Binnendeuren en kozijnen gelakt', label: '[JORDY: plaats] · [JORDY: maand]', na: images.binnendeur },
  ],
  faqs,
  faqTitel: 'Vragen over schilderen in de winter',
  cta: {
    titel: 'Plan uw binnenwerk deze winter',
    tekst: 'Gratis inspectie en een offerte met vaste prijs. Bel of vraag online een offerte aan.',
  },
  schema: [
    serviceSchema,
    breadcrumbSchema([
      ['Home', '/'],
      ['Winterschilder', '/diensten/winterschilder'],
    ]),
    // Antwoorden met een open punt voor Jordy niet in het schema
    faqSchema(faqs.filter((f) => !f.answer.includes('[JORDY'))),
  ],
}

export default function WinterschilderPage() {
  return <DienstTemplate d={pagina} />
}

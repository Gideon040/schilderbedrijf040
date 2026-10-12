import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Latex spuiten Eindhoven',
  description:
    'Latex spuiten in Eindhoven: muren €8 tot €12 per m², plafonds €5,50 tot €7 en nieuwbouw vanaf €3,50 per m². Egaal, snel en met een vaste prijs per m².',
  keywords: [
    'latex spuiten eindhoven',
    'airless spuiten eindhoven',
    'muren spuiten eindhoven',
    'plafond spuiten',
    'latex spuiten kosten',
    'schildersbedrijf eindhoven',
    'latex spuiten prijs per m2',
  ],
  openGraph: {
    title: 'Latex Spuiten Eindhoven | Schildersbedrijf040',
    description:
      'Professioneel latex spuiten in Eindhoven en omgeving. Muren en plafonds 3-5x sneller en 100% egaal met airless spuittechniek.',
    url: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
  },
}

const faqs = [
  {
    question: 'Wat is het verschil tussen latex spuiten en rollen?',
    answer:
      'Latex spuiten met een airless spuitmachine brengt de verf onder hoge druk aan als een fijne nevel, waardoor het resultaat 100% egaal is zonder rolstrepen of structuurverschillen. Latex spuiten is 3 tot 5 keer sneller dan rollen, wat vooral bij grote oppervlakken een aanzienlijk tijd- en kostenvoordeel oplevert. Schildersbedrijf040 in Eindhoven adviseert airless spuiten voor nieuwbouw, renovatieprojecten en ruimtes met veel muur- en plafondoppervlak.',
    link: { href: '/blog/latex-spuiten-of-rollen', tekst: 'Lees de vergelijking latex spuiten of rollen.' },
  },
  {
    question: 'Maakt latex spuiten veel rommel of overspray?',
    answer:
      'Bij professioneel latex spuiten is overspray minimaal, mits de voorbereiding goed is. Schildersbedrijf040 plakt alle randen, kozijnen, vloeren en niet te spuiten oppervlakken volledig af met professioneel afdekmateriaal en folie. De airless spuitmachines die Schildersbedrijf040 gebruikt werken met lage druk en een gecontroleerde sproeihoek, waardoor de nevel gericht blijft. Na afloop wordt alles netjes opgeruimd en de werkplek schoon opgeleverd.',
  },
  {
    question: 'Welke oppervlakken zijn geschikt voor latex spuiten?',
    answer:
      'Latex spuiten is geschikt voor vrijwel alle binnenwanden en plafonds: gestucte muren, gipsplaten, betonplafonds, houtvezelplaten en eerder geschilderde oppervlakken. Schildersbedrijf040 beoordeelt bij de inspectie of de ondergrond geschikt is en welke voorbereiding nodig is. Oppervlakken met veel scheuren of loszittende verf worden eerst hersteld, zodat het spuitwerk optimaal hecht.',
  },
  {
    question: 'Hoe lang duurt het voordat gespoten latex droog is?',
    answer:
      'Gespoten latex muurverf is stofdroog binnen 30 tot 60 minuten en overschilderbaar na 4 tot 6 uur, afhankelijk van de temperatuur en ventilatie in de ruimte. Schildersbedrijf040 zorgt voor goede ventilatie tijdens en na het spuiten, waardoor de droogtijd optimaal blijft. Een volledige kamer met muren en plafond kan doorgaans op dezelfde dag meerdere lagen ontvangen.',
  },
  {
    question: 'Wat kost latex spuiten per m²?',
    answer:
      'Latex spuiten kost gemiddeld €8 tot €12 per m² voor muren, inclusief afplakken, primer en latex. Plafond spuiten is voordeliger: €5,50 tot €7 per m². Nieuwbouw compleet spuiten begint vanaf €3,50 per m², omdat nieuwe ondergronden minder voorbereiding vragen. Schildersbedrijf040 werkt altijd met een vaste offerte, zodat u vooraf precies weet wat de investering is. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%.',
  },
  {
    question: 'Is latex spuiten goedkoper dan rollen?',
    answer:
      'Bij grotere oppervlakken is latex spuiten doorgaans voordeliger dan rollen, ondanks de hogere materiaalkosten van de spuitmachine. De reden is dat airless spuiten 3 tot 5 keer sneller gaat, waardoor de arbeidskosten aanzienlijk lager uitvallen. Voor een enkele kleine kamer kan rollen voordeliger zijn, maar bij complete woningen, nieuwbouwprojecten of bedrijfspanden is latex spuiten door Schildersbedrijf040 de meest kostenefficiënte keuze.',
  },
  {
    question: 'Moet ik zelf de kamer leegruimen voor het spuiten?',
    answer:
      'Schildersbedrijf040 neemt de volledige voorbereiding voor zijn rekening. Meubels worden verplaatst of volledig afgedekt, vloeren worden beschermd met afdekfolie en alle randen worden strak afgeplakt. U hoeft alleen breekbare of waardevolle items van tevoren in veiligheid te brengen. Na het spuiten wordt alles teruggeplaatst en de werkplek schoon achtergelaten.',
  },
  {
    question: 'Kan latex spuiten ook in de winter?',
    answer:
      'Ja. Latex spuiten gebeurt binnen, in een verwarmde woning, en kan daarom het hele jaar door. Zorg dat de ruimte op normale kamertemperatuur is; Schildersbedrijf040 zorgt tijdens en na het spuiten voor ventilatie, zodat de latex goed droogt.',
    link: { href: '/diensten/winterschilder', tekst: 'Lees meer over binnenwerk in de winter.' },
  },
  {
    question: 'Kan Schildersbedrijf040 ook in bewoonde woningen latex spuiten?',
    answer:
      'Latex spuiten in bewoonde woningen is goed mogelijk. Schildersbedrijf040 werkt kamer voor kamer, zodat u de rest van de woning gewoon kunt blijven gebruiken. De watergedragen latex die Schildersbedrijf040 gebruikt is oplosmiddelvrij en nagenoeg geurloos, wat het comfort verhoogt. Gemiddeld is een kamer binnen een halve tot een hele dag volledig gespoten en droog genoeg om weer in gebruik te nemen.',
  },
]

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie & advies',
    beschrijving:
      'Schildersbedrijf040 beoordeelt de ondergrond, meet de oppervlakken op en adviseert of airless spuiten de beste methode is voor uw situatie.',
  },
  {
    nummer: 2,
    titel: 'Offerte op maat',
    beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief afplakken, primer, latex en oplevering.',
  },
  {
    nummer: 3,
    titel: 'Afplakken & voorbereiden',
    beschrijving:
      'Alle randen, kozijnen, vloeren en meubels worden volledig afgedekt. Scheuren worden gevuld, de ondergrond geschuurd en een hechtprimer aangebracht.',
  },
  {
    nummer: 4,
    titel: 'Spuiten & oplevering',
    beschrijving:
      'Professioneel airless spuiten van muren en plafonds, controle samen met u, werkplek netjes achterlaten en garantie op het resultaat.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/latex-spuiten/#service',
  name: 'Latex Spuiten',
  description:
    'Professioneel latex spuiten voor woningen en bedrijfspanden in Eindhoven en omgeving. Muren en plafonds 3-5x sneller en 100% egaal afgewerkt met airless spuittechniek.',
  provider: orgRef,
  areaServed: [
    { '@type': 'City', name: 'Eindhoven' },
    { '@type': 'City', name: 'Veldhoven' },
    { '@type': 'City', name: 'Waalre' },
    { '@type': 'City', name: 'Best' },
    { '@type': 'City', name: 'Nuenen' },
    { '@type': 'City', name: 'Geldrop' },
    { '@type': 'City', name: 'Helmond' },
  ],
  serviceType: 'Latex Spuiten',
  offers: serviceOffers('latex-spuiten'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Latex spuiten diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Muren spuiten' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Plafond spuiten' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Nieuwbouw spuiten' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Renovatie spuitwerk' },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Latex Spuiten', item: 'https://schildersbedrijf040.nl/diensten/latex-spuiten' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const pagina: DienstPagina = {
  slug: 'latex-spuiten',
  naam: 'Latex spuiten',
  h1: 'Latex spuiten in Eindhoven',
  heroTekst: (
    <p>
      Latex spuiten kost gemiddeld €8 tot €12 per m² voor muren en €5,50 tot €7 per m² voor plafonds, inclusief afplakken en materiaal. Een
      complete woning is meestal in 1 tot 2 dagen gespoten, [JORDY: gemiddeld aantal m² per dag]. Na een gratis inspectie krijgt u een
      offerte met vaste prijs per m².
    </p>
  ),
  heroImg: images.latex,
  kerncijfers: [
    { waarde: '3 tot 5x sneller', label: 'Snelheid' },
    { waarde: 'vanaf €3,50/m²', label: 'Prijs (nieuwbouw)' },
    { waarde: '100% egaal', label: 'Resultaat' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-latex-spuiten',
    h2: 'Wat is latex spuiten?',
    body: (
      <>
        <p>
          Latex spuiten door Schildersbedrijf040 levert een 100% egaal resultaat op muren en plafonds in Eindhoven en omgeving. Airless
          spuiten is 3 tot 5 keer sneller dan rollen en ideaal voor nieuwbouw, renovatie en grote oppervlakken.
        </p>
        <p>
          Latex spuiten is een professionele schildertechniek waarbij muurverf met een airless spuitmachine onder hoge druk als fijne nevel
          op muren en plafonds wordt aangebracht. Het resultaat van airless spuiten is een volkomen egaal oppervlak zonder rolstrepen,
          kwaststreken of structuurverschillen. Schildersbedrijf040 in Eindhoven past latex spuiten toe bij nieuwbouw, renovatie en
          bestaande woningen waar een strak, modern resultaat gewenst is.
        </p>
        <p>
          Het grootste voordeel van latex spuiten ten opzichte van rollen is de snelheid: airless spuiten gaat 3 tot 5 keer sneller dan
          traditioneel rolwerk. Een complete woonkamer met muren en plafond is binnen enkele uren gespoten, waar rollen een hele dag kost.
          Die snelheid vertaalt zich in lagere arbeidskosten en minder overlast in uw woning.
        </p>
        <p>
          Schildersbedrijf040 gebruikt professionele airless spuitmachines van Graco en Titan, gecombineerd met hoogwaardige watergedragen
          latex muurverf. Watergedragen latex is oplosmiddelvrij, nagenoeg geurloos en droogt snel op. Daarmee is latex spuiten niet alleen
          sneller en egaler, maar ook comfortabeler voor bewoners.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-latex-spuiten',
    h2: 'Wat kost latex spuiten?',
    body: (
      <>
        <p>
          Latex spuiten kost gemiddeld €8 tot €12 per m² voor muren, inclusief afplakken, primer en latex muurverf. Plafond spuiten is
          voordeliger: €5,50 tot €7 per m², omdat plafonds doorgaans minder voorbereiding vragen. Bij nieuwbouw begint de all-in prijs vanaf
          €3,50 per m², omdat nieuwe ondergronden glad en schoon zijn.
        </p>
        <table className="w-full border-collapse text-[17px]">
          <caption className="sr-only">Wat kost latex spuiten per m², nieuwbouw en bestaande bouw</caption>
          <thead>
            <tr className="border-b-2 border-navy text-left">
              <th scope="col" className="py-2.5 pr-3 font-bold text-navy">
                Situatie
              </th>
              <th scope="col" className="py-2.5 text-right font-bold text-navy">
                Prijs per m²
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-lijn">
              <td className="py-2.5 pr-3">Muren, bestaande woning</td>
              <td className="py-2.5 text-right">€8 tot €12</td>
            </tr>
            <tr className="border-b border-lijn">
              <td className="py-2.5 pr-3">Plafonds, bestaande woning</td>
              <td className="py-2.5 text-right">€5,50 tot €7</td>
            </tr>
            <tr className="border-b border-lijn">
              <td className="py-2.5 pr-3">Nieuwbouw, muren en plafonds</td>
              <td className="py-2.5 text-right">€3,50 tot €7</td>
            </tr>
            <tr className="border-b border-lijn">
              <td className="py-2.5 pr-3">Renovatie, muren en plafonds</td>
              <td className="py-2.5 text-right">€8 tot €13</td>
            </tr>
          </tbody>
        </table>
        <p className="!text-[15px] text-tekst-zacht">Indicatief, inclusief afplakken en materiaal, exclusief btw.</p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor latex spuitwerk, maar werkt bij voorkeur met een vaste prijs per
          m², zodat u vooraf precies weet wat de investering is. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9% in
          plaats van 21%, wat een merkbaar verschil maakt op de eindfactuur.
        </p>
        <p>
          Hoewel de materiaalkosten bij airless spuiten iets hoger liggen dan bij rollen (door de spuitmachine en het hogere verfverbruik),
          zijn de totale kosten bij grotere oppervlakken lager. Airless spuiten is 3 tot 5 keer sneller, waardoor de arbeidskosten fors
          dalen. Schildersbedrijf040 adviseert altijd eerlijk welke methode, spuiten of rollen, het beste bij uw project past.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="plafond-spuiten" className="h-section mt-6 scroll-mt-28">
        Plafond spuiten
      </h2>
      <p>
        Een plafond laten spuiten kost gemiddeld €5,50 tot €7 per m², inclusief afplakken en materiaal. Bij een plafond is spuiten extra
        handig: rollen boven het hoofd is zwaar werk en geeft snel zichtbare banen in strijklicht, terwijl gespoten latex in één egale laag
        op het plafond komt. Schildersbedrijf040 plakt vooraf wanden, kozijnen, vloeren en lichtpunten af, zodat alleen het plafond verf
        krijgt. Spuiten werkt goed op gestucte en gladde plafonds, zowel in nieuwbouw als in bestaande woningen.
      </p>
      <p>
        Wilt u naast het plafond ook de wanden, kozijnen of deuren laten doen? Dat valt onder{' '}
        <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link>; beide kunnen in één planning.
      </p>
      <h2 id="spuiten-of-rollen" className="h-section mt-6 scroll-mt-28">
        Spuiten of rollen?
      </h2>
      <p>
        Spuiten is vooral sneller en egaler op grote, vrije oppervlakken zoals plafonds, nieuwbouw en lege woningen. Rollen is handiger bij
        kleine klussen of een enkele wand in een volle kamer, omdat er dan minder afgeplakt hoeft te worden. Schildersbedrijf040 adviseert
        per ruimte welke methode het beste past; de vergelijking op een rij staat in de veelgestelde vragen hieronder.
      </p>
    </>
  ),
  soorten: {
    id: 'soorten-latex-spuitwerk',
    h2: 'Soorten latex spuitwerk',
    intro:
      'Latex spuiten is veelzijdig inzetbaar. Van nieuwbouw tot renovatie, van woonkamers tot kantoorpanden. Schildersbedrijf040 past airless spuittechniek toe in uiteenlopende situaties.',
    kaarten: [
      {
        titel: 'Muren spuiten',
        beschrijving:
          'Muren spuiten met airless techniek levert een strak, egaal resultaat zonder rolstrepen. Schildersbedrijf040 spuit binnenmuren in elke gewenste kleur en afwerking, van mat tot zijdeglans. Ideaal voor woonkamers, slaapkamers en hallen waar een moderne uitstraling gewenst is.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Bekijk binnenschilderwerk',
      },
      {
        titel: 'Plafonds spuiten',
        beschrijving:
          'Plafond spuiten is de snelste manier om een egaal wit plafond te realiseren. Airless spuiten voorkomt de typische rolstrepen en druipers die bij plafondwerk vaak optreden. Schildersbedrijf040 spuit plafonds in nieuwbouw en bestaande bouw in Eindhoven en omgeving, met minimale overlast.',
        link: '/contact',
        linkTekst: 'Vraag offerte aan',
      },
      {
        titel: 'Nieuwbouw spuiten',
        beschrijving:
          'Nieuwbouw spuiten is de meest kostenefficiënte manier om een nieuwbouwwoning af te werken. Omdat nieuwe muren en plafonds doorgaans glad en schoon zijn, is minder voorbereiding nodig. Schildersbedrijf040 spuit complete nieuwbouwwoningen in Eindhoven vanaf €3,50 per m², snel, egaal en betaalbaar.',
        link: '/projecten',
        linkTekst: 'Bekijk projecten',
      },
      {
        titel: 'Renovatie spuitwerk',
        beschrijving:
          'Bij renovatie spuitwerk bereidt Schildersbedrijf040 de bestaande ondergrond grondig voor: oude verflagen worden geschuurd, scheuren gevuld en een hechtprimer aangebracht. Daarna wordt de latex gespoten voor een resultaat dat niet onderdoet voor nieuwbouw. Renovatie spuiten kost meer voorbereiding, maar het eindresultaat is even egaal.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Meer over binnenschilderwerk',
      },
      {
        titel: 'Kantoren & bedrijfspanden',
        beschrijving:
          'Kantoren en bedrijfspanden hebben vaak grote muur- en plafondoppervlakken die met airless spuiten snel en efficiënt afgewerkt worden. Schildersbedrijf040 plant het spuitwerk buiten kantooruren of in het weekend, zodat de bedrijfsvoering niet verstoord wordt.',
        link: '/contact',
        linkTekst: 'Plan een afspraak',
      },
      {
        titel: 'Trappenhuizen & hallen',
        beschrijving:
          'Trappenhuizen en entreehal len zijn lastig bereikbaar met roller en kwast. Airless spuiten bereikt elke hoek en rand moeiteloos en levert een uniform resultaat over de volledige hoogte. Schildersbedrijf040 heeft ervaring met trappenhuizen in appartementsgebouwen en VvE-complexen in Eindhoven.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Bekijk buitenschilderwerk',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-latex-spuiten',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Elk latex spuitproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor latex spuiten?',
    tekst:
      'Schildersbedrijf040 onderscheidt zich door vakmanschap, professionele airless spuitapparatuur en transparante prijzen. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk spuitproject, van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Professionele airless spuitapparatuur',
        beschrijving:
          'Schildersbedrijf040 werkt met Graco en Titan airless spuitmachines, industriestandaard voor egaal en efficiënt spuitwerk zonder overspray.',
      },
      {
        titel: 'Hoogst beoordeeld in de regio',
        beschrijving:
          '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.',
      },
      {
        titel: '3-5x sneller dan rollen',
        beschrijving:
          'Airless latex spuiten bespaart u dagen wachttijd. Een complete woning is in 1 tot 2 dagen gespoten, waar rollen een week kost.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs per m². Inclusief afplakken, primer, latex en oplevering.',
      },
      {
        titel: 'Nette afplak- en afdekwerkzaamheden',
        beschrijving: 'Professioneel afplakken en afdekken voorkomt overspray. Schildersbedrijf040 levert de werkplek schoon en netjes op.',
      },
    ],
  },
  projecten: [{ titel: 'Benedenverdieping latex gespoten', label: 'Blixembosch, Eindhoven · [JORDY: m²]', na: images.latex }],
  faqs,
  faqTitel: 'Vragen over latex spuiten',
  cta: {
    titel: 'Latex laten spuiten?',
    tekst:
      'Wilt u weten wat latex spuiten voor uw woning of bedrijfspand kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function LatexSpuitenPage() {
  return <DienstTemplate d={pagina} />
}

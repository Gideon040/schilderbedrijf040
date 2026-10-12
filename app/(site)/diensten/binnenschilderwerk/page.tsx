import type { Metadata } from 'next'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Binnenschilderwerk Eindhoven | Muren, Plafonds & Kozijnen Vakkundig Geschilderd',
  description:
    'Binnenschilderwerk door Schildersbedrijf040 in Eindhoven. Muren, plafonds, kozijnen en deuren professioneel geschilderd met Boonstoppel verf. ✓ Hoogst beoordeeld ✓ Gratis offerte.',
  keywords: [
    'binnenschilderwerk eindhoven',
    'binnenschilder eindhoven',
    'muren schilderen eindhoven',
    'plafond schilderen',
    'kozijnen schilderen binnen',
    'schildersbedrijf eindhoven',
    'binnenschilderwerk kosten',
  ],
  openGraph: {
    title: 'Binnenschilderwerk Eindhoven | Schildersbedrijf040',
    description:
      'Professioneel binnenschilderwerk in Eindhoven en omgeving. Muren, plafonds, kozijnen en deuren vakkundig geschilderd met Boonstoppel verf.',
    url: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk',
  },
}

const faqs = [
  {
    question: 'Wat kost binnenschilderwerk per m² in Eindhoven?',
    answer:
      'Binnenschilderwerk kost gemiddeld €30 tot €35 per m², inclusief materiaal en exclusief btw. Voor een gemiddelde woonkamer van 20 m² komt dat neer op €250 tot €400 voor muren en plafond. Schildersbedrijf040 werkt met Boonstoppel verf, waardoor het resultaat 8 tot 10 jaar meegaat, aanzienlijk langer dan de 3 jaar die budgetverf biedt. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9% in plaats van 21%.',
  },
  {
    question: 'Hoe lang duurt het om een kamer te schilderen?',
    answer:
      'Een gemiddelde woonkamer (20 m²) schilderen duurt 1 tot 2 werkdagen, afhankelijk van de staat van de ondergrond en het aantal lagen. Muurverf heeft een droogtijd van 4 tot 6 uur tussen lagen, waardoor Schildersbedrijf040 efficiënt kan werken door in die tussentijd kozijnen of andere onderdelen aan te pakken. Bij nieuwbouw of recent gestucte muren is de doorlooptijd korter, omdat minder voorbereidingswerk nodig is.',
  },
  {
    question: 'Welke verf gebruikt Schildersbedrijf040 voor binnenschilderwerk?',
    answer:
      'Schildersbedrijf040 werkt uitsluitend met Boonstoppel verf, een A-merk dat speciaal ontwikkeld is voor professioneel schilderwerk. Voor muren en plafonds gebruikt Schildersbedrijf040 de Boonstoppel Garantietex-lijn: watergedragen, oplosmiddelvrij en geurloos. Voor kozijnen en deuren wordt de Boonstoppel Garantie Interieurlak toegepast, een kras- en slijtvaste lakverf. Watergedragen verf is beter voor de luchtkwaliteit binnenshuis en voldoet aan de nieuwste milieueisen.',
  },
  {
    question: 'Moet ik mijn meubels zelf verplaatsen voor het schilderwerk?',
    answer:
      'Schildersbedrijf040 neemt de volledige voorbereiding voor zijn rekening: meubels worden afgedekt of verplaatst, vloeren worden beschermd met afdekmateriaal en plinten en kozijnen worden zorgvuldig afgeplakt. Na afloop wordt alles netjes teruggeplaatst en de werkplek opgeruimd. Een schone oplevering hoort bij professioneel binnenschilderwerk, dat scheelt u tijd en voorkomt verfvlekken op uw interieur.',
  },
  {
    question: 'Kan binnenschilderwerk ook in de winter uitgevoerd worden?',
    answer:
      'Binnenschilderwerk is het hele jaar door uitvoerbaar, omdat de temperatuur en luchtvochtigheid binnenshuis goed te regelen zijn. De ideale verwerkingstemperatuur voor muurverf en lakverf ligt tussen 10°C en 25°C, standaard in een verwarmde woning. Schildersbedrijf040 zorgt voor goede ventilatie tijdens het schilderen, zodat de verf optimaal droogt. In de winter is er bovendien vaak sneller beschikbaarheid, wat de planning vergemakkelijkt.',
  },
  {
    question: 'Wat is het verschil tussen latex en acrylaat muurverf?',
    answer:
      'Latex muurverf is de meest gebruikte verf voor muren en plafonds: betaalbaar, makkelijk verwerkbaar en beschikbaar in mat tot zijdeglans. Acrylaat muurverf is de professionele variant met hogere dekking, betere hechting en langere levensduur. Schildersbedrijf040 adviseert acrylaat muurverf van Boonstoppel voor ruimtes met veel slijtage, zoals hallen en trappenhuizen. Voor slaapkamers en woonkamers voldoet een hoogwaardige latex muurverf uitstekend.',
  },
  {
    question: 'Hoe bereid ik mijn woning voor op binnenschilderwerk?',
    answer:
      'Eigenlijk hoeft u weinig zelf te doen. Schildersbedrijf040 verzorgt de voorbereiding: scheuren en gaatjes worden gevuld, loszittende verf wordt verwijderd, en ondergronden worden geschuurd en ontvet. Het enige dat helpt is breekbare of waardevolle items van muren halen en gordijnen verwijderen. Schildersbedrijf040 bespreekt dit vooraf tijdens de inspectie, zodat u precies weet wat er verwacht wordt.',
  },
  {
    question: 'Geeft Schildersbedrijf040 garantie op binnenschilderwerk?',
    answer:
      'Schildersbedrijf040 geeft garantie op al het uitgevoerde binnenschilderwerk. De garantie dekt zowel het vakmanschap als de gebruikte materialen. Omdat Schildersbedrijf040 werkt met Boonstoppel verf, die 8 tot 10 jaar bescherming biedt, is de kans op problemen binnen de garantieperiode minimaal. Mocht er onverhoopt toch iets mis zijn, dan wordt het kosteloos hersteld.',
  },
]

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie & advies',
    beschrijving:
      'Schildersbedrijf040 komt langs voor een grondige inspectie. De staat van muren, plafonds en houtwerk wordt beoordeeld en u krijgt kleuradvies op maat.',
  },
  {
    nummer: 2,
    titel: 'Offerte op maat',
    beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, zonder verborgen kosten en inclusief materialen.',
  },
  {
    nummer: 3,
    titel: 'Voorbereiding',
    beschrijving:
      'Meubels afdekken, vloeren beschermen, scheuren vullen, oude verflagen schuren en ondergronden gronden, de basis voor een strak resultaat.',
  },
  {
    nummer: 4,
    titel: 'Schilderwerk & oplevering',
    beschrijving:
      'Professioneel aanbrengen van Boonstoppel verf, controle samen met u, werkplek netjes achterlaten en garantie op het resultaat.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk/#service',
  name: 'Binnenschilderwerk',
  description:
    'Professioneel binnenschilderwerk voor woningen en bedrijfspanden in Eindhoven en omgeving. Muren, plafonds, kozijnen en deuren vakkundig geschilderd met Boonstoppel verf.',
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
  serviceType: 'Binnenschilderwerk',
  offers: serviceOffers('binnenschilderwerk'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Binnenschilderwerk diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Muren en plafonds schilderen' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kozijnen en deuren lakken' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Houtwerk voorbehandelen en gronden' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kleuradvies en proefvlakken' },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Binnenschilderwerk', item: 'https://schildersbedrijf040.nl/diensten/binnenschilderwerk' },
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
  slug: 'binnenschilderwerk',
  naam: 'Binnenschilderwerk',
  h1: 'Binnenschilderwerk in Eindhoven',
  heroTekst: (
    <p>
      Muren, plafonds, kozijnen, deuren en trappen laten schilderen kost gemiddeld €30 tot €35 per m², inclusief materiaal en
      Boonstoppel-verf. Een woonkamer is meestal in 1 tot 2 werkdagen klaar. Na een gratis inspectie krijgt u een offerte met vaste prijs.
    </p>
  ),
  heroImg: images.binnendeur,
  kerncijfers: [
    { waarde: '8 tot 10 jaar', label: 'Levensduur' },
    { waarde: '4 tot 6 uur', label: 'Droogtijd per laag' },
    { waarde: '8 tot 10 m²', label: 'Dekking per liter' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-binnenschilderwerk',
    h2: 'Wat is professioneel binnenschilderwerk?',
    body: (
      <>
        <p>
          Binnenschilderwerk van Schildersbedrijf040 geeft uw woning in Eindhoven en omgeving een frisse uitstraling die jarenlang meegaat.
          Van muren en plafonds tot kozijnen en deuren. Schildersbedrijf040 schildert met Boonstoppel verf voor een strak en duurzaam
          resultaat.
        </p>
        <p>
          Binnenschilderwerk omvat het schilderen, lakken en afwerken van alle oppervlakken in uw woning: muren, plafonds, kozijnen, deuren,
          trappen en plinten. Professioneel binnenschilderwerk verschilt van zelf schilderen doordat de voorbereiding (schuren, plamuren,
          gronden) minstens de helft van de tijd in beslag neemt. Die voorbereiding is bepalend voor hoe lang het resultaat meegaat: goed
          voorbereid binnenschilderwerk met Boonstoppel verf houdt 8 tot 10 jaar, terwijl schilderwerk zonder degelijke voorbereiding al na
          2 tot 3 jaar loslaat of verkleurt.
        </p>
        <p>
          Schildersbedrijf040 voert binnenschilderwerk uit voor woningen, appartementen en bedrijfspanden in Eindhoven en omgeving. Of het
          gaat om een enkele kamer of een volledige woning, elk project begint met een inspectie van de ondergrond, advies over kleuren en
          materialen, en een gedetailleerde offerte met vaste prijs.
        </p>
        <p>
          Naast het esthetische aspect beschermt binnenschilderwerk uw houtwerk tegen slijtage en vocht. Onbehandelde kozijnen en
          deurkozijnen drogen uit, gaan werken en zijn gevoeliger voor schade. Regelmatig schilderonderhoud voorkomt dure reparaties op
          termijn.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-binnenschilderwerk',
    h2: 'Wat kost binnenschilderwerk?',
    body: (
      <>
        <p>
          Binnenschilderwerk kost gemiddeld €30 tot €35 per m² inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van de
          staat van de ondergrond, het type oppervlak en de gewenste afwerking. Muren en plafonds schilderen is voordeliger per m² dan
          kozijnen lakken, omdat kozijnen meer voorbereidingstijd vragen door het nauwkeurige schuur- en lakwerk.
        </p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €35 tot €45 voor binnenschilderwerk, inclusief materiaal. Voor woningen ouder dan 2
          jaar geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij een schilderproject van €2.000
          bespaart u daarmee ruim €200 ten opzichte van het standaard btw-tarief van 21%.
        </p>
        <p>
          Schildersbedrijf040 werkt altijd met een vaste offerte, geen verrassingen achteraf. De investering in Boonstoppel verf betaalt
          zich terug: doordat het schilderwerk 8 tot 10 jaar meegaat in plaats van 3 jaar bij budgetverf, zijn de kosten per jaar lager.
        </p>
      </>
    ),
  },
  extra: undefined,
  soorten: {
    id: 'soorten-binnenschilderwerk',
    h2: 'Soorten binnenschilderwerk',
    intro:
      'Binnenschilderwerk is meer dan alleen een kwast en een pot verf. Elk oppervlak vraagt een andere aanpak, ander materiaal en andere expertise.',
    kaarten: [
      {
        titel: 'Muren & plafonds',
        beschrijving:
          'Muren en plafonds schilderen is het meest voorkomende binnenschilderwerk. Schildersbedrijf040 gebruikt de Boonstoppel Garantietex-lijn: watergedragen muurverf die oplosmiddelvrij is en geen geur achterlaat. Beschikbaar in mat, zijdemat en zijdeglans, afhankelijk van de ruimte en uw voorkeur. Een gemiddelde woonkamer is binnen 1 tot 2 dagen geschilderd.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Bekijk ook latex spuiten',
      },
      {
        titel: 'Kozijnen & deuren lakken',
        beschrijving:
          'Kozijnen en deuren van hout vragen om lakverf die kras- en slijtvast is. Schildersbedrijf040 brengt Boonstoppel Garantie Interieurlak aan in zijdeglans of hoogglans, na grondige voorbereiding: schuren van de oude laag, plamuren van beschadigingen en het aanbrengen van grondverf. Het resultaat is een gladde, duurzame afwerking die jarenlang tegen stoten en slijtage bestand is.',
        link: '/diensten/lakwerk',
        linkTekst: 'Meer over lakwerk',
      },
      {
        titel: 'Trappen & balustrades',
        beschrijving:
          'Een trap is een intensief belopen oppervlak dat extra slijtvaste verf of lak nodig heeft. Schildersbedrijf040 schuurt de trap volledig kaal, brengt een hechtingsgrondlaag aan en werkt af met meerdere lagen slijtvaste lak. Een geschilderde trap is binnen 2 tot 3 dagen klaar, waarbij u de trap tussendoor kunt blijven gebruiken doordat Schildersbedrijf040 om en om werkt.',
        link: '/diensten/lakwerk',
        linkTekst: 'Meer over lakwerk',
      },
      {
        titel: 'Houtwerk voorbehandelen',
        beschrijving:
          'De kwaliteit van binnenschilderwerk staat of valt met de voorbereiding. Schildersbedrijf040 repareert scheuren en gaatjes met professionele plamuur, verwijdert loszittende oude verflagen en schuurt alle oppervlakken voor optimale hechting. Zonder deze stappen bladdert nieuwe verf sneller af en worden oneffenheden zichtbaar in het eindresultaat.',
        link: '/diensten/houtrot-sanering',
        linkTekst: 'Houtrot sanering nodig?',
      },
      {
        titel: 'Kleuradvies',
        beschrijving:
          'De juiste kleurkeuze beïnvloedt hoe groot, licht en sfeer een ruimte aanvoelt. Schildersbedrijf040 adviseert op locatie over kleuren die passen bij uw interieur, lichtinval en persoonlijke voorkeur. Desgewenst brengt Schildersbedrijf040 proefvlakken aan, zodat u de kleur bij daglicht en kunstlicht kunt beoordelen voordat het hele schilderwerk begint.',
        link: '/contact',
        linkTekst: 'Vraag kleuradvies aan',
      },
      {
        titel: 'Schilderwerk bedrijfspanden',
        beschrijving:
          'Kantoren, praktijkruimtes en winkels vragen om binnenschilderwerk dat representatief is en tegen intensief gebruik bestand. Schildersbedrijf040 plant het schilderwerk buiten kantooruren of in fases, zodat uw bedrijfsvoering minimaal verstoord wordt. Professionele airless spuittechniek is hierbij een optie voor grote oppervlakken.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Bekijk latex spuiten',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-binnenschilderwerk',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Elk binnenschilderproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw binnenschilderwerk?',
    tekst:
      'Schildersbedrijf040 onderscheidt zich door vakmanschap, transparantie en het gebruik van uitsluitend Boonstoppel A-merk verf. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk project, van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Hoogst beoordeeld in de regio',
        beschrijving:
          '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.',
      },
      {
        titel: 'Uitsluitend Boonstoppel A-merk verf',
        beschrijving:
          'Watergedragen, oplosmiddelvrij en 8 tot 10 jaar bescherming. Beter voor de luchtkwaliteit en duurzamer dan budgetverf.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief materiaal, voorbereiding en oplevering.',
      },
      {
        titel: 'Nette en schone werkplek',
        beschrijving:
          'Meubels afdekken, vloeren beschermen en na afloop alles netjes achterlaten. Uw woning blijft leefbaar tijdens het schilderwerk.',
      },
      {
        titel: 'Persoonlijke betrokkenheid',
        beschrijving: 'Eigenaar Jordy Jacobs is bij elk project betrokken, u hebt altijd een vast aanspreekpunt dat uw wensen kent.',
      },
    ],
  },
  projecten: [
    { titel: 'Binnendeuren en kozijnen gelakt', label: '[JORDY: plaats] · [JORDY: m²]', na: images.binnendeur },
    { titel: 'Woonkamer, wanden en plafond geschilderd', label: '[JORDY: plaats] · [JORDY: m²]', na: images.woonkamer },
  ],
  faqs,
  faqTitel: 'Vragen over binnenschilderwerk',
  cta: {
    titel: 'Binnenwerk laten doen?',
    tekst:
      'Wilt u weten wat professioneel binnenschilderwerk voor uw woning kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function BinnenschilderwerkPage() {
  return <DienstTemplate d={pagina} />
}

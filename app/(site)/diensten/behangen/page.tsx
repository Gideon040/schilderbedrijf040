import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Behanger in Eindhoven en Helmond',
  description:
    'Behanger in Eindhoven en Helmond: vliesbehang €15 tot €25 per m², glasvezelbehang €18 tot €30 per m², oud behang verwijderen €5 tot €10. Vaste prijs vooraf.',
  keywords: [
    'behangen eindhoven',
    'behanger',
    'behanger eindhoven',
    'behanger helmond',
    'behangen kosten per m2',
    'vliesbehang eindhoven',
    'glasvezelbehang eindhoven',
    'fotobehang eindhoven',
    'behangen kosten',
    'schildersbedrijf eindhoven',
  ],
  openGraph: {
    title: 'Behangen Eindhoven | Schildersbedrijf040',
    description:
      'Professioneel behangen in Eindhoven en omgeving. Vliesbehang, glasvezelbehang en fotobehang vakkundig aangebracht door Schildersbedrijf040.',
    url: 'https://schildersbedrijf040.nl/diensten/behangen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/behangen',
  },
}

const faqs = [
  {
    question: 'Wat kost behangen per m² in Eindhoven?',
    answer:
      'Behangen kost gemiddeld €15 tot €30 per m², inclusief materiaal en exclusief btw. De prijs hangt af van het type behang: vliesbehang aanbrengen kost €15 tot €25 per m², terwijl fotobehang plaatsen uitkomt op €25 tot €40 per m² vanwege het nauwkeurige paswerk. Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor behangwerk. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9% in plaats van 21%.',
  },
  {
    question: 'Welk type behang is het beste voor mijn woning?',
    answer:
      'Vliesbehang is de populairste keuze voor woningen in Eindhoven omdat vliesbehang eenvoudig te verwerken is, niet krimpt en scheuren in de ondergrond overbrugt. Voor ruimtes met veel slijtage, zoals hallen en kinderkamers, adviseert Schildersbedrijf040 glasvezelbehang, omdat glasvezelbehang het meest duurzaam is en meerdere keren overschilderd kan worden. Fotobehang is ideaal als accentwand in woon- of slaapkamers.',
  },
  {
    question: 'Moet oud behang eerst verwijderd worden?',
    answer:
      'In de meeste gevallen verwijdert Schildersbedrijf040 het oude behang volledig voordat nieuw behang wordt aangebracht. Oud behang dat loslaat of blaasjes vertoont, veroorzaakt oneffenheden onder het nieuwe behang. Het verwijderen van oud behang kost €5 tot €10 per m². Bij vliesbehang kan de vlieslaag soms als ondergrond blijven zitten als deze nog goed hecht. Schildersbedrijf040 beoordeelt dat tijdens de inspectie.',
  },
  {
    question: 'Hoe lang duurt het behangen van een kamer?',
    answer:
      'Een gemiddelde kamer van 20 m² wandoppervlak behangen duurt 1 tot 2 werkdagen, afhankelijk van het type behang en de staat van de muren. Vliesbehang aanbrengen gaat sneller dan fotobehang, omdat fotobehang millimeternauwkeurig uitgelijnd moet worden. Schildersbedrijf040 plant het behangwerk efficiënt: terwijl de lijm intrekt op de ene baan, wordt de volgende baan op maat gesneden.',
  },
  {
    question: 'Kan Schildersbedrijf040 ook glasvezelbehang aanbrengen en overschilderen?',
    answer:
      'Schildersbedrijf040 brengt glasvezelbehang aan en schildert het vervolgens af in elke gewenste kleur. Glasvezelbehang is het meest duurzame behangtype: glasvezelbehang gaat 20 tot 30 jaar mee en kan tot 10 keer overschilderd worden. Dat maakt glasvezelbehang een uitstekende keuze voor verhuurders en woningeigenaren die regelmatig van kleur willen wisselen zonder opnieuw te hoeven behangen.',
  },
  {
    question: 'Moet de muur voorbehandeld worden voor behangen?',
    answer:
      'Een goede ondergrond is essentieel voor behangwerk dat jarenlang blijft zitten. Schildersbedrijf040 behandelt de muren voor met een grondlaag die de zuiging van de muur reguleert en de hechting van het behang verbetert. Scheuren worden gevuld, oneffenheden geschuurd en de muur wordt stofvrij gemaakt. Het voorbehandelen van muren kost €8 tot €12 per m² en voorkomt dat het behang loslaat of blaasjes vormt.',
  },
  {
    question: 'Wat is het verschil tussen vliesbehang en vinylbehang?',
    answer:
      'Vliesbehang heeft een vliesdrager die direct op de muur gelijmd wordt, de lijm gaat op de muur, niet op het behang. Dat maakt vliesbehang makkelijker te verwerken en voorkomt krimpen. Vinylbehang heeft een kunststof toplaag die vochtbestendig en afwasbaar is, waardoor vinylbehang geschikt is voor keukens en badkamers. Schildersbedrijf040 adviseert het juiste behangtype op basis van de ruimte en het gewenste gebruik.',
  },
  {
    question: 'Hoeveel rollen behang heb ik nodig per m² muur?',
    answer:
      'Reken op ongeveer één rol per 5 m² wand. Een standaardrol behang is 10,05 meter lang en 53 centimeter breed, goed voor zo’n 5,3 m². Omdat banen op maat worden gesneden en een patroon steeds moet aansluiten, gaat er altijd wat verloren; bij een groot patroon meer dan bij effen behang. Schildersbedrijf040 meet tijdens de gratis inspectie de wanden op en rekent uit hoeveel rollen nodig zijn, zodat u niet te weinig of veel te veel behang koopt.',
  },
  {
    question: 'Kan ik behangen en schilderen in één klus laten doen?',
    answer:
      'Ja, behangen en schilderen worden bij Schildersbedrijf040 in één planning uitgevoerd. Eerst gebeurt het werk dat stof en vocht geeft, zoals oud behang verwijderen, muren voorbehandelen en kozijnen schuren. Daarna volgen het schilderwerk aan plafonds, kozijnen en deuren en als laatste het nieuwe behang, zodat de verse banen schoon blijven. Voordeel: één aanspreekpunt, één offerte met vaste prijs en geen wachttijd tussen twee vakmensen. Bij de inspectie bespreekt Schildersbedrijf040 welke wanden behang krijgen en welke geschilderd worden.',
    link: { href: '/diensten/binnenschilderwerk', tekst: 'Meer over binnenschilderwerk.' },
  },
  {
    question: 'Werkt de behanger van Schildersbedrijf040 ook in Helmond?',
    answer:
      'Ja, Schildersbedrijf040 behangt in Eindhoven en de hele regio eromheen, waaronder Helmond, Veldhoven, Best, Nuenen, Geldrop en Valkenswaard. De werkwijze en prijzen zijn overal gelijk: vliesbehang kost €15 tot €25 per m² en glasvezelbehang €18 tot €30 per m², inclusief materiaal en exclusief btw. Eigenaar Jordy Jacobs komt zelf langs voor de gratis inspectie, meet de wanden op en geeft advies over het behangtype. Binnen 48 uur ontvangt u een offerte met vaste prijs.',
  },
  {
    question: 'Geeft Schildersbedrijf040 garantie op behangwerk?',
    answer:
      'Schildersbedrijf040 geeft garantie op al het uitgevoerde behangwerk. De garantie dekt zowel het vakmanschap, correcte hechting, strakke naden, naadloos patroonverloop, als de voorbereiding van de ondergrond. Mocht er onverhoopt een naad loslaten of een blaasje ontstaan, dan herstelt Schildersbedrijf040 het kosteloos. Door professionele voorbereiding en het gebruik van kwalitatieve behanglijm is de kans op problemen minimaal.',
  },
]

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie & advies',
    beschrijving:
      'Schildersbedrijf040 beoordeelt de staat van de muren, bespreekt uw wensen qua behangtype en geeft advies over vliesbehang, glasvezelbehang of fotobehang.',
  },
  {
    nummer: 2,
    titel: 'Offerte op maat',
    beschrijving:
      'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief behang, lijm, voorbehandeling en arbeidskosten.',
  },
  {
    nummer: 3,
    titel: 'Voorbereiding',
    beschrijving:
      'Oud behang verwijderen, muren gladmaken, scheuren vullen en een grondlaag aanbrengen, de basis voor behangwerk dat jarenlang blijft zitten.',
  },
  {
    nummer: 4,
    titel: 'Behangen & oplevering',
    beschrijving:
      'Vakkundig aanbrengen van het behang met strakke naden en naadloos patroonverloop, controle samen met u en een netjes achtergelaten werkplek.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/behangen/#service',
  name: 'Behangen',
  description:
    'Professioneel behangen voor woningen en bedrijfspanden in Eindhoven en omgeving. Vliesbehang, glasvezelbehang en fotobehang vakkundig aangebracht door Schildersbedrijf040.',
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
  serviceType: 'Behangen',
  offers: serviceOffers('behangen'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Behangdiensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Vliesbehang aanbrengen' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Glasvezelbehang aanbrengen' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Fotobehang plaatsen' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Oud behang verwijderen' },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Behangen', item: 'https://schildersbedrijf040.nl/diensten/behangen' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  // Antwoorden met een open punt voor Jordy niet in het schema
  mainEntity: faqs.filter((f) => !f.answer.includes('[JORDY')).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const pagina: DienstPagina = {
  slug: 'behangen',
  naam: 'Behangen',
  h1: 'Behangen in Eindhoven',
  heroTekst: (
    <p>
      Behangen kost gemiddeld €15 tot €25 per m² voor vliesbehang en €18 tot €30 per m² voor glasvezelbehang, inclusief materiaal. Een kamer
      met 20 m² wandoppervlak is meestal in 1 tot 2 werkdagen klaar. Na een gratis inspectie krijgt u een offerte met vaste prijs. Een
      standaardrol behang dekt ongeveer 5 m² wand. Behangen combineert u eenvoudig met{' '}
      <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link> in één planning.
    </p>
  ),
  heroImg: images.behang,
  kerncijfers: [
    { waarde: '15 tot 20 jaar', label: 'Levensduur vliesbehang' },
    { waarde: '10x', label: 'Glasvezel overschilderbaar' },
    { waarde: '€15 tot €30', label: 'Prijs per m²' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-professioneel-behangen',
    h2: 'Wat is professioneel behangen?',
    body: (
      <>
        <p>
          Behangen door Schildersbedrijf040 geeft uw woning in Eindhoven en omgeving een compleet nieuwe uitstraling. Van vliesbehang en
          glasvezelbehang tot fotobehang. Schildersbedrijf040 brengt elk behangtype vakkundig aan met strakke naden en een duurzaam
          resultaat.
        </p>
        <p>
          Behangen is het vakkundig aanbrengen van wandbekleding, van vliesbehang en glasvezelbehang tot fotobehang en textiel, op muren en
          plafonds in woningen en bedrijfspanden. Professioneel behangen verschilt van zelf behangen doordat de voorbereiding van de
          ondergrond en het nauwkeurige uitlijnen van patronen het verschil maken tussen een resultaat dat 15 jaar meegaat en behangwerk dat
          na 2 jaar loslaat of blaasjes vertoont.
        </p>
        <p>
          Schildersbedrijf040 voert behangwerk uit voor woningen, appartementen en bedrijfspanden in Eindhoven en omgeving. Of het gaat om
          een accentwand met fotobehang of een volledige woning met vliesbehang, elk behangproject begint met een inspectie van de
          ondergrond, advies over het juiste behangtype en een gedetailleerde offerte met vaste prijs.
        </p>
        <p>
          Naast het esthetische aspect biedt behang praktische voordelen: vliesbehang overbrugt hairline scheuren in de ondergrond,
          glasvezelbehang versterkt kwetsbare muren en vinylbehang is vochtbestendig en afwasbaar. Behangen is daarmee niet alleen een
          stijlkeuze, maar ook een functionele investering in het onderhoud van uw woning.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-behangen',
    h2: 'Wat kost behangen?',
    body: (
      <>
        <p>
          Behangen kost gemiddeld €15 tot €30 per m² inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van het type
          behang, de staat van de ondergrond en of oud behang verwijderd moet worden. Vliesbehang aanbrengen is voordeliger per m² dan
          fotobehang, omdat fotobehang meer voorbereidingstijd en nauwkeurig paswerk vereist.
        </p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor behangwerk, inclusief materiaal. Voor woningen ouder dan 2 jaar
          geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij een behangproject van €1.500
          bespaart u daarmee bijna €180 ten opzichte van het standaard btw-tarief van 21%.
        </p>
        <p>
          Schildersbedrijf040 werkt altijd met een vaste offerte, geen verrassingen achteraf. De investering in professioneel behangen
          betaalt zich terug: vakkundig aangebracht vliesbehang gaat 15 tot 20 jaar mee, terwijl zelf aangebracht behang vaak al na 5 jaar
          loslaat door onjuiste voorbereiding of verkeerde lijm.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="behang-verwijderen-en-daarna-verven" className="h-section mt-6 scroll-mt-28">
        Behang verwijderen en daarna verven
      </h2>
      <p>
        Oud behang laten verwijderen kost €5 tot €10 per m², en daarna kan de muur geverfd of opnieuw behangd worden. Hoe het behang eraf
        gaat, hangt af van het type. Vliesbehang dat op een gegronde, gladde muur is aangebracht, laat zich vaak droog in hele banen van de
        muur trekken. Papierbehang wordt eerst geperforeerd en daarna afgeweekt of afgestoomd, zodat de lijm loslaat.
      </p>
      <p>
        Na het verwijderen blijft er bijna altijd behanglijm op de muur achter. Die lijmresten moeten er helemaal af, want muurverf hecht
        slecht op lijm en laat dan plekken of bladders zien. Schildersbedrijf040 wast de muur af, vult gaten en scheuren en brengt een
        voorstrijkmiddel aan op zuigende delen. Voorbehandelen kost €8 tot €12 per m². Daarna is de muur klaar voor{' '}
        <Link href="/diensten/binnenschilderwerk">muurverf in de kleur van uw keuze</Link> of voor nieuw behang.
      </p>
      <p>
        Wilt u zelf aan de slag? In het artikel over{' '}
        <Link href="/blog/verven-na-behang">verven na het verwijderen van behang</Link> leest u hoe u de muur na het
        verwijderen van behang voorbereidt en verft. Liever alles in één keer uit handen geven?{' '}
        <Link href="/contact">Vraag een gratis inspectie aan</Link>, dan staan verwijderen, voorbehandelen en verven samen in één offerte.
      </p>
    </>
  ),
  soorten: {
    id: 'soorten-behang',
    h2: 'Soorten behang',
    intro:
      'Elk behangtype heeft unieke eigenschappen die passen bij specifieke ruimtes en wensen. Schildersbedrijf040 adviseert het juiste behang op basis van uw situatie.',
    kaarten: [
      {
        titel: 'Vliesbehang',
        beschrijving:
          'Vliesbehang is de populairste keuze voor woningen in Eindhoven. De vliesdrager maakt vliesbehang dimensioneel stabiel, vliesbehang krimpt niet, scheurt niet en overbrugt kleine scheuren in de ondergrond. De behanglijm wordt direct op de muur aangebracht in plaats van op het behang, waardoor vliesbehang sneller en schoner te verwerken is. Schildersbedrijf040 brengt vliesbehang aan vanaf €15 per m².',
        link: '/contact',
        linkTekst: 'Offerte vliesbehang',
      },
      {
        titel: 'Glasvezelbehang',
        beschrijving:
          'Glasvezelbehang is het meest duurzame behangtype dat Schildersbedrijf040 aanbrengt. Glasvezelbehang is geweven uit glasvezels, waardoor glasvezelbehang extreem sterk is en muren versterkt tegen scheuren en beschadigingen. Het grootste voordeel van glasvezelbehang is de overschilderbaarheid: tot 10 keer een nieuwe kleur aanbrengen zonder opnieuw te behangen. Ideaal voor verhuurders en woningen met intensief gebruik.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Combineer met schilderwerk',
      },
      {
        titel: 'Vinylbehang',
        beschrijving:
          'Vinylbehang heeft een kunststof toplaag die vochtbestendig, afwasbaar en slijtvast is. Dat maakt vinylbehang bijzonder geschikt voor keukens, badkamers en kinderkamers, ruimtes waar muren vaker vuil worden of in contact komen met vocht. Schildersbedrijf040 brengt vinylbehang professioneel aan, inclusief het zorgvuldig afwerken rond stopcontacten, ramen en hoeken.',
        link: '/contact',
        linkTekst: 'Vraag advies aan',
      },
      {
        titel: 'Fotobehang',
        beschrijving:
          'Fotobehang creëert een unieke accentwand met een fotografisch beeld, patroon of kunstwerk op groot formaat. Fotobehang vereist millimeternauwkeurig paswerk om de banen naadloos op elkaar aan te laten sluiten. Schildersbedrijf040 heeft ruime ervaring met het plaatsen van fotobehang en zorgt voor een vlekkeloos eindresultaat, zonder zichtbare naden of verschuivingen in het beeld.',
        link: '/projecten',
        linkTekst: 'Bekijk projecten',
      },
      {
        titel: 'Textiel & natuurbehang',
        beschrijving:
          'Textiel- en natuurbehang, zoals jute, linnen, bamboe en gras, geeft muren een warme, organische uitstraling met een tactiele structuur. Natuurbehang is een premium keuze die sfeer toevoegt aan woon- en slaapkamers. Schildersbedrijf040 verwerkt textiel- en natuurbehang met speciale lijm en techniek, omdat natuurlijke materialen gevoeliger zijn voor vocht en vlekken tijdens het aanbrengen.',
        link: '/contact',
        linkTekst: 'Vraag offerte aan',
      },
      {
        titel: 'Overschilderbaar behang',
        beschrijving:
          'Overschilderbaar behang combineert de voordelen van behang en verf: de structuur en scheuroverbrugging van behang met de kleurvrijheid van schilderwerk. Schildersbedrijf040 brengt overschilderbaar behang aan en schildert het af in elke gewenste kleur met hoogwaardige muurverf. Een praktische oplossing voor muren met veel scheuren of oneffenheden die met alleen verf niet weg te werken zijn.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Bekijk latex spuiten',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-behangen',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Elk behangproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw behangwerk?',
    tekst:
      'Schildersbedrijf040 onderscheidt zich door vakmanschap, transparantie en persoonlijke betrokkenheid bij elk behangproject. Eigenaar Jordy Jacobs is aanwezig bij de inspectie en eindcontrole, dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Hoogst beoordeeld in de regio',
        beschrijving:
          '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.',
      },
      {
        titel: 'Advies over het juiste behangtype',
        beschrijving:
          'Vliesbehang, glasvezelbehang, fotobehang of vinylbehang. Schildersbedrijf040 adviseert op basis van de ruimte, het gebruik en uw budget.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief behang, lijm, voorbehandeling en oplevering.',
      },
      {
        titel: 'Zorgvuldige voorbereiding',
        beschrijving: 'Oud behang verwijderen, muren gladmaken en gronden, de basis voor behangwerk dat 15 tot 20 jaar blijft zitten.',
      },
      {
        titel: 'Persoonlijke betrokkenheid',
        beschrijving: 'Eigenaar Jordy Jacobs is bij elk project betrokken, u hebt altijd een vast aanspreekpunt dat uw wensen kent.',
      },
    ],
  },
  projecten: [{ titel: 'Accentwand behangen rond de haard', label: '[JORDY: plaats]', na: images.behang }],
  faqs,
  faqTitel: 'Vragen over behangen',
  cta: {
    titel: 'Laten behangen?',
    tekst:
      'Wilt u weten wat professioneel behangen voor uw woning kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function BehangenPage() {
  return <DienstTemplate d={pagina} />
}

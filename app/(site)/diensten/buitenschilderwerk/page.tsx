import type { Metadata } from 'next'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Buitenschilderwerk Eindhoven | Gevels, Kozijnen & Deuren Duurzaam Geschilderd',
  description:
    'Buitenschilderwerk door Schildersbedrijf040 in Eindhoven. Gevels, kozijnen en deuren beschermd met Boonstoppel verf. ✓ Houtrot inspectie ✓ Hoogst beoordeeld ✓ Gratis offerte.',
  keywords: [
    'buitenschilderwerk eindhoven',
    'buitenschilder eindhoven',
    'kozijnen schilderen buiten',
    'gevel schilderen',
    'schildersbedrijf eindhoven',
    'buitenschilderwerk kosten',
    'houtwerk schilderen buiten',
  ],
  openGraph: {
    title: 'Buitenschilderwerk Eindhoven | Schildersbedrijf040',
    description:
      'Professioneel buitenschilderwerk in Eindhoven en omgeving. Gevels, kozijnen en deuren duurzaam beschermd met Boonstoppel verf.',
    url: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
  },
}

const faqs = [
  {
    question: 'Wat kost buitenschilderwerk per m² in 2026?',
    answer:
      'Buitenschilderwerk kost gemiddeld €35 tot €45 per m² inclusief materiaal en exclusief btw. Kozijnen schilderen buiten kost €50 tot €100 per kozijn, afhankelijk van de staat en het formaat. Schildersbedrijf040 hanteert een uurtarief van €40 tot €55 voor buitenschilderwerk. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 werkt altijd met een vaste offerte, zodat u vooraf precies weet wat het buitenschilderwerk kost.',
  },
  {
    question: 'Wanneer is het beste seizoen voor buitenschilderwerk?',
    answer:
      'De ideale periode voor buitenschilderwerk is mei, juni en september, wanneer de temperatuur stabiel tussen 15°C en 25°C ligt. Buitenverf hecht en droogt optimaal bij 18 tot 20°C en een luchtvochtigheid onder 85%. Is het kouder dan 10°C, dan vertraagt het droogproces en hecht de verf minder goed. Is het warmer dan 25°C, dan droogt de verf te snel, wat strepen of blaasjes kan veroorzaken. Schildersbedrijf040 plant buitenschilderwerk altijd in de juiste weersomstandigheden.',
  },
  {
    question: 'Hoe lang gaat buitenschilderwerk mee?',
    answer:
      'Professioneel buitenschilderwerk met Boonstoppel verf gaat 8 tot 10 jaar mee. Budgetverf houdt gemiddeld 3 tot 5 jaar, waardoor u vaker moet laten schilderen en de totale kosten hoger uitvallen. De levensduur hangt ook af van de ligging van het houtwerk: kozijnen op het zuiden en westen krijgen meer zon en regen, waardoor de verf daar sneller slijt. Schildersbedrijf040 houdt hier rekening mee door op belaste delen een extra verflaag aan te brengen.',
  },
  {
    question: 'Controleert Schildersbedrijf040 op houtrot voor het schilderen?',
    answer:
      'Schildersbedrijf040 voert bij elk buitenschilderproject een grondige houtrot inspectie uit. Houtrot wordt ontdekt door het houtwerk systematisch af te tikken en te prikken met een priem. Aangetast hout wordt uitgefreesd, behandeld met houtharder en opgebouwd met epoxy. Pas daarna wordt het geschilderd. Zonder deze stap verbergt de verf het probleem, terwijl de houtrot onder de verflaag verder vreet en het kozijn uiteindelijk vervangen moet worden.',
  },
  {
    question: 'Is steigerhuur inbegrepen in de offerte?',
    answer:
      'Schildersbedrijf040 vermeldt steiger- of ladderkosten altijd apart in de offerte, zodat u precies weet waar de kosten zitten. Voor de meeste eengezinswoningen volstaan professionele ladders en een werkplatform. Bij hogere gevels, dakkapellen of moeilijk bereikbare delen kan een steiger nodig zijn. Schildersbedrijf040 beoordeelt dit tijdens de inspectie en adviseert over de meest kostenefficiënte oplossing.',
  },
  {
    question: 'Welke verf gebruikt Schildersbedrijf040 voor buitenschilderwerk?',
    answer:
      'Schildersbedrijf040 werkt uitsluitend met de Boonstoppel Garantie-lijn voor buitenschilderwerk. De Boonstoppel Garantie Systeemverf is een duurzame zijdeglans buitenverf die zowel als grond- en aflak kan dienen, ideaal voor onderhoudswerk. Voor nieuw houtwerk gebruikt Schildersbedrijf040 de Boonstoppel Garantie Grondlakverf 2000 als basis. Boonstoppel buitenverf is bestand tegen zon, regen en vorst zonder te bladderen of verkleuren.',
  },
  {
    question: 'Kan buitenschilderwerk ook in het najaar uitgevoerd worden?',
    answer:
      'Buitenschilderwerk is mogelijk tot in oktober, mits de temperatuur boven 10°C blijft en de luchtvochtigheid onder 85% is. September is zelfs een van de ideale maanden: stabiel weer, minder felle zon en lagere luchtvochtigheid dan in de zomer. Schildersbedrijf040 monitort de weersvoorspelling en plant het werk op de droge dagen. In de wintermaanden (november tot maart) is buitenschilderwerk in Nederland niet aan te raden vanwege de lage temperaturen en hoge luchtvochtigheid.',
  },
  {
    question: 'Hoe bereid ik mijn woning voor op buitenschilderwerk?',
    answer:
      'Eigenlijk hoeft u weinig zelf te doen. Schildersbedrijf040 verzorgt de volledige voorbereiding: loszittende verf wordt geschraapt en geschuurd, houtrot wordt behandeld, scheuren worden gevuld en alle oppervlakken worden ontvet. Het helpt als u planten en tuinmeubelen iets van de gevel af plaatst, zodat Schildersbedrijf040 vrij kan werken. De inspectie vooraf maakt duidelijk wat er precies moet gebeuren.',
  },
]

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie & houtrot check',
    beschrijving:
      'Schildersbedrijf040 inspecteert alle buitenonderdelen op houtrot, scheuren en loszittende verflagen. U krijgt direct advies over de staat van het houtwerk.',
  },
  {
    nummer: 2,
    titel: 'Offerte op maat',
    beschrijving:
      'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief materiaal, eventuele steigerhuur en houtrotreparatie.',
  },
  {
    nummer: 3,
    titel: 'Voorbereiding',
    beschrijving:
      'Schrapen, schuren, ontvetten, houtrot behandelen en gronden. De voorbereiding is bij buitenschilderwerk minstens de helft van het werk, en bepalend voor de levensduur.',
  },
  {
    nummer: 4,
    titel: 'Schilderen & oplevering',
    beschrijving:
      'Boonstoppel buitenverf aanbrengen in meerdere lagen, op de juiste weersomstandigheden. Eindcontrole samen met u en garantie op het resultaat.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk/#service',
  name: 'Buitenschilderwerk',
  description:
    'Professioneel buitenschilderwerk voor woningen en bedrijfspanden in Eindhoven en omgeving. Gevels, kozijnen en deuren duurzaam beschermd met Boonstoppel verf.',
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
  serviceType: 'Buitenschilderwerk',
  offers: serviceOffers('buitenschilderwerk'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Buitenschilderwerk diensten',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gevels schilderen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kozijnen en deuren schilderen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houtrot inspectie en behandeling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boeiboorden en windveren schilderen' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Buitenschilderwerk', item: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const pagina: DienstPagina = {
  slug: 'buitenschilderwerk',
  naam: 'Buitenschilderwerk',
  h1: 'Buitenschilderwerk in Eindhoven',
  heroTekst: (
    <p>
      Gevels, kozijnen, deuren en boeidelen laten schilderen kost gemiddeld €35 tot €45 per m² voor de gevel en €50 tot €100 per kozijn,
      inclusief voorbereiding en Boonstoppel-verf. Een rijtjeswoning is meestal in 5 tot 8 werkdagen klaar. Na een gratis inspectie,
      inclusief controle op houtrot, krijgt u een offerte met vaste prijs.
    </p>
  ),
  heroImg: images.tuinhuis,
  kerncijfers: [
    { waarde: '8 tot 10 jaar', label: 'Levensduur' },
    { waarde: '15 tot 25°C', label: 'Ideale temperatuur' },
    { waarde: 'Mei tot sep', label: 'Beste maanden' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-buitenschilderwerk',
    h2: 'Waarom is buitenschilderwerk zo belangrijk?',
    body: (
      <>
        <p>
          Buitenschilderwerk beschermt uw woning tegen regen, zon en vorst, en bepaalt de uitstraling van uw gevel. Schildersbedrijf040
          schildert gevels, kozijnen, deuren en boeiboorden in Eindhoven en omgeving met Boonstoppel verf voor een resultaat dat 8 tot 10
          jaar meegaat.
        </p>
        <p>
          Buitenschilderwerk is de eerste verdedigingslinie van uw woning tegen het Nederlandse klimaat. Regen, zon, vorst en wind tasten
          onbeschermd houtwerk aan, kozijnen zwellen op, verf bladdert en zonder tijdig onderhoud ontstaat houtrot. Een kozijn vervangen
          kost al snel €500 tot €1.500, terwijl tijdig buitenschilderwerk met Boonstoppel verf uw houtwerk 8 tot 10 jaar beschermt voor een
          fractie van dat bedrag.
        </p>
        <p>
          Schildersbedrijf040 voert buitenschilderwerk uit voor woningen, appartementen en bedrijfspanden in Eindhoven en omgeving. Elk
          project begint met een grondige inspectie op houtrot en de staat van bestaande verflagen. Schildersbedrijf040 schraapt, schuurt en
          grondverf voordat er ook maar één laag aflak aangebracht wordt, want de voorbereiding bepaalt of het buitenschilderwerk 3 jaar of
          10 jaar meegaat.
        </p>
        <p>
          Naast bescherming bepaalt buitenschilderwerk de uitstraling van uw woning. Een vers geschilderde gevel verhoogt de waarde en geeft
          een verzorgde indruk. Schildersbedrijf040 adviseert over kleuren die passen bij de bouwstijl en de omgeving, van klassieke
          Eindhovense rijtjeswoningen tot vrijstaande villa's in Waalre.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-buitenschilderwerk',
    h2: 'Wat kost buitenschilderwerk?',
    body: (
      <>
        <p>
          Buitenschilderwerk kost gemiddeld €35 tot €45 per m² inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van
          drie factoren: de staat van het houtwerk, de bereikbaarheid (ladder of steiger) en de hoeveelheid houtrotreparatie die nodig is.
          Kozijnen schilderen buiten is duurder per stuk dan muurwerk, omdat elk kozijn individueel geschuurd, geground en gelakt moet
          worden.
        </p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €40 tot €55 voor buitenschilderwerk. Voor een gemiddelde eengezinswoning in
          Eindhoven bedragen de kosten voor volledig buitenschilderwerk €2.500 tot €6.000, afhankelijk van de grootte en de staat. Bij
          woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%.
        </p>
        <p>
          De investering in Boonstoppel verf betaalt zich dubbel terug: het buitenschilderwerk gaat 8 tot 10 jaar mee in plaats van 3 tot 5
          jaar bij budgetverf, en u voorkomt dure houtrotreparaties of kozijnvervangingen die ontstaan door slecht onderhoud.
        </p>
      </>
    ),
  },
  extra: undefined,
  soorten: {
    id: 'soorten-buitenschilderwerk',
    h2: 'Soorten buitenschilderwerk',
    intro:
      'Elk buitenoppervlak vraagt een andere aanpak, ander materiaal en specifieke expertise. Schildersbedrijf040 beheerst alle vormen van buitenschilderwerk.',
    kaarten: [
      {
        titel: 'Kozijnen & deuren',
        beschrijving:
          'Houten kozijnen en buitendeuren krijgen de meeste weersinvloeden te verduren. Schildersbedrijf040 schuurt de oude verflaag, repareert eventuele houtrotschade, brengt Boonstoppel Garantie Grondlakverf aan en werkt af met twee lagen Boonstoppel Garantie Zijdeglans. Het resultaat is een weerbestendige, gladde afwerking die niet bladdert of verkleurt.',
        link: '/diensten/houtrot-sanering',
        linkTekst: 'Houtrot? Bekijk sanering',
      },
      {
        titel: 'Gevels & buitenmuren',
        beschrijving:
          'Gestuukte of houten gevels beschermen met buitenmuurverf houdt vocht buiten en voorkomt alg- en schimmelgroei. Schildersbedrijf040 reinigt de gevel, herstelt scheuren in het stucwerk en brengt ademende buitenmuurverf aan die vocht van binnenuit laat ontsnappen maar regenwater buiten houdt.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Grote gevel? Latex spuiten',
      },
      {
        titel: 'Boeiboorden & windveren',
        beschrijving:
          'Boeiboorden en windveren zitten op het hoogste punt van de gevel en zijn daardoor extra blootgesteld aan wind en regen. Schildersbedrijf040 inspecteert deze onderdelen altijd op houtrot, omdat problemen hier vaak onzichtbaar zijn vanaf de grond. Na reparatie en grondverf brengt Schildersbedrijf040 weerbestendige aflak aan voor langdurige bescherming.',
        link: '/contact',
        linkTekst: 'Inspectie aanvragen',
      },
      {
        titel: 'Dakkapellen',
        beschrijving:
          'Een dakkapel heeft kozijnen, boeiboorden én een zinken of houten bekleding die allemaal onderhoud nodig hebben. Schildersbedrijf040 combineert het schilderwerk van de dakkapel met de rest van het buitenwerk, zodat alles in één keer wordt aangepakt. Dat scheelt in steiger- of ladderkosten en levert een uniform eindresultaat op.',
        link: '/contact',
        linkTekst: 'Offerte dakkapel',
      },
      {
        titel: 'Houtrot behandeling',
        beschrijving:
          'Houtrot is de grootste vijand van buitenhoutwerk. Schildersbedrijf040 spoort houtrot op door het hout systematisch af te tikken en te prikken met een priem. Aangetast hout wordt uitgefreesd, behandeld met houtharder en opgebouwd met professionele epoxyvulling. Pas daarna wordt het houtwerk geschilderd, zodat de reparatie onzichtbaar is en het kozijn weer jarenlang meegaat.',
        link: '/diensten/houtrot-sanering',
        linkTekst: 'Meer over houtrot sanering',
      },
      {
        titel: 'Onderhoudscontract',
        beschrijving:
          'Regelmatig schilderonderhoud voorkomt grote en dure reparaties. Schildersbedrijf040 biedt onderhoudsadvies aan na elk project: wanneer het houtwerk opnieuw gecontroleerd moet worden en wanneer een nieuwe schilderbeurt nodig is. Zo blijft uw buitenschilderwerk altijd in topconditie en voorkomt u onnodig hoge kosten.',
        link: '/contact',
        linkTekst: 'Vraag advies aan',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-buitenschilderwerk',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Buitenschilderwerk vraagt om een zorgvuldige aanpak. Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering, zodat u weet wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw buitenschilderwerk?',
    tekst:
      'Buitenschilderwerk is een vak apart, het vergt kennis van weersomstandigheden, houtsoorten en verfsystemen. Schildersbedrijf040 combineert die expertise met transparante communicatie en persoonlijke betrokkenheid van eigenaar Jordy Jacobs. Het resultaat: een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Grondige houtrot inspectie inbegrepen',
        beschrijving:
          'Elk buitenschilderproject begint met een systematische controle op houtrot, zodat problemen worden opgelost vóór het schilderen, niet erna.',
      },
      {
        titel: 'Uitsluitend Boonstoppel buitenverf',
        beschrijving:
          'Bestand tegen zon, regen en vorst. 8 tot 10 jaar bescherming, aanzienlijk langer dan budgetverf die na 3 jaar al bladdert.',
      },
      {
        titel: 'Weersafhankelijke planning',
        beschrijving:
          'Schildersbedrijf040 plant buitenschilderwerk op de juiste weersomstandigheden: tussen 15°C en 25°C, luchtvochtigheid onder 85%.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving:
          'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief materiaal, voorbereiding en eventuele steigerhuur apart vermeld.',
      },
      {
        titel: 'Ervaring met lokale bouwstijlen',
        beschrijving:
          "Van naoorlogse rijtjeswoningen in Woensel-Zuid tot villa's in Waalre. Schildersbedrijf040 kent de bouwstijlen en het houtwerk in de regio Eindhoven.",
      },
    ],
  },
  projecten: [
    { titel: 'Tuinhuis wit geschilderd', label: '[JORDY: plaats]', na: images.tuinhuis },
    { titel: 'Dakkapel geschilderd', label: '[JORDY: plaats]', na: images.dakkapel },
  ],
  faqs,
  faqTitel: 'Vragen over buitenschilderwerk',
  cta: {
    titel: 'Buitenwerk laten doen?',
    tekst:
      'Wilt u weten wat professioneel buitenschilderwerk voor uw woning kost? Schildersbedrijf040 komt graag langs voor een gratis houtrot inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function BuitenschilderwerkPage() {
  return <DienstTemplate d={pagina} />
}

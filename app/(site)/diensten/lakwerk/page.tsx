import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { prijzen } from '@/lib/prices'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Deuren en kozijnen lakken Eindhoven',
  description:
    'Deuren, kozijnen en trappen laten lakken in Eindhoven: binnendeur €80 tot €120, trap €350 tot €600, met Boonstoppel-lak. Gratis inspectie en vaste prijs.',
  keywords: [
    'lakwerk eindhoven',
    'kozijnen lakken eindhoven',
    'deuren lakken eindhoven',
    'deuren lakken kosten',
    'trap laten schilderen kosten',
    'trappen lakken',
    'lakwerk kosten',
    'schildersbedrijf eindhoven',
    'houtwerk lakken',
  ],
  openGraph: {
    title: 'Lakwerk Eindhoven | Schildersbedrijf040',
    description:
      'Professioneel lakwerk in Eindhoven en omgeving. Kozijnen, deuren en trappen vakkundig gelakt met Boonstoppel lak door Schildersbedrijf040.',
    url: 'https://schildersbedrijf040.nl/diensten/lakwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/lakwerk',
  },
}

const faqs = [
  {
    question: 'Wat is het verschil tussen hoogglans, zijdeglans en mat lakwerk?',
    answer:
      'Hoogglans lak reflecteert het meeste licht en geeft kozijnen en deuren een strakke, klassieke uitstraling. Zijdeglans heeft een subtiele glans die minder vuil aantrekt en kleine oneffenheden beter verbergt dan hoogglans. Matte lak wordt vooral toegepast op meubels en decoratief houtwerk voor een moderne, ingetogen look. Schildersbedrijf040 adviseert zijdeglans voor de meeste kozijnen en deuren in Eindhoven, omdat het de beste balans biedt tussen uitstraling en onderhoud.',
  },
  {
    question: 'Hoe lang duurt het voordat lakwerk volledig gedroogd is?',
    answer:
      'Lakwerk heeft een droogtijd van 16 tot 24 uur per laag, afhankelijk van de temperatuur en luchtvochtigheid. Na het aanbrengen is de lak stofdroog na 4 tot 6 uur, maar volledig uitharden duurt 5 tot 7 dagen. Schildersbedrijf040 adviseert om deuren en kozijnen in die periode voorzichtig te behandelen en niet af te sluiten. Boonstoppel Interieurlak droogt sneller dan traditionele oplosmiddelhoudende lakken, waardoor het lakwerk eerder belastbaar is.',
  },
  {
    question: 'Welke voorbereiding is nodig voor kozijnen lakken?',
    answer:
      'Kozijnen lakken begint altijd met grondige voorbereiding: de oude laklaag wordt geschuurd om hechting te garanderen, loszittende verf wordt verwijderd, en scheuren of beschadigingen worden gevuld met professionele plamuur. Bij kaal hout brengt Schildersbedrijf040 eerst een grondlaag aan om het hout te beschermen tegen vocht. Deze voorbereiding neemt circa 60% van de totale werktijd in beslag, maar bepaalt hoe lang het lakwerk meegaat.',
  },
  {
    question: 'Wat is beter: watergedragen of oplosmiddelhoudende lak?',
    answer:
      'Watergedragen lak is tegenwoordig de standaard voor binnenwerk: vrijwel geurloos, sneller droog en beter voor de luchtkwaliteit. Boonstoppel Garantie Interieurlak is een watergedragen lak die qua dekking en hardheid vergelijkbaar is met traditionele oplosmiddelhoudende lakken. Schildersbedrijf040 gebruikt watergedragen lak voor al het binnenlakwerk. Voor buitenhoutwerk zet Schildersbedrijf040 de Boonstoppel Garantie Zijdeglans SB in, een hybride lak die extra bestendig is tegen weersinvloeden.',
  },
  {
    question: 'Hoeveel kost het om kozijnen te laten lakken in Eindhoven?',
    answer:
      'Kozijnen lakken kost gemiddeld €35 tot €75 per kozijn voor binnenwerk en €50 tot €100 per kozijn voor buitenwerk, inclusief materiaal en exclusief btw. De prijs hangt af van de staat van het houtwerk, het aantal lagen en de bereikbaarheid. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 maakt altijd een offerte op maat na inspectie ter plaatse.',
  },
  {
    question: 'Hoe vaak moeten kozijnen en deuren opnieuw gelakt worden?',
    answer:
      'Binnenkozijnen en binnendeuren die gelakt zijn met Boonstoppel Interieurlak gaan 8 tot 10 jaar mee voordat overlakken nodig is. Buitenkozijnen zijn meer blootgesteld aan weer en wind en vragen elke 5 tot 7 jaar om onderhoud. Regelmatig controleren op beschadigingen en deze tijdig bijwerken verlengt de levensduur aanzienlijk. Schildersbedrijf040 adviseert klanten in Eindhoven en omgeving over het juiste onderhoudsinterval.',
  },
  {
    question: 'Kan Schildersbedrijf040 ook radiatoren en leidingen lakken?',
    answer:
      'Schildersbedrijf040 lakt radiatoren, verwarmingsbuizen en waterleidingen met speciale hittebestendige lak die niet verkleurt door warmte. De radiator wordt eerst geschuurd en ontvet, waarna een hechtprimer en twee lagen lakverf worden aangebracht. Een radiator lakken kost gemiddeld €80 tot €120 per stuk. Het lakwerk wordt uitgevoerd wanneer de verwarming uit staat, zodat de lak gelijkmatig droogt.',
  },
  {
    question: 'Wat kost het om een binnendeur te laten lakken?',
    answer:
      'Een binnendeur laten lakken kost gemiddeld €80 tot €120 per deur, inclusief voorbereiding en Boonstoppel-lak en exclusief btw. Een buitendeur kost €100 tot €150, omdat buitenlak meer moet verdragen en de voorbereiding zwaarder is. De prijs hangt vooral af van de staat van de oude laklaag en het type deur: een paneeldeur met profielen vraagt meer schuur- en kwastwerk dan een vlakke deur. Laat u meerdere deuren tegelijk lakken, dan worden ze in één planning meegenomen. Na de gratis inspectie krijgt u een vaste prijs per deur.',
  },
  {
    question: 'Wat kost het om een trap te laten lakken of schilderen?',
    answer:
      'Een trap laten lakken kost gemiddeld €350 tot €600, inclusief schuren, gronden en meerdere lagen slijtvaste lak, exclusief btw. Het aantal treden en de staat van het hout bepalen waar u in die bandbreedte uitkomt: een trap met veel slijtplekken vraagt meer schuurwerk. Een geschilderde trap is binnen 2 tot 3 dagen klaar. Schildersbedrijf040 werkt om en om, zodat u de trap tussendoor kunt blijven gebruiken. De exacte prijs hoort u na de gratis inspectie, in een offerte met vaste prijs.',
  },
  {
    question: 'Kan ik mijn deuren ook zelf lakken?',
    answer:
      'Een binnendeur zelf lakken kan prima, als u de tijd neemt voor de voorbereiding. Haal de deur uit de sponning en leg hem horizontaal, schuur de oude laag mat, ontvet en gebruik grondverf waar het hout kaal is. Breng daarna twee dunne laklagen aan en schuur tussendoor licht met korrel 240, na minimaal 16 uur droogtijd. Bij buitendeuren, meerdere deuren of hoogglans loont vakwerk vaak, omdat elke oneffenheid in het grote vlak zichtbaar blijft. Het volledige stappenplan staat op de blog.',
    link: { href: '/blog/hoe-schilder-je-een-deur', tekst: 'Lees hoe u een deur schildert zonder strepen.' },
  },
  {
    question: 'Geeft Schildersbedrijf040 garantie op lakwerk?',
    answer:
      'Schildersbedrijf040 geeft garantie op al het uitgevoerde lakwerk, zowel binnen als buiten. De garantie dekt het vakmanschap en de gebruikte materialen. Door te werken met Boonstoppel lak, die 8 tot 10 jaar bescherming biedt op binnenwerk, is de kans op problemen binnen de garantieperiode minimaal. Mocht er onverhoopt een gebrek optreden, dan herstelt Schildersbedrijf040 dit kosteloos.',
  },
]

// Toelichting per regel in de prijstabel (regels zelf komen uit lib/prices.ts)
const prijsFactoren: Record<string, string> = {
  'Kozijnen lakken (binnen)': 'Staat van het hout, aantal lagen',
  'Kozijnen lakken (buiten)': 'Houtrot, weersinvloeden, bereikbaarheid',
  'Binnendeuren lakken': 'Vlakke deur of paneeldeur, oude laklaag',
  'Buitendeuren lakken': 'Staat van de lak, weerkant, beslag',
  'Trap lakken': 'Aantal treden, staat van het hout',
  'Radiator lakken': 'Formaat, hittebestendige lak',
  'Keukenkasten spuiten': 'Aantal fronten, ondergrond',
}

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie & advies',
    beschrijving:
      'Schildersbedrijf040 beoordeelt de staat van het houtwerk, controleert op houtrot en adviseert over de juiste glansgraad en laksoort voor uw kozijnen, deuren of trappen.',
  },
  {
    nummer: 2,
    titel: 'Offerte op maat',
    beschrijving:
      'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief voorbereiding, materialen en het aantal laklagen.',
  },
  {
    nummer: 3,
    titel: 'Voorbereiding & gronden',
    beschrijving:
      'Oude laklagen schuren, loszittende verf verwijderen, beschadigingen plamuren en een grondlaag aanbrengen, de basis voor duurzaam lakwerk.',
  },
  {
    nummer: 4,
    titel: 'Lakken & oplevering',
    beschrijving:
      'Meerdere lagen Boonstoppel lak aanbrengen, tussentijds schuren voor optimale hechting, eindcontrole samen met u en een schone werkplek achterlaten.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/lakwerk/#service',
  name: 'Lakwerk',
  description:
    'Professioneel lakwerk voor kozijnen, deuren, trappen en houtwerk in Eindhoven en omgeving. Vakkundig gelakt met Boonstoppel lak door Schildersbedrijf040.',
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
  serviceType: 'Lakwerk',
  offers: serviceOffers('lakwerk'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Lakwerk diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kozijnen lakken' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Deuren lakken' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Trappen lakken' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Radiatoren en leidingen lakken' },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Lakwerk', item: 'https://schildersbedrijf040.nl/diensten/lakwerk' },
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
  slug: 'lakwerk',
  naam: 'Lakwerk',
  h1: 'Lakwerk in Eindhoven',
  heroTekst: (
    <p>
      Kozijnen, deuren en trappen laten lakken kost gemiddeld €40 tot €55 per binnenkozijn, €80 tot €120 per binnendeur en €350 tot €600
      voor een trap, inclusief voorbereiding en Boonstoppel-lak. De lak is na 4 tot 6 uur stofdroog. Na een gratis inspectie krijgt u een
      offerte met vaste prijs. Lakwerk binnen combineert u eenvoudig met{' '}
      <Link href="/diensten/binnenschilderwerk">binnenschilderwerk aan muren en plafonds</Link>.
    </p>
  ),
  heroImg: images.lakKozijnen,
  kerncijfers: [
    { waarde: '8 tot 10 jaar', label: 'Levensduur' },
    { waarde: '16 tot 24 uur', label: 'Droogtijd lak' },
    { waarde: '3 opties', label: 'Glansgraden' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-professioneel-lakwerk',
    h2: 'Wat is professioneel lakwerk?',
    body: (
      <>
        <p>
          Lakwerk van Schildersbedrijf040 beschermt en verfraait uw kozijnen, deuren en trappen in Eindhoven en omgeving.
          Schildersbedrijf040 lakt met Boonstoppel lak voor een strakke, duurzame afwerking in hoogglans, zijdeglans of mat.
        </p>
        <p>
          Lakwerk is het aanbrengen van lakverf op houtwerk zoals kozijnen, deuren, trappen, plinten en radiatoren. Professioneel lakwerk
          verschilt van zelf lakken doordat de voorbereiding (schuren, plamuren, gronden) minstens 60% van de totale werktijd in beslag
          neemt. Die voorbereiding bepaalt of het lakwerk 8 tot 10 jaar meegaat of al na 2 tot 3 jaar bladdert en loslaat.
          Schildersbedrijf040 werkt uitsluitend met Boonstoppel Interieurlak voor binnenwerk en Boonstoppel Garantie Zijdeglans SB voor
          buitenhoutwerk.
        </p>
        <p>
          Schildersbedrijf040 voert lakwerk uit voor woningen en bedrijfspanden in Eindhoven en omgeving. Of het gaat om een enkel kozijn of
          het complete houtwerk van een woning, elk lakproject begint met een inspectie van het houtwerk, advies over glansgraden en een
          gedetailleerde offerte met vaste prijs.
        </p>
        <p>
          Naast de esthetische verbetering beschermt lakwerk uw houtwerk tegen vocht, slijtage en UV-straling. Ongelakt of slecht
          onderhouden houtwerk droogt uit, gaat scheuren en is vatbaar voor houtrot. Tijdig lakwerk voorkomt kostbare houtrot sanering op
          termijn.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-lakwerk',
    h2: 'Wat kost lakwerk?',
    body: (
      <>
        <p>
          Lakwerk kost gemiddeld €35 tot €75 per kozijn voor binnenwerk en €50 tot €100 per kozijn voor buitenwerk, inclusief materiaal en
          exclusief btw. De uiteindelijke prijs hangt af van de staat van het houtwerk, het aantal lagen lak en de bereikbaarheid. Deuren
          lakken is duurder per stuk dan kozijnen lakken, omdat deuren grotere vlakken hebben die een feilloze afwerking vereisen.
        </p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €40 tot €50 voor lakwerk, inclusief materiaal. Voor woningen ouder dan 2 jaar geldt
          het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij een lakproject van €2.000 bespaart u
          daarmee ruim €200 ten opzichte van het standaard btw-tarief van 21%.
        </p>
        <p>
          Schildersbedrijf040 werkt altijd met een vaste offerte, geen verrassingen achteraf. De investering in Boonstoppel lak betaalt zich
          terug: doordat het lakwerk 8 tot 10 jaar meegaat in plaats van 3 jaar bij budgetlak, zijn de kosten per jaar aanzienlijk lager.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="prijzen-lakwerk-per-onderdeel" className="h-section mt-6 scroll-mt-28">
        Wat kost deuren, kozijnen of een trap lakken?
      </h2>
      <p>
        Een binnendeur laten lakken kost gemiddeld €80 tot €120, een binnenkozijn €40 tot €55 en een trap €350 tot €600. De tabel hieronder
        geeft de indicatieve prijzen per onderdeel, inclusief voorbereiding en Boonstoppel-lak en exclusief btw. Waar u binnen een
        bandbreedte uitkomt, hangt vooral af van de staat van de oude laklaag en de vorm van het houtwerk.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Onderdeel</th>
            <th scope="col">Waar de prijs van afhangt</th>
            <th scope="col">Prijs</th>
          </tr>
        </thead>
        <tbody>
          {prijzen.lakwerk.map((r) => (
            <tr key={r.wat}>
              <td>{r.wat}</td>
              <td>{prijsFactoren[r.wat]}</td>
              <td>{r.prijs.replace(' /', ' per ').replace('m¹', 'meter')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Buitenkozijnen vragen een andere aanpak dan binnenkozijnen: weersbestendige lak, controle op houtrot en vaak een ladder of steiger.
        Daarover leest u meer bij <Link href="/diensten/kozijnen-schilderen">kozijnen laten schilderen</Link>. Wilt u weten wat het lakwerk in
        uw woning kost? <Link href="/contact">Vraag een gratis inspectie aan</Link>, dan krijgt u een offerte met een vaste prijs per onderdeel.
      </p>
      <h2 id="zelf-een-deur-lakken" className="h-section mt-6 scroll-mt-28">
        Zelf een deur lakken of laten doen?
      </h2>
      <p>
        Een binnendeur zelf lakken is een goede klus voor wie geduld heeft: het resultaat staat of valt met schuren, ontvetten en dunne lagen.
        Op de blog staat een stappenplan om{' '}
        <Link href="/blog/hoe-schilder-je-een-deur">een deur te schilderen zonder strepen</Link>, van demonteren tot tussenschuren. Bij
        buitendeuren, een hele verdieping met deuren en kozijnen of een trap kiezen de meeste huiseigenaren voor een schilder. Een trap moet
        immers bruikbaar blijven tijdens het werk, en een voordeur moet ook na de laatste laklaag weer dicht kunnen.
      </p>
    </>
  ),
  soorten: {
    id: 'soorten-lakwerk',
    h2: 'Soorten lakwerk',
    intro:
      'Lakwerk omvat meer dan alleen een laagje lak op een kozijn. Elk type houtwerk vraagt een specifieke aanpak, andere materialen en een passende glansgraad.',
    kaarten: [
      {
        titel: 'Kozijnen lakken',
        beschrijving:
          'Kozijnen lakken is het meest gevraagde lakwerk bij Schildersbedrijf040. Binnenkozijnen worden gelakt met Boonstoppel Garantie Interieurlak in zijdeglans of hoogglans. De oude laklaag wordt geschuurd, beschadigingen geplamurd en een grondlaag aangebracht voordat twee afwerklagen worden opgebracht. Kozijnen lakken kost €35 tot €75 per stuk voor binnenwerk.',
        link: '/diensten/binnenschilderwerk',
        linkTekst: 'Bekijk binnenschilderwerk',
      },
      {
        titel: 'Deuren lakken',
        beschrijving:
          'Deuren lakken vraagt extra precisie vanwege de grote vlakken waarin elke oneffenheid zichtbaar is. Schildersbedrijf040 schuurt de deur volledig, vult gaatjes en beschadigingen op en brengt meerdere lagen Boonstoppel lak aan. Deuren lakken kost €100 tot €150 per deur. Bij paneeldeuren besteedt Schildersbedrijf040 extra aandacht aan de profileringen voor een strak eindresultaat.',
        link: '/contact',
        linkTekst: 'Vraag een offerte aan',
      },
      {
        titel: 'Trappen lakken',
        beschrijving:
          'Een trap is een intensief belopen oppervlak dat extra slijtvaste lak nodig heeft. Schildersbedrijf040 schuurt de trap volledig kaal, brengt een hechtingsgrondlaag aan en werkt af met meerdere lagen slijtvaste lak. Een trap lakken kost €350 tot €600, afhankelijk van het aantal treden en de staat van het hout. Schildersbedrijf040 werkt om en om, zodat u de trap tussendoor kunt blijven gebruiken.',
        link: '/projecten',
        linkTekst: 'Bekijk projecten',
      },
      {
        titel: 'Radiatoren & leidingen',
        beschrijving:
          'Radiatoren en verwarmingsbuizen vragen om hittebestendige lak die niet verkleurt door warmte. Schildersbedrijf040 schuurt en ontvet de radiator, brengt een hechtprimer aan en lakt af met twee lagen speciale radiatorlak. Het lakwerk wordt uitgevoerd wanneer de verwarming uit staat, zodat de lak gelijkmatig droogt en optimaal hecht.',
        link: '/contact',
        linkTekst: 'Vraag een offerte aan',
      },
      {
        titel: 'Keukenkasten & meubels',
        beschrijving:
          'Keukenkasten en meubels lakken geeft uw interieur een compleet nieuwe uitstraling zonder de kosten van vervanging. Schildersbedrijf040 spuit keukenkasten met Boonstoppel lak voor een fabrieksmatige, gladde afwerking zonder kwaststrepen. Keukenkasten spuiten kost €150 tot €300 per strekkende meter, een fractie van de kosten van een nieuwe keuken.',
        link: '/diensten/latex-spuiten',
        linkTekst: 'Bekijk latex spuiten',
      },
      {
        titel: 'Buitenhoutwerk lakken',
        beschrijving:
          'Buitenkozijnen, boeidelen en dakgoten van hout vragen om weerbestendige lak die beschermt tegen regen, UV-straling en temperatuurwisselingen. Schildersbedrijf040 gebruikt Boonstoppel Garantie Zijdeglans SB voor buitenhoutwerk, een hybride lakverf met uitstekende hechting en duurzaamheid. Buitenkozijnen lakken kost €50 tot €100 per stuk.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Meer over buitenschilderwerk',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-lakwerk',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Elk lakproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw lakwerk?',
    tekst:
      'Schildersbedrijf040 onderscheidt zich door vakmanschap, transparantie en het gebruik van uitsluitend Boonstoppel A-merk lak. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk lakproject, van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Hoogst beoordeeld in de regio',
        beschrijving:
          '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.',
      },
      {
        titel: 'Uitsluitend Boonstoppel A-merk lak',
        beschrijving:
          'Boonstoppel Interieurlak Zijdeglans en Hoogglans voor binnenwerk, Garantie Zijdeglans SB voor buitenwerk. 8 tot 10 jaar bescherming.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief materiaal, voorbereiding en oplevering.',
      },
      {
        titel: 'Grondige voorbereiding',
        beschrijving:
          'Schuren, plamuren en gronden vormen 60% van het werk. Die investering in voorbereiding bepaalt de levensduur van het lakwerk.',
      },
      {
        titel: 'Persoonlijke betrokkenheid',
        beschrijving: 'Eigenaar Jordy Jacobs is bij elk project betrokken, u hebt altijd een vast aanspreekpunt dat uw wensen kent.',
      },
    ],
  },
  projecten: [
    { titel: 'Kozijnen buiten wit gelakt', label: '[JORDY: plaats]', na: images.lakKozijnen },
    { titel: 'Voordeur gelakt in antraciet', label: '[JORDY: plaats]', na: images.voordeur },
  ],
  faqs,
  faqTitel: 'Vragen over lakwerk',
  cta: {
    titel: 'Laten lakken?',
    tekst:
      'Wilt u weten wat professioneel lakwerk voor uw kozijnen, deuren of trappen kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function LakwerkPage() {
  return <DienstTemplate d={pagina} />
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { TOON_JORDY } from '@/lib/jordy'
import { prijzen } from '@/lib/prices'
import { orgRef, serviceOffers } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Houtrot kozijn repareren in Eindhoven',
  description:
    'Houtrot in uw kozijn? Repareren met epoxy kost €150 tot €250 per klein kozijn, vervangen €600 tot €1.500. Gratis houtrot-inspectie en vaste prijs per kozijn.',
  keywords: [
    'houtrot kozijn',
    'houtrot repareren',
    'houtrot kosten',
    'houtrot sanering eindhoven',
    'houtrot reparatie eindhoven',
    'kozijnen repareren eindhoven',
    'epoxy houtrot',
    'houtrot kozijnen',
    'schildersbedrijf eindhoven',
    'houtrot sanering kosten',
  ],
  openGraph: {
    title: 'Houtrot Sanering Eindhoven | Schildersbedrijf040',
    description:
      'Houtrot sanering in Eindhoven en omgeving. Kozijnen, deuren en boeiboorden vakkundig gerepareerd met epoxy. 70% goedkoper dan volledig vervangen.',
    url: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
  },
}

const faqs = [
  {
    question: 'Hoe herken ik houtrot in mijn kozijnen?',
    answer:
      'Houtrot in kozijnen is te herkennen aan verfblaren, verkleuring van het hout, een zachte of sponsachtige structuur en zichtbare scheuren waarin vocht binnendringt. De eenvoudigste test is een schroevendraaier in het hout drukken: gaat de punt moeiteloos naar binnen, dan is het hout aangetast door houtrot. Schildersbedrijf040 voert een grondige houtrot inspectie uit waarbij ook verborgen houtrot wordt opgespoord, bijvoorbeeld achter kitvoegen of onder verflagen die er aan de buitenkant nog goed uitzien.',
  },
  {
    question: 'Wat kost houtrot sanering per kozijn?',
    answer:
      'Houtrot sanering kost gemiddeld €150 tot €250 per klein kozijn en €300 tot €450 per groot kozijn, inclusief epoxy reparatie en exclusief btw. Een kleine epoxy reparatie op een enkele plek kost €80 tot €180. Moet een kozijn gedeeltelijk vervangen worden, dan liggen de kosten tussen €200 en €500. Volledig vervangen van een kozijn kost €600 tot €1.500. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 biedt 10 tot 20% korting wanneer u drie of meer kozijnen tegelijk laat repareren.',
  },
  {
    question: 'Is epoxy houtrot reparatie net zo sterk als nieuw hout?',
    answer:
      'Epoxy houtrot reparatie levert een resultaat op dat in veel gevallen sterker is dan het originele hout. Epoxyhars dringt diep in de houtporiën en creëert na uitharding een keihard, waterafstotend blok dat niet meer krimpt of uitzet. Schildersbedrijf040 gebruikt professionele tweecombinente epoxy die speciaal ontwikkeld is voor buitenhoutwerk. Na het schuren en schilderen is de reparatie onzichtbaar en gaat het gerepareerde kozijn weer 15 tot 20 jaar mee.',
  },
  {
    question: 'Wanneer is houtrot repareren niet meer mogelijk en moet het kozijn vervangen worden?',
    answer:
      'Houtrot reparatie met epoxy is mogelijk zolang de constructieve kern van het kozijn nog intact is. Wanneer meer dan 40 tot 50% van het kozijnhout is aangetast, of wanneer het kozijn structureel is verzwakt en niet meer goed sluit, is volledig vervangen verstandiger. Schildersbedrijf040 beoordeelt dit tijdens de gratis inspectie en adviseert altijd de meest kostenefficiënte oplossing. In de praktijk kan circa 80% van de houtrot gevallen gerepareerd worden zonder het kozijn te vervangen.',
  },
  {
    question: 'In welk seizoen kan houtrot sanering het beste worden uitgevoerd?',
    answer:
      'Houtrot sanering wordt bij voorkeur uitgevoerd in het droge seizoen, tussen april en oktober. Epoxyhars heeft een omgevingstemperatuur van minimaal 10°C nodig voor een goede uitharding, en het hout moet droog zijn voor optimale hechting. Schildersbedrijf040 plant houtrot sanering daarom in de lente of zomer. Urgente reparaties, bijvoorbeeld wanneer vocht via een aangetast kozijn naar binnen lekt, kunnen ook in de winter worden uitgevoerd met aangepaste werkmethoden.',
  },
  {
    question: 'Hoe voorkom ik houtrot aan mijn kozijnen?',
    answer:
      'Houtrot voorkomen begint met goed schilderonderhoud: buitenschilderwerk vernieuwen elke 5 tot 7 jaar beschermt het hout tegen vocht. Daarnaast is het belangrijk dat kitvoegen intact blijven, dat regenwater goed afloopt van dorpels en onderdorpels, en dat ventilatieopeningen niet geblokkeerd zijn. Schildersbedrijf040 brengt bij elke houtrot sanering een preventieve houtprimer aan die het hout beschermt tegen schimmels en vochtopname. Regelmatig een visuele inspectie uitvoeren, vooral aan de onderzijde van kozijnen en op plekken waar hout en steen samenkomen, helpt om houtrot vroegtijdig te signaleren.',
  },
  {
    question: 'Hoe lang duurt houtrot sanering?',
    answer:
      'Een houtrot inspectie duurt 30 tot 60 minuten. De reparatie zelf kost gemiddeld 1 tot 3 werkdagen, afhankelijk van het aantal aangetaste kozijnen en de ernst van de houtrot. Epoxyhars heeft een droogtijd van 24 uur voordat het geschuurd en geschilderd kan worden. Schildersbedrijf040 combineert houtrot sanering vaak met buitenschilderwerk, zodat het kozijn direct na reparatie wordt afgewerkt en beschermd, dat bespaart tijd en kosten.',
  },
  {
    question: 'Combineert Schildersbedrijf040 houtrot sanering met schilderwerk?',
    answer:
      'Schildersbedrijf040 combineert houtrot sanering standaard met schilderwerk. Na de epoxy reparatie wordt het kozijn geschuurd, gegrond en afgelakt met duurzame buitenlak. Dit is niet alleen esthetisch beter, maar ook functioneel noodzakelijk: onbehandelde epoxy is gevoelig voor UV-straling en moet beschermd worden door een dekkende verflaag. Het schilderwerk na houtrot reparatie kost €75 tot €300 extra per kozijn, afhankelijk van de grootte. Door reparatie en schilderwerk te combineren bespaart u op de totale arbeidskosten.',
  },
]

// Repareren of vervangen: regels uit lib/prices.ts, aangevuld met bedragen die al in de tekst en FAQ van deze pagina staan
const houtrot = prijzen['houtrot-sanering']
const herstelPrijzen = [
  { wat: 'Kleine epoxy reparatie (één plek)', prijs: '€80 tot €180' },
  ...houtrot.slice(0, 5),
  { wat: 'Kozijn gedeeltelijk vervangen', prijs: '€200 tot €500 /stuk' },
  ...houtrot.slice(5),
]

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Inspectie',
    beschrijving:
      'Schildersbedrijf040 inspecteert alle kozijnen, deuren en boeiboorden op houtrot. Verborgen aantastingen worden opgespoord en de ernst van de schade wordt vastgesteld.',
  },
  {
    nummer: 2,
    titel: 'Offerte',
    beschrijving:
      'U ontvangt een gedetailleerde offerte met vaste prijs, per kozijn uitgesplitst, inclusief materiaal en schilderwerk na reparatie.',
  },
  {
    nummer: 3,
    titel: 'Reparatie',
    beschrijving:
      'Aangetast hout wordt verwijderd, het gezonde hout behandeld met houtprimer en de reparatie opgebouwd met professionele tweecombinente epoxy.',
  },
  {
    nummer: 4,
    titel: 'Schilderwerk & oplevering',
    beschrijving:
      'Na 24 uur droogtijd wordt de epoxy geschuurd, gegrond en afgelakt met duurzame buitenlak. Het resultaat is onzichtbaar en jarenlang beschermd.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/houtrot-sanering/#service',
  name: 'Houtrot Sanering',
  description:
    'Professionele houtrot sanering voor kozijnen, deuren en boeiboorden in Eindhoven en omgeving. Vakkundige houtrot reparatie met epoxy, tot 70% goedkoper dan volledig vervangen.',
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
  serviceType: 'Houtrot Sanering',
  offers: serviceOffers('houtrot-sanering'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Houtrot sanering diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kozijnen houtrot reparatie met epoxy' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Deurkozijnen houtrot sanering' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Boeiboorden en windveren reparatie' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kozijn volledig vervangen' },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Houtrot Sanering', item: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering' },
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
  slug: 'houtrot-sanering',
  naam: 'Houtrot sanering',
  h1: 'Houtrot sanering in Eindhoven',
  heroTekst: (
    <p>
      Houtrot in een kozijn repareren kost €80 tot €180 voor een kleine epoxy reparatie op één plek. Houtrot sanering kost gemiddeld €150 tot €250 voor een klein kozijn en €300 tot €450 voor een groot kozijn, inclusief herstel en
      afwerking. De reparatie zelf duurt meestal 1 tot 3 werkdagen. Na een gratis inspectie krijgt u een offerte met vaste prijs per kozijn.
      Het gerepareerde kozijn wordt direct meegenomen in het{' '}
      <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link>.
    </p>
  ),
  heroImg: images.houtrot,
  kerncijfers: [
    { waarde: '70% goedkoper', label: 'Reparatie vs vervangen' },
    { waarde: '30 tot 60 min', label: 'Inspectietijd' },
    { waarde: '24 uur', label: 'Droogtijd epoxy' },
    { waarde: '9%', label: 'BTW woningen 2+ jaar' },
  ],
  watIs: {
    id: 'wat-is-houtrot-en-waarom-is-sanering-urgent',
    h2: 'Wat is houtrot en waarom is sanering urgent?',
    body: (
      <>
        <p>
          Houtrot sanering door Schildersbedrijf040 herstelt aangetaste kozijnen, deuren en boeiboorden in Eindhoven en omgeving. Met
          professionele epoxy reparatie is houtrot sanering tot 70% goedkoper dan volledig vervangen, en het resultaat gaat 15 tot 20 jaar
          mee.
        </p>
        <p>
          Houtrot is een aantasting van hout door schimmels die gedijen op vocht. Kozijnen, deurkozijnen, dorpels en boeiboorden zijn het
          meest kwetsbaar omdat deze onderdelen direct blootgesteld zijn aan regen, condensatie en temperatuurverschillen. Zodra houtrot
          begint, breidt de schimmel zich uit naar het gezonde hout eromheen, en dat proces versnelt naarmate er meer vocht binnendringt via
          scheurtjes in de verflaag.
        </p>
        <p>
          Schildersbedrijf040 voert houtrot sanering uit voor woningeigenaren in Eindhoven en omgeving. Houtrot reparatie met epoxy is tot
          70% goedkoper dan het volledig vervangen van een kozijn en biedt een even duurzaam resultaat. Door houtrot vroegtijdig te saneren
          voorkomt u dat de aantasting zich uitbreidt naar het draagconstructie van het kozijn, wat de reparatiekosten verveelvoudigt.
        </p>
        <p>
          Houtrot sanering is geen cosmetische ingreep maar een noodzakelijke reparatie. Onbehandelde houtrot leidt tot tocht,
          vochtproblemen in de woning en uiteindelijk tot kozijnen die niet meer goed sluiten of structureel onveilig worden.
          Schildersbedrijf040 combineert houtrot sanering altijd met schilderwerk, zodat het kozijn na reparatie direct beschermd is tegen
          nieuwe aantasting.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'kosten-houtrot-sanering',
    h2: 'Wat kost houtrot sanering?',
    body: (
      <>
        <p>
          Houtrot sanering kost gemiddeld €150 tot €450 per kozijn, afhankelijk van de grootte van het kozijn en de ernst van de aantasting.
          Een kleine epoxy reparatie op een enkele plek begint bij €80, terwijl het volledig vervangen van een kozijn €600 tot €1.500 kost.
          In de meeste gevallen is reparatie met epoxy de meest kostenefficiënte oplossing, tot 70% goedkoper dan volledig vervangen.
        </p>
        <p>
          Schildersbedrijf040 hanteert een uurtarief van €45 tot €55 voor houtrot sanering, inclusief materiaal. Voor woningen ouder dan 2
          jaar geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij drie of meer kozijnen biedt
          Schildersbedrijf040 een korting van 10 tot 20% op de totale reparatiekosten.
        </p>
        <p>
          Het schilderwerk na houtrot reparatie kost €75 tot €300 extra per kozijn. Schildersbedrijf040 raadt aan om houtrot sanering en
          schilderwerk altijd te combineren: onbehandelde epoxy is gevoelig voor UV-straling en moet beschermd worden door een dekkende
          verflaag. Door beide werkzaamheden in een keer uit te voeren, bespaart u op de totale arbeidskosten.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="houtrot-herkennen" className="h-section mt-6 scroll-mt-28">
        Houtrot herkennen: waar zit het in een kozijn?
      </h2>
      <p>
        Houtrot in een kozijn begint bijna altijd op een plek waar regenwater blijft staan of via een scheurtje in de verf het hout in
        trekt. Wie weet waar houtrot meestal zit, ziet het eerder en houdt de reparatie klein. Let bij uw kozijnen vooral op deze plekken:
      </p>
      <ul>
        <li>
          <strong>Onderdorpels.</strong> Het liggende deel onder het raam vangt het meeste water. Verf die hier loslaat is vaak het eerste
          signaal.
        </li>
        <li>
          <strong>Hoeken en verbindingen.</strong> Waar twee delen van het kozijn samenkomen, ontstaan fijne barstjes of blaasjes in de lak
          waar vocht doorheen dringt.
        </li>
        <li>
          <strong>Kitnaden en glaslatten.</strong> Een openstaande of gescheurde kitnaad tussen glas, glaslat en kozijn laat regenwater diep
          in het hout lopen.
        </li>
      </ul>
      <p>
        Aan de buitenkant ziet u houtrot aan donkere verkleuringen of vale plekken in het schilderwerk, bladderende verf en hout dat bij
        lichte druk meegeeft of vezelig aanvoelt. Omdat houtrot vaak onder een verflaag zit die er nog goed uitziet, controleert
        Schildersbedrijf040 bij de gratis inspectie ook de plekken die u vanaf de grond niet ziet.
      </p>
      {TOON_JORDY && (
        <p>[JORDY: 2 tot 3 eigen foto&apos;s van houtrot: zacht hout aan een onderdorpel, bladderende verf in een hoek, open kitnaad bij een glaslat]</p>
      )}
      <h2 id="repareren-of-vervangen" className="h-section mt-6 scroll-mt-28">
        Houtrot repareren of het kozijn vervangen?
      </h2>
      <p>
        Repareren met epoxy is de goedkoopste oplossing zolang de constructieve kern van het kozijn gezond is; dat geldt in ongeveer 80% van
        de gevallen. Is meer dan 40 tot 50% van het kozijnhout aangetast of sluit het raam niet meer goed, dan is vervangen verstandiger. De
        tabel zet de indicatieve prijzen naast elkaar, inclusief materiaal en exclusief btw.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Herstel</th>
            <th scope="col">Prijs</th>
          </tr>
        </thead>
        <tbody>
          {herstelPrijzen.map((r) => (
            <tr key={r.wat}>
              <td>{r.wat}</td>
              <td>{r.prijs.replace(' /', ' per ').replace('m¹', 'meter')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Na de reparatie wordt het kozijn geschuurd, gegrond en afgelakt; dat schilderwerk kost €75 tot €300 per kozijn. Gaat het om meerdere
        kozijnen, dan is het vaak voordeliger om meteen alle{' '}
        <Link href="/diensten/kozijnen-schilderen">kozijnen te laten schilderen</Link>, zodat de reparaties niet afsteken tegen oud
        schilderwerk. Kitnaden die zijn gescheurd, worden bij het herstel vernieuwd. Twijfelt u of uw kozijn nog te redden is?{' '}
        <Link href="/contact">Plan een gratis houtrot-inspectie</Link> en u weet per kozijn wat repareren of vervangen kost.
      </p>
    </>
  ),
  soorten: {
    id: 'soorten-houtrot-sanering',
    h2: 'Soorten houtrot sanering',
    intro:
      'Houtrot treft verschillende onderdelen van uw woning. Elk type houtrot sanering vraagt een specifieke aanpak, van epoxy reparatie tot volledig vervangen.',
    kaarten: [
      {
        titel: 'Kozijnen repareren',
        beschrijving:
          'Kozijnen zijn het meest getroffen door houtrot, vooral aan de onderzijde waar regenwater blijft staan. Schildersbedrijf040 verwijdert het aangetaste hout, behandelt het gezonde hout met houtprimer en bouwt het kozijn weer op met tweecombinente epoxy. Na uitharding en schuren is de reparatie onzichtbaar en minstens zo sterk als het originele hout. Een klein kozijn repareren kost €150 tot €250.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Bekijk buitenschilderwerk',
      },
      {
        titel: 'Deurkozijnen',
        beschrijving:
          'Deurkozijnen zijn extra gevoelig voor houtrot omdat ze dagelijks mechanisch belast worden door het openen en sluiten van de deur. Houtrot in een deurkozijn tast niet alleen het hout aan, maar zorgt er ook voor dat de deur gaat klemmen of niet meer goed afsluit. Schildersbedrijf040 repareert deurkozijnen met epoxy en herstelt de pasvorm, zodat de deur weer soepel draait en het kozijn tocht- en vochtdicht is.',
        link: '/contact',
        linkTekst: 'Inspectie aanvragen',
      },
      {
        titel: 'Boeiboorden & windveren',
        beschrijving:
          'Boeiboorden en windveren zitten op de overgang van gevel naar dakrand, een plek waar vocht zich gemakkelijk ophoopt. Houtrot in boeiboorden is vaak pas zichtbaar als de schade al fors is, omdat deze onderdelen minder goed bereikbaar zijn voor visuele inspectie. Schildersbedrijf040 repareert aangetaste boeiboorden met epoxy of vervangt secties waar het hout te ver is aangetast.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Meer over buitenschilderwerk',
      },
      {
        titel: 'Dorpels & onderdorpels',
        beschrijving:
          'Dorpels en onderdorpels zijn de horizontale onderdelen van het kozijn waar regenwater direct op terechtkomt. Door hun horizontale positie blijft vocht langer liggen, waardoor houtrot hier het snelst optreedt. Schildersbedrijf040 vervangt of repareert dorpels zodat water weer goed afloopt en het kozijn beschermd blijft tegen nieuwe houtrot aantasting.',
        link: '/diensten/lakwerk',
        linkTekst: 'Meer over lakwerk',
      },
      {
        titel: 'Preventieve behandeling',
        beschrijving:
          'Voorkomen is goedkoper dan genezen. Schildersbedrijf040 biedt preventieve houtrot behandeling aan voor kozijnen die nog niet aangetast zijn maar wel kwetsbaar zijn door hun leeftijd of positie. Een preventieve behandeling bestaat uit het aanbrengen van houtprimer op kwetsbare plekken, het vernieuwen van kitvoegen en het controleren van de verflaag op scheuren en gebreken.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Preventief schilderwerk',
      },
      {
        titel: 'Kozijn vervangen',
        beschrijving:
          'Wanneer meer dan 40 tot 50% van het kozijnhout is aangetast of het kozijn structureel is verzwakt, adviseert Schildersbedrijf040 om het kozijn volledig te vervangen. Schildersbedrijf040 plaatst nieuwe hardhouten of kunststof kozijnen op maat, inclusief beglazing, kitwerk en schilderwerk. Volledig vervangen van een kozijn kost €600 tot €1.500, afhankelijk van het type en de afmetingen.',
        link: '/contact',
        linkTekst: 'Offerte aanvragen',
      },
    ],
  },
  werkwijze: {
    id: 'werkwijze-houtrot-sanering',
    h2: 'Ons werkproces in 4 stappen',
    intro:
      'Elk houtrot sanering project bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.',
    stappen: werkwijzeStappen,
  },
  waarom: {
    h2: 'Waarom Schildersbedrijf040 voor uw houtrot sanering?',
    tekst:
      'Schildersbedrijf040 onderscheidt zich door vakmanschap, eerlijk advies en het combineren van houtrot sanering met professioneel schilderwerk. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk project, van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.',
    usps: [
      {
        titel: 'Gratis houtrot inspectie',
        beschrijving:
          'Schildersbedrijf040 inspecteert uw kozijnen, deuren en boeiboorden gratis en vrijblijvend. U weet vooraf exact welke kozijnen aangetast zijn en wat de reparatie kost.',
      },
      {
        titel: 'Repareren waar mogelijk, vervangen waar nodig',
        beschrijving:
          'Schildersbedrijf040 adviseert altijd de meest kostenefficiënte oplossing. In circa 80% van de gevallen is epoxy reparatie mogelijk, tot 70% goedkoper dan volledig vervangen.',
      },
      {
        titel: 'Houtrot sanering én schilderwerk in één',
        beschrijving:
          'Schildersbedrijf040 combineert houtrot reparatie met buitenschilderwerk, zodat het kozijn direct beschermd is. Dat bespaart tijd, kosten en een tweede steigeropbouw.',
      },
      {
        titel: 'Vaste prijs, geen verrassingen',
        beschrijving:
          'Gedetailleerde offerte per kozijn uitgesplitst, inclusief materiaal en schilderwerk. Geen verborgen kosten achteraf.',
      },
      {
        titel: 'Persoonlijke betrokkenheid',
        beschrijving:
          'Eigenaar Jordy Jacobs is bij elk houtrot sanering project betrokken, u hebt altijd een vast aanspreekpunt dat uw woning kent.',
      },
    ],
  },
  projecten: [{ titel: 'Kozijn hersteld en wit geschilderd', label: '[JORDY: plaats]', na: images.houtrot }],
  faqs,
  faqTitel: 'Vragen over houtrot sanering',
  cta: {
    titel: 'Houtrot laten herstellen?',
    tekst:
      'Houtrot breidt zich uit als het niet wordt aangepakt. Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.',
  },
  schema: [serviceSchema, breadcrumbSchema, faqSchema],
}

export default function HoutrotSaneringPage() {
  return <DienstTemplate d={pagina} />
}

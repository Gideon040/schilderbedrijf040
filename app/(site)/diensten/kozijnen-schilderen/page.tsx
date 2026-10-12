import type { Metadata } from 'next'
import Link from 'next/link'
import { linkLive } from '@/lib/navigation'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { jordy, toonBlok } from '@/lib/jordy'
import { prijzen } from '@/lib/prices'
import { breadcrumbSchema, faqSchema, orgRef, serviceOffers, werkgebied } from '@/lib/schema'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kozijnen schilderen: prijs per kozijn',
  description:
    'Kozijnen schilderen kost €50 tot €100 per kozijn en gaat met Boonstoppel-verf 8 tot 10 jaar mee. Gratis houtrotcheck en een vaste prijs. Vraag offerte aan.',
  openGraph: {
    title: 'Kozijnen schilderen: prijs per kozijn | Schildersbedrijf040',
    description:
      'Houten kozijnen buiten laten schilderen in Eindhoven en omgeving: €50 tot €100 per kozijn, met houtrotcheck, kitwerk en Boonstoppel-verf.',
    url: 'https://schildersbedrijf040.nl/diensten/kozijnen-schilderen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/kozijnen-schilderen',
  },
}

// Prijzen uit lib/prices.ts (staan al op de site); nieuwe bedragen alleen als open punt voor Jordy
const buiten = prijzen.buitenschilderwerk
const houtrot = prijzen['houtrot-sanering']
const vind = (rijen: typeof buiten, wat: string) => rijen.find((r) => r.wat === wat)?.prijs ?? ''
const perStuk = (p: string, woord: string) => p.replace(' /stuk', ` per ${woord}`)

const prijsRegels: { wat: string; toelichting: string; prijs: string }[] = [
  {
    wat: 'Buitenkozijn schilderen',
    toelichting: 'Schuren, gronden en twee lagen aflak',
    prijs: perStuk(vind(buiten, 'Kozijnen buiten'), 'kozijn'),
  },
  {
    wat: 'Klein kozijn (bijv. toilet- of badkamerraam)',
    toelichting: 'Weinig strekkende meters, één raam',
    prijs: '[JORDY: prijs klein kozijn, indicatief]',
  },
  {
    wat: 'Groot kozijn of pui met meerdere ramen',
    toelichting: 'Meer glaslatten, profielen en draaiende delen',
    prijs: '[JORDY: prijs groot kozijn of pui, indicatief]',
  },
  {
    wat: 'Kitwerk rond glas en kozijn',
    toelichting: 'Gescheurde of losgelaten kitnaden vernieuwen',
    prijs: '[JORDY: zit kitwerk in de prijs per kozijn of komt het apart in de offerte? Zo ja, indicatie]',
  },
  {
    wat: 'Buitendeur schilderen',
    toelichting: 'Voordeur, achterdeur of tuindeur',
    prijs: perStuk(vind(buiten, 'Deuren buiten'), 'deur'),
  },
  {
    wat: 'Houtrot herstellen (klein kozijn)',
    toelichting: 'Alleen als de houtrotcheck rot hout vindt',
    prijs: perStuk(vind(houtrot, 'Klein kozijn repareren'), 'kozijn'),
  },
  {
    wat: 'Steiger',
    toelichting: 'Alleen bij kozijnen die niet met een ladder bereikbaar zijn',
    prijs: 'Apart in de offerte',
  },
]

const faqs = [
  {
    question: 'Waarom bladdert de verf op mijn kozijnen na een paar jaar alweer?',
    answer:
      'Verf die binnen een paar jaar bladdert, laat bijna altijd los door vocht of door een slechte ondergrond. Vocht komt via een open kitnaad, een scheur in een hoekverbinding of beginnende houtrot achter de verflaag en duwt de verf van het hout af. Een slechte ondergrond ontstaat als nieuwe verf over loszittende oude lagen wordt gezet, zonder schrapen, schuren en gronden. Ook schilderen bij te koud of vochtig weer verkort de levensduur. Schildersbedrijf040 zoekt daarom eerst de oorzaak en lost die op, voordat er nieuwe verf op het kozijn komt.',
  },
  {
    question: 'Kan ik alleen de kozijnen aan de zon- en regenkant laten schilderen?',
    answer:
      'Ja, dat kan. Kozijnen aan de zuid- en westkant krijgen de meeste zon en regen en zijn vaak eerder aan een nieuwe verflaag toe dan de kozijnen aan de noord- en oostkant. Door per gevel te laten schilderen, spreidt u de kosten. Let wel op de kleur: nieuwe verf ziet er frisser uit dan verf die al jaren in de zon zit, waardoor u verschil kunt zien op een hoek waar twee gevels samenkomen. Schildersbedrijf040 adviseert bij de inspectie welke kozijnen nu nodig zijn en welke nog een paar jaar kunnen wachten.',
  },
  {
    question: 'Mag ik mijn kozijnen in een andere kleur laten schilderen?',
    answer:
      'Bij de meeste woningen wel. Kozijnen overschilderen in dezelfde kleur is gewoon onderhoud en vergunningvrij. Bij een rijksmonument of gemeentelijk monument heeft u voor een andere kleur wel een omgevingsvergunning nodig, en in een beschermd stads- of dorpsgezicht neemt u eerst contact op met de gemeente. Woont u in een appartement, dan horen de kozijnen vaak bij de gemeenschappelijke delen en beslist de VvE over de kleur. Houd er rekening mee dat een overgang van donker naar licht vaak een extra verflaag vraagt.',
  },
  {
    question: 'Kunnen de ramen dicht als de kozijnen net geschilderd zijn?',
    answer:
      'Ja, maar niet meteen. Verse lak in de sponning plakt als een raam te snel en te stevig wordt dichtgedaan. Lak moet eerst stofdroog zijn. Daarom worden draaiende ramen en deuren bij voorkeur vroeg op de dag geschilderd, zodat ze aan het eind van de dag voorzichtig dicht kunnen. Volledig uitharden duurt enkele dagen. Sluit ramen en deuren in die periode zonder kracht en zet er niets tegenaan, dan blijft de nieuwe laklaag mooi glad.',
  },
  {
    question: 'Schildert Schildersbedrijf040 ook kunststof of aluminium kozijnen?',
    answer: '[JORDY: schildert u kunststof of aluminium kozijnen? Zo ja: met welk systeem, en wat kost het per kozijn?]',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/kozijnen-schilderen/#service',
  name: 'Kozijnen schilderen',
  serviceType: 'Buitenschilderwerk',
  description:
    'Houten kozijnen buiten schilderen in Eindhoven en omgeving: inspectie met houtrotcheck, schuren, houtrotherstel, gronden, kitwerk en aflakken met Boonstoppel-verf.',
  provider: orgRef,
  areaServed: werkgebied.map((name) => ({ '@type': 'City', name })),
  offers: serviceOffers('buitenschilderwerk').filter((o) => o.name === 'Kozijnen buiten' || o.name === 'Deuren buiten'),
}

const pagina: DienstPagina = {
  slug: 'kozijnen-schilderen',
  naam: 'Kozijnen schilderen',
  h1: 'Kozijnen schilderen in Eindhoven',
  heroTekst: (
    <p>
      Houten kozijnen buiten laten schilderen kost gemiddeld €50 tot €100 per kozijn, inclusief voorbereiding en Boonstoppel-verf en
      exclusief btw. Met goede voorbereiding gaat het schilderwerk 8 tot 10 jaar mee. Kozijnen schilderen is een onderdeel van ons{' '}
      <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link>: na een gratis inspectie met houtrotcheck krijgt u een vaste
      prijs.
    </p>
  ),
  heroImg: images.lakKozijnen,
  kerncijfers: [
    { waarde: '€50 tot €100', label: 'Per kozijn buiten' },
    { waarde: '8 tot 10 jaar', label: 'Levensduur met Boonstoppel-verf' },
    { waarde: '4 stappen', label: 'Inclusief houtrotcheck en kitwerk' },
    { waarde: '9% btw', label: 'Op arbeid, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'wanneer-moeten-kozijnen-geschilderd-worden',
    h2: 'Wanneer moeten uw kozijnen geschilderd worden?',
    body: (
      <>
        <p>
          Uw kozijnen moeten geschilderd worden zodra de verflaag het hout niet meer volledig afsluit. Dat ziet u meestal eerst aan de
          onderkant van het kozijn, waar regenwater blijft staan. Wacht niet tot het hout kaal is: dan trekt er vocht in en wordt een
          schilderbeurt een reparatie. Dit zijn de signalen waar Schildersbedrijf040 bij een inspectie naar kijkt:
        </p>
        <ol>
          <li>
            <strong>Bladderende of loszittende verf</strong>, vaak eerst op de onderdorpel en aan de onderkant van de glaslatten.
          </li>
          <li>
            <strong>Haarscheurtjes in de hoeken</strong> van het kozijn, waar twee delen hout op elkaar aansluiten. Hout werkt bij vocht en
            droogte, en via die scheurtjes komt water achter de verf.
          </li>
          <li>
            <strong>Verf die afgeeft</strong>: veegt u met uw vinger over het kozijn en blijft er poeder op achter, dan is de verflaag
            verweerd door zon en regen.
          </li>
          <li>
            <strong>Een doffe, verbleekte kleur</strong>, vooral aan de zuid- en westkant van de woning.
          </li>
          <li>
            <strong>Gescheurde of losgelaten kit</strong> rond het glas of tussen het kozijn en het metselwerk.
          </li>
          <li>
            <strong>Zacht hout of donkere plekken</strong> onder de verf. Dat wijst op houtrot, en dan is eerst{' '}
            <Link href="/diensten/houtrot-sanering">houtrot herstellen</Link> nodig.
          </li>
        </ol>
        <p>
          Het verschil in kosten is groot. Een kozijn op tijd schilderen kost €50 tot €100. Is er al houtrot, dan komt daar €150 tot €250 bij
          voor herstel van een klein kozijn, en een kozijn volledig vervangen kost €600 tot €1.500.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'wat-kost-kozijnen-schilderen',
    h2: 'Wat kost kozijnen schilderen per kozijn?',
    body: (
      <>
        <p>
          Een houten buitenkozijn schilderen kost gemiddeld €50 tot €100 per kozijn, inclusief schuren, gronden en twee lagen
          Boonstoppel-verf, exclusief btw. Waar u binnen die bandbreedte uitkomt, hangt af van het formaat van het kozijn, het aantal ramen en
          glaslatten, de staat van de oude verf en de hoogte. Een kozijn op de begane grond is sneller klaar dan een kozijn op de tweede
          verdieping.
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Onderdeel</th>
              <th scope="col">Toelichting</th>
              <th scope="col">Indicatie</th>
            </tr>
          </thead>
          <tbody>
            {prijsRegels
              .filter((r) => toonBlok(r.prijs))
              .map((r) => (
                <tr key={r.wat}>
                  <td>{r.wat}</td>
                  <td>{r.toelichting}</td>
                  <td>{jordy(r.prijs)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <p>
          Rekenvoorbeeld: een woning met 8 houten kozijnen komt uit op 8 keer €50 tot €100, dus €400 tot €800 voor het schilderwerk,
          exclusief eventueel houtrotherstel en steiger. Voor woningen ouder dan twee jaar geldt 9% btw op de arbeid. De exacte prijs hoort u
          na de gratis inspectie, in een offerte met een vaste prijs per onderdeel.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="kozijnen-schilderen-herstellen-of-vervangen" className="h-section mt-6 scroll-mt-28">
        Kozijnen schilderen, herstellen of vervangen?
      </h2>
      <p>
        Zolang het hout gezond is, is schilderen de voordeligste keuze. Pas als een kozijn voor een groot deel is aangetast, wordt vervangen
        verstandiger. Bij de inspectie bepaalt Schildersbedrijf040 per kozijn welke aanpak past:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Staat van het kozijn</th>
            <th scope="col">Aanpak</th>
            <th scope="col">Indicatie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Verf dof of bladderend, hout gezond</td>
            <td>Schuren, gronden, kitwerk en aflakken</td>
            <td>€50 tot €100 per kozijn</td>
          </tr>
          <tr>
            <td>Plaatselijk zacht hout, bijvoorbeeld in de onderdorpel</td>
            <td>Houtrot herstellen met epoxy, daarna schilderen</td>
            <td>€150 tot €450 per kozijn, plus schilderwerk</td>
          </tr>
          <tr>
            <td>Kozijn grotendeels aangetast of sluit niet meer</td>
            <td>Kozijn vervangen</td>
            <td>€600 tot €1.500 per kozijn</td>
          </tr>
        </tbody>
      </table>
      <p>
        {linkLive('/blog/beitsen-of-lakken') && (
          <>
            Twijfelt u tussen een dekkende lak en een transparante beits, of wilt u weten wat het verschil is voor het onderhoud? Lees dan{' '}
            <Link href="/blog/beitsen-of-lakken">beitsen of lakken: wat is beter voor uw kozijnen</Link>.{' '}
          </>
        )}
        Houd er rekening mee dat een kozijn dat
        nu dekkend geschilderd is, alleen weer gebeitst kan worden als alle verf tot op het kale hout wordt verwijderd.
      </p>
      <h2 id="kozijnen-schilderen-gratis-offerte" className="h-section mt-6 scroll-mt-28">
        Gratis offerte voor uw kozijnen
      </h2>
      <p>
        Laat uw kozijnen schilderen voordat de verf het hout niet meer beschermt. Schildersbedrijf040 neemt de kozijnen mee in een gratis
        inspectie en combineert ze desgewenst met de rest van uw{' '}
        <Link href="/diensten/buitenschilderwerk">buitenschilderwerk aan gevel, deuren en boeidelen</Link>, zodat ladders of een steiger maar
        één keer nodig zijn. <Link href="/contact">Gratis offerte aanvragen</Link> of bel{' '}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </>
  ),
  soorten: {
    id: 'wat-hoort-bij-kozijnen-schilderen',
    h2: 'Wat hoort er bij het schilderen van kozijnen?',
    intro:
      'Een kozijn is meer dan een laag verf. Rot hout, open kitnaden en de keuze tussen lak en beits bepalen hoe lang het schilderwerk meegaat.',
    kaarten: [
      {
        titel: 'Houtrot herstellen',
        beschrijving: 'Zacht hout in dorpels of hoeken wordt uitgefreesd en met epoxy hersteld, en daarna direct mee geschilderd.',
        link: '/diensten/houtrot-sanering',
        linkTekst: 'Meer over houtrot sanering',
      },
      {
        titel: 'Het hele huis buiten',
        beschrijving: 'Kozijnen, gevel, deuren en boeidelen in één planning en één offerte, met één keer ladders of steiger.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Bekijk buitenschilderwerk',
      },
      {
        titel: 'Beitsen of lakken',
        beschrijving: 'Dekkende lak of transparante beits: wat past bij uw kozijnen en wat betekent het voor het onderhoud?',
        link: '/blog/beitsen-of-lakken',
        linkTekst: 'Lees het verschil',
      },
    ],
  },
  werkwijze: {
    id: 'hoe-worden-kozijnen-geschilderd',
    h2: 'Hoe worden uw kozijnen geschilderd?',
    intro:
      'Na de inspectie krijgt u een offerte met vaste prijs. Het schilderen zelf gebeurt op droge dagen, in vier stappen per kozijn.',
    stappen: [
      {
        titel: 'Inspectie en houtrotcheck',
        beschrijving:
          'Elk kozijn wordt afgetikt en met een priem gecontroleerd, vooral de onderdorpel, de hoeken en de onderkant van de glaslatten.',
      },
      {
        titel: 'Schrapen, schuren en herstellen',
        beschrijving: 'Loszittende verf eraf, glad schuren en rot hout uitfrezen en herstellen met epoxy.',
      },
      {
        titel: 'Gronden en kitwerk',
        beschrijving:
          'Kale plekken gronden en gescheurde kitnaden rond het glas en tussen kozijn en metselwerk vernieuwen, zodat er geen water achter de verf komt.',
      },
      {
        titel: 'Aflakken en oplevering',
        beschrijving: 'Twee lagen Boonstoppel-buitenlak, daarna samen nalopen en alles schoon opgeleverd.',
      },
    ],
  },
  waarom: {
    h2: 'Waarom uw kozijnen laten schilderen door Schildersbedrijf040?',
    tekst:
      'Schildersbedrijf040 is een schildersbedrijf uit Eindhoven met ruim vijf jaar ervaring. Eigenaar Jordy Jacobs bekijkt uw kozijnen zelf en is uw vaste aanspreekpunt van inspectie tot oplevering.',
    usps: [
      { titel: '5,0 op Google', beschrijving: 'Uit 41 reviews op Google, en een 4,9 op Werkspot.' },
      { titel: 'Houtrotcheck', beschrijving: 'Elk kozijn wordt gecontroleerd voordat er verf op komt, zodat rot hout niet onder een nieuwe laag verdwijnt.' },
      { titel: 'Boonstoppel-verf', beschrijving: 'Buitenlak die 8 tot 10 jaar meegaat bij goede voorbereiding.' },
      { titel: 'Vaste prijs per kozijn', beschrijving: 'Na de gratis inspectie weet u per kozijn wat het kost, houtrotherstel en steiger apart vermeld.' },
    ],
  },
  projecten: [
    {
      titel: '[JORDY: kozijnenproject, bijv. aantal kozijnen en wat er gedaan is]',
      label: '[JORDY: plaats] · [JORDY: maand]',
      na: images.lakKozijnen,
      tekst: '[JORDY: korte omschrijving: staat vooraf, houtrot of kitwerk, kleur, doorlooptijd]',
    },
  ],
  faqs,
  faqTitel: 'Vragen over kozijnen schilderen',
  prijsSlug: 'buitenschilderwerk',
  cta: {
    titel: 'Kozijnen laten schilderen?',
    tekst: 'Gratis inspectie met houtrotcheck en een offerte met vaste prijs per kozijn. Bel of vraag online een offerte aan.',
  },
  schema: [
    serviceSchema,
    breadcrumbSchema([
      ['Home', '/'],
      ['Buitenschilderwerk', '/diensten/buitenschilderwerk'],
      ['Kozijnen schilderen', '/diensten/kozijnen-schilderen'],
    ]),
    // Antwoorden met een open punt voor Jordy niet in het schema
    faqSchema(faqs.filter((f) => !f.answer.includes('[JORDY'))),
  ],
}

export default function KozijnenSchilderenPage() {
  return <DienstTemplate d={pagina} />
}

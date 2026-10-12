import type { Metadata } from 'next'
import Link from 'next/link'
import { DienstTemplate, type DienstPagina } from '@/components/dienst/template'
import { images } from '@/lib/images'
import { jordy, TOON_JORDY, toonBlok } from '@/lib/jordy'
import { breadcrumbSchema, faqSchema, orgRef, serviceOffers, werkgebied } from '@/lib/schema'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Gevel schilderen: prijs per m²',
  description:
    'Gevel schilderen kost €35 tot €45 per m², excl. steiger en btw. Welke gevels kunnen, wanneer baksteen beter kaal blijft en wanneer u toestemming nodig heeft.',
  openGraph: {
    title: 'Gevel schilderen: prijs per m² | Schildersbedrijf040',
    description:
      'Gevel laten schilderen in Eindhoven en omgeving: €35 tot €45 per m², eerlijk advies over baksteen en uitleg over toestemming van gemeente of VvE.',
    url: 'https://schildersbedrijf040.nl/diensten/gevel-schilderen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/gevel-schilderen',
  },
}

// Alleen het gevelbedrag staat al op de site; de rest is een open punt voor Jordy
const kostenRegels: { wat: string; toelichting: string; prijs: string }[] = [
  {
    wat: 'Gevel schilderen',
    toelichting: 'Voorbereiden, gronden waar nodig en twee lagen buitenmuurverf',
    prijs: '€35 tot €45 per m²',
  },
  {
    wat: 'Steiger',
    toelichting: 'Huur, opbouw en afbouw; hangt af van hoogte en lengte van de gevel',
    prijs: '[JORDY: indicatieve bandbreedte steiger, bijv. voorgevel rijtjeswoning en twee-onder-een-kap]',
  },
  {
    wat: 'Gevel reinigen vooraf',
    toelichting: 'Groene aanslag, vuil en loszittende deeltjes verwijderen',
    prijs: '[JORDY: zelf of via partner, en indicatie per m²]',
  },
  {
    wat: 'Scheuren in stucwerk herstellen',
    toelichting: 'Alleen als de inspectie scheuren vindt',
    prijs: '[JORDY: indicatie of op uurbasis]',
  },
  {
    wat: 'Btw',
    toelichting: 'Woning ouder dan 2 jaar',
    prijs: '9% op arbeid',
  },
]

const faqs = [
  {
    question: 'Kan een gevel met groene aanslag zomaar overgeschilderd worden?',
    answer:
      'Nee. Verf hecht niet op groene aanslag, mos of vuil, en wat eronder blijft zitten groeit door. De gevel moet daarom eerst gereinigd worden en goed opdrogen voordat er geschilderd wordt. Groene aanslag is bovendien een teken dat de gevel lang vochtig blijft, vaak aan de noordkant of onder een lekkende goot. Schildersbedrijf040 kijkt bij de inspectie waar het vocht vandaan komt, want een gevel die nat blijft, laat ook nieuwe verf sneller los. De reiniging staat als aparte regel in de offerte.',
  },
  {
    question: 'Kan ik een geschilderde gevel later weer terugbrengen naar kale baksteen?',
    answer:
      'Dat is lastig. Baksteen is poreus: verf trekt in de poriën en in de voegen, en komt er met reinigen niet volledig uit. Afbijten en stralen kunnen veel verf verwijderen, maar het is specialistisch werk, en vooral stralen kan het oppervlak van de steen beschadigen. Ga er daarom van uit dat een geschilderde bakstenen gevel een geschilderde gevel blijft, met onderhoud zoals bij elk ander schilderwerk. Twijfelt u, laat dan eerst een proefvlak zetten op een plek die weinig opvalt.',
  },
  {
    question: 'Welke kleur kiest u voor een geschilderde gevel?',
    answer:
      'Kies een kleur die past bij de straat en die de oneffenheden van de gevel niet uitvergroot. Lichte kleuren laten scheve voegen en ongelijke stenen sterker zien, zeker bij strijklicht van de zon. Een kleur die sterk afwijkt van de buren in een rij kan bovendien in strijd zijn met de regels van de gemeente voor het uiterlijk van gebouwen. Laat bij twijfel een proefvlak zetten en bekijk dat op verschillende momenten van de dag. Schildersbedrijf040 denkt graag mee over een kleur die bij uw kozijnen past.',
  },
  {
    question: 'Is er een vergunning nodig als de steiger op de stoep staat?',
    answer:
      'Ja. Een steiger op de stoep of de straat staat op openbare grond, en daarvoor geeft de gemeente Eindhoven een vergunning af. Woont u buiten Eindhoven, controleer dan de regels van uw eigen gemeente. Staat de steiger volledig op uw eigen grond, bijvoorbeeld in de voortuin, dan is die vergunning niet nodig. Bespreek bij de inspectie waar de steiger komt te staan, zodat de aanvraag op tijd gedaan kan worden en de planning niet uitloopt. Licht ook de buren in als de steiger voor hun deur of op de erfgrens komt.',
  },
  {
    question: 'Hoe lang duurt het schilderen van een gevel?',
    answer: '[JORDY: doorlooptijd voor bijvoorbeeld een voorgevel van een rijtjeswoning, inclusief opbouw steiger en droogtijd tussen de lagen]',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://schildersbedrijf040.nl/diensten/gevel-schilderen/#service',
  name: 'Gevel schilderen',
  serviceType: 'Buitenschilderwerk',
  description:
    'Gevels schilderen in Eindhoven en omgeving: stucwerk, beton en eerder geschilderd metselwerk, met inspectie van de ondergrond en dampopen buitenmuurverf.',
  provider: orgRef,
  areaServed: werkgebied.map((name) => ({ '@type': 'City', name })),
  offers: serviceOffers('buitenschilderwerk').filter((o) => o.name === 'Gevel schilderen'),
}

const pagina: DienstPagina = {
  slug: 'gevel-schilderen',
  naam: 'Gevel schilderen',
  h1: 'Gevel schilderen in Eindhoven',
  heroTekst: (
    <p>
      Een gevel laten schilderen kost gemiddeld €35 tot €45 per m², inclusief voorbereiding en verf en exclusief steiger en btw. Stucwerk,
      beton en eerder geschilderd metselwerk zijn goed te schilderen; kale baksteen in goede staat raden wij meestal af. Gevel schilderen
      is een onderdeel van ons <Link href="/diensten/buitenschilderwerk">buitenschilderwerk</Link>, met een vaste prijs na een gratis
      inspectie.
    </p>
  ),
  heroImg: images.villa,
  kerncijfers: [
    { waarde: '€35 tot €45', label: 'Per m² gevel, excl. steiger' },
    { waarde: '8 tot 10 jaar', label: 'Levensduur met Boonstoppel-verf' },
    { waarde: '1 jaar', label: 'Wachten bij nieuw metselwerk' },
    { waarde: '9% btw', label: 'Op arbeid, woning ouder dan 2 jaar' },
  ],
  watIs: {
    id: 'welke-gevels-kunnen-geschilderd-worden',
    h2: 'Welke gevels kunnen geschilderd worden?',
    body: (
      <>
        <p>
          Gestuukte gevels, beton en metselwerk dat al eerder geschilderd is, kunnen goed geschilderd worden. Bij kale baksteen, nieuw
          metselwerk en gevels met vochtproblemen ligt dat anders. De ondergrond bepaalt welke verf nodig is en of schilderen verstandig is:
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Gevel</th>
              <th scope="col">Schilderen?</th>
              <th scope="col">Let op</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stucwerk of sierpleister</td>
              <td>Ja</td>
              <td>Scheuren eerst herstellen, dampopen buitenmuurverf</td>
            </tr>
            <tr>
              <td>Eerder geschilderd metselwerk</td>
              <td>Ja</td>
              <td>Loszittende verf verwijderen, verf die past bij de oude laag</td>
            </tr>
            <tr>
              <td>Beton of betonplaten</td>
              <td>Ja</td>
              <td>Eerst reinigen en beschadigingen herstellen</td>
            </tr>
            <tr>
              <td>Kale baksteen in goede staat</td>
              <td>Meestal afgeraden</td>
              <td>Meer onderhoud en lastig terug te draaien</td>
            </tr>
            <tr>
              <td>Nieuw metselwerk</td>
              <td>Nog niet</td>
              <td>Minstens een jaar wachten tot de zouten uit de muur zijn</td>
            </tr>
            <tr>
              <td>Gevel met vochtproblemen</td>
              <td>Nog niet</td>
              <td>Eerst de oorzaak van het vocht oplossen</td>
            </tr>
          </tbody>
        </table>
        <p>
          Bij elke gevel geldt: de verf moet vocht uit de muur kunnen laten ontsnappen. Een dampopen buitenmuurverf houdt regenwater buiten
          maar laat waterdamp door.{TOON_JORDY && ' [JORDY: welke Boonstoppel-gevelverf gebruikt u?]'} Een houten gevelbekleding wordt behandeld als
          houtwerk, met grondverf en buitenlak in plaats van muurverf.
        </p>
      </>
    ),
  },
  kosten: {
    id: 'wat-kost-gevel-schilderen-inclusief-steiger',
    h2: 'Wat kost gevel schilderen per m², inclusief steiger?',
    body: (
      <>
        <p>
          Gevel schilderen kost gemiddeld €35 tot €45 per m², inclusief voorbereiding en verf, exclusief steiger en btw. De steiger komt als
          aparte regel in de offerte, net als het reinigen van de gevel en het herstellen van scheuren als dat nodig is. Zo ziet u precies
          waar de kosten zitten.
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
            {kostenRegels
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
          Rekenvoorbeeld: een gevel met 40 m² te schilderen oppervlak, dus zonder ramen en deuren, komt uit op €1.400 tot €1.800 voor het
          schilderwerk, plus de steiger en btw. Waar u binnen de bandbreedte uitkomt, hangt af van de ondergrond, het aantal scheuren, de
          hoogte en een eventuele kleurwissel: van donker naar licht is vaak een extra laag nodig.
        </p>
      </>
    ),
  },
  extra: (
    <>
      <h2 id="bakstenen-gevel-schilderen" className="h-section mt-6 scroll-mt-28">
        Kun je een bakstenen gevel beter niet schilderen?
      </h2>
      <p>
        Is uw bakstenen gevel goed gemetseld en in goede staat, dan is schilderen niet nodig en raden wij het meestal af. Ook de vereniging
        van baksteenfabrikanten (KNB) schrijft dat goed uitgevoerd metselwerk geen verflaag nodig heeft, en dat verf de onderhoudsbehoefte
        verhoogt. Een kale bakstenen gevel vraagt weinig onderhoud; een geschilderde gevel moet u periodiek laten overschilderen.
      </p>
      <p>Daarnaast zijn er situaties waarin schilderen van baksteen technisch af te raden is:</p>
      <ol>
        <li>
          <strong>Nieuw metselwerk.</strong> Verffabrikanten adviseren minstens een jaar te wachten, omdat zouten uit nieuw metselwerk de
          verf kunnen beschadigen. Na een jaar is de witte uitslag meestal verdwenen.
        </li>
        <li>
          <strong>Stenen die mangaan bevatten.</strong> Die kunnen verkleuringen door de verf heen geven.
        </li>
        <li>
          <strong>Ongelijk metselwerk.</strong> Scheve vlakken en voegen die niet even diep liggen, vallen na het schilderen juist meer op,
          vooral bij lichte kleuren.
        </li>
        <li>
          <strong>Vocht in de muur.</strong> Een verf die vocht binnenhoudt, kan bij vorst schade aan de stenen geven. Gebruik daarom altijd
          een dampopen verf en zorg dat de open stootvoegen boven kozijnen en onderaan de muur open blijven, zodat de spouw kan ventileren.
        </li>
      </ol>
      <p>
        Wanneer kan het wel? Als de gevel al geschilderd is, als de stenen na herstel een lappendeken zijn geworden, of als u bewust kiest
        voor een andere uitstraling en het onderhoud daarbij accepteert. Is uw gevel alleen vuil of groen, dan is reinigen vaak voldoende.
        {TOON_JORDY && ' [JORDY: gevelreiniging en impregneren zelf of via een partner?]'}
      </p>
      <h2 id="toestemming-gemeente-of-vve" className="h-section mt-6 scroll-mt-28">
        Heeft u toestemming nodig van de gemeente of de VvE?
      </h2>
      <p>
        Voor een gewone woning heeft u meestal geen vergunning nodig om de gevel te schilderen. Bij monumenten, een beschermd stads- of
        dorpsgezicht en appartementen ligt dat anders:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Situatie</th>
            <th scope="col">Wat geldt er?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overschilderen in dezelfde kleur</td>
            <td>Gewoon onderhoud, vergunningvrij</td>
          </tr>
          <tr>
            <td>Andere kleur, gewone woning</td>
            <td>Geen vergunning, maar een kleur die sterk afwijkt van de rest van de rij kan in strijd zijn met de regels voor het uiterlijk</td>
          </tr>
          <tr>
            <td>Rijksmonument of gemeentelijk monument</td>
            <td>Omgevingsvergunning nodig voor een andere kleur of afwerking</td>
          </tr>
          <tr>
            <td>Beschermd stads- of dorpsgezicht</td>
            <td>Vooraf contact opnemen met de gemeente</td>
          </tr>
          <tr>
            <td>Appartement met VvE</td>
            <td>De gevel hoort meestal bij de gemeenschappelijke delen: toestemming van de VvE nodig</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bij een appartement bepalen de splitsingsakte en het reglement van de VvE wat gemeenschappelijk is. In principe valt de gevel daar
        altijd onder, tenzij de akte iets anders zegt. Twijfelt u of uw woning een monument is of in een beschermd gezicht ligt, kijk dan in
        het Omgevingsloket of vraag het na bij uw gemeente voordat u een kleur kiest.
      </p>
      <h2 id="gevel-schilderen-gratis-offerte" className="h-section mt-6 scroll-mt-28">
        Gratis offerte voor uw gevel
      </h2>
      <p>
        Wilt u weten of uw gevel geschikt is en wat het kost? Schildersbedrijf040 bekijkt de ondergrond bij een gratis inspectie en geeft
        eerlijk advies, ook als dat advies is om niet te schilderen. Combineer de gevel met uw{' '}
        <Link href="/diensten/buitenschilderwerk">buitenschilderwerk aan kozijnen en boeidelen</Link>, dan is de steiger maar één keer
        nodig. <Link href="/contact">Gratis offerte aanvragen</Link> of bel <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </>
  ),
  soorten: {
    id: 'gevel-combineren-met-ander-buitenwerk',
    h2: 'Wat kunt u combineren met de gevel?',
    intro:
      'Staat de steiger er toch, dan is dat het moment om ook het houtwerk hoog aan de gevel mee te nemen. Dat scheelt een tweede keer steiger.',
    kaarten: [
      {
        titel: 'Kozijnen en boeidelen',
        beschrijving: 'Houtwerk hoog aan de gevel schilderen terwijl de steiger er staat, in dezelfde planning.',
        link: '/diensten/buitenschilderwerk',
        linkTekst: 'Bekijk buitenschilderwerk',
      },
      {
        titel: 'Prijzen buitenwerk',
        beschrijving: 'De prijzen voor kozijnen, deuren, boeidelen en dakkapellen naast elkaar.',
        link: '/diensten/buitenschilderwerk#kosten-buitenschilderwerk',
        linkTekst: 'Bekijk de prijzen',
      },
      {
        titel: 'Gratis inspectie',
        beschrijving: 'Schildersbedrijf040 bekijkt de ondergrond, scheuren en vocht, en adviseert of schilderen verstandig is.',
        link: '/contact',
        linkTekst: 'Inspectie aanvragen',
      },
    ],
  },
  werkwijze: {
    id: 'hoe-wordt-een-gevel-geschilderd',
    h2: 'Hoe wordt uw gevel geschilderd?',
    intro: 'Na de inspectie krijgt u een offerte met vaste prijs. Het schilderen gebeurt op droge dagen, in vier stappen.',
    stappen: [
      {
        titel: 'Inspectie van de ondergrond',
        beschrijving: 'Soort gevel, scheuren, vocht en de hechting van oude verf bepalen welke aanpak en welke verf nodig zijn.',
      },
      {
        titel: 'Reinigen en herstellen',
        beschrijving: 'Aanslag en vuil verwijderen, de gevel laten drogen en scheuren in stucwerk of beton herstellen.',
      },
      {
        titel: 'Afplakken en gronden',
        beschrijving: 'Kozijnen, glas en dorpels afplakken en de ondergrond voorstrijken waar dat nodig is.',
      },
      {
        titel: 'Schilderen en oplevering',
        beschrijving: 'Twee lagen dampopen buitenmuurverf, daarna samen nalopen en alles schoon opgeleverd.',
      },
    ],
  },
  waarom: {
    h2: 'Waarom uw gevel laten schilderen door Schildersbedrijf040?',
    tekst:
      'Schildersbedrijf040 is een schildersbedrijf uit Eindhoven met ruim vijf jaar ervaring. Eigenaar Jordy Jacobs beoordeelt zelf of uw gevel geschikt is en is uw vaste aanspreekpunt van inspectie tot oplevering.',
    usps: [
      { titel: '5,0 op Google', beschrijving: 'Uit 41 reviews op Google, en een 4,9 op Werkspot.' },
      { titel: 'Eerlijk advies', beschrijving: 'Is schilderen niet verstandig voor uw gevel, dan hoort u dat vooraf.' },
      { titel: 'Boonstoppel-verf', beschrijving: 'Verf die 8 tot 10 jaar meegaat bij goede voorbereiding.' },
      { titel: 'Vaste prijs', beschrijving: 'Prijs per m², met steiger en reiniging als aparte regels in de offerte.' },
    ],
  },
  projecten: [
    {
      titel: '[JORDY: gevelproject, bijv. type gevel en kleur]',
      label: '[JORDY: plaats] · [JORDY: maand]',
      na: images.villa,
      tekst: '[JORDY: korte omschrijving: ondergrond, voorbereiding, aantal m², doorlooptijd]',
    },
  ],
  faqs,
  faqTitel: 'Vragen over gevel schilderen',
  prijsSlug: 'buitenschilderwerk',
  cta: {
    titel: 'Gevel laten schilderen?',
    tekst: 'Gratis inspectie van de ondergrond en een offerte met vaste prijs per m². Bel of vraag online een offerte aan.',
  },
  schema: [
    serviceSchema,
    breadcrumbSchema([
      ['Home', '/'],
      ['Buitenschilderwerk', '/diensten/buitenschilderwerk'],
      ['Gevel schilderen', '/diensten/gevel-schilderen'],
    ]),
    // Antwoorden met een open punt voor Jordy niet in het schema
    faqSchema(faqs.filter((f) => !f.answer.includes('[JORDY'))),
  ],
}

export default function GevelSchilderenPage() {
  return <DienstTemplate d={pagina} />
}

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bewijs,
  Diensten,
  DienstenTicker,
  HomeHero,
  RecenteProjecten,
  Reviews,
  SeoTekst,
  Social,
  UitOnsWerk,
  WerkgebiedFaq,
  Werkwijze,
  Winter,
  type Faq,
} from '@/components/home/v2'
import { Offerte } from '@/components/site/offerte'
import { Winterband } from '@/components/site/winterband'
import { JsonLd } from '@/components/json-ld'
import { faqSchema } from '@/lib/schema'
import { huidigSeizoen } from '@/lib/seizoen'
import { site } from '@/lib/site'

// Dagelijks opnieuw opbouwen, zodat het seizoensblok vanzelf wisselt
export const revalidate = 86400

export const metadata: Metadata = {
  title: { absolute: 'Schilder Eindhoven | Schildersbedrijf040' },
  description: 'Schilder in Eindhoven en omgeving voor binnen- en buitenschilderwerk, behangen en latex spuiten. Boonstoppel-verf, gratis inspectie en een vaste prijs.',
  alternates: {
    canonical: 'https://schildersbedrijf040.nl',
  },
  openGraph: {
    title: 'Schilder Eindhoven | Schildersbedrijf040',
    description: 'Schilder in Eindhoven en omgeving voor binnen- en buitenschilderwerk, behangen en latex spuiten. Boonstoppel-verf, gratis inspectie en een vaste prijs.',
    url: 'https://schildersbedrijf040.nl',
    siteName: 'Schildersbedrijf040',
    images: [
      {
        url: '/images/schildersbedrijf040-schilder-eindhoven.jpg',
        width: 1200,
        height: 630,
        alt: 'Schildersbedrijf040, schilder in Eindhoven',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
}

// Zichtbare antwoorden, dezelfde tekst als in het FAQPage-schema
const faqs: Faq[] = [
  {
    question: 'Wat kost een schilder in Eindhoven?',
    answer:
      'Een schilder in Eindhoven kost gemiddeld €30 tot €35 per m² voor binnenschilderwerk en €35 tot €45 per m² voor buitenschilderwerk aan de gevel, afhankelijk van het type schilderwerk en de staat van de ondergrond. Binnenschilderwerk valt doorgaans lager uit dan buitenschilderwerk, omdat buitenwerk meer voorbereiding vereist zoals schuren, gronden en eventueel houtrot sanering. Schildersbedrijf040 brengt altijd eerst een gratis inspectie uit en levert een gedetailleerde offerte op maat, zodat u vooraf precies weet wat de kosten zijn, zonder verrassingen achteraf.',
    link: { href: '/diensten/binnenschilderwerk', tekst: 'Bekijk de prijzen voor binnenschilderwerk.' },
  },
  {
    question: 'Hoe herkent u een goede schilder in Eindhoven?',
    answer:
      'Een goede schilder in Eindhoven herkent u aan ervaringen van klanten, een duidelijke offerte en zorgvuldige voorbereiding. Kijk naar reviews: Schildersbedrijf040 heeft een 5,0 op Google uit 41 reviews en een 4,9 op Werkspot. Vraag om een inspectie bij u thuis en een offerte met vaste prijs, en vraag welke verf er wordt gebruikt. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft ruim vijf jaar ervaring in Eindhoven en omgeving.',
  },
  {
    question: 'Welke garantie geeft Schildersbedrijf040 op schilderwerk?',
    answer:
      'Schildersbedrijf040 biedt garantie op zowel het vakmanschap als de gebruikte materialen. De exacte garantieperiode hangt af van het type schilderwerk: binnenschilderwerk kent doorgaans een garantie van 3 tot 5 jaar, buitenschilderwerk van 5 tot 7 jaar. Schildersbedrijf040 werkt uitsluitend met Boonstoppel verf, waardoor het schilderwerk langer meegaat. Mocht er binnen de garantieperiode een gebrek ontstaan, dan herstelt Schildersbedrijf040 dit kosteloos.',
  },
  {
    question: 'Kan er het hele jaar door geschilderd worden?',
    answer:
      'Binnenschilderwerk kan het hele jaar door worden uitgevoerd, ongeacht het seizoen of de weersomstandigheden. Voor buitenschilderwerk geldt dat de buitentemperatuur minimaal 10 °C moet zijn en de ondergrond droog. In de praktijk voert Schildersbedrijf040 buitenschilderwerk daarom hoofdzakelijk uit van april tot en met oktober. In de wintermaanden richt Schildersbedrijf040 zich op binnenwerk, behangen, lakwerk en latex spuiten.',
    link: { href: '/diensten/winterschilder', tekst: 'Lees meer over schilderen in de winter.' },
  },
  {
    question: 'Werkt Schildersbedrijf040 ook buiten Eindhoven?',
    answer:
      'Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Vaste werkgebieden zijn onder meer Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond, Valkenswaard, Oirschot, Heeze, Mierlo, Meerhoven, Deurne, Beek en Donk, Eersel, Bergeijk en Maarheeze. Ook in plaatsen als Den Bosch, Tilburg en Weert voert Schildersbedrijf040 regelmatig schilderwerk uit. Bekijk de pagina van uw stad voor meer informatie over onze diensten bij u in de buurt.',
  },
  {
    question: 'Hoe lang duurt een schilderproject?',
    answer:
      'Een gemiddeld schilderproject bij Schildersbedrijf040 duurt tussen de 3 en 10 werkdagen, afhankelijk van de omvang en het type werk. Het schilderen van een woonkamer (muren en plafond) kost doorgaans 2 tot 3 dagen, terwijl een complete buitenschilderbeurt van een rijtjeswoning 5 tot 8 werkdagen in beslag neemt. Bij de offerte ontvangt u altijd een concreet tijdschema. Schildersbedrijf040 plant projecten strak in, zodat het werk binnen de afgesproken termijn wordt opgeleverd.',
  },
]

export default function Home() {
  const seizoen = huidigSeizoen()
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <HomeHero />
      <Winterband />
      <Diensten />
      <UitOnsWerk />
      <RecenteProjecten />
      <DienstenTicker />
      <Bewijs />
      <Werkwijze />
      <Winter seizoen={seizoen} />
      <Reviews />
      <SeoTekst />
      <WerkgebiedFaq faqs={faqs} />
      <Social />
      <Offerte
        formTitel="Vraag een offerte aan"
        extra={
          <div className="q-extra">
            <h2 id="contact" className="q-h">
              Contact
            </h2>
            <p>Neem gerust contact met ons op voor een vrijblijvende offerte</p>
            <h3 className="q-h3">Contactgegevens</h3>
            <dl className="q-contact">
              <div>
                <dt>Telefoon</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Adres</dt>
                <dd>Straatsburglaan 26, 5627DB Eindhoven</dd>
              </div>
              <div>
                <dt>Openingstijden</dt>
                <dd>
                  Ma t/m vr: 08:00 tot 17:30
                  <br />
                  Za-Zo: Gesloten
                </dd>
              </div>
            </dl>
            <span className="q-kicker">Liever telefonisch contact?</span>
            <h2 id="bel-mij-terug" className="q-h">
              Bel mij terug
            </h2>
            <h3 className="q-h3">Doen we graag!</h3>
            <p>Komt het beter uit als wij u terugbellen op een moment dat het u uitkomt? Geen probleem!</p>
            <p>Laat via het formulier uw telefoonnummer achter en wij bellen u graag terug.</p>
            <h3 className="q-h3">Stuur ons een bericht</h3>
            <p>
              Een vraag zonder offerte? Mail naar <a href={`mailto:${site.email}`}>{site.email}</a> of gebruik het{' '}
              <Link href="/contact">contactformulier</Link>.
            </p>
          </div>
        }
      />
    </main>
  )
}

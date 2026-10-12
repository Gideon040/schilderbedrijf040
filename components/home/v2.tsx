import Image from 'next/image'
import Link from 'next/link'
import { images, type SiteImage } from '@/lib/images'
import { plaatsen } from '@/lib/navigation'
import { prijzen } from '@/lib/prices'
import { reviews, dienstQuotes } from '@/lib/reviews'
import { site } from '@/lib/site'
import { jordy, toonBlok } from '@/lib/jordy'
import type { Seizoensblok } from '@/lib/seizoen'
import { Eyebrow, KnopBel, KnopOfferte, Pijl, Streek } from '@/components/site/v2'
import { VoorNa } from '@/components/site/voor-na'

const opt = (src: string, w = 640) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`
const per = (s: string) => s.replace(' /', ' / ')

/* ---------- hero ---------- */
export function HomeHero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="wrap grid">
        <div>
          <h1 className="disp">
            <span className="w">
              <span>Schilder</span>
            </span>
            <br />
            <span className="w">
              <span>in</span>
            </span>{' '}
            <span className="w">
              <span className="paint">Eindhoven</span>
            </span>
          </h1>
          <p className="sub">Binnen- en buitenschilderwerk, behangen en latex spuiten</p>
          <p className="lead">
            Schildersbedrijf040 is uw schildersbedrijf in Eindhoven voor binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten
            en houtrot sanering. Eigenaar Jordy Jacobs werkt met Boonstoppel verf voor een resultaat dat jaren meegaat, beoordeeld met 5 sterren op
            Google. Vraag vandaag nog een gratis inspectie en vrijblijvende offerte aan.
          </p>
          <div className="cta-row">
            <KnopOfferte />
            <KnopBel />
          </div>
          <div className="trust">
            <div>
              <span className="n">{site.google.rating}</span>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <small>{site.google.reviewCount} reviews op Google</small>
            </div>
            <div>
              <span className="n">{site.werkspot.rating}</span>
              <small>op Werkspot</small>
            </div>
            <div>
              <span className="n">5+ jaar</span>
              <small>ervaring in de regio</small>
            </div>
          </div>
        </div>
        <div className="photo">
          <div className="roller" aria-hidden="true">
            <i />
          </div>
          <div className="img">
            <Image src={images.jordy.src} alt="Jordy Jacobs - Eigenaar Schildersbedrijf040" fill priority sizes="(max-width: 980px) 92vw, 590px" />
          </div>
          <div className="badge" role="img" aria-label={`${site.google.rating} op Google`}>
            <svg viewBox="0 0 116 116" aria-hidden="true">
              <defs>
                <path id="badge-cirkel" d="M58,58 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text fontFamily="var(--mono)" fontSize="9" letterSpacing="2.4" fill="#0A1626">
                <textPath href="#badge-cirkel">GOOGLE REVIEWS · 41 · GOOGLE REVIEWS · 41 ·</textPath>
              </text>
            </svg>
            <div>
              <b>{site.google.rating}</b>
              <span aria-hidden="true">★★★★★</span>
            </div>
          </div>
          <div className="who">
            <b>{site.owner}</b>
            <span>Eigenaar van Schildersbedrijf040</span>
          </div>
          <div className="fan" aria-hidden="true">
            {['040-01 BINNEN', '040-02 BEHANG', '040-03 LATEX', '040-04 HOUTROT', '040-05 BUITEN', '040-06 LAKWERK'].map((l, i) => (
              <div key={l} className={`sw${i > 2 ? ' dk' : ''}`}>
                <em>{l}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- diensten als stalenkaart ---------- */
const rijen: { slug: string; code: string; c: string; titel: string; tekst: string; linkTekst: string; prijs: string; img: SiteImage }[] = [
  { slug: 'binnenschilderwerk', code: '040-01', c: 'var(--sw1)', titel: 'Binnenschilderwerk', tekst: 'Professioneel schilderwerk voor uw interieur, van muren en plafonds tot kozijnen en deuren. Goed binnenschilderwerk verhoogt de uitstraling van uw woning en beschermt oppervlakken tot wel 7 jaar.', linkTekst: 'Meer over binnenschilderwerk', prijs: per(prijzen.binnenschilderwerk[0].prijs), img: images.binnendeur },
  { slug: 'buitenschilderwerk', code: '040-05', c: 'var(--sw4)', titel: 'Buitenschilderwerk', tekst: 'Bescherm en verfraai uw woning met vakkundig buitenschilderwerk, inclusief gratis houtrot inspectie. Zonder tijdig buitenschilderwerk kan vochtschade de constructie van uw houtwerk aantasten.', linkTekst: 'Meer over buitenschilderwerk', prijs: per(prijzen.buitenschilderwerk[0].prijs), img: images.tuinhuis },
  { slug: 'behangen', code: '040-02', c: 'var(--sw2)', titel: 'Behangen', tekst: 'Van klassiek behang tot moderne wandbekleding. Schildersbedrijf040 zorgt voor een naadloze afwerking. Behang geeft uw interieur direct karakter en is beschikbaar in honderden dessins.', linkTekst: 'Meer over behangen', prijs: `Vlies ${per(prijzen.behangen[0].prijs)}`, img: images.behang },
  { slug: 'lakwerk', code: '040-06', c: 'var(--sw6)', titel: 'Lakwerk', tekst: 'Specialistisch lakwerk voor een hoogwaardige afwerking van deuren, kozijnen en meubels. Schildersbedrijf040 gebruikt Boonstoppel lakken voor een krasbestendig en duurzaam resultaat.', linkTekst: 'Meer over lakwerk', prijs: `Deur ${prijzen.lakwerk[2].prijs.replace(' /stuk', '')}`, img: images.lakKozijnen },
  { slug: 'latex-spuiten', code: '040-03', c: 'var(--sw3)', titel: 'Latex spuiten', tekst: 'Efficiënt en strak resultaat met professionele latex spuittechniek. Latex spuiten is tot 3 keer sneller dan rollen en levert een egale, rolstreepvrije afwerking.', linkTekst: 'Latex spuiten bekijken', prijs: per(prijzen['latex-spuiten'][0].prijs), img: images.latex },
  { slug: 'houtrot-sanering', code: '040-04', c: 'var(--sw5)', titel: 'Houtrot sanering', tekst: 'Preventieve en curatieve behandeling van houtrot om grotere schade te voorkomen. Onbehandeld houtrot kan zich snel uitbreiden en tot kostbare vervanging van kozijnen leiden.', linkTekst: 'Meer over houtrot sanering', prijs: `Klein kozijn ${prijzen['houtrot-sanering'][0].prijs.replace(' /stuk', '')}`, img: images.houtrot },
]

export function Diensten() {
  return (
    <section id="diensten">
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow>Onze diensten</Eyebrow>
            <h2 id="wat-kunnen-we-voor-u-schilderen" className="disp">
              Wat kunnen we voor u <Streek>schilderen?</Streek>
            </h2>
          </div>
          <p>
            Schildersbedrijf040 biedt zes schilderdiensten voor particulieren en bedrijven in Eindhoven en omgeving. Elk project begint met een gratis
            inspectie, zodat u vooraf precies weet wat er nodig is.
          </p>
        </div>
        <div className="svc">
          {rijen.map((r) => (
            <Link key={r.slug} className="row rv" href={`/diensten/${r.slug}`} data-img={opt(r.img.src)} style={{ ['--c' as string]: r.c }}>
              <span className="chip" style={r.slug === 'binnenschilderwerk' ? { boxShadow: 'inset 0 0 0 1px var(--line)' } : undefined} />
              <div>
                <span className="code">{r.code}</span>
                <h3>{r.titel}</h3>
              </div>
              <div>
                <p>{r.tekst}</p>
                <span className="lk">{r.linkTekst} →</span>
              </div>
              <span className="pr">
                {r.prijs}{' '}
                <span className="go" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
        <p className="note-sm">Prijzen zijn indicatief, inclusief materiaal en exclusief btw. De exacte prijs hoort u na de gratis inspectie.</p>
      </div>
      <div className="peek" id="peek" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" id="peekimg" src={opt(images.binnendeur.src)} />
      </div>
    </section>
  )
}

/* ---------- voor/na: uit ons werk ---------- */
export function UitOnsWerk() {
  return (
    <section className="ba-sec on-dark" id="werk">
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow style={{ color: '#7FA3FF' }}>Projecten</Eyebrow>
            <h2 id="uit-ons-werk" className="disp">
              Uit ons <Streek>werk</Streek>
            </h2>
          </div>
          <p>Foto&apos;s van eigen projecten. Bij elk project komt een voor- en na-foto, met plaats en omschrijving.</p>
        </div>
        <VoorNa
          na={images.binnendeur}
          feiten={[
            ['Project', 'Binnendeur en kozijn strak gelakt'],
            ['Dienst', 'Binnenschilderwerk'],
            ['Plaats', '[JORDY: plaats]'],
            ['Doorlooptijd', '[JORDY: doorlooptijd]'],
          ]}
          knop={{ href: '/projecten', tekst: 'Alle projecten bekijken' }}
        />
      </div>
    </section>
  )
}

/* ---------- recente projecten ---------- */
const collage: { img: SiteImage; cls: string; label: string; titel: string; alt?: string }[] = [
  { img: images.tuinhuis, cls: 'b1', label: 'BUITENSCHILDERWERK', titel: 'Gevel en kozijnen wit geschilderd' },
  { img: images.dakkapel, cls: 'b2', label: 'Eindhoven · Complete renovatie', titel: 'Binnen- en buitenschilderwerk' },
  { img: images.lakKozijnen, cls: 'b3', label: 'LAKWERK', titel: 'Kozijnen gelakt' },
  { img: images.latex, cls: 'b4', label: 'Blixembosch, Eindhoven · Benedenverdieping', titel: 'Latex spuiten', alt: 'Benedenverdieping latex gespoten, Blixembosch' },
  { img: images.horeca, cls: 'b5', label: 'Oude Gracht, Eindhoven · Houtrot sanering', titel: 'Binnenwerk Restaria', alt: 'BINNENWERK RESTARIA' },
  { img: images.houtrot, cls: 'b6', label: 'HOUTROT SANERING', titel: 'Houtrot hersteld en geschilderd' },
]

export function RecenteProjecten() {
  return (
    <section>
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow>Recente projecten</Eyebrow>
            <h2 id="recente-projecten" className="disp">
              Recente <Streek>projecten</Streek>
            </h2>
          </div>
          <p>Ontdek onze recent voltooide projecten en zie hoe wij ruimtes transformeren met vakkundig schilderwerk en oog voor detail.</p>
        </div>
        <div className="collage">
          {collage.map((f) => (
            <figure key={f.titel} className={`${f.cls} rv`}>
              <Image src={f.img.src} alt={f.alt ?? f.img.alt} fill sizes="(max-width: 980px) 50vw, 600px" />
              <figcaption>
                <small>{f.label}</small>
                <span>{f.titel}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="rv" style={{ marginTop: 28 }}>
          <Link className="btn btn-line" href="/projecten">
            Alle projecten bekijken <Pijl />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function DienstenTicker() {
  const d = ['Binnenschilderwerk', 'Latex spuiten', 'Lakwerk', 'Behangen', 'Buitenschilderwerk', 'Houtrot sanering']
  return (
    <div className="ticker svcs" aria-hidden="true">
      <div className="row rev">
        {[...d, ...d].map((t, i) => (
          <span key={i}>
            {t}
            <i />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- bewijs en over ons ---------- */
export function Bewijs() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="grid rv counters">
          <div>
            <div className="big" data-to="5.0" data-dec="1">
              {site.google.rating}
            </div>
            <small>op Google, {site.google.reviewCount} reviews</small>
          </div>
          <div>
            <div className="big">
              <span data-to="8">8</span>+
            </div>
            <small>vaste collega&apos;s</small>
          </div>
          <div>
            <div className="big" data-to="4.9" data-dec="1">
              {site.werkspot.rating}
            </div>
            <small>op Werkspot</small>
          </div>
          <div>
            <div className="big blue">5+</div>
            <small>jaar ervaring</small>
          </div>
        </div>
        <div className="about">
          <div className="rv">
            <Eyebrow>Over ons</Eyebrow>
            <h2 id="vast-aanspreekpunt" className="disp" style={{ marginTop: 14 }}>
              Een schildersbedrijf uit Eindhoven, met een vast <Streek>aanspreekpunt</Streek>
            </h2>
          </div>
          <div className="rv lopend">
            <p>
              Schildersbedrijf040 is opgericht door Jordy Jacobs en heeft meer dan vijf jaar ervaring als schildersbedrijf in Eindhoven. Kwaliteit
              draait bij Schildersbedrijf040 niet alleen om het schilderwerk zelf, maar ook om heldere communicatie, betrouwbaarheid en flexibele
              planning. U heeft één aanspreekpunt van inspectie tot oplevering.
            </p>
            <p>Inmiddels werkt Schildersbedrijf040 met een vast team van meer dan acht collega&apos;s.</p>
            <Link className="btn btn-line" href="/over-ons" style={{ marginTop: 26 }}>
              Meer over Schildersbedrijf040 <Pijl />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- werkwijze ---------- */
export const stappenLive = [
  { titel: 'Contact', tekst: 'Neem telefonisch of via het formulier contact op voor een vrijblijvende afspraak. Schildersbedrijf040 reageert op werkdagen doorgaans binnen 24 uur.' },
  { titel: 'Inspectie & offerte', tekst: 'Wij komen gratis bij u langs om het schilderwerk te inspecteren en de ondergrond te beoordelen. Binnen 48 uur na de inspectie ontvangt u een gedetailleerde offerte.' },
  { titel: 'Uitvoering', tekst: 'Vakkundige uitvoering door gediplomeerde schilders met hoogwaardige Boonstoppel verfproducten. Schildersbedrijf040 werkt netjes en beschermt uw interieur tijdens het project.' },
  { titel: 'Oplevering', tekst: 'Na afronding loopt u samen met de schilder het resultaat na. Schildersbedrijf040 levert pas op wanneer u volledig tevreden bent en biedt garantie op het geleverde werk.' },
]

export function Stappen({ stappen }: { stappen: { titel: string; tekst: string }[] }) {
  return (
    <ol className="steps">
      <li className="track" aria-hidden="true">
        <i />
        <span className="trav">
          <svg viewBox="0 0 40 40">
            <rect x="4" y="6" width="26" height="12" rx="3" fill="#1A5BFF" />
            <path d="M30 12h4v10H18v6" fill="none" stroke="#0A1626" strokeWidth="3" />
            <rect x="15" y="27" width="6" height="11" rx="2" fill="#0A1626" />
          </svg>
        </span>
      </li>
      {stappen.map((s, i) => (
        <li key={s.titel} className="s">
          <span className="dot">{i + 1}</span>
          <h3>{s.titel}</h3>
          <p>{jordy(s.tekst)}</p>
        </li>
      ))}
    </ol>
  )
}

export function Werkwijze() {
  return (
    <section id="werkwijze">
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow>Werkwijze</Eyebrow>
            <h2 id="onze-werkwijze" className="disp">
              Onze <Streek>werkwijze</Streek>
            </h2>
          </div>
          <p>
            Schildersbedrijf040 hanteert een vast werkproces van contact tot oplevering. Een gestructureerde aanpak voorkomt verrassingen en zorgt
            ervoor dat elk schilderproject in Eindhoven binnen planning en budget wordt opgeleverd.
          </p>
        </div>
        <Stappen stappen={stappenLive} />
      </div>
    </section>
  )
}

/* ---------- winter / seizoen ---------- */
export function Winter({ seizoen }: { seizoen: Seizoensblok }) {
  const winter = seizoen.link.includes('winter')
  const items = winter
    ? ['Woonkamer, hal of slaapkamer opfrissen', 'Kozijnen en deuren binnen lakken', 'Latex spuiten na een verbouwing', 'Klaar voor de feestdagen [JORDY: uiterlijk starten op?]']
    : ['Gevels, kozijnen en boeidelen', 'Houtrot herstellen voordat we schilderen', 'Buitendeuren en dakkapellen']
  return (
    <section className="winter on-dark" id="winter">
      <div className="flakes" id="flakes" aria-hidden="true" />
      <div className="wrap">
        <div className="rv">
          <Eyebrow>{seizoen.label}</Eyebrow>
          <h2 id="seizoen" className="disp" style={{ marginTop: 16 }}>
            {seizoen.kop.replace(/\s\S+$/, '')} <Streek>{seizoen.kop.split(' ').slice(-1)[0]}</Streek>
          </h2>
          <p>{seizoen.tekst}</p>
          <Link className="btn btn-line" href={seizoen.link} style={{ marginTop: 12 }}>
            {seizoen.linkTekst} <Pijl />
          </Link>
        </div>
        <div className="card rv">
          <h3>{winter ? 'Ideaal voor de winter' : 'Ideaal voor het voorjaar'}</h3>
          <ul>
            {items.filter((t) => toonBlok(t)).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- reviews ---------- */
export function Reviews() {
  return (
    <section>
      <div className="wrap head rv rev-head">
        <div>
          <Eyebrow>Reviews</Eyebrow>
          <h2 id="klantenervaringen" className="disp">
            <Streek>Klantenervaringen</Streek>
          </h2>
        </div>
      </div>
      <div className="wrap rev">
        <div className="score rv">
          <div className="big">
            {site.google.rating}
          </div>
          <div className="stars" aria-hidden="true">
            ★★★★★
          </div>
          <p>Gemiddeld uit {site.google.reviewCount} reviews op Google</p>
          <p>5 sterren op Google en 4,9 op Werkspot, ontdek wat klanten over Schildersbedrijf040 zeggen</p>
          <a className="btn btn-blue" href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer">
            Bekijk al onze Google Reviews <Pijl />
          </a>
        </div>
        <div className="cards">
          {reviews.map((r) => (
            <article key={r.naam} className="rv">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote>{r.tekst}</blockquote>
              <div className="ft">
                <b>{r.naam}</b>
                <span>
                  {r.plaats} · {r.datum} · {r.bron}
                </span>
              </div>
            </article>
          ))}
          <article className="rv">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>{dienstQuotes.binnenschilderwerk.werkspot}</blockquote>
            <div className="ft">
              <b>Werkspot</b>
              <span>{site.werkspot.rating} op Werkspot</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ---------- SEO-tekstblok: over ons en garanties (live tekst) ---------- */
const garanties = [
  { titel: 'Kwaliteitsgarantie', tekst: 'Schildersbedrijf040 garandeert vakkundig schilderwerk met Boonstoppel verfproducten. Bij gebreken binnen de garantieperiode herstelt Schildersbedrijf040 het werk kosteloos.' },
  { titel: 'Gecertificeerd', tekst: 'Het team van Schildersbedrijf040 bestaat uit gediplomeerde schilders met jarenlange praktijkervaring. Elke medewerker volgt regelmatig bijscholing in de nieuwste verftechnieken.' },
  { titel: 'Op tijd', tekst: 'Schildersbedrijf040 levert elk project op binnen de afgesproken planning. Bij de offerte ontvangt u een concreet tijdschema, zodat u precies weet wanneer het schilderwerk gereed is.' },
  { titel: 'Tevreden klanten', tekst: 'Klanten van Schildersbedrijf040 geven 5 sterren op Google en een 4,9 op Werkspot. Die scores weerspiegelen de combinatie van kwaliteit, communicatie en nette oplevering.' },
]

export function SeoTekst() {
  return (
    <section className="seo-txt">
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow>Schildersbedrijf in Eindhoven</Eyebrow>
            <h2 id="over-schildersbedrijf040" className="disp">
              Over <Streek>Schildersbedrijf040</Streek>
            </h2>
          </div>
        </div>
        <div className="cols rv">
          <div className="lopend">
            <h3>Schildersbedrijf in Eindhoven</h3>
            <p>
              Schildersbedrijf040 is opgericht door Jordy Jacobs en heeft meer dan vijf jaar ervaring als schildersbedrijf in Eindhoven. Kwaliteit
              draait bij Schildersbedrijf040 niet alleen om het schilderwerk zelf, maar ook om heldere communicatie, betrouwbaarheid en flexibele
              planning.
            </p>
            <p>
              Het team van Schildersbedrijf040 voert binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering
              uit. Schildersbedrijf040 werkt uitsluitend met Boonstoppel verf, verf die 8 tot 10 jaar meegaat in plaats van de 3 tot 5 jaar van
              budgetverf.
            </p>
            <p>Schildersbedrijf040 is gevestigd in Eindhoven en werkt in heel Noord-Brabant. Mogen wij binnenkort uw kleurrijke ideeën tot leven brengen?</p>
          </div>
          <div>
            <h3 id="onze-garanties">Onze garanties</h3>
            <p>
              Schilderwerk is een investering in uw woning, dan wilt u zekerheid over het resultaat. Schildersbedrijf040 biedt daarom duidelijke
              garanties op materiaal, vakmanschap en planning, zodat u zonder zorgen kunt genieten van uw vernieuwde woning.
            </p>
            <div className="garanties">
              {garanties.map((g) => (
                <div key={g.titel}>
                  <h4>{g.titel}</h4>
                  <span>{g.tekst}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- werkgebied en FAQ ---------- */
export type Faq = { question: string; answer: string; link?: { href: string; tekst: string } }

export function WerkgebiedFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section style={{ background: 'var(--white)' }} id="faq">
      <div className="wrap two">
        <div className="rv" id="werkgebied">
          <Eyebrow>Ons werkgebied</Eyebrow>
          <h2 id="actief-in-eindhoven" className="disp" style={{ fontSize: 'clamp(34px,4vw,52px)', marginTop: 14 }}>
            Actief in Eindhoven en de <Streek>regio</Streek>
          </h2>
          <p style={{ margin: '18px 0 0', maxWidth: '52ch' }}>
            Schildersbedrijf040 is gevestigd in Eindhoven en werkt in de hele regio tot circa 50 kilometer. Doordat Schildersbedrijf040 lokaal werkt,
            zijn de reistijden kort en kunnen spoedklussen vaak binnen een week worden ingepland.
          </p>
          <h3 className="mini">Serviceregio&apos;s</h3>
          <div className="places">
            {plaatsen.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.name === 'Eindhoven' ? 'Eindhoven' : `Schilder ${p.name}`}
              </Link>
            ))}
          </div>
        </div>
        <div className="rv">
          <Eyebrow>Vragen</Eyebrow>
          <h2 id="veelgestelde-vragen" className="disp" style={{ fontSize: 'clamp(34px,4vw,52px)', marginTop: 14 }}>
            Veelgestelde <Streek>vragen</Streek>
          </h2>
          <p style={{ margin: '12px 0 6px', color: 'var(--muted)' }}>Hieronder vindt u antwoorden op de meest gestelde vragen over schilderwerk in Eindhoven</p>
          {faqs.map((f, i) => (
            <details key={f.question} open={i === 0}>
              <summary>
                <h3>{f.question}</h3>
              </summary>
              <p>
                {f.answer}
                {f.link && (
                  <>
                    {' '}
                    <Link href={f.link.href}>{f.link.tekst}</Link>
                  </>
                )}
              </p>
            </details>
          ))}
          <p className="lopend" style={{ marginTop: 20 }}>
            Staat uw vraag er niet tussen? <Link href="/contact">Neem contact op met Schildersbedrijf040</Link>. Wij helpen u graag verder.
          </p>
          <Link className="btn btn-line" href="/faq" style={{ marginTop: 14 }}>
            Meer vragen en antwoorden <Pijl />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------- social media (live tekst) ---------- */
const posts: { img: SiteImage; caption: string }[] = [
  { img: images.voordeur, caption: 'Afgelakte deur 🚪' },
  { img: images.dakkapel, caption: 'Houtrot reparatie met schilderwerk 🔨' },
  { img: images.villa, caption: 'Complete vrijstaande woning buitenschilderwerk 🏠' },
]

export function Social() {
  return (
    <section className="social-sec" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="head rv">
          <div>
            <Eyebrow>Social media</Eyebrow>
            <h2 id="volg-onze-projecten" className="disp">
              Volg onze <Streek>projecten</Streek>
            </h2>
          </div>
          <p>Bekijk onze laatste updates en projecten op social media</p>
        </div>
        <div className="social-grid">
          <div className="sg-card rv">
            <h3>@schildersbedrijf040</h3>
            <small>Instagram</small>
            <div className="posts3">
              {posts.map((p) => (
                <a key={p.caption} href={site.sameAs[1]} target="_blank" rel="noopener noreferrer">
                  <Image src={p.img.src} alt={p.caption} fill sizes="(max-width: 980px) 30vw, 180px" />
                  <span>{p.caption}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="sg-card rv">
            <h3>Schildersbedrijf040</h3>
            <small>Facebook</small>
            <p>Volg ons op Facebook voor de laatste updates, projecten en aanbiedingen!</p>
            <a className="btn btn-line" href={site.sameAs[0]} target="_blank" rel="noopener noreferrer">
              Volg ons op Facebook <Pijl />
            </a>
          </div>
          <div className="sg-card rv">
            <h3>Blijf op de hoogte van onze projecten</h3>
            <p>Volg ons op Instagram en Facebook voor:</p>
            <ol className="sg-list">
              <li>Dagelijkse updates van onze projecten</li>
              <li>Voor en na transformaties</li>
              <li>Tips en tricks voor onderhoud</li>
              <li>Exclusieve aanbiedingen</li>
            </ol>
            <Link className="btn btn-blue" href="/contact">
              Neem contact op <Pijl />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


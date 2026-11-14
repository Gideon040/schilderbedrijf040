// Projecten van Schildersbedrijf040 (contentmodel uit CLAUDE-CODE-INSTRUCTIE.md, hoofdstuk 4.1).
// Alleen feiten die Jordy heeft aangeleverd; onbekend staat als [INVULLEN: ...] en wordt in productie verborgen.
// Foto's: alleen echte projectfoto's, bijgesneden met scripts/fotos-verwerken.py (geen huisnummers of personen).
// Nooit sfeerbeelden (public/images/sfeer) in dit bestand gebruiken.

export type ProjectFoto = { src: string; alt: string; bijschrift: string; width: number; height: number }

export type Project = {
  slug: string
  titel: string // H1: klus en plaats
  kaartTitel: string // korte titel op kaarten
  plaats: string
  wijk: string | null // straat of wijk, nooit een huisnummer
  diensten: string[] // slugs van dienstpagina's
  jaar: number | null
  maand: string | null
  doorlooptijd: string
  typeWerk: string
  samenvatting: string
  situatie: string[]
  aanpak: { titel: string; tekst: string }[]
  materialen: string[]
  resultaat: string[]
  fotos: ProjectFoto[]
  review_id: string | null
  // Datum van de laatste inhoudelijke wijziging (sitemap)
  bijgewerkt: string
  // Oude projectkaart met alleen een Instagram-post: eigen pagina, maar noindex tot de gegevens compleet zijn
  instagram?: string
}

const pad = (slug: string, bestand: string) => `/images/projecten/${slug}/${bestand}.webp`

export const projecten: Project[] = [
  {
    slug: 'witte-dorp-burghplein-eindhoven',
    titel: 'Vier monumentale woningen geschilderd in het Witte Dorp, Eindhoven',
    kaartTitel: 'Vier monumentale woningen in het Witte Dorp',
    plaats: 'Eindhoven',
    wijk: 'Burghplein, Witte Dorp',
    diensten: ['gevel-schilderen', 'buitenschilderwerk', 'kozijnen-schilderen', 'lakwerk'],
    jaar: 2026,
    maand: 'oktober',
    doorlooptijd: '[INVULLEN: aantal werkdagen]',
    typeWerk: 'Gevels, hekwerk, kozijnen en deuren, voor- en achterzijde',
    samenvatting:
      'In oktober 2026 schilderde Schildersbedrijf040 de voor- en achterzijde van vier monumentale woningen aan het Burghplein in het Witte Dorp in Eindhoven: gevels, hekwerk, kozijnen en deuren.',
    situatie: [
      'De vier woningen aan het Burghplein zijn monumentale panden in het Witte Dorp in Eindhoven. Bij een monumentaal pand gaat schilderwerk over meer dan bescherming tegen weer en vocht. De kleurstelling en de uitstraling van de woningen bepalen het beeld van de straat en van de wijk, en die moeten na het schilderwerk precies hetzelfde zijn als ervoor.',
      'De opdracht omvatte de voor- en achterzijde van alle vier de woningen. Aan elke woning zijn de gevels, het hekwerk, de kozijnen en de deuren geschilderd. [INVULLEN: staat van het schilderwerk vooraf, bijvoorbeeld afbladderende verf, kale plekken of houtrot]',
    ],
    aanpak: [
      {
        titel: 'Kleurstelling behouden',
        tekst:
          'Bij monumentale woningen is de bestaande kleurstelling het uitgangspunt. Schildersbedrijf040 heeft de kleuren van gevels, kozijnen en deuren aangehouden, zodat de vier woningen hun kenmerkende uitstraling behouden. [INVULLEN: afstemming met gemeente of vereniging van eigenaren, als die er was]',
      },
      {
        titel: 'Voorbereiding',
        tekst: '[INVULLEN: voorbereiding van gevels, hekwerk en houtwerk, bijvoorbeeld reinigen, schuren, bijwerken en gronden]',
      },
      {
        titel: 'Gevels',
        tekst: 'De gevels zijn geschilderd met Einza Garant.',
      },
      {
        titel: 'Hekwerk',
        tekst: 'Het hekwerk is geschilderd met Hammerite, een verf die speciaal bedoeld is voor metaal.',
      },
      {
        titel: 'Kozijnen en deuren',
        tekst: 'Kozijnen en deuren zijn gelakt met Boonstoppel [INVULLEN: exacte productnaam van de Boonstoppel-lak].',
      },
    ],
    materialen: ['Einza Garant (gevels)', 'Hammerite (hekwerk)', 'Boonstoppel [INVULLEN: productnaam] (kozijnen en deuren)'],
    resultaat: [
      'De vier monumentale woningen staan weer strak in de verf, in dezelfde kleuren als voorheen. Op de foto’s ziet u een van de woningen: de witte gevel met de donkere plint, de kozijnen en de turquoise voordeur.',
      'Werken aan monumentale panden vraagt om zorgvuldigheid in kleur en detail. Heeft u een monumentale of karakteristieke woning in Eindhoven of omgeving? Schildersbedrijf040 komt graag kijken wat er nodig is om de uitstraling te behouden.',
    ],
    fotos: [
      {
        src: pad('witte-dorp-burghplein-eindhoven', 'gevel-monumentale-woning-witte-dorp-eindhoven'),
        alt: 'Geschilderde witte gevel van een monumentale woning in het Witte Dorp, Eindhoven',
        bijschrift: 'Gevel, kozijnen en voordeur van een van de vier woningen aan het Burghplein',
        width: 1059,
        height: 1600,
      },
      {
        src: pad('witte-dorp-burghplein-eindhoven', 'voordeur-monumentale-woning-witte-dorp-eindhoven'),
        alt: 'Geschilderde voordeur monumentale woning Witte Dorp Eindhoven',
        bijschrift: 'Turquoise voordeur en kozijn na het schilderwerk',
        width: 934,
        height: 1600,
      },
    ],
    review_id: null,
    bijgewerkt: '2026-11-14',
  },
  {
    slug: 'fluwijnstraat-eindhoven',
    titel: 'Buitenschilderwerk met houtrotherstel aan de Fluwijnstraat, Eindhoven',
    kaartTitel: 'Buitenschilderwerk met houtrotherstel',
    plaats: 'Eindhoven',
    wijk: 'Fluwijnstraat',
    diensten: ['houtrot-sanering', 'buitenschilderwerk', 'kozijnen-schilderen', 'lakwerk'],
    jaar: null,
    maand: null,
    doorlooptijd: '[INVULLEN: aantal werkdagen]',
    typeWerk: 'Houtrot herstellen en de hele woning buiten schilderen in een nieuwe kleur',
    samenvatting:
      'Aan de Fluwijnstraat in Eindhoven had de hele woning een grondige beurt nodig vanwege houtrot en gescheurd hout. Alles is behandeld en hersteld en daarna geschilderd in een nieuwe kleur.',
    situatie: [
      'De woning aan de Fluwijnstraat had een grondige beurt nodig. Op verschillende plekken zat houtrot en was het hout gescheurd. Wie dan alleen een nieuwe laag verf aanbrengt, sluit het probleem in: vocht blijft in het hout zitten en de rot gaat onder de verf verder.',
      '[INVULLEN: welke onderdelen waren aangetast, bijvoorbeeld onderdorpels, stijlen of de achterdeur, en hoe groot de schade was]',
    ],
    aanpak: [
      {
        titel: 'Houtrot en scheuren behandelen',
        tekst: 'Het aangetaste en gescheurde hout is behandeld en hersteld voordat er geschilderd werd. [INVULLEN: werkwijze en materiaal, bijvoorbeeld uitfrezen en vullen met epoxy]',
      },
      {
        titel: 'Voorbereiden',
        tekst: '[INVULLEN: schuren, gronden en kitwerk]',
      },
      {
        titel: 'Schilderen in een nieuwe kleur',
        tekst: 'Daarna is de woning geschilderd in een nieuwe kleur. Op de foto’s ziet u de kozijnen en deuren in een donkergrijze kleur, met lichte kozijnen rond de ramen. [INVULLEN: gebruikte verf of lak]',
      },
    ],
    materialen: ['[INVULLEN: houtreparatie en verf of lak]'],
    resultaat: [
      'Het houtwerk is weer gaaf en de woning heeft een nieuwe, frisse uitstraling. Doordat de houtrot eerst is aangepakt, gaat het nieuwe schilderwerk langer mee dan een laag verf over beschadigd hout.',
      'Ziet u bij uw eigen kozijnen zachte plekken, scheuren of bladderende verf? Laat dan eerst het hout controleren voordat er geschilderd wordt. Schildersbedrijf040 doet die inspectie gratis.',
    ],
    fotos: [
      {
        src: pad('fluwijnstraat-eindhoven', 'voorgevel-kozijnen-geschilderd-fluwijnstraat-eindhoven'),
        alt: 'Voorgevel met geschilderde kozijnen aan de Fluwijnstraat in Eindhoven',
        bijschrift: 'Voorgevel met de geschilderde kozijnen',
        width: 1130,
        height: 1600,
      },
      {
        src: pad('fluwijnstraat-eindhoven', 'achterdeur-en-kozijn-geschilderd-fluwijnstraat-eindhoven'),
        alt: 'Grijs geschilderde achterdeur en kozijn na houtrotherstel, Fluwijnstraat Eindhoven',
        bijschrift: 'Achterdeur en kozijn na herstel en schilderwerk',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('fluwijnstraat-eindhoven', 'achterdeur-grijs-gelakt-fluwijnstraat-eindhoven'),
        alt: 'Donkergrijs gelakte deur met glas aan de achterzijde van een woning in de Fluwijnstraat, Eindhoven',
        bijschrift: 'Deur met glas aan de achterzijde',
        width: 636,
        height: 1600,
      },
    ],
    review_id: null,
    bijgewerkt: '2026-11-14',
  },
  {
    slug: 'driehoeksbos-eindhoven',
    titel: 'Woning gelakt en gebeitst met hoogwerker aan het Driehoeksbos, Eindhoven',
    kaartTitel: 'Woning lakken en beitsen met hoogwerker',
    plaats: 'Eindhoven',
    wijk: 'Driehoeksbos',
    diensten: ['buitenschilderwerk', 'lakwerk', 'kozijnen-schilderen'],
    jaar: null,
    maand: null,
    doorlooptijd: '[INVULLEN: aantal werkdagen]',
    typeWerk: 'Complete woning buiten, gelakt en gebeitst',
    samenvatting:
      'Aan het Driehoeksbos in Eindhoven heeft Schildersbedrijf040 een complete woning geschilderd. Er is zowel gelakt als gebeitst, en voor het overstek is een hoogwerker ingezet.',
    situatie: [
      'De opdracht was de complete woning aan de buitenzijde. Het houtwerk van deze woning vraagt om twee verschillende afwerkingen. Een deel van het hout is dekkend gelakt, een ander deel is gebeitst. Beits trekt in het hout en laat de structuur zichtbaar, lak vormt een gesloten laag op het oppervlak.',
      'Voor het overstek was een hoogwerker nodig. [INVULLEN: staat van het schilderwerk vooraf]',
    ],
    aanpak: [
      {
        titel: 'Hoogwerker voor het overstek',
        tekst: 'Voor het overstek is een hoogwerker ingezet. Zo kon het werk op hoogte veilig en zorgvuldig worden uitgevoerd.',
      },
      {
        titel: 'Lakken',
        tekst: 'Het lakwerk is uitgevoerd met lak van Boonstoppel. [INVULLEN: welke delen zijn gelakt, en de productnaam]',
      },
      {
        titel: 'Beitsen',
        tekst: 'Het hout dat gebeitst moest worden, is behandeld met beits van Sigma. [INVULLEN: welke delen zijn gebeitst]',
      },
      {
        titel: 'Voorbereiding',
        tekst: '[INVULLEN: reinigen, schuren en eventueel bijwerken]',
      },
    ],
    materialen: ['Lak van Boonstoppel', 'Beits van Sigma'],
    resultaat: [
      'De hele woning is weer in de verf gezet. Op de foto’s ziet u de oranje voordeur, de witte kozijnen bij de entree, de donkere garagedeuren en het overstek dat met de hoogwerker is geschilderd.',
      'Twijfelt u of uw houtwerk gelakt of gebeitst moet worden? Lees meer in het artikel over [beitsen of lakken](/blog/beitsen-of-lakken), of vraag Schildersbedrijf040 om advies bij u thuis.',
    ],
    fotos: [
      {
        src: pad('driehoeksbos-eindhoven', 'voordeur-oranje-gelakt-driehoeksbos-eindhoven'),
        alt: 'Oranje gelakte voordeur met wit kozijn, Driehoeksbos Eindhoven',
        bijschrift: 'Gelakte voordeur en kozijnen bij de entree',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('driehoeksbos-eindhoven', 'kozijnen-entree-gelakt-driehoeksbos-eindhoven'),
        alt: 'Witte kozijnen bij de entree van een woning aan het Driehoeksbos in Eindhoven',
        bijschrift: 'Kozijnen bij de entree',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('driehoeksbos-eindhoven', 'garagedeuren-driehoeksbos-eindhoven'),
        alt: 'Donkere garagedeuren onder een wit geschilderd overstek, Driehoeksbos Eindhoven',
        bijschrift: 'Garagedeuren en het overstek erboven',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('driehoeksbos-eindhoven', 'overstek-geschilderd-met-hoogwerker-driehoeksbos-eindhoven'),
        alt: 'Overstek langs de dakrand, geschilderd met behulp van een hoogwerker, Driehoeksbos Eindhoven',
        bijschrift: 'Het overstek, geschilderd vanaf een hoogwerker',
        width: 1200,
        height: 1600,
      },
    ],
    review_id: null,
    bijgewerkt: '2026-11-14',
  },
  {
    slug: 'badkamer-best',
    titel: 'Badkamer in twee kleuren getext in Best',
    kaartTitel: 'Badkamer in twee kleuren',
    plaats: 'Best',
    wijk: null,
    diensten: ['binnenschilderwerk'],
    jaar: null,
    maand: null,
    doorlooptijd: '[INVULLEN: aantal werkdagen]',
    typeWerk: 'Badkamer getext in twee kleuren op vers stucwerk',
    samenvatting:
      'In Best heeft Schildersbedrijf040 een badkamer getext in twee kleuren. Het verse stucwerk is eerst geschuurd en geprimerd en daarna afgewerkt met twee lagen Boonstoppel Garantie Tex mat.',
    situatie: [
      'De badkamer was net gestuct. Vers stucwerk is glad, maar ook zuigend en niet overal even egaal. Wie daar direct muurverf op zet, krijgt vlekken en een ongelijke glans. Bovendien moesten de wanden in twee kleuren worden afgewerkt, met strakke overgangen tussen de kleuren.',
      '[INVULLEN: welke wanden in welke kleur, en of het een nieuwbouw- of verbouwproject was]',
    ],
    aanpak: [
      {
        titel: 'Schuren',
        tekst: 'Het verse stucwerk is eerst geschuurd, zodat oneffenheden en stucresten weg zijn en de verf goed hecht.',
      },
      {
        titel: 'Primeren',
        tekst: 'Daarna is het stucwerk geprimerd. De primer regelt de zuiging van de ondergrond, zodat de afwerklagen egaal opdrogen.',
      },
      {
        titel: 'Twee lagen in twee kleuren',
        tekst: 'De wanden zijn afgewerkt met twee lagen Boonstoppel Garantie Tex mat, in twee kleuren.',
      },
    ],
    materialen: ['Boonstoppel Garantie Tex mat'],
    resultaat: [
      'Het resultaat is een rustige badkamer met een matte afwerking in twee kleuren. Op de foto ziet u de badkamer met de donkere taupe wand en de lichtere wand erachter, na het schilderwerk en voordat de badkamer in gebruik werd genomen.',
      'Laat u ook een badkamer, keuken of andere ruimte opnieuw stucen? Plan het schilderwerk dan direct mee, dan kan Schildersbedrijf040 aansluitend schuren, primeren en afwerken.',
    ],
    fotos: [
      {
        src: pad('badkamer-best', 'badkamer-in-twee-kleuren-getext-best'),
        alt: 'Badkamer in Best met wanden in twee kleuren getext, mat afgewerkt',
        bijschrift: 'De badkamer na het schilderwerk, voordat hij in gebruik werd genomen',
        width: 1200,
        height: 1600,
      },
    ],
    review_id: null,
    bijgewerkt: '2026-11-14',
  },
  {
    slug: 'bungalow-best',
    titel: 'Volledige bungalow gespoten in Best',
    kaartTitel: 'Volledige bungalow gespoten',
    plaats: 'Best',
    wijk: null,
    diensten: ['latex-spuiten', 'binnenschilderwerk'],
    jaar: null,
    maand: null,
    doorlooptijd: '[INVULLEN: aantal werkdagen]',
    typeWerk: 'Plafonds en wanden van een hele bungalow gespoten, in twee kleuren',
    samenvatting:
      'In Best heeft Schildersbedrijf040 een volledige bungalow gespoten, met de plafonds en de wanden elk in een eigen kleur. Eerst is alles machinaal geschuurd en het stucwerk hersteld, daarna geprimerd en afgespoten.',
    situatie: [
      'De bungalow moest van binnen helemaal worden afgewerkt: alle wanden en plafonds, met de plafonds in een andere kleur dan de wanden. Het ging om grote oppervlakken, met onder meer een vide met daklichten, een lange gang en meerdere kamers.',
      'Bij zo veel vierkante meters is spuiten sneller dan rollen en geeft het een egaal resultaat zonder rolstrepen. Spuiten vraagt wel om een goede voorbereiding. [INVULLEN: aantal m² wanden en plafonds]',
    ],
    aanpak: [
      {
        titel: 'Machinaal schuren',
        tekst: 'Eerst zijn alle wanden en plafonds machinaal geschuurd.',
      },
      {
        titel: 'Stucwerk herstellen',
        tekst: 'Daarna is al het stucwerk hersteld, zodat er geen beschadigingen of naden zichtbaar blijven in het spuitwerk.',
      },
      {
        titel: 'Afplakken',
        tekst: 'Alles wat niet geverfd moest worden, is zorgvuldig afgeplakt. Bij spuitwerk is dat bepalend voor het eindresultaat: strakke lijnen langs kozijnen en tussen plafond en wand ontstaan bij het afplakken.',
      },
      {
        titel: 'Primeren en afspuiten',
        tekst: 'Vervolgens is alles geprimerd en afgespoten met Boonstoppel Garantie Tex mat, de plafonds in een andere kleur dan de wanden.',
      },
    ],
    materialen: ['Boonstoppel Garantie Tex mat'],
    resultaat: [
      'De hele bungalow is egaal afgewerkt, met een strakke scheiding tussen de plafondkleur en de wandkleur. De foto’s laten de vide met daklichten, de gang, de hal en de kamers zien, kort na het spuitwerk en voordat de vloeren erin lagen.',
      'Verbouwt u of krijgt u de sleutel van een nieuwbouwwoning? Dan is latex spuiten vaak de snelste manier om alle wanden en plafonds in één keer af te werken. Lees meer over [latex spuiten](/diensten/latex-spuiten).',
    ],
    fotos: [
      {
        src: pad('bungalow-best', 'woonruimte-met-daklichten-gespoten-bungalow-best'),
        alt: 'Woonruimte met vide en daklichten, wanden en plafond latex gespoten, bungalow in Best',
        bijschrift: 'Woonruimte met vide en daklichten',
        width: 881,
        height: 1600,
      },
      {
        src: pad('bungalow-best', 'plafond-en-daklichten-gespoten-bungalow-best'),
        alt: 'Gespoten plafond rond de daklichten van een bungalow in Best',
        bijschrift: 'Plafond rond de daklichten',
        width: 1400,
        height: 850,
      },
      {
        src: pad('bungalow-best', 'hal-en-kamers-gespoten-bungalow-best'),
        alt: 'Hal met daklicht en doorkijk naar kamers, wanden en plafonds gespoten, bungalow Best',
        bijschrift: 'Hal met doorkijk naar de kamers',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('bungalow-best', 'kamer-wanden-en-plafond-gespoten-bungalow-best'),
        alt: 'Kamer met latex gespoten wanden en plafond in een bungalow in Best',
        bijschrift: 'Een van de kamers',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('bungalow-best', 'gang-wanden-en-plafond-gespoten-bungalow-best'),
        alt: 'Lange gang met gespoten wanden en plafond, bungalow in Best',
        bijschrift: 'De gang',
        width: 1200,
        height: 1600,
      },
      {
        src: pad('bungalow-best', 'badkamer-in-twee-kleuren-bungalow-best'),
        alt: 'Badkamer met wanden in twee kleuren in een bungalow in Best',
        bijschrift: 'De badkamer, in twee kleuren afgewerkt',
        width: 1200,
        height: 1600,
      },
    ],
    review_id: null,
    bijgewerkt: '2026-11-14',
  },

  // Bestaande projectkaarten (Instagram). Alleen titel, foto, dienst en plaats zoals ze al op de site stonden.
  ...(
    [
      ['voordeur-gelakt-eindhoven', 'Afgelakte deur', 'https://www.instagram.com/p/C4kHvkXIkR_/', '/images/lakwerk-voordeur-antraciet.jpg', 'Antraciet gelakte voordeur in een bakstenen gevel', 1179, 1534, ['lakwerk'], 'Eindhoven'],
      ['houtrot-reparatie-met-schilderwerk', 'Houtrot reparatie met schilderwerk', 'https://www.instagram.com/p/C4kHt5mo3xR/', '/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg', 'Wit geschilderde dakkapel na houtrotreparatie en schilderwerk', 1179, 851, ['houtrot-sanering'], ''],
      ['vrijstaande-woning-buitenschilderwerk', 'Complete vrijstaande woning buitenschilderwerk', 'https://www.instagram.com/p/C4h2XkSI5Rw/', '/images/buitenschilderwerk-vrijstaande-woning-wit.jpg', 'Vrijstaande woning met wit geschilderde gevel en kozijnen', 1350, 1800, ['buitenschilderwerk'], ''],
      ['binnen-en-buitenschilderwerk-renovatie', 'Binnen- en buitenschilderwerk project', 'https://www.instagram.com/p/C4h2V4-I1R4/', '/images/binnenschilderwerk-zolder-renovatie.jpg', 'Zolderverdieping geschilderd tijdens een complete renovatie', 1179, 868, ['binnenschilderwerk', 'buitenschilderwerk'], ''],
      ['latex-spuiten-blixembosch-eindhoven', 'Latex spuiten in Blixembosch', 'https://www.instagram.com/p/C4h2UPyI3R2/', '/images/latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg', 'Benedenverdieping in Blixembosch, Eindhoven, met latex gespoten muren en plafond', 1009, 853, ['latex-spuiten'], 'Eindhoven'],
      ['restaria-oude-gracht-eindhoven', 'Binnenwerk Restaria Oude Gracht', 'https://www.instagram.com/p/C4h2SoUI1Rz/', '/images/binnenschilderwerk-lambrisering-horeca-eindhoven.jpg', 'Donker geschilderde lambrisering in de entree van Restaria Oude Gracht', 1179, 1462, ['binnenschilderwerk'], 'Eindhoven'],
    ] as [string, string, string, string, string, number, number, string[], string][]
  ).map(
    ([slug, titel, instagram, src, alt, width, height, diensten, plaats]): Project => ({
      slug,
      titel,
      kaartTitel: titel,
      plaats: plaats || '[INVULLEN: plaats]',
      wijk: slug === 'latex-spuiten-blixembosch-eindhoven' ? 'Blixembosch' : null,
      diensten,
      jaar: null,
      maand: null,
      doorlooptijd: '[INVULLEN: aantal werkdagen]',
      typeWerk: titel,
      samenvatting: `${titel}. Dit project staat op het Instagram-account van Schildersbedrijf040.`,
      situatie: ['[INVULLEN: situatie vooraf]'],
      aanpak: [{ titel: 'Aanpak', tekst: '[INVULLEN: aanpak in stappen]' }],
      materialen: ['[INVULLEN: materialen]'],
      resultaat: ['[INVULLEN: resultaat]'],
      fotos: [{ src, alt, bijschrift: titel, width, height }],
      review_id: null,
      bijgewerkt: '2026-11-14',
      instagram,
    }),
  ),
]

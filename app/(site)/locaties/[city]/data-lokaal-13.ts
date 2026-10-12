import type { Lokaal } from './data-lokaal'

// Briefing 13: Waalre, Son en Breugel, Oirschot, Heeze, Mierlo, Meerhoven, Deurne, Beek en Donk, Eersel, Bergeijk, Maarheeze.
// Alleen geverifieerde feiten, met bron in `bronnen`. Ontbreekt iets: [JORDY: ...].
// Woningcijfers (bouwperiode, woningtype) komen van allecijfers.nl (CBS/BAG, stand 2025) en gelden per woonplaats.
export const lokaal13: Record<string, Lokaal> = {
  waalre: {
    tekst:
      'Waalre bestaat uit twee kernen met elk een eigen woningvoorraad: Waalre-dorp en Aalst, die in 1923 samen de gemeente Waalre werden. Waalre-dorp kreeg door de villabouw in de twintigste eeuw de bijnaam de Goudkust, terwijl Aalst in de jaren zeventig en tachtig groeide met de wijk Ekenrooi. Schilderwerk in Waalre gaat daardoor zowel over vrijstaande villa\'s als over rijwoningen van veertig tot vijftig jaar oud.',
    wijken: [
      {
        label: 'Beschermd dorpsgezicht',
        naam: 'Loon',
        tekst:
          'Buurtschap in Waalre-dorp met vijf Kempense langgevelboerderijen, samen aangewezen als beschermd dorpsgezicht. Bij buitenschilderwerk aan panden in Loon is het verstandig een kleurwijziging eerst met de gemeente Waalre af te stemmen.',
      },
      {
        label: 'Villabouw twintigste eeuw',
        naam: 'Waalre-dorp',
        tekst:
          'Waalre-dorp, met buurten als De Heuvel en Heikant, kreeg door de villabouw in de twintigste eeuw de bijnaam de Goudkust. Villa\'s hebben veel buitenhoutwerk, zoals overstekken, luiken en houten kozijnen, dat elke paar jaar een onderhoudsbeurt nodig heeft.',
      },
      {
        label: 'Gebouwd jaren 70 en 80',
        naam: 'Ekenrooi (Aalst)',
        tekst:
          'Ekenrooi groeide in de jaren zeventig en tachtig als uitbreidingswijk voor Eindhoven. Bij rijwoningen uit die periode zijn de originele houten kozijnen, boeidelen en voordeuren de onderdelen die het eerst aandacht vragen.',
      },
    ],
    alineas: [
      'In de woonplaats Waalre is ongeveer de helft van de woningen gebouwd tussen 1945 en 1985, en rijwoningen vormen de grootste groep. Bij die woningen draait [buitenschilderwerk in Waalre](/diensten/buitenschilderwerk) vooral om kozijnen, dakranden en deuren: Schildersbedrijf040 verwijdert losse verf, gront kale plekken en herstelt aangetast hout eerst met [houtrot sanering](/diensten/houtrot-sanering). [Kozijnen schilderen](/diensten/kozijnen-schilderen) kost buiten indicatief €50 tot €100 per kozijn, afhankelijk van maat en staat.',
      'Waalre-dorp telt twintig rijksmonumenten, waaronder de Oude Sint-Willibrorduskerk, en in Loon staan de langgevelboerderijen van het beschermd dorpsgezicht. Bij oud houtwerk aan zulke panden stemt Schildersbedrijf040 de verfopbouw af op de bestaande lagen, zodat het hout kan blijven ademen en het historische beeld klopt.',
      'In de villa\'s van Waalre-dorp vraagt het binnenwerk vaak om strakke afwerking van grote woonkamers, trapgaten en hallen met veel licht, waarin elke oneffenheid opvalt. Kopers van een rijwoning in Ekenrooi kiezen juist vaak voor één ronde [binnenschilderwerk](/diensten/binnenschilderwerk) door het hele huis voordat ze erin trekken. Een opname bij u thuis in Waalre of Aalst plant u via de [contactpagina](/contact), waarna u een offerte op maat ontvangt.',
    ],
    metaDescription:
      'Schilder in Waalre voor villa\'s in Waalre-dorp en rijwoningen in Aalst en Ekenrooi. Binnen- en buitenschilderwerk met Boonstoppel-verf. Vraag een offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Waalre_(gemeente) (kernen Waalre-dorp en Aalst, gemeente sinds 1923, wijken)',
      'https://nl.wikipedia.org/wiki/Waalre-dorp (bijnaam de Goudkust, Loon beschermd dorpsgezicht met vijf Kempense langgevelboerderijen, 20 rijksmonumenten, Oude Sint-Willibrorduskerk)',
      'https://en.wikipedia.org/wiki/Aalst,_North_Brabant (groei Ekenrooi in de jaren 70 en 80 als overloopgebied voor Eindhoven)',
      'https://allecijfers.nl/woonplaats/waalre/ (bouwperiodes en woningtypes woonplaats Waalre)',
    ],
  },

  'son-en-breugel': {
    tekst:
      'Son en Breugel bestaat uit twee kernen aan weerszijden van de Dommel: Son op de linkeroever en het kleinere Breugel op de rechteroever. Na 1945 groeide Son uit tot woonplaats voor mensen die in Eindhoven werkten, met nieuwe wijken zoals de Gentiaan aan de noordkant. Ruim een kwart van de woningen in Son en Breugel is gebouwd tussen 1965 en 1975, en vier op de tien woningen zijn tussenwoningen.',
    wijken: [
      {
        label: 'Naoorlogse uitbreiding',
        naam: 'De Gentiaan',
        tekst:
          'Woonwijk ten noorden van het centrum van Son, aangelegd toen Son na de oorlog groeide als woonplaats bij Eindhoven. Bij rijwoningen uit die periode zijn houten kozijnen, boeidelen en voordeuren de onderdelen die het snelst onderhoud vragen.',
      },
      {
        label: 'Kern aan de Dommel',
        naam: 'Breugel',
        tekst:
          'Breugel is de kleinste van de twee kernen van de gemeente en ligt op de rechteroever van de Dommel. Woningen in het groen langs het beekdal drogen na regen langzamer op, waardoor het moment van buitenschilderen in Breugel extra telt.',
      },
      {
        label: 'Rijksmonument',
        naam: 'Kerkplein Son',
        tekst:
          'Op het Kerkplein staat de toren van de voormalige Sint-Petrus\' Bandenkerk, een rijksmonument dat rond 1526 werd voltooid. Bij oudere panden in het centrum van Son beoordeelt Schildersbedrijf040 eerst de bestaande verflagen voordat er geschilderd wordt.',
      },
    ],
    alineas: [
      'De grootste groep woningen in Son en Breugel stamt uit de jaren zestig en zeventig: rijwoningen en hoekwoningen met houten kozijnen, boeidelen en dakkapellen die inmiddels meerdere schilderbeurten achter de rug hebben. Een nieuwe laag hecht alleen goed op een schone, matte ondergrond. Bij [buitenschilderwerk in Son en Breugel](/diensten/buitenschilderwerk) schuurt Schildersbedrijf040 daarom oude lagen op, vult naden en zet kale plekken eerst in de grondverf. Is het hout zacht geworden, dan gaat [herstel van houtrot](/diensten/houtrot-sanering) voor.',
      'Tussenwoningen in Son en Breugel hebben vaak een woonkamer met trapopgang, waar muren en plafonds na jaren gezinsleven tegelijk aan een frisse laag toe zijn. Door woonkamer, hal en overloop in één ronde te doen, oogt de kleur overal gelijk. Voor [binnenschilderwerk in Son en Breugel](/diensten/binnenschilderwerk) rekent Schildersbedrijf040 met een indicatie van €30 tot €35 per m² wand of plafond. Woont u in Son, Breugel of de Gentiaan, dan maakt u via [het contactformulier](/contact) een afspraak voor een opname bij u thuis.',
    ],
    metaDescription:
      'Schilder in Son en Breugel voor rijwoningen uit de jaren 60 en 70 en woningen in Breugel. Binnen- en buitenschilderwerk op maat. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Son_en_Breugel (Son op de linkeroever, Breugel op de rechteroever van de Dommel; groei na 1945, de Gentiaan ten noorden van Son)',
      'https://en.sonenbreugel.nl/toren-van-de-voormalige-rooms-katholieke-kerk-sint-petrus-banden (toren voormalige Sint-Petrus\' Bandenkerk, rijksmonument, rond 1526 voltooid)',
      'https://allecijfers.nl/woonplaats/son-en-breugel/ (27 procent gebouwd 1965 tot 1975, 40 procent tussenwoningen)',
    ],
  },

  oirschot: {
    tekst:
      'Oirschot heeft een beschermd dorpsgezicht en telt in de hele gemeente meer dan 300 rijks- en gemeentelijke monumenten. Bijna een op de zeven woningen in de woonplaats Oirschot is van voor 1945, tegenover ongeveer een op de elf in Waalre of Heeze. Vrijstaande woningen en twee-onder-een-kapwoningen maken samen ongeveer de helft van de woningvoorraad uit, en rond de kernen Spoordonk, Middelbeers en Oostelbeers ligt een uitgestrekt buitengebied.',
    wijken: [
      {
        label: 'Historisch centrum',
        naam: 'Markt',
        tekst:
          'Aan de Markt staat het Oude Raadhuis uit 1513, en het dorpsbeeld wordt bepaald door de Sint-Petrusbasiliek uit de 15e en 16e eeuw. Bij gevels en kozijnen van monumenten en panden in het beschermde dorpsgezicht stemt u een kleurwijziging vooraf af met de gemeente Oirschot.',
      },
      {
        label: 'Kerkdorpen',
        naam: 'Middelbeers en Oostelbeers',
        tekst:
          'De Beerzen liggen ten westen van Oirschot en hebben een landelijk karakter met boerderijen en vrijstaande woningen. Grote houten deuren, luiken en schuurdelen vragen daar om een verfsysteem dat tegen wind en regen in het open land bestand is.',
      },
      {
        label: 'Kerkdorp',
        naam: 'Spoordonk',
        tekst:
          'Spoordonk is een van de kleinere kernen van de gemeente Oirschot, met daaromheen buurtschappen en buitengebied. Bij woningen in het buitengebied is een jaarlijkse controle van kozijnen en dorpels op kale plekken de beste manier om houtrot voor te zijn.',
      },
    ],
    alineas: [
      'Oirschot heeft een lange traditie in houtbewerking: vanaf het midden van de negentiende eeuw maakten meubelmakers als Teurlincx & Meijers er de Amerikaanse stoel. Ook bij het houtwerk van woningen van voor 1945 telt vakwerk. Bij [buitenschilderwerk in Oirschot](/diensten/buitenschilderwerk) aan zulke panden kiest Schildersbedrijf040 een verfopbouw die past bij de bestaande lagen, zodat het hout kan blijven ademen. Aangetaste kozijnen of dorpels worden eerst hersteld met [houtrot sanering](/diensten/houtrot-sanering), en pas daarna gaat de kwast erop.',
      'Naast het historische centrum heeft Oirschot veel woningen uit de jaren zeventig tot negentig: ruim 30 procent van de woningen in de woonplaats Oirschot is tussen 1975 en 1995 gebouwd. Bij die woningen draait het buiten om terugkerend onderhoud van kozijnen en boeidelen, en binnen vaak om ruime woonkamers en hallen in vrijstaande woningen of twee-onder-een-kapwoningen. Meer over de aanpak binnen leest u bij [binnenschilderwerk](/diensten/binnenschilderwerk). Ook voor een woning in Spoordonk of de Beerzen vraagt u via de [contactpagina](/contact) een opname aan.',
    ],
    metaDescription:
      'Schilder in Oirschot voor monumentale panden rond de Markt en boerderijen in de Beerzen. Zorgvuldig buitenschilderwerk en binnenwerk. Vraag een offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Oirschot_(plaats) (beschermd dorpsgezicht, Sint-Petrusbasiliek 15e en 16e eeuw, meubelindustrie Amerikaanse stoel, kernen)',
      'https://nl.wikipedia.org/wiki/Oirschot_(gemeente) (meer dan 300 rijks- en gemeentelijke monumenten, Oude Raadhuis 1513 aan de Markt, kernen Middelbeers, Oostelbeers, Spoordonk)',
      'https://allecijfers.nl/woonplaats/oirschot/ (14 procent van voor 1945, 15 procent 1975 tot 1985, 17 procent 1985 tot 1995, woningtypes)',
    ],
  },

  heeze: {
    tekst:
      'Heeze is sinds 1997 onderdeel van de gemeente Heeze-Leende en is na 1950 flink gegroeid met de wijken de Weibossen, de Engelse Tuin en de Nieuwe Hoeven. Ruim een vijfde van de woningen in Heeze is gebouwd tussen 1965 en 1975, en ruim een kwart van de woningen staat vrij. Rond het oude dorp met Kasteel Heeze staan daarnaast oudere panden en monumenten.',
    wijken: [
      {
        label: 'Gebouwd na 1950',
        naam: 'Weibossen, Engelse Tuin en Nieuwe Hoeven',
        tekst:
          'De drie wijken waarmee Heeze na 1950 groeide. Bij woningen van vijftig jaar en ouder zijn de originele houten kozijnen en boeidelen het eerste waar Schildersbedrijf040 naar kijkt.',
      },
      {
        label: 'Historisch dorp',
        naam: 'Heeze-centrum',
        tekst:
          'Het oude dorp ligt rond Kasteel Heeze, waarmee de geschiedenis van Heeze sinds de twaalfde eeuw verweven is. In het centrum staan rijks- en gemeentelijke monumenten, waaronder de Sint-Martinuskerk, waar buitenschilderwerk aansluit op het historische beeld.',
      },
      {
        label: 'Kerkdorp',
        naam: 'Leende',
        tekst:
          'Leende heeft in de gehuchten Oosterik en Leenderstrijp nog langgevelboerderijen. Bij grote schuurdeuren, luiken en ander houtwerk van zulke boerderijen is een goede grondlaag de basis voor lang meegaand buitenschilderwerk.',
      },
    ],
    alineas: [
      'Heeze ontwikkelde zich rond 1910 tot 1920 tot kunstenaarskolonie, toen schilders er het landelijke Brabantse leven kwamen vastleggen, en de omgeving met de Strabrechtse Heide en de Herbertusbossen leverde het dorp de bijnaam Parel van Brabant op. Die bosrijke omgeving heeft gevolgen voor het buitenwerk: woningen onder bomen houden langer vocht vast en krijgen sneller groene aanslag. Bij [buitenschilderwerk in Heeze](/diensten/buitenschilderwerk) reinigt Schildersbedrijf040 daarom eerst de ondergrond en controleert het hout op zachte plekken, waarna zo nodig [houtrot sanering](/diensten/houtrot-sanering) volgt. Reken voor [het schilderen van een buitenkozijn](/diensten/kozijnen-schilderen) op €50 tot €100 per stuk.',
      'Woningen uit de jaren zestig en zeventig in Heeze krijgen na een verbouwing of verhuizing vaak in één keer nieuwe kleuren, van het plafond in de woonkamer tot de wanden in het trapgat. Oude latex, scheurtjes en vlekken worden eerst behandeld, zodat de nieuwe laag egaal dekt. Hoe Schildersbedrijf040 dat aanpakt, leest u bij [binnenschilderwerk in Heeze](/diensten/binnenschilderwerk). Voor een opname in Heeze, Leende of Sterksel maakt u een afspraak via [ons contactformulier](/contact).',
    ],
    metaDescription:
      'Schilder in Heeze en Leende voor woningen in de Weibossen, rond Kasteel Heeze en langgevelboerderijen. Binnen en buiten. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Heeze (Heeze-Leende sinds 1997, wijken na 1950: de Weibossen, de Engelse Tuin, de Nieuwe Hoeven; Kasteel Heeze; kunstenaarsdorp 1910 tot 1920; Parel van Brabant; Sint-Martinuskerk)',
      'https://nl.wikipedia.org/wiki/Leende (langgevelboerderijen in Oosterik en Leenderstrijp)',
      'https://allecijfers.nl/woonplaats/heeze/ (22 procent gebouwd 1965 tot 1975, 27 procent vrijstaand)',
    ],
  },

  mierlo: {
    tekst:
      'Mierlo is sinds 2004 de kleinste kern van de gemeente Geldrop-Mierlo en is vooral in de jaren zestig tot tachtig gegroeid: bijna de helft van de woningen in Mierlo is gebouwd tussen 1965 en 1985. Rijwoningen en hoekwoningen vormen samen meer dan de helft van de woningvoorraad. Daarnaast heeft Mierlo met Het Broek een beschermd dorpsgezicht met oude boerderijen.',
    wijken: [
      {
        label: 'Beschermd dorpsgezicht',
        naam: 'Het Broek',
        tekst:
          'Buurtschap ten noordwesten van Mierlo met langgevelboerderijen die nog de structuur van de oorspronkelijke nederzetting laten zien. Kleur en detaillering van het houtwerk horen bij het beschermde beeld, dus een kleurwijziging stemt u vooraf af met de gemeente Geldrop-Mierlo.',
      },
      {
        label: 'Thuiswevers',
        naam: 'Luchen, Loeswijk en Trimpert',
        tekst:
          'In de gehuchten Luchen, Loeswijk en Trimpert woonden vroeger thuiswevers die werkten voor textielfabrikanten in Helmond en Eindhoven. Bij oudere woningen in de gehuchten beoordeelt Schildersbedrijf040 eerst de bestaande verflagen en het hout, en werkt het detailwerk met de kwast af.',
      },
      {
        label: 'Gebouwd 1965 tot 1985',
        naam: 'Mierlo-dorp',
        tekst:
          'Bijna de helft van de woningen in Mierlo komt uit de jaren zestig, zeventig en tachtig, rond het dorpscentrum met de neogotische Heilige Luciakerk uit 1859. Bij woningen van veertig tot zestig jaar oud zijn kozijnen, boeidelen en dakkapellen meestal aan een grondige buitenbeurt toe.',
      },
    ],
    alineas: [
      'Mierlo-Hout hoort sinds 1968 bij Helmond, dus wie in Mierlo zelf woont, woont in de gemeente Geldrop-Mierlo. In het dorp Mierlo draait [buitenschilderwerk in Mierlo](/diensten/buitenschilderwerk) vooral om rijwoningen en hoekwoningen uit de jaren zeventig en tachtig met houten kozijnen en boeidelen. Schildersbedrijf040 schuurt bij die woningen de oude lak op, dicht naden, herstelt zachte plekken met [houtrot sanering](/diensten/houtrot-sanering) en lakt het hout daarna met Boonstoppel-verf.',
      'Het Broek en de standerdmolen, die in 1860 vanuit Molenheide naar Mierlo werd verplaatst, laten zien dat Mierlo ook oudere bebouwing heeft, waar de verfkeuze aansluit op het historische dorpsbeeld. In de rijwoningen van Mierlo liggen woonkamer, hal en overloop dicht bij elkaar, dus wie één ruimte laat schilderen, ziet het verschil met de rest direct. Daarom laten bewoners vaak alles tegelijk doen. Voor [binnenschilderwerk](/diensten/binnenschilderwerk) van wanden en plafonds is de indicatie €30 tot €35 per m². Via de [contactpagina](/contact) plant u een opname bij u thuis in Mierlo.',
    ],
    metaDescription:
      'Schilder in Mierlo voor rijwoningen uit de jaren 70 en 80 en boerderijen in het beschermde Het Broek. Binnen- en buitenschilderwerk. Vraag een offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Mierlo (Het Broek beschermd dorpsgezicht met langgevelboerderijen, thuiswevers in Luchen, Loeswijk en Trimpert, fusie Geldrop-Mierlo 2004, Mierlo-Hout naar Helmond 1968, Heilige Luciakerk, standerdmolen verplaatst in 1860)',
      'https://allecijfers.nl/woonplaats/mierlo/ (21 procent gebouwd 1965 tot 1975, 24 procent 1975 tot 1985, 36 procent rijwoningen, 19 procent hoekwoningen)',
    ],
  },

  meerhoven: {
    tekst:
      'Meerhoven is een stadsdeel van Eindhoven, geen eigen gemeente: een grote stadsuitbreiding aan de westkant van de stad, waar de bouw in 1997 begon en de eerste woningen in 1999 werden opgeleverd. Bijna alle woningen in Meerhoven zijn na 1995 gebouwd, en de helft is een tussenwoning. De oudste woningen zijn nu ruim 25 jaar oud en toe aan hun eerste of tweede grote buitenbeurt.',
    wijken: [
      {
        label: 'Gebouwd 2004 tot 2010',
        naam: 'Waterrijk',
        tekst:
          'Waterrijk is het laatste deel van Meerhoven dat werd ontwikkeld, met woningen aan en rond het water. Bij woningen aan het water staan kozijnen, deuren en houten gevelbekleding meer bloot aan vocht, waardoor regelmatige controle van de lak loont.',
      },
      {
        label: '3D-geprinte woningen',
        naam: 'Bosrijk',
        tekst:
          'In Bosrijk staan de woningen van Project Milestone, waarvan de eerste 3D-geprinte betonwoning in april 2021 werd opgeleverd. Rondom liggen gewone woningen tussen het groen, waar bomen zorgen voor schaduw en dus langzamer drogend buitenwerk.',
      },
      {
        label: 'Woonbuurten',
        naam: 'Grasrijk, Zandrijk en Meerrijk',
        tekst:
          'Samen met Bosrijk en Waterrijk vormen Grasrijk, Zandrijk en Meerrijk de woonbuurten van Meerhoven, waar de tussenwoning het meest voorkomende woningtype is. Bij woningen van twintig tot vijfentwintig jaar oud is de eerste laklaag op kozijnen en deuren vaak verweerd en klaar voor een nieuwe laag.',
      },
    ],
    alineas: [
      'Meerhoven ligt voor een groot deel op het terrein van het voormalige militaire oefenterrein PIROC, en bijna drie kwart van de woningen is gebouwd tussen 1995 en 2015. Bij [buitenschilderwerk in Meerhoven](/diensten/buitenschilderwerk) aan rijwoningen is het belangrijk de bestaande kleuren goed te volgen, zodat een blok na de schilderbeurt nog als één geheel oogt. Schildersbedrijf040 reinigt en schuurt de kozijnen, zet kale plekken in de grondverf en lakt daarna met Boonstoppel-verf. Vroeg onderhoud voorkomt dat kleine scheurtjes in de lak uitgroeien tot rot hout.',
      'Ruim een kwart van de woningen in Meerhoven is een appartement, en ook de eengezinswoningen hebben vaak strakke wanden en plafonds zonder oude lagen. Juist daar valt elke oneffenheid op, dus de voorbereiding van naden en hoeken bepaalt het eindresultaat. Voor [binnenschilderwerk in Meerhoven](/diensten/binnenschilderwerk) geldt een indicatie van €30 tot €35 per m². Meerhoven hoort bij Eindhoven, de thuisbasis van Schildersbedrijf040, dus een opname is snel geregeld via [het contactformulier](/contact).',
    ],
    metaDescription:
      'Schilder in Meerhoven, Eindhoven, voor woningen in Grasrijk, Bosrijk en Waterrijk die aan een buitenbeurt toe zijn. Snel ter plaatse. Vraag een offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Meerhoven (stadsuitbreiding van Eindhoven, bouw vanaf 1997, eerste woningen 1999, buurten, voormalig PIROC-terrein, eerste 3D-geprinte woning 30 april 2021)',
      'https://ahh.nl/index.php/en/projects2/15-stedenbouw/36-waterrijk-urban-plan-eindhoven (Waterrijk laatste deel van Meerhoven, 2004 tot 2010)',
      'https://ioplus.nl/archive/nl/vijf-3d-geprinte-betonnen-woningen-meerhoven/ (Project Milestone in Bosrijk, Meerhoven)',
      'https://allecijfers.nl/wijk/meerhoven-eindhoven/ (vrijwel alle woningen na 1995, 49 procent tussenwoningen, 26 procent appartementen)',
    ],
  },

  deurne: {
    tekst:
      'Deurne is een Peelgemeente met zes dorpen: Deurne zelf, Liessel, Vlierden, Neerkant, Walsberg en Helenaveen. In de woonplaats Deurne, met wijken als de Koolhof, de Heiakker, de Vennen en Vlier-Noord en Vlier-Zuid, is meer dan de helft van de woningen gebouwd tussen 1965 en 1995. Daarnaast heeft de gemeente met Helenaveen een uniek beschermd dorpsgezicht.',
    wijken: [
      {
        label: 'Beschermd dorpsgezicht',
        naam: 'Helenaveen',
        tekst:
          'Helenaveen werd in 1853 gesticht als veenkolonie en is sinds 2000 beschermd dorpsgezicht, als een van de twee veenkoloniën in Zuid-Nederland. Bij woningen langs de vaarten speelt vocht een grote rol, dus een goede grondlaag en dichte naden zijn bij buitenschilderwerk het belangrijkst.',
      },
      {
        label: 'Kerkdorp',
        naam: 'Liessel',
        tekst:
          'Liessel ligt op een zandrug langs de Astense Aa, met de neogotische Sint-Willibrorduskerk uit 1901 en molen De Volksvriend uit 1903. Bij de ruim 1.300 woningen in Liessel stemt Schildersbedrijf040 de aanpak af op de leeftijd en staat van het buitenhoutwerk.',
      },
      {
        label: 'Gebouwd 1965 tot 1995',
        naam: 'Deurne-dorp',
        tekst:
          'Na de oorlog groeide Deurne met nieuwe woningbouw, te beginnen met rijwoningen aan de Lindenlaan; het grootste deel van de woningen kwam er tussen 1965 en 1995 bij. Bij woningen van dertig tot zestig jaar oud zijn kozijnen en boeidelen het eerste dat onderhoud vraagt.',
      },
    ],
    alineas: [
      'Rond het centrum van Deurne staan het Groot Kasteel en het Klein Kasteel, en Museum De Wieger in het voormalige woonhuis van arts Hendrik Wiegersma. Daarbuiten bestaat de woningvoorraad vooral uit gezinswoningen uit de jaren zestig tot negentig: tussenwoningen zijn de grootste groep, en bijna een kwart van de woningen staat vrij. Bij [buitenschilderwerk in Deurne](/diensten/buitenschilderwerk) begint Schildersbedrijf040 met een controle van kozijnen, dakranden en deuren, en waar het hout zacht is geworden volgt eerst [herstel van houtrot](/diensten/houtrot-sanering). Een [buitenkozijn laten schilderen](/diensten/kozijnen-schilderen) kost indicatief €50 tot €100.',
      'Deurne telt naast het dorp zelf vijf kleinere dorpen, met woningen van heel verschillende leeftijd. Binnen gaat het vaak om een complete ronde na een verhuizing, waarbij ook binnendeuren en kozijnen een nieuwe laklaag krijgen. Wat [binnenschilderwerk in Deurne](/diensten/binnenschilderwerk) inhoudt en hoe de voorbereiding verloopt, leest u op de dienstpagina. Ook in Liessel, Vlierden, Neerkant en Helenaveen vraagt u via de [contactpagina](/contact) een opname bij u thuis aan.',
    ],
    metaDescription:
      'Schilder in Deurne, Liessel en Helenaveen voor gezinswoningen uit de jaren 70 en 80 en oudere dorpspanden. Binnen en buiten. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Deurne_(Nederland) (zes dorpen, wijken, eerste naoorlogse project aan de Lindenlaan, Groot en Klein Kasteel, Museum De Wieger)',
      'https://nl.wikipedia.org/wiki/Helenaveen (gesticht 1853 als veenkolonie, beschermd dorpsgezicht sinds 2000)',
      'https://nl.wikipedia.org/wiki/Liessel (zandrug langs de Astense Aa, Sint-Willibrorduskerk 1901, molen De Volksvriend 1903, 1.383 woningen)',
      'https://allecijfers.nl/woonplaats/deurne/ (bouwperiodes, 29 procent tussenwoningen, 23 procent vrijstaand)',
    ],
  },

  'beek-en-donk': {
    tekst:
      'Beek en Donk is een tweelingdorp in de gemeente Laarbeek, met twee eigen centra: het Heuvelplein in Beek aan de zuidkant en het Piet van Thielplein in Donk aan de noordkant. Het dorp groeide in de negentiende eeuw door de industrie langs de Zuid-Willemsvaart. Een derde van de woningen in Beek en Donk is een tussenwoning, en een groot deel is gebouwd tussen 1965 en 1985.',
    wijken: [
      {
        label: 'Industrieel erfgoed',
        naam: 'Donk',
        tekst:
          'In Donk begonnen de gebroeders Van Thiel in 1842 een spijkerfabriek, waaruit later Nedschroef groeide; rond de fabrieken langs de Zuid-Willemsvaart staan nog fabrikantenvilla\'s. Bij zulke villa\'s vraagt het rijke houtwerk aan kozijnen, deuren en gevels om zorgvuldig lakwerk.',
      },
      {
        label: 'Dorpskern',
        naam: 'Beek',
        tekst:
          'Rond het Heuvelplein in Beek staan De Oude Toren uit de vijftiende eeuw en de Sint-Michaëlkerk uit 1935, en in Beek ligt ook Kasteel Eikenlust. Bij oudere panden rond het Heuvelplein beoordeelt Schildersbedrijf040 eerst de bestaande verflagen voordat het buitenschilderwerk begint.',
      },
      {
        label: 'Gebouwd 1965 tot 1985',
        naam: 'Naoorlogse uitbreidingen',
        tekst:
          'Ruim een derde van de woningen in Beek en Donk stamt uit de jaren zestig tot tachtig. Bij rijwoningen en twee-onder-een-kapwoningen uit die periode zijn houten kozijnen, boeidelen en voordeuren meestal aan een grondige onderhoudsbeurt toe.',
      },
    ],
    alineas: [
      'Het Piet van Thielplein met de neogotische Sint-Leonarduskerk uit 1897 is vernoemd naar de fabrikantenfamilie die Donk sterk heeft gevormd. Bij oudere panden in Beek en Donk, zoals de fabrikantenvilla\'s langs de Zuid-Willemsvaart, kijkt Schildersbedrijf040 eerst naar de bestaande verflagen en de staat van het hout. Bij [buitenschilderwerk in Beek en Donk](/diensten/buitenschilderwerk) worden losse lagen verwijderd en kale plekken gegrond, en zacht hout wordt eerst hersteld met [houtrot sanering](/diensten/houtrot-sanering).',
      'In de naoorlogse wijken van Beek en Donk gaat het binnen vaak om rijwoningen die na een verhuizing of verbouwing helemaal fris moeten worden. Woonkamer, keuken, hal en trapgat worden dan in één ronde aangepakt, inclusief het lakwerk van binnendeuren en plinten. Meer over die aanpak leest u bij [binnenschilderwerk in Beek en Donk](/diensten/binnenschilderwerk). Woont u in Beek, Donk of elders in Laarbeek, dan plant u een opname via [het contactformulier](/contact).',
    ],
    metaDescription:
      'Schilder in Beek en Donk voor fabrikantenvilla\'s in Donk en rijwoningen uit de jaren 70. Binnen- en buitenschilderwerk op maat. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Beek_en_Donk (Laarbeek sinds 1997, Heuvelplein in Beek, Piet van Thielplein in Donk, De Oude Toren 15e eeuw, Sint-Michaëlkerk 1935, Sint-Leonarduskerk 1897, Kasteel Eikenlust, Van Thiel 1842)',
      'https://nl.wikipedia.org/wiki/Donk_(Laarbeek) (spijkerfabriek Van Thiel 1842, Nedschroef langs de Zuid-Willemsvaart, bewaarde fabrikantenvilla\'s)',
      'https://allecijfers.nl/woonplaats/beek-en-donk/ (18 procent 1965 tot 1975, 17 procent 1975 tot 1985, 33 procent tussenwoningen)',
    ],
  },

  eersel: {
    tekst:
      'Eersel is de hoofdplaats van de gemeente Eersel in de Kempen en staat bekend om de Markt, die op 19 oktober 1967 samen met een deel van de Hint werd aangewezen als beschermd dorpsgezicht. Rond dat historische hart staan Kempische langgevelboerderijen en monumenten, terwijl een groot deel van de woningen in Eersel is gebouwd tussen 1965 en 1995. Bijna een kwart van de woningen staat vrij.',
    wijken: [
      {
        label: 'Beschermd sinds 1967',
        naam: 'Markt en de Hint',
        tekst:
          'De Markt en een deel van de Hint vormen samen het beschermd dorpsgezicht van Eersel. Bij gevels, kozijnen en deuren in dat gebied stemt u een kleurwijziging vooraf af met de gemeente Eersel, zodat het straatbeeld klopt.',
      },
      {
        label: 'Kempisch erfgoed',
        naam: 'Langgevelboerderijen',
        tekst:
          'Kempische langgevelboerderijen hebben lange gevels met grote houten deuren, luiken en schuurdelen. Dat houtwerk staat vol in weer en wind en heeft baat bij een vaste onderhoudscyclus.',
      },
      {
        label: 'Kerkdorpen',
        naam: 'Duizel, Steensel, Knegsel, Vessem en Wintelre',
        tekst:
          'Rond de hoofdplaats liggen de vijf kerkdorpen van de gemeente Eersel, elk met een eigen kern en buitengebied. Bij woningen in het buitengebied kijkt Schildersbedrijf040 extra naar dorpels en onderdorpels, waar vocht het eerst toeslaat.',
      },
    ],
    alineas: [
      'Ruim een vijfde van de woningen in Eersel is gebouwd tussen 1965 en 1975, en ook de jaren zeventig en tachtig zijn sterk vertegenwoordigd. Bij die woningen draait [buitenschilderwerk in Eersel](/diensten/buitenschilderwerk) om kozijnen, boeidelen en dakkapellen die al meerdere schilderbeurten achter de rug hebben. Schildersbedrijf040 schuurt de oude lagen op, vult naden en herstelt zacht hout eerst met [houtrot sanering](/diensten/houtrot-sanering). Bij de panden rond de Markt en in de Hint sluit de verfopbouw aan op de bestaande lagen, zodat het oude hout kan blijven ademen.',
      'Wie in Eersel of een van de kerkdorpen een vrijstaande woning of boerderij heeft, heeft binnen vaak grote ruimtes met hoge wanden, balkenplafonds of een open zolder. Zulke ruimtes vragen om een goede planning, zodat er per dag een complete ruimte klaar is. Voor [binnenschilderwerk in Eersel](/diensten/binnenschilderwerk) van wanden en plafonds is de indicatie €30 tot €35 per m². Via de [contactpagina](/contact) plant u een opname bij u thuis in Eersel, Duizel, Steensel, Knegsel, Vessem of Wintelre.',
    ],
    metaDescription:
      'Schilder in Eersel voor panden rond de beschermde Markt, langgevelboerderijen en woningen in de kerkdorpen. Binnen en buiten. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Eersel_(plaats) (Markt en deel van de Hint beschermd dorpsgezicht sinds 19 oktober 1967, Kempische langgevelboerderijen, kerkdorpen Duizel, Steensel, Knegsel, Vessem, Wintelre)',
      'https://allecijfers.nl/woonplaats/eersel/ (22 procent gebouwd 1965 tot 1975, 17 procent 1975 tot 1985, 16 procent 1985 tot 1995, 24 procent vrijstaand)',
    ],
  },

  bergeijk: {
    tekst:
      'Bergeijk is een Kempisch dorp dat bestaat uit meerdere kernen en gehuchten, waaronder \'t Hof, \'t Loo, de Weebosch, Witrijt en Walik. Bijna een derde van de woningen in Bergeijk is vrijstaand, het grootste woningtype in het dorp. Daarnaast staat er in Bergeijk modern erfgoed van Gerrit Rietveld, naast een gotische kerk met een luihuis uit 1669.',
    wijken: [
      {
        label: 'Grootste kern',
        naam: '\'t Hof',
        tekst:
          'In \'t Hof staan de gotische Sint-Petrus\' Bandenkerk, ook Hofkerk genoemd, en het luihuis uit 1669, een klokkenstoel die in Noord-Brabant uniek is. In \'t Hof liggen ook de meeste winkels, en bij oudere panden in de kern sluit buitenschilderwerk aan op het historische dorpsbeeld.',
      },
      {
        label: 'Rietveld, 1958',
        naam: 'Weverij De Ploeg',
        tekst:
          'Ten noorden van het centrum staat Weverij De Ploeg, ontworpen door Gerrit Rietveld en in gebruik genomen in 1958. De weverij is een beschermd monument, en bij monumenten gelden voor kleur en materiaal de regels van de monumentenstatus.',
      },
      {
        label: 'Kerkdorp',
        naam: 'De Weebosch',
        tekst:
          'De Weebosch is een klein kerkdorp met ruim tweehonderd woningen, gelegen langs de Aa tussen bossen en heide. Woningen tussen het groen drogen na regen langzamer op, dus het moment van buitenschilderen telt daar extra.',
      },
    ],
    alineas: [
      'Omdat bijna een derde van de woningen in Bergeijk vrijstaand is, heeft een gemiddelde woning er veel gevelwerk en houten buitenwerk: kozijnen rondom, dakoverstekken, garagedeuren en soms houten gevelbekleding. Bij [buitenschilderwerk in Bergeijk](/diensten/buitenschilderwerk) controleert Schildersbedrijf040 eerst alle houten delen op loszittende verf en zachte plekken, en herstelt aangetast hout met [houtrot sanering](/diensten/houtrot-sanering) voordat er geschilderd wordt. Voor het schilderen van een gevel geldt een indicatie van €35 tot €45 per m².',
      'Een derde van de woningen in Bergeijk is gebouwd tussen 1945 en 1975, en in geen enkel decennium kwamen er meer woningen bij dan tussen 1965 en 1975. Binnen treft Schildersbedrijf040 bij woningen uit die periode na een verbouwing of uitbouw vaak een mix van oude en nieuwe wanden en plafonds aan, die met de juiste voorbehandeling weer één geheel worden. De werkwijze staat beschreven op de pagina over [binnenschilderwerk in Bergeijk](/diensten/binnenschilderwerk). Ook in Westerhoven, Riethoven en Luyksgestel plant u via [het contactformulier](/contact) een opname bij u thuis.',
    ],
    metaDescription:
      'Schilder in Bergeijk voor vrijstaande woningen in \'t Hof, \'t Loo en de Weebosch. Kozijnen, gevels en binnenwerk met Boonstoppel-verf. Vraag een offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Bergeijk_(plaats) (kernen \'t Hof, Weebosch, \'t Loo, Witrijt, Walik; Weverij De Ploeg door Rietveld, in gebruik 1958, gesloten 2007, beschermd monument; Sint-Petrus\' Bandenkerk; luihuis 1669)',
      'https://nl.wikipedia.org/wiki/Weebosch (kerkdorp langs de Aa, 218 woningen in 2023)',
      'https://allecijfers.nl/woonplaats/bergeijk/ (32 procent vrijstaand, 15 procent 1945 tot 1965, 19 procent 1965 tot 1975)',
    ],
  },

  maarheeze: {
    tekst:
      'Maarheeze is een dorp in de gemeente Cranendonck, ontstaan in 1997 uit de fusie met Budel. Bijna een derde van de woningen in Maarheeze is gebouwd tussen 1965 en 1975, en vrijstaande woningen en rijwoningen vormen elk ongeveer 30 procent van de woningvoorraad. Aan de Kerkstraat staan daarnaast een boerderij uit 1779 en de Sint-Gertrudiskerk.',
    wijken: [
      {
        label: 'Dorpskern',
        naam: 'Kerkstraat',
        tekst:
          'Aan de Kerkstraat staan de neoromaanse Sint-Gertrudiskerk uit 1910 en een boerderij uit 1779 met een sierlijke gevel. Bij oudere panden in de dorpskern hoort een verfopbouw die aansluit op de bestaande lagen en het historische beeld.',
      },
      {
        label: 'Gebouwd 1965 tot 1975',
        naam: 'Naoorlogse wijken',
        tekst:
          'De grootste groep woningen in Maarheeze komt uit de jaren zestig en zeventig. Bij woningen van rond de vijftig jaar oud zijn houten kozijnen, boeidelen en dakkapellen meestal toe aan een grondige onderhoudsbeurt.',
      },
      {
        label: 'Kerkdorp',
        naam: 'Soerendonk',
        tekst:
          'Soerendonk ligt tussen Maarheeze en Budel en heeft een waterstaatskerk uit 1838 en langgevelboerderijen, waaronder een uit 1789. Grote houten deuren en luiken van zulke boerderijen hebben baat bij een vaste onderhoudscyclus.',
      },
    ],
    alineas: [
      'Ruim 30 procent van de woningen in Maarheeze staat vrij, en dat betekent per woning veel houten buitenwerk: kozijnen rondom, overstekken, garagedeuren en schuurtjes. Bij [buitenschilderwerk in Maarheeze](/diensten/buitenschilderwerk) controleert Schildersbedrijf040 eerst het hout op loszittende verf en zachte plekken, en herstelt aangetast hout met [houtrot sanering](/diensten/houtrot-sanering) voordat de kwast erop gaat. Voor [kozijnen buiten](/diensten/kozijnen-schilderen) is de indicatie €50 tot €100 per kozijn, afhankelijk van de maat en de staat van het hout. Bij oudere boerderijen in Maarheeze en Soerendonk, met grote deuren en luiken, bepaalt Schildersbedrijf040 de prijs na een opname.',
      'Woningen uit de periode 1965 tot 1975 in Maarheeze worden na een verhuizing vaak in één keer opgefrist, van de plafonds in de woonkamer tot het trapgat. Scheurtjes in oude plafonds en wanden worden eerst gevuld en geschuurd, zodat de nieuwe laag strak dekt. Meer over die aanpak leest u bij [binnenschilderwerk in Maarheeze](/diensten/binnenschilderwerk). Maarheeze ligt aan de A2, waardoor Schildersbedrijf040 vanuit Eindhoven snel ter plaatse is. Ook in Soerendonk en Gastel plant u via de [contactpagina](/contact) een opname bij u thuis.',
    ],
    metaDescription:
      'Schilder in Maarheeze en Soerendonk voor vrijstaande woningen en rijwoningen uit de jaren 60 en 70. Binnen- en buitenschilderwerk. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Maarheeze (Cranendonck, fusie met Budel 1997, Sint-Gertrudiskerk 1910, boerderij Kerkstraat 5 uit 1779, A2, station heropend 2010)',
      'https://nl.wikipedia.org/wiki/Cranendonck (kernen Budel, Budel-Dorplein, Budel-Schoot, Gastel, Maarheeze en Soerendonk)',
      'https://nl.wikipedia.org/wiki/Soerendonk (tussen Maarheeze en Budel, waterstaatskerk 1838, langgevelboerderij uit 1789)',
      'https://allecijfers.nl/woonplaats/maarheeze/ (32 procent gebouwd 1965 tot 1975, 30 procent vrijstaand, 30 procent rijwoningen)',
    ],
  },
}

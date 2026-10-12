// Reviews zoals ze op de live site stonden (main, commit c892894). Tekst, naam, plaats en datum letterlijk overgenomen.
// In ronde 1 waren ze weggehaald; volgens ontwerp v2 komen ze terug (seo/plan/design-v2/LEESMIJ.md, regel 2).

export type Review = {
  tekst: string
  naam: string
  plaats?: string
  datum?: string
  bron: 'Google' | 'Werkspot'
  dienst?: string
}

// Homepage (components/sections/reviews.tsx op main)
export const reviews: Review[] = [
  {
    tekst:
      'Uitstekend binnenschilderwerk geleverd in onze woning in Eindhoven Centrum. Zeer professioneel, netjes afgewerkt en alles keurig afgedekt tijdens het werk.',
    naam: 'Peter van der Berg',
    plaats: 'Eindhoven Centrum',
    datum: '2025-09-12',
    bron: 'Google',
    dienst: 'binnenschilderwerk',
  },
  {
    tekst:
      'Schildersbedrijf040 heeft prachtig behangwerk geleverd in onze woonkamer in Strijp. Klantvriendelijke service en het resultaat is perfect. Echte aanrader!',
    naam: 'Maria Jansen',
    plaats: 'Strijp, Eindhoven',
    datum: '2025-06-23',
    bron: 'Google',
    dienst: 'behangen',
  },
  {
    tekst:
      'Zeer tevreden met het buitenschilderwerk aan onze woning in Woensel. Netjes en volgens planning uitgevoerd, inclusief houtrot sanering van twee kozijnen.',
    naam: 'Johan Smits',
    plaats: 'Woensel, Eindhoven',
    datum: '2025-03-08',
    bron: 'Google',
    dienst: 'buitenschilderwerk',
  },
]

// Quotes op de dienstpagina's (kaartjes "5.0 op Google" en "4.9 op Werkspot" op main)
export const dienstQuotes: Record<string, { google: string; werkspot: string }> = {
  binnenschilderwerk: {
    google: 'Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor binnenschilderwerk.',
    werkspot: 'Heel tevreden met het schilderwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!',
  },
  buitenschilderwerk: {
    google: 'Buitenschilderwerk top afgeleverd. Kozijnen zien er weer als nieuw uit. Goede voorbereiding en netjes opgeruimd na afloop.',
    werkspot: 'Heel tevreden. Houtrot netjes gerepareerd en het schilderwerk is perfect. Goede communicatie over de planning.',
  },
  behangen: {
    google: 'Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor behangwerk.',
    werkspot: 'Heel tevreden met het behangwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!',
  },
  'houtrot-sanering': {
    google: 'Houtrot in meerdere kozijnen vakkundig gerepareerd. Eerlijk advies over wat gerepareerd kon worden en wat vervangen moest. Top resultaat!',
    werkspot: 'Alle kozijnen geïnspecteerd en de houtrot plekken perfect gerepareerd met epoxy. Netjes afgeschilderd en je ziet niets meer. Aanrader!',
  },
  lakwerk: {
    google: 'Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor lakwerk.',
    werkspot: 'Heel tevreden met het lakwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!',
  },
  'latex-spuiten': {
    google: 'Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor schilderwerk.',
    werkspot: 'Heel tevreden met het spuitwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!',
  },
}

// Quotes op de locatiepagina's (template op main)
export const locatieQuotes = {
  google: 'Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader.',
  werkspot: 'Heel tevreden met het schilderwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd.',
}

// Bijschriften zoals op main (em dash vervangen)
export const bronLabel = {
  google: 'Google Reviews: 41 beoordelingen',
  werkspot: 'Werkspot: Topvakman',
}

export const reviewPlaceholder = '[JORDY: echte Google-review koppelen]'

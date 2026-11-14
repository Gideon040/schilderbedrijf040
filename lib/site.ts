// Bedrijfsfeiten op één plek. Alleen feiten die door Jordy zijn bevestigd (zie seo/CLAUDE.md).

import { reviewTotalen } from './reviews'

export const site = {
  name: 'Schildersbedrijf040',
  url: 'https://schildersbedrijf040.nl',
  owner: 'Jordy Jacobs',
  phone: '06-38903004',
  phoneHref: 'tel:+31638903004',
  phoneE164: '+31638903004',
  email: 'info@schildersbedrijf040.nl',
  address: {
    street: 'Straatsburglaan 26',
    postalCode: '5627 DB',
    city: 'Eindhoven',
    region: 'Noord-Brabant',
    country: 'NL',
  },
  geo: { latitude: 51.4334, longitude: 5.4834 },
  openingHours: { days: 'Ma t/m vr', opens: '08:00', closes: '17:30' },
  logo: 'https://schildersbedrijf040.nl/images/schildersbedrijf040-logo.png',
  ogImage: 'https://schildersbedrijf040.nl/images/schildersbedrijf040-schilder-eindhoven.jpg',
  // Scores en aantallen komen uit data/reviews.json (niet hardcoderen)
  google: {
    rating: reviewTotalen.google.scoreTekst,
    ratingValue: reviewTotalen.google.score,
    reviewCount: reviewTotalen.google.aantal,
    reviewsUrl: 'https://www.google.com/search?q=schildersbedrijf040',
    // [INVULLEN: directe link om een Google-review te schrijven (search.google.com/local/writereview?placeid=...)]
    schrijfReviewUrl: null as string | null,
  },
  werkspot: {
    rating: reviewTotalen.werkspot.scoreTekst,
    ratingValue: reviewTotalen.werkspot.score,
    reviewCount: reviewTotalen.werkspot.aantal,
  },
  experience: '5+ jaar',
  paintBrand: 'Boonstoppel',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100064851917826',
    'https://www.instagram.com/schildersbedrijf040/',
  ],
  // [INVULLEN: link naar het Google-bedrijfsprofiel (maps.app.goo.gl/... of g.page/...) en het Werkspot-profiel].
  // Zodra ingevuld komen ze vanzelf in sameAs van het HousePainter-schema.
  googleProfielUrl: null as string | null,
  werkspotUrl: null as string | null,
} as const

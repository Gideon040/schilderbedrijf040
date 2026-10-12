// Bedrijfsfeiten op één plek. Alleen feiten die door Jordy zijn bevestigd (zie schildersbedrijf040-seo/CLAUDE.md).

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
  logo: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1739556474/pnex6bboplimq3s41db8.png',
  ogImage: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/schildersbedrijf040_logo_aqxhxr.png',
  google: {
    rating: '5,0',
    ratingValue: 5.0,
    reviewCount: 41,
    // Stand september 2026
    reviewsUrl: 'https://www.google.com/search?q=schildersbedrijf040',
  },
  werkspot: {
    rating: '4,9',
    ratingValue: 4.9,
    reviewCount: 19,
  },
  experience: '5+ jaar',
  paintBrand: 'Boonstoppel',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100064851917826',
    'https://www.instagram.com/schildersbedrijf040/',
  ],
} as const

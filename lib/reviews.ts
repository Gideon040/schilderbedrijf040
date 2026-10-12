// Google-reviews. Alleen echte reviews uit het Google-bedrijfsprofiel, met naam en datum zoals op Google.
// De quotes die eerder op de site stonden hadden geen aantoonbare bron en zijn weggehaald.
// [JORDY: echte reviews koppelen] Vul hier 4 tot 8 reviews in (of koppel de Google Places API).

export type Review = {
  tekst: string
  naam: string
  datum: string // zoals op Google, bijv. "september 2026"
  plaats?: string
  dienst?: 'binnenschilderwerk' | 'buitenschilderwerk' | 'behangen' | 'lakwerk' | 'latex-spuiten' | 'houtrot-sanering'
}

export const reviews: Review[] = []

export const reviewPlaceholder = '[JORDY: echte Google-review koppelen]'

// Staalkleur per blogcategorie (ontwerp v2)
const kleuren: Record<string, string> = {
  'BTW & Kosten': 'var(--sw6)',
  'How-To': 'var(--sw1)',
  'Tips & Advies': 'var(--sw2)',
  Materialen: 'var(--sw3)',
  Inspiratie: 'var(--sw5)',
}

export function catKleur(cat?: string): string {
  return (cat && kleuren[cat]) || 'var(--sw4)'
}

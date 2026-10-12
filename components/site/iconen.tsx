// Lijn-iconen (24x24, currentColor) voor menu en topbalk. Eén stijl: lijndikte 1.8, ronde uiteinden.
import type { SVGProps } from 'react'

const paden: Record<string, JSX.Element> = {
  // Verfroller
  binnenschilderwerk: (
    <>
      <rect x="3" y="3" width="15" height="6" rx="1.5" />
      <path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3" />
      <rect x="10.5" y="14" width="3" height="7" rx="1" />
    </>
  ),
  // Huis
  buitenschilderwerk: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  // Behangrol met afgerolde baan
  behangen: (
    <>
      <path d="M7 4h11v12H7" />
      <ellipse cx="7" cy="7" rx="3" ry="3" />
      <path d="M4 7v10a3 3 0 0 0 3 3h11v-4" />
      <path d="M11 9.5h4M11 12.5h4" />
    </>
  ),
  // Deur
  lakwerk: (
    <>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M4 21h16" />
      <path d="M9 7h6v5H9z" />
      <circle cx="15" cy="15.5" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  // Spuitpistool met nevel
  'latex-spuiten': (
    <>
      <path d="M4 8h10l2 3H4z" />
      <path d="M8 11v3a2 2 0 0 0 2 2h1v5" />
      <path d="M14 6V4h-4v4" />
      <path d="M19 7.5h2M18.5 10.5l1.8 1M18.5 4.5l1.8-1" />
    </>
  ),
  // Plank met nerf en hersteld stuk
  'houtrot-sanering': (
    <>
      <rect x="3" y="7" width="18" height="10" rx="1.5" />
      <path d="M7 10c2 1 4-1 6 0s3 1 5 0M7 14c2-1 3 1 5 0" />
      <path d="M15 7v10" strokeDasharray="2 2" />
    </>
  ),
  // Sneeuwvlok
  winterschilder: (
    <>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2" />
    </>
  ),
  // Raamkozijn
  'kozijnen-schilderen': (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M4 12h16" />
      <path d="M2.5 21h19" />
    </>
  ),
  // Gevel (bakstenen)
  'gevel-schilderen': (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 4v5.3M6 9.3v5.3M12 9.3v5.3M18 9.3v5.3M9 14.6V20M15 14.6V20" />
    </>
  ),
  telefoon: (
    <path d="M5 4h3l1.5 4.5-2 1.3a11 11 0 0 0 6.7 6.7l1.3-2L20 16v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  klok: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  ster: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor" stroke="none" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
}

export function Icoon({ naam, ...props }: { naam: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paden[naam] ?? paden.binnenschilderwerk}
    </svg>
  )
}

// Statische, schematische kaart van het werkgebied (geen Google Maps-iframe: scheelt ruim 1 MB en scripts).
// Klik opent Google Maps. Posities zijn schematisch, niet op schaal.

const plaatsen = [
  { naam: 'Helmond', x: 420, y: 140 },
  { naam: 'Veldhoven', x: 185, y: 190, lx: 100, ly: 212 },
  { naam: 'Best', x: 215, y: 85, lx: 170, ly: 75 },
  { naam: 'Nuenen', x: 330, y: 105 },
  { naam: 'Geldrop', x: 335, y: 210, ly: 230 },
  { naam: 'Valkenswaard', x: 240, y: 260, ly: 280 },
]

export function WerkgebiedKaart({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://www.google.com/maps/place/Straatsburglaan+26,+5627+DB+Eindhoven"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Werkgebied Schildersbedrijf040 rond Eindhoven, open in Google Maps"
      className={`block relative overflow-hidden rounded-2xl bg-[#E8F0FC] ${className}`}
    >
      <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full" role="img" aria-hidden="true">
        <path d="M0 210 C120 180 180 240 300 200 S480 150 600 180" stroke="#C9DAF5" strokeWidth="18" fill="none" />
        <path d="M220 0 C240 90 260 160 250 300" stroke="#C9DAF5" strokeWidth="10" fill="none" />
        <circle cx="270" cy="160" r="95" fill="#1668E3" fillOpacity="0.12" stroke="#1668E3" strokeDasharray="6 6" />
        <circle cx="270" cy="160" r="9" fill="#0B1B30" />
        <text x="286" y="165" fontFamily="inherit" fontWeight="700" fontSize="16" fill="#0B1B30">Eindhoven</text>
        {plaatsen.map((p) => (
          <g key={p.naam}>
            <circle cx={p.x} cy={p.y} r="6" fill="#1668E3" />
            <text x={p.lx ?? p.x + 12} y={p.ly ?? p.y + 5} fontFamily="inherit" fontSize="14" fill="#0B1B30">
              {p.naam}
            </text>
          </g>
        ))}
      </svg>
      <span className="absolute right-3 bottom-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-[#0B1B30]">
        Open in Google Maps
      </span>
    </a>
  )
}

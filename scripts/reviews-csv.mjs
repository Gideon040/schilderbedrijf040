// Plaats en diensten per review aanvullen in een spreadsheet, zonder code aan te raken.
//   node scripts/reviews-csv.mjs export   -> reviews-aanvullen.csv (puntkomma's, opent direct in Excel)
//   node scripts/reviews-csv.mjs import   -> zet de kolommen plaats en diensten terug in data/reviews.json
// Diensten scheiden met een komma, bijvoorbeeld: binnenschilderwerk, behangen
import { readFileSync, writeFileSync } from 'node:fs'

const JSON_PAD = 'data/reviews.json'
const CSV_PAD = 'reviews-aanvullen.csv'
const data = JSON.parse(readFileSync(JSON_PAD, 'utf8'))
const cel = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`

if (process.argv[2] === 'export') {
  const rijen = [['id', 'naam', 'bron', 'jaar', 'plaats', 'diensten', 'tekst (niet wijzigen)']]
  for (const r of data.reviews) rijen.push([r.id, r.naam, r.bron, r.jaar, r.plaats, r.diensten.join(', '), r.tekst])
  writeFileSync(CSV_PAD, '﻿' + rijen.map((r) => r.map(cel).join(';')).join('\r\n'))
  console.log(`${CSV_PAD} geschreven (${data.reviews.length} reviews)`)
} else if (process.argv[2] === 'import') {
  const tekst = readFileSync(CSV_PAD, 'utf8').replace(/^﻿/, '')
  const rijen = []
  let rij = [], veld = '', inQuote = false
  for (let i = 0; i < tekst.length; i++) {
    const c = tekst[i]
    if (inQuote) {
      if (c === '"' && tekst[i + 1] === '"') { veld += '"'; i++ } else if (c === '"') inQuote = false
      else veld += c
    } else if (c === '"') inQuote = true
    else if (c === ';') { rij.push(veld); veld = '' }
    else if (c === '\n') { rij.push(veld.replace(/\r$/, '')); rijen.push(rij); rij = []; veld = '' }
    else veld += c
  }
  if (veld || rij.length) { rij.push(veld); rijen.push(rij) }
  let n = 0
  for (const [id, , , , plaats, diensten] of rijen.slice(1)) {
    const r = data.reviews.find((x) => x.id === id)
    if (!r) continue
    r.plaats = plaats?.trim() || null
    r.diensten = (diensten ?? '').split(',').map((d) => d.trim().toLowerCase().replace(/\s+/g, '-')).filter(Boolean)
    n++
  }
  writeFileSync(JSON_PAD, JSON.stringify(data, null, 2) + '\n')
  console.log(`${n} reviews bijgewerkt in ${JSON_PAD}`)
} else {
  console.log('Gebruik: node scripts/reviews-csv.mjs export | import')
}

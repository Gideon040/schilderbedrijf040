export type FAQ = {
  question: string
  answer: string
}

export type Dienst = {
  title: string
  slug: string
  description: string
}

export type CityData = {
  title: string
  displayName: string
  heroImage: string
  intro: string
  wijken: string[]
  kosten: string
  diensten: Dienst[]
  waarom: string
  werkwijze: string
  contact: string
  faqs: FAQ[]
}

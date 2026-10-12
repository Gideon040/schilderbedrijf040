import './globals.css'
import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://schildersbedrijf040.nl'),
  title: {
    default: 'Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven',
    template: '%s | Schildersbedrijf040'
  },
  description: 'Professioneel schildersbedrijf in Eindhoven met 5+ jaar ervaring. Specialisten in binnenschilderwerk, buitenschilderwerk, behangen en houtrot sanering. Vraag een gratis offerte aan!',
  keywords: ['schilder eindhoven', 'schildersbedrijf eindhoven', 'binnenschilderwerk', 'buitenschilderwerk', 'behangen', 'houtrot sanering', 'latex spuiten', 'schilder waalre'],
  authors: [{ name: 'Schildersbedrijf040' }],
  creator: 'Schildersbedrijf040',
  publisher: 'Schildersbedrijf040',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://schildersbedrijf040.nl',
    siteName: 'Schildersbedrijf040',
    title: 'Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven',
    description: 'Professioneel schildersbedrijf in Eindhoven met 5+ jaar ervaring. Specialisten in binnenschilderwerk, buitenschilderwerk, behangen en houtrot sanering.',
    images: [
      {
        url: '/images/schildersbedrijf040-schilder-eindhoven.jpg',
        width: 1200,
        height: 630,
        alt: 'Schildersbedrijf040, schilder in Eindhoven',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven',
    description: 'Professioneel schildersbedrijf in Eindhoven met 5+ jaar ervaring.',
    images: ['/images/schildersbedrijf040-schilder-eindhoven.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Voeg hier je Google Search Console verificatie toe
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={cn(inter.variable, bebasNeue.variable)}>
      <body className={cn("min-h-screen bg-white font-sans antialiased flex flex-col", inter.className)}>
        {children}
      </body>
    </html>
  )
}

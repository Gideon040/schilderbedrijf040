import { Footer } from '@/components/layout/footer'
import { JsonLd } from '@/components/json-ld'
import { businessSchema, websiteSchema } from '@/lib/schema'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={businessSchema} />
      <JsonLd data={websiteSchema} />
      {children}
      <Footer />
    </>
  )
}

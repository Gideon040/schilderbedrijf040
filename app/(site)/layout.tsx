import './v2.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MobileActionBar } from '@/components/layout/mobile-action-bar'
import { JsonLd } from '@/components/json-ld'
import { Motion } from '@/components/site/motion'
import { TrackingListener } from '@/components/tracking-listener'
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
      <TrackingListener />
      <Motion />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <MobileActionBar />
    </>
  )
}

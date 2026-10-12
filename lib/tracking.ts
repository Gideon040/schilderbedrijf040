// Metingen: events naar window.dataLayer (Google Tag Manager / GA4). Zolang er geen GTM-container
// op de site staat, doen deze events niets. Eventnamen volgen GA4 (generate_lead) waar dat kan.

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] }

export function bronpagina(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname + window.location.search
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as DataLayerWindow
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, page_path: window.location.pathname, ...params })
}

'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/tracking'

// Meet klikken op telefoon-, WhatsApp- en e-maillinks op alle pagina's
export function TrackingListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me/"]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      trackEvent(href.startsWith('tel:') ? 'phone_click' : href.includes('wa.me/') ? 'whatsapp_click' : 'email_click', {
        link_text: link.textContent?.trim().slice(0, 60),
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

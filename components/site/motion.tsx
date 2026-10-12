'use client'

import { usePathname } from 'next/navigation'
import { useReveal } from '@/hooks/use-reveal'

// Activeert de animaties opnieuw bij elke paginawissel
export function Motion() {
  useReveal(usePathname())
  return null
}

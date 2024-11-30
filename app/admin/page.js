'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // When the component mounts, dynamically import the Netlify CMS script
      (async () => {
        const CMS = (await import('netlify-cms-app')).default
        CMS.init()
      })()
    }
  }, [])

  return (
    <div>
      {/* The CMS will automatically mount to this div */}
      <div id="nc-root" />
    </div>
  )
}
'use client'

import { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const CMS = (await import('decap-cms-app')).default
        CMS.init()
      }
    })()
  }, [])

  return (
    <div>
      <div id="nc-root" />
    </div>
  )
}
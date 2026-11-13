import { NextResponse, type NextRequest } from 'next/server'

// /Blog, /BLOG/... enz. met één 301 naar /blog. Next-redirects zijn hoofdletterongevoelig
// (dan zou /blog naar zichzelf verwijzen), daarom hier een hoofdlettergevoelige controle.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const [, eerste, ...rest] = pathname.split('/')
  if (eerste && eerste !== 'blog' && eerste.toLowerCase() === 'blog') {
    const url = req.nextUrl.clone()
    url.pathname = ['', 'blog', ...rest].join('/')
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

// Matcher in alle schrijfwijzen (hoofdlettergevoelig in de runtime)
export const config = { matcher: ['/:b([bB][lL][oO][gG])', '/:b([bB][lL][oO][gG])/:path*'] }

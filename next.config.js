/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // statusCode 301 in plaats van permanent: true (dat geeft een 308)
      { source: '/locaties/eindhoven', destination: '/', statusCode: 301 },
      // Oude blog-URL uit Search Console, onderwerp staat nu in verven-na-behang
      { source: '/blog/voorstrijk-is-nodig-na-behang-verwijderen', destination: '/blog/verven-na-behang', statusCode: 301 },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-ams4-1.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'schildersbedrijf040.nl',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;

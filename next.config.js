/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-bddcd0e858fd41dcb523cf6161bdc546.r2.dev',
        port: '',
        pathname: '/blog/**/**'
      }
    ]
  }
}

module.exports = nextConfig

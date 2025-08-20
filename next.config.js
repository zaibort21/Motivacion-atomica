/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Elysiam/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Elysiam' : '',
}

module.exports = nextConfig
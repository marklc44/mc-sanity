/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // loader: 'custom',
    // loaderFile: './utils/imageLoaders.ts',
    domains: ['cdn.sanity.io'],
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './utils/imageLoaders.ts',
  }
};

export default nextConfig;

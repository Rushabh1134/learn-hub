/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images:{
domains:["img.youtube.com"]
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
domains:["img.youtube.com"]
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig

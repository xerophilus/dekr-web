/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure proper output for Cloudflare Pages
  output: 'standalone',
};

module.exports = nextConfig; 
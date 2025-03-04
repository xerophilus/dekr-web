/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Add specific Cloudflare compatibility settings
  experimental: {
    // Required for Cloudflare Pages
    appDir: true,
  },
  // Ensure proper output for Cloudflare Pages
  output: 'standalone',
};

module.exports = nextConfig; 
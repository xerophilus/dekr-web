import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure compatibility with Cloudflare Pages
  images: {
    unoptimized: true,
    // Or use Cloudflare's image optimization if needed:
    // loader: 'cloudflare',
    // domains: ['your-domain.com'],
  },
};

export default nextConfig;

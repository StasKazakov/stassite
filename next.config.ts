import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: 'http://localhost:5400/send-to-bot',
      },
      {
        source: '/api/order',
        destination: 'http://localhost:5400/vls',
      },
    ];
  },
};

export default nextConfig;
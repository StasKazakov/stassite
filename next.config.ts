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
      {
        source: '/antispam',
        destination: 'http://localhost:3333',
      },
    ];
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },

  experimental: {
    esmExternals: true, 
  },


};


export default nextConfig;
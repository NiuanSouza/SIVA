import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/siva',
  async rewrites() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://siva_backend:8083";
    
    return [
      {
        source: '/user/:path*',
        destination: `${API_URL}/user/:path*`,
      },
      {
        source: '/vehicle/:path*',
        destination: `${API_URL}/vehicle/:path*`,
      },
      {
        source: '/service/:path*',
        destination: `${API_URL}/service/:path*`,
      },
      {
        source: '/export/:path*',
        destination: `${API_URL}/export/:path*`,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  experimental: {
    runtime: "nodejs", // Use Node.js runtime globally
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import { navServices } from "./src/data/home";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    // Allow hero/section images hosted on Google CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return navServices.map((service) => ({
      source: `/services/${service.slug}`,
      destination: "/services",
      permanent: false,
    }));
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //! for uploadthing configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;

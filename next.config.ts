import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output to produce a minimal server for Docker images
  output: "standalone",
};

export default nextConfig;

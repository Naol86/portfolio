import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "picsum.photos",
      "placekitten.com",
      "dummyimage.com",
      "**",
    ],
  },
};

export default nextConfig;

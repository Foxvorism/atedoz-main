import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "apiateedoz.test"], // Menambahkan domain yang diizinkan untuk digunakan dengan Image Next.js
  },
};

export default nextConfig;

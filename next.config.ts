import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // 优化：防止外部图片加载报错
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
    ],
  },
};

export default nextConfig;

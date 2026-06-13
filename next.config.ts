import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Tắt tối ưu hóa hình ảnh để xuất tĩnh hoạt động bình thường
  },
  output: "export",
};

export default nextConfig;

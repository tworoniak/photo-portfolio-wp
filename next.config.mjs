/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add your WordPress hostname here in Phase 2:
      // { protocol: "https", hostname: "your-wp-domain.com" },
    ],
  },
};

export default nextConfig;

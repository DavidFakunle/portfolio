/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.metmuseum.org",
      },
      {
        protocol: "https",
        hostname: "*.bcbits.com",
      },
    ],
  },
};

export default nextConfig;

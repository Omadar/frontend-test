/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.digiboxs.com", "images.unsplash.com"],
  },
  fallback: true,
};

export default nextConfig;

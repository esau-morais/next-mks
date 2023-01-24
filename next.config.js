/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;

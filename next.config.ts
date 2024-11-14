/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com', // Add the hostname here
        port: '', // Leave as empty if no specific port is required
        pathname: '/images/products/thumbnails/new/**', // Adjust the path to match where the images are located
      },
    ],
  },
  // Other config options...
};

module.exports = nextConfig;

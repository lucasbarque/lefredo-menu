/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.goomer.app',
        port: '',
      },
    ],
  },
};

export default nextConfig;

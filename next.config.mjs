/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.goomer.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'realfoodrn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.themodernproper.com',
        port: '',
      },
    ],

  },
};

export default nextConfig;

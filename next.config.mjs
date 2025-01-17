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
        hostname: 'www.alimentados.com.br',
        port: '',
      },
    ],

  },
};

export default nextConfig;

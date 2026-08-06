/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // external image domain
        port: '',
        pathname: '/**', // allows all paths
      },
    ],
  },
};

export default nextConfig;

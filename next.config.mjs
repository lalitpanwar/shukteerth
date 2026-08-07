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
      { protocol: "https", hostname: "picsum.photos" }
    ],
  },
};

export default nextConfig;

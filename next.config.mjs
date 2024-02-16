/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        
      },
      // here
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;

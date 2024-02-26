/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3000/:path*',
          }
        ]
      },
};

export default nextConfig;

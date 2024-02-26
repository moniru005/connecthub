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
    withCORS: {
        origin: 'https://connecthub-1.netlify.app',
      },
};

export default nextConfig;

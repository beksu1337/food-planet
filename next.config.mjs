/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        BASE_URL_REVIEWS: process.env.BASE_URL_REVIEWS,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;

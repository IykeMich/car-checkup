/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["ichef.bbci.co.uk", "media.zenfs.com", "npr.brightspotcdn.com"]
    // }
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows all domains
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/old-route',
                destination: '/new-route',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/blog/:slug',
                destination: '/blog/:slug', // Allow dynamic slugs without restrictions
            },
        ];
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    compiler: { styledComponents: true },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/movies',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

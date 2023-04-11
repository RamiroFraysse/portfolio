/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["icongr.am"],
    },
    env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
    },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */


const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
    reactStrictMode: true,
    swcMinify: true
}

const { withContentlayer } = require("next-contentlayer")

module.exports = withContentlayer(nextConfig)

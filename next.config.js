/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'devicon.dev',
          },
        ],
      },
}

module.exports = nextConfig

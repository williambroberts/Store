/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverActions: false,
    //   },
      optimization:{
        mergeDuplicateChunks:true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.stripe.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'picsum',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig

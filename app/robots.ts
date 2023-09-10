export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/'],
        },
      ],
      sitemap: 'https://store-five-xi.vercel.app//sitemap.xml',
      host: 'https://store-five-xi.vercel.app/',
    }
  }
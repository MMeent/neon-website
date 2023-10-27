module.exports = {
  siteUrl:
    process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.VERCEL_BRANCH_URL}`
      : process.env.NEXT_PUBLIC_DEFAULT_SITE_URL,
  exclude: [
    '/blog/wp-draft-post-preview-page',
    '/blog/rss.xml',
    '/docs/release-notes/rss.xml',
    '/last-week-in-aws',
    '/ping-thing',
    '/all-things-open-2023',
    '/stackoverflow',
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/blog/wp-draft-post-preview-page$',
          '/last-week-in-aws$',
          '/ping-thing$',
          '/all-things-open-2023$',
          '/stackoverflow$',
        ],
      },
    ],
  },
};

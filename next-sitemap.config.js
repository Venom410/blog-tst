/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:300',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}
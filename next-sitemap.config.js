/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.robie.dev",
  generateRobotsTxt: true,
};

module.exports = config;

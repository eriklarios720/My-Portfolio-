// SITE_URL comes from .env.local (not committed). Fall back to Vercel's
// production domain, then localhost, so the sitemap never emits empty URLs.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export default async function sitemap() {
  const routes = [''].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}

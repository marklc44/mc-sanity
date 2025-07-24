export async function GET() {
  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
  <url>
  <loc>https://www.markcentoni.com/</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>1.00</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/about</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/work</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/posts</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/services</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/work/nextme</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/work/hopelab</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.64</priority>
  </url>
  <url>
  <loc>https://www.markcentoni.com/work/plastiq</loc>
  <lastmod>2025-07-24T16:16:01+00:00</lastmod>
  <priority>0.64</priority>
  </url>
  </urlset>
  `

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=600, stale-while-revalidate=600',
    },
  })
}

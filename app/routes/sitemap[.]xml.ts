import { type LoaderFunction } from '@remix-run/node';
import { db } from '~/db/index.server';

export const loader: LoaderFunction = async () => {
  const domain = 'https://aidanfroggatt.com';

  const projectItems = await db.query.projects.findMany({
    columns: {
      id: true,
    },
  });

  const staticUrls = [
    { loc: `${domain}/`, priority: 1.0 },
    { loc: `${domain}/info`, priority: 0.8 },
    { loc: `${domain}/work`, priority: 0.8 },
  ];

  const dynamicUrls = projectItems.map((project) => ({
    loc: `${domain}/work/${project.id}`,
    priority: 0.5,
  }));

  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(({ loc, priority }) => {
          return `
            <url>
              <loc>${loc}</loc>
              <changefreq>daily</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

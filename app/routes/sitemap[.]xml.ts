import { work } from "~/data/work";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const domain = 'https://aidanfroggatt.com';
  
  // Fetch dynamic URLs from your work data
  const workItems = work; // The `work` array imported from your data

  // Define the static URLs with their respective priorities
  const staticUrls = [
    { loc: `${domain}/`, priority: 1.0 }, // Highest priority for the base route
    { loc: `${domain}/info`, priority: 0.8 }, // /info comes before /work
    { loc: `${domain}/work`, priority: 0.8 }, // Same priority for /work
  ];

  // Create dynamic URLs for the work items with lower priority
  const dynamicUrls = workItems.map(item => ({
    loc: `${domain}/work/${item.id}`,
    priority: 0.5, // Lower priority for individual work items
  }));

  // Combine static and dynamic URLs
  const urls = [...staticUrls, ...dynamicUrls];

  // Generate the sitemap
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
    },
  });
};

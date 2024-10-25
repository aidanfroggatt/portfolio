// app/routes/robots[.]txt.ts
import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: https://aidanfroggatt.com/sitemap.xml
  `;
  
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};

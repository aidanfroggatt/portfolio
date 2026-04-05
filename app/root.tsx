import { type LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { ReactNode } from 'react';
import { getLastCommitInfo } from '~/services/github.server';
import styles from '~/styles/global.css?url';
import NotFound from './components/NotFound';

import { Analytics } from '@vercel/analytics/remix';
import { SpeedInsights } from '@vercel/speed-insights/remix';

export const links: LinksFunction = () => [
  {
    rel: 'manifest',
    href: '/manifest.json',
  },
  {
    rel: 'icon',
    href: '/favicon.ico',
    sizes: 'image/x-icon',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    type: 'image/svg+xml',
  },
  {
    rel: 'apple-touch-icon',
    href: '/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    href: '/favicon-96x96.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    href: '/favicon-192x192.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    href: '/favicon-512x512.png',
    type: 'image/png',
  },
  { rel: 'stylesheet', href: styles },
];

export async function loader() {
  const commitInfo = await getLastCommitInfo();
  return { commitInfo };
}

export type RootLoader = typeof loader;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Aidan Froggatt" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <>
      <title>Oops!</title>
      <NotFound />
    </>
  );
}

export default function App() {
  return <Outlet />;
}

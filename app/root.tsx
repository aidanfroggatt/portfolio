import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css?url";
import styles from "~/global.css?url";
import NotFound from "./components/NotFound";

export const links: LinksFunction = () => [
  {
    rel: "manifest",
    href: "/manifest.json",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    sizes: "image/x-icon",
  },
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    href: "/favicon-96x96.png",
    type: "image/png",
  },
  {
    rel: "icon",
    href: "/favicon-192x192.png",
    type: "image/png",
  },
  {
    rel: "icon",
    href: "/favicon-512x512.png",
    type: "image/png",
  },
  { rel: "stylesheet", href: stylesheet, as: "style" },
  { rel: "stylesheet", href: styles, as: "style" },
];

export function Layout({ children }: { children: React.ReactNode }) {
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
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NotFound />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

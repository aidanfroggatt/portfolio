import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css?url";
import styles from "~/global.css?url";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    sizes: "any",
  },
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml",
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

export default function App() {
  return <Outlet />;
}

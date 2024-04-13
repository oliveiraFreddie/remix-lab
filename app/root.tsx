import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Header from "./components/header";
import Footer from "./components/footer";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="flex-grow flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <ScrollRestoration />
          <Scripts />            
        </body>
        <footer className="footer">
          <Footer />
        </footer>
      </html>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}

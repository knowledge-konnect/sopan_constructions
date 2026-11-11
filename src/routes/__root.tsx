import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteShell } from "../components/SiteShell";
import { phoneHref, site, waHref } from "../lib/site";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <SiteShell>
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-16">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-sm">Go home</Link>
        </div>
      </div>
    </div>
    </SiteShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border">
        <div className="container-x flex h-16 items-center">
          <a href="/" aria-label="SOPAN Constructions home">
            <img src="/sopan-logo.svg" alt="SOPAN Constructions and Infra Developers" width={2200} height={900} className="block h-auto w-[124px] sm:w-[140px]" />
          </a>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-primary text-sm">Go home</a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Need help right away? <a href={phoneHref} className="font-semibold text-primary">Call us</a> or{" "}
          <a href={waHref()} target="_blank" rel="noreferrer" className="font-semibold text-primary">WhatsApp</a>.
        </p>
      </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${site.legalName} | Residential Construction in Visakhapatnam` },
      { name: "description", content: "Residential construction, apartment construction, planning & design, and renovation services in Visakhapatnam, with practical execution and clear communication." },
      { name: "author", content: site.legalName },
      { name: "theme-color", content: "#0F2D5C" },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://sopanconstructions.in/og-image.jpg" },
      { name: "twitter:image", content: "https://sopanconstructions.in/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: site.legalName,
          telephone: site.phoneTel,
          email: site.email,
          url: "https://sopanconstructions.in",
          image: "https://sopanconstructions.in/og-image.jpg",
          logo: "https://sopanconstructions.in/apple-touch-icon.png",
          areaServed: [
            { "@type": "City", name: "Visakhapatnam" },
            { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.line1,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.pin,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

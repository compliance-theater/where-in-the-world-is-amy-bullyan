"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Gtm() {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!gtagId || !window.gtag) return;
    window.gtag("config", gtagId, {
      page_path: pathname
    });
  }, [gtagId, pathname]);

  if (!gtagId) return null;

  return (
    <>
      <Script
        id="gtag-src"
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
}

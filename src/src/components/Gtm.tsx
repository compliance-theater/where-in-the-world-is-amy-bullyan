import Script from "next/script";

export function Gtm() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        `}
      </Script>
      <Script
        id="gtm-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
    </>
  );
}

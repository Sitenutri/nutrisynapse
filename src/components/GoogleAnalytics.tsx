"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { GA_MEASUREMENT_ID, COOKIE_CONSENT_KEY, pageview } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/*  Inner component that uses useSearchParams (needs Suspense)         */
/* ------------------------------------------------------------------ */
function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consentGiven, setConsentGiven] = useState(false);

  /* Listen for consent changes (initial load + custom event from CookieConsent) */
  useEffect(() => {
    const checkConsent = () => {
      setConsentGiven(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted");
    };

    // Check on mount
    checkConsent();

    // Listen for consent granted via custom event
    window.addEventListener("cookie-consent-granted", checkConsent);
    // Also listen for storage changes (other tabs)
    window.addEventListener("storage", checkConsent);

    return () => {
      window.removeEventListener("cookie-consent-granted", checkConsent);
      window.removeEventListener("storage", checkConsent);
    };
  }, []);

  /* Track page views on route change */
  useEffect(() => {
    if (!consentGiven) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams, consentGiven]);

  // Don't render scripts until consent is given
  if (!consentGiven) return null;

  return (
    <>
      {/* Global Site Tag (gtag.js) — Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported wrapper with Suspense boundary                            */
/* ------------------------------------------------------------------ */
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  );
}

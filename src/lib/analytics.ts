/* ------------------------------------------------------------------ */
/*  Google Analytics 4 — Typed event helpers                          */
/*  GA4 Measurement ID: G-BMN5Q1DWX8                                  */
/* ------------------------------------------------------------------ */

export const GA_MEASUREMENT_ID = "G-BMN5Q1DWX8";

/* ------------------------------------------------------------------ */
/*  Cookie consent helpers                                             */
/* ------------------------------------------------------------------ */

/** Key used in localStorage to track cookie consent */
export const COOKIE_CONSENT_KEY = "cookie-consent";

/** Check whether the user has already accepted cookies */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

/* ------------------------------------------------------------------ */
/*  Core gtag wrappers                                                 */
/* ------------------------------------------------------------------ */

// Extend Window to include gtag and dataLayer
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Send a GA4 page_view (called automatically by gtag.js on route change) */
export function pageview(url: string) {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/** Generic GA4 event dispatcher */
function gtagEvent(
  action: string,
  params: Record<string, string | number | boolean>,
) {
  if (!window.gtag) return;
  window.gtag("event", action, params);
}

/* ------------------------------------------------------------------ */
/*  Custom events                                                      */
/* ------------------------------------------------------------------ */

/** Ebook / PDF download (or buy click) */
export function trackEbookDownload(title: string, link: string) {
  gtagEvent("ebook_download", {
    event_category: "engagement",
    event_label: title,
    ebook_title: title,
    ebook_link: link,
  });
}

/** Newsletter form submission */
export function trackNewsletterSignup() {
  gtagEvent("newsletter_signup", {
    event_category: "lead",
    event_label: "newsletter",
  });
}

/** Contact form submission */
export function trackContactSubmit(subject: string) {
  gtagEvent("contact_form_submit", {
    event_category: "lead",
    event_label: subject,
    contact_subject: subject,
  });
}

/** Lead magnet conversion (diabetes checklist, probiotic guide, etc.) */
export function trackLeadMagnet(magnetName: string) {
  gtagEvent("lead_magnet_conversion", {
    event_category: "conversion",
    event_label: magnetName,
    magnet_name: magnetName,
  });
}

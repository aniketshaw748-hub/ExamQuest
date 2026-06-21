// PostHog product analytics — fully opt-in and privacy-conscious.
//
// It does NOTHING until VITE_PUBLIC_POSTHOG_KEY is set (in .env locally or in Vercel env vars),
// and posthog-js is loaded lazily (dynamic import) so the library only ships to users who have a
// key configured. The default build stays lean and sends zero data.
//
//   VITE_PUBLIC_POSTHOG_KEY   your PostHog project API key (phc_...)
//   VITE_PUBLIC_POSTHOG_HOST  optional, defaults to US cloud. Use https://eu.i.posthog.com for EU.

const KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let ph = null;        // the posthog instance once loaded
let starting = false; // guards against double init

export function analyticsEnabled() {
  return !!KEY;
}

export async function initAnalytics() {
  if (ph || starting || !KEY) return;
  starting = true;
  try {
    const mod = await import("posthog-js");
    ph = mod.default;
    ph.init(KEY, {
      api_host: HOST,
      person_profiles: "identified_only", // anonymous events by default; no profile spam
      capture_pageview: false,            // SPA: we capture route changes ourselves (see capturePageview)
      capture_pageleave: true,
      autocapture: true,                  // posthog masks text-input values by default, so chat text is not sent
    });
    ph.capture("$pageview"); // initial load (route effect captures subsequent changes)
  } catch {
    starting = false; // let a later call retry if the chunk failed to load
  }
}

export function capture(event, props) {
  if (ph) ph.capture(event, props);
}

export function capturePageview(props) {
  if (ph) ph.capture("$pageview", props);
}

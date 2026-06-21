import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initAnalytics } from "./lib/analytics.js";

initAnalytics(); // no-op unless VITE_PUBLIC_POSTHOG_KEY is set

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

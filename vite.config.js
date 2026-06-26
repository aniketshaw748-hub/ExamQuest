import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { geminiPlugin } from "./vite-gemini.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      tailwindcss(),
      geminiPlugin(env.GEMINI_API_KEY, {
        REPORT_WEBHOOK_URL: env.REPORT_WEBHOOK_URL,
        GITHUB_TOKEN: env.GITHUB_TOKEN,
        GITHUB_REPO: env.GITHUB_REPO,
      }),
    ],
    server: { port: 5174 },
  };
});

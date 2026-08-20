// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Custom domain on GitHub Pages: https://pier.runloom.ai
export default defineConfig({
  site: "https://pier.runloom.ai",
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en", "ja", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh",
        locales: {
          zh: "zh-CN",
          en: "en",
          ja: "ja",
          ko: "ko",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

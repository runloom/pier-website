// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// GitHub Pages project site: https://runloom.github.io/pier-website/
export default defineConfig({
  site: "https://runloom.github.io",
  base: "/pier-website",
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

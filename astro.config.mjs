// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Custom domain on GitHub Pages: https://pier.codes
export default defineConfig({
  site: "https://pier.codes",
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en", "ja", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // 告知搜索引擎各 URL 的最近变更时间（每次构建时刷新）
      lastmod: new Date(),
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

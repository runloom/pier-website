import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";
import { zh } from "./zh";
import type { Dict } from "./zh";

export const LOCALES = ["zh", "en", "ja", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { html: string; og: string; hreflang: string; short: string }
> = {
  zh: { html: "zh-CN", og: "zh_CN", hreflang: "zh-CN", short: "中" },
  en: { html: "en", og: "en_US", hreflang: "en", short: "EN" },
  ja: { html: "ja", og: "ja_JP", hreflang: "ja", short: "JA" },
  ko: { html: "ko", og: "ko_KR", hreflang: "ko", short: "KO" },
};

export function getDict(locale: Locale): Dict {
  switch (locale) {
    case "en":
      return en;
    case "ja":
      return ja;
    case "ko":
      return ko;
    default:
      return zh;
  }
}

/** 站点 base（GitHub Pages project path），保证不带尾斜杠。 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** base 感知的站内路径。 */
export function withBase(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** 某 locale 的首页路径（zh 为默认语言，不带前缀）。 */
export function localeHome(locale: Locale): string {
  return locale === "zh" ? withBase("/") : withBase(`/${locale}/`);
}

export function htmlLang(locale: Locale): string {
  return LOCALE_META[locale].html;
}

export function ogLocale(locale: Locale): string {
  return LOCALE_META[locale].og;
}

import { PIER_RELEASES_LATEST_API, PIER_REPO } from "../lib/github";

/** 仓库与外链常量（单一来源）。 */
export const REPO = PIER_REPO;
export const REPO_API_LATEST = PIER_RELEASES_LATEST_API;
export const LINKS = {
  releases: `${REPO}/releases`,
  latestRelease: `${REPO}/releases/latest`,
  issues: `${REPO}/issues`,
  changelog: `${REPO}/blob/main/CHANGELOG.md`,
  docsIndex: `${REPO}/blob/main/docs/README.md`,
  cliManual: `${REPO}/blob/main/.pier/canvases/pier-cli-user-manual/README.md`,
  plugins: `${REPO}/blob/main/docs/plugins.md`,
  development: `${REPO}/blob/main/docs/development.md`,
  contributing: `${REPO}/blob/main/CONTRIBUTING.md`,
  security: `${REPO}/blob/main/SECURITY.md`,
  license: `${REPO}/blob/main/LICENSE`,
  trademarks: `${REPO}/blob/main/TRADEMARKS.md`,
  licensing: `${REPO}/blob/main/docs/legal/licensing.md`,
} as const;

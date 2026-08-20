import { en } from "./en";
import { zh } from "./zh";
import type { Dict } from "./zh";

export const LOCALES = ["zh", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export function getDict(locale: Locale): Dict {
  return locale === "en" ? en : zh;
}

/** 站点 base（GitHub Pages project path），保证不带尾斜杠。 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** base 感知的站内路径。 */
export function withBase(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** 某 locale 的首页路径（zh 为默认语言，不带前缀）。 */
export function localeHome(locale: Locale): string {
  return locale === "zh" ? withBase("/") : withBase("/en/");
}

export function htmlLang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}

export function ogLocale(locale: Locale): string {
  return locale === "zh" ? "zh_CN" : "en_US";
}

/** 仓库与外链常量（单一来源）。 */
export const REPO = "https://github.com/runloom/pier";
export const REPO_API_LATEST = "https://api.github.com/repos/runloom/pier/releases/latest";
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

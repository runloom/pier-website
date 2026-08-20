// 生成 1200×630 的 Open Graph 分享图（public/og.png）。
// 一次性脚本：node scripts/generate-og.mjs（改品牌/文案后重跑并提交产物）。
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));

const logoRaw = await readFile(new URL("../public/logo.svg", import.meta.url), "utf8");
// 嵌套 svg：重设放置属性，保留 viewBox
const logo = logoRaw.replace(
  /^<svg [^>]*>/,
  '<svg x="472" y="64" width="256" height="207" viewBox="0 0 210 170">'
);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="chart-grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="rgba(210,222,255,0.05)" stroke-width="1"/>
    </pattern>
    <radialGradient id="berth" cx="0.5" cy="0.38" r="0.62">
      <stop offset="0" stop-color="#8549ff" stop-opacity="0.34"/>
      <stop offset="0.5" stop-color="#542ee5" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#542ee5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#b66cff" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#8549ff"/>
      <stop offset="1" stop-color="#b66cff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#070b15"/>
  <rect width="1200" height="630" fill="url(#chart-grid)"/>
  <rect width="1200" height="630" fill="url(#berth)"/>

  ${logo}

  <text x="600" y="382" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="26" fill="#e9edf6">PIER</text>
  <rect x="500" y="412" width="200" height="2" fill="url(#rule)"/>

  <text x="600" y="472" text-anchor="middle" font-family="PingFang SC, Helvetica Neue, sans-serif" font-size="31" fill="#a2acc2">本地 AI 开发工作台 · The local AI dev workbench</text>

  <text x="600" y="564" text-anchor="middle" font-family="Menlo, monospace" font-size="20" letter-spacing="2" fill="#69748f">macOS · Apple Silicon / Intel</text>
</svg>`;

await sharp(Buffer.from(svg), { density: 72 })
  .png()
  .toFile(`${root}public/og.png`);

console.log("public/og.png generated");

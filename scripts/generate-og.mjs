// Generate the 1200×630 social card from the same approved app-icon source.
// Use --out-dir for non-mutating freshness tests.
import { mkdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
export async function generateOgAsset(options = {}) {
  const outputDirectory = resolve(options.outputDirectory ?? join(root, "public"));
  const logoPath = resolve(options.logoPath ?? join(root, "public", "logo.svg"));
  await mkdir(outputDirectory, { recursive: true });
  const logoRaw = await readFile(logoPath, "utf8");
  if (!/<svg\b[^>]*viewBox="0 0 1024 1024"/.test(logoRaw)) {
    throw new Error("public/logo.svg must use the canonical 0 0 1024 1024 viewBox");
  }
  const logo = logoRaw
    .replace(/^<\?xml[^>]*>\s*/, "")
    .replace(
      /<svg\b[^>]*>/,
      '<svg x="482" y="42" width="236" height="236" viewBox="102 102 820 820" aria-hidden="true">'
    );

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="og-grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="#8549ff" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
    <radialGradient id="og-violet-glow" cx="0.42" cy="0.22" r="0.7">
      <stop offset="0" stop-color="#8549ff" stop-opacity="0.26"/>
      <stop offset="0.58" stop-color="#542ee5" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#542ee5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="og-blue-glow" cx="0.72" cy="0.32" r="0.58">
      <stop offset="0" stop-color="#b66cff" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#542ee5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="og-rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8549ff" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#8549ff"/>
      <stop offset="1" stop-color="#b66cff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#0c1828"/>
  <rect width="1200" height="630" fill="url(#og-grid)"/>
  <rect width="1200" height="630" fill="url(#og-violet-glow)"/>
  <rect width="1200" height="630" fill="url(#og-blue-glow)"/>

  ${logo}

  <text x="600" y="385" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="24" fill="#f3f6fb">PIER</text>
  <rect x="490" y="416" width="220" height="2" fill="url(#og-rule)"/>
  <text x="600" y="474" text-anchor="middle" font-family="PingFang SC, Helvetica Neue, sans-serif" font-size="31" fill="#bdc9d9">本地 AI 开发工作台 · The local AI dev workbench</text>
  <text x="600" y="564" text-anchor="middle" font-family="Menlo, monospace" font-size="20" letter-spacing="2" fill="#8392a8">macOS · Apple Silicon / Intel</text>
</svg>`;

  await sharp(Buffer.from(svg), { density: 72 })
    .png()
    .toFile(join(outputDirectory, "og.png"));
}

function outputDirectoryFromArgs(args) {
  const outputFlag = args.indexOf("--out-dir");
  if (outputFlag < 0) {
    return join(root, "public");
  }
  if (!args[outputFlag + 1]) {
    throw new Error("--out-dir requires a directory");
  }
  return args[outputFlag + 1];
}

const isDirectExecution =
  process.argv[1] !== undefined &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectExecution) {
  const outputDirectory = outputDirectoryFromArgs(process.argv.slice(2));
  await generateOgAsset({ outputDirectory });
  console.log(`Generated OG image in ${resolve(outputDirectory)}`);
}

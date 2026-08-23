// 从 public/logo.svg 生成紧裁切的站标：
//   public/mark.svg            横向紧裁，给页头 / 页脚
//   public/favicon.svg         方形居中，铺满标签栏
//   public/favicon-32.png      PNG 回退
//   public/apple-touch-icon.png  180×180，深色底
//
// 改 logo.svg 后重跑：node scripts/generate-favicon.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const logoPath = new URL("../public/logo.svg", import.meta.url);
const logoRaw = await readFile(logoPath, "utf8");

const VIEW_W = 210;
const VIEW_H = 170;
const TRIM_ALPHA = 12;

const { data, info } = await sharp(Buffer.from(logoRaw), { density: 400 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const a = data[(y * width + x) * channels + 3];
    if (a > TRIM_ALPHA) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

const inkX = (VIEW_W * minX) / width;
const inkY = (VIEW_H * minY) / height;
const inkW = (VIEW_W * (maxX - minX + 1)) / width;
const inkH = (VIEW_H * (maxY - minY + 1)) / height;

function withViewBox(svg, viewBox, sizeW, sizeH) {
  return svg.replace(
    /^<svg [^>]*>/,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${sizeW}" height="${sizeH}" role="img" aria-label="Pier">`
  );
}

function fmt(n) {
  return n.toFixed(3).replace(/\.?0+$/, "");
}

function viewBoxRect(x, y, w, h) {
  return `${fmt(x)} ${fmt(y)} ${fmt(w)} ${fmt(h)}`;
}

function paddedRect(x, y, w, h, padRatio) {
  const px = w * padRatio;
  const py = h * padRatio;
  return [x - px, y - py, w + px * 2, h + py * 2];
}

function coverSquare(x, y, w, h, fill) {
  // 以较长边铺满方形（contain）：完整保留左右坞臂，标签栏里仍够大。
  const side = Math.max(w, h) / fill;
  return [x + w / 2 - side / 2, y + h / 2 - side / 2, side, side];
}

const markVb = viewBoxRect(...paddedRect(inkX, inkY, inkW, inkH, 0.03));
const faviconVb = viewBoxRect(...coverSquare(inkX, inkY, inkW, inkH, 0.88));

const markSvg = withViewBox(logoRaw, markVb, 48, 36);
const faviconSvg = withViewBox(logoRaw, faviconVb, 32, 32);

await writeFile(`${root}public/mark.svg`, markSvg);
await writeFile(`${root}public/favicon.svg`, faviconSvg);

await sharp(Buffer.from(faviconSvg), { density: 384 })
  .resize(32, 32)
  .png()
  .toFile(`${root}public/favicon-32.png`);

await sharp(Buffer.from(faviconSvg), { density: 384 })
  .resize(180, 180)
  .flatten({ background: { r: 7, g: 11, b: 21 } })
  .png()
  .toFile(`${root}public/apple-touch-icon.png`);

console.log("favicon assets generated", {
  ink: { inkX, inkY, inkW, inkH },
  markVb,
  faviconVb,
});

// Generate every website icon from public/logo.svg, which must stay a
// byte copy of pier/build/app-icon-source.svg. Use --out-dir for tests.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));

function withRoot(svg, { height, viewBox, width }) {
  return svg.replace(
    /<svg\b[^>]*>/,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}">`
  );
}

const OPTICAL_VIEWBOX = "102 102 820 820";

export async function generateFaviconAssets(options = {}) {
  const outputDirectory = resolve(options.outputDirectory ?? join(root, "public"));
  const logoPath = resolve(options.logoPath ?? join(root, "public", "logo.svg"));
  const logoRaw = await readFile(logoPath, "utf8");
  if (!/<svg\b[^>]*viewBox="0 0 1024 1024"/.test(logoRaw)) {
    throw new Error("public/logo.svg must use the canonical 0 0 1024 1024 viewBox");
  }
  if (/<(?:image|use)\b[^>]*(?:href|xlink:href)=/i.test(logoRaw)) {
    throw new Error("public/logo.svg must remain self-contained");
  }
  await mkdir(outputDirectory, { recursive: true });

  const markSvg = withRoot(logoRaw, {
    height: 36,
    viewBox: OPTICAL_VIEWBOX,
    width: 36,
  });
  const faviconSvg = withRoot(logoRaw, {
    height: 32,
    viewBox: OPTICAL_VIEWBOX,
    width: 32,
  });

  await Promise.all([
    writeFile(join(outputDirectory, "mark.svg"), markSvg),
    writeFile(join(outputDirectory, "favicon.svg"), faviconSvg),
    sharp(Buffer.from(faviconSvg), { density: 384 })
      .resize(32, 32)
      .png()
      .toFile(join(outputDirectory, "favicon-32.png")),
    sharp(Buffer.from(faviconSvg), { density: 384 })
      .resize(16, 16)
      .png()
      .toFile(join(outputDirectory, "favicon-16.png")),
    sharp(Buffer.from(faviconSvg), { density: 384 })
      .resize(180, 180)
      .flatten({ background: { r: 20, g: 24, b: 32 } })
      .png()
      .toFile(join(outputDirectory, "apple-touch-icon.png")),
  ]);
}

function outputDirectoryFromArgs(args) {
  const outputFlag = args.indexOf("--out-dir");
  if (outputFlag < 0) {
    return undefined;
  }
  const outputDirectory = args[outputFlag + 1];
  if (!outputDirectory) {
    throw new Error("--out-dir requires a directory path");
  }
  return outputDirectory;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const outputDirectory = outputDirectoryFromArgs(process.argv.slice(2));
  await generateFaviconAssets(
    outputDirectory ? { outputDirectory } : undefined
  );
  console.log(
    `Generated favicon assets in ${resolve(outputDirectory ?? join(root, "public"))}`
  );
}

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import sharp from "sharp";
import { generateFaviconAssets } from "../scripts/generate-favicon.mjs";
import { generateOgAsset } from "../scripts/generate-og.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDirectory = join(root, "public");
const faviconGenerator = join(root, "scripts", "generate-favicon.mjs");
const ogGenerator = join(root, "scripts", "generate-og.mjs");
const approvedSourceHash =
  "146b1894c407d2d50cef919c5ce6d6d5983ab56247453e623729e0223264d2d8";
const derivedAssets = [
  "mark.svg",
  "favicon.svg",
  "favicon-16.png",
  "favicon-32.png",
  "apple-touch-icon.png",
  "og.png",
];

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function meanAbsDiff(left, right) {
  assert.equal(left.length, right.length, "og.png region size mismatch");
  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }
  return sum / left.length;
}

function svgBody(source) {
  return source
    .replace(/^<\?xml[^>]*>\s*/, "")
    .replace(/^<svg\b[^>]*>/, "");
}

const generatorSources = await Promise.all([
  readFile(faviconGenerator, "utf8"),
  readFile(ogGenerator, "utf8"),
]);
const supportsTemporaryOutput = generatorSources.every((source) =>
  source.includes("--out-dir")
);

test("the website master is the approved Pier app icon", async () => {
  const logo = await readFile(join(publicDirectory, "logo.svg"));
  const source = logo.toString("utf8");
  assert.equal(sha256(logo), approvedSourceHash);
  assert.match(source, /viewBox="0 0 1024 1024"/);
  for (const id of [
    "pier-body",
    "pier-chevron",
    "pier-underscore",
    "pier-berth",
  ]) {
    assert.match(source, new RegExp(`id="${id}"`));
  }
  for (const color of ["#ffffff", "#8549ff", "#542ee5", "#1e2430"]) {
    assert.match(source, new RegExp(color, "i"));
  }
  assert.doesNotMatch(source, /#55aef4|#9bd9ff/i);
  assert.doesNotMatch(
    source,
    /terminal-frame|screen-layer|glyph-fill|berth-fill|terminal-shadow-and-halo/
  );

  if (process.env.PIER_APP_ICON_SOURCE) {
    assert.deepEqual(logo, await readFile(process.env.PIER_APP_ICON_SOURCE));
  }
});

test("brand generators support isolated freshness checks", () => {
  assert.equal(supportsTemporaryOutput, true);
});

test(
  "every committed web icon is freshly generated from the master",
  { skip: !supportsTemporaryOutput },
  async () => {
    const output = await mkdtemp(join(tmpdir(), "pier-site-brand-"));
    try {
      await generateFaviconAssets({ outputDirectory: output });
      await generateOgAsset({ outputDirectory: output });
      for (const asset of derivedAssets.filter((asset) => asset !== "og.png")) {
        assert.equal(
          sha256(await readFile(join(output, asset))),
          sha256(await readFile(join(publicDirectory, asset))),
          `${asset} is stale`
        );
      }
      // Body text antialiasing differs across macOS/Linux, so compare the
      // textless top band. SVG rasterization still differs by platform; use
      // mean abs diff instead of a byte hash. A stale or swapped icon is far
      // above this threshold.
      const topCardRegion = { height: 300, left: 0, top: 0, width: 1200 };
      const [generatedOg, committedOg] = await Promise.all([
        sharp(join(output, "og.png")).extract(topCardRegion).raw().toBuffer(),
        sharp(join(publicDirectory, "og.png"))
          .extract(topCardRegion)
          .raw()
          .toBuffer(),
      ]);
      assert.ok(
        meanAbsDiff(generatedOg, committedOg) < 6,
        "og.png icon is stale"
      );
    } finally {
      await rm(output, { force: true, recursive: true });
    }
  }
);

test("the small SVGs preserve the master artwork and use the optical crop", async () => {
  const logo = await readFile(join(publicDirectory, "logo.svg"), "utf8");
  const mark = await readFile(join(publicDirectory, "mark.svg"), "utf8");
  const favicon = await readFile(join(publicDirectory, "favicon.svg"), "utf8");
  assert.equal(svgBody(mark), svgBody(logo));
  assert.equal(svgBody(favicon), svgBody(logo));
  assert.match(mark, /viewBox="102 102 820 820"[^>]*width="36" height="36"/);
  assert.match(favicon, /viewBox="102 102 820 820"[^>]*width="32" height="32"/);
});

test("raster brand assets have the required dimensions and opacity", async () => {
  const favicon = await sharp(join(publicDirectory, "favicon-32.png")).metadata();
  assert.equal(favicon.width, 32);
  assert.equal(favicon.height, 32);
  assert.equal(favicon.hasAlpha, true);

  const touch = await sharp(
    join(publicDirectory, "apple-touch-icon.png")
  ).metadata();
  assert.equal(touch.width, 180);
  assert.equal(touch.height, 180);
  assert.equal(touch.hasAlpha, false);

  const og = await sharp(join(publicDirectory, "og.png")).metadata();
  assert.equal(og.width, 1200);
  assert.equal(og.height, 630);
});

test("all real website consumers reference the generated brand set", async () => {
  const [header, footer, base] = await Promise.all([
    readFile(join(root, "src/components/Header.astro"), "utf8"),
    readFile(join(root, "src/components/Footer.astro"), "utf8"),
    readFile(join(root, "src/layouts/Base.astro"), "utf8"),
  ]);
  for (const chrome of [header, footer]) {
    assert.match(chrome, /src=\{withBase\("\/mark\.svg"\)\}/);
    assert.match(chrome, /width="36" height="36"/);
  }
  for (const asset of [
    "/favicon.svg",
    "/favicon-16.png",
    "/favicon-32.png",
    "/apple-touch-icon.png",
    "/og.png",
  ]) {
    assert.match(base, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(base, /property="og:image" content=\{ogImage\.href\}/);
  assert.match(base, /name="twitter:image" content=\{ogImage\.href\}/);
  assert.match(base, /image: ogImage\.href/);
});

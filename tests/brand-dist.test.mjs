import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDirectory = join(root, "public");
const distDirectory = join(root, "dist");
const brandAssets = [
  "logo.svg",
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

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await htmlFiles(path)));
    } else if (entry.name.endsWith(".html")) {
      files.push(path);
    }
  }
  return files;
}

test("Astro copies every public brand asset byte-for-byte", async () => {
  for (const asset of brandAssets) {
    assert.equal(
      sha256(await readFile(join(distDirectory, asset))),
      sha256(await readFile(join(publicDirectory, asset))),
      asset
    );
  }
});

test("every rendered page references the complete brand set", async () => {
  const pages = await htmlFiles(distDirectory);
  assert.ok(pages.length > 0);
  for (const page of pages) {
    const html = await readFile(page, "utf8");
    for (const asset of [
      "/mark.svg",
      "/favicon.svg",
      "/favicon-16.png",
      "/favicon-32.png",
      "/apple-touch-icon.png",
    ]) {
      assert.match(html, new RegExp(asset.replace(".", "\\.")), page);
    }
    assert.ok(
      html.split("https://pier.codes/og.png").length - 1 >= 3,
      `${page} must reuse the same OG image for Open Graph, Twitter, and JSON-LD`
    );
  }
});

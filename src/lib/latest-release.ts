import { PIER_RELEASES_LATEST_API } from "./github";

export interface ReleaseAsset {
  name: string;
  url: string;
}

export interface LatestRelease {
  arm64?: ReleaseAsset;
  tag: string;
  x64?: ReleaseAsset;
}

interface GithubReleaseAsset {
  browser_download_url: string;
  name: string;
}

interface GithubRelease {
  assets?: GithubReleaseAsset[];
  tag_name?: string;
}

function isDmg(name: string): boolean {
  return name.endsWith(".dmg");
}

function pickArm64(dmgs: GithubReleaseAsset[]): GithubReleaseAsset | undefined {
  return dmgs.find((asset) => asset.name.includes("arm64"));
}

/** electron-builder：Intel dmg 默认无 arch 后缀（`Pier-<ver>.dmg`），也可能带 x64。 */
function pickX64(dmgs: GithubReleaseAsset[]): GithubReleaseAsset | undefined {
  const named = dmgs.find(
    (asset) => /x64|x86_64/i.test(asset.name) && !asset.name.includes("arm64")
  );
  return named ?? dmgs.find((asset) => !asset.name.includes("arm64"));
}

export function parseLatestRelease(data: GithubRelease): LatestRelease | null {
  if (!data.tag_name) {
    return null;
  }
  const dmgs = (data.assets ?? []).filter((asset) => isDmg(asset.name));
  const arm = pickArm64(dmgs);
  const intel = pickX64(dmgs);
  return {
    tag: data.tag_name,
    ...(arm
      ? { arm64: { name: arm.name, url: arm.browser_download_url } }
      : {}),
    ...(intel
      ? { x64: { name: intel.name, url: intel.browser_download_url } }
      : {}),
  };
}

/** 构建期拉取（CI 可带 GITHUB_TOKEN）。浏览器请自行 fetch + parseLatestRelease。 */
export async function fetchLatestRelease(): Promise<LatestRelease | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "pier-website",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const res = await fetch(PIER_RELEASES_LATEST_API, { headers });
    if (!res.ok) {
      return null;
    }
    return parseLatestRelease((await res.json()) as GithubRelease);
  } catch {
    return null;
  }
}

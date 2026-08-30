# Pier 官网

[Pier](https://github.com/runloom/pier) 的官方网站。几个 AI 终端开着，谁在等你一眼能看见。静态站点，中英日韩，明暗双主题，经 GitHub Pages 发布。

- 线上地址：`https://pier.codes`（GitHub Pages 默认地址 `https://runloom.github.io/pier-website/` 会跳转到自定义域名）
- 技术栈：[Astro](https://astro.build) + Tailwind CSS v4，零框架运行时，仅三处轻量脚本（主题切换 / 语言跟随系统 / 最新版本号获取）

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321/
pnpm check      # Astro 诊断 + 品牌资源新鲜度检查
pnpm build      # 检查品牌资源，产出并复核 dist/
pnpm preview    # 本地预览构建产物
```

## 结构

```
src/
├── styles/global.css      # 设计系统：主题令牌（明/暗）、氛围纹理、动效原语
├── i18n/                  # zh（默认）/ en 全量文案字典 + locale 工具
├── layouts/Base.astro     # SEO head（canonical/hreflang/OG/JSON-LD）+ 主题防闪烁 + 语言跳转
├── assets/hero.png        # 首屏产品截图（构建时由 astro:assets 出多尺寸）
├── components/            # Hero、Workflow、Features、Download 等区块
└── pages/                 # /（中文）、/en/、/404
scripts/generate-*.mjs     # 从 public/logo.svg 生成全部站点图标与 OG
```

## 品牌图标

`public/logo.svg` 是官网唯一品牌源，内容与 Pier 主仓库的
`build/app-icon-source.svg` 逐字节一致。Header、Footer、favicon、Apple Touch 与 OG
都由它生成；不要分别手改派生资源。

同步主仓图标后运行：

```bash
pnpm brand:generate
PIER_APP_ICON_SOURCE=../pier/build/app-icon-source.svg pnpm test:brand
```

`pnpm build` 还会验证 `dist/` 中的品牌文件及所有页面引用，避免部署旧图标。

## 国际化

- URL：`/` 为中文（默认），`/en/` 为英文，`/ja/` 为日语，`/ko/` 为韩语；四者互为 hreflang alternate。
- 跟随系统：首次访问中文首页且无显式偏好时，按浏览器语言客户端跳转（`zh` 留在 `/`，`ja` → `/ja/`，`ko` → `/ko/`，其余 → `/en/`）。
  语言切换器的显式选择写入 `localStorage`（`pier-lang`）并优先于系统语言。
- 文案单一来源在 `src/i18n/zh.ts`（结构）与 `src/i18n/{en,ja,ko}.ts`（同构约束）。

## 主题

`light / dark / system` 三态，`localStorage`（`pier-theme`）持久化，`<head>` 内联脚本防闪烁。
首屏使用真实产品窗口截图（`src/assets/hero.png`），深色工作区与产品默认形态一致。

## 部署（GitHub Pages）

推送 `main` 后由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 自动构建发布。

首次启用：

1. 推送本仓库到 GitHub `runloom/pier-website`。
2. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
3. 站点 URL 在 [`astro.config.mjs`](astro.config.mjs) 的 `site`（当前为 `https://pier.codes`）。
   自定义域名：`public/CNAME` 写域名，仓库 Settings → Pages → Custom domain 填 `pier.codes`。
   `pier.codes` 是根域名，DNS 请加 4 条 A 记录（`@` → GitHub Pages IP），不要用子域名那种单条 CNAME。
   建议同时为 `www` 加 CNAME → `runloom.github.io`，GitHub 会自动把 `www.pier.codes` 跳到 `pier.codes`。

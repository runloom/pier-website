# Pier 官网

[Pier](https://github.com/runloom/pier)（本地 AI 开发工作台）的官方网站。静态站点，中英双语，明暗双主题，经 GitHub Pages 发布。

- 线上地址：`https://pier.runloom.ai`（GitHub Pages 默认地址 `https://runloom.github.io/pier-website/` 会跳转到自定义域名）
- 技术栈：[Astro](https://astro.build) + Tailwind CSS v4，零框架运行时，仅三处轻量脚本（主题切换 / 语言跟随系统 / 最新版本号获取）

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321/
pnpm check      # astro check（类型与模板诊断）
pnpm build      # 产出 dist/
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
scripts/generate-og.mjs    # 生成 public/og.png（改文案后重跑并提交产物）
```

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
3. 站点 URL 在 [`astro.config.mjs`](astro.config.mjs) 的 `site`（当前为 `https://pier.runloom.ai`）。
   自定义域名：`public/CNAME` 写域名，仓库 Settings → Pages → Custom domain 填 `pier.runloom.ai`，
   并在 DNS 为 `pier` 添加 CNAME 到 `runloom.github.io`（不要带仓库路径）。

# Pier 官网

[Pier](https://github.com/runloom/pier)（本地 AI 开发工作台）的官方网站。静态站点，中英双语，明暗双主题，经 GitHub Pages 发布。

- 线上地址（部署后）：`https://runloom.github.io/pier-website/`
- 技术栈：[Astro](https://astro.build) + Tailwind CSS v4，零框架运行时，仅三处轻量脚本（主题切换 / 语言跟随系统 / 最新版本号获取）

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321/pier-website/
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
├── components/            # Hero、AppMockup、Workflow、Features、Download 等区块
└── pages/                 # /（中文）、/en/、/404
scripts/generate-og.mjs    # 生成 public/og.png（改文案后重跑并提交产物）
```

## 国际化

- URL：`/` 为中文（默认），`/en/` 为英文；两者互为 hreflang alternate。
- 跟随系统：首次访问中文首页且无显式偏好时，按浏览器语言客户端跳转到 `/en/`；
  语言切换器的显式选择写入 `localStorage`（`pier-lang`）并优先于系统语言。
- 文案单一来源在 `src/i18n/zh.ts`（结构）与 `src/i18n/en.ts`（同构约束）。

## 主题

`light / dark / system` 三态，`localStorage`（`pier-theme`）持久化，`<head>` 内联脚本防闪烁。
产品 mockup 与终端演示固定深色（`class="dark"` 局部作用域），与产品形态一致。

## 部署（GitHub Pages）

推送 `main` 后由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 自动构建发布。

首次启用：

1. 推送本仓库到 GitHub `runloom/pier-website`。
2. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
3. 站点 URL 与 base path 在 [`astro.config.mjs`](astro.config.mjs)（`site` + `base`）。
   如改用自定义域名：`site` 换成域名、`base` 删除，并在 `public/` 加 `CNAME`，
   同步更新 `public/robots.txt` 里的 sitemap 地址。

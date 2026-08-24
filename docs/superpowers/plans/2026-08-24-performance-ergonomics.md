# 官网「性能与手感」区块实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 pier-site 官网 Workflow 与 Features 之间新增「性能与手感」区块（Ghostty 内核叙事 + 命令面板仿真 + 真实键位卡），并把两处现有文案织入，四语言同步。

**Architecture:** 纯静态 Astro 组件，复用既有 `SectionHead`、主题令牌与 `data-reveal` 动效；文案单一来源在 `src/i18n/zh.ts`，en/ja/ko 由 `Dict` 类型强制同构。零新增运行时脚本。

**Tech Stack:** Astro + Tailwind CSS v4；无框架运行时。

**Spec:** `docs/superpowers/specs/2026-08-24-performance-ergonomics-design.md`（键位事实表与措辞边界以 spec 为准）

## Global Constraints

- 禁止新增任何 `<script>`；动效只允许既有 `caret-blink` 与 `data-reveal`。
- 性能/快捷键措辞不得超出 spec「产品事实依据」表；不出现任何基准数字。
- 键帽符号四语言一致：`⇧⌘P` `⌘P` `⌘T` `⌘D` `⌘B` `⌘F`。
- 每个字典编辑后必须保持 zh/en/ja/ko 结构同构（`pnpm check` 的 `Dict` 类型校验把关）。
- 颜色只用既有主题令牌（`--panel`、`--panel-2`、`--screen`、`--line(-strong)`、`--brand*` 等）；不加依赖、不加字体。
- 章节编号最终态：performance=03、features=04、cli=05。
- 命令：`pnpm check`（类型+模板）、`pnpm build`、`pnpm dev`（http://localhost:4321/）。
- 提交信息用仓库既有风格：`type: 中文描述`。

---

### Task 1: 四语言字典同步（文案契约，原子变更）

**Files:**
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/ja.ts`
- Modify: `src/i18n/ko.ts`

**Interfaces:**
- Produces: `dict.nav.performance: string`、`dict.performance`（结构见下方代码，含 `engine.points[3]`、`keys.groups[3]`、`keys.actions[3]`、`keys.shortcuts[6]`）、`dict.features.items[0].body`（新文案）、`dict.faq.items[5]`（新条目）、编号变更。Task 2 的组件只消费这些名称。

四个文件的编辑顺序必须一致：先改编号（避免插入 performance 后 `no: "03"/"04"` 出现歧义），再插 performance 节，再改其余。每个文件六处编辑：

1. `meta.description` 追加内核句；
2. `nav` 增加 `performance`（放在 `workflow` 之后）；
3. `cli.no`: `"04"` → `"05"`；
4. `features.no`: `"03"` → `"04"`；
5. 在 `workflow` 块结束与 `features: {` 之间插入 `performance` 节；
6. `features.items[0].body` 替换 + `faq.items` 末尾追加一条。

- [ ] **Step 1.1: zh.ts —— 六处编辑**

`meta.description` 整体替换为：

```ts
    description:
      "让 Claude Code、Codex、OpenCode 等原生 CLI 在本地项目中持续运行；在同一个可保存的工作区查看会话状态、回到终端并审查 Git 变更。终端基于 Ghostty 内核，GPU 加速渲染。macOS 免费开源。",
```

`nav` 中 `workflow: "工作流",` 之后插入一行：

```ts
    performance: "性能",
```

`cli` 块的 `no: "04",` 改为 `no: "05",`；`features` 块的 `no: "03",` 改为 `no: "04",`。

在 `workflow` 块的闭合 `},` 与 `features: {` 之间插入整节：

```ts
  performance: {
    no: "03",
    label: "性能与手感",
    title: "快是内核给的，顺手是设计出来的",
    lead: "终端内核决定下限，操作路径决定手感。Pier 把两者都当作产品能力来打磨。",
    engine: {
      title: "Ghostty 内核，原生到底",
      points: [
        {
          title: "原生渲染",
          body: "终端由 Ghostty native（Swift / Zig 编译的 XCFramework）驱动，GPU 加速渲染，大段输出滚动依然跟手。",
        },
        {
          title: "会话比界面活得久",
          body: "界面重载或重启后，正在运行的终端仍可继续使用。",
        },
        {
          title: "为智能体 TUI 打磨",
          body: "Pier 维护自己的 Ghostty 补丁集，处理光标可见性、输入焦点转移这类影响智能体体验的细节。",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "一切皆可 ⇧⌘P",
      note: "命令面板聚合全部动作：按最近使用排序、支持模糊搜索，官方插件也能向它贡献命令。设置页可搜索快捷键，绑定支持自定义。",
      mruBadge: "最近使用",
      paletteQuery: "切换主题",
      groups: ["视图", "面板", "文件"],
      actions: ["切换主题", "向右分屏", "快速打开…"],
      shortcuts: [
        { keys: "⇧⌘P", label: "命令面板" },
        { keys: "⌘P", label: "快速打开文件" },
        { keys: "⌘T", label: "新建标签" },
        { keys: "⌘D", label: "分屏" },
        { keys: "⌘B", label: "折叠侧栏" },
        { keys: "⌘F", label: "终端搜索" },
      ],
    },
  },
```

`features.items[0]`（原生终端）的 `body` 替换为：

```ts
        body: "基于 Ghostty 内核的原生终端，GPU 加速渲染；在项目或工作树中运行 Shell 和 CLI 编程智能体，界面重载后正在运行的会话仍可继续使用。",
```

`faq.items` 数组末尾（最后一个 `},` 之后、`],` 之前）追加：

```ts
      {
        q: "Pier 用什么终端内核？",
        a: "终端基于 Ghostty 的原生内核（Swift / Zig），由 GPU 加速渲染。Pier 在其上维护针对智能体 TUI 场景的补丁；界面重载后，正在运行的终端仍可继续使用。",
      },
```

- [ ] **Step 1.2: en.ts —— 同构六处**

`meta.description` 替换为：

```ts
    description:
      "Keep Claude Code, Codex, OpenCode and other native CLIs running in your local projects. See session status across agents, return to the terminal, and review Git changes in one saveable workspace. The terminal runs on the Ghostty engine with GPU-accelerated rendering. Free and open source for macOS.",
```

`nav` 的 `workflow: "Workflow",` 后插入：

```ts
    performance: "Performance",
```

`cli` 的 `no` 改 `"05"`，`features` 的 `no` 改 `"04"`。`workflow` 块后插入：

```ts
  performance: {
    no: "03",
    label: "Performance & feel",
    title: "Fast comes from the engine. Smooth comes from design.",
    lead: "The terminal kernel sets the floor; the paths your fingers take set the feel. Pier treats both as product capabilities.",
    engine: {
      title: "Ghostty engine, native all the way down",
      points: [
        {
          title: "Native rendering",
          body: "Terminals are driven by Ghostty native (an XCFramework built from Swift / Zig) with GPU-accelerated rendering — heavy output stays smooth under load.",
        },
        {
          title: "Sessions outlive the UI",
          body: "After a UI reload or restart, running terminals remain usable.",
        },
        {
          title: "Polished for agent TUIs",
          body: "Pier maintains its own set of Ghostty patches for details that matter to agent work — cursor visibility, input focus handoff, and friends.",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "Everything is ⇧⌘P away",
      note: "The command palette gathers every action: fuzzy search ranked by recent use, and official plugins can contribute commands. Search shortcuts in Settings and remap bindings freely.",
      mruBadge: "Recent",
      paletteQuery: "Switch theme",
      groups: ["View", "Panels", "Files"],
      actions: ["Switch theme", "Split right", "Quick Open…"],
      shortcuts: [
        { keys: "⇧⌘P", label: "Command palette" },
        { keys: "⌘P", label: "Quick Open file" },
        { keys: "⌘T", label: "New tab" },
        { keys: "⌘D", label: "Split pane" },
        { keys: "⌘B", label: "Toggle sidebar" },
        { keys: "⌘F", label: "Find in terminal" },
      ],
    },
  },
```

`features.items[0].body` 替换为：

```ts
        body: "A native terminal built on the Ghostty engine with GPU-accelerated rendering. Run shells and CLI coding agents inside projects or worktrees — running sessions survive UI reloads.",
```

`faq.items` 末尾追加：

```ts
      {
        q: "Which terminal engine does Pier use?",
        a: "The terminal runs on Ghostty's native core (Swift / Zig) with GPU-accelerated rendering. Pier maintains patches on top of it for agent-TUI scenarios; running terminals survive UI reloads.",
      },
```

- [ ] **Step 1.3: ja.ts —— 同构六处**

`meta.description` 替换为：

```ts
    description:
      "Claude Code、Codex、OpenCode などのネイティブ CLI をローカルプロジェクトで動かし続け、セッション状態を確認し、ターミナルに戻り、Git の変更を同じ保存可能なワークスペースでレビューします。ターミナルは Ghostty エンジンによる GPU アクセラレーション描画。macOS 向け無料オープンソース。",
```

`nav` 的 `workflow: "ワークフロー",` 后插入：

```ts
    performance: "パフォーマンス",
```

编号同前（cli→`"05"`、features→`"04"`）。`workflow` 块后插入：

```ts
  performance: {
    no: "03",
    label: "パフォーマンスと手触り",
    title: "速さはエンジンから、手触りは設計から。",
    lead: "ターミナルカーネルが下限を決め、指の動く経路が手触りを決める。Pier は両方を製品機能として磨いています。",
    engine: {
      title: "Ghostty エンジン、徹底的にネイティブ",
      points: [
        {
          title: "ネイティブ描画",
          body: "ターミナルは Ghostty native（Swift / Zig 製 XCFramework）が駆動し、GPU アクセラレーションで描画します。大量出力のスクロールも滑らかに追従します。",
        },
        {
          title: "セッションは UI より長生き",
          body: "UI の再読み込みや再起動の後も、実行中のターミナルはそのまま利用できます。",
        },
        {
          title: "エージェント TUI への調整",
          body: "Pier は独自の Ghostty パッチを保守し、カーソル表示や入力フォーカスの引き継ぎなど、エージェント体験に関わる細部を仕上げています。",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "すべては ⇧⌘P から",
      note: "コマンドパレットにすべてのアクションを集約：あいまい検索と最近使用順の並び替えに対応し、公式プラグインもコマンドを提供できます。設定ではショートカットを検索でき、割り当ては自由に変更できます。",
      mruBadge: "最近使用",
      paletteQuery: "テーマを切り替え",
      groups: ["表示", "パネル", "ファイル"],
      actions: ["テーマを切り替え", "右に分割", "クイックオープン…"],
      shortcuts: [
        { keys: "⇧⌘P", label: "コマンドパレット" },
        { keys: "⌘P", label: "クイックオープン" },
        { keys: "⌘T", label: "新規タブ" },
        { keys: "⌘D", label: "ペイン分割" },
        { keys: "⌘B", label: "サイドバー切替" },
        { keys: "⌘F", label: "ターミナル内検索" },
      ],
    },
  },
```

`features.items[0].body` 替换为：

```ts
        body: "Ghostty エンジン基盤のネイティブターミナル。GPU アクセラレーション描画で、プロジェクトやワークツリー内で Shell や CLI コーディングエージェントを実行します。UI を再読み込みしても実行中のセッションはそのまま使えます。",
```

`faq.items` 末尾追加：

```ts
      {
        q: "Pier のターミナルエンジンは何ですか？",
        a: "ターミナルは Ghostty のネイティブコア（Swift / Zig）を基盤とし、GPU アクセラレーションで描画されます。Pier はエージェント TUI 向けの独自パッチを上乗せして保守しており、UI を再読み込みしても実行中のターミナルはそのまま使えます。",
      },
```

- [ ] **Step 1.4: ko.ts —— 同构六处**

`meta.description` 替换为：

```ts
    description:
      "Claude Code, Codex, OpenCode 같은 네이티브 CLI를 로컬 프로젝트에서 계속 실행하고, 세션 상태를 보고, 터미널로 돌아가 Git 변경을 같은 저장 가능한 워크스페이스에서 검토하세요. 터미널은 Ghostty 엔진 기반의 GPU 가속 렌더링을 사용합니다. macOS용 무료 오픈 소스.",
```

`nav` 的 `workflow: "워크플로",` 后插入：

```ts
    performance: "성능",
```

编号同前（cli→`"05"`、features→`"04"`）。`workflow` 块后插入：

```ts
  performance: {
    no: "03",
    label: "성능과 사용감",
    title: "빠름은 엔진에서, 편안함은 설계에서.",
    lead: "터미널 커널이 하한을 정하고, 손가락이 움직이는 경로가 사용감을 정합니다. Pier는 두 가지 모두를 제품 기능으로 다듬습니다.",
    engine: {
      title: "Ghostty 엔진, 끝까지 네이티브",
      points: [
        {
          title: "네이티브 렌더링",
          body: "터미널은 Ghostty native(Swift / Zig로 빌드한 XCFramework)가 구동하고 GPU 가속 렌더링을 사용합니다. 대량 출력 스크롤도 부드럽게 따라옵니다.",
        },
        {
          title: "세션은 UI보다 오래 삽니다",
          body: "UI를 다시 로드하거나 재시작한 후에도 실행 중인 터미널은 그대로 사용할 수 있습니다.",
        },
        {
          title: "에이전트 TUI에 맞춘 다듬기",
          body: "Pier는 자체 Ghostty 패치를 유지 관리하며, 커서 표시와 입력 포커스 전환 같은 에이전트 경험의 세부 사항을 다듬습니다.",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "모든 것은 ⇧⌘P에서",
      note: "커맨드 팔레트에 모든 동작을 모았습니다: 최근 사용 순으로 정렬되는 퍼지 검색, 공식 플러그인도 명령을 제공할 수 있습니다. 설정에서 단축키를 검색하고 자유롭게 재배정하세요.",
      mruBadge: "최근 사용",
      paletteQuery: "테마 전환",
      groups: ["보기", "패널", "파일"],
      actions: ["테마 전환", "오른쪽 분할", "빠른 열기…"],
      shortcuts: [
        { keys: "⇧⌘P", label: "커맨드 팔레트" },
        { keys: "⌘P", label: "빠른 파일 열기" },
        { keys: "⌘T", label: "새 탭" },
        { keys: "⌘D", label: "창 분할" },
        { keys: "⌘B", label: "사이드바 전환" },
        { keys: "⌘F", label: "터미널 내 검색" },
      ],
    },
  },
```

`features.items[0].body` 替换为：

```ts
        body: "Ghostty 엔진 기반의 네이티브 터미널로 GPU 가속 렌더링을 제공합니다. 프로젝트나 작업 트리에서 Shell과 CLI 코딩 에이전트를 실행하고, UI를 다시 로드해도 실행 중인 세션은 그대로 유지됩니다.",
```

`faq.items` 末尾追加：

```ts
      {
        q: "Pier는 어떤 터미널 엔진을 사용하나요?",
        a: "터미널은 Ghostty의 네이티브 코어(Swift / Zig)를 기반으로 GPU 가속 렌더링으로 그려집니다. Pier는 에이전트 TUI 시나리오를 위한 자체 패치를 유지 관리하며, UI를 다시 로드한 후에도 실행 중인 터미널은 그대로 사용할 수 있습니다.",
      },
```

- [ ] **Step 1.5: 类型校验**

Run: `pnpm check`
Expected: 0 errors（`Dict` 同构约束通过；若报缺键，对照 zh.ts 补齐对应语言）

- [ ] **Step 1.6: Commit**

```bash
git add src/i18n/zh.ts src/i18n/en.ts src/i18n/ja.ts src/i18n/ko.ts
git commit -m "feat(i18n): 四语言新增性能与手感文案，能力/CLI 编号顺延"
```

---

### Task 2: Performance 区块组件 + 样式 + 页面接线

**Files:**
- Create: `src/components/Performance.astro`
- Modify: `src/components/Landing.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: Task 1 的 `dict.performance`、`dict.nav.performance`；既有 `SectionHead`（props: `no/label/title/lead`）、`.caret`、`data-reveal`。
- Produces: `id="performance"` 区块；`.kbd` 全局类。

- [ ] **Step 2.1: 创建 `src/components/Performance.astro`**

```astro
---
import { getDict, type Locale } from "../i18n";
import SectionHead from "./SectionHead.astro";

interface Props {
  locale: Locale;
}

const dict = getDict(Astro.props.locale);
const { performance } = dict;
---

<section id="performance" class="relative">
  <div class="mx-auto max-w-6xl px-5 py-24 sm:py-28">
    <SectionHead
      no={performance.no}
      label={performance.label}
      title={performance.title}
      lead={performance.lead}
    />

    <div class="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
      <!-- 左列：Ghostty 内核 -->
      <div data-reveal>
        <h3 class="display text-[19px]">{performance.engine.title}</h3>
        <ul class="mt-6 space-y-5">
          {
            performance.engine.points.map((point) => (
              <li class="flex gap-3.5">
                <span class="mt-[7px] size-1.5 flex-none rounded-full bg-brand" aria-hidden="true" />
                <div>
                  <p class="text-[15px] font-semibold">{point.title}</p>
                  <p class="mt-1 text-[13.5px] leading-relaxed text-muted">{point.body}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <p class="mt-8 font-mono text-[12px] tracking-wide text-faint">
          {performance.engine.footnote}
        </p>
      </div>

      <!-- 右列：命令面板仿真 + 键位卡 -->
      <div data-reveal style="--reveal-delay: 0.08s">
        <h3 class="display text-[19px]">{performance.keys.title}</h3>

        <!-- 面板仿真：纯装饰，信息由下方键位卡与正文承载 -->
        <div
          class="mt-6 rounded-xl border border-line-strong bg-screen p-3 shadow-[var(--shadow-panel)]"
          aria-hidden="true"
        >
          <div class="flex items-center gap-2.5 rounded-lg border border-line bg-panel px-3 py-2 font-mono text-[13px]">
            <span class="text-term-green">&gt;</span>
            <span>{performance.keys.paletteQuery}</span>
            <span class="caret"></span>
          </div>
          <ul class="mt-2 space-y-0.5">
            {
              performance.keys.groups.map((group, i) => (
                <li class:list={["flex items-center gap-3 rounded-md px-3 py-2 text-[13px]", i === 0 && "bg-panel-2"]}>
                  <span class="w-12 flex-none font-mono text-[11px] uppercase tracking-wider text-faint">
                    {group}
                  </span>
                  <span class="text-muted">{performance.keys.actions[i]}</span>
                  {i === 0 && (
                    <span class="ml-auto rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10.5px] text-brand-ink">
                      {performance.keys.mruBadge}
                    </span>
                  )}
                </li>
              ))
            }
          </ul>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {
            performance.keys.shortcuts.map((shortcut) => (
              <div class="rounded-lg border border-line bg-panel/55 px-3.5 py-3">
                <div class="flex gap-1">
                  {[...shortcut.keys].map((key) => (
                    <kbd class="kbd">{key}</kbd>
                  ))}
                </div>
                <p class="mt-2 text-[12.5px] text-muted">{shortcut.label}</p>
              </div>
            ))
          }
        </div>

        <p class="mt-5 text-[13px] leading-relaxed text-faint">{performance.keys.note}</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2.2: `global.css` 加 `.kbd`**

在 `.btn-ghost:hover { … }` 块之后、`/* 首屏产品截图… */` 注释之前插入：

```css
/* 键帽：键位卡与快捷键提示 */
.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.55em;
  height: 1.55em;
  padding: 0 0.4em;
  border: 1px solid var(--line-strong);
  border-bottom-width: 2px;
  border-radius: 6px;
  background: var(--panel-2);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1;
  color: var(--fg);
}
```

- [ ] **Step 2.3: `Landing.astro` 接线**

import 区（`Features` 之后按字母序）加：

```astro
import Performance from "./Performance.astro";
```

组件树中 `<Workflow locale={locale} />` 与 `<Features locale={locale} />` 之间插入：

```astro
<Performance locale={locale} />
```

- [ ] **Step 2.4: `Header.astro` 导航**

`nav` 数组中 `{ href: "#workflow", label: dict.nav.workflow },` 之后插入：

```ts
  { href: "#performance", label: dict.nav.performance },
```

（站点无移动端汉堡菜单，桌面 `md:flex` 导航从 5 项变 6 项，宽度余量足够。）

- [ ] **Step 2.5: 校验 + Commit**

Run: `pnpm check`
Expected: 0 errors

```bash
git add src/components/Performance.astro src/components/Landing.astro src/components/Header.astro src/styles/global.css
git commit -m "feat: 新增性能与手感区块（Ghostty 内核 + 命令面板与键位）"
```

---

### Task 3: 构建与目检验证矩阵

**Files:** 无新改动（发现问题则修复后重跑本任务）

- [ ] **Step 3.1: 构建**

Run: `pnpm build`
Expected: 成功产出 `dist/`

- [ ] **Step 3.2: 无新增脚本核对**

Run: `grep -c "<script" dist/index.html dist/en/index.html dist/ja/index.html dist/ko/index.html`
Expected: 各文件计数等于改动前基线（主题/语言/版本号三处脚本的既有计数；先在改动前的 `dist` 上跑一次记录基线，或在 git stash 下构建对照）。

- [ ] **Step 3.3: 浏览器目检矩阵**

启动 `pnpm dev`（http://localhost:4321/），用浏览器逐项目检并截图：

| 组合 | 检查点 |
| --- | --- |
| `/` `/en/` `/ja/` `/ko/` × 明/暗 | 新区块两栏布局、面板仿真的明暗表现、键帽对比度 |
| 390×844 移动宽度 | 左右两列纵向堆叠、键位卡 2 列不溢出 |
| 导航锚点 | 「性能」点击滚动到 `#performance`，scroll-margin 生效 |

Expected: 无溢出、无错位；`data-reveal` 正常显现；`prefers-reduced-motion` 下光标静止（系统开启该偏好时复查一次）。

- [ ] **Step 3.4: 收尾提交（如有修复）**

```bash
git add -A
git commit -m "fix: 性能与手感区块目检修正"
```

---

## Self-Review 记录

- Spec 覆盖：信息架构（Task 2.3/2.4）、区块双列（Task 2.1）、文案织入三处（Task 1 各语言）、编号顺延（Task 1 步骤 1）、样式（Task 2.2）、无障碍（Task 2.1 的 `aria-hidden` 与 `<kbd>`）、验证（Task 3）——无缺口。
- 占位符扫描：无 TBD/TODO；所有代码步骤给出完整内容。
- 类型一致性：组件消费的 `performance.*` 键名与 Task 1 四语言字典逐一对应；`groups/actions` 均为 3 元数组并以索引配对。

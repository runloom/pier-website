# 官网「性能与手感」区块设计

- 日期：2026-08-24
- 状态：设计已确认（用户选定方案 B：专属展示区）
- 范围：pier-site 单仓库；不改上游 runloom/pier

## 背景与问题

官网当前把能力压缩进六张特性卡，两个核心卖点完全没有呈现：

1. **基于 Ghostty 的高性能内核** —— 「原生终端」卡片只说“界面重载后会话仍在”，未提内核与性能；
2. **命令面板与快捷键的人体工程学** —— 全站无任何提及。

### 产品事实依据（均可在上游仓库溯源，禁止超出这些事实措辞）

| 事实 | 来源 |
| --- | --- |
| 终端依赖 Ghostty native（Swift / Zig / XCFramework），`zig@0.15` 编译 libghostty | 上游 `docs/development.md` 平台与依赖节 |
| Pier 维护自己的 Ghostty 补丁集（如光标可见性探针），处理 TUI 输入焦点细节 | 上游 CHANGELOG 0.1.27、补丁 `0104-cursor-visibility-probe` |
| 命令面板按最近使用排序（frecency/MRU），官方插件可贡献命令（QuickPick） | 上游 `src/main/services/command-palette-service.ts`、`plugins/api/renderer.ts` |
| 设置页支持搜索快捷键；绑定可自定义 | 上游 CHANGELOG 0.1.28；user keymap 机制 |
| 默认键位 | 上游 `src/shared/keybindings.ts` DEFAULT_KEYMAP |

核实过的默认键位（macOS 符号表示）：

| 键位 | 动作 | 命令 ID |
| --- | --- | --- |
| ⇧⌘P | 命令面板 | `pier.commandPalette.toggle` |
| ⌘P | 快速打开文件 | `pier.files.quickOpen` |
| ⌘T | 新建终端标签 | `pier.panel.newTerminal` |
| ⌘D | 向右分屏 | `pier.panel.splitRight` |
| ⌘B | 折叠/展开侧栏（文件树与变更树） | `pier.files.tree.toggle` 等 |
| ⌘F | 终端内搜索 | `pier.terminal.search` |

## 目标与非目标

**目标**

1. 两大卖点获得专属视觉区块，真实键位直接可见；
2. 所有性能/快捷键声明可溯源到上表；
3. 保持站点零框架运行时约束：不新增任何 `<script>`；
4. zh / en / ja / ko 四语言同步。

**非目标**

- 不改首屏主张（hero 标题、副标题、截图均不动）；
- 不编造性能基准数字；“GPU 加速渲染”只作为 Ghostty 内核的属性陈述；
- 不做 JS 驱动的交互式面板演示；
- 不改上游 README（其未提这两点属上游叙事节奏，不在本仓库范围）。

## 方案选型记录

- A · 轻量织入：仅改卡片文案。否决——卖点仍埋在网格里。
- **B · 专属展示区（选定）**：Workflow 之后新增「性能与手感」区块 + 定点织入。
- C · 升级为首屏主张：否决——稀释“不是另一套聊天界面”的差异化定位。

## 信息架构变更

1. 新组件 `src/components/Performance.astro`，锚点 `id="performance"`；
2. 插入位置：`Workflow` 与 `Features` 之间（先讲工作流，再讲引擎与手感，后列能力清单）；同步修改 `src/components/Landing.astro`；
3. 章节编号顺延：Features 03→04，CLI 04→05（四语言字典的 `no` 字段）；
4. Header 导航在「工作流」后插入「性能」（Performance / パフォーマンス / 성능），含移动端菜单；锚点加入 `[id]` scroll-margin 既有机制即可。

## 区块详细设计

整体两栏（`lg:` 起左右分栏，窄屏纵向堆叠），SectionHead 复用 `no="03"`。

### 左列：Ghostty 内核，原生到底

小标题 + 三条要点 + 底部脚注：

1. **原生渲染** —— 终端由 Ghostty native（Swift / Zig 编译的 XCFramework）驱动，GPU 加速渲染，大段输出滚动依然跟手；
2. **会话比界面活得久** —— 界面重载或重启后，正在运行的终端仍可继续使用；
3. **为智能体 TUI 打磨** —— Pier 维护自己的 Ghostty 补丁集，处理光标可见性、输入焦点转移这类影响智能体体验的细节。

脚注（mono 小字）：`macOS · Swift / Zig / libghostty`

### 右列：一切皆可 ⇧⌘P

由三部分组成：

1. **命令面板仿真卡**（纯 CSS，静态）：
   - 卡片用 `--screen` 底色 + `--line-strong` 边框 + JetBrains Mono，形似应用内面板；
   - 搜索行：`>` 提示符 + 静态查询文本「切换主题」+ 复用现有 `.caret` 光标闪烁动画；
   - 列表三行，每行含分组标签与动作名：「视图 · 切换主题」（此行带「最近使用」徽章，对应 MRU 排序事实）、「面板 · 向右分屏」、「文件 · 快速打开…」；
   - 装饰性内容一律 `aria-hidden="true"`。
2. **键位卡网格**（2 列 × 3 行）：上表六个键位，键帽用新 `.kbd` 样式，动作名为正文文字；
3. **尾注一行**：命令面板聚合全部动作，按最近使用排序，官方插件也能向它贡献命令；设置页可搜索快捷键，绑定支持自定义。

动效仅复用既有 `caret-blink` 与 `data-reveal` 滚动显现；`prefers-reduced-motion` 下全部静止（沿用全局既有规则，实施时确认 `.caret` 也被覆盖）。

## 文案织入（最小改动）

1. `features.items[0]`「原生终端」body 改为：
   > 基于 Ghostty 内核的原生终端，GPU 加速渲染；在项目或工作树中运行 Shell 和 CLI 编程智能体，界面重载后正在运行的会话仍可继续使用。
2. FAQ 新增一条：
   > **Pier 用什么终端内核？**
   > 终端基于 Ghostty 的原生内核（Swift / Zig），由 GPU 加速渲染。Pier 在其上维护针对智能体 TUI 场景的补丁；界面重载后，正在运行的终端仍可继续使用。
3. `meta.description` 在“审查 Git 变更。”之后追加一句：“终端基于 Ghostty 内核，GPU 加速渲染。”

Features 六卡网格结构与其余五张卡不动；命令面板叙事完全归新区块。

## i18n 变更清单

以 `zh.ts` 为结构源，en / ja / ko 同构翻译（typecheck 的同构约束强制对齐）：

```ts
performance: {
  no: "03",
  label: "性能与手感",
  title: "快是内核给的，顺手是设计出来的",
  lead: "终端内核决定下限，操作路径决定手感。Pier 把两者都当作产品能力来打磨。",
  engine: {
    title: "Ghostty 内核，原生到底",
    points: [
      { title: "原生渲染", body: "终端由 Ghostty native（Swift / Zig 编译的 XCFramework）驱动，GPU 加速渲染，大段输出滚动依然跟手。" },
      { title: "会话比界面活得久", body: "界面重载或重启后，正在运行的终端仍可继续使用。" },
      { title: "为智能体 TUI 打磨", body: "Pier 维护自己的 Ghostty 补丁集，处理光标可见性、输入焦点转移这类影响智能体体验的细节。" },
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

其余字典改动：`nav.performance`（性能 / Performance / パフォーマンス / 성능）、`features.no` 03→04、`cli.no` 04→05、`faq.items` 追加上述条目、`meta.description` 追加句。键位符号（⇧⌘P 等）四语言保持一致，不本地化。

## 样式

- `global.css` 新增 `.kbd`：`--panel-2` 底、`--line-strong` 边框、下边框加厚模拟键帽、`--font-mono`、圆角 6px、内边距约 1px 7px；
- 面板仿真所需样式优先用 Tailwind utility 内联在组件里，只有 `.kbd` 进全局（Hero 区将来也可能复用键帽）;
- 全部颜色走既有主题令牌，明暗双主题自动适配，不引入新依赖与新字体。

## 无障碍

- 键位卡用 `<kbd>` 语义元素；
- 面板仿真整体 `aria-hidden="true"`，信息量由右列正文与键位卡承载；
- 对比度沿用现有令牌体系（muted/faint 层级既有用法）。

## 验证计划

1. `pnpm check`（类型 + 模板诊断，含四语言字典同构校验）；
2. `pnpm build` 通过；
3. dev server + 浏览器目检矩阵：4 语言 × 明暗主题 × 桌面/移动宽度，重点看新区块换行、键位卡网格、面板仿真的明暗表现；
4. 确认构建产物无新增 `<script>`（对照现有三处脚本清单）。

## 风险与对策

| 风险 | 对策 |
| --- | --- |
| 上游调整默认键位导致官网过时 | 文案只称“默认键位”；本 spec 附来源文件路径，核对成本一分钟 |
| “GPU 加速”被读成 Pier 自己的跑分承诺 | 措辞固定为 Ghostty 内核属性，不出现任何数字 |
| 页面长度增加 | 新区块控制在一屏以内（两栏合并高度 ≈ 现有 Why 区） |

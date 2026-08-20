/** 中文文案（默认语言，内容忠实于 runloom/pier 仓库 README 与文档）。 */
export const zh = {
  meta: {
    title: "Pier — 本地 AI 开发工作台",
    description:
      "让 Claude Code、Codex、OpenCode 等原生 CLI 在本地项目中持续运行；在同一个可保存的工作区查看会话状态、回到终端并审查 Git 变更。macOS 免费开源。",
    ogAlt: "Pier — 本地 AI 开发工作台",
  },
  nav: {
    why: "为什么",
    workflow: "工作流",
    features: "能力",
    cli: "CLI 与插件",
    download: "下载",
    faq: "FAQ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · Apple Silicon / Intel · AGPL-3.0 开源",
    title: "本地 AI 开发工作台",
    sub: "让 Claude Code、Codex、OpenCode 等原生 CLI 在本地项目中持续运行；在同一个可保存的工作区查看状态、回到终端并审查 Git 变更。",
    ctaDownload: "下载 macOS 版",
    ctaGithub: "GitHub",
    hint: "智能体仍在原生终端中运行——Pier 不是另一套聊天界面。",
  },
  mock: {
    titleBarPath: "/Users/xyz/ABC/acme-app",
    filesTab: "文件",
    tree: [
      { name: "src", kind: "dir", indent: 0, active: false },
      { name: "checkout", kind: "dir", indent: 1, active: false },
      { name: "cart.ts", kind: "file", indent: 2, active: true },
      { name: "price.ts", kind: "file", indent: 2, active: false },
      { name: "tests", kind: "dir", indent: 0, active: false },
      { name: "cart.test.ts", kind: "file", indent: 1, active: false },
      { name: "package.json", kind: "file", indent: 0, active: false },
    ],
    terminalTabs: [
      { title: "checkout", status: "run" },
      { title: "codex", status: "needs" },
      { title: "zsh", status: "idle" },
    ],
    termLines: [
      { kind: "brand", text: "Claude Code · acme-app" },
      { kind: "out", text: "I'll fix the checkout total in cart.ts." },
      { kind: "tool", text: "Read    src/checkout/cart.ts" },
      { kind: "tool", text: "Update  src/checkout/cart.ts" },
      { kind: "tool", text: "Update  tests/cart.test.ts" },
      { kind: "ok", text: "✓ 24 tests passed" },
    ],
    composer: "在此输入，发送到终端中的会话",
    agentRunning: "运行中",
    branch: "feat/checkout",
    changesTab: "变更",
    unstaged: "更改",
    files: [
      { name: "cart.ts", path: "src/checkout", add: 42, del: 11, active: true },
      { name: "price.ts", path: "src/checkout", add: 18, del: 3, active: false },
      { name: "cart.test.ts", path: "tests", add: 36, del: 0, active: false },
    ],
    hunkHeader: "@@ -12,6 +12,9 @@ export function total",
    hunkAdd: "+  return items.reduce((sum, item) => sum + item.price, 0)",
    hunkDel: "-  return items[0]?.price ?? 0",
    stage: "暂存",
    restore: "还原",
  },
  agents: {
    label: "运行你已经在用的智能体 CLI",
    names: ["Claude Code", "Codex", "OpenCode", "Cursor", "Grok"],
    more: "……以及任何能在终端里运行的 CLI",
  },
  why: {
    no: "01",
    label: "为什么是 Pier",
    title: "不是另一套聊天界面",
    lead: "Pier 不把不同 CLI 包成统一的对话窗口。智能体仍运行在各自的原生终端里；当多个会话持续运行时，Pier 在同一个可保存的工作区补上跨会话状态。",
    points: [
      {
        title: "原生优先",
        body: "智能体运行在各自的原生终端里。Pier 不包壳、不代理、不改写你的工具链——已有的账号、订阅和使用习惯照常工作。",
      },
      {
        title: "跨会话状态",
        body: "运行中、需要你处理和出错的会话集中可见。不用逐个翻终端，就知道谁在等你。",
      },
      {
        title: "状态即入口",
        body: "状态不是终点。点击会话回到它原来的终端继续工作，并在终端旁审查同一项目的 Git 变更。",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "核心工作流",
    title: "从启动到审查，不离开现场",
    steps: [
      {
        title: "启动",
        body: "在项目或 Git 工作树中启动 Claude Code、Codex、OpenCode 等原生 CLI。",
      },
      {
        title: "关注状态",
        body: "在 Pier 中关注运行中、需要你处理和出错的跨会话状态。",
      },
      {
        title: "回到终端",
        body: "选择会话，回到它原来的终端处理输入、确认或后续工作。",
      },
      {
        title: "审查变更",
        body: "保留会话的同时审查工作区或暂存区的 Git 变更，并按文件或片段暂存、取消暂存。",
      },
    ],
  },
  features: {
    no: "03",
    label: "核心能力",
    title: "承载终端、呈现状态、组织开发现场",
    items: [
      {
        title: "原生终端",
        body: "在项目或工作树中运行 Shell 和 CLI 编程智能体；界面重新加载后，正在运行的终端仍可继续使用。",
      },
      {
        title: "会话状态",
        body: "一处查看运行中、需要你处理和出错的会话，点击即可回到对应终端。",
      },
      {
        title: "并行隔离",
        body: "创建和管理 Git 工作树，让不同任务在独立分支目录中推进，互不干扰。",
      },
      {
        title: "文件与变更",
        body: "浏览项目文件，审查工作区与暂存区差异，并按文件或片段暂存、取消暂存。",
      },
      {
        title: "Canvas",
        body: "将方案、流程、图表、文档或轻量原型作为随项目保存的可预览页面——它是项目内容，不是任务编排器。",
      },
      {
        title: "可保存布局",
        body: "用标签页、分屏和浮动面板组织终端、文件与变更，布局自动保存，重开即恢复。",
      },
    ],
  },
  cli: {
    no: "04",
    label: "本机 CLI 与官方插件",
    title: "工作台之外，还有一条命令行",
    cliTitle: "pier · 控制本机正在运行的 Pier",
    cliBody:
      "用 pier 打开项目，定位窗口和面板，打开终端并发送文本或按键，以及查询智能体与工作树。它只连接本机正在运行的 Pier，不是远程 API。",
    termLines: [
      { cmd: "pier open . --json", note: "# 在 Pier 中打开当前项目" },
      { cmd: "pier status --json", note: "# 查询窗口、面板与智能体状态" },
      { cmd: "pier panels list --json", note: "# 列出当前布局中的面板" },
    ],
    pluginTitle: "官方插件",
    pluginBody:
      "当前支持随应用提供的内置插件，以及经过官方签名、校验和版本管理的官方插件。不开放第三方插件市场——信任边界清晰可审计。",
    readCli: "阅读 CLI 手册",
    readPlugins: "阅读插件文档",
  },
  boundaries: {
    label: "产品边界",
    title: "Pier 明确不做的事",
    lead: "边界让工具可信。Pier 负责承载终端、呈现状态和组织开发现场——仅此而已。",
    items: [
      {
        title: "不做任务编排",
        body: "不自动拆分、分发或调度任务，也不提供任务台账或看板。怎么派活，你和智能体说了算。",
      },
      {
        title: "不包壳你的智能体",
        body: "不把 CLI 二次封装成聊天产品。Canvas 是随项目保存的内容页面，不是任务编排器。",
      },
      {
        title: "不开放第三方插件市场",
        body: "只有内置插件与官方签名、校验、版本管理的官方插件，不引入不可审计的第三方代码。",
      },
    ],
    closing: "判定很简单：去掉 Pier，你仍能用原生工具完成同一个动作。Pier 只让现场更清晰。",
  },
  download: {
    label: "下载",
    title: "把智能体泊进你的项目",
    lead: "免费开源。下载即用，选择项目文件夹，就可以在终端中运行智能体、浏览文件并审查变更。",
    latestPrefix: "当前版本",
    loading: "正在获取最新版本……",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "在 GitHub Releases 查看全部版本",
    macOnly: "目前桌面端仅支持 macOS（Apple Silicon / Intel）。",
    cliPathNote:
      "发布版不会自动修改 Shell 的 PATH。如需本机 CLI，可直接运行 /Applications/Pier.app/Contents/Resources/bin/pier。",
    sourceTitle: "或从源码运行",
    sourceReqs: "需要 Node ^24.15、pnpm ≥11.12、Xcode Command Line Tools、Homebrew 与 zig@0.15。",
    sourceLines: [
      "git clone https://github.com/runloom/pier.git",
      "cd pier",
      "pnpm bootstrap",
      "pnpm dev",
    ],
  },
  faq: {
    label: "FAQ",
    title: "常见问题",
    items: [
      {
        q: "Pier 会代理或修改我的模型请求吗？",
        a: "不会。智能体运行在各自的原生终端里，账号、订阅和配置照常工作。Pier 只承载终端、聚合状态并组织工作区。",
      },
      {
        q: "支持哪些平台？",
        a: "目前桌面端仅支持 macOS，提供 Apple Silicon 与 Intel 两个安装包。",
      },
      {
        q: "和 tmux 这类终端复用器有什么区别？",
        a: "Pier 是桌面工作台：除了稳定承载终端，还提供跨会话状态聚合、Git 变更审查、文件预览、Canvas 与可保存的面板布局。",
      },
      {
        q: "我的数据存在哪里？",
        a: "全部在本地：偏好与布局存为本地 JSON 文件，终端原始输出写本地分段文件，代码变更实时读取 Git，密钥交给系统安全存储。",
      },
      {
        q: "开源协议是什么？",
        a: "源码按 AGPL-3.0-only 发布。闭源分发、白标、企业支持或 AGPLv3 之外的权利需要单独商业协议。",
      },
    ],
  },
  footer: {
    tagline: "本地 AI 开发工作台",
    product: "产品",
    docs: "文档",
    community: "社区",
    legal: "法律",
    links: {
      download: "下载",
      releases: "Releases",
      changelog: "变更日志",
      docsIndex: "文档索引",
      cliManual: "CLI 用户手册",
      plugins: "官方插件",
      development: "开发指南",
      github: "GitHub",
      issues: "Issues",
      contributing: "贡献指南",
      security: "安全政策",
      license: "AGPL-3.0 许可证",
      trademarks: "商标说明",
      licensing: "授权说明",
    },
    note: "源码按 AGPL-3.0-only 发布；闭源分发、白标或企业支持需要单独商业协议。",
  },
  a11y: {
    skip: "跳到主要内容",
    themeToggle: "切换主题",
    themeLight: "浅色",
    themeDark: "深色",
    themeSystem: "跟随系统",
    langMenu: "选择语言",
    langZh: "中文",
    langEn: "English",
    langJa: "日本語",
    langKo: "한국어",
    openMenu: "打开菜单",
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? readonly DeepStringify<U>[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K];
};

/** en 字典按 zh 的结构与键约束，值为普通 string。 */
export type Dict = DeepStringify<typeof zh>;

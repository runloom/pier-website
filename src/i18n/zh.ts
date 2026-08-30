/** 中文文案（默认语言，内容忠实于 runloom/pier 仓库 README 与文档）。 */
export const zh = {
  meta: {
    title: "Pier — 本地 AI 开发工作台",
    description:
      "几个 AI 终端开着，谁在等你一眼能看见。Claude Code、Codex 还在原来的终端里，旁边就能改文件、处理 Git。macOS 免费开源。",
    ogAlt: "Pier — 本地 AI 开发工作台",
  },
  nav: {
    why: "为什么",
    workflow: "工作流",
    performance: "性能",
    features: "能力",
    cli: "CLI 与插件",
    download: "下载",
    faq: "FAQ",
    docs: "文档",
    blog: "博客",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · 本地 AI 开发工作台",
    title: "几个 AI 终端开着，谁在等你一眼能看见",
    sub: "Claude Code、Codex 还在自己的终端里，不是又一个聊天窗口。点一下回去，旁边就能改文件、看 Git。",
    ctaDownload: "下载 macOS 版",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier 窗口：左边上下两个还在跑的 Codex 和 Grok 终端，右边是同一项目的 Git 变更。",
    hint: "免费开源 · 仅 macOS",
    callouts: [
      { label: "这是原来的终端，不是聊天" },
      { label: "另一个还在跑的会话" },
      { label: "Git 审查，开在旁边" },
    ],
  },
  agents: {
    label: "这些命令行，拿来就能跑",
  },
  why: {
    no: "01",
    label: "为什么是 Pier",
    title: "几个终端开着，谁在等你看得见",
    lead: "Claude Code 还在原来的终端里。谁在跑、谁在问你、谁出错，点一下就能回去。改文件、看 Git，就在旁边。",
    points: [
      {
        title: "还是原来的终端",
        body: "不是又一个聊天窗口。账号和订阅不动。Claude Code、Codex 还在它们自己的终端里跑。",
      },
      {
        title: "谁在等你看得见",
        body: "运行中、需要你处理、出错的会话集中可见。不用翻标签，点一下回到原来的终端。",
      },
      {
        title: "改文件和 Git，不用另开窗口",
        body: "打开文件改代码，按文件或片段暂存、提交、推送。日常改一行、处理 Git，不必再切到另一个编辑器。",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "核心工作流",
    title: "终端还在跑，旁边就能改和提交",
    steps: [
      {
        title: "打开命令行",
        body: "在项目或 Git 工作树里打开 Claude Code、Codex 或其它命令行。",
      },
      {
        title: "看谁在等你",
        body: "几个会话同时跑时，看清谁在跑、谁在等你、谁出错。",
      },
      {
        title: "点回去接着写",
        body: "点那一条，回到原来的终端做确认或接着写。",
      },
      {
        title: "改文件、看 Git",
        body: "终端还在跑。打开文件改，看完 diff 再提交。",
      },
    ],
  },
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
          body: "界面重载后，正在运行的终端仍可继续使用。",
        },
        {
          title: "为智能体 TUI 打磨",
          body: "Pier 维护自己的 Ghostty 补丁集，处理光标可见性、输入焦点转移这类影响智能体体验的细节。",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "命令可搜，急事一键跳转",
      note: "命令面板按最近使用排序，并支持模糊搜索。打开文件、暂存、提交、分支这些动作都能搜到。需要你处理时可一键跳转。设置中可搜索并自定义快捷键。",
      placeholder: "搜索命令…",
      rows: [
        { group: "Git", title: "提交", keys: "" },
        { group: "Git", title: "暂存", keys: "" },
        { group: "文件", title: "转到文件", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "命令面板" },
        { keys: "⌘P", label: "快速打开文件" },
        { keys: "⌘T", label: "新建终端" },
        { keys: "⌘⇧Y", label: "下一个需要你处理" },
        { keys: "⌘D", label: "分屏" },
        { keys: "⌘F", label: "面板内查找" },
      ],
    },
  },
  features: {
    no: "04",
    label: "核心能力",
    title: "终端、编辑、Git 和 Canvas",
    items: [
      {
        title: "原生终端",
        body: "基于 Ghostty 内核的原生终端，GPU 加速渲染；在项目或工作树中运行 Shell 和 CLI 编程智能体，界面重载后正在运行的会话仍可继续使用。",
      },
      {
        title: "会话状态",
        body: "一处查看运行中、需要你处理和出错的会话，点击即可回到对应终端。",
      },
      {
        title: "不同任务，分开的目录",
        body: "给每个任务开一份独立的项目目录（Git 工作树），改文件互不影响。",
      },
      {
        title: "文件、编辑与 Git",
        body: "打开并编辑项目文件。审查 diff，按文件或片段暂存；提交、推送、分支、贮藏等可在命令面板完成。",
      },
      {
        title: "Canvas",
        body: "随项目保存的页面已经可用。用终端和状态拼看板、画运行图，还在做。",
      },
      {
        title: "可保存布局",
        body: "用标签页、分屏和浮动面板组织终端、编辑器和变更，布局自动保存，重开即恢复。",
      },
    ],
  },
  cli: {
    no: "05",
    label: "本机 CLI 与插件",
    title: "工作台之外，还有一条命令行",
    cliTitle: "pier · 控制本机正在运行的 Pier",
    cliBody:
      "用 pier 打开项目，定位窗口和面板，打开终端并发送文本或按键，以及查询智能体与工作树。它只连接本机正在运行的 Pier，不是远程 API。",
    termLines: [
      { cmd: "pier . --json", note: "# 在 Pier 中打开当前项目" },
      { cmd: "pier status --json", note: "# 查询窗口、面板与智能体状态" },
      { cmd: "pier panels list --json", note: "# 列出当前布局中的面板" },
    ],
    pluginTitle: "插件",
    pluginBody:
      "现在能用内置插件和官方签名、校验、版本管理的插件。以后会支持更多来源。",
    readCli: "阅读 CLI 手册",
    readPlugins: "阅读插件文档",
  },
  boundaries: {
    label: "产品边界",
    title: "现在怎么取舍",
    lead: "不做成聊天窗口，也不内置一套不能改的任务系统。",
    items: [
      {
        title: "不内置任务列表和自动派活",
        body: "应用本身不带任务台账或自动调度。要用看板、运行图，拿终端和状态在 Canvas 里拼，这块还在做。",
      },
      {
        title: "不做成聊天窗口",
        body: "Claude Code、Codex 还在它们自己的终端里。账号、订阅和快捷键照常工作。",
      },
      {
        title: "不锁死你的工具",
        body: "离开之后，原来的命令行、账号和仓库照常工作。现在能用内置和官方插件，以后会支持更多来源。",
      },
    ],
    closing: "",
  },
  download: {
    label: "下载",
    title: "下载后，在项目里打开你已经在用的命令行",
    lead: "免费开源。选项目文件夹，打开你已经在用的命令行，旁边就能改文件、处理 Git。",
    latestPrefix: "当前版本",
    loading: "正在获取最新版本……",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "在 GitHub Releases 查看全部版本",
    macOnly: "目前桌面端仅支持 macOS（Apple Silicon / Intel）。",
    cliPathNote:
      "启动后若目录可写，会尽量把 pier 装到 PATH。没有的话可在设置 → 终端里安装。",
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
        q: "Pier 适合谁？",
        a: "已经在终端里跑 Claude Code、Codex、OpenCode 这类命令行；常常同时开好几个，或希望改文件、处理 Git 不必再切编辑器。一个会话也可以，当成终端、编辑和 Git 的家。主要在 Cursor 聊天里写代码的，不是这把工具。",
      },
      {
        q: "和 Cursor 有什么不同？",
        a: "Cursor 把智能体收进聊天窗口。Pier 把它们留在原来的终端里，谁在等你看得见，旁边就能改文件、看 Git。",
      },
      {
        q: "和 herdr、cmux、tmux 有什么不同？",
        a: "他们管窗格、谁在等你。Herdr 跑在你现有终端里。cmux 说自己只是终端。Pier 是桌面窗口，旁边还能改文件、看 Git。",
      },
      {
        q: "和 Orca 有什么不同？",
        a: "Orca 自带任务和调度。Pier 不自带这套。要用看板或运行图，在 Canvas 里拼，这块还在做。",
      },
      {
        q: "还要再开 VS Code 或 Zed 吗？",
        a: "日常改文件、看 diff、提交，可以在 Pier 里做。某个扩展你离不开，继续开原来的编辑器就行。",
      },
      {
        q: "Pier 会代理或修改我的模型请求吗？",
        a: "不会。智能体运行在各自的终端里，账号、订阅和配置照常工作。",
      },
      {
        q: "支持哪些平台？",
        a: "目前桌面端仅支持 macOS，提供 Apple Silicon 与 Intel 两个安装包。",
      },
      {
        q: "我的数据存在哪里？",
        a: "全部在本地：偏好与布局存为本地 JSON，终端输出写本地文件，代码变更实时读 Git，密钥交给系统安全存储。",
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
      blog: "博客",
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
      ? readonly (U extends string ? string : DeepStringify<U>)[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K];
};

/** en 字典按 zh 的结构与键约束，值为普通 string。 */
export type Dict = DeepStringify<typeof zh>;

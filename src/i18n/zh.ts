/** 中文文案（默认语言，内容忠实于 runloom/pier 仓库 README 与文档）。 */
export const zh = {
  meta: {
    title: "Pier — 本地 AI 开发工作台",
    description:
      "几个 AI 终端开着，谁在等你一眼能看见。Claude Code、Codex 还在原来的终端里，旁边就能改文件、看 Git。macOS 免费开源。",
    ogAlt: "Pier — 本地 AI 开发工作台",
  },
  nav: {
    why: "为什么选",
    workflow: "工作流",
    performance: "性能与手感",
    features: "功能",
    cli: "CLI 与插件",
    download: "下载",
    faq: "常见问题",
    docs: "文档",
    blog: "博客",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · 本地 AI 开发工作台",
    title: "几个 AI 终端开着，谁在等你一眼能看见",
    sub: "Claude Code、Codex 还在自己的终端里，不是又一个聊天窗口。点一下回到那个终端，旁边就能改文件、看 Git。",
    ctaDownload: "下载 macOS 版",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier 窗口：左边上下两个还在跑的 Codex 和 Grok 终端，右边是同一项目的 Git 变更。",
    hint: "免费开源 · 仅 macOS",
    callouts: [
      { label: "这是原来的终端，不是聊天" },
      { label: "另一个会话还在跑，一眼能看见" },
      { label: "看 Git，就在旁边" },
    ],
  },
  agents: {
    label: "这些命令行，拿来就能跑",
  },
  why: {
    no: "01",
    label: "为什么是 Pier",
    title: "还是原来的终端，旁边就能改和提交",
    lead: "Claude Code 还在原来的终端里。谁在跑、谁在问你、谁出错，点一下就能回去。改文件、看 Git，就在旁边。",
    points: [
      {
        title: "还是原来的终端",
        body: "不是又一个聊天窗口。账号和订阅不动。Claude Code、Codex 还在它们自己的终端里跑。",
      },
      {
        title: "谁在等你看得见",
        body: "运行中、需要你处理、出错的会话放在一处。不用翻标签，点一下回到原来的终端。",
      },
      {
        title: "改文件、看 Git，不用另开窗口",
        body: "打开文件改代码，按文件或改动块暂存、提交、推送。日常改一行、看 Git，不必再切到另一个编辑器。",
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
        body: "在项目或独立目录（Git 工作树）里打开 Claude Code、Codex 或其它命令行。",
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
    lead: "终端快不快，看内核。顺不顺手，看你怎么找命令、怎么跳回去。Pier 两头都打磨。",
    engine: {
      title: "Ghostty 内核，原生渲染",
      points: [
        {
          title: "原生渲染",
          body: "终端用 Ghostty 内核，GPU 加速绘制。大段输出滚动也跟手。",
        },
        {
          title: "会话比界面活得久",
          body: "界面刷新或重启后，正在跑的终端还能接上。",
        },
        {
          title: "为命令行界面打磨",
          body: "光标显不显、输入往哪走，这些影响 Claude Code、Codex 好不好用的细节，Pier 在内核里修。",
        },
      ],
      footnote: "macOS 原生终端 · Ghostty",
    },
    keys: {
      title: "命令可搜，急事一键跳转",
      note: "命令面板按最近使用排序，也能模糊搜索。打开文件、暂存、提交、切分支都能搜到。有会话需要你时，一键跳过去。快捷键可在设置里搜索、改绑。",
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
    label: "核心功能",
    title: "终端、改文件、Git，还有画布",
    items: [
      {
        title: "原生终端",
        body: "原生终端，GPU 加速。在项目或独立目录里跑 Shell，以及 Claude Code、Codex 这类命令行。界面刷新后，正在跑的会话还能用。",
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
        body: "打开并编辑项目文件。看 diff，按文件或改动块暂存；提交、推送、切分支、暂时放下改动，都能在命令面板里做。",
      },
      {
        title: "画布",
        body: "画布是跟项目一起保存的页面，现在就能打开来写说明、摆内容。用终端和状态拼看板、画运行图，还在做。",
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
    title: "本机还有一条 pier 命令",
    cliTitle: "pier · 控制本机正在运行的 Pier",
    cliBody:
      "用 pier 打开项目，找到窗口和面板，给终端发文字或按键，也能查询会话和独立目录。它只连本机正在运行的 Pier，不是远程服务。",
    termLines: [
      { cmd: "pier . --json", note: "# 在 Pier 中打开当前项目" },
      { cmd: "pier status --json", note: "# 查询窗口、面板与会话状态" },
      { cmd: "pier panels list --json", note: "# 列出当前布局中的面板" },
    ],
    pluginTitle: "插件",
    pluginBody: "现在能用随应用附带的插件，以及官方签名并校验过的插件。第三方来源还没开放。",
    readCli: "阅读 CLI 手册",
    readPlugins: "阅读插件文档",
  },
  boundaries: {
    label: "产品边界",
    title: "现在不做什么",
    lead: "不做成聊天窗口，也不内置任务列表和自动派任务。",
    items: [
      {
        title: "不内置任务列表，也不自动派任务",
        body: "应用本身没有任务列表，也不会自动分派任务。要用看板或运行图，拿终端和状态在画布里拼，这块还在做。",
      },
      {
        title: "不做成聊天窗口",
        body: "Claude Code、Codex 还在它们自己的终端里。账号、订阅和快捷键照常工作。",
      },
      {
        title: "不锁死你的工具",
        body: "离开之后，原来的命令行、账号和仓库照常工作。",
      },
    ],
    closing: "",
  },
  download: {
    label: "下载",
    title: "下载后，打开你已经在用的命令行",
    lead: "免费开源。选项目文件夹，打开你已经在用的命令行，旁边就能改文件、看 Git。",
    latestPrefix: "当前版本",
    loading: "正在获取最新版本……",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "在 GitHub Releases 查看全部版本",
    macOnly: "目前桌面端仅支持 macOS（Apple Silicon / Intel）。",
    cliPathNote:
      "启动后如果安装目录可写，会尽量把 pier 命令加进 PATH。若终端里找不到 pier，到设置 → 终端里安装。",
    sourceTitle: "或从源码运行",
    sourceReqs:
      "需要 Node ^24.15、pnpm ≥11.12、Xcode Command Line Tools、Homebrew 与 zig@0.15。已有 Git 工作树时，先运行 pnpm setup:worktree。",
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
        a: "已经在终端里跑 Claude Code、Codex、OpenCode 这类命令行的人。常常同时开好几个，或者不想为了改文件、看 Git 再切编辑器。只有一个会话也行，终端、改文件和 Git 都放这儿。主要在 Cursor 聊天里写代码的，不必用这把工具。",
      },
      {
        q: "和 Cursor 有什么不同？",
        a: "Cursor 把命令行收进聊天窗口。Pier 把它们留在原来的终端里，谁在等你看得见，旁边就能改文件、看 Git。",
      },
      {
        q: "和 herdr、cmux、tmux 有什么不同？",
        a: "herdr 跑在你现有终端里，管分屏，也能看谁在等你。cmux 本身就是终端。tmux 只管窗格。Pier 是桌面窗口，旁边还能改文件、看 Git。",
      },
      {
        q: "和 Orca 有什么不同？",
        a: "Orca 自带任务和调度。Pier 不自带这套。要用看板或运行图，在画布里拼，这块还在做。",
      },
      {
        q: "还要再开 VS Code 或 Zed 吗？",
        a: "日常改文件、看 diff、提交，可以在 Pier 里做。某个扩展你离不开，继续开原来的编辑器就行。",
      },
      {
        q: "Pier 会代理或修改我的模型请求吗？",
        a: "不会。这些命令行跑在各自的终端里，账号、订阅和配置照常工作。",
      },
      {
        q: "支持哪些平台？",
        a: "目前桌面端仅支持 macOS，提供 Apple Silicon 与 Intel 两个安装包。",
      },
      {
        q: "我的数据存在哪里？",
        a: "全部在本地：偏好与布局存为本地文件，终端输出写在本机，代码变更实时读 Git，密钥交给 macOS 钥匙串。",
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

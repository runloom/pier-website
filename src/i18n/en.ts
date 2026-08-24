import type { Dict } from "./zh";

/** English copy, mirroring the zh dictionary structure. */
export const en: Dict = {
  meta: {
    title: "Pier — The local AI dev workbench",
    description:
      "Keep Claude Code, Codex, OpenCode and other native CLIs running in your local projects. See session status across agents, return to the terminal, and review Git changes in one saveable workspace. The terminal runs on the Ghostty engine with GPU-accelerated rendering. Free and open source for macOS.",
    ogAlt: "Pier — The local AI dev workbench",
  },
  nav: {
    why: "Why",
    workflow: "Workflow",
    performance: "Performance",
    features: "Features",
    cli: "CLI & plugins",
    download: "Download",
    faq: "FAQ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · Apple Silicon / Intel",
    title: "The local AI dev workbench",
    sub: "Keep Claude Code, Codex, OpenCode and other native CLIs running in your local projects — watch status, return to the terminal, and review Git changes in one saveable workspace.",
    ctaDownload: "Download for macOS",
    ctaGithub: "GitHub",
    shotAlt: "Pier workspace: Codex and Grok in stacked terminals on the left, the file tree and editor on the right.",
    hint: "Your agents keep running in their native terminals — Pier is not another chat wrapper.",
  },
  agents: {
    label: "Runs the agent CLIs you already use",
  },
  why: {
    no: "01",
    label: "Why Pier",
    title: "Not another chat wrapper",
    lead: "Pier doesn't repackage CLIs into a unified chat window. Agents keep running in their own native terminals; when several sessions run at once, Pier adds the cross-session state — in one saveable workspace.",
    points: [
      {
        title: "Native first",
        body: "Agents run in their own native terminals. Pier doesn't wrap, proxy, or rewrite your toolchain — your existing accounts, subscriptions, and habits keep working.",
      },
      {
        title: "Cross-session status",
        body: "Running, needs you, and error sessions are visible in one place. No more hunting pane by pane to find out who is waiting on you.",
      },
      {
        title: "Status is an entry point",
        body: "Status isn't the destination. Click a session to return to its original terminal, and review the same project's Git changes right next to it.",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "Core workflow",
    title: "From launch to review, without leaving the scene",
    steps: [
      {
        title: "Launch",
        body: "Start Claude Code, Codex, OpenCode, or another native agent CLI inside a project or Git worktree.",
      },
      {
        title: "Watch status",
        body: "Track running, needs you, and error states across every session in Pier.",
      },
      {
        title: "Return to the terminal",
        body: "Pick a session and jump back into its original terminal for input, confirmations, or follow-up work.",
      },
      {
        title: "Review changes",
        body: "Keep sessions alive while reviewing working-tree and staged Git changes — stage or unstage by file or by hunk.",
      },
    ],
  },
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
  features: {
    no: "04",
    label: "Core capabilities",
    title: "Host terminals, surface status, organize the workspace",
    items: [
      {
        title: "Native terminals",
        body: "A native terminal built on the Ghostty engine with GPU-accelerated rendering. Run shells and CLI coding agents inside projects or worktrees — running sessions survive UI reloads.",
      },
      {
        title: "Session status",
        body: "See running, needs you, and error sessions in one place — click any of them to jump back to its terminal.",
      },
      {
        title: "Parallel isolation",
        body: "Create and manage Git worktrees so different tasks advance in independent branch directories without collisions.",
      },
      {
        title: "Files & changes",
        body: "Browse and preview project files, review working-tree and staged diffs, and stage or unstage by file or hunk.",
      },
      {
        title: "Canvas",
        body: "Keep plans, flows, diagrams, docs, or light prototypes as previewable pages saved with the project — content, not a task orchestrator.",
      },
      {
        title: "Saveable layouts",
        body: "Arrange terminals, files, and changes with tabs, splits, and floating panels. Layouts save automatically and restore on reopen.",
      },
    ],
  },
  cli: {
    no: "05",
    label: "Local CLI & official plugins",
    title: "Beyond the workbench, there's a command line",
    cliTitle: "pier · control the Pier already running on your machine",
    cliBody:
      "Use pier to open projects, locate windows and panels, open terminals and send text or keys, and query agents and worktrees. It only connects to the Pier running locally — it's not a remote API.",
    termLines: [
      { cmd: "pier open . --json", note: "# open the current project in Pier" },
      { cmd: "pier status --json", note: "# query windows, panels, and agent status" },
      { cmd: "pier panels list --json", note: "# list panels in the current layout" },
    ],
    pluginTitle: "Official plugins",
    pluginBody:
      "Pier ships built-in plugins plus official plugins that are signed, verified, and version-managed. There is no third-party plugin marketplace — the trust boundary stays auditable.",
    readCli: "Read the CLI manual",
    readPlugins: "Read the plugin docs",
  },
  boundaries: {
    label: "Product boundaries",
    title: "What Pier deliberately doesn't do",
    lead: "Boundaries make a tool trustworthy. Pier hosts terminals, surfaces status, and organizes your workspace — nothing more.",
    items: [
      {
        title: "No task orchestration",
        body: "Pier never splits, dispatches, or schedules tasks, and there is no task ledger or kanban. How work gets assigned is between you and your agents.",
      },
      {
        title: "No wrapping your agents",
        body: "CLIs are never repackaged into a chat product. Canvas is project content saved alongside your code — not a task orchestrator.",
      },
      {
        title: "No third-party plugin marketplace",
        body: "Only built-in plugins and official signed, verified, version-managed plugins. No unauditable third-party code.",
      },
    ],
    closing: "The test is simple: remove Pier, and your native tools still do the same job. Pier just keeps the scene clear.",
  },
  download: {
    label: "Download",
    title: "Dock your agents into the project",
    lead: "Free and open source. Download, pick a project folder, and start running agents, browsing files, and reviewing changes.",
    latestPrefix: "Latest release",
    loading: "Fetching the latest release…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "Browse all releases on GitHub",
    macOnly: "The desktop app currently supports macOS only (Apple Silicon / Intel).",
    cliPathNote:
      "The packaged app tries to put pier on your PATH at launch. If the command is missing, install it in Settings → Terminal.",
    sourceTitle: "Or run from source",
    sourceReqs: "Requires Node ^24.15, pnpm ≥11.12, Xcode Command Line Tools, Homebrew, and zig@0.15.",
    sourceLines: [
      "git clone https://github.com/runloom/pier.git",
      "cd pier",
      "pnpm bootstrap",
      "pnpm dev",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Does Pier proxy or modify my model requests?",
        a: "No. Agents run in their own native terminals, so your accounts, subscriptions, and configuration keep working as-is. Pier only hosts terminals, aggregates status, and organizes the workspace.",
      },
      {
        q: "Which platforms are supported?",
        a: "The desktop app currently supports macOS only, with Apple Silicon and Intel builds.",
      },
      {
        q: "How is this different from a terminal multiplexer like tmux?",
        a: "Pier is a desktop workbench: besides hosting stable terminals, it adds cross-session status, Git change review, file preview, Canvas, and saveable panel layouts.",
      },
      {
        q: "Where does my data live?",
        a: "Everything stays local: preferences and layouts are local JSON files, raw terminal output is written to local segment files, code changes are read live from Git, and secrets go to the system's secure storage.",
      },
      {
        q: "Which terminal engine does Pier use?",
        a: "The terminal runs on Ghostty's native core (Swift / Zig) with GPU-accelerated rendering. Pier maintains patches on top of it for agent-TUI scenarios; running terminals survive UI reloads.",
      },
    ],
  },
  footer: {
    tagline: "The local AI dev workbench",
    product: "Product",
    docs: "Docs",
    community: "Community",
    legal: "Legal",
    links: {
      download: "Download",
      releases: "Releases",
      changelog: "Changelog",
      docsIndex: "Documentation",
      cliManual: "CLI manual",
      plugins: "Official plugins",
      development: "Development guide",
      github: "GitHub",
      issues: "Issues",
      contributing: "Contributing",
      security: "Security policy",
      license: "AGPL-3.0 license",
      trademarks: "Trademarks",
      licensing: "Licensing",
    },
  },
  a11y: {
    skip: "Skip to content",
    themeToggle: "Toggle theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
    langMenu: "Language",
    langZh: "中文",
    langEn: "English",
    langJa: "日本語",
    langKo: "한국어",
    openMenu: "Open menu",
  },
};

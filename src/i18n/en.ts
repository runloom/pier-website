import type { Dict } from "./zh";

/** English copy, mirroring the zh dictionary structure. */
export const en: Dict = {
  meta: {
    title: "Pier — The local AI dev workbench",
    description:
      "A few AI terminals open — see who is waiting on you. Claude Code and Codex stay in their own terminals; edit files and review Git beside them. Free and open source for macOS.",
    ogAlt: "Pier — The local AI dev workbench",
  },
  nav: {
    why: "Why Pier",
    workflow: "Workflow",
    performance: "Performance",
    features: "Features",
    cli: "CLI & plugins",
    download: "Download",
    faq: "FAQ",
    docs: "Docs",
    blog: "Blog",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · The local AI dev workbench",
    title: "A few AI terminals open. See who needs you.",
    sub: "Claude Code and Codex stay in their own terminals — not another chat window. Click to jump back, then edit files and review Git beside them.",
    ctaDownload: "Download for macOS",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier window: Codex and Grok still running in stacked terminals on the left, Git changes for the same project on the right.",
    hint: "Free and open source · macOS only",
    callouts: [
      { label: "The original terminal, not a chat" },
      { label: "Another session still running — in view" },
      { label: "Git review, right beside it" },
    ],
  },
  agents: {
    label: "These command lines run as they already do",
  },
  why: {
    no: "01",
    label: "Why Pier",
    title: "The same terminal. Edit and commit beside it.",
    lead: "Claude Code stays in its original terminal. Who is running, who is asking, who errored — click and go back. Edit files and review Git right beside it.",
    points: [
      {
        title: "The same terminal as before",
        body: "Not another chat window. Accounts and subscriptions keep working. Claude Code and Codex still run in their own terminals.",
      },
      {
        title: "See who is waiting",
        body: "Running, needs you, and error sessions in one place. Click to jump back — no hunting through tabs.",
      },
      {
        title: "Edit files and review Git without another window",
        body: "Open files and edit. Stage by file or hunk, commit, push. A one-line change or a Git review doesn't need another editor.",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "Core workflow",
    title: "The terminal keeps running. Edit and commit beside it.",
    steps: [
      {
        title: "Open a CLI",
        body: "Start Claude Code, Codex, or another command line in a project or a separate directory (a Git worktree).",
      },
      {
        title: "See who needs you",
        body: "When several sessions run at once, see who is running, who is waiting, and who errored.",
      },
      {
        title: "Jump back and keep going",
        body: "Click that session, return to its original terminal, confirm or keep writing.",
      },
      {
        title: "Edit files, review Git",
        body: "Leave the terminal running. Open a file, read the diff, then commit.",
      },
    ],
  },
  performance: {
    no: "03",
    label: "Performance & feel",
    title: "Fast comes from the engine. Smooth comes from design.",
    lead: "How fast the terminal can be comes from the engine. How it feels comes from how you search and jump back. Pier works on both.",
    engine: {
      title: "Ghostty engine, drawn natively",
      points: [
        {
          title: "Native rendering",
          body: "Terminals use the Ghostty engine with GPU rendering. Heavy output still scrolls smoothly.",
        },
        {
          title: "Sessions outlive the UI",
          body: "After a refresh or a restart, running terminals stay connected.",
        },
        {
          title: "Polished for command-line UIs",
          body: "Whether the cursor shows, and where typing goes — the details that make Claude Code and Codex usable — Pier fixes in the engine.",
        },
      ],
      footnote: "Native macOS terminal · Ghostty",
    },
    keys: {
      title: "Search any command. Jump with one key",
      note: "The command palette ranks by recent use and supports fuzzy search. Open files, stage, commit, and switch branches from there. Jump to a session that needs you with one key. Search and remap shortcuts in Settings.",
      placeholder: "Search commands…",
      rows: [
        { group: "Git", title: "Commit", keys: "" },
        { group: "Git", title: "Stage", keys: "" },
        { group: "File", title: "Go to File", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "Command palette" },
        { keys: "⌘P", label: "Quick Open file" },
        { keys: "⌘T", label: "New terminal" },
        { keys: "⌘⇧Y", label: "Next session that needs you" },
        { keys: "⌘D", label: "Split pane" },
        { keys: "⌘F", label: "Find in panel" },
      ],
    },
  },
  features: {
    no: "04",
    label: "Core features",
    title: "Terminals, editing, Git, and a canvas",
    items: [
      {
        title: "Native terminals",
        body: "A native terminal with GPU rendering. Run shells and CLIs like Claude Code and Codex in a project or a separate directory. Running sessions stay usable after a UI refresh.",
      },
      {
        title: "Session status",
        body: "See running, needs you, and error sessions in one place — click any of them to jump back to its terminal.",
      },
      {
        title: "Separate directories per task",
        body: "Give each task its own project directory (a Git worktree) so edits don't collide.",
      },
      {
        title: "Files, editing, and Git",
        body: "Open and edit project files. Review diffs, stage by file or hunk; commit, push, switch branches, and stash from the command palette.",
      },
      {
        title: "Canvas",
        body: "Canvas is a page saved with the project. You can open it now to write notes and arrange content. Boards and run graphs built from terminals and status are still being built.",
      },
      {
        title: "Saveable layouts",
        body: "Arrange terminals, the editor, and changes with tabs, splits, and floating panels. Layouts save automatically and restore on reopen.",
      },
    ],
  },
  cli: {
    no: "05",
    label: "Local CLI & plugins",
    title: "There's also a pier command on your machine",
    cliTitle: "pier · control the Pier already running on your machine",
    cliBody:
      "Use pier to open projects, find windows and panels, send text or keys to a terminal, and query sessions and separate directories. It only talks to the Pier running on this Mac — it is not a remote service.",
    termLines: [
      { cmd: "pier . --json", note: "# open the current project in Pier" },
      { cmd: "pier status --json", note: "# query windows, panels, and session status" },
      { cmd: "pier panels list --json", note: "# list panels in the current layout" },
    ],
    pluginTitle: "Plugins",
    pluginBody:
      "Built-in plugins and official signed, verified plugins work today. Third-party sources are not open yet.",
    readCli: "Read the CLI manual",
    readPlugins: "Read the plugin docs",
  },
  boundaries: {
    label: "Product boundaries",
    title: "What we don't do, for now",
    lead: "Not a chat window, and no built-in task list or auto-dispatch.",
    items: [
      {
        title: "No built-in task list or auto-dispatch",
        body: "The app itself has no task list and does not assign work for you. Boards and run graphs belong on the canvas, using terminals and status — that part is still being built.",
      },
      {
        title: "Not a chat window",
        body: "Claude Code and Codex stay in their own terminals. Accounts, subscriptions, and shortcuts keep working.",
      },
      {
        title: "Don't lock you in",
        body: "Leave, and your command lines, accounts, and repos keep working.",
      },
    ],
    closing: "",
  },
  download: {
    label: "Download",
    title: "Download, then open the CLIs you already use",
    lead: "Free and open source. Pick a project folder, open the command lines you already use, and edit files or review Git beside them.",
    latestPrefix: "Latest release",
    loading: "Fetching the latest release…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "Browse all releases on GitHub",
    macOnly: "The desktop app currently supports macOS only (Apple Silicon / Intel).",
    cliPathNote:
      "At launch, if the install directory is writable, Pier tries to put the pier command on your PATH. If the command isn't found, install it in Settings → Terminal.",
    sourceTitle: "Or run from source",
    sourceReqs:
      "Requires Node ^24.15, pnpm ≥11.12, Xcode Command Line Tools, Homebrew, and zig@0.15. For an existing Git worktree, run pnpm setup:worktree first.",
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
        q: "Who is Pier for?",
        a: "People who already run Claude Code, Codex, or OpenCode in a terminal — especially more than one at a time, or who want to edit files and review Git without jumping to another editor. One session is fine too; keep the terminal, editing, and Git here. If you mostly write code in Cursor chat, this isn't the tool for you.",
      },
      {
        q: "How is this different from Cursor?",
        a: "Cursor puts command lines in a chat window. Pier leaves them in their original terminals, shows who is waiting, and lets you edit files and review Git beside them.",
      },
      {
        q: "How is this different from herdr, cmux, or tmux?",
        a: "herdr runs inside the terminal you already use: it splits panes and can show who is waiting. cmux is a terminal. tmux only splits panes. Pier is a desktop window, with file editing and Git beside them.",
      },
      {
        q: "How is this different from Orca?",
        a: "Orca ships tasks and scheduling. Pier does not. Boards and run graphs belong on the canvas — that part is still being built.",
      },
      {
        q: "Do I still need VS Code or Zed?",
        a: "Daily edits, diffs, and commits can happen in Pier. If you need a particular editor extension, keep using that editor.",
      },
      {
        q: "Does Pier proxy or modify my model requests?",
        a: "No. These command lines run in their own terminals, so your accounts, subscriptions, and configuration keep working as-is.",
      },
      {
        q: "Which platforms are supported?",
        a: "The desktop app currently supports macOS only, with Apple Silicon and Intel builds.",
      },
      {
        q: "Where does my data live?",
        a: "Everything stays local: preferences and layouts are files on this Mac, terminal output is written locally, code changes are read live from Git, and secrets go to the macOS Keychain.",
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
      blog: "Blog",
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

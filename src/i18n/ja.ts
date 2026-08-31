import type { Dict } from "./zh";

/** 日本語コピー。製品語は Pier アプリ ja locale に合わせる。 */
export const ja: Dict = {
  meta: {
    title: "Pier — ローカル AI 開発ワークベンチ",
    description:
      "AI ターミナルがいくつか開いていても、誰が待っているか一目でわかる。Claude Code と Codex は元のターミナルのまま、隣でファイルを編集し Git を確認できる。macOS 向け無料オープンソース。",
    ogAlt: "Pier — ローカル AI 開発ワークベンチ",
  },
  nav: {
    why: "なぜ選ぶか",
    workflow: "ワークフロー",
    performance: "速さと手触り",
    features: "機能",
    cli: "CLI とプラグイン",
    download: "ダウンロード",
    faq: "よくある質問",
    docs: "ドキュメント",
    blog: "ブログ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · ローカル AI 開発ワークベンチ",
    title: "AI ターミナルがいくつか開いていても、誰が待っているか一目でわかる",
    sub: "Claude Code と Codex は自分のターミナルのまま、チャットにはしません。クリックでそのターミナルに戻り、隣でファイルを編集し Git を確認します。",
    ctaDownload: "macOS 版をダウンロード",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier のウィンドウ。左はまだ動いている Codex と Grok のターミナル、右は同じプロジェクトの Git 変更。",
    hint: "無料のオープンソース · macOS のみ",
    callouts: [
      { label: "元のターミナル。チャットではない" },
      { label: "もうひとつのセッションも、まだ動いている" },
      { label: "Git の確認は隣で" },
    ],
  },
  agents: {
    label: "これらのコマンドラインはそのまま動く",
  },
  why: {
    no: "01",
    label: "なぜ Pier か",
    title: "ターミナルは元のまま、隣で編集してコミット",
    lead: "Claude Code は元のターミナルのまま。誰が実行中で、誰が聞いていて、誰がエラーか、クリックで戻れる。ファイルの編集と Git の確認はすぐ隣。",
    points: [
      {
        title: "ターミナルは元のまま",
        body: "チャットにはしません。アカウントとサブスクリプションはそのまま。Claude Code と Codex は自分のターミナルで動きます。",
      },
      {
        title: "誰が待っているか見える",
        body: "実行中、対応が必要、エラーが一箇所に見えます。タブを探さず、クリックで元のターミナルに戻ります。",
      },
      {
        title: "ファイルと Git は、別窓を開かずに",
        body: "ファイルを開いて編集し、ファイルまたは変更のかたまり単位でステージ、コミット、プッシュ。一行直すのも Git を見るのも、別のエディタに切り替えなくてよい。",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "中核ワークフロー",
    title: "ターミナルは動かしたまま、隣で編集してコミット",
    steps: [
      {
        title: "コマンドラインを開く",
        body: "プロジェクト、または独立したディレクトリ（Git 作業ツリー）で Claude Code、Codex、その他のコマンドラインを開きます。",
      },
      {
        title: "誰が待っているか見る",
        body: "いくつか同時に走っているとき、誰が実行中で、誰が待っていて、誰がエラーか分かります。",
      },
      {
        title: "戻って書き続ける",
        body: "そのセッションをクリックし、元のターミナルで確認するか、続きを書きます。",
      },
      {
        title: "ファイルを編集し、Git を見る",
        body: "ターミナルは動かしたまま。ファイルを開いて直し、diff を見てからコミット。",
      },
    ],
  },
  performance: {
    no: "03",
    label: "パフォーマンスと手触り",
    title: "速さはエンジンから、手触りは設計から。",
    lead: "ターミナルの速さはエンジンで決まる。手触りは、コマンドの探し方と戻り方で決まる。Pier は両方を磨きます。",
    engine: {
      title: "Ghostty エンジン、ネイティブ描画",
      points: [
        {
          title: "ネイティブ描画",
          body: "ターミナルは Ghostty エンジンで、GPU 加速描画です。大量出力のスクロールも滑らかです。",
        },
        {
          title: "セッションは UI より長生き",
          body: "画面を更新したあとでも、再起動したあとでも、実行中のターミナルはつながったままです。",
        },
        {
          title: "コマンドライン画面向けの調整",
          body: "カーソルが見えるか、入力がどこに入るか。Claude Code や Codex の使い勝手に効く細部を、Pier はエンジン側で直しています。",
        },
      ],
      footnote: "macOS ネイティブターミナル · Ghostty",
    },
    keys: {
      title: "コマンドは検索、急ぎはワンキーで移動",
      note: "コマンドパレットは最近使った順で並び、あいまい検索もできます。ファイルを開く、ステージ、コミット、ブランチ切り替えも探せます。対応が必要なセッションへはワンキーでジャンプ。ショートカットは設定で検索し、割り当てを変えられます。",
      placeholder: "コマンドを検索…",
      rows: [
        { group: "Git", title: "コミット", keys: "" },
        { group: "Git", title: "ステージ", keys: "" },
        { group: "ファイル", title: "ファイルへ移動", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "コマンドパレット" },
        { keys: "⌘P", label: "クイックオープン" },
        { keys: "⌘T", label: "新規ターミナル" },
        { keys: "⌘⇧Y", label: "次に対応が必要なセッション" },
        { keys: "⌘D", label: "ペイン分割" },
        { keys: "⌘F", label: "パネル内検索" },
      ],
    },
  },
  features: {
    no: "04",
    label: "中核機能",
    title: "ターミナル、編集、Git、そしてキャンバス",
    items: [
      {
        title: "ネイティブターミナル",
        body: "GPU 加速のネイティブターミナル。プロジェクトや独立したディレクトリで Shell と、Claude Code や Codex などのコマンドラインを実行します。画面を更新しても、実行中のセッションはそのまま使えます。",
      },
      {
        title: "セッション状態",
        body: "実行中、対応が必要、エラーのセッションを一箇所で見て、クリックで対応するターミナルに戻れます。",
      },
      {
        title: "タスクごとに別のディレクトリ",
        body: "タスクごとに独立したプロジェクトディレクトリ（Git 作業ツリー）を用意し、ファイルの変更がぶつからないようにします。",
      },
      {
        title: "ファイル、編集、Git",
        body: "プロジェクトファイルを開いて編集。差分を確認し、ファイルまたは変更のかたまり単位でステージ。コミット、プッシュ、ブランチ切り替え、一時退避はコマンドパレットから。",
      },
      {
        title: "キャンバス",
        body: "キャンバスはプロジェクトと一緒に保存するページで、いま開いて説明を書いたり内容を置いたりできます。ターミナルと状態でカンバンや実行図を組む機能はまだ開発中です。",
      },
      {
        title: "保存できる配置",
        body: "タブ、分割、フローティングパネルでターミナル、エディタ、変更を整理。配置は自動保存され、開き直せば戻ります。",
      },
    ],
  },
  cli: {
    no: "05",
    label: "ローカル CLI とプラグイン",
    title: "この Mac には pier コマンドもある",
    cliTitle: "pier · この Mac で動いている Pier を操作",
    cliBody:
      "pier でプロジェクトを開き、ウィンドウとパネルを探し、ターミナルに文字やキーを送り、セッションと独立ディレクトリを照会します。接続先はこの Mac で動いている Pier だけです。リモートのサービスではありません。",
    termLines: [
      { cmd: "pier . --json", note: "# 現在のプロジェクトを Pier で開く" },
      { cmd: "pier status --json", note: "# ウィンドウ、パネル、セッション状態を照会" },
      { cmd: "pier panels list --json", note: "# 現在の配置のパネルを一覧" },
    ],
    pluginTitle: "プラグイン",
    pluginBody:
      "いま使えるのはアプリ同梱のプラグインと、公式が署名・検証したプラグインです。サードパーティの入手元はまだ開いていません。",
    readCli: "CLI マニュアルを読む",
    readPlugins: "プラグイン文書を読む",
  },
  boundaries: {
    label: "製品の境界",
    title: "いまは、これをしない",
    lead: "チャット窓にはしない。タスク一覧も、自動の割り振りも内蔵しない。",
    items: [
      {
        title: "タスク一覧も自動割り振りも内蔵しない",
        body: "アプリ自体にタスク一覧はなく、仕事を自動では振りません。カンバンや実行図は、ターミナルと状態をキャンバスで組む。この部分はまだ開発中です。",
      },
      {
        title: "チャット窓にはしない",
        body: "Claude Code と Codex は自分のターミナルのままです。アカウント、サブスクリプション、ショートカットはそのまま動きます。",
      },
      {
        title: "ツールを閉じ込めない",
        body: "離れても、元のコマンドライン、アカウント、リポジトリはそのまま動きます。",
      },
    ],
    closing: "",
  },
  download: {
    label: "ダウンロード",
    title: "ダウンロードしたら、すでに使っているコマンドラインを開く",
    lead: "無料のオープンソースです。プロジェクトフォルダを選び、すでに使っているコマンドラインを開けば、隣でファイルを編集し Git を確認できます。",
    latestPrefix: "最新バージョン",
    loading: "最新リリースを取得しています…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "GitHub Releases ですべてのバージョンを見る",
    macOnly: "デスクトップ版は現在 macOS のみです（Apple Silicon / Intel）。",
    cliPathNote:
      "起動時、インストール先に書き込めるなら pier コマンドを PATH に入れようとします。ターミナルで pier が見つからない場合は「設定 → ターミナル」からインストールできます。",
    sourceTitle: "またはソースから実行",
    sourceReqs:
      "Node ^24.15、pnpm ≥11.12、Xcode Command Line Tools、Homebrew、zig@0.15 が必要です。既存の Git 作業ツリーでは、先に pnpm setup:worktree を実行してください。",
    sourceLines: [
      "git clone https://github.com/runloom/pier.git",
      "cd pier",
      "pnpm bootstrap",
      "pnpm dev",
    ],
  },
  faq: {
    label: "FAQ",
    title: "よくある質問",
    items: [
      {
        q: "Pier は誰向けですか？",
        a: "すでにターミナルで Claude Code、Codex、OpenCode を動かしている人。いくつか同時に開く人、またはファイル編集と Git のためにもう一つのエディタに切り替えたくない人。セッションがひとつでも、ターミナル、編集、Git をここに置けます。主に Cursor のチャットで書く人には向きません。",
      },
      {
        q: "Cursor との違いは？",
        a: "Cursor はコマンドラインをチャットにします。Pier は元のターミナルのまま、誰が待っているか見せ、隣でファイルを編集し Git を確認します。",
      },
      {
        q: "herdr、cmux、tmux との違いは？",
        a: "herdr は今使っているターミナルの中で動き、分割と「誰が待っているか」を扱います。cmux はターミナルです。tmux は分割だけです。Pier はデスクトップの窓で、隣でファイルを編集し Git を確認できます。",
      },
      {
        q: "Orca との違いは？",
        a: "Orca はタスクとスケジュールを製品に内蔵します。Pier は内蔵しません。カンバンや実行図はキャンバスで組む。この部分はまだ開発中です。",
      },
      {
        q: "VS Code や Zed はまだ必要ですか？",
        a: "日常の編集、diff、コミットは Pier でできます。特定の拡張が手放せないなら、今のエディタを使い続ければよい。",
      },
      {
        q: "Pier はモデルリクエストをプロキシしたり改変したりしますか？",
        a: "しません。これらのコマンドラインはそれぞれのターミナルで動くので、アカウント、サブスクリプション、設定はそのままです。",
      },
      {
        q: "どのプラットフォームに対応していますか？",
        a: "デスクトップ版は現在 macOS のみで、Apple Silicon と Intel のインストーラーがあります。",
      },
      {
        q: "データはどこにありますか？",
        a: "すべてこの Mac の中です。設定と配置はローカルのファイル、ターミナル出力もローカル、コード変更は Git からその場で読み、秘密は macOS のキーチェーンに渡します。",
      },
    ],
  },
  footer: {
    tagline: "ローカル AI 開発ワークベンチ",
    product: "製品",
    docs: "文書",
    community: "コミュニティ",
    legal: "法務",
    links: {
      download: "ダウンロード",
      releases: "Releases",
      changelog: "変更履歴",
      blog: "ブログ",
      docsIndex: "文書索引",
      cliManual: "CLI マニュアル",
      plugins: "公式プラグイン",
      development: "開発ガイド",
      github: "GitHub",
      issues: "Issues",
      contributing: "貢献ガイド",
      security: "セキュリティ方針",
      license: "AGPL-3.0 ライセンス",
      trademarks: "商標",
      licensing: "ライセンス説明",
    },
  },
  a11y: {
    skip: "本文へスキップ",
    themeToggle: "テーマを切り替え",
    themeLight: "ライト",
    themeDark: "ダーク",
    themeSystem: "システムに合わせる",
    langMenu: "言語",
    langZh: "中文",
    langEn: "English",
    langJa: "日本語",
    langKo: "한국어",
    openMenu: "メニューを開く",
  },
};

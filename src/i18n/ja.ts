import type { Dict } from "./zh";

/** 日本語コピー。製品語は Pier アプリ ja locale に合わせる。 */
export const ja: Dict = {
  meta: {
    title: "Pier — ローカル AI 開発ワークベンチ",
    description:
      "AI ターミナルがいくつか開いていても、誰が待っているか一目でわかる。Claude Code と Codex は元のターミナルのまま、隣でファイルを編集し Git を扱える。macOS 向け無料オープンソース。",
    ogAlt: "Pier — ローカル AI 開発ワークベンチ",
  },
  nav: {
    why: "なぜ",
    workflow: "ワークフロー",
    performance: "パフォーマンス",
    features: "機能",
    cli: "CLI とプラグイン",
    download: "ダウンロード",
    faq: "FAQ",
    docs: "ドキュメント",
    blog: "ブログ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · ローカル AI 開発ワークベンチ",
    title: "AI ターミナルがいくつか開いていても、誰が待っているか一目でわかる",
    sub: "Claude Code と Codex は自分のターミナルのまま、チャットにはしません。クリックで戻り、隣でファイルを編集し Git を扱います。",
    ctaDownload: "macOS 版をダウンロード",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier のウィンドウ。左はまだ動いている Codex と Grok のターミナル、右は同じプロジェクトの Git 変更。",
    hint: "無料のオープンソース · macOS のみ",
    callouts: [
      { label: "元のターミナル。チャットではない" },
      { label: "もうひとつ、まだ動いているセッション" },
      { label: "Git レビューは隣で" },
    ],
  },
  agents: {
    label: "これらのコマンドラインはそのまま動く",
  },
  why: {
    no: "01",
    label: "なぜ Pier か",
    title: "ターミナルがいくつか開いていても、誰が待っているか見える",
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
        body: "ファイルを開いて編集し、ファイルまたは断片単位でステージ、コミット、プッシュ。一行直すのも Git を扱うのも、別のエディタに切り替えなくてよい。",
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
        body: "プロジェクトまたは Git 作業ツリーで Claude Code、Codex、その他のコマンドラインを開きます。",
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
          body: "UI を再読み込みしたあとでも、実行中のターミナルはそのまま利用できます。",
        },
        {
          title: "エージェント TUI への調整",
          body: "Pier は独自の Ghostty パッチを保守し、カーソル表示や入力フォーカスの引き継ぎなど、エージェント体験に関わる細部を仕上げています。",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "コマンドは検索、急ぎはワンキーで移動",
      note: "コマンドパレットは最近使用順とあいまい検索です。ファイルを開く、ステージ、コミット、ブランチも探せます。対応が必要なセッションへはワンキーでジャンプできます。設定ではショートカットを検索でき、割り当ては自由に変更できます。",
      placeholder: "コマンドを検索…",
      rows: [
        { group: "Git", title: "コミット", keys: "" },
        { group: "Git", title: "ファイルをステージ", keys: "" },
        { group: "ファイル", title: "ファイルへ移動", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "コマンドパレット" },
        { keys: "⌘P", label: "クイックオープン" },
        { keys: "⌘T", label: "新規ターミナル" },
        { keys: "⌘⇧Y", label: "次の対応が必要なエージェントへ" },
        { keys: "⌘D", label: "ペイン分割" },
        { keys: "⌘F", label: "パネル内検索" },
      ],
    },
  },
  features: {
    no: "04",
    label: "中核機能",
    title: "ターミナル、編集、Git、Canvas",
    items: [
      {
        title: "ネイティブターミナル",
        body: "Ghostty エンジン基盤のネイティブターミナル。GPU アクセラレーション描画で、プロジェクトやワークツリー内で Shell や CLI コーディングエージェントを実行します。UI を再読み込みしても実行中のセッションはそのまま使えます。",
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
        body: "プロジェクトファイルを開いて編集。差分をレビューし、ファイルまたは断片単位でステージ。コミット、プッシュ、ブランチ、stash はコマンドパレットから。",
      },
      {
        title: "Canvas",
        body: "プロジェクトと一緒に保存するページはすでに使えます。ターミナルと状態でカンバンや実行図を組む機能はまだ開発中です。",
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
    title: "ワークベンチの外に、もう一本のコマンドライン",
    cliTitle: "pier · この Mac で動いている Pier を操作",
    cliBody:
      "pier でプロジェクトを開き、ウインドウとパネルを探し、ターミナルを開いて文字やキーを送り、エージェントと作業ツリーを照会します。接続先は本機で動いている Pier だけです。リモート API ではありません。",
    termLines: [
      { cmd: "pier . --json", note: "# 現在のプロジェクトを Pier で開く" },
      { cmd: "pier status --json", note: "# ウインドウ、パネル、エージェント状態を照会" },
      { cmd: "pier panels list --json", note: "# 現在の配置のパネルを一覧" },
    ],
    pluginTitle: "プラグイン",
    pluginBody:
      "いま使えるのは組み込みプラグインと、公式署名・検証・バージョン管理されたプラグインです。対応する入手元はこれから増えます。",
    readCli: "CLI マニュアルを読む",
    readPlugins: "プラグイン文書を読む",
  },
  boundaries: {
    label: "製品の境界",
    title: "いまはどう選ぶか",
    lead: "チャット窓にはしない。変えられないタスクシステムも内蔵しない。",
    items: [
      {
        title: "タスク一覧も自動割り振りも内蔵しない",
        body: "アプリ自体にタスク台帳や自動スケジューラはありません。カンバンや実行図は、ターミナルと状態を Canvas で組む。この部分はまだ開発中です。",
      },
      {
        title: "チャット窓にはしない",
        body: "Claude Code と Codex は自分のターミナルのままです。アカウント、サブスクリプション、ショートカットはそのまま動きます。",
      },
      {
        title: "ツールを閉じ込めない",
        body: "離れても、元のコマンドライン、アカウント、リポジトリはそのまま動きます。いま使えるのは組み込みと公式プラグインで、対応する入手元はこれから増えます。",
      },
    ],
    closing: "",
  },
  download: {
    label: "ダウンロード",
    title: "ダウンロードしたら、すでに使っているコマンドラインをプロジェクトで開く",
    lead: "無料のオープンソースです。プロジェクトフォルダを選び、すでに使っているコマンドラインを開けば、隣でファイルを編集し Git を扱えます。",
    latestPrefix: "最新バージョン",
    loading: "最新リリースを取得しています…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "GitHub Releases ですべてのバージョンを見る",
    macOnly: "デスクトップ版は現在 macOS のみです（Apple Silicon / Intel）。",
    cliPathNote:
      "起動時、ディレクトリが書き込み可能なら pier を PATH に入れようとします。無い場合は「設定 → ターミナル」からインストールできます。",
    sourceTitle: "またはソースから実行",
    sourceReqs: "Node ^24.15、pnpm ≥11.12、Xcode Command Line Tools、Homebrew、zig@0.15 が必要です。",
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
        a: "すでにターミナルで Claude Code、Codex、OpenCode を動かしている人。いくつか同時に開く、またはファイル編集と Git のためにもう一つのエディタに切り替えたくない人。セッションがひとつでも、ターミナル、編集、Git の置き場として使えます。主に Cursor のチャットで書く人向けではありません。",
      },
      {
        q: "Cursor との違いは？",
        a: "Cursor はエージェントをチャットにします。Pier は元のターミナルのまま、誰が待っているか見せ、隣でファイルを編集し Git を扱います。",
      },
      {
        q: "herdr、cmux、tmux との違いは？",
        a: "彼らはペインと「誰が待っているか」を扱います。Herdr は今使っているターミナルの中で動きます。cmux は自分をターミナルだと言います。Pier はデスクトップの窓で、隣でファイルを編集し Git を確認できます。",
      },
      {
        q: "Orca との違いは？",
        a: "Orca はタスクとスケジュールを製品に内蔵します。Pier は内蔵しません。カンバンや実行図は Canvas で組む。この部分はまだ開発中です。",
      },
      {
        q: "VS Code や Zed はまだ必要ですか？",
        a: "日常の編集、diff、コミットは Pier でできます。特定の拡張が手放せないなら、今のエディタを使い続ければよい。",
      },
      {
        q: "Pier はモデルリクエストをプロキシしたり改変したりしますか？",
        a: "しません。エージェントはそれぞれのターミナルで動くので、アカウント、サブスクリプション、設定はそのままです。",
      },
      {
        q: "どのプラットフォームに対応していますか？",
        a: "デスクトップ版は現在 macOS のみで、Apple Silicon と Intel のインストーラーがあります。",
      },
      {
        q: "データはどこにありますか？",
        a: "すべてローカルです。設定と配置はローカル JSON、ターミナル出力はローカルの分割ファイル、コード変更は Git からリアルタイムに読み、秘密はシステムの安全な保存に渡します。",
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

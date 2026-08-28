import type { Dict } from "./zh";

/** 日本語コピー。製品語は Pier アプリ ja locale に合わせる。 */
export const ja: Dict = {
  meta: {
    title: "Pier — ローカル AI 開発ワークベンチ",
    description:
      "Claude Code、Codex、OpenCode などのネイティブ CLI をローカルプロジェクトで動かし続け、セッション状態を確認し、ターミナルに戻り、Git の変更を同じ保存可能なワークスペースでレビューします。ターミナルは Ghostty エンジンによる GPU アクセラレーション描画。macOS 向け無料オープンソース。",
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
    blog: "ブログ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · Apple Silicon / Intel",
    title: "ローカル AI 開発ワークベンチ",
    sub: "Claude Code、Codex、OpenCode などのネイティブ CLI をローカルプロジェクトで動かし続け、状態を見て、ターミナルに戻り、Git の変更を同じ保存可能なワークスペースでレビューします。",
    ctaDownload: "macOS 版をダウンロード",
    ctaGithub: "GitHub",
    shotAlt: "Pier のワークスペース。左は上下に重なった Codex と Grok のターミナル、右はファイルツリーとコードエディタ。",
    hint: "エージェントはいままでどおりネイティブターミナルで動きます。Pier は別のチャット画面ではありません。",
  },
  agents: {
    label: "すでに使っているエージェント CLI をそのまま実行",
  },
  why: {
    no: "01",
    label: "なぜ Pier か",
    title: "別のチャット画面ではありません",
    lead: "Pier は複数の CLI をひとつの会話ウィンドウに包み直しません。エージェントはそれぞれのネイティブターミナルで動き続け、複数セッションが同時に走っているとき、保存可能なひとつのワークスペースに横断状態を足します。",
    points: [
      {
        title: "ネイティブ優先",
        body: "エージェントはそれぞれのネイティブターミナルで動きます。Pier は包み込みもプロキシもツールチェーンの書き換えもしません。既存のアカウント、サブスクリプション、使い方はそのままです。",
      },
      {
        title: "セッション横断の状態",
        body: "実行中、対応が必要、エラーのセッションが一箇所に見えます。ペインをひとつずつ探さなくても、誰が待っているか分かります。",
      },
      {
        title: "状態は入口",
        body: "状態は終点ではありません。セッションをクリックすれば元のターミナルに戻り、同じプロジェクトの Git 変更を隣でレビューできます。",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "中核ワークフロー",
    title: "起動からレビューまで、現場を離れない",
    steps: [
      {
        title: "起動",
        body: "プロジェクトまたは Git 作業ツリーで Claude Code、Codex、OpenCode などのネイティブ CLI を起動します。",
      },
      {
        title: "状態を見る",
        body: "Pier で実行中、対応が必要、エラーの横断状態を追います。",
      },
      {
        title: "ターミナルに戻る",
        body: "セッションを選び、元のターミナルで入力、確認、続きの作業をします。",
      },
      {
        title: "変更をレビュー",
        body: "セッションを残したまま作業ツリーとステージ済みの Git 変更をレビューし、ファイルまたは断片単位でステージ／解除します。",
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
      title: "コマンドは検索、急ぎはワンキーで移動",
      note: "コマンドパレットは最近使用順とあいまい検索でアクションを集め、公式プラグインもコマンドを提供できます。対応が必要なセッションへはワンキーでジャンプできます。設定ではショートカットを検索でき、割り当ては自由に変更できます。",
      placeholder: "コマンドを検索…",
      rows: [
        { group: "パネル", title: "右に分割", keys: "⌘D" },
        { group: "パネル", title: "パネルの最大化を切り替え", keys: "⇧⌘M" },
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
    title: "ターミナルを載せ、状態を見せ、現場を整える",
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
        title: "並列隔離",
        body: "Git 作業ツリーを作成・管理し、別タスクを独立したブランチディレクトリで進め、衝突させません。",
      },
      {
        title: "ファイルと変更",
        body: "プロジェクトファイルを閲覧・プレビューし、作業ツリーとステージ済みの差分をレビューし、ファイルまたは断片単位でステージ／解除します。",
      },
      {
        title: "Canvas",
        body: "プラン、フロー、図表、文書、軽いプロトタイプをプロジェクトと一緒に保存するプレビュー可能なページにします。コンテンツであり、タスク編成器ではありません。",
      },
      {
        title: "保存できる配置",
        body: "タブ、分割、フローティングパネルでターミナル、ファイル、変更を整理。配置は自動保存され、開き直せば戻ります。",
      },
    ],
  },
  cli: {
    no: "05",
    label: "ローカル CLI と公式プラグイン",
    title: "ワークベンチの外に、もう一本のコマンドライン",
    cliTitle: "pier · この Mac で動いている Pier を操作",
    cliBody:
      "pier でプロジェクトを開き、ウインドウとパネルを探し、ターミナルを開いて文字やキーを送り、エージェントと作業ツリーを照会します。接続先は本機で動いている Pier だけです。リモート API ではありません。",
    termLines: [
      { cmd: "pier open . --json", note: "# 現在のプロジェクトを Pier で開く" },
      { cmd: "pier status --json", note: "# ウインドウ、パネル、エージェント状態を照会" },
      { cmd: "pier panels list --json", note: "# 現在の配置のパネルを一覧" },
    ],
    pluginTitle: "公式プラグイン",
    pluginBody:
      "アプリ同梱の組み込みプラグインと、公式署名・検証・バージョン管理された公式プラグインに対応します。サードパーティのプラグイン市場は開きません。信頼境界は監査できます。",
    readCli: "CLI マニュアルを読む",
    readPlugins: "プラグイン文書を読む",
  },
  boundaries: {
    label: "製品の境界",
    title: "Pier が意図してやらないこと",
    lead: "境界があるからツールは信頼できます。Pier はターミナルを載せ、状態を見せ、ワークスペースを整えます。それ以上ではありません。",
    items: [
      {
        title: "タスク編成はしない",
        body: "タスクの分割、配布、スケジューリングはせず、台帳やカンバンもありません。仕事の割り振りはあなたとエージェントの間です。",
      },
      {
        title: "エージェントを包み直さない",
        body: "CLI をチャット製品に作り直しません。Canvas はコードと一緒に保存するプロジェクトコンテンツであり、タスク編成器ではありません。",
      },
      {
        title: "サードパーティ市場は開かない",
        body: "組み込みプラグインと、公式署名・検証・バージョン管理された公式プラグインだけです。監査できない第三者コードは入れません。",
      },
    ],
    closing: "判定は簡単です。Pier を外しても、同じ作業はネイティブツールでできます。Pier は現場を見やすくするだけです。",
  },
  download: {
    label: "ダウンロード",
    title: "エージェントをプロジェクトに係留する",
    lead: "無料のオープンソースです。ダウンロードしてプロジェクトフォルダを選べば、エージェントの実行、ファイル閲覧、変更レビューを始められます。",
    latestPrefix: "最新バージョン",
    loading: "最新リリースを取得しています…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "GitHub Releases ですべてのバージョンを見る",
    macOnly: "デスクトップ版は現在 macOS のみです（Apple Silicon / Intel）。",
    cliPathNote:
      "リリース版は起動時に pier コマンドを PATH へ入れようとします。まだ無い場合は「設定 → ターミナル」からインストールできます。",
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
        q: "Pier はモデルリクエストをプロキシしたり改変したりしますか？",
        a: "しません。エージェントはそれぞれのネイティブターミナルで動くので、アカウント、サブスクリプション、設定はそのままです。Pier はターミナルを載せ、状態を集め、ワークスペースを整えるだけです。",
      },
      {
        q: "どのプラットフォームに対応していますか？",
        a: "デスクトップ版は現在 macOS のみで、Apple Silicon と Intel のインストーラーがあります。",
      },
      {
        q: "tmux のようなターミナルマルチプレクサとの違いは？",
        a: "Pier はデスクトップワークベンチです。安定したターミナルに加え、セッション横断の状態、Git 変更レビュー、ファイルプレビュー、Canvas、保存可能なパネル配置があります。",
      },
      {
        q: "データはどこにありますか？",
        a: "すべてローカルです。設定と配置はローカル JSON、ターミナル出力はローカルの分割ファイル、コード変更は Git からリアルタイムに読み、秘密はシステムの安全な保存に渡します。",
      },
      {
        q: "Pier のターミナルエンジンは何ですか？",
        a: "ターミナルは Ghostty のネイティブコア（Swift / Zig）を基盤とし、GPU アクセラレーションで描画されます。Pier はエージェント TUI 向けの独自パッチを上乗せして保守しており、UI を再読み込みしても実行中のターミナルはそのまま使えます。",
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

import type { Dict } from "./zh";

/** 日本語コピー。製品語は Pier アプリ ja locale に合わせる。 */
export const ja: Dict = {
  meta: {
    title: "Pier — ローカル AI 開発ワークベンチ",
    description:
      "Claude Code、Codex、OpenCode などのネイティブ CLI をローカルプロジェクトで動かし続け、セッション状態を確認し、ターミナルに戻り、Git の変更を同じ保存可能なワークスペースでレビューします。macOS 向け無料オープンソース。",
    ogAlt: "Pier — ローカル AI 開発ワークベンチ",
  },
  nav: {
    why: "なぜ",
    workflow: "ワークフロー",
    features: "機能",
    cli: "CLI とプラグイン",
    download: "ダウンロード",
    faq: "FAQ",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · Apple Silicon / Intel · オープンソース（AGPL-3.0）",
    title: "ローカル AI 開発ワークベンチ",
    sub: "Claude Code、Codex、OpenCode などのネイティブ CLI をローカルプロジェクトで動かし続け、状態を見て、ターミナルに戻り、Git の変更を同じ保存可能なワークスペースでレビューします。",
    ctaDownload: "macOS 版をダウンロード",
    ctaGithub: "GitHub",
    shotAlt: "Pier のワークスペース。左はターミナルのエージェント、中央はファイルツリー、右はコードレビュー。",
    hint: "エージェントはいままでどおりネイティブターミナルで動きます。Pier は別のチャット画面ではありません。",
  },
  agents: {
    label: "すでに使っているエージェント CLI をそのまま実行",
    names: ["Claude Code", "Codex", "OpenCode", "Cursor", "Grok"],
    more: "……ターミナルで動く CLI ならどれでも",
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
        body: "セッションを残したまま作業ツリーとステージ済みの Git 変更をレビューし、ファイルまたは hunk 単位でステージ／解除します。",
      },
    ],
  },
  features: {
    no: "03",
    label: "中核機能",
    title: "ターミナルを載せ、状態を見せ、現場を整える",
    items: [
      {
        title: "ネイティブターミナル",
        body: "プロジェクトや作業ツリーでシェルと CLI コーディングエージェントを実行。画面を再読み込みしても、動いているターミナルはそのまま使えます。",
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
        body: "プロジェクトファイルを閲覧し、作業ツリーとステージ済みの差分をレビューし、ファイルまたは hunk 単位でステージ／解除します。",
      },
      {
        title: "Canvas",
        body: "方案、フロー、図表、文書、軽いプロトタイプをプロジェクトと一緒に保存するプレビュー可能なページにします。コンテンツであり、タスク編成器ではありません。",
      },
      {
        title: "保存できる配置",
        body: "タブ、分割、フローティングパネルでターミナル、ファイル、変更を整理。配置は自動保存され、開き直せば戻ります。",
      },
    ],
  },
  cli: {
    no: "04",
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
      "リリース版はシェルの PATH を自動では変えません。ローカル CLI は /Applications/Pier.app/Contents/Resources/bin/pier を直接実行してください。",
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
        a: "デスクトップ版は現在 macOS のみで、Apple Silicon と Intel のインストール包があります。",
      },
      {
        q: "tmux のようなターミナルマルチプレクサとの違いは？",
        a: "Pier はデスクトップワークベンチです。安定したターミナルに加え、セッション横断の状態、Git 変更レビュー、ファイルプレビュー、Canvas、保存可能なパネル配置があります。",
      },
      {
        q: "データはどこにありますか？",
        a: "すべてローカルです。設定と配置はローカル JSON、ターミナル出力はローカルの分段ファイル、コード変更は Git からリアルタイムに読み、秘密はシステムの安全な保存に渡します。",
      },
      {
        q: "ライセンスは何ですか？",
        a: "ソースは AGPL-3.0-only です。クローズドソース配布、ホワイトラベル、企業サポート、AGPLv3 を超える権利には別の商業契約が必要です。",
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
    note: "ソースは AGPL-3.0-only。クローズドソース配布、ホワイトラベル、企業サポートには別の商業契約が必要です。",
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

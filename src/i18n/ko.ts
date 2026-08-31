import type { Dict } from "./zh";

/** 한국어 카피. 제품 용어는 Pier 앱 ko locale에 맞춘다. */
export const ko: Dict = {
  meta: {
    title: "Pier — 로컬 AI 개발 워크벤치",
    description:
      "AI 터미널 여러 개가 열려 있어도, 누가 기다리는지 한눈에 보입니다. Claude Code와 Codex는 원래 터미널에 두고, 옆에서 파일을 고치고 Git을 봅니다. macOS용 무료 오픈 소스.",
    ogAlt: "Pier — 로컬 AI 개발 워크벤치",
  },
  nav: {
    why: "왜 쓰나",
    workflow: "워크플로",
    performance: "성능과 사용감",
    features: "기능",
    cli: "CLI와 플러그인",
    download: "다운로드",
    faq: "자주 묻는 질문",
    docs: "문서",
    blog: "블로그",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · 로컬 AI 개발 워크벤치",
    title: "AI 터미널 여러 개가 열려 있어도, 누가 기다리는지 한눈에",
    sub: "Claude Code와 Codex는 자기 터미널에 그대로 두고, 채팅으로 접지 않습니다. 클릭해서 그 터미널로 돌아가고, 옆에서 파일을 고치고 Git을 봅니다.",
    ctaDownload: "macOS 버전 다운로드",
    ctaGithub: "GitHub",
    shotAlt:
      "Pier 창: 왼쪽은 아직 돌아가는 Codex와 Grok 터미널, 오른쪽은 같은 프로젝트의 Git 변경.",
    hint: "무료 오픈 소스 · macOS만",
    callouts: [
      { label: "원래 터미널이지, 채팅이 아닙니다" },
      { label: "다른 세션도 아직 돌아가고, 보입니다" },
      { label: "Git은 옆에서 봅니다" },
    ],
  },
  agents: {
    label: "이 명령줄은 가져오면 바로 돌아갑니다",
  },
  why: {
    no: "01",
    label: "왜 Pier인가",
    title: "터미널은 그대로, 옆에서 고치고 커밋",
    lead: "Claude Code는 원래 터미널에 그대로 있습니다. 누가 돌고, 누가 묻고, 누가 오류인지, 클릭하면 돌아갑니다. 파일 수정과 Git 확인은 바로 옆에 있습니다.",
    points: [
      {
        title: "터미널은 원래 그 터미널",
        body: "채팅으로 접지 않습니다. 계정과 구독은 그대로입니다. Claude Code와 Codex는 자기 터미널에서 돌아갑니다.",
      },
      {
        title: "누가 기다리는지 보입니다",
        body: "실행 중, 처리 필요, 오류가 한곳에 보입니다. 탭을 뒤지지 않고 클릭하면 원래 터미널로 돌아갑니다.",
      },
      {
        title: "파일과 Git, 다른 창을 열지 않음",
        body: "파일을 열어 고치고, 파일 또는 변경 덩어리 단위로 스테이지, 커밋, 푸시합니다. 한 줄 고치거나 Git을 보는 데 다른 편집기로 바꿀 필요는 없습니다.",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "핵심 워크플로",
    title: "터미널은 그대로 두고, 옆에서 고치고 커밋",
    steps: [
      {
        title: "명령줄을 엽니다",
        body: "프로젝트나 독립 디렉터리(Git 작업 트리)에서 Claude Code, Codex 또는 다른 명령줄을 엽니다.",
      },
      {
        title: "누가 기다리는지 봅니다",
        body: "여러 세션이 동시에 돌 때, 누가 실행 중이고, 누가 기다리고, 누가 오류인지 봅니다.",
      },
      {
        title: "돌아가서 이어서 씁니다",
        body: "그 세션을 눌러 원래 터미널에서 확인하거나 이어서 씁니다.",
      },
      {
        title: "파일을 고치고 Git을 봅니다",
        body: "터미널은 그대로 둡니다. 파일을 열어 고치고, diff를 본 뒤 커밋합니다.",
      },
    ],
  },
  performance: {
    no: "03",
    label: "성능과 사용감",
    title: "빠름은 엔진에서, 편안함은 설계에서.",
    lead: "터미널이 빠른지는 엔진이 정합니다. 편한지는 명령을 찾고 돌아가는 방식이 정합니다. Pier는 둘 다 다듬습니다.",
    engine: {
      title: "Ghostty 엔진, 네이티브 그리기",
      points: [
        {
          title: "네이티브 렌더링",
          body: "터미널은 Ghostty 엔진과 GPU 가속 렌더링을 씁니다. 출력이 많아도 스크롤이 따라옵니다.",
        },
        {
          title: "세션은 UI보다 오래 삽니다",
          body: "화면을 새로 고치거나 다시 시작한 뒤에도, 실행 중인 터미널은 이어집니다.",
        },
        {
          title: "명령줄 화면에 맞춘 다듬기",
          body: "커서가 보이는지, 입력이 어디로 가는지. Claude Code와 Codex를 쓰기 좋게 만드는 부분을 Pier가 엔진에서 고칩니다.",
        },
      ],
      footnote: "macOS 네이티브 터미널 · Ghostty",
    },
    keys: {
      title: "명령은 검색, 급한 일은 바로 이동",
      note: "커맨드 팔레트는 최근 사용 순이고 퍼지 검색도 됩니다. 파일 열기, 스테이지, 커밋, 브랜치 전환도 찾을 수 있습니다. 처리가 필요한 세션은 한 키로 이동합니다. 설정에서 단축키를 검색하고 바꿀 수 있습니다.",
      placeholder: "명령 검색…",
      rows: [
        { group: "Git", title: "커밋", keys: "" },
        { group: "Git", title: "스테이지", keys: "" },
        { group: "파일", title: "파일로 이동", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "커맨드 팔레트" },
        { keys: "⌘P", label: "빠른 파일 열기" },
        { keys: "⌘T", label: "새 터미널" },
        { keys: "⌘⇧Y", label: "처리가 필요한 다음 세션" },
        { keys: "⌘D", label: "창 분할" },
        { keys: "⌘F", label: "패널에서 찾기" },
      ],
    },
  },
  features: {
    no: "04",
    label: "핵심 기능",
    title: "터미널, 편집, Git, 그리고 캔버스",
    items: [
      {
        title: "네이티브 터미널",
        body: "GPU 가속 네이티브 터미널입니다. 프로젝트나 독립 디렉터리에서 Shell과 Claude Code, Codex 같은 명령줄을 실행합니다. 화면을 새로 고쳐도 실행 중인 세션은 그대로 씁니다.",
      },
      {
        title: "세션 상태",
        body: "실행 중, 처리 필요, 오류 세션을 한곳에서 보고, 클릭하면 해당 터미널로 돌아갑니다.",
      },
      {
        title: "작업마다 따로 둔 디렉터리",
        body: "작업마다 독립된 프로젝트 디렉터리(Git 작업 트리)를 두어 파일 수정이 서로 부딪치지 않게 합니다.",
      },
      {
        title: "파일, 편집, Git",
        body: "프로젝트 파일을 열어 편집합니다. diff를 보고 파일 또는 변경 덩어리 단위로 스테이지합니다. 커밋, 푸시, 브랜치 전환, 잠시 내려놓기는 커맨드 팔레트에서 합니다.",
      },
      {
        title: "캔버스",
        body: "캔버스는 프로젝트와 함께 저장되는 페이지로, 지금 열어서 설명을 쓰고 내용을 놓을 수 있습니다. 터미널과 상태로 칸반과 실행 그림을 짜는 일은 아직 만드는 중입니다.",
      },
      {
        title: "저장되는 레이아웃",
        body: "탭, 분할, 플로팅 패널로 터미널, 편집기, 변경을 정리합니다. 레이아웃은 자동 저장되고 다시 열면 복원됩니다.",
      },
    ],
  },
  cli: {
    no: "05",
    label: "로컬 CLI와 플러그인",
    title: "이 Mac에는 pier 명령도 있습니다",
    cliTitle: "pier · 이 Mac에서 실행 중인 Pier 제어",
    cliBody:
      "pier로 프로젝트를 열고, 창과 패널을 찾고, 터미널에 글자나 키를 보내고, 세션과 독립 디렉터리를 조회합니다. 연결 대상은 이 기기에서 실행 중인 Pier뿐입니다. 원격 서비스가 아닙니다.",
    termLines: [
      { cmd: "pier . --json", note: "# 현재 프로젝트를 Pier에서 열기" },
      { cmd: "pier status --json", note: "# 창, 패널, 세션 상태 조회" },
      { cmd: "pier panels list --json", note: "# 현재 레이아웃의 패널 목록" },
    ],
    pluginTitle: "플러그인",
    pluginBody:
      "지금은 앱에 들어 있는 플러그인과 공식이 서명·검증한 플러그인을 쓸 수 있습니다. 서드파티 출처는 아직 열려 있지 않습니다.",
    readCli: "CLI 매뉴얼 읽기",
    readPlugins: "플러그인 문서 읽기",
  },
  boundaries: {
    label: "제품 경계",
    title: "지금은 하지 않는 일",
    lead: "채팅 창으로 만들지 않고, 작업 목록이나 자동 배정도 내장하지 않습니다.",
    items: [
      {
        title: "작업 목록이나 자동 배정을 내장하지 않음",
        body: "앱 자체에 작업 목록은 없고, 일을 자동으로 나누지도 않습니다. 칸반과 실행 그림은 터미널과 상태를 캔버스에서 짭니다. 이 부분은 아직 만드는 중입니다.",
      },
      {
        title: "채팅 창으로 만들지 않음",
        body: "Claude Code와 Codex는 자기 터미널에 그대로 둡니다. 계정, 구독, 단축키는 그대로 동작합니다.",
      },
      {
        title: "도구를 가두지 않음",
        body: "떠나도 원래 명령줄, 계정, 저장소는 그대로 동작합니다.",
      },
    ],
    closing: "",
  },
  download: {
    label: "다운로드",
    title: "받은 뒤, 이미 쓰는 명령줄을 여세요",
    lead: "무료 오픈 소스입니다. 프로젝트 폴더를 고르고, 이미 쓰는 명령줄을 열면 옆에서 파일을 고치고 Git을 볼 수 있습니다.",
    latestPrefix: "최신 버전",
    loading: "최신 릴리스를 가져오는 중…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "GitHub Releases에서 모든 버전 보기",
    macOnly: "데스크톱 앱은 현재 macOS만 지원합니다(Apple Silicon / Intel).",
    cliPathNote:
      "시작할 때 설치 폴더에 쓸 수 있으면 pier 명령을 PATH에 넣으려 합니다. 터미널에서 pier를 찾지 못하면 설정 → 터미널에서 설치하세요.",
    sourceTitle: "또는 소스에서 실행",
    sourceReqs:
      "Node ^24.15, pnpm ≥11.12, Xcode Command Line Tools, Homebrew, zig@0.15가 필요합니다. 이미 있는 Git 작업 트리에서는 먼저 pnpm setup:worktree를 실행하세요.",
    sourceLines: [
      "git clone https://github.com/runloom/pier.git",
      "cd pier",
      "pnpm bootstrap",
      "pnpm dev",
    ],
  },
  faq: {
    label: "FAQ",
    title: "자주 묻는 질문",
    items: [
      {
        q: "Pier는 누구를 위한 건가요?",
        a: "이미 터미널에서 Claude Code, Codex, OpenCode를 쓰는 사람. 여러 개를 동시에 열거나, 파일 수정과 Git을 위해 다른 편집기로 바꾸고 싶지 않은 사람. 세션이 하나여도 터미널, 편집, Git을 여기에 둘 수 있습니다. 주로 Cursor 채팅에서 코드를 쓰는 사람에게는 이 도구가 아닙니다.",
      },
      {
        q: "Cursor와 무엇이 다른가요?",
        a: "Cursor는 명령줄을 채팅으로 접습니다. Pier는 원래 터미널에 두고, 누가 기다리는지 보여 주고, 옆에서 파일을 고치고 Git을 봅니다.",
      },
      {
        q: "herdr, cmux, tmux와 무엇이 다른가요?",
        a: "herdr는 이미 쓰는 터미널 안에서 돌아가며 화면을 나누고, 누가 기다리는지도 보여 줍니다. cmux는 터미널입니다. tmux는 화면만 나눕니다. Pier는 데스크톱 창이고, 옆에서 파일을 고치고 Git을 볼 수 있습니다.",
      },
      {
        q: "Orca와 무엇이 다른가요?",
        a: "Orca는 작업과 스케줄을 제품에 넣습니다. Pier는 넣지 않습니다. 칸반과 실행 그림은 캔버스에서 짭니다. 이 부분은 아직 만드는 중입니다.",
      },
      {
        q: "VS Code나 Zed를 따로 열어야 하나요?",
        a: "일상적인 편집, diff, 커밋은 Pier에서 할 수 있습니다. 특정 확장을 빼놓을 수 없다면 그 편집기를 계속 쓰면 됩니다.",
      },
      {
        q: "Pier가 모델 요청을 프록시하거나 바꾸나요?",
        a: "아닙니다. 이 명령줄은 각자의 터미널에서 실행되므로 계정, 구독, 설정은 그대로입니다.",
      },
      {
        q: "어떤 플랫폼을 지원하나요?",
        a: "데스크톱 앱은 현재 macOS만 지원하며 Apple Silicon과 Intel 설치 패키지가 있습니다.",
      },
      {
        q: "데이터는 어디에 있나요?",
        a: "모두 이 Mac에 있습니다. 설정과 레이아웃은 로컬 파일, 터미널 출력도 로컬, 코드 변경은 Git에서 바로 읽고, 비밀은 macOS 키체인으로 갑니다.",
      },
    ],
  },
  footer: {
    tagline: "로컬 AI 개발 워크벤치",
    product: "제품",
    docs: "문서",
    community: "커뮤니티",
    legal: "법률",
    links: {
      download: "다운로드",
      releases: "Releases",
      changelog: "변경 로그",
      blog: "블로그",
      docsIndex: "문서 색인",
      cliManual: "CLI 매뉴얼",
      plugins: "공식 플러그인",
      development: "개발 가이드",
      github: "GitHub",
      issues: "Issues",
      contributing: "기여 가이드",
      security: "보안 정책",
      license: "AGPL-3.0 라이선스",
      trademarks: "상표",
      licensing: "라이선스 설명",
    },
  },
  a11y: {
    skip: "본문으로 건너뛰기",
    themeToggle: "테마 전환",
    themeLight: "라이트",
    themeDark: "다크",
    themeSystem: "시스템 따름",
    langMenu: "언어",
    langZh: "中文",
    langEn: "English",
    langJa: "日本語",
    langKo: "한국어",
    openMenu: "메뉴 열기",
  },
};

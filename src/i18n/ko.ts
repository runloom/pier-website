import type { Dict } from "./zh";

/** 한국어 카피. 제품 용어는 Pier 앱 ko locale에 맞춘다. */
export const ko: Dict = {
  meta: {
    title: "Pier — 로컬 AI 개발 워크벤치",
    description:
      "Claude Code, Codex, OpenCode 같은 네이티브 CLI를 로컬 프로젝트에서 계속 실행하고, 세션 상태를 보고, 터미널로 돌아가 Git 변경을 같은 저장 가능한 워크스페이스에서 검토하세요. 터미널은 Ghostty 엔진 기반의 GPU 가속 렌더링을 사용합니다. macOS용 무료 오픈 소스.",
    ogAlt: "Pier — 로컬 AI 개발 워크벤치",
  },
  nav: {
    why: "이유",
    workflow: "워크플로",
    performance: "성능",
    features: "기능",
    cli: "CLI와 플러그인",
    download: "다운로드",
    faq: "FAQ",
    blog: "블로그",
    github: "GitHub",
  },
  hero: {
    badge: "macOS · Apple Silicon / Intel",
    title: "로컬 AI 개발 워크벤치",
    sub: "Claude Code, Codex, OpenCode 같은 네이티브 CLI를 로컬 프로젝트에서 계속 실행하고, 상태를 보고, 터미널로 돌아가 Git 변경을 같은 저장 가능한 워크스페이스에서 검토하세요.",
    ctaDownload: "macOS 버전 다운로드",
    ctaGithub: "GitHub",
    shotAlt: "Pier 작업 공간: 왼쪽은 위아래 Codex와 Grok 터미널, 오른쪽은 파일 트리와 코드 편집기.",
    hint: "에이전트는 그대로 네이티브 터미널에서 실행됩니다. Pier는 또 다른 채팅 화면이 아닙니다.",
  },
  agents: {
    label: "이미 쓰는 에이전트 CLI를 그대로 실행",
  },
  why: {
    no: "01",
    label: "왜 Pier인가",
    title: "또 다른 채팅 화면이 아닙니다",
    lead: "Pier는 여러 CLI를 하나의 대화 창으로 다시 포장하지 않습니다. 에이전트는 각자의 네이티브 터미널에서 계속 실행되고, 여러 세션이 동시에 돌 때 저장 가능한 하나의 워크스페이스에 교차 세션 상태를 더합니다.",
    points: [
      {
        title: "네이티브 우선",
        body: "에이전트는 각자의 네이티브 터미널에서 실행됩니다. Pier는 감싸거나 프록시하거나 툴체인을 다시 쓰지 않습니다. 기존 계정, 구독, 사용 습관은 그대로입니다.",
      },
      {
        title: "교차 세션 상태",
        body: "실행 중, 처리 필요, 오류 세션이 한곳에 보입니다. 페인마다 뒤지지 않아도 누가 기다리는지 알 수 있습니다.",
      },
      {
        title: "상태는 입구",
        body: "상태는 끝이 아닙니다. 세션을 클릭하면 원래 터미널로 돌아가고, 같은 프로젝트의 Git 변경을 옆에서 검토할 수 있습니다.",
      },
    ],
  },
  workflow: {
    no: "02",
    label: "핵심 워크플로",
    title: "시작부터 검토까지, 현장을 떠나지 않음",
    steps: [
      {
        title: "시작",
        body: "프로젝트나 Git 작업 트리에서 Claude Code, Codex, OpenCode 같은 네이티브 CLI를 시작합니다.",
      },
      {
        title: "상태 보기",
        body: "Pier에서 실행 중, 처리 필요, 오류의 교차 세션 상태를 봅니다.",
      },
      {
        title: "터미널로 돌아가기",
        body: "세션을 골라 원래 터미널에서 입력, 확인, 이어지는 작업을 합니다.",
      },
      {
        title: "변경 검토",
        body: "세션을 유지한 채 작업 트리와 스테이징된 Git 변경을 검토하고, 파일 또는 덩어리 단위로 스테이지/해제합니다.",
      },
    ],
  },
  performance: {
    no: "03",
    label: "성능과 사용감",
    title: "빠름은 엔진에서, 편안함은 설계에서.",
    lead: "터미널 커널이 하한을 정하고, 손가락이 움직이는 경로가 사용감을 정합니다. Pier는 두 가지 모두를 제품 기능으로 다듬습니다.",
    engine: {
      title: "Ghostty 엔진, 끝까지 네이티브",
      points: [
        {
          title: "네이티브 렌더링",
          body: "터미널은 Ghostty native(Swift / Zig로 빌드한 XCFramework)가 구동하고 GPU 가속 렌더링을 사용합니다. 대량 출력 스크롤도 부드럽게 따라옵니다.",
        },
        {
          title: "세션은 UI보다 오래 삽니다",
          body: "UI를 다시 로드하거나 재시작한 후에도 실행 중인 터미널은 그대로 사용할 수 있습니다.",
        },
        {
          title: "에이전트 TUI에 맞춘 다듬기",
          body: "Pier는 자체 Ghostty 패치를 유지 관리하며, 커서 표시와 입력 포커스 전환 같은 에이전트 경험의 세부 사항을 다듬습니다.",
        },
      ],
      footnote: "macOS · Swift / Zig / libghostty",
    },
    keys: {
      title: "명령은 검색, 급한 일은 바로 이동",
      note: "커맨드 팔레트는 최근 사용 순 퍼지 검색으로 동작을 모으고, 공식 플러그인도 명령을 제공할 수 있습니다. 처리가 필요한 세션은 바로 이동합니다. 설정에서 단축키를 검색하고 자유롭게 재배정하세요.",
      placeholder: "명령 검색…",
      rows: [
        { group: "패널", title: "오른쪽으로 분할", keys: "⌘D" },
        { group: "패널", title: "패널 최대화 전환", keys: "⇧⌘M" },
        { group: "파일", title: "파일로 이동", keys: "⌘P" },
      ],
      shortcuts: [
        { keys: "⇧⌘P", label: "커맨드 팔레트" },
        { keys: "⌘P", label: "빠른 파일 열기" },
        { keys: "⌘T", label: "새 터미널" },
        { keys: "⌘⇧Y", label: "처리가 필요한 다음으로" },
        { keys: "⌘D", label: "창 분할" },
        { keys: "⌘F", label: "패널에서 찾기" },
      ],
    },
  },
  features: {
    no: "04",
    label: "핵심 기능",
    title: "터미널을 담고, 상태를 보여 주고, 현장을 정리",
    items: [
      {
        title: "네이티브 터미널",
        body: "Ghostty 엔진 기반의 네이티브 터미널로 GPU 가속 렌더링을 제공합니다. 프로젝트나 작업 트리에서 Shell과 CLI 코딩 에이전트를 실행하고, UI를 다시 로드해도 실행 중인 세션은 그대로 유지됩니다.",
      },
      {
        title: "세션 상태",
        body: "실행 중, 처리 필요, 오류 세션을 한곳에서 보고, 클릭하면 해당 터미널로 돌아갑니다.",
      },
      {
        title: "병렬 격리",
        body: "Git 작업 트리를 만들고 관리해 다른 작업을 독립 분기 디렉터리에서 진행하고 서로 간섭하지 않습니다.",
      },
      {
        title: "파일과 변경",
        body: "프로젝트 파일을 둘러보고 미리 보며, 작업 트리와 스테이징 차이를 검토하고, 파일 또는 덩어리 단위로 스테이지/해제합니다.",
      },
      {
        title: "Canvas",
        body: "계획, 흐름, 도표, 문서, 가벼운 프로토타입을 프로젝트와 함께 저장되는 미리 보기 페이지로 둡니다. 콘텐츠이며 작업 오케스트레이터가 아닙니다.",
      },
      {
        title: "저장되는 레이아웃",
        body: "탭, 분할, 플로팅 패널로 터미널, 파일, 변경을 정리합니다. 레이아웃은 자동 저장되고 다시 열면 복원됩니다.",
      },
    ],
  },
  cli: {
    no: "05",
    label: "로컬 CLI와 공식 플러그인",
    title: "워크벤치 밖에, 명령줄이 하나 더 있습니다",
    cliTitle: "pier · 이 Mac에서 실행 중인 Pier 제어",
    cliBody:
      "pier로 프로젝트를 열고, 윈도우와 패널을 찾고, 터미널을 열어 텍스트나 키를 보내며, 에이전트와 작업 트리를 조회합니다. 연결 대상은 이 기기에서 실행 중인 Pier뿐입니다. 원격 API가 아닙니다.",
    termLines: [
      { cmd: "pier open . --json", note: "# 현재 프로젝트를 Pier에서 열기" },
      { cmd: "pier status --json", note: "# 윈도우, 패널, 에이전트 상태 조회" },
      { cmd: "pier panels list --json", note: "# 현재 레이아웃의 패널 목록" },
    ],
    pluginTitle: "공식 플러그인",
    pluginBody:
      "앱과 함께 제공되는 내장 플러그인과, 공식 서명·검증·버전 관리되는 공식 플러그인을 지원합니다. 서드파티 플러그인 마켓은 열지 않습니다. 신뢰 경계는 감사할 수 있습니다.",
    readCli: "CLI 매뉴얼 읽기",
    readPlugins: "플러그인 문서 읽기",
  },
  boundaries: {
    label: "제품 경계",
    title: "Pier가 일부러 하지 않는 일",
    lead: "경계가 있어야 도구를 믿을 수 있습니다. Pier는 터미널을 담고, 상태를 보여 주고, 워크스페이스를 정리합니다. 그 이상도 이하도 아닙니다.",
    items: [
      {
        title: "작업 오케스트레이션 없음",
        body: "작업을 자동으로 쪼개거나 나눠 주거나 스케줄하지 않으며, 작업 대장이나 칸반도 없습니다. 일을 어떻게 나눌지는 당신과 에이전트 사이입니다.",
      },
      {
        title: "에이전트를 다시 감싸지 않음",
        body: "CLI를 채팅 제품으로 다시 포장하지 않습니다. Canvas는 코드와 함께 저장되는 프로젝트 콘텐츠이며 작업 오케스트레이터가 아닙니다.",
      },
      {
        title: "서드파티 마켓 없음",
        body: "내장 플러그인과 공식 서명·검증·버전 관리되는 공식 플러그인만 있습니다. 감사할 수 없는 제3자 코드는 들이지 않습니다.",
      },
    ],
    closing: "판정은 단순합니다. Pier를 빼도 같은 일은 네이티브 도구로 할 수 있습니다. Pier는 현장을 더 분명하게 할 뿐입니다.",
  },
  download: {
    label: "다운로드",
    title: "에이전트를 프로젝트에 정박하세요",
    lead: "무료 오픈 소스입니다. 다운로드하고 프로젝트 폴더를 고르면 에이전트 실행, 파일 탐색, 변경 검토를 시작할 수 있습니다.",
    latestPrefix: "최신 버전",
    loading: "최신 릴리스를 가져오는 중…",
    apple: "Apple Silicon",
    intel: "Intel",
    dmgSuffix: ".dmg · macOS",
    fallback: "GitHub Releases에서 모든 버전 보기",
    macOnly: "데스크톱 앱은 현재 macOS만 지원합니다(Apple Silicon / Intel).",
    cliPathNote:
      "출시판은 시작할 때 pier 명령을 PATH에 넣으려 합니다. 없다면 설정 → 터미널에서 설치하세요.",
    sourceTitle: "또는 소스에서 실행",
    sourceReqs: "Node ^24.15, pnpm ≥11.12, Xcode Command Line Tools, Homebrew, zig@0.15가 필요합니다.",
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
        q: "Pier가 모델 요청을 프록시하거나 바꾸나요?",
        a: "아닙니다. 에이전트는 각자의 네이티브 터미널에서 실행되므로 계정, 구독, 설정은 그대로입니다. Pier는 터미널을 담고, 상태를 모으고, 워크스페이스를 정리할 뿐입니다.",
      },
      {
        q: "어떤 플랫폼을 지원하나요?",
        a: "데스크톱 앱은 현재 macOS만 지원하며 Apple Silicon과 Intel 설치 패키지가 있습니다.",
      },
      {
        q: "tmux 같은 터미널 멀티플렉서와 무엇이 다른가요?",
        a: "Pier는 데스크톱 워크벤치입니다. 안정적인 터미널 외에 교차 세션 상태, Git 변경 검토, 파일 미리 보기, Canvas, 저장 가능한 패널 레이아웃이 있습니다.",
      },
      {
        q: "데이터는 어디에 있나요?",
        a: "모두 로컬입니다. 설정과 레이아웃은 로컬 JSON, 터미널 출력은 로컬 구간 파일, 코드 변경은 Git에서 실시간으로 읽고, 비밀은 시스템 보안 저장소로 갑니다.",
      },
      {
        q: "Pier는 어떤 터미널 엔진을 사용하나요?",
        a: "터미널은 Ghostty의 네이티브 코어(Swift / Zig)를 기반으로 GPU 가속 렌더링으로 그려집니다. Pier는 에이전트 TUI 시나리오를 위한 자체 패치를 유지 관리하며, UI를 다시 로드한 후에도 실행 중인 터미널은 그대로 사용할 수 있습니다.",
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

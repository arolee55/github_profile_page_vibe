export type LinkItem = {
  label: string;
  href: string;
  type: "github" | "email" | "linkedin" | "external";
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string;
  impact: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  accent: "blue" | "green" | "coral";
  links: LinkItem[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Strength = {
  title: string;
  description: string;
};

export const profile = {
  name: "김코덱스",
  initials: "KC",
  role: "Frontend Developer",
  headline: "사용자의 흐름을 읽고, 제품의 속도를 높이는 개발자입니다.",
  introduction:
    "React와 TypeScript를 중심으로 명확한 인터페이스, 빠른 피드백, 유지보수 가능한 화면 구조를 만듭니다. 문제를 작게 나누고 팀이 계속 앞으로 움직이게 하는 일을 좋아합니다.",
  location: "Seoul, Korea",
  availability: "새로운 기회를 열어두고 있어요",
  email: "hello@example.com",
  avatarUrl: "",
  avatarAlt: "프로필 사진",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      type: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      type: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      type: "email",
    },
  ] satisfies LinkItem[],
  metrics: [
    { value: "3+", label: "대표 프로젝트" },
    { value: "8", label: "핵심 기술" },
    { value: "24h", label: "빠른 응답" },
  ] satisfies Metric[],
};

export const projects: Project[] = [
  {
    title: "Insight Dashboard",
    period: "2026",
    role: "Frontend Architecture",
    summary:
      "복잡한 지표를 한 화면에서 비교하고 의사결정까지 이어지도록 설계한 분석 대시보드입니다.",
    impact:
      "반복 조회 흐름을 줄이고 주요 지표 탐색 시간을 약 35% 단축하는 것을 목표로 구성했습니다.",
    tags: ["React", "TypeScript", "Charts", "Design System"],
    accent: "blue",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/your-username/insight-dashboard",
        type: "github",
      },
      {
        label: "Demo",
        href: "https://your-username.github.io/insight-dashboard/",
        type: "external",
      },
    ],
  },
  {
    title: "Task Flow Studio",
    period: "2025",
    role: "Product UI",
    summary:
      "작업 상태, 우선순위, 담당자를 빠르게 조정할 수 있는 협업형 업무 관리 도구입니다.",
    impact:
      "테이블과 보드 전환, 빈 상태, 필터링을 정리해 반복 업무의 입력 부담을 낮췄습니다.",
    tags: ["React", "Vite", "Accessibility", "State Design"],
    accent: "green",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/your-username/task-flow-studio",
        type: "github",
      },
    ],
  },
  {
    title: "Portfolio System",
    period: "2024",
    role: "UI Engineering",
    summary:
      "개발자의 경험, 프로젝트, 연락 동선을 한 곳에 모은 정적 포트폴리오 시스템입니다.",
    impact:
      "콘텐츠 데이터와 화면을 분리해 새 프로젝트를 빠르게 추가할 수 있도록 만들었습니다.",
    tags: ["GitHub Pages", "Responsive UI", "Content Model"],
    accent: "coral",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/your-username/github_profile_page_vibe",
        type: "github",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "HTML", "CSS", "Accessibility"],
  },
  {
    category: "Product",
    items: ["UX Flow", "Design Systems", "Data Visualization", "Prototyping"],
  },
  {
    category: "Engineering",
    items: ["GitHub Actions", "Testing", "Performance", "Documentation"],
  },
];

export const strengths: Strength[] = [
  {
    title: "문제를 화면 구조로 번역합니다",
    description:
      "요구사항을 사용자 흐름, 상태, 컴포넌트 책임으로 나누어 팀이 같은 그림을 보게 합니다.",
  },
  {
    title: "작게 만들고 빠르게 검증합니다",
    description:
      "먼저 작동하는 단위를 만들고, 실제 사용 흐름에서 어색한 부분을 빠르게 고칩니다.",
  },
  {
    title: "오래 읽히는 코드를 선호합니다",
    description:
      "명확한 이름, 좁은 인터페이스, 필요한 만큼의 추상화로 유지보수 부담을 줄입니다.",
  },
];

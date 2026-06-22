# GitHub Pages Developer Portfolio

Vite, React, TypeScript로 만든 원페이지 개발자 포트폴리오입니다. GitHub Pages 프로젝트 페이지 배포를 기준으로 `base`가 `/github_profile_page_vibe/`로 설정되어 있습니다.

## 로컬 실행

Node.js LTS가 설치된 뒤 아래 순서로 실행합니다.

```bash
npm install
npm run dev
```

배포용 빌드는 다음 명령으로 확인합니다.

```bash
npm run build
npm run preview
```

## 콘텐츠 수정

프로필, 대표 프로젝트, 기술 스택, 연락처는 `src/portfolioData.ts`에서 수정합니다.

이미지를 넣고 싶다면 `avatarUrl` 또는 각 프로젝트의 `imageUrl`에 이미지 경로를 넣으면 됩니다. 예를 들어 `public/profile.jpg`를 추가한 뒤 `avatarUrl: "/github_profile_page_vibe/profile.jpg"`처럼 사용할 수 있습니다.

## GitHub Pages 배포

1. GitHub 저장소 이름을 `github_profile_page_vibe`로 만든 뒤 이 프로젝트를 push합니다.
2. 저장소의 `Settings > Pages`에서 Source를 `GitHub Actions`로 설정합니다.
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 `dist`를 빌드하고 GitHub Pages에 배포합니다.

저장소명이 달라지면 `vite.config.ts`의 `base`와 README의 예시 경로를 함께 바꿔주세요.

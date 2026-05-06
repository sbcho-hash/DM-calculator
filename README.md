# DM 계산기 PWA - GitHub Pages 배포용

이 폴더의 파일들을 GitHub 저장소 최상위 경로에 업로드하면 GitHub Pages로 배포할 수 있습니다.

## 포함 파일

- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- apple-touch-icon.png
- .nojekyll

## 계산식

DM = WM / (1 - 수분 / 100)

## 갤럭시 홈 화면 추가 전제

PWA처럼 설치하려면 일반적으로 `file:///` 경로가 아니라 `https://` 웹주소에서 접속해야 합니다.
GitHub Pages로 배포하면 HTTPS 주소가 제공됩니다.

## GitHub Pages 기본 흐름

1. GitHub에서 새 Repository 생성
2. 이 폴더 안의 파일들을 Repository 루트에 업로드
3. Settings > Pages 이동
4. Source: Deploy from a branch 선택
5. Branch: main / root 선택 후 Save
6. 생성된 `https://계정명.github.io/저장소명/` 주소로 접속
7. 갤럭시 Chrome 또는 Samsung Internet에서 홈 화면에 추가

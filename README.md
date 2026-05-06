# DM 계산기 PWA v3 - 설치 충돌 방지 버전

이 버전은 GitHub Pages 주소가 `/DM-calculator/`인 경우에 맞춰
PWA 설치 ID, start_url, scope를 명확하게 분리한 버전입니다.

## 변경사항

- manifest `id`: `/DM-calculator/dm-calculator-app`
- manifest `start_url`: `/DM-calculator/?app=dm-calculator`
- manifest `scope`: `/DM-calculator/`
- service worker scope: `/DM-calculator/`
- manifest/icon/service worker 캐시 갱신용 버전 파라미터 적용

## 사용 목적

같은 GitHub 계정에서 가격구조 계산기와 DM 계산기를 각각 설치할 때,
Chrome이 이전에 설치한 가격구조 계산기를 여는 문제를 줄이기 위한 버전입니다.

## 적용 방법

1. ZIP 파일 압축 해제
2. 안의 파일들을 `DM-calculator` Repository 최상위에 덮어쓰기
3. Commit changes
4. 1~3분 대기
5. Chrome에서 `https://sbcho-hash.github.io/DM-calculator/?reset=1` 접속
6. 새로고침
7. 주소창 오른쪽 설치 아이콘 또는 메뉴에서 앱 설치

## 그래도 가격구조 앱에서 열린다면

Chrome에서 기존 가격구조 앱을 제거한 뒤 다시 설치하세요.

1. 주소창에 `chrome://apps` 입력
2. `가격구조 계산기` 우클릭
3. `Chrome에서 삭제`
4. DM 계산기 주소로 다시 접속
5. 앱 설치

# 음악 대회 웹사이트 GitHub Pages 배포

## 현재 상태

GitHub Pages 배포 설정과 로컬 소스를 준비했습니다. GitHub에 업로드하거나 배포하지 않았고, 도메인을 구매하거나 DNS를 바꾸지 않았습니다. `music-competition.com`은 예시 주소이며 보유 여부나 구매 가능 여부를 확인하지 않았습니다.

## 저장소 구조

이 폴더를 저장소 루트로 사용하세요. `.github`와 `music-competition`이 같은 수준에 있어야 합니다.

```text
.github/workflows/deploy-music.yml
music-competition/
  package.json
  package-lock.json
  vite.config.ts
  index.html
  src/
```

1. GitHub에 로그인하고 새 저장소를 만듭니다. GitHub Free로 Pages를 쓸 경우 공개 저장소를 사용합니다. 공개 저장소는 소스도 공개됩니다.
2. 저장소의 기본 브랜치를 `main`으로 두고 위 구조의 소스를 푸시합니다. `node_modules`, `dist`, 개인 정보나 인증 정보는 업로드하지 않습니다.
3. 저장소 Settings → Pages → Build and deployment → Source에서 **GitHub Actions**를 선택합니다.
4. Actions → **Deploy Music Competition** → Run workflow를 실행합니다. 이후 main의 관련 파일 수정 시 자동 빌드·배포됩니다.
5. Actions의 성공한 Deploy website 결과 또는 Settings → Pages에서 실제 주소를 확인합니다. 실패나 대기 상태에서는 완료로 보지 않습니다.

Actions는 Node 22와 `npm ci`로 설치하고 `npm run build`로 타입 검사와 빌드를 실행한 뒤 `music-competition/dist`만 게시합니다. 사용자 토큰을 소스에 추가할 필요는 없습니다. 워크플로의 임시 GITHUB_TOKEN 권한만 사용합니다.

## 계정명이 없는 독립 도메인

도메인 구매·갱신은 호스팅과 별도입니다. 원하는 도메인을 이미 보유했거나 직접 등록한 뒤 진행합니다. 여기서는 구매하지 않습니다.

1. GitHub Pages 설정에서 도메인 소유권을 확인하고 Custom domain에 실제 보유 도메인을 입력합니다.
2. 등록 업체의 DNS 관리에서 GitHub 공식 문서가 안내하는 현재 A/AAAA 레코드 또는 CNAME 레코드를 설정합니다. 루트 도메인과 www 서브도메인은 서로 다른 레코드 설정을 사용할 수 있습니다.
3. DNS 확인 후 GitHub에서 HTTPS 활성화 상태를 확인합니다.
4. 실제 주소의 Home, Competition, Registration, Programme, Results 및 Organiser Preview를 확인합니다.

현재 Vite는 상대 자산 경로(`base: './'`)와 해시 탐색을 사용하므로 GitHub 프로젝트 경로와 독립 도메인에서 같은 빌드 결과를 사용할 수 있습니다. 도메인이나 GitHub 계정명을 앱 코드에 고정하지 않았습니다.

실제 신청 저장·로그인은 별도 구현이 필요하며, 이 배포 설정은 현재 데모의 성격을 바꾸지 않습니다.

## 공식 참고

- [Vite 정적 배포](https://vite.dev/guide/static-deploy)
- [GitHub Pages 사용자 지정 도메인](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

# 검증 기록

검증일: 2026-10-25 (Asia/Dubai)

## 실행하여 통과한 항목

- `npm install --cache /private/tmp/raha-music-npm-cache --fetch-retries=0`: 71개 패키지 설치, 당시 npm audit 결과 0 vulnerabilities
- `npm run build`: `tsc --noEmit` 및 Vite 프로덕션 빌드 성공. 최종 소스 수정 후 재실행 완료
- Vite 로컬 개발 서버 시작 및 인앱 브라우저에서 실제 페이지 로드
- Home → Registration → Organiser Preview → Home → Programme → Results → Competition 이동
- 모바일 메뉴 열기, 링크 선택, 이동 후 `aria-expanded=false`로 닫힘
- 빈 폼 제출 시 필수값 오류와 오류 요약 포커스
- 잘못된 이메일 및 `3:90` 입력 시 구체적인 오류 메시지
- Group 선택 시 그룹명·멤버 필드 표시, Solo로 복귀 시 숨김
- 가상 그룹 정보와 유효한 `3:30` 입력 후 미리보기, 미접수 문구 확인, Edit entry로 돌아가기
- 공지 수정 후 Home에서 수정 문구 확인
- Sample Ensemble B를 위로 이동 후 Programme에서 1번으로 표시됨 확인
- 새로고침 시 원래 샘플 공연 순서로 복원 확인
- Reset demo workspace 버튼 실행 후 초기화 상태 메시지 확인
- 키보드 Enter로 Skip to content 실행 후 `main-content` 포커스 확인
- 390×844 모바일 Home/Registration, 820×1180 태블릿 Home, 1440×1000 데스크톱 Home 검토
- 해당 화면에서 문서 `scrollWidth`와 `clientWidth` 일치: 페이지 전체 가로 넘침 없음. 공연 표는 자체 스크롤 영역 사용
- 브라우저에서 수집된 error/warn 로그 없음
- 소스에서 fetch, 외부 HTTP URL, localStorage, sessionStorage, IndexedDB 호출 없음 확인
- `previews/home-desktop.png`: 브라우저에서 캡처한 최종 Home 화면

## 확인 범위와 남은 검수

- 실제 스마트폰·태블릿 하드웨어, Safari/Firefox, 스크린리더로는 테스트하지 않았습니다.
- 전체 키보드 순서에 대한 전수 검수, 전문 접근성 감사, 모든 화면 크기의 시각 회귀 테스트는 실행하지 않았습니다.
- reduced-motion은 CSS 미디어 쿼리로 구현했으며 운영체제 설정을 바꿔 동작을 검수하지는 않았습니다.
- 개인정보를 보내는 네트워크 코드나 저장소 호출이 없는 것을 확인했습니다. 전용 네트워크/저장소 감사 도구를 사용한 전수 검사는 하지 않았습니다.
- 개발 서버로 브라우저 검증했고, 생성된 dist 결과는 빌드 성공을 확인했습니다. 별도 preview 서버로 최종 dist 브라우저 테스트는 실행하지 않았습니다.
- 실제 접수·DB·인증·결과 게시 기능은 범위 밖이며 테스트 대상이 아닙니다.
- 호스팅 배포, 학교 서브도메인 DNS 및 HTTPS 연결을 실행하지 않았습니다.

기존 시스템 npm 캐시에 권한 오류가 있어 임시 캐시로 설치했습니다. 시스템 소유권이나 권한을 변경하지 않았습니다. 로컬 서버 포트는 샌드박스 밖에서 localhost에만 바인딩하여 검증했고, 검증 종료 후 서버를 중지했습니다.

## 2026-10-28 규칙·상금 업데이트 검증

- 최종 소스 변경 후 `npm run build` 재실행: 타입 검사 및 Vite 프로덕션 빌드 통과
- 브라우저에서 Competition의 초안 안내, 제안 심사표 35/30/20/15 및 총점 100, 확정 상금 표 확인
- 상금: Grade 1–5 0 / Grade 6–9 50 / Grade 10–12 100 / 전체 150 AED. 이전 100/80/50 상금 데이터 제거
- Results는 결과 없음 상태를 유지하며 동일한 상금 배분 표를 재사용함 확인
- 빈 폼 제출에서 학교명·학교 연락 담당자·담당자 이메일의 필수값 검증 확인
- 잘못된 학교 담당자 이메일 오류 확인 후 가상 정보로 수정하여 그룹 미리보기 성공. 학교·담당자 연락처·그룹원 학년 표시 확인
- 제안 최대 시간은 아직 확정 규칙이 아니므로 4:10도 데모 미리보기 가능함 확인
- Home 최신 공지와 참여 학교 미정 안내, Organiser Preview의 가상 학년·학교 데이터 확인
- 390px 모바일 Competition/Registration/Results의 문서 가로 넘침 없음. 상금 표는 자체 가로 스크롤 영역 사용
- 1200px 데스크톱에서 상금 표 캡처: `previews/award-schedule.png`
- 검증 중 수집된 브라우저 error/warn 로그 없음
- 기존 데모 저장 정책 유지: 실제 접수·영구 저장·인증·배포 없음
- 이번 변경에서 실제 기기·스크린리더·모든 기존 운영 데모 상호작용을 전수 재검사하지는 않음. 기존 검증과 이번 변경 범위를 구분해 참고할 것


## 2026-10-28 GitHub Pages 배포 준비 검증

- `vite.config.ts`의 `base: './'` 및 저장소 루트 GitHub Actions 워크플로 추가
- 최종 앱 설정에서 `npm run build` 실행: 타입 검사 및 프로덕션 빌드 통과
- 생성 HTML의 JS/CSS 상대 경로와 실제 파일 존재 확인. 프로젝트 하위 경로와 도메인 루트 양쪽에서 URL 해석 확인
- `.github`와 `music-competition` 구조를 유지하는 배포 준비 ZIP 생성. node_modules, dist, Git 메타데이터 제외
- GitHub 로그인 화면 확인. GitHub 로그인 전이므로 원격 저장소 생성·푸시·Actions 실행·Pages 배포는 하지 않음
- 도메인 구매·소유권 확인·DNS·HTTPS 연결은 하지 않음
- 이번 배포 설정 변경에 대한 새 브라우저 렌더링 검사는 하지 않음. 실제 GitHub Actions와 원격 주소 검증은 로그인 후 필요

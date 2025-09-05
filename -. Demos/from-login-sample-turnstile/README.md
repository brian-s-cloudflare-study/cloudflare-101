# Static Login Sample

이 프로젝트는 Cloudflare Workers를 사용한 정적 로그인 시스템 샘플입니다. 사용자 인증, 쿠키 기반 세션 관리, 그리고 보호된 대시보드 페이지를 구현한 예제입니다.

## 기능

- 사용자 로그인 인증 (고정 ID/PW 사용)
- 쿠키 기반 세션 관리
- 보호된 대시보드 페이지
- 로그아웃 기능
- Tailwind CSS를 활용한 모던한 UI

## 기술 스택

- **Cloudflare Workers**: 서버리스 JavaScript 런타임
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Font Awesome**: 아이콘 라이브러리

## 설치 방법

1. 이 저장소를 클론합니다:

```bash
git clone <repository-url>
cd -.\ Demos/from-login-sample/
```

2. 의존성을 설치합니다:

```bash
npm install
```

## 로컬에서 실행하기

Cloudflare Workers 개발 서버를 실행하려면:

```bash
npm run dev
```

이 명령은 로컬 개발 서버를 시작하며, 기본적으로 `http://localhost:8787`에서 접속할 수 있습니다.

## 배포 방법

1. Cloudflare 계정이 필요합니다. 계정이 없다면 [Cloudflare](https://dash.cloudflare.com/sign-up)에서 가입하세요.

2. Wrangler CLI를 사용하여 Cloudflare 계정에 로그인합니다:

```bash
npx wrangler login
```

3. 프로젝트를 배포합니다:

```bash
npm run deploy
```

또는 직접 wrangler 명령어를 사용할 수도 있습니다:

```bash
npx wrangler deploy
```

4. 배포가 완료되면 Cloudflare에서 제공하는 URL로 접속할 수 있습니다.

## 사용 방법

1. 홈페이지에서 다음 계정으로 로그인합니다:
   - 아이디: `cloudflare`
   - 비밀번호: `immerse25`

2. 로그인 성공 시 대시보드 페이지로 리디렉션됩니다.

3. 로그아웃 버튼을 클릭하여 세션을 종료할 수 있습니다.

## 프로젝트 구조

```
from-login-sample/
├── public/                 # 정적 파일
│   ├── index.html          # 로그인 페이지
│   └── dashboard.html      # 대시보드 페이지
├── src/
│   └── index.js            # Worker 메인 코드
├── wrangler.jsonc          # Wrangler 설정 파일
└── package.json            # 프로젝트 의존성
```

## 커스터마이징

- `public/index.html`: 로그인 페이지 UI 수정
- `public/dashboard.html`: 대시보드 페이지 UI 수정
- `src/index.js`: 인증 로직 및 라우팅 수정

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 참고 자료

- [Cloudflare Workers 문서](https://developers.cloudflare.com/workers/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Wrangler CLI 문서](https://developers.cloudflare.com/workers/wrangler/)
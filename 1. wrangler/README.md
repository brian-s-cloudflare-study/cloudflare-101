# Wrangler

## 1. Wrangler란 무엇인가?

Wrangler는 Cloudflare Developer Platform의 공식 명령줄 인터페이스(CLI) 도구입니다. Cloudflare Workers 프로젝트를 생성, 개발, 테스트 및 배포하는 데 사용됩니다. Wrangler를 통해 개발자는 로컬 환경에서 Workers 애플리케이션을 개발하고 Cloudflare의 글로벌 네트워크에 쉽게 배포할 수 있습니다.

Wrangler는 다음과 같은 주요 기능을 제공합니다:
- Workers 프로젝트 생성 및 초기화
- 로컬 개발 서버 실행
- Cloudflare 계정에 Workers 배포
- 환경 변수 및 시크릿 관리
- 다양한 바인딩(KV, R2, D1 등) 설정 및 관리

> 출처: [Cloudflare Wrangler 공식 문서](https://developers.cloudflare.com/workers/wrangler/)

## 2. Wrangler 설치 가이드

### 사전 요구 사항

- [Cloudflare 계정](https://dash.cloudflare.com/sign-up/workers-and-pages)
- [Node.js](https://nodejs.org/) 16.17.0 이상 (최신 LTS 버전 권장)

### OS별 설치 방법

Wrangler는 다음 운영체제를 공식적으로 지원합니다:
- macOS 13.5+
- Windows 11
- glib 2.35를 지원하는 Linux 배포판

#### Windows

```bash
# Node.js 및 npm 설치 (이미 설치되어 있다면 생략)
# https://nodejs.org/en/download/

# 프로젝트 디렉토리에 Wrangler 설치
npm i -D wrangler@latest
```

#### macOS

```bash
# Homebrew를 통한 Node.js 설치 (이미 설치되어 있다면 생략)
brew install node

# 또는 nvm을 사용한 Node.js 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install --lts

# 프로젝트 디렉토리에 Wrangler 설치
npm i -D wrangler@latest
```

#### Linux

```bash
# Node.js 설치 (Ubuntu/Debian 예시)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 또는 nvm을 사용한 Node.js 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install --lts

# 프로젝트 디렉토리에 Wrangler 설치
npm i -D wrangler@latest
```

### 다른 패키지 매니저를 사용한 설치

#### Yarn

```bash
yarn add -D wrangler@latest
```

#### pnpm

```bash
pnpm add -D wrangler@latest
```

> 참고: Cloudflare는 전역 설치보다 프로젝트별 로컬 설치를 권장합니다.

### Wrangler 버전 확인

```bash
npx wrangler --version
# 또는
npx wrangler -v
```

### Wrangler 업데이트

```bash
npm i -D wrangler@latest
```

> 출처: [Wrangler 설치 및 업데이트 가이드](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

## 3. 왜 Wrangler를 사용해야 하는가?

Wrangler는 Cloudflare Workers 개발을 위한 공식 도구로, 다음과 같은 이점을 제공합니다:

1. **간소화된 개발 워크플로우**: 프로젝트 생성부터 배포까지 전체 개발 라이프사이클을 단일 도구로 관리할 수 있습니다.

2. **로컬 개발 환경**: `wrangler dev` 명령을 통해 로컬에서 Workers를 실행하고 테스트할 수 있어 개발 속도가 향상됩니다.

3. **자동화된 배포**: CI/CD 파이프라인에 쉽게 통합할 수 있어 자동화된 배포가 가능합니다.

4. **Cloudflare 리소스 관리**: KV, R2, D1 등 Cloudflare의 다양한 서비스와 쉽게 통합할 수 있습니다.

5. **구성 관리**: `wrangler.toml` 파일을 통해 프로젝트 설정을 코드로 관리할 수 있습니다.

6. **다중 환경 지원**: 개발, 스테이징, 프로덕션 등 다양한 환경을 쉽게 구성하고 관리할 수 있습니다.

## 4. 꼭 Wrangler를 사용했으면 하는 이유

1. **공식 지원**: Wrangler는 Cloudflare에서 공식적으로 개발 및 지원하는 도구로, Workers 플랫폼의 모든 기능을 완벽하게 지원합니다.

2. **최신 기능 접근**: Cloudflare의 새로운 기능이 출시될 때마다 Wrangler가 가장 먼저 지원합니다.

3. **일관된 개발 경험**: 팀 내에서 동일한 버전의 Wrangler를 사용함으로써 일관된 개발 경험을 보장할 수 있습니다.

4. **대시보드 제한 극복**: Cloudflare 대시보드에서는 할 수 없는 고급 기능(예: 커스텀 빌드, 로컬 개발, 시크릿 관리)을 사용할 수 있습니다.

5. **자동화 가능**: CI/CD 파이프라인에 쉽게 통합할 수 있어 배포 프로세스를 자동화할 수 있습니다.

6. **확장성**: 대규모 프로젝트나 여러 Workers를 관리할 때 특히 유용합니다.

## 5. 기타 유용한 정보

### 주요 Wrangler 명령어

```bash
# 새 프로젝트 생성
npx wrangler init my-worker
or wrangler init my-worker

# 로컬 개발 서버 실행
npx wrangler dev
or wrangler dev

# Workers 배포
npx wrangler deploy
or wrangler deploy

# 시크릿 설정
npx wrangler secret put MY_SECRET
or wrangler secret put MY_SECRET

# KV 네임스페이스 생성
npx wrangler kv:namespace create MY_NAMESPACE
or wrangler kv:namespace create MY_NAMESPACE
```

### wrangler.toml 설정 예시

```toml
name = "my-worker"
main = "src/index.js"
compatibility_date = "2023-01-01"

[vars]
MY_VARIABLE = "value"

[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### 유용한 리소스

- [Wrangler 명령어 문서](https://developers.cloudflare.com/workers/wrangler/commands/)
- [Wrangler 설정 가이드](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Workers 시작 가이드](https://developers.cloudflare.com/workers/get-started/guide/)
- [Wrangler GitHub 저장소](https://github.com/cloudflare/workers-sdk)
- [Cloudflare Workers 문서](https://developers.cloudflare.com/workers/)

> 참고: Wrangler는 지속적으로 업데이트되고 있으므로, 최신 기능과 변경 사항은 [공식 문서](https://developers.cloudflare.com/workers/wrangler/)를 참조하세요.
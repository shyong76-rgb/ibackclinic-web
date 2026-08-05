# 배포 가이드 (GitHub → Vercel)

## 사전 준비 완료 상태
- DB: Neon Postgres (pooled) — 마이그레이션 `src/migrations/` 커밋됨
- `package.json`에 `vercel-build`: `payload migrate && next build` (Vercel이 `build` 대신 자동 사용)
- `engines.node`: `20.x` 고정 (로컬 Node 24에서 payload CLI가 tsx/ESM 버그로 죽는 문제 있어서, Vercel은 Payload 공식 지원 버전으로 고정함)
- Media 업로드: `BLOB_READ_WRITE_TOKEN` 있으면 Vercel Blob, 없으면 로컬 디스크로 자동 폴백
- 공개 읽기 권한(Media/Procedures/Posts/Boards 등) 이미 설정됨
- sharp linux-x64 바이너리 lockfile에 포함됨 (`pnpm-workspace.yaml` supportedArchitectures)

## 1. GitHub에 올리기

로컬에 `gh` CLI가 없어서 웹에서 리포 생성 후 push:

1. https://github.com/new 에서 새 리포 생성 (이름: `ibackclinic-web`, **Private 권장**, README/gitignore 체크 안 함 — 이미 로컬에 있음)
2. 생성된 리포 주소로 원격 연결 후 push:

```bash
cd ibackclinic-web
git remote add origin https://github.com/<계정명>/ibackclinic-web.git
git branch -M main
git push -u origin main
```

## 2. Vercel Import

1. https://vercel.com/new 에서 방금 만든 GitHub 리포 Import
2. Framework Preset: Next.js (자동 인식)
3. **환경변수** (Settings → Environment Variables, Production/Preview 둘 다 체크). 실제 값은 로컬 `.env.local`에 있음 (git에는 안 올라감, `cat .env.local`로 확인):

| 변수 | 값 | 비고 |
|---|---|---|
| `DATABASE_URI` | `.env.local`의 값 그대로 | Neon pooled 연결 문자열, Sensitive 체크 |
| `PAYLOAD_SECRET` | `.env.local`의 값 그대로 | Sensitive 체크 |
| `NEXT_PUBLIC_SERVER_URL` | 일단 비워두거나 `https://ibackclinic-web.vercel.app` | 1차 배포 후 실제 도메인 확인하고 재설정 |

4. **Storage 탭 → Blob 연결** → `BLOB_READ_WRITE_TOKEN` 자동 주입됨 (Media 업로드용)
5. Deploy 클릭

## 3. 배포 후

1. 실제 배포 도메인 확인 (`https://xxx.vercel.app` 또는 연결한 커스텀 도메인)
2. `NEXT_PUBLIC_SERVER_URL` 환경변수를 그 도메인으로 재설정 → 재배포 (Payload admin 쿠키/CSRF 정상 동작에 필요)
3. `https://<도메인>/admin` 접속해서 "Create first user"로 관리자 계정 새로 생성 (로컬 계정과 별개 — 같은 Neon DB를 쓰면 로컬에서 만든 계정이 이미 있을 수 있음, 그럼 그냥 로그인)
4. 로컬에서 심어둔 메뉴/팝업/전후사진 게시판 데이터는 이미 같은 Neon DB에 있으니 그대로 보임

## 참고
- 로컬 `.env.local`과 Vercel 환경변수가 **같은 Neon DB**를 보고 있음 (분리 안 함). 로컬에서 관리자로 테스트하다 실수로 데이터 지우면 배포본에도 반영되니 주의.
- 이 대화에서 Neon 비밀번호가 채팅에 그대로 노출됐음 — 이 세션 로그를 외부에 공유할 일이 있으면 Neon 콘솔에서 비밀번호 재발급 권장.
- 카카오 로그인 실연동 시 `.env`에 `KAKAO_REST_API_KEY` 등 추가 필요 (지금은 이메일/비번 임시 로그인).

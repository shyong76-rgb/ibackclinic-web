// 팝업(추후 코드삽입도) 노출 페이지 선택지. 새 페이지/게시판 추가 시 여기만 늘리면 됨.
export const SITE_PAGE_OPTIONS = [
  { label: '전체 페이지', value: '*' },
  { label: '홈', value: '/' },
  { label: '시술 페이지 전체', value: '/procedures/*' },
  { label: '예약 문의하기', value: '/reservation' },
  { label: '오시는길', value: '/location' },
  { label: '로그인', value: '/login' },
  { label: '전후사진 게시판', value: '/board/before-after' },
  { label: '게시판 전체(모든 게시판+글)', value: '/board/*' },
]

// 예약 채널(카카오톡/네이버) 실제 링크는 Payload "채널 연동" 글로벌(src/globals/Channels.ts)에서
// 관리자가 직접 입력한다 — 재배포 없이 즉시 반영됨. 여기 상수는 Payload 조회 실패 시의
// 최후 폴백(플레이스홀더)만 담당한다.
export const CHANNELS_FALLBACK = {
  kakaoUrl: 'https://reservation-link-here.example',
  naverBookingUrl: 'https://reservation-link-here.example',
  phone: '0507-1386-2479',
}

// Payload "플로팅 버튼" 글로벌이 비어있을 때 fallback.
export const DEFAULT_FLOATING_CTA = [
  { label: '예약 문의하기', visible: true, style: 'dark' as const, action: 'link' as const, href: '/reservation' },
  { label: '전화 문의', visible: true, style: 'accent' as const, action: 'link' as const, href: `tel:${CHANNELS_FALLBACK.phone}` },
]

export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

// 기본 내비게이션. Payload Navigation 글로벌이 비어있을 때 fallback.
export const DEFAULT_NAV: NavItem[] = [
  { label: '클링시그니쳐', href: '/procedures/cling-signature' },
  { label: '웨이브온 리프팅', href: '/procedures/wave-on-lifting' },
  { label: '여드름 관리', href: '/procedures/acne-care' },
  { label: '수분관리', href: '/procedures/hydration-care' },
  { label: '콜라겐 벨벳 관리', href: '/procedures/collagen-velvet' },
  { label: '필링', href: '/procedures/peeling' },
  { label: '리베룩', href: '/procedures/revelook' },
  { label: '오시는길', href: '/location' },
]

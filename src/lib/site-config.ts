export const CHANNELS = {
  kakaoUrl: 'http://pf.kakao.com/_xnxoxkGX',
  naverMapUrl: 'https://map.naver.com/p/entry/place/2072489982',
}

export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

// 기본 내비게이션(DESIGN.md 기준 GNB 드롭다운). Payload Navigation 글로벌이 비어있을 때 fallback.
export const DEFAULT_NAV: NavItem[] = [
  {
    label: '소개',
    href: '/#about',
    children: [
      { label: '아이백의원 이야기', href: '/#about' },
      { label: '의료진 소개', href: '/#director' },
      { label: '오시는 길', href: '/#visit' },
    ],
  },
  {
    label: '아이백클리어',
    href: '/i-back-clear',
    children: [
      { label: '눈밑지방재배치', href: '/i-back-clear' },
      { label: '다크서클', href: '/dark-circle' },
    ],
  },
  {
    label: '색소',
    href: '/#treatment',
    children: [
      { label: '점·비립종', href: '/#treatment' },
      { label: '기미·주근깨', href: '/#treatment' },
      { label: '홍조', href: '/#treatment' },
    ],
  },
  {
    label: '리프팅',
    href: '/#treatment',
    children: [
      { label: '슈링크 유니버스', href: '/#treatment' },
      { label: '덴서티 하이', href: '/#treatment' },
      { label: '올타이트', href: '/#treatment' },
    ],
  },
  {
    label: '모공',
    href: '/#treatment',
    children: [
      { label: '프락셀', href: '/#treatment' },
      { label: '포텐자', href: '/#treatment' },
      { label: '아쿠아필', href: '/#treatment' },
    ],
  },
  {
    label: '쁘띠',
    href: '/#treatment',
    children: [
      { label: '보톡스', href: '/#treatment' },
      { label: '필러', href: '/#treatment' },
      { label: '스킨부스터', href: '/#treatment' },
    ],
  },
  { label: '전후사진', href: '/board/before-after' },
]

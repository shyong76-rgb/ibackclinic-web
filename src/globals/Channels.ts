import type { GlobalConfig } from 'payload'

// 예약 문의(카카오톡/네이버) 딥링크. 헤더 CTA·플로팅 버튼·"/reservation" 페이지가
// 여기서 값을 읽어온다 — 재배포 없이 여기 값만 바꾸면 사이트 전체에 바로 반영됨.
export const Channels: GlobalConfig = {
  slug: 'channels',
  label: '채널 연동',
  admin: { group: '설정', description: '예약 문의하기 페이지·헤더 CTA·플로팅 버튼이 사용하는 실제 링크' },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'kakaoUrl', type: 'text', label: '카카오톡 채널 링크 (예: http://pf.kakao.com/_xxxxx)' },
    { name: 'naverBookingUrl', type: 'text', label: '네이버 예약 링크' },
    { name: 'phone', type: 'text', label: '전화번호 (tel: 링크용, 예: 0507-1386-2479)' },
  ],
}

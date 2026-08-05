import type { CollectionConfig } from 'payload'

// 회원 = 열람 게이팅 전용 (예약/상담/리뷰 기능 없음). 관리자 Users와 분리.
// 카카오 OAuth는 카카오 디벨로퍼스 앱 등록(REST API 키) 후 연동 예정.
// 지금은 auth:true 기본 이메일/비번 로그인으로 게이팅 로직 자체를 완성해두고,
// 나중에 로그인 방식만 카카오 strategy로 교체한다 (게이팅 로직은 변경 없음).
export const Customers: CollectionConfig = {
  slug: 'customers',
  labels: { singular: '회원', plural: '회원' },
  auth: true,
  admin: {
    useAsTitle: 'name',
    group: '회원',
    description: '전후사진 등 열람 게이팅 전용 회원 (예약·상담 기능 없음, 관리자 계정과 별개)',
  },
  access: {
    read: ({ req }) => !!req.user, // 본인 또는 관리자만
    create: () => true, // 회원가입은 누구나 (카카오 연동 전까지 임시)
  },
  fields: [
    { name: 'name', type: 'text', label: '이름' },
    { name: 'kakaoId', type: 'text', label: '카카오 ID', index: true },
    { name: 'phone', type: 'text', label: '연락처' },
  ],
}

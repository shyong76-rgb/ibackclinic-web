import type { CollectionConfig } from 'payload'

// 관리자(에이전시/클라이언트) 계정. role은 지금은 강제하지 않고 필드만 둠
// (2단계 권한 티어링은 프리미엄 판매 시점에 access control로 붙일 예정).
export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: '관리자 계정', plural: '관리자 계정' },
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: '설정',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      label: '권한',
      defaultValue: 'owner',
      options: [
        { label: '전권관리자 (에이전시)', value: 'owner' },
        { label: '부분관리자 (클라이언트)', value: 'editor' },
      ],
    },
  ],
}

import type { CollectionConfig } from 'payload'

// 필러 (필러-클러스터 SEO 구조). 지금 빌드는 전권관리자로 시작 — 잠금 없음.
// 나중에 부분관리자에게 팔 때 create/update를 owner role로 제한하면 됨.
export const Procedures: CollectionConfig = {
  slug: 'procedures',
  labels: { singular: '시술(필러)', plural: '시술(필러)' },
  admin: {
    useAsTitle: 'name',
    group: '콘텐츠',
    description: 'SEO 필러-클러스터 구조의 "필러" — 아이백클리어·다크서클처럼 대표 시술 카테고리 페이지 단위',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: '시술명', required: true },
    { name: 'slug', type: 'text', label: '주소(슬러그)', required: true, unique: true, index: true },
    { name: 'category', type: 'select', label: '분류', options: [
      { label: '소개', value: 'about' },
      { label: '색소', value: 'pigment' },
      { label: '리프팅', value: 'lifting' },
      { label: '모공', value: 'pore' },
      { label: '쁘띠', value: 'petit' },
      { label: '시그니처(아이백클리어)', value: 'signature' },
    ]},
    { name: 'summary', type: 'textarea', label: '요약' },
    { name: 'body', type: 'richText', label: '본문' },
    { name: 'targetKeyword', type: 'text', label: '목표 키워드' },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: '대표 이미지' },
    {
      name: 'faq',
      type: 'array',
      label: '자주 묻는 질문',
      fields: [
        { name: 'q', type: 'text', label: '질문' },
        { name: 'a', type: 'textarea', label: '답변' },
      ],
    },
  ],
}

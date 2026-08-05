import type { CollectionConfig } from 'payload'

// 클러스터 글. pillar(relationship)로 Procedures에 연결 → 자동 내부링크 렌더 시 사용.
export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: '콘텐츠(클러스터 글)', plural: '콘텐츠(클러스터 글)' },
  admin: {
    useAsTitle: 'title',
    group: '콘텐츠',
    description: '필러(시술)에 딸린 블로그/설명 글. 소속 필러를 지정하면 자동으로 내부링크가 걸림',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', label: '제목', required: true },
    { name: 'h1', type: 'text', label: 'H1 태그(비우면 제목 사용)' },
    { name: 'slug', type: 'text', label: '주소(슬러그)', required: true, unique: true, index: true },
    { name: 'pillar', type: 'relationship', relationTo: 'procedures', label: '소속 필러(시술)' },
    { name: 'cluster', type: 'text', label: '클러스터 그룹명' },
    { name: 'targetKeyword', type: 'text', label: '목표 키워드' },
    { name: 'metaTitle', type: 'text', label: '메타 타이틀' },
    { name: 'metaDescription', type: 'textarea', label: '메타 설명' },
    { name: 'body', type: 'richText', label: '본문' },
    { name: 'coverImage', type: 'upload', relationTo: 'media', label: '커버 이미지' },
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

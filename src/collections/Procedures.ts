import type { CollectionConfig } from 'payload'

// 필러 (필러-클러스터 SEO 구조). 지금 빌드는 전권관리자로 시작 — 잠금 없음.
// 나중에 부분관리자에게 팔 때 create/update를 owner role로 제한하면 됨.
export const Procedures: CollectionConfig = {
  slug: 'procedures',
  labels: { singular: '시술(필러)', plural: '시술(필러)' },
  admin: {
    useAsTitle: 'name',
    group: '콘텐츠',
    description: 'SEO 필러-클러스터 구조의 "필러" — 클링에스테틱 시술 카테고리 페이지 단위. /procedures/[슬러그]로 렌더링됨',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: '시술명', required: true },
    { name: 'slug', type: 'text', label: '주소(슬러그)', required: true, unique: true, index: true },
    {
      name: 'category',
      type: 'select',
      label: '분류',
      options: [
        { label: '클링시그니쳐', value: 'cling-signature' },
        { label: '웨이브온 리프팅', value: 'wave-on-lifting' },
        { label: '여드름 관리', value: 'acne-care' },
        { label: '수분관리', value: 'hydration-care' },
        { label: '콜라겐 벨벳 관리', value: 'collagen-velvet' },
        { label: '필링', value: 'peeling' },
        { label: '리베룩', value: 'revelook' },
      ],
    },
    { name: 'summary', type: 'textarea', label: '요약' },
    { name: 'body', type: 'richText', label: '본문 (브랜드·시술 감성 소개)' },
    { name: 'targetKeyword', type: 'text', label: '목표 키워드' },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: '대표 이미지' },
    {
      name: 'composition',
      type: 'array',
      label: '구성 (포함 시술 목록, 가격 제외)',
      fields: [{ name: 'name', type: 'text', label: '항목명', required: true }],
    },
    {
      name: 'procedureSteps',
      type: 'array',
      label: '시술 순서',
      admin: { description: '클링시그니쳐는 이 필드로 클렌징→라라필→웨이브온리프팅→벨벳콜라겐 코스 순서를 표현' },
      fields: [
        { name: 'title', type: 'text', label: '단계명', required: true },
        { name: 'description', type: 'textarea', label: '설명' },
        { name: 'image', type: 'upload', relationTo: 'media', label: '단계 사진' },
      ],
    },
    {
      name: 'effects',
      type: 'array',
      label: '시술 효과',
      fields: [{ name: 'text', type: 'text', label: '효과', required: true }],
    },
    {
      name: 'targetAudience',
      type: 'array',
      label: '시술 대상',
      fields: [{ name: 'text', type: 'text', label: '대상', required: true }],
    },
    {
      name: 'beforeAfterImages',
      type: 'array',
      label: '전후사진',
      admin: { description: '사진은 준비되는 대로 첨부. 비어 있으면 프론트에 "촬영 예정" 플레이스홀더가 노출됨' },
      fields: [
        { name: 'before', type: 'upload', relationTo: 'media', label: '전' },
        { name: 'after', type: 'upload', relationTo: 'media', label: '후' },
        { name: 'caption', type: 'text', label: '설명' },
      ],
    },
    {
      name: 'productImages',
      type: 'array',
      label: '제품/기기 사진',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', label: '사진' },
        { name: 'caption', type: 'text', label: '설명' },
      ],
    },
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

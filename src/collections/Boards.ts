import type { Access, CollectionConfig } from 'payload'

const isStaff: Access = ({ req }) => !!req.user

export const Boards: CollectionConfig = {
  slug: 'boards',
  labels: { singular: '게시판', plural: '게시판' },
  admin: { useAsTitle: 'name', group: '게시판', description: '게시판 자체(설정)를 만드는 곳. 실제 글은 "게시글"에서 작성' },
  access: {
    read: () => true, // 게시판 존재/설정은 공개 — 개별 글 게이팅은 BoardPosts + 프론트에서
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    { name: 'name', type: 'text', label: '게시판 이름', required: true },
    { name: 'slug', type: 'text', label: '주소(슬러그)', required: true, unique: true, index: true },
    {
      name: 'accessLevel',
      type: 'select',
      label: '열람 조건',
      defaultValue: 'public',
      options: [
        { label: '전체공개', value: 'public' },
        { label: '회원전용', value: 'members-only' }, // 전후사진 등 (의료법: 게재 가능, 열람 게이팅)
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: '노출 방식',
      defaultValue: 'table',
      options: [
        { label: '표', value: 'table' },
        { label: '보드', value: 'board' },
        { label: '갤러리', value: 'gallery' }, // 전후사진에 최적
      ],
    },
  ],
}

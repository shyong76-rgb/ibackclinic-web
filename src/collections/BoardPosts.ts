import type { Access, CollectionConfig } from 'payload'

const isStaff: Access = ({ req }) => !!req.user

// 익명은 accessLevel=public 게시판 글만 조회 가능. 로그인(관리자 or 카카오 회원)이면 전체 조회.
const canReadBoardPosts: Access = async ({ req }) => {
  if (req.user) return true

  const publicBoards = await req.payload.find({
    collection: 'boards',
    where: { accessLevel: { equals: 'public' } },
    limit: 500,
    depth: 0,
  })
  const publicBoardIds = publicBoards.docs.map((b) => b.id)
  if (publicBoardIds.length === 0) return false
  return { board: { in: publicBoardIds } }
}

export const BoardPosts: CollectionConfig = {
  slug: 'board-posts',
  labels: { singular: '게시글', plural: '게시글' },
  admin: { useAsTitle: 'title', group: '게시판' },
  access: {
    read: canReadBoardPosts,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    { name: 'title', type: 'text', label: '제목', required: true },
    { name: 'board', type: 'relationship', relationTo: 'boards', label: '소속 게시판', required: true },
    { name: 'content', type: 'richText', label: '내용' },
    {
      name: 'images',
      type: 'array',
      label: '이미지',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', label: '이미지' }],
    },
  ],
}

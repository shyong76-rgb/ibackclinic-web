import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// 배포 함정#1 대응: 공개 콘텐츠 컬렉션은 read:true (방문자 이미지 403 방지).
// 수정/삭제는 로그인 유지.
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: '미디어', plural: '미디어' },
  admin: { group: '콘텐츠' },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: path.resolve(dirname, '../../media'),
    imageSizes: [
      { name: 'thumbnail', width: 400, height: undefined, position: 'centre' },
      { name: 'card', width: 900, height: undefined, position: 'centre' },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    { name: 'alt', type: 'text', label: '대체텍스트(alt)', required: true },
  ],
}

import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import { VideoEmbedBlock } from './blocks/VideoEmbedBlock'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Procedures } from './collections/Procedures'
import { Posts } from './collections/Posts'
import { Popups } from './collections/Popups'
import { Boards } from './collections/Boards'
import { BoardPosts } from './collections/BoardPosts'
import { Customers } from './collections/Customers'
import { Navigation } from './globals/Navigation'
import { CodeSnippets } from './globals/CodeSnippets'
import { Channels } from './globals/Channels'
import { FloatingCta } from './globals/FloatingCta'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Procedures, Posts, Popups, Boards, BoardPosts, Customers],
  globals: [Navigation, CodeSnippets, Channels, FloatingCta],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, BlocksFeature({ blocks: [VideoEmbedBlock] })],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    // dev auto-push를 끔: 스키마 필드 바뀔 때마다 대화형(y/N) 확인 프롬프트가 떠서
    // 서버 프로세스가 그대로 멈추는 문제가 반복됐음. 대신 스키마 바뀌면 그때그때
    // 마이그레이션을 만들어서 직접 적용하는 방식으로 통일(DEPLOY.md 절차 참고).
    push: false,
  }),
  sharp,
  // Vercel Blob 토큰이 있을 때만 활성화(프로덕션). 로컬 dev는 토큰 없으면 디스크(media/)로 폴백.
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          enabled: true,
          collections: { media: true },
          token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
      ]
    : [],
})

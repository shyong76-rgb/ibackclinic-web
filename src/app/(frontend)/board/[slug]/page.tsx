import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { getAuthorizedBoard } from '@/lib/board-auth'
import { MembersOnlyGate } from '@/components/site/MembersOnlyGate'

type MediaLike = { url?: string | null } | string | null | undefined

function imgUrl(image: MediaLike): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return image.url ?? undefined
}

export default async function BoardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { board, authorized } = await getAuthorizedBoard(slug)
  if (!board) notFound()
  if (!authorized) return <MembersOnlyGate boardName={board.name} returnTo={`/board/${slug}`} />

  const payload = await getPayloadClient()
  const postsRes = await payload.find({
    collection: 'board-posts',
    where: { board: { equals: board.id } },
    depth: 1,
    limit: 100,
    sort: '-createdAt',
  })
  const posts = postsRes.docs

  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(50px,8vw,80px)) clamp(22px,6vw,80px) clamp(60px,8vw,100px)`)}>
      <div style={cssObj(`max-width:1080px;margin:0 auto`)}>
        <h1 style={cssObj(`margin:0 0 40px;font-size:clamp(24px,3.6vw,34px);font-weight:400;text-align:center`)}>{board.name}</h1>

        {posts.length === 0 && <p style={{ textAlign: 'center', color: '#8a7f72' }}>등록된 글이 없습니다.</p>}

        {board.layout === 'gallery' && (
          <div style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px`)}>
            {posts.map((post) => {
              const first = post.images?.[0]?.image
              return (
                <Link key={post.id} href={`/board/${slug}/${post.id}`}>
                  {imgUrl(first as MediaLike) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl(first as MediaLike)} alt={post.title} style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover;display:block`)} />
                  ) : (
                    <div style={cssObj(`width:100%;aspect-ratio:3/4;background:#f0ebe1`)} />
                  )}
                  <p style={cssObj(`margin:10px 0 0;font-size:14px`)}>{post.title}</p>
                </Link>
              )
            })}
          </div>
        )}

        {board.layout === 'table' && (
          <div>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/board/${slug}/${post.id}`}
                style={cssObj(`display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-top:1px solid #eae3d7;font-size:14.5px`)}
              >
                <span>{post.title}</span>
                <span style={{ color: '#8a7f72' }}>{new Date(post.createdAt).toLocaleDateString('ko-KR')}</span>
              </Link>
            ))}
          </div>
        )}

        {board.layout === 'board' && (
          <div style={cssObj(`display:grid;gap:24px`)}>
            {posts.map((post) => (
              <Link key={post.id} href={`/board/${slug}/${post.id}`} style={cssObj(`display:block;padding-bottom:24px;border-bottom:1px solid #eae3d7`)}>
                <p style={cssObj(`margin:0 0 8px;font-size:16px;font-weight:500`)}>{post.title}</p>
                <p style={cssObj(`margin:0;font-size:13px;color:#8a7f72`)}>{new Date(post.createdAt).toLocaleDateString('ko-KR')}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

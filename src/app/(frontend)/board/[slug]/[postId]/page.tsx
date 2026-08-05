import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { getAuthorizedBoard } from '@/lib/board-auth'
import { MembersOnlyGate } from '@/components/site/MembersOnlyGate'
import { RichTextRenderer } from '@/components/site/RichTextRenderer'

type MediaLike = { url?: string | null } | string | null | undefined

function imgUrl(image: MediaLike): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return image.url ?? undefined
}

export default async function BoardPostPage({ params }: { params: Promise<{ slug: string; postId: string }> }) {
  const { slug, postId } = await params
  const { board, authorized } = await getAuthorizedBoard(slug)
  if (!board) notFound()
  if (!authorized) return <MembersOnlyGate boardName={board.name} returnTo={`/board/${slug}/${postId}`} />

  const payload = await getPayloadClient()
  const post = await payload.findByID({ collection: 'board-posts', id: postId, depth: 1 }).catch(() => null)
  if (!post || (typeof post.board === 'object' ? post.board.id : post.board) !== board.id) notFound()

  return (
    <div style={cssObj(`min-height:100vh;padding:calc(85px + clamp(50px,8vw,80px)) clamp(22px,6vw,80px) clamp(60px,8vw,100px)`)}>
      <div style={cssObj(`max-width:760px;margin:0 auto`)}>
        <Link href={`/board/${slug}`} style={cssObj(`display:inline-block;margin-bottom:32px;font-size:13.5px;color:#8a7f72`)}>
          ← {board.name} 목록으로
        </Link>
        <h1 style={cssObj(`margin:0 0 12px;font-size:clamp(24px,3.6vw,32px);font-weight:500`)}>{post.title}</h1>
        <p style={cssObj(`margin:0 0 40px;font-size:13px;color:#8a7f72`)}>
          {new Date(post.createdAt).toLocaleDateString('ko-KR')}
        </p>

        {post.images && post.images.length > 0 && (
          <div style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:32px`)}>
            {post.images.map((item: { image?: MediaLike }, i: number) =>
              imgUrl(item.image) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={imgUrl(item.image)}
                  alt=""
                  style={cssObj(`width:100%;aspect-ratio:4/3;object-fit:cover;display:block`)}
                />
              ) : null,
            )}
          </div>
        )}

        <div style={cssObj(`font-size:15.5px;line-height:2;color:#443a35`)}>
          <RichTextRenderer data={post.content} />
        </div>
      </div>
    </div>
  )
}

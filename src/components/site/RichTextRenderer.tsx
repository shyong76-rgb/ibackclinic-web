import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

function toEmbedUrl(url: string): string {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return url
}

export function RichTextRenderer({ data }: { data: SerializedEditorState | null | undefined }) {
  if (!data) return null
  return (
    <RichText
      data={data}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        blocks: {
          videoEmbed: ({ node }: { node: { fields: { url: string } } }) => (
            <div style={{ position: 'relative', paddingTop: '56.25%', margin: '28px 0' }}>
              <iframe
                src={toEmbedUrl(node.fields.url as string)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          ),
        },
      })}
    />
  )
}

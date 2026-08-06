import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://ibackclinic-web.vercel.app'
  const staticPaths = ['/', '/reservation', '/location']

  let procedureSlugs: string[] = []
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({ collection: 'procedures', limit: 100, select: { slug: true } })
    procedureSlugs = res.docs.map((d) => d.slug as string)
  } catch {
    procedureSlugs = []
  }

  return [
    ...staticPaths.map((path) => ({ url: `${base}${path}`, changeFrequency: 'weekly' as const })),
    ...procedureSlugs.map((slug) => ({ url: `${base}/procedures/${slug}`, changeFrequency: 'weekly' as const })),
  ]
}

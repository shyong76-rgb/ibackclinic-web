import fs from 'fs/promises'
import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

// 임시 라우트 — 로컬 개발서버에서 업로드된 procedures.heroImage가 로컬 디스크에만 저장되어
// 운영(Vercel Blob)에서 깨지는 문제 수정. 이 라우트는 반드시 "운영 배포 후" 운영 주소로
// 호출해야 한다(로컬로 호출하면 다시 로컬 디스크에 저장되어 의미 없음).
// 적용 후 이 파일은 삭제하고 재배포한다.

export const maxDuration = 60

const BASE = 'https://d8j0ntlcm91z4.cloudfront.net/user_3HOgJpo09zCNKnNhwzuIRvuFdRO'

const TARGETS: { slug: string; file: string }[] = [
  { slug: 'cling-signature', file: 'hf_20260806_043041_14215ac1-8359-4680-a3a6-c51b8b895e70.png' },
  { slug: 'wave-on-lifting', file: 'hf_20260806_035323_a5ae78ca-e847-4269-866a-a2e3fae510ba.png' },
  { slug: 'acne-care', file: 'hf_20260806_035323_7af78b58-a116-440f-b3bf-d3db18461e8d.png' },
  { slug: 'hydration-care', file: 'hf_20260806_035323_7010209c-4ff1-40ce-9fbb-b25b82351bab.png' },
  { slug: 'collagen-velvet', file: 'hf_20260806_035323_bd705e39-2fd1-43a8-b30d-0e1ff93591eb.png' },
  { slug: 'peeling', file: 'hf_20260806_035323_cd20885b-ab3a-4973-b0d1-66c7d8ff5452.png' },
  { slug: 'revelook', file: 'hf_20260806_035323_5af593c9-4266-4bd8-adce-d32d17c66347.png' },
]

async function fixOne(t: { slug: string; file: string }) {
  const payload = await getPayloadClient()
  const res = await fetch(`${BASE}/${t.file}`)
  if (!res.ok) return `${t.slug}: fetch failed ${res.status}`

  const buf = Buffer.from(await res.arrayBuffer())
  const tmpPath = `/tmp/fix-${t.slug}.png`
  await fs.writeFile(tmpPath, buf)

  const media = await payload.create({
    collection: 'media',
    filePath: tmpPath,
    data: { alt: `${t.slug} 관리 이미지` },
  })

  const existing = await payload.find({ collection: 'procedures', where: { slug: { equals: t.slug } }, limit: 1 })
  await fs.unlink(tmpPath).catch(() => {})
  if (!existing.docs[0]) return `${t.slug}: procedure not found`

  await payload.update({ collection: 'procedures', id: existing.docs[0].id, data: { heroImage: media.id } })
  return `${t.slug}: ok (media ${media.id})`
}

export async function GET() {
  const settled = await Promise.allSettled(TARGETS.map(fixOne))
  const results = settled.map((r, i) => (r.status === 'fulfilled' ? r.value : `${TARGETS[i].slug}: ERROR ${String(r.reason)}`))
  return NextResponse.json({ ok: true, results })
}

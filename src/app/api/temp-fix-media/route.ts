import fs from 'fs/promises'
import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

// 임시 라우트 — 로컬 개발서버에서 업로드된 procedures.heroImage가 로컬 디스크에만 저장되어
// 운영(Vercel Blob)에서 깨지는 문제 수정. 이 라우트는 반드시 "운영 배포 후" 운영 주소로
// 호출해야 한다(로컬로 호출하면 다시 로컬 디스크에 저장되어 의미 없음).
// 적용 후 이 파일은 삭제하고 재배포한다.

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

export async function GET() {
  const payload = await getPayloadClient()
  const results: string[] = []

  for (const t of TARGETS) {
    const res = await fetch(`${BASE}/${t.file}`)
    if (!res.ok) {
      results.push(`${t.slug}: fetch failed ${res.status}`)
      continue
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const tmpPath = `/tmp/${t.file}`
    await fs.writeFile(tmpPath, buf)

    const media = await payload.create({
      collection: 'media',
      filePath: tmpPath,
      data: { alt: `${t.slug} 관리 이미지` },
    })

    const existing = await payload.find({ collection: 'procedures', where: { slug: { equals: t.slug } }, limit: 1 })
    if (!existing.docs[0]) {
      results.push(`${t.slug}: procedure not found`)
      continue
    }
    await payload.update({ collection: 'procedures', id: existing.docs[0].id, data: { heroImage: media.id } })
    results.push(`${t.slug}: ok (media ${media.id})`)

    await fs.unlink(tmpPath).catch(() => {})
  }

  return NextResponse.json({ ok: true, results })
}

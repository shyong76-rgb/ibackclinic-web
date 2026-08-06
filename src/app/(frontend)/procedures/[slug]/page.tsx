import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { RichTextRenderer } from '@/components/site/RichTextRenderer'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'

type MediaLike = { url?: string | null; alt?: string | null } | string | null | undefined
const imgUrl = (m: MediaLike) => (typeof m === 'string' ? m : m?.url ?? undefined)

async function getProcedure(slug: string) {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'procedures', where: { slug: { equals: slug } }, depth: 2, limit: 1 })
  return res.docs[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = await getProcedure(slug)
  if (!p) return {}
  const title = `${p.name} | 클링 에스테틱${p.targetKeyword ? ` — ${p.targetKeyword}` : ''}`
  const description = p.summary || `클링 에스테틱 ${p.name} 안내`
  return { title, description }
}

export default async function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await getProcedure(slug)
  if (!p) notFound()

  const hero = imgUrl(p.heroImage as MediaLike)
  const composition = (p.composition ?? []) as { name: string }[]
  const steps = (p.procedureSteps ?? []) as { title: string; description?: string | null; image?: MediaLike }[]
  const effects = (p.effects ?? []) as { text: string }[]
  const targetAudience = (p.targetAudience ?? []) as { text: string }[]
  const beforeAfter = (p.beforeAfterImages ?? []) as { before?: MediaLike; after?: MediaLike; caption?: string | null }[]
  const productImages = (p.productImages ?? []) as { image?: MediaLike; caption?: string | null }[]
  const faq = (p.faq ?? []) as { q?: string | null; a?: string | null }[]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.name,
    description: p.summary,
    provider: {
      '@type': 'LocalBusiness',
      name: '클링 에스테틱',
      address: '서울 성동구 왕십리로 369 동인레반트오피스텔 1층',
      telephone: '0507-1386-2479',
    },
    ...(faq.length
      ? {}
      : {}),
  }
  const faqJsonLd = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <div style={{ minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <section style={{ position: 'relative', height: 'clamp(320px,52vw,560px)', marginTop: 85, overflow: 'hidden', background: 'var(--color-ivory)' }}>
        {hero && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hero} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
        <div style={cssObj(`position:absolute;left:0;right:0;bottom:0;padding:clamp(24px,4vw,48px) clamp(22px,6vw,80px);background:linear-gradient(transparent,rgba(51,27,15,.55))`)}>
          <h1 style={cssObj(`margin:0;color:#fff;font-size:clamp(28px,4.4vw,48px);font-weight:400`)}>{p.name}</h1>
          {p.summary && <p style={cssObj(`margin:10px 0 0;color:#f3e9e6;font-size:clamp(14px,1.6vw,16px)`)}>{p.summary}</p>}
        </div>
      </section>

      {p.body && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0;font-size:15.5px;line-height:2;color:var(--color-ink-soft)`)}>
          <RichTextRenderer data={p.body} />
        </section>
      )}

      {composition.length > 0 && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(40px,6vw,70px) clamp(22px,6vw,40px) 0`)}>
          <Reveal as="h2" style={cssObj(`margin:0 0 20px;font-size:clamp(20px,2.6vw,26px);font-weight:400`)}>
            구성
          </Reveal>
          <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:0`)}>
            {composition.map((c, i) => (
              <li key={i} style={cssObj(`padding:16px 0;border-top:1px solid var(--color-hairline);font-size:15px`)}>
                {c.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {steps.length > 0 && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0`)}>
          <Reveal as="h2" style={cssObj(`margin:0 0 30px;font-size:clamp(20px,2.6vw,26px);font-weight:400`)}>
            시술 순서
          </Reveal>
          <div style={cssObj(`display:grid;gap:clamp(24px,3vw,36px)`)}>
            {steps.map((s, i) => (
              <Reveal key={i} style={cssObj(`display:grid;gap:14px`)}>
                <div style={cssObj(`display:flex;gap:20px;align-items:flex-start`)}>
                  <span style={cssObj(`font-family:Poppins,sans-serif;font-size:clamp(20px,2.4vw,26px);color:var(--color-accent);white-space:nowrap`)}>
                    {s.title}
                  </span>
                </div>
                {s.description && <p style={cssObj(`margin:0;padding-left:0;font-size:15px;line-height:1.9;color:var(--color-ink-soft)`)}>{s.description}</p>}
                {imgUrl(s.image) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imgUrl(s.image)} alt={s.title} style={cssObj(`width:100%;max-width:420px;aspect-ratio:4/3;object-fit:cover`)} />
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {(effects.length > 0 || targetAudience.length > 0) && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(24px,4vw,40px)`)}>
          {effects.length > 0 && (
            <div>
              <h2 style={cssObj(`margin:0 0 16px;font-size:clamp(18px,2.2vw,22px);font-weight:400`)}>시술 효과</h2>
              <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:10px`)}>
                {effects.map((e, i) => (
                  <li key={i} style={cssObj(`font-size:14.5px;color:var(--color-ink-soft)`)}>
                    · {e.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {targetAudience.length > 0 && (
            <div>
              <h2 style={cssObj(`margin:0 0 16px;font-size:clamp(18px,2.2vw,22px);font-weight:400`)}>이런 분께 추천해요</h2>
              <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:10px`)}>
                {targetAudience.map((t, i) => (
                  <li key={i} style={cssObj(`font-size:14.5px;color:var(--color-ink-soft)`)}>
                    · {t.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0`)}>
        <h2 style={cssObj(`margin:0 0 20px;font-size:clamp(20px,2.6vw,26px);font-weight:400`)}>전후사진</h2>
        {beforeAfter.length > 0 ? (
          <div style={cssObj(`display:grid;gap:24px`)}>
            {beforeAfter.map((b, i) => (
              <div key={i} style={cssObj(`display:grid;grid-template-columns:1fr 1fr;gap:8px`)}>
                <div>
                  {imgUrl(b.before) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl(b.before)} alt="시술 전" style={cssObj(`width:100%;aspect-ratio:1;object-fit:cover`)} />
                  ) : (
                    <div style={cssObj(`width:100%;aspect-ratio:1;background:var(--color-ivory);display:flex;align-items:center;justify-content:center;color:var(--color-caption);font-size:13px`)}>전 · 촬영 예정</div>
                  )}
                </div>
                <div>
                  {imgUrl(b.after) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl(b.after)} alt="시술 후" style={cssObj(`width:100%;aspect-ratio:1;object-fit:cover`)} />
                  ) : (
                    <div style={cssObj(`width:100%;aspect-ratio:1;background:var(--color-ivory);display:flex;align-items:center;justify-content:center;color:var(--color-caption);font-size:13px`)}>후 · 촬영 예정</div>
                  )}
                </div>
                {b.caption && <p style={cssObj(`grid-column:1/-1;margin:0;font-size:13px;color:var(--color-caption)`)}>{b.caption}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div style={cssObj(`padding:clamp(30px,5vw,50px);background:var(--color-ivory);text-align:center;color:var(--color-caption);font-size:14px`)}>
            전후사진은 순차적으로 업데이트될 예정입니다.
          </div>
        )}
      </section>

      {productImages.length > 0 && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0`)}>
          <h2 style={cssObj(`margin:0 0 20px;font-size:clamp(20px,2.6vw,26px);font-weight:400`)}>제품 · 기기</h2>
          <div style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px`)}>
            {productImages.map((pi, i) => (
              <div key={i}>
                {imgUrl(pi.image) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imgUrl(pi.image)} alt={pi.caption ?? p.name} style={cssObj(`width:100%;aspect-ratio:1;object-fit:cover`)} />
                )}
                {pi.caption && <p style={cssObj(`margin:8px 0 0;font-size:13px;color:var(--color-caption)`)}>{pi.caption}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section style={cssObj(`max-width:760px;margin:0 auto;padding:clamp(50px,7vw,90px) clamp(22px,6vw,40px) 0`)}>
          <h2 style={cssObj(`margin:0 0 20px;font-size:clamp(20px,2.6vw,26px);font-weight:400`)}>자주 묻는 질문</h2>
          <div style={cssObj(`display:grid;gap:0`)}>
            {faq.map((f, i) => (
              <div key={i} style={cssObj(`padding:20px 0;border-top:1px solid var(--color-hairline)`)}>
                <p style={cssObj(`margin:0 0 8px;font-size:15px;font-weight:500`)}>Q. {f.q}</p>
                <p style={cssObj(`margin:0;font-size:14.5px;color:var(--color-ink-soft);line-height:1.8`)}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={cssObj(`text-align:center;padding:clamp(70px,9vw,120px) clamp(22px,6vw,40px)`)}>
        <HoverLink
          href="/reservation"
          css="display:inline-block;font-size:15px;padding:17px 40px;background:var(--color-dark);color:#fff"
          hoverCss="background:var(--color-accent)"
        >
          예약 문의하기 →
        </HoverLink>
        <p style={cssObj(`margin:16px 0 0;font-size:12.5px;color:var(--color-caption)`)}>
          ※ 시술 효과는 개인의 피부 상태에 따라 차이가 있을 수 있습니다. <Link href="/location" style={{ textDecoration: 'underline' }}>오시는길 보기</Link>
        </p>
      </section>
    </div>
  )
}

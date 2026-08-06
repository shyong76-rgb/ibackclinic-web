import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { cssObj } from '@/lib/css'
import { getPayloadClient } from '@/lib/payload'
import { RichTextRenderer } from '@/components/site/RichTextRenderer'
import { Reveal } from '@/components/site/Reveal'
import { HoverLink } from '@/components/site/HoverLink'

type MediaLike = { url?: string | null; alt?: string | null } | string | null | undefined
const imgUrl = (m: MediaLike) => (typeof m === 'string' ? m : m?.url ?? undefined)

const PlaceholderBox = ({ label, ratio = '4/3' }: { label: string; ratio?: string }) => (
  <div style={cssObj(`width:100%;aspect-ratio:${ratio};background:#ece8e4;display:flex;align-items:center;justify-content:center;padding:14px`)}>
    <span style={cssObj(`font-family:ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.06em;color:#a09790;text-align:center;line-height:1.7`)}>
      {label}
      <br />
      촬영 예정
    </span>
  </div>
)

async function getProcedure(slug: string) {
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'procedures', where: { slug: { equals: slug } }, depth: 2, limit: 1 })
  return res.docs[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = await getProcedure(slug)
  if (!p) return {}
  return {
    title: `${p.name} | 클링 에스테틱${p.targetKeyword ? ` — ${p.targetKeyword}` : ''}`,
    description: p.summary || `클링 에스테틱 ${p.name} 안내`,
  }
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
  }
  const faqJsonLd = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null

  return (
    <div style={{ minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <section style={cssObj(`padding:calc(78px + clamp(52px,9vw,110px)) clamp(22px,6vw,48px) clamp(44px,6vw,74px);text-align:center`)}>
        <div style={cssObj(`max-width:900px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0 0 clamp(18px,2.6vw,26px);font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            {p.targetKeyword?.toUpperCase() || p.name}
          </Reveal>
          <Reveal as="h1" style={cssObj(`margin:0;font-size:clamp(32px,6vw,72px);font-weight:600;line-height:1.06;letter-spacing:-.02em`)}>
            {p.name}
          </Reveal>
          {p.summary && (
            <Reveal as="p" style={cssObj(`margin:clamp(18px,2.4vw,26px) auto 0;max-width:30em;font-size:clamp(16px,2.1vw,22px);font-weight:400;line-height:1.6;color:#4b4b4b`)}>
              {p.summary}
            </Reveal>
          )}
          <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:clamp(28px,3.6vw,40px)`)}>
            <HoverLink href="/reservation" css="font-size:15px;padding:16px 34px;background:#331b0f;color:#fff;min-height:44px" hoverCss="background:#d08c81">
              예약 문의하기
            </HoverLink>
          </Reveal>
        </div>
      </section>

      {hero && (
        <Reveal style={cssObj(`width:100%;height:clamp(220px,32vw,420px);overflow:hidden`)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero} alt={`${p.name} 관리 이미지`} style={cssObj(`width:100%;height:100%;object-fit:cover;object-position:center center;display:block`)} />
        </Reveal>
      )}

      {p.heroStatNumber && (
        <section style={cssObj(`padding:clamp(56px,8vw,110px) clamp(22px,6vw,48px);text-align:center`)}>
          <Reveal style={cssObj(`max-width:1200px;margin:0 auto;padding-top:clamp(34px,5vw,60px);border-top:1px solid #e8e4e1`)}>
            <p style={cssObj(`margin:0;font-size:clamp(72px,14vw,180px);font-weight:500;line-height:.9;letter-spacing:-.03em`)}>{p.heroStatNumber}</p>
            {p.heroStatCaption && <p style={cssObj(`margin:clamp(16px,2.2vw,26px) 0 0;font-size:clamp(17px,2.2vw,24px);font-weight:400;color:#4b4b4b`)}>{p.heroStatCaption}</p>}
          </Reveal>
        </section>
      )}

      {(p.aboutHeadline || p.body) && (
        <section style={cssObj(`background:#f7f5f3;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
            <Reveal>
              <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>ABOUT THE CARE</p>
              {p.aboutHeadline && <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,32px);font-weight:500;line-height:1.5`)}>{p.aboutHeadline}</h2>}
            </Reveal>
            {p.body && (
              <Reveal style={cssObj(`display:grid;gap:clamp(18px,2.4vw,26px);font-size:clamp(14.5px,1.7vw,16px);line-height:2.05;color:#4b4b4b`)}>
                <RichTextRenderer data={p.body} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {composition.length > 0 && (
        <section style={cssObj(`padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
            <Reveal>
              <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>PROGRAM</p>
              <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,32px);font-weight:500;line-height:1.5`)}>구성</h2>
              <p style={cssObj(`margin:16px 0 0;font-size:13.5px;line-height:1.9;color:#8a7f78`)}>가격은 피부 상태와 관리 방향에 따라 달라져 상담 후 안내드립니다.</p>
            </Reveal>
            <Reveal as="ul" style={cssObj(`margin:0;padding:0;list-style:none`)}>
              {composition.map((c, i) => (
                <li key={i} style={cssObj(`display:flex;gap:12px;font-size:15px;line-height:1.9;padding:14px 0;border-top:1px solid #e8e4e1`)}>
                  <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#d08c81`)} />
                  <span>{c.name}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {steps.length > 0 && (
        <section style={cssObj(`background:#f7f5f3;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:1200px;margin:0 auto`)}>
            <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
              PROCESS
            </Reveal>
            <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(30px,4vw,48px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
              시술 순서
            </Reveal>
            {steps.map((s, i, arr) => (
              <Reveal
                key={i}
                style={cssObj(
                  `display:flex;flex-wrap:wrap;gap:clamp(14px,3vw,40px);align-items:baseline;padding:clamp(24px,3.2vw,38px) 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`,
                )}
              >
                <span style={cssObj(`font-size:clamp(30px,4.4vw,54px);font-weight:500;line-height:1;color:#d08c81;min-width:2.6em`)}>{s.title.match(/^\d+\//)?.[0] ?? `${i + 1}/`}</span>
                <span style={cssObj(`flex:0 1 12em;font-size:clamp(16px,1.9vw,20px);font-weight:500`)}>{s.title.replace(/^\d+\/\s*/, '')}</span>
                {s.description && <span style={cssObj(`flex:1 1 300px;font-size:14.5px;line-height:2;color:#4b4b4b`)}>{s.description}</span>}
              </Reveal>
            ))}
            <Reveal style={cssObj(`margin-top:clamp(28px,3.6vw,44px);display:grid;grid-template-columns:repeat(${steps.length},minmax(0,1fr));gap:clamp(10px,1.4vw,16px)`)}>
              {steps.map((s, i) => (
                <div key={i}>
                  <p style={cssObj(`margin:0 0 10px;display:flex;gap:8px;align-items:baseline;font-size:13px;color:#8a7f78`)}>
                    <span style={cssObj(`font-size:16px;font-weight:500;color:#d08c81`)}>{s.title.match(/^\d+\//)?.[0] ?? `${i + 1}/`}</span>
                    <span>{s.title.replace(/^\d+\/\s*/, '')}</span>
                  </p>
                  {imgUrl(s.image) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl(s.image)} alt={s.title} style={cssObj(`width:100%;aspect-ratio:4/3;object-fit:cover;display:block`)} />
                  ) : (
                    <PlaceholderBox label={`PHOTO ${String(i + 1).padStart(2, '0')}`} />
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {(effects.length > 0 || targetAudience.length > 0) && (
        <section style={cssObj(`padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:clamp(34px,5vw,72px)`)}>
            {effects.length > 0 && (
              <Reveal style={cssObj(`padding-top:clamp(20px,2.6vw,28px);border-top:1px solid #331b0f`)}>
                <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>RESULT</p>
                <h2 style={cssObj(`margin:14px 0 clamp(22px,3vw,30px);font-size:clamp(19px,2.4vw,26px);font-weight:500`)}>시술 효과</h2>
                <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:13px`)}>
                  {effects.map((e, i) => (
                    <li key={i} style={cssObj(`display:flex;gap:12px;font-size:15px;line-height:1.95;color:#4b4b4b`)}>
                      <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#d08c81`)} />
                      <span>{e.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {targetAudience.length > 0 && (
              <Reveal style={cssObj(`padding-top:clamp(20px,2.6vw,28px);border-top:1px solid #e8e4e1`)}>
                <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>FOR YOU</p>
                <h2 style={cssObj(`margin:14px 0 clamp(22px,3vw,30px);font-size:clamp(19px,2.4vw,26px);font-weight:500`)}>이런 분께 추천해요</h2>
                <ul style={cssObj(`margin:0;padding:0;list-style:none;display:grid;gap:13px`)}>
                  {targetAudience.map((t, i) => (
                    <li key={i} style={cssObj(`display:flex;gap:12px;font-size:15px;line-height:1.95;color:#4b4b4b`)}>
                      <span style={cssObj(`flex:none;width:4px;height:4px;margin-top:11px;border-radius:50%;background:#d08c81`)} />
                      <span>{t.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section style={cssObj(`background:#f7f5f3;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
        <div style={cssObj(`max-width:1200px;margin:0 auto`)}>
          <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
            BEFORE &amp; AFTER
          </Reveal>
          <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
            전후사진
          </Reveal>
          {p.photoNote && (
            <Reveal style={cssObj(`margin-top:clamp(26px,3.4vw,40px);padding-top:clamp(20px,2.6vw,28px);border-top:1px solid #e8e4e1;display:grid;gap:10px;max-width:46em`)}>
              <p style={cssObj(`margin:0;font-size:12px;letter-spacing:.16em;color:#8a7f78`)}>PHOTO NOTE</p>
              <p style={cssObj(`margin:0;font-size:clamp(15px,1.8vw,17px);line-height:1.9`)}>{p.photoNote}</p>
              <p style={cssObj(`margin:0;font-size:12.5px;line-height:1.85;color:#8a7f78`)}>
                ※ 동일 조명·동일 각도에서 촬영하며, 보정은 하지 않습니다. 결과는 개인의 피부 상태에 따라 차이가 있을 수 있습니다.
              </p>
            </Reveal>
          )}
          <Reveal style={cssObj(`margin-top:clamp(26px,3.4vw,40px);display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(10px,1.4vw,16px)`)}>
            {beforeAfter.length > 0 ? (
              beforeAfter.map((b, i) => (
                <div key={i} style={cssObj(`display:grid;grid-template-columns:1fr 1fr;gap:8px`)}>
                  <div>
                    <p style={cssObj(`margin:0 0 10px;font-size:12px;letter-spacing:.16em;color:#8a7f78`)}>BEFORE</p>
                    {imgUrl(b.before) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imgUrl(b.before)} alt="시술 전" style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover`)} />
                    ) : (
                      <PlaceholderBox label="" ratio="3/4" />
                    )}
                  </div>
                  <div>
                    <p style={cssObj(`margin:0 0 10px;font-size:12px;letter-spacing:.16em;color:#d08c81`)}>AFTER</p>
                    {imgUrl(b.after) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imgUrl(b.after)} alt="시술 후" style={cssObj(`width:100%;aspect-ratio:3/4;object-fit:cover`)} />
                    ) : (
                      <PlaceholderBox label="" ratio="3/4" />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <>
                <div>
                  <p style={cssObj(`margin:0 0 10px;font-size:12px;letter-spacing:.16em;color:#8a7f78`)}>BEFORE</p>
                  <PlaceholderBox label="" ratio="3/4" />
                </div>
                <div>
                  <p style={cssObj(`margin:0 0 10px;font-size:12px;letter-spacing:.16em;color:#d08c81`)}>AFTER</p>
                  <PlaceholderBox label="" ratio="3/4" />
                </div>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {(p.productNote || productImages.length > 0) && (
        <section style={cssObj(`padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(34px,5vw,72px);align-items:start`)}>
            <Reveal>
              <p style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>PRODUCT &amp; DEVICE</p>
              <h2 style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 0;font-size:clamp(21px,2.8vw,32px);font-weight:500;line-height:1.5`)}>사용 제품 · 기기</h2>
              {p.productNote && <p style={cssObj(`margin:16px 0 0;font-size:14.5px;line-height:2;color:#4b4b4b`)}>{p.productNote}</p>}
            </Reveal>
            <Reveal style={cssObj(`display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:clamp(10px,1.4vw,16px)`)}>
              {productImages.length > 0
                ? productImages.map((pi, i) =>
                    imgUrl(pi.image) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={imgUrl(pi.image)} alt={pi.caption ?? p.name} style={cssObj(`width:100%;aspect-ratio:1/1;object-fit:cover`)} />
                    ) : (
                      <PlaceholderBox key={i} label="PRODUCT" ratio="1/1" />
                    ),
                  )
                : [0, 1, 2].map((i) => <PlaceholderBox key={i} label={i === 0 ? 'DEVICE 01' : `PRODUCT 0${i}`} ratio="1/1" />)}
            </Reveal>
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section style={cssObj(`background:#f7f5f3;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px)`)}>
          <div style={cssObj(`max-width:900px;margin:0 auto`)}>
            <Reveal as="p" style={cssObj(`margin:0;font-size:11.5px;letter-spacing:.3em;color:#d08c81`)}>
              FAQ
            </Reveal>
            <Reveal as="h2" style={cssObj(`margin:clamp(16px,2.2vw,24px) 0 clamp(26px,3.4vw,40px);font-size:clamp(22px,3vw,36px);font-weight:500;line-height:1.4`)}>
              자주 묻는 질문
            </Reveal>
            {faq.map((f, i, arr) => (
              <Reveal
                key={i}
                style={cssObj(`padding:clamp(22px,3vw,30px) 0;border-top:1px solid #e8e4e1${i === arr.length - 1 ? ';border-bottom:1px solid #e8e4e1' : ''}`)}
              >
                <p style={cssObj(`margin:0;font-size:clamp(15.5px,1.8vw,17.5px);font-weight:500`)}>Q. {f.q}</p>
                <p style={cssObj(`margin:12px 0 0;font-size:14.5px;line-height:2;color:#4b4b4b`)}>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section style={cssObj(`background:#2d1c14;color:#f6f1ee;padding:clamp(70px,10vw,130px) clamp(22px,6vw,48px);text-align:center`)}>
        <Reveal as="h2" style={cssObj(`margin:0;font-size:clamp(24px,3.6vw,42px);font-weight:400;line-height:1.45`)}>
          피부 상태에 맞는 방향부터
          <br />
          1:1로 상담해 드립니다.
        </Reveal>
        <Reveal style={cssObj(`display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:clamp(28px,3.6vw,42px)`)}>
          <HoverLink href="/reservation" css="font-size:15px;padding:17px 34px;background:#d08c81;color:#fff;min-height:44px" hoverCss="background:#f6f1ee;color:#2d1c14">
            예약 문의하기
          </HoverLink>
          <a
            href="tel:0507-1386-2479"
            style={cssObj(`font-size:15px;padding:17px 34px;border:1px solid rgba(246,241,238,.4);color:#f6f1ee;min-height:44px;display:inline-flex;align-items:center;justify-content:center`)}
          >
            0507-1386-2479
          </a>
        </Reveal>
      </section>
    </div>
  )
}
